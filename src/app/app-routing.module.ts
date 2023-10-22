import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/view/home.component';
import { CategoryRead } from './components/view/category/category-read/category-read.component';
import { CategoryCreateComponent } from './components/view/category/category-create/category-create.component';
import { CategoryDeleteComponent } from './components/view/category/category-delete/category-delete.component';
import { CategoryEditComponent } from './components/view/category/category-edit/category-edit.component';
import { BookReadComponent } from './components/view/book/book-read/book-read.component';
import { BookDeleteComponent } from './components/view/book/book-delete/book-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoryRead
  },
  {
    path: 'categorias/create',
    component: CategoryCreateComponent
  },
  {
    path: 'categorias/delete/:id',
    component: CategoryDeleteComponent
  },
  {
    path: 'categorias/edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'livros',
    component: BookReadComponent
  },
  {
    path: 'livros/delete/:id',
    component: BookDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
