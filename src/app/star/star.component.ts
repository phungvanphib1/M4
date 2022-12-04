import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input()
  rating:number = 0;

  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  reviews(){
    console.log('Rating')
    this.ratingClicked.emit(`Rating: ${this.rating}`)
  }
}
