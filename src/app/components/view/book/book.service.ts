import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'environment/environment';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl: string = environment.apiUrl;
  idCategory: string = '';
  constructor(
    private http: HttpClient,
    private snack: MatSnackBar,
    private router: Router,
  ) { }


  findAll(id: string): Observable<Book[]> {
    const url: string = `${this.baseUrl}/livros?categoria=${id}`;
    this.idCategory = id;
    return this.http.get<Book[]>(url);
  }

  findById(id: string): Observable<Book> {
    const url: string = `${this.baseUrl}/livros/${id}`;
    return this.http.get<Book>(url);
  }

  deleteBook(id: string): Observable<void> {
    const url: string = `${this.baseUrl}/livros/${id}`;
    console.log(url);
    return this.http.delete<void>(url);
  }

  cancel(): void {
    const queryParams = { categoria: this.idCategory }
    this.router.navigate(["livros"], { queryParams });
  }
}
