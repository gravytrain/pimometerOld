import {inject} from 'aurelia-framework';
import {SettingsService} from 'settings-service';

@inject(SettingsService)
export class Temperature {
  heading = 'Temperature';

  constructor(service) {
    this.service = service;
  }

  get sensorOneName() {
    this.service.sensorOneName;
  }

  get sensorTwoName() {
    this.service.sensorTwoName;
  }

  get sensorOneTarget() {
    this.service.sensorOneTarget;
  }

  get sensorTwoTarget() {
    this.service.sensorOneTarget;
  }
}
