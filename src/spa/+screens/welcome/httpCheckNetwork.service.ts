import { Utils } from "../../framework/services/utilities/utilities";
import { ToastMessageService } from "../../framework/services/toastMessageService/toastMessage.service";
import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import { AuththenticationGuardService } from "../../framework/login/authenticationGuard.service";
import { MobileDeviceService } from "../../framework/services/mobileDeviceService/mobileDeviceService.service";
import { AppConfig as app } from "../../framework/appConfig";

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;
const API_Authentication = app.Configuration.HttpService.API_Authentication;
const NO_CONNECTION_MSG = app.Configuration.HttpService.NO_CONNECTION_MSG;
const TOKEN_INVALID = app.Configuration.HttpService.TOKEN_INVALID;

@Injectable()
export class HttpCheckNetworkService {
  private callCount: number = 0;
  private receiveTimeout: number = 12000;
  constructor(
    private authenticationService: AuththenticationGuardService,
    private http: Http
  ) {
    this.callCount = 0;
  }

  private extractData(res: Response | any) {
    if (res.status <= 4) {
      ToastMessageService.getInstance().showToastMessage(NO_CONNECTION_MSG);
    } else if (res.status === 401) {
      let errors = res.json().errors;
      let message = '';
      if (Utils.lengthGreaterThan0(errors)) {
        if (errors[0].code === "token.invalid" || errors[0].code === "park-api.token.expired") {
          this.authenticationService.invalidToken$.next({
            message: "Token is invalid."
          });
        }
        message = errors[0].message;
      } else {
        message = DEFAULT_ERROR_MSG;
      }
      ToastMessageService.getInstance().showToastMessage(message, app.Configuration.HttpService.time2ShowToast);
      return;
    } else if (res.status !== 200) {
      let message = DEFAULT_ERROR_MSG;
      let result: any = {};
      try {
        result = res.json();
      } catch (error) {
      }
      if (Utils.isNotNull(result) && Utils.isNotNull(result.errors) && result.errors.length > 0) {
        if (Utils.isNotNull(result.errors[0].message)) {
          message = result.errors[0].message;
        } else {
          let code = result.errors[0].code;
          if (Utils.isNotNull(code)) {
            this.getMessage('cms/message/code=' + code);
          } else {
            message = DEFAULT_ERROR_MSG;
          }
        }
      } else {
        message = DEFAULT_ERROR_MSG;
      }
      ToastMessageService.getInstance().showToastMessage(message);
    }

    let result: any;
    if (res.ok === true) {
      result = res.json() || {};
    } else {
      result = Observable.of<any>(res);
    }
    result.ok = res.ok;
    result.status = res.status;

    return result;
  }

  private extractDataMessage(res: Response | any) {
    let message = '';
    if (res.status <= 4) {
      ToastMessageService.getInstance().showToastMessage(NO_CONNECTION_MSG);
    } else if (res.status === 401) {
      let errors = res.json().errors;
      if (Utils.lengthGreaterThan0(errors)) {
        if (errors[0].code === "token.invalid") {
          this.authenticationService.userLogout$.emit({
            message: TOKEN_INVALID
          });
        }
      }
    } else if (res.status !== 200) {
      message = DEFAULT_ERROR_MSG;
    } else {
      let result: any;
      if (res.ok === true) {
        result = res.json() || {};
      } else {
        result = Observable.of<any>(res);
      }
      message = result.message;
    }
    ToastMessageService.getInstance().showToastMessage(message);
  }

  getMessage(api: string) {
    return this.http
      .get(
      this.getFullApiUrl(api),
      this.headerOptionsGetContent()
      ).subscribe(res => {
        let message = DEFAULT_ERROR_MSG;
        try {
          const body = res.json();
          if (body && body.response && body.response.message) {
            message = body.response.message;
          } else if (body && Array.isArray(body.errors) && body.errors.length > 0) {
            message = body.errors[0];
          } else {
            message = DEFAULT_ERROR_MSG;
          }
        } catch (error) {
          message = DEFAULT_ERROR_MSG;
        }
        ToastMessageService.getInstance().showToastMessage(message);
      },
      error => {
        ToastMessageService.getInstance().showToastMessage(DEFAULT_ERROR_MSG);
      });
  }

  private headerOptionsGetContent() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'API_Authentication': API_Authentication,
      'Device_Name': MobileDeviceService.getInstance().getDeviceType(),
    });
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  // Fetch data by get method from backend API service
  // tslint:disable-next-line:member-ordering
  get(api: string): Observable<any> {

    // if don't need to refresh token then directly call API
    // ...using get request
    return this.http
      .get(
      this.getFullApiUrl(api),
      this.headerOptions()
      )
      .retry(5)
      .timeout(this.receiveTimeout)
      // ...and calling .json() on the response to return data
      .map(response => {
        return this.extractData(response);
      })
      // ...errors if any
      .catch((err) => {
        return this.extractData(err);
      });
  }

  // private instance variable to hold base url
  private getFullApiUrl(api): string {
    return api.indexOf("http") === -1
      ? app.Configuration.HttpService.baseApiUrl + api
      : api;
  }

  private headerOptions() {
    // ... Set content type to JSON
    let headers = new Headers({
      'Content-Type': 'application/json',
      'API_Authentication': API_Authentication,
      'Authorization': this.authenticationService.getToken(),
      'Device_Name': MobileDeviceService.getInstance().getDeviceType()
    });
    // Create a request option
    let options = new RequestOptions({ headers: headers });
    return options;
  }
}
