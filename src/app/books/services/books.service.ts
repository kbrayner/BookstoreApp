import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, first, of, tap } from 'rxjs';
import { Book } from 'src/app/model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly API = 'https://localhost:7286/api/Book';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Book[]>(this.API)
    .pipe(
      first(),
      delay(2),
      tap(books => console.log(books)),
      catchError(error =>{
        console.error(error);
        return of([])
      })
    );
  }

  listByName(title: string) {
    // Setup title query parameter filter
    let params = new HttpParams().set('title', title);

    return this.httpClient.get<Book[]>(this.API, {params: params});
  }

  getById(id: number) {
    return this.httpClient.get<Book>(`${this.API}/${id}`);
  }

  create(book: Book) {
    return this.httpClient.post<Book>(this.API, book);
  }

  edit(id: number, book: Book) {
    return this.httpClient.put<Book>(`${this.API}/${id}`, book);
  }

  deleteById(id: number) {
    return this.httpClient.delete<number>(`${this.API}/${id}`);
  }
}
