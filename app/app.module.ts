import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookThumbnailComponent } from './books/book-thumbnail/book-thumbnail.component';
import { CollapseModule, PaginationModule } from 'ngx-bootstrap';
import { RatingModule } from 'ngx-bootstrap/rating';
import { DatabaseService } from './shared/database.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookListComponent,
    BookThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
