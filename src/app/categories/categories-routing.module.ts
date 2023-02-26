import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryCreateUpdateComponent } from './category-create-update/category-create-update.component';

const routes: Routes = [
  {path: '', component: CategoryListComponent},
  {path: 'create', component: CategoryCreateUpdateComponent},
  {path: ':id', component: CategoryCreateUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
