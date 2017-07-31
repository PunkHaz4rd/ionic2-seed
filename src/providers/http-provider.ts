import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { EnvConfigurationProvider } from 'gl-ionic2-env-configuration';

@Injectable()
export class HttpProvider {

  constructor(
    public http: HttpModule,
    private envConfiguration: EnvConfigurationProvider<any>
  ) {
    let config: any;
    config = envConfiguration.getConfig();
    console.log(config.apiURL);
  }
}
