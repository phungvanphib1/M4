import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../common/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product ;
  constructor( private route: ActivatedRoute ) {
    this.product = new Product('', '');
    if(route.snapshot.params['id'])
    this.product.productName = route.snapshot.params['id'];

   }

   changeDetail(form: NgForm){
    console.log(form.value);
    this.product.productName = form.value.productName;
    this.product.productName = this.product.productName.toUpperCase();
   }

  ngOnInit() {
  }

}
