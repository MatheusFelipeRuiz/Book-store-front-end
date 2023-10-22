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

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar,
    private router: Router,
  ) { }


  findAll(id: string): Observable<Book[]> {
    const url: string = `${this.baseUrl}/livros?categoria=${id}`;
    return this.http.get<Book[]>(url);
  }

  cancel(): void {
    this.router.navigate(["livros"]);
  }
}
