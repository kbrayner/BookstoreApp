import { NgModule } from '@angular/core';
import { CategoryTableComponent } from './category-table/category-table.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CategoryTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
