import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
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
  constructor(private router: Router, private httpClient: HttpClient, private route:ActivatedRoute, private categoryService: CategoryService) {
    this.id = route.snapshot.params['id']
   }

  ngOnInit() {
    this.categoryService.getOne(this.id).subscribe(data=>{
      this.category = data as Category;
    })
  }
  deleteCate(){
    this.categoryService.delete(this.id).subscribe(data=>{
      alert('Xóa Thành công')
      this.router.navigate(['listCate'])
      console.log(data);

      // document.location.href = 'http://localhost:4200/listCate'
    })
  }


}
