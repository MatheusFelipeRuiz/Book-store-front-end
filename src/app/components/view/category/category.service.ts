import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "./category.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "environment/environment";
import { MatSnackBar } from "@angular/material/snack-bar";
import { validateHorizontalPosition } from "@angular/cdk/overlay";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    constructor(private http: HttpClient, private snack: MatSnackBar, private router: Router) { }
    baseURL: string = environment.apiUrl;

    findAll(): Observable<Category[]> {
        const url: string = `${this.baseURL}/categorias`;
        return this.http.get<Category[]>(url);
    }

    create(category: Category): Observable<Category> {
        const url: string = `${this.baseURL}/categorias`;
        return this.http.post<Category>(url, category);
    }

    message(msg: string): void {
        this.snack.open(`${msg}`, 'OK', {
            horizontalPosition: "center",
            verticalPosition: "bottom",
            duration: 4000
        })
    }

    cancel(): void {
        this.router.navigate(["categorias"]);
    }

    findById(id: string): Observable<Category> {
        const url: string = `${this.baseURL}/categorias/${id}`;
        return this.http.get<Category>(url)
    }

    delete(id: string): Observable<Category> {
        const url: string = `${this.baseURL}/categorias/${id}`;
        return this.http.delete<Category>(url);
    }

    edit(id: string, category: Category): void {
        const url: string = `${this.baseURL}/categorias/${id}`;
        this.http.put(url, category).subscribe((response) => {
            this.message("Categoria editada com sucesso!");
            this.router.navigate(["categorias"]);
        }, (err) => {
            console.log(err);
        });
    }

}