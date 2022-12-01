import { Component } from '@angular/core';
import { Student } from './common/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
changeFontSize(arg0: number) {
throw new Error('Method not implemented.');
}
  title = 'hello-angular';
  student : Student = {
    fullname: "Phùng Văn Phi",
    age: 19
  }
fontSize: any;
}
