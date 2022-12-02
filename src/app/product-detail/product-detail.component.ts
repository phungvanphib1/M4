import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../common/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product ;
  constructor() {
    this.product = new Product('', '');
   }

   editProduct(from: NgForm){
    console.log(from.value);
    this.product.productNode = from.value.productNode;
   }

  ngOnInit() {
  }

}
