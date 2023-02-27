import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { BookCardComponent } from './book-card/book-card.component';
import { BookCreateUpdateComponent } from './book-create-update/book-create-update.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';


@NgModule({
  declarations: [
    BookCardComponent,
    BookListComponent,
    BookCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ]
})
export class BooksModule { }
