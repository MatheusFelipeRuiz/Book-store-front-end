import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {
  book: Book = {
    title: '',
    description: ''
  }

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getBook();
  }

  getBook(): void {
    const id: string = String(this.route.snapshot.queryParamMap.get("categoria"));
  }
  cancel(): void {
    this.bookService.cancel();
    this.router.navigate(["livros"]);
  }
}
