import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from '../book.model';

@Component({
  selector: 'app-book-thumbnail',
  templateUrl: './book-thumbnail.component.html',
  styleUrls: ['./book-thumbnail.component.css']
})
export class BookThumbnailComponent implements OnInit {

  rate = 10;
  max = 10;
  isReadonly = false;
  @Input() book: BookModel;
  
  constructor() { }

  ngOnInit() {
  }

}
