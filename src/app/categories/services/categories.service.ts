import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  list(): Category[] {
    return [
      { Id: 1, Name:'Romance' }
    ];
  }
}
