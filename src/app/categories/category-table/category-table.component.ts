import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../model/category';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {

  @Input()
  categories$: Observable<Category[]> | null;
  displayedColumns = ['Name','Edit','Delete'];

  constructor() {
    this.categories$ = null;

  }

  ngOnInit(): void {

  }

}
