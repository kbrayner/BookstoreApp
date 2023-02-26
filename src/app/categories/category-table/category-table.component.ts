import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable, first } from 'rxjs';
import { Category } from '../../model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss'],
})
export class CategoryTableComponent implements OnInit {
  @Input()
  categories$: Observable<Category[]> | null;
  categoriesDataSource: Category[] | undefined;
  displayedColumns = ['Name', 'Edit', 'Delete'];
  @ViewChild(MatTable) table!: MatTable<Category>;

  constructor(private service: CategoriesService) {
    this.categories$ = null;
    this.categoriesDataSource = undefined;
  }

  ngOnInit(): void {
    this.categories$?.pipe(first()).subscribe({
      next: (categories) => {
        this.categoriesDataSource = categories;
      },
      error: (error) => {
        this.categoriesDataSource = [];
        console.error('Erro ao carregar os gêneros:', error);
      },
    });
  }

  onDeleteClick(id: number, categoryName: string) {
    const confirmDelete = confirm(`Tem certeza que deseja deletar o gênero ${categoryName}?`);
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
          if(this.categoriesDataSource) {
            const categoryFoundIndex = this.categoriesDataSource.findIndex(category => category.id == id);
            // If we found the category
            if(categoryFoundIndex >= 0) {
              this.categoriesDataSource.splice(categoryFoundIndex, 1);
              this.table.renderRows();
            }
          }
          alert(`Gênero removido com sucesso!`);
        },
        error: (error) => {
          alert('Não foi possível remover o gênero!');
          console.error(error);
        }
      });
  }
}
