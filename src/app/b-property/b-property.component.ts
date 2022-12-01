import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-property',
  templateUrl: './b-property.component.html',
  styleUrls: ['./b-property.component.css'],
  template: `
  <h1 class="h12" >hi mấy cưng</h1>
  `,
  styles: [`
    .h12 {
      background-color: red;
    }
  `]
})
export class BPropertyComponent implements OnInit {

  itemImageUrl: string = 'https://hthaostudio.com/wp-content/uploads/2020/06/anh-sen-11-1024x1536.jpg';
  colspan: number = 2
  isUnchanged: boolean = false


  constructor() { }

  ngOnInit() {
  }

}
