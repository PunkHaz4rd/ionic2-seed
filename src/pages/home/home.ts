import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnvConfigurationProvider } from 'gl-ionic2-env-configuration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private envConfiguration: EnvConfigurationProvider<any>
  ) {
    let config: any;
    config = envConfiguration.getConfig();
    console.log(config.apiURL);
  }
}
