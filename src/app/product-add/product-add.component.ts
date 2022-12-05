import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup

  constructor() {
    this.productForm = new FormGroup({
      'productName': new FormControl(null, Validators.required),
      'productNote': new FormControl('123-321', [Validators.required, Validators.minLength(6)])
    });
   }

   onAddProduct(){
    if (this.productForm.invalid) {
      console.log('invalid data');
      return;
    }
      console.log(this.productForm.value);
   }

  ngOnInit() {
  }

}
