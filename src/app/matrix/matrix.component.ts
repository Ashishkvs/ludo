import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {
  ludoArray: any = [];
  allStriker = 16
  totalPath = 52;
  maxBoxColor = 16;
  totalStamp = 8;
  stampPosition = [1,9,14,22,27,35,40,48];
  arrowPosition = [];
  striker = ['yellow','blue','green','red']
  currentMove = this.striker[0];
  currentPosition = 1;
  constructor() {
    //52 index is there in ludo
    //max 16 striker can be on board so 16 box max can be seen filled almost 1/3
    let i = 0;
    for (i; i < 53; i++) {
      let obj = { pos: i, red: false, blue: false, green: false, yellow: false ,stamp:false};
      //stamp logic
      if(this.stampPosition.find(data => data == i)){
        obj.stamp = true;
      }
      
      this.ludoArray.push(obj)
    }
  }


  ngOnInit(): void {


  }

   
  backwardMove() {
    if(this.currentPosition > 0) {
      this.ludoArray[this.currentPosition-1][this.currentMove] = true;
      this.ludoArray[this.currentPosition][this.currentMove] = false;
      this.currentPosition--;
    }
    
  }
  forwardMove() {
    
    this.ludoArray[this.currentPosition][this.currentMove] = false;
    this.ludoArray[this.currentPosition + 1][this.currentMove] = true;
    this.currentPosition++;
  }
}
