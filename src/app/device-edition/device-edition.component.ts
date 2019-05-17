import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceService } from '../services/device.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-edition',
  templateUrl: './device-edition.component.html',
  styleUrls: ['./device-edition.component.css']
})
export class DeviceEditionComponent implements OnInit {

  defaultStatus = "éteint";

  constructor(private deviceService: DeviceService,
              private router: Router ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const deviceName = form.value['deviceName'];
    const deviceStatus = form.value['deviceStatus'];
    this.deviceService.addDevice(deviceName, deviceStatus);
    this.router.navigate(['devices']);
  }

}
