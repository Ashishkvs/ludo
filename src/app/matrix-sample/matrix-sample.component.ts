import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix-sample',
  templateUrl: './matrix-sample.component.html',
  styleUrls: ['./matrix-sample.component.scss']
})
export class MatrixSampleComponent implements OnInit {
  ludoArray: any = [];

  totalPath = 52;
  maxBoxColor = 16;
  totalStamp = 8;
  stampPosition = [1, 9, 14, 22, 27, 35, 40, 48];
  arrowPosition = [];
  homeArray = [1,2,3,4,5]

  allStriker = [
    { striker: 'red1', pos: 20, strikerHolder: 'red', startingPoint: 0, finalPoint: 52 },
    { striker: 'red2', pos: 21, strikerHolder: 'red', startingPoint: 0, finalPoint: 52 },
    { striker: 'red3', pos: 22, strikerHolder: 'red', startingPoint: 0, finalPoint: 52 },
    { striker: 'red4', pos: 23, strikerHolder: 'red', startingPoint: 0, finalPoint: 52 },
    { striker: 'blue1', pos: 24, strikerHolder: 'blue', startingPoint: 0, finalPoint: 52 },
    { striker: 'blue2', pos: 25, strikerHolder: 'blue', startingPoint: 0, finalPoint: 52 },
    { striker: 'blue3', pos: 1, strikerHolder: 'blue', startingPoint: 0, finalPoint: 52 },
    { striker: 'blue4', pos: 2, strikerHolder: 'blue', startingPoint: 0, finalPoint: 52 },
    { striker: 'green1', pos: 3, strikerHolder: 'green', startingPoint: 0, finalPoint: 52 },
    { striker: 'green2', pos: 4, strikerHolder: 'green', startingPoint: 0, finalPoint: 52 },
    { striker: 'green3', pos: 1, strikerHolder: 'green', startingPoint: 0, finalPoint: 52 },
    { striker: 'green4', pos: 36, strikerHolder: 'green', startingPoint: 0, finalPoint: 52 },
    { striker: 'yellow1', pos: 12, strikerHolder: 'yellow', startingPoint: 0, finalPoint: 52 },
    { striker: 'yellow2', pos: 1, strikerHolder: 'yellow', startingPoint: 0, finalPoint: 52 },
    { striker: 'yellow3', pos: 13, strikerHolder: 'yellow', startingPoint: 0, finalPoint: 52 },
    { striker: 'yellow4', pos: 14, strikerHolder: 'yellow', startingPoint: 0, finalPoint: 52 },

  ];
  
  striker = ['yellow', 'blue', 'green', 'red'];
  strikerMover = 3; //starting colo
  currentMove = this.striker[this.strikerMover]; // current color mover


  currentPosition = 1;
  constructor() {
    //52 index is there in ludo
    //max 16 striker can be on board so 16 box max can be seen filled almost 1/3
    let i = 0;
    for (i; i < 53; i++) {
      let obj = { pos: i, red: false, blue: false, green: false, yellow: false, stamp: false };
      //stamp logic
      if (this.stampPosition.find(data => data == i)) {
        obj.stamp = true;
      }

      this.ludoArray.push(obj);
    }
  }
  ngOnInit(): void {


  }


  backwardMove() {
    if (this.currentPosition > 0) {
      this.ludoArray[this.currentPosition - 1][this.currentMove] = true;
      this.ludoArray[this.currentPosition][this.currentMove] = false;
      this.currentPosition--;
    }

  }
  forwardMove() {
    this.ludoArray[this.currentPosition][this.currentMove] = false;
    this.ludoArray[this.currentPosition + 1][this.currentMove] = true;
    this.currentPosition++;

    //give turn to next color  clock wise
    // this.currentMove = this.striker
    this.strikerRotation();
  }
  strikerRotation() {
    // strikerMover = 0;
    // currentMove = this.striker[this.strikerMover];
    if (this.strikerMover >= 3) {
      //reset to 0
      this.strikerMover = 0;
      this.currentMove = this.striker[0];
      return;
    }
    this.strikerMover++;
    this.currentMove = this.striker[this.strikerMover];

  }

  findStrikerAtIndex(index: number) {
    let strikers = this.allStriker.filter(striker => striker.pos == index);
    // let strikers = this.allStriker.filter(striker => striker.pos == index).map( data => data.striker);
    return strikers;
  }
}
