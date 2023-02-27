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

import { WriterListComponent } from './writer-list/writer-list.component';
import { WriterTableComponent } from './writer-table/writer-table.component';
import { WritersRoutingModule } from './writers-routing.module';
import { WriterCreateUpdateComponent } from './writer-create-update/writer-create-update.component';


@NgModule({
  declarations: [
    WriterTableComponent,
    WriterListComponent,
    WriterCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    WritersRoutingModule,
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
export class WritersModule { }
