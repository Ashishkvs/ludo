import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ludo',
  templateUrl: './ludo.component.html',
  styleUrls: ['./ludo.component.scss']
})
export class LudoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  boxPos(boxPos: number,  message: string){
    alert('pos is'+boxPos+message)
  }

}
