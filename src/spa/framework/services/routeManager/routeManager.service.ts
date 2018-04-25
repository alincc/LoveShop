import {
  AuththenticationGuardService
} from './../../login/authenticationGuard.service';
import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';

@Injectable()
export class RouteManagerService {
  private navCtrl: any;
  constructor(
    public app: App,
    private authService: AuththenticationGuardService
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  public gotoScreen(screenName, params?: any, options?: any) {
    this.navCtrl.push(screenName, params, options);
  }

  public gotoAuthenticatedScreen(screenName, params?: any) {
    if (this.authService.isAuthenticated()) {
      this.navCtrl.push(screenName, params);
    } else {
      this.navCtrl.push('LoginPage');
    }
  }

  public ifNotLoggedInThenGoBackToLoginScreen() {
    if (!this.authService.isAuthenticated()) {
      this.navCtrl.push('LoginPage');
      return true;
    }

    return false;
  }

}
