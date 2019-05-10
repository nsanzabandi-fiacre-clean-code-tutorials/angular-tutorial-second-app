import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-tutorial-second-app';
  isAuthentified = false;

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
