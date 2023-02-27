import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Publisher } from 'src/app/model/publisher';

import { PublishersService } from '../services/publishers.service';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss']
})
export class PublisherListComponent implements OnInit {

  publisherNameFilter: string = '';
  publishers$: Observable<Publisher[]>;

  constructor(private publishersService: PublishersService) {
    this.publishers$ = this.publishersService.list();
   }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.publishers$ = this.publishersService.listByName(this.publisherNameFilter);
  }

}
