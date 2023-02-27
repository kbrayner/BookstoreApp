import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, first, of } from 'rxjs';
import { Writer } from 'src/app/model/writer';

import { WritersService } from '../services/writers.service';

@Component({
  selector: 'app-writer-create-update',
  templateUrl: './writer-create-update.component.html',
  styleUrls: ['./writer-create-update.component.scss']
})
export class WriterCreateUpdateComponent implements OnInit {

  // null means error, undefined means loading
  writer: Writer | null | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private service: WritersService) {
    this.writer = undefined;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      // If we have an id, it's an UPDATE and we have to retrieve the writer from API
      if (id) {
        this.service.getById(id)
        .pipe(
          first(),
          catchError(error => {
            console.error(error);
            return of(null);
          })
        ).subscribe(writer => {
          this.writer = writer;
        });
        // Otherwise, we create an empty writer. It's a CREATE
      } else {
        this.writer = new Writer();
      }
    });
  }

  save(): void {
    console.log(this.writer);
    if (this.writer) {
      if (this.writer.id) {
        console.log(this.writer);
        this.service.edit(this.writer.id, this.writer)
          .pipe(
            first()
          ).subscribe( {
            next: writer => {
              alert("Autor atualizado com sucesso!")
            },
            error: error => {
              alert("Não foi possível atualizar o autor!")
            }
          });
      } else {
        this.service.create(this.writer)
        .pipe(
          first()
        ).subscribe( {
          next: writer => {
            alert("Autor criado com sucesso!");
            this.router.navigate(['/writers'])
          },
          error: error => {
            alert("Não foi possível criar o autor!")
          }
        });
      }
    }
  }
}
