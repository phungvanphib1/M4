import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../common/category';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-aDelete-category',
  templateUrl: './aDelete-category.component.html',
  styleUrls: ['./aDelete-category.component.css']
})
export class ADeleteCategoryComponent implements OnInit {
  category!: Category
  id: any;
  constructor(private httpClient: HttpClient, private route:ActivatedRoute, private categoryService: CategoryService) {
    this.id = route.snapshot.params['id']
   }

  ngOnInit() {
    this.categoryService.getOne(this.id).subscribe(data=>{
      this.category = data as Category;
    })
  }
  deleteCate(){
    this.categoryService.delete(this.id).subscribe(data=>{
      console.log(data);
      alert('Xóa thành công')
      document.location = 'http://localhost:4200/listCate'
    },(e: any) => {
      console.log(e);
    })
  }


}
