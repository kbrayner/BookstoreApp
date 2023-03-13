import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formGroup =  new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });

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

  getErrorResponseMessage (error: HttpErrorResponse): string {
    const validationErrors = error?.error?.errors;
    let validationErrosMessage = '';
    if(validationErrors) {
      if(validationErrors.Name) {
        validationErrosMessage = error?.error?.errors?.Name?.join('\n');
      }
    }
    return `${error?.error?.title || error.error} \n\n${validationErrosMessage}`;
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
            error: (error: HttpErrorResponse) => {
              console.error(error);
              alert(`Não foi possível atualizar o Escritor! ${this.getErrorResponseMessage(error)}`);
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
          error: (error: HttpErrorResponse) => {
            console.error(error);
            alert(`Não foi possível criar o Escritor! ${this.getErrorResponseMessage(error)}`);
          }
        });
      }
    }
  }
}
