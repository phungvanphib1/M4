import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLogin : boolean = false;

isAuthenticated(){
  const promise = new Promise<boolean>((resovel, reject)=>{
    setTimeout(()=>resovel(this.isLogin),800);
  })
  return promise;
}

constructor() { }
login(){
  this.isLogin = true;
}
logout(){
  this.isLogin = false;
}
}
