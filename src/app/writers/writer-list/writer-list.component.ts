import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Writer } from 'src/app/model/writer';

import { WritersService } from '../services/writers.service';

@Component({
  selector: 'app-writer-list',
  templateUrl: './writer-list.component.html',
  styleUrls: ['./writer-list.component.scss']
})
export class WriterListComponent implements OnInit {

  writerNameFilter: string = '';
  writers$: Observable<Writer[]>;

  constructor(private writersService: WritersService) {
    this.writers$ = this.writersService.list();
   }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.writers$ = this.writersService.listByName(this.writerNameFilter);
  }

}
