import { Subject } from 'rxjs';

export class DeviceService {

  devicesSubject = new Subject<any[]>();

  private devices = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Frigo',
      status: 'éteint'
    },
    {
      id: 4,
      name: 'ordinateur',
      status: 'allumé'
    }
  ];

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
  
}
