import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  items  = [''];
  addItem(newItem: any) {
    console.log(newItem)
    let val = newItem;
   this.items.push(val);
   }
  constructor() { }

  ngOnInit() {
  }

}
