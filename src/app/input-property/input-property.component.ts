import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {
  currentItem: string = 'IPhone 12';
  constructor() { }

  ngOnInit() {
  }

}
