import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/view/home.component';
import { CategoryRead } from './components/view/category/category-read/category-read.component';
import { CategoryCreateComponent } from './components/view/category/category-create/category-create.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
