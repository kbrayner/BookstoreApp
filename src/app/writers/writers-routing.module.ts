import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WriterCreateUpdateComponent } from './writer-create-update/writer-create-update.component';
import { WriterListComponent } from './writer-list/writer-list.component';

const routes: Routes = [
  {path: '', component: WriterListComponent},
  {path: 'create', component: WriterCreateUpdateComponent},
  {path: ':id', component: WriterCreateUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritersRoutingModule { }
