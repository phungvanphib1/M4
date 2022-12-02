import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();

  addNewItem(value: any) {
    this.newItemEvent.emit(value);
    }

  constructor() { }

  ngOnInit() {
  }

}
