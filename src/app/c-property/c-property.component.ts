import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-property',
  templateUrl: './c-property.component.html',
  styleUrls: ['./c-property.component.css']
})
export class CPropertyComponent implements OnInit {

 onSale:boolean = true
 classExpression:Array<string> = ['class-1','class-2'];
 actionName:string = 'add';
 expression:string = 'red';

  ngOnInit() {
  }

}
