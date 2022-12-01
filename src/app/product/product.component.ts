import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

data:Array<any> = [
  {fullname: 'Phùng Văn Phi', age: 12},{fullname: 'mai xuân hi', age: 22},{fullname: 'mai xuân thảo', age: 32},
]
  constructor() { }

  ngOnInit() {
  }

}
