import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { first, Observable } from 'rxjs';
import { Publisher } from 'src/app/model/publisher';
import { PublishersService } from '../services/publishers.service';

@Component({
  selector: 'app-publisher-table',
  templateUrl: './publisher-table.component.html',
  styleUrls: ['./publisher-table.component.scss']
})
export class PublisherTableComponent implements OnInit {
  @Input()
  publishers$: Observable<Publisher[]> | null;
  publishersDataSource: Publisher[] | undefined;
  displayedColumns = ['Name', 'Edit', 'Delete'];
  @ViewChild(MatTable) table!: MatTable<Publisher>;

  constructor(private service: PublishersService) {
    this.publishers$ = null;
    this.publishersDataSource = undefined;
  }

  ngOnInit(): void {
    this.publishers$?.pipe(first()).subscribe({
      next: (publishers) => {
        this.publishersDataSource = publishers;
      },
      error: (error) => {
        this.publishersDataSource = [];
        console.error('Erro ao carregar as editoras:', error);
      },
    });
  }

  onDeleteClick(id: number, publisherName: string) {
    const confirmDelete = confirm(`Tem certeza que deseja deletar a editora ${publisherName}?`);
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
          if(this.publishersDataSource) {
            const publisherFoundIndex = this.publishersDataSource.findIndex(publisher => publisher.id == id);
            // If we found the publisher
            if(publisherFoundIndex >= 0) {
              this.publishersDataSource.splice(publisherFoundIndex, 1);
              this.table.renderRows();
            }
          }
          alert(`Editora removida com sucesso!`);
        },
        error: (error) => {
          alert('Não foi passível remover a editora!');
          console.error(error);
        }
      });
  }
}
