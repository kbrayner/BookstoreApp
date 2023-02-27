import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateUpdateComponent } from './book-create-update/book-create-update.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'create', component: BookCreateUpdateComponent},
  {path: ':id', component: BookCreateUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
