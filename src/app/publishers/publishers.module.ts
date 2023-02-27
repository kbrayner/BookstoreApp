import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PublishersRoutingModule } from './publishers-routing.module';
import { PublisherTableComponent } from './publisher-table/publisher-table.component';
import { PublisherListComponent } from './publisher-list/publisher-list.component';
import { PublisherCreateUpdateComponent } from './publisher-create-update/publisher-create-update.component';


@NgModule({
  declarations: [
    PublisherTableComponent,
    PublisherListComponent,
    PublisherCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    PublishersRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule
  ]
})
export class PublishersModule { }
