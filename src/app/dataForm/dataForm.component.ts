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
  dataForm = new FormGroup({
    name: new FormControl("", Validators.required),
    genre: new FormControl("", Validators.required),
    creator: new FormControl("", Validators.required),
    type: new FormControl("", Validators.required),
    totalTime: new FormControl(""),
  });

  ngOnInit() {}

  selectItemType(type: string) {
    this.dataForm.patchValue({ type });
    if (type === "Book") {
      this.dataForm.patchValue({ totalTime: "" });
    }
  }

  onSubmit() {
    if (this.dataForm.valid) {
      this.onItemAdded.emit(this.dataForm.value);
      this.dataForm.reset();
      this.type = null;
    }
  }
}
