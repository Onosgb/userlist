import { Component } from "@angular/core";
import { Item } from "../types/Item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  Book: string = "Book";
  Song: string = "Song";
  books: Item[] = [];
  songs: Item[] = [];
  constructor() {}

  ngOnInit() {}

  onItemAdded(item: Item) {
    if (item.type === this.Book) {
      this.books.push(item);
    } else if (item.type === this.Song) {
      this.songs.push(item);
    }
  }

  onItemDelete(item: Item) {
    if (item.type === this.Song) {
      this.songs = this.songs.filter((item) => item.type !== this.Song);
    } else if (item.type === this.Book) {
      this.books = this.books.filter((item) => item.type !== this.Book);
    }
  }
}
