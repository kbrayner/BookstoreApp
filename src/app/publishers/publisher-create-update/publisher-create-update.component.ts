import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, first, of } from 'rxjs';
import { Publisher } from 'src/app/model/publisher';

import { PublishersService } from '../services/publishers.service';

@Component({
  selector: 'app-publisher-create-update',
  templateUrl: './publisher-create-update.component.html',
  styleUrls: ['./publisher-create-update.component.scss']
})
export class PublisherCreateUpdateComponent implements OnInit {

  // null means error, undefined means loading
  publisher: Publisher | null | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private service: PublishersService) {
    this.publisher = undefined;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      // If we have an id, it's an UPDATE and we have to retrieve the publisher from API
      if (id) {
        this.service.getById(id)
        .pipe(
          first(),
          catchError(error => {
            console.error(error);
            return of(null);
          })
        ).subscribe(publisher => {
          this.publisher = publisher;
        });
        // Otherwise, we create an empty publisher. It's a CREATE
      } else {
        this.publisher = new Publisher();
      }
    });
  }

  save(): void {
    console.log(this.publisher);
    if (this.publisher) {
      if (this.publisher.id) {
        console.log(this.publisher);
        this.service.edit(this.publisher.id, this.publisher)
          .pipe(
            first()
          ).subscribe( {
            next: publisher => {
              alert("Editora atualizada com sucesso!")
            },
            error: error => {
              alert("Não foi possível atualizar a editora!")
            }
          });
      } else {
        this.service.create(this.publisher)
        .pipe(
          first()
        ).subscribe( {
          next: publisher => {
            alert("Editora criada com sucesso!");
            this.router.navigate(['/publishers'])
          },
          error: error => {
            alert("Não foi possível criar a editora!")
          }
        });
      }
    }
  }
}

