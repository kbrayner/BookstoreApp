import { Component, OnInit } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookNameFilter: string = '';
  booksDataSource: Book[] | undefined;

  constructor(private booksService: BooksService) {}

  subscribeBookList(books$: Observable<Book[]>) {
    books$?.pipe(first()).subscribe({
      next: (books) => {
        this.booksDataSource = books;
      },
      error: (error) => {
        this.booksDataSource = [];
        console.error('Erro ao carregar os livros:', error);
      },
    });
  }

  ngOnInit(): void {
    this.subscribeBookList(this.booksService.list());
  }

  onSubmit(): void {
    this.subscribeBookList(this.booksService.listByName(this.bookNameFilter));
  }
}
