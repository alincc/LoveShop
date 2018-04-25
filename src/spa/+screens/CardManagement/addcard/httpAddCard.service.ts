// Imports
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import { AppConfig as app } from "../../../framework/appConfig";
import { Utils } from "../../../framework/services/utilities/utilities";
import { ToastMessageService } from "../../../framework/services/toastMessageService/toastMessage.service";
import { MobileDeviceService } from "../../../framework/services/mobileDeviceService/mobileDeviceService.service";
import { AuththenticationGuardService } from "../../../framework/login/authenticationGuard.service";
import { Events } from "ionic-angular";

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;
const API_Authentication = app.Configuration.HttpService.API_Authentication;
const NO_CONNECTION_MSG = app.Configuration.HttpService.NO_CONNECTION_MSG;
const TOKEN_INVALID = app.Configuration.HttpService.TOKEN_INVALID;

@Injectable()
export class HttpAddCardService {
    constructor(private authenticationService: AuththenticationGuardService,
        public events: Events,
        private http: Http) {
    }

    private receiveTimeout: number = 120000;
    post(api: string, requestType: string, body: Object): Observable<any> {
        // Stringify payload
        let bodyString = JSON.stringify(body);

        // ...using post request
        return this.http
            .post(
            this.getFullApiUrl(api),
            bodyString,
            this.headerOptions(requestType)
            )
            // ...and calling .json() on the response to return data
            .timeout(this.receiveTimeout)
            .map(this.extractData.bind(this))
            // ...errors if any
            .catch((error) => {
                return this.extractData(error);
            });
    }

    private getFullApiUrl(api): string {
        return api.indexOf("http") === -1
            ? app.Configuration.HttpService.baseApiUrl + api
            : api;
    }

    private headerOptions(requestType: string) {
        // ... Set content type to JSON
        let headers = new Headers({
            'Content-Type': 'application/json',
            'API_Authentication': API_Authentication,
            'Authorization': this.authenticationService.getToken(),
            'Device_Name': MobileDeviceService.getInstance().getDeviceType(),
            'Request_Type': requestType
        });
        // Create a request option
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    private extractData(res: Response | any) {
        if (res.status <= 4) {
            ToastMessageService.getInstance().showToastMessage(NO_CONNECTION_MSG);
            return;
        } else if (res.status === 401) {
            let errors = res.json().errors;
            let message = '';
            if (Utils.lengthGreaterThan0(errors)) {
                if (errors[0].code === "token.invalid" || errors[0].code === "park-api.token.expired") {
                    this.authenticationService.invalidToken$.next({
                        message: TOKEN_INVALID
                    });
                }
                message = errors[0].message;
            } else {
                message = DEFAULT_ERROR_MSG;
            }
            ToastMessageService.getInstance().showToastMessage(message, app.Configuration.HttpService.time2ShowToast);
            return;
        } else if (res.status !== 200) {
            let message = '';
            let result;
            try { result = res.json(); } catch (e) { }
            if (Utils.isNotNull(result) && Utils.isNotNull(result.errors) && result.errors.length > 0) {
                if (Utils.isNotNull(result.errors[0].message)) {
                    message = result.errors[0].message;
                } else {
                    let code = result.errors[0].code;
                    if (Utils.isNotNull(code)) {
                        this.getMessage('cms/message/code=' + code)
                    } else {
                        message = DEFAULT_ERROR_MSG;
                    }
                }
            } else {
                message = DEFAULT_ERROR_MSG;
            }
            ToastMessageService.getInstance().showToastMessage(message);
            return;
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

    getMessage(api: string) {
        return this.http
            .get(
            this.getFullApiUrl(api),
            this.headerOptionsGetContent()
            )
            .subscribe(res => {
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
            }, error => {
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
}
