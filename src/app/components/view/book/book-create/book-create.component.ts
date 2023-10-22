import { Component } from '@angular/core';
import { Book } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  book: Book = {
    id: '',
    title: '',
    authorName: '',
    text: ''
  }

  constructor(
    private router: Router,
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  formatText(): void {
    this.book.authorName?.trim();
    this.book.text?.trim();
    this.book.title.trim();
  }

  create(): void {
    this.formatText();
    const id: string = String(this.route.snapshot.paramMap.get("id_category"));
    this.bookService.createBook(id, this.book).subscribe((response) => {
      this.bookService.message("Livro criado com sucesso!");
      const queryParams = { categoria: id };
      this.router.navigate(["livros"], { queryParams });
    }, (err) => {
      console.log(err);
    });
  }

  cancel(): void {
    this.bookService.cancel();
  }

}
