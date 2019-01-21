export class BookModel {

  private id: number;
  private title: string;
  private author: string;
  private description: string;
  private category: number;
  private yearPublished: number;
  private amount: number;
  public rating: number;

  public getID(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCategory(): number {
    return this.category;
  }

  public getYearPublished(): number {
    return this.yearPublished;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getRating() : number {
    return this.rating
  }

  constructor(title: string, author: string, description: string, category: number, yearPublieshed: number, amount: number, rating: number) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.category = category;
    this.yearPublished = yearPublieshed;
    this.amount = amount;
    this.rating = rating;
  }
}

export enum Category {
  Novel = 'Novel',
  SciFi = 'Science Fiction'
}
