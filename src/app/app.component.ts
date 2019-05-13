import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-tutorial-second-app';
  isAuthentified = false;
  lastUpdate = new Promise(
    // Simulating a call to test assynchronous functionaliity
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 4000
      );
    }
  );

  devices: any[];

  constructor(private deviceService: DeviceService) {
    setTimeout(
      () => {
        this.isAuthentified = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.devices = this.deviceService.devices;
  }

  /**
   * Event when the button switchOnAllButton is clicked.
   * @author fnsanzabandi
   */
  onSwitchOnAllButton() {
    this.deviceService.switchOnAll();
  }

  /**
   * Event when the button switchOffAllButton is clicked.
   * @author fnsanzabandi
   */
   onSwitchOffAllButton() {
     this.deviceService.switchOffAll();
   }
}
