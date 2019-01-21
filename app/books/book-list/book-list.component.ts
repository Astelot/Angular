import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap';
import { BookModel } from '../book.model';
import { DatabaseService } from '../../shared/database.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  getBooks(): BookModel[] {
    return this.databaseService.getBooks(0, 0);
  }

  getBookCount(): number {
    return this.databaseService.getBookCount();
  }

  onPageChanged($event: PageChangedEvent) {

  }
}
