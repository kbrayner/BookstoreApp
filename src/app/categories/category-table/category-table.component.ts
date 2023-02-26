import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {

  categories: Category[] = [
    { Id: 1, Name:'Romance' }
  ];
  displayedColumns = ['Name','Edit','Delete'];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.list();
  }

}
