import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public isPlayingGame: boolean = false;
  public next: number = 1;
  public point: number = 0;
  public numbers: number[] = [];
  public timeleft: number = 0;
  public timeStart: any =  false;
  public maxTime: number = 1000;
  constructor() {}

  ngOnInit(): void {
    this.timeleft = this.maxTime;
    for (let i = 1; i <= 100; i++) {
      this.numbers.push(i);
    }
  }
  ngDoCheck(): void {
    if (this.isPlayingGame == true) {
      if (!this.timeStart) {
        this.timeStart = setInterval(() => {
          this.timeleft--;
        }, 1000);
      }
    }
    if (this.isPlayingGame == true) {
      if (this.timeleft <= 0) {
        this.resetGame();
      }
    }
  }
  public playGame() {
    this.isPlayingGame = true;
  }


  win(): void {
    alert('You win!');
    this.resetGame();
  }
  public resetGame() {
    let a = alert(`Game Over ${this.point}`);
    this.isPlayingGame = false;
    this.next = 1;
    this.point = 0;
    this.timeleft = this.maxTime;
    clearInterval(this.timeStart);
    this.timeStart = false;
  }
  play(number: number): void {
    if (number == this.next) {
      this.next++;
      this.point++;
      this.numbers = this.shuffle(this.numbers);
      if (this.point == 100) {
        this.win();
      }
    } else {
      this.resetGame();
    }
  }
  shuffle(array: any) {
    let currentIndex = array.length,
      randomIndex;

    // yếu tố để xáo trộn
    while (currentIndex != 0) {
      // chọn đúng
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // trao đổi với các phần tử còn lại
      [
       array[currentIndex],
       array[randomIndex]
      ] =
      [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
