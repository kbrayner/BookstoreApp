import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublisherCreateUpdateComponent } from './publisher-create-update/publisher-create-update.component';
import { PublisherListComponent } from './publisher-list/publisher-list.component';

const routes: Routes = [
  {path: '', component: PublisherListComponent},
  {path: 'create', component: PublisherCreateUpdateComponent},
  {path: ':id', component: PublisherCreateUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishersRoutingModule { }
