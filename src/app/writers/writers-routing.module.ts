import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WriterListComponent } from './writer-list/writer-list.component';

const routes: Routes = [
  {path: '', component: WriterListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritersRoutingModule { }
