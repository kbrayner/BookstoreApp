import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, first, of, tap } from 'rxjs';
import { Publisher } from 'src/app/model/publisher';

@Injectable({
  providedIn: 'root'
})
export class PublishersService {

  private readonly API = 'https://localhost:7286/api/Publisher';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Publisher[]>(this.API)
    .pipe(
      first(),
      delay(2),
      tap(publishers => console.log(publishers)),
      catchError(error =>{
        console.error(error);
        return of([])
      })
    );
  }

  listByName(name: string) {
    // Setup name query parameter filter
    let params = new HttpParams().set('name', name);

    return this.httpClient.get<Publisher[]>(this.API, {params: params});
  }

  getById(id: number) {
    return this.httpClient.get<Publisher>(`${this.API}/${id}`);
  }

  create(publisher: Publisher) {
    return this.httpClient.post<Publisher>(this.API, publisher);
  }

  edit(id: number, publisher: Publisher) {
    return this.httpClient.put<Publisher>(`${this.API}/${id}`, publisher);
  }

  deleteById(id: number) {
    return this.httpClient.delete<number>(`${this.API}/${id}`);
  }
}
