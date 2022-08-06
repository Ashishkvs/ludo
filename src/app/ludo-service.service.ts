import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LudoServiceService {

  constructor() { }
  
  allStriker = [
    { striker: 'red1', pos: 0, strikerHolder: 'red', startingPoint: 0, finalPoint: 52 },
    { striker: 'red2', pos: 0, strikerHolder: 'red', startingPoint: 0, finalPoint: 52 },
    { striker: 'red3', pos: 0, strikerHolder: 'red', startingPoint: 0, finalPoint: 52 },
    { striker: 'red4', pos: 0, strikerHolder: 'red', startingPoint: 0, finalPoint: 52 },
    { striker: 'blue1', pos: 0, strikerHolder: 'blue', startingPoint: 0, finalPoint: 52 },
    { striker: 'blue2', pos: 0, strikerHolder: 'blue', startingPoint: 0, finalPoint: 52 },
    { striker: 'blue3', pos: 0, strikerHolder: 'blue', startingPoint: 0, finalPoint: 52 },
    { striker: 'blue4', pos: 0, strikerHolder: 'blue', startingPoint: 0, finalPoint: 52 },
    { striker: 'green1', pos: 0, strikerHolder: 'green', startingPoint: 0, finalPoint: 52 },
    { striker: 'green2', pos: 0, strikerHolder: 'green', startingPoint: 0, finalPoint: 52 },
    { striker: 'green3', pos: 0, strikerHolder: 'green', startingPoint: 0, finalPoint: 52 },
    { striker: 'green4', pos: 0, strikerHolder: 'green', startingPoint: 0, finalPoint: 52 },
    { striker: 'yellow1', pos: 0, strikerHolder: 'yellow', startingPoint: 0, finalPoint: 52 },
    { striker: 'yellow2', pos: 0, strikerHolder: 'yellow', startingPoint: 0, finalPoint: 52 },
    { striker: 'yellow3', pos: 0, strikerHolder: 'yellow', startingPoint: 0, finalPoint: 52 },
    { striker: 'yellow4', pos: 0, strikerHolder: 'yellow', startingPoint: 0, finalPoint: 52 },

  ];
}
