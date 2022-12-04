import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product('ps2', 'xấu'),
    new Product('ps3', 'đẹp'),
    new Product('ps4', 'hơi đẹp'),
  ]

  changeStarRating(msg : string){
    console.log(`message: ${msg}`)
  }

  constructor() { }

  ngOnInit() {
  }

}
