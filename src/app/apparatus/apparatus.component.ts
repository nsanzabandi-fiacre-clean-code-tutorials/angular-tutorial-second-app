import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apparatus',
  templateUrl: './apparatus.component.html',
  styleUrls: ['./apparatus.component.css']
})
export class ApparatusComponent implements OnInit {

  @Input() apparatusName: string;
  @Input() apparatusStatus: string;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.apparatusStatus;
  }

}
