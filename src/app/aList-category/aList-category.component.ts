import { Component, OnInit } from '@angular/core';
import { Category } from '../common/category';
import { HttpClient } from '@angular/common/http'
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-aList-category',
  templateUrl: './aList-category.component.html',
  styleUrls: ['./aList-category.component.css']
})
export class AListCategoryComponent implements OnInit {
  categories!: Category[];
 
  constructor(private httpClient: HttpClient, private categoryService: CategoryService) { }

  ngOnInit() {
        // lấy dữ liệu từ file ts
    // this.httpClient.get(this.url).subscribe(data=>{
    //   this.categories = data as Category[];
    // })

        // lấy dữ liệu từ file Service
    this.categoryService.getAll().subscribe(data=>{
      this.categories = data as Category[];
    })
  }


}
