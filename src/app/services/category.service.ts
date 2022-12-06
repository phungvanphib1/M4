import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  get(id: any) {
    throw new Error('Method not implemented.');
  }
  url = 'http://localhost:3000/categories';

constructor(private httpClient: HttpClient) { }
getAll(){
  return this.httpClient.get(this.url)
}
getOne(id:any){
  return this.httpClient.get(this.url +'/'+id)
}
delete(id:any){
  return this.httpClient.delete(this.url +'/'+id)
}
save(category: Category){
  return this.httpClient.post(this.url,category)
}
update(id: any,category: Category){
  return this.httpClient.put(this.url +'/'+id, category)
}
}
