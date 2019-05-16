import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.component.html',
  styleUrls: ['./devices-view.component.css']
})
export class DevicesViewComponent implements OnInit {

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
    devicesSubscription: Subscription;

    constructor(private deviceService: DeviceService) {
      setTimeout(
        () => {
          this.isAuthentified = true;
        }, 4000
      );
    }

    ngOnInit() {
      this.devicesSubscription = this.deviceService.devicesSubject.subscribe(
        (devices: any[]) => {
          this.devices = devices;
        }
      );
      this.deviceService.emitDevicesSubject();
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
