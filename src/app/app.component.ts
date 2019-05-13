import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-tutorial-second-app';
  isAuthentified = false;

  // TODO: Rename device in devices.
  devices = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Frigo',
      status: 'éteint'
    },
    {
      name: 'ordinateur',
      status: 'allumé'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuthentified = true;
      }, 4000
    );
  }

  onClickOnSwitchAllLightButton() {
    console.log("On allume tout!!");
  }
}
