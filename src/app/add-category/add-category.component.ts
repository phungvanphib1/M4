import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Category } from '../common/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category
  constructor(private httpClient: HttpClient, private categoryService: CategoryService) {
    this.category = new Category();
   }

  ngOnInit() {
  }

  save(){
    this.categoryService.save(this.category).subscribe(data=>{
      console.log(data);
      alert('thêm thành công')
      document.location = 'http://localhost:4200/listCate'
    })
  }
}
