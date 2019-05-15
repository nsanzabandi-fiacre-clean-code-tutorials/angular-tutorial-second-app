import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  name: String = "My device";
  status: String = "My device status";

  constructor(private deviceService: DeviceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.deviceService.getDeviceById(+id).name;
    this.status = this.deviceService.getDeviceById(+id).status;
  }

}
