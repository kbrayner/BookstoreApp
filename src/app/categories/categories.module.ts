import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryCreateUpdateComponent } from './category-create-update/category-create-update.component';


@NgModule({
  declarations: [
    CategoryTableComponent,
    CategoryListComponent,
    CategoryCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    CategoriesRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule
  ]
})
export class CategoriesModule { }
