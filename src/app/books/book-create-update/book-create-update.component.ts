import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, first, of } from 'rxjs';
import { CategoriesService } from 'src/app/categories/services/categories.service';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';
import { Publisher } from 'src/app/model/publisher';
import { Writer } from 'src/app/model/writer';
import { PublishersService } from 'src/app/publishers/services/publishers.service';
import { WritersService } from 'src/app/writers/services/writers.service';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-create-update',
  templateUrl: './book-create-update.component.html',
  styleUrls: ['./book-create-update.component.scss'],
})
export class BookCreateUpdateComponent implements OnInit {
  // null means error, undefined means loading
  book: Book | null | undefined;
  writers: Writer[] | null | undefined;
  categories: Category[] | null | undefined;
  publishers: Publisher[] | null | undefined;
  selectedCategory: Category | null = null;
  selectedWriter: Writer | null = null;
  selectedPublisher: Publisher | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BooksService,
    private categoriesService: CategoriesService,
    private publishersService: PublishersService,
    private writersSevice: WritersService
  ) {
    this.book = undefined;
    this.getAllCategories();
    this.getAllPublishers();
    this.getAllWriters();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      // If we have an id, it's an UPDATE and we have to retrieve the book from API
      if (id) {
        this.bookService
          .getById(id)
          .pipe(
            first(),
            catchError((error) => {
              console.error(error);
              return of(null);
            })
          )
          .subscribe((book) => {
            this.book = book;
          });
        // Otherwise, we create an empty book. It's a CREATE
      } else {
        this.book = new Book();
      }
    });
  }

  getAllWriters() {
    this.writersSevice
      .list()
      .pipe(
        first(),
        catchError((error) => {
          console.error(error);
          return of(null);
        })
      )
      .subscribe((writers) => {
        this.writers = writers;
      });
  }

  getAllCategories() {
    this.categoriesService
      .list()
      .pipe(
        first(),
        catchError((error) => {
          console.error(error);
          return of(null);
        })
      )
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  getAllPublishers() {
    this.publishersService
      .list()
      .pipe(
        first(),
        catchError((error) => {
          console.error(error);
          return of(null);
        })
      )
      .subscribe((publishers) => {
        this.publishers = publishers;
      });
  }

  save(): void {
    console.log(this.book);
    if (this.book) {
      if (this.book.id) {
        console.log(this.book);
        this.bookService
          .edit(this.book.id, this.book)
          .pipe(first())
          .subscribe({
            next: (book) => {
              alert('Livro atualizado com sucesso!');
            },
            error: (error) => {
              alert('Não foi possível atualizar o livro!');
            },
          });
      } else {
        this.bookService
          .create(this.book)
          .pipe(first())
          .subscribe({
            next: (book) => {
              alert('Livro criado com sucesso!');
              this.router.navigate(['/categories']);
            },
            error: (error) => {
              alert('Não foi possível criar o livro!');
            },
          });
      }
    }
  }
}
