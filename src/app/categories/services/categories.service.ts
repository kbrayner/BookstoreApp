import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
