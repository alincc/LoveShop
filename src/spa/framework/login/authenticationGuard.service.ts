import { EventEmitter, Injectable } from '@angular/core';
import { AuthenticationDataSharingService } from "./authenticationDataSharing.service";
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MyShoppingBasketSharingDataService } from "../../+screens/myShoppingBasket/myShoppingBasketSharingData.services";
import $ from 'jquery';
import { AppConfig as app } from '../appConfig';
import {YourCardDetailsSharingDataService} from "../../+screens/CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";

@Injectable()
export class AuththenticationGuardService {
  public shouldRedirectTo$ =
    new Subject<{ page: string, root?: boolean, params?: any }>();
  public invalidTokenState$ = new BehaviorSubject<boolean>(false);
  public invalidToken$ = new Subject<any>();
  constructor(
  ) {
    this.userLogout$ = new EventEmitter();
    // second page (listen for the user created event)
    this.userLogout$.subscribe((userEventData) => {
      // userEventData is an array of parameters, so grab our first and only arg
      this.Logout();
    });

    this.invalidToken$.take(1).subscribe(data => {
      this.Logout(false);
      this.invalidTokenState$.next(true);
      this.shouldRedirectTo$.next({
        page: 'WelcomePage',
        root: true
      });
      setTimeout(() => {
        location.reload();
      }, app.Configuration.HttpService.time2ShowToast);
    });

    this.initialize();
  }

  private initialize() {
    this.authToken = window.localStorage.getItem('token') || null;
    if (this.authToken == null) {
      this.isLoggedin = false;
    } else {
      this.isLoggedin = true;
      this.tokenCreatedTime = +window.localStorage.getItem('tokenCreatedTime');
      AuthenticationDataSharingService.getInstance().loginEmail = window.localStorage.getItem('lastLoggedIn');
    }
  }

  public getToken() {
    return 'Bearer ' + this.authToken;
  }

  private authToken: string = "";
  private isLoggedin: boolean = false;

  private storeUserCredentials(response) {
    this.authToken = response.token;
    AuthenticationDataSharingService.getInstance().loginEmail = response.emailAddress;

    this.tokenCreatedTime = new Date().getTime();
    window.localStorage.setItem('token', this.authToken);
    window.localStorage.setItem('tokenCreatedTime', JSON.stringify(this.tokenCreatedTime));
    window.localStorage.setItem('lastLoggedIn', response.emailAddress);

    this.isLoggedin = true;
    this.invalidTokenState$.next(false);
  }

  private destroyUserCredentials() {
    this.destroyUserData();
    AuthenticationDataSharingService.getInstance().loginEmail = null;
  }

  private tokenCreatedTime: number;
  public isTokenRefresh(): boolean {
    // always refresh token
    //return true;

    let now = new Date().getTime();
    let timeDiff = now - this.tokenCreatedTime;
    // diff minutes =  timeDiff / (1000 * 60)
    let diffMins = Math.ceil(timeDiff / 60000);

    // greater than 5 minutes = diffMins > 5 * 60 = 300
    let isGreaterThan5Minutes = diffMins > 300;
    // less than 30 minutes = diffMins < 30 * 60 = 1800
    let isLessThan30Minutes = diffMins <= 1800;

    return isGreaterThan5Minutes && isLessThan30Minutes;
  }

  public authenticated(response: any): any {
    if (response.token !== null) {
      this.storeUserCredentials(response);
      return {
        login: true
      };
    } else {
      this.destroyUserCredentials();
      return {
        login: false,
        errorMessage: "User logout!"
      };
    }
  }

  public isAuthenticated(): boolean {
    return this.isLoggedin;
  }

  public userLogout$: EventEmitter<any>;
  public Logout(cleanAll = true) {
    $('.app-root').removeClass('not-show-tab');
    MyShoppingBasketSharingDataService.getInstance().resetState();
    YourCardDetailsSharingDataService.getInstance().IsActiveYourCardDetailsPage = false;
    YourCardDetailsSharingDataService.getInstance().resetState();
    if (cleanAll) {
      this.destroyUserCredentials();
    } else {
      this.destroyUserData();
    }
  }

  private destroyUserData() {
    this.authToken = null;
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('tokenCreatedTime');
    this.isLoggedin = false;

    this.tokenCreatedTime = null;
  }
}
