import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Item } from "../../types/Item";

@Component({
  selector: "data-form",
  templateUrl: "./dataForm.component.html",
  styleUrls: ["./dataForm.component.scss"],
})
export class DataForm implements OnInit {
  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();
  type = null;
  name: string;
  genre: string;
  creator: string;
  totalTime: number;

  ngOnInit() {}

  onSubmit() {
    const { type, name, genre, creator, totalTime } = this;
    this.onItemAdded.emit({
      type,
      name,
      genre,
      creator,
      totalTime,
    });

    this.type = null;
    this.name = "";
    this.genre = "";
    this.creator = "";
    this.totalTime = null;
  }

  selectType() {}
}
