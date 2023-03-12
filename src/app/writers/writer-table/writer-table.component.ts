import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { first, Observable } from 'rxjs';
import { Writer } from 'src/app/model/writer';

import { WritersService } from '../services/writers.service';

@Component({
  selector: 'app-writer-table',
  templateUrl: './writer-table.component.html',
  styleUrls: ['./writer-table.component.scss']
})
export class WriterTableComponent implements OnChanges {

  @Input()
  writers$: Observable<Writer[]> | null;
  writersDataSource: Writer[] | undefined;
  displayedColumns = ['Name', 'Edit', 'Delete'];
  @ViewChild(MatTable) table!: MatTable<Writer>;

  constructor(private service: WritersService) {
    this.writers$ = null;
    this.writersDataSource = undefined;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['writers$']) {
      this.subscribeWriterList();
    }
  }

  subscribeWriterList(): void {
    this.writers$?.pipe(first()).subscribe({
      next: (writers) => {
        this.writersDataSource = writers;
      },
      error: (error) => {
        this.writersDataSource = [];
        console.error('Erro ao carregar os autores:', error);
      },
    });
  }

  onDeleteClick(id: number, writerName: string) {
    const confirmDelete = confirm(`Tem certeza que deseja deletar o autor ${writerName}?`);
    if(confirmDelete) {
      this.deleteById(id);
    }
  }

  deleteById(id: number): void {
    this.service
      .deleteById(id)
      .pipe(first())
      .subscribe({
        next: () => {
          if(this.writersDataSource) {
            const writerFoundIndex = this.writersDataSource.findIndex(writer => writer.id == id);
            // If we found the writer
            if(writerFoundIndex >= 0) {
              this.writersDataSource.splice(writerFoundIndex, 1);
              this.table.renderRows();
            }
          }
          alert(`Autor removido com sucesso!`);
        },
        error: (error) => {
          alert('Não foi possível remover o autor!');
          console.error(error);
        }
      });
  }
}
