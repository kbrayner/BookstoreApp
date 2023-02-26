import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {


  books: Book[] = [];

  constructor() {
    let book1 = new Book();
    book1.title = "Title1";
    book1.subtitle = "Subtitle1";
    book1.resume = "Resume1";

    let book2 = new Book();
    book2.title = "Title2";
    book2.subtitle = "Subtitle2";
    book2.resume = "Resume2";

    this.books = [book1,book2];
   }

  ngOnInit(): void {
  }

}
