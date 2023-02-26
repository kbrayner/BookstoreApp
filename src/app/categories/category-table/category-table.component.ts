import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {

  categories$: Observable<Category[]>;
  displayedColumns = ['Name','Edit','Delete'];

  constructor(private categoriesService: CategoriesService) {

    this.categories$ = this.categoriesService.list();
  }

  ngOnInit(): void {

  }

}
