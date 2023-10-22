import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  book: Book = {
    id: '',
    title: '',
    authorName: '',
    text: ''
  };

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.findById();
  }

  findById() {
    const id: string = String(this.route.snapshot.paramMap.get("id"));
    this.bookService.findById(id).subscribe((response) => {
      this.book.id = response.id;
      this.book.title = response.title;
      this.book.authorName = response.authorName;
      this.book.text = response.text;
    });
  }

  edit(): void {
    this.bookService.edit(this.book).subscribe((response) => {
      this.bookService.message("Edição concluída com sucesso!");
      const idCategory = this.route.snapshot.paramMap.get("id_category");
      const queryParams = { categoria: idCategory };
      this.router.navigate(["livros"], { queryParams });
    }, (err) => {
      console.log(err);
    });
  }

  cancel(): void {
    this.bookService.cancel();
  }

}
