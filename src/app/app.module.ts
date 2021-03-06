import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GLIonic2EnvConfigurationModule } from 'gl-ionic2-env-configuration';

import { HttpProvider } from '../providers/http-provider';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

let baseConfig = {
  // Configure according to the environment
  // locationStrategy: 'path'
};
let deepLinkConfig = {
  links: [{
    component: HomePage, name: 'Home', segment: 'home'
  }]
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GLIonic2EnvConfigurationModule,
    IonicModule.forRoot(MyApp, baseConfig, deepLinkConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
