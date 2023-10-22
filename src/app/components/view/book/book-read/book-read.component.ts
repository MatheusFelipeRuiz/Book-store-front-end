import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Category } from '../../category/category.model';
import { CategoryService } from '../../category/category.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent {
  books: Book[] = [];

  category: Category = {
    id: String(this.route.snapshot.queryParamMap.get('categoria')),
    name: '',
    description: ''
  }

  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes']

  constructor(
    private router: Router,
    private bookService: BookService,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.findAll();
    this.defineCategory();
  }

  defineCategory(): void {
    this.categoryService.findById(String(this.category.id)).subscribe((response) => {
      this.category.name = response.name;
    });
  }

  findAll(): void {
    this.bookService.findAll(String(this.category.id)).subscribe((book) => {
      this.books = book;
    })
  }

  createBook(): void {

  }
}
