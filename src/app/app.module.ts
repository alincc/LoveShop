import { HttpService } from './../spa/framework/services/httpService/http.service';
import { RouteManagerService } from './../spa/framework/services/routeManager/routeManager.service';
import { AuththenticationGuardService } from './../spa/framework/login/authenticationGuard.service';
import { MyApp } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

import { SharedModule } from "../spa/shared/shared.module";
import {VerifyPINPageModule} from "../spa/+screens/AccountManagement/verifyPIN/verifyPIN.module";
import {VerifyTouchIdPageModule} from "../spa/+screens/AccountManagement/verifyTouchId/verifyTouchId.module";
import {VerifyPINPage} from "../spa/+screens/AccountManagement/verifyPIN/verifyPIN";
import {VerifyTouchIdPage} from "../spa/+screens/AccountManagement/verifyTouchId/verifyTouchId";
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    VerifyPINPageModule,
    HttpClientModule,
    VerifyTouchIdPageModule,
    IonicModule.forRoot(MyApp, {
      backButtonIcon: 'ios-arrow-back',
      backButtonText: '',
      scrollAssist: false,
      scrollPadding: false,
      autoFocusAssist: false,
      iconMode: 'ios',
      swipeBackEnabled: false,
      platforms: {
        ios: {
          statusbarPadding: true
        }
      }
     }),
    SharedModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VerifyPINPage,
    VerifyTouchIdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    RouteManagerService,
    AuththenticationGuardService,
    HttpService
    , FingerprintAIO
  ]
})
export class AppModule { }
