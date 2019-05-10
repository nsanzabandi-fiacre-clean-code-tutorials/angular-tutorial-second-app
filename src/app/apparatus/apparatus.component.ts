import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apparatus',
  templateUrl: './apparatus.component.html',
  styleUrls: ['./apparatus.component.css']
})
export class ApparatusComponent implements OnInit {

  apparatusName: string = 'Machine à laver';
  apparatusStatus: string = 'éteint';

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.apparatusStatus;
  }

}
