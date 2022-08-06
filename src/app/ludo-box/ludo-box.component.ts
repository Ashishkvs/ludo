import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ludo-box',
  templateUrl: './ludo-box.component.html',
  styleUrls: ['./ludo-box.component.scss']
})
export class LudoBoxComponent implements OnInit {

  constructor() { }

  @Input() color:string = 'green'
  // @Output() currentStriker = new EventEmitter<string>();
  ngOnInit(): void {
  }

}
