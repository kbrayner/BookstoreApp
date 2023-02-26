import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Category } from '../../model/category';
import { catchError, delay, first, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly API = 'https://localhost:7286/api/Category';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Category[]>(this.API)
    .pipe(
      first(),
      delay(2),
      tap(categories => console.log(categories)),
      catchError(error =>{
        console.error(error);
        return of([])
      })
    );
  }

  listByName(name: string) {
    // Setup name query parameter filter
    let params = new HttpParams().set('name', name);

    return this.httpClient.get<Category[]>(this.API, {params: params});
  }

  getById(id: number) {
    return this.httpClient.get<Category>(`${this.API}/${id}`);
  }

  create(category: Category) {
    return this.httpClient.post<Category>(this.API, category);
  }

  edit(id: number, category: Category) {
    return this.httpClient.put<Category>(`${this.API}/${id}`, category);
  }

  deleteById(id: number) {
    return this.httpClient.delete<number>(`${this.API}/${id}`);
  }
}
