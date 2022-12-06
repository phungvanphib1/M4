import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../common/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-aEdit-category',
  templateUrl: './aEdit-category.component.html',
  styleUrls: ['./aEdit-category.component.css']
})
export class AEditCategoryComponent implements OnInit {
  category!: Category;
  id: any;
  constructor(private httpClient: HttpClient, private route:ActivatedRoute,  private categoryService: CategoryService) {
    this.id = route.snapshot.params['id']
   }

  ngOnInit() {
          //lấy dữ liệu trực tiếp
    // this.httpClient.get(this.url + '/' +  this.id).subscribe(data=>{
    //   this.category = data as Category;
    // })

          //lấy dữ liệu từ file Service
    this.categoryService.getOne(this.id).subscribe(data=>{
      this.category = data as Category;
    })
  }
  update(){
    this.categoryService.update(this.id, this.category).subscribe(data=>{
      console.log(data);
      alert('Chỉnh sửa thành công')

        //định hướng bằng Url
      document.location = 'http://localhost:4200/listCate'
    })
  }

}
