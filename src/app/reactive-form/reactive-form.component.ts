import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  customerForm: FormGroup

  constructor() {
    this.customerForm = new FormGroup({
      'email' : new FormControl('',[Validators.required, Validators.minLength(8),Validators.email]),
      'password' : new FormControl('',[Validators.required, Validators.minLength(6)]),
      'confirmpassword' : new FormControl('',[Validators.required, Validators.minLength(6)]),
      'country' : new FormControl('',[Validators.required]),
      'age' : new FormControl('',[Validators.required]),
      'gender' : new FormControl('',[Validators.required]),
      'phone' : new FormControl('',[Validators.required, Validators.pattern('[/^\+84\d{9,10}$/]*')]),
    });
  }
  register(){
    if (this.customerForm.invalid) {
      console.log('invalid data');
      return;
    }
      console.log(this.customerForm.value);
  }
  passwordsMatching: boolean = false;
  isConfirmPasswordDirty: boolean = false;
  confirmPasswordClass: string = 'form-control';

checkPasswords(pw: string, cpw: string) {
    this.isConfirmPasswordDirty = true;
    if (pw === cpw) {
      this.passwordsMatching = true;
      this.confirmPasswordClass = 'form-control is-valid';
    } else {
      this.passwordsMatching = false;
      this.confirmPasswordClass = 'form-control is-invalid'
    }
  }

  ngOnInit() {
  }

}
