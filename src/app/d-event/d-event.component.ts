import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-d-event',
  templateUrl: './d-event.component.html',
  styleUrls: ['./d-event.component.css']
})
export class DEventComponent {

  clickMe1(): void {
    alert('clickMe1');
  }
  clickMe2(): void {
    alert(event);
  }
  divClick(): void {
    alert(event);
  }
  btnClick(): void {
    let objEvent = event
    alert(objEvent);
  }
  onKeyUp(event: any): void {
    if (event.which == 13) {
      let tag = event.target.value;
      console.log(tag);
      $('#result-tag').append(`<span class="btn btn-success">${tag}</span>`);
      event.target.value = 'Ngu như heo';
    }
  }
}
