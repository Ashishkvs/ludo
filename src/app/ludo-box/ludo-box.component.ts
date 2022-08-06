import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ludo-box',
  templateUrl: './ludo-box.component.html',
  styleUrls: ['./ludo-box.component.scss']
})
export class LudoBoxComponent implements OnInit {

  constructor() { }

  @Input() color:string = 'green'
  ngOnInit(): void {
  }

}
