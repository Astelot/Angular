import {BookModel, Category} from '../books/book.model';

export class DatabaseService {

  public getBookCount(): number {
    return 100;
  }

  public getBooks(from: number, amount: number): BookModel[] {
    return [
      new BookModel('Knjiga o zivotu', 'Pisac', 'Jako dobra knjiga.', 1, 1996, 7 ,3),
      new BookModel('Knjiga o svemiru', 'Pisac', 'Jako dobra knjiga.Jako dobra knjiga.Jako dobra knjiga.Jako dobra knjiga.', 1, 1996, 7, 2),
      new BookModel('Knjiga o knjigama', 'Pisac', 'Jako dobra knjiga.', 1, 1996, 7, 5),
      new BookModel('Knjiga o knjigama', 'Pisac', 'Jako dobra knjiga.', 1, 1996, 7,5),
      new BookModel('Knjiga o knjigama', 'Pisac', 'Jako dobra knjiga.', 1, 1996, 7,1),
      new BookModel('Knjiga o knjigama', 'Pisac', 'Jako dobra knjiga.Jako dobra knjiga.Jako dobra knjiga.Jako dobra knjiga.Jako dobra knjiga.', 1, 1996, 7,2),
      new BookModel('Knjiga o knjigama', 'Pisac', 'Jako dobra knjiga.', 1, 1996, 7,5),
      new BookModel('Knjiga o knjigama', 'Pisac', 'Jako dobra knjiga.', 1, 1996, 7,5),
      new BookModel('Knjiga o knjigama', 'Pisac', 'Jako dobra knjiga.', 1, 1996, 7,5),
      new BookModel('Knjiga o knjigama', 'Pisac', 'Jako dobra knjiga.', 1, 1996, 7,5),
      new BookModel('Knjiga o knjigama', 'Pisac', 'Jako dobra knjiga.', 1, 1996, 7,2),
      new BookModel('Knjiga o knjigama', 'Pisac', 'Jako dobra knjiga.', 1, 1996, 7,3),
    ];
  }
}
