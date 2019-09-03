import { Injectable } from '@angular/core';
import {FoundedDevice} from "~/app/services/founded.device";

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  constructor() { }

  private readonly _adapter : android.bluetooth.BluetoothAdapter;
  private readonly _manager : any;

  public get IsEnabled() : Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        console.log('IsEnabled: ', this._adapter.isEnabled());
        resolve(this._adapter != null && this._adapter.isEnabled());
      } catch (ex) {
        reject(ex);
      }
    });
  }


  public get FoundedDevices() : Array<FoundedDevice> {

    const devices = this._adapter.getBondedDevices().toArray();
    const results = new Array<FoundedDevice>();
    const length = devices.length;

    for (let i = 0; i < length; i++) {

      const device = <android.bluetooth.BluetoothDevice>(devices[i]);

      const address = device.getAddress();
      const name = device.getName();

      results.push(new FoundedDevice(address, name));
    }

    return results;
  }






}
