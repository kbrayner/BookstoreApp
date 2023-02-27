import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, first, of, tap } from 'rxjs';
import { Writer } from 'src/app/model/writer';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  private readonly API = 'https://localhost:7286/api/Writer';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Writer[]>(this.API)
    .pipe(
      first(),
      delay(2),
      tap(writers => console.log(writers)),
      catchError(error =>{
        console.error(error);
        return of([])
      })
    );
  }

  listByName(name: string) {
    // Setup name query parameter filter
    let params = new HttpParams().set('name', name);

    return this.httpClient.get<Writer[]>(this.API, {params: params});
  }

  getById(id: number) {
    return this.httpClient.get<Writer>(`${this.API}/${id}`);
  }

  create(writer: Writer) {
    return this.httpClient.post<Writer>(this.API, writer);
  }

  edit(id: number, writer: Writer) {
    return this.httpClient.put<Writer>(`${this.API}/${id}`, writer);
  }

  deleteById(id: number) {
    return this.httpClient.delete<number>(`${this.API}/${id}`);
  }
}
