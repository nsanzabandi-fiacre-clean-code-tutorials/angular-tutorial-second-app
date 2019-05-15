import { Component, Input, OnInit } from '@angular/core';
import { DeviceService } from "../services/device.service";
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() deviceIndex: number;
  @Input() id: number;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.deviceStatus;
  }

  getColor() {
    var color = "";
    if (this.deviceStatus === "allumé") {
      color = "green";
    } else if (this.deviceStatus === "éteint") {
      color = "red";
    }
    return color;
  }

  /**
   * Event when the button switchOnDeviceButton is clicked.
   * @author fnsanzabandi
   */
  onSwitchOnDeviceButton() {
    this.deviceService.switchOnOne(this.deviceIndex);
  }

  /**
   * Event when the button switchOffDeviceButton is clicked.
   * @author fnsanzabandi
   */
  onSwitchOffDeviceButton() {
    this.deviceService.switchOffOne(this.deviceIndex);
  }
}
