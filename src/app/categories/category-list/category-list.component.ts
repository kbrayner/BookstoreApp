import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Observable } from 'rxjs';
import { Category } from '../../model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryNameFilter: string = '';
  categories$: Observable<Category[]>;

  constructor(private categoriesService: CategoriesService) {
    this.categories$ = this.categoriesService.list();
   }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.categories$ = this.categoriesService.listByName(this.categoryNameFilter);
  }

}
