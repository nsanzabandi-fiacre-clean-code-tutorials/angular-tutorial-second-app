export class DeviceService {

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
