import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../category/category.service';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { CategoryRead } from '../../category/category-read/category-read.component';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {
  idCategory: string = '';

  book: Book = {
    id: '',
    title: '',
    text: '',
  }

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getBook();
  }

  getBook(): void {
    this.book.id = String(this.route.snapshot.paramMap.get("id"));
    this.bookService.findById(this.book.id).subscribe((response) => {
      this.book.id = response.id;
      this.book.text = response.text;
      this.book.title = response.title;
      this.book.authorName = response.authorName;
    });
    console.log(this.book);
  }

  deleteBook(): void {
    const id: string = String(this.route.snapshot.paramMap.get("id"));
    this.bookService.deleteBook(id).subscribe((response) => {
      if (response == null) {
        const queryParams = { categoria: this.idCategory }
        this.router.navigate(["livros"], { queryParams });
      }
    }, (err) => {
      console.log(err);
    });
  }

  cancel(): void {
    this.bookService.cancel();
  }
}
