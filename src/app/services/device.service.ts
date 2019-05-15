export class DeviceService {

  devices = [
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
   * @author fnsanzandi
   */
  switchOnAll() {
    for (let device of this.devices) {
      device.status = "allumé";
    }
  }

  /**
   * Switches of all devices.
   * @author fnsanzandi
   */
  switchOffAll() {
    for (let device of this.devices) {
      device.status = "éteint";
    }
  }

  /**
   * Switches on one device at the given index.
   * @author fnsanzabandi
   */
  switchOnOne(index: number) {
    this.devices[index].status = "allumé";
  }

  /**
   * Switches off one device at the given index.
   * @author fnsanzabandi
   */
  switchOffOne(index: number) {
    this.devices[index].status = "éteint";
  }
}
