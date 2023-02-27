import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../model/category';
import { catchError, first, of } from 'rxjs';

@Component({
  selector: 'app-category-create-update',
  templateUrl: './category-create-update.component.html',
  styleUrls: ['./category-create-update.component.scss']
})
export class CategoryCreateUpdateComponent implements OnInit {

  // null means error, undefined means loading
  category: Category | null | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private service: CategoriesService) {
    this.category = undefined;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      // If we have an id, it's an UPDATE and we have to retrieve the category from API
      if (id) {
        this.service.getById(id)
        .pipe(
          first(),
          catchError(error => {
            console.error(error);
            return of(null);
          })
        ).subscribe(category => {
          this.category = category;
        });
        // Otherwise, we create an empty category. It's a CREATE
      } else {
        this.category = new Category();
      }
    });
  }

  save(): void {
    console.log(this.category);
    if (this.category) {
      if (this.category.id) {
        console.log(this.category);
        this.service.edit(this.category.id, this.category)
          .pipe(
            first()
          ).subscribe( {
            next: category => {
              alert("Gênero atualizado com sucesso!")
            },
            error: error => {
              alert("Não foi possível atualizar o gênero!")
            }
          });
      } else {
        this.service.create(this.category)
        .pipe(
          first()
        ).subscribe( {
          next: category => {
            alert("Gênero criado com sucesso!");
            this.router.navigate(['/categories'])
          },
          error: error => {
            alert("Não foi possível criar o gênero!")
          }
        });
      }
    }
  }
}
