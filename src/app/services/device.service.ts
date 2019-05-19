import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {

  devicesSubject = new Subject<any[]>();

  private devices = [];

  constructor(private httpClient: HttpClient) {}

  /**
   * Emits devices Subject.
   * @author fnsanzabandi
   */
  emitDevicesSubject() {
    this.devicesSubject.next(this.devices.slice());
  }

  /**
   * Gets a device by the given id
   * @param id
   * @author fnsanzabandi
   */
  getDeviceById(id: number) {
    const device = this.devices.find(
      (deviceObject) => {
        return deviceObject.id === id;
      }
    );
    return device;
  }
  /**
   * Switches on all devices.
   * @author fnsanzabandi
   */
  switchOnAll() {
    for (let device of this.devices) {
      device.status = "allumé";
    }
    this.emitDevicesSubject();
  }

  /**
   * Switches of all devices.
   * @author fnsanzabandi
   */
  switchOffAll() {
    for (let device of this.devices) {
      device.status = "éteint";
    }
    this.emitDevicesSubject();
  }

  /**
   * Switches on one device at the given index.
   * @author fnsanzabandi
   */
  switchOnOne(index: number) {
    this.devices[index].status = "allumé";
    this.emitDevicesSubject();
  }

  /**
   * Switches off one device at the given index.
   * @author fnsanzabandi
   */
  switchOffOne(index: number) {
    this.devices[index].status = "éteint";
    this.emitDevicesSubject();
  }
  
  /**
   * Adds a device.
   * @param deviceName 
   * @param deviceStatus 
   * author fnsanzabandi
   */
  addDevice(deviceName: string, deviceStatus: string) {
    const device = {
      id: 0,
      name: '',
      status: ''
    };

    device.name = deviceName;
    device.status = deviceStatus;
    device.id = this.devices[this.devices.length - 1].id + 1;
    this.devices.push(device);
    this.emitDevicesSubject();
  }

  saveDevicesToServer() {
    this.httpClient
        .put('https://fir-testone-eceb1.firebaseio.com/devices.json', this.devices)
        .subscribe(
          () => {
            console.log('Enregistrement terminé.');
          },
          (error: string) => {
            console.log('Erreur de sauvegarde!' + error);
          }
        );
  }

  getDevicesFromServer() {
    this.httpClient
    .get<any[]>('https://fir-testone-eceb1.firebaseio.com/devices.json')
    .subscribe(
      (response) => {
        this.devices = response;
        this.emitDevicesSubject();
      },
      (error) => {
        console.log('Erreur de chargement!' + error);
      }
    ); 
  }

}
