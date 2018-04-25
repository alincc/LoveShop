import { Utils } from './../utilities/utilities';
import { ToastMessageService } from './../toastMessageService/toastMessage.service';
import { AuththenticationGuardService } from './../../login/authenticationGuard.service';
import { AppConfig as app } from './../../appConfig';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import { MobileDeviceService } from "../mobileDeviceService/mobileDeviceService.service";

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;
const API_Authentication = app.Configuration.HttpService.API_Authentication;
const NO_CONNECTION_MSG = app.Configuration.HttpService.NO_CONNECTION_MSG;
const TOKEN_INVALID = app.Configuration.HttpService.TOKEN_INVALID;
const INVALID_PAYMENT_MSG = app.Configuration.HttpService.INVALID_PAYMENT_MSG;
const INVALID_PAYMENT_FEE_MSG = app.Configuration.HttpService.INVALID_PAYMENT_FEE_MSG;
const INVALID_TOPUP_2192 = app.Configuration.HttpService.INVALID_TOPUP_2192;

@Injectable()
export class HttpService {
    private callCount: number = 0;
    private receiveTimeout: number = 120000;

    constructor(private authenticationService: AuththenticationGuardService,
        private http: Http) {
        this.callCount = 0;
    }

    private extractData(res: Response | any, rawError = false) {
        if (res instanceof Error) {
            return;
        }

        if (res.status <= 4) {
            ToastMessageService.getInstance().showToastMessage(NO_CONNECTION_MSG);
            return;
        } else if (res.status === 401) {
            let errors;
            try {
                errors = res.json().errors;
            } catch (e) {
            }
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
            throw errors;
        }
        else if (res.status !== 200) {
            let message = '';
            let result: any = {};
            try {
                result = res.json();
            } catch (e) {
            }

            if (Utils.isNotNull(result) && Utils.isNotNull(result.errors) && result.errors.length > 0) {
                if (Utils.isNotNull(result.errors[0].code) && rawError  && (result.errors[0].code ===  INVALID_PAYMENT_FEE_MSG || result.errors[0].code === INVALID_TOPUP_2192)) {
                    throw result.errors[0];
                } else if (Utils.isNotNull(result.errors[0].code) && result.errors[0].code === INVALID_PAYMENT_MSG) {
                    const error = new Error(message);
                    error['data'] = result;
                    throw error;
                }else if (Utils.isNotNull(result.errors[0].message)) {
                    message = result.errors[0].message;
                    if (Utils.isNotNull(message)) {
                        var elem = document.createElement('div');
                        elem.innerHTML = message;

                        message = Utils.getTextContent(elem);
                    }
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

            if (Utils.isNotNull(result.response)) {
                const error = new Error(message);
                error['data'] = result;
                throw error;
            }
            throw new Error(message);
        }

        let result: any;
        if (res.ok === true) {
            result = {};
            try {
                result = res.json();
            } catch (e) {
            }
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

    // Fetch data by get method from backend API service
    // tslint:disable-next-line:member-ordering
    get(api: string, rawError = false): Observable<any> {
        return this.http
            .get(
            this.getFullApiUrl(api),
            this.headerOptions()
            )
            .timeout(this.receiveTimeout)
            // ...and calling .json() on the response to return data
            .map(response => {
                return this.extractData(response);
            })
            // ...errors if any
            .catch((err) => {
                return this.extractData(err, rawError);
            });
    }

    // post method
    post(api: string, body: Object, rawError = false): Observable<any> {
        // Stringify payload
        let bodyString = JSON.stringify(body);

        // ...using post request
        return this.http
            .post(
            this.getFullApiUrl(api),
            bodyString,
            this.headerOptions()
            )
            .timeout(this.receiveTimeout)
            // ...and calling .json() on the response to return data
            .map(this.extractData.bind(this))
            // ...errors if any
            .catch((error) => {
                return this.extractData(error, rawError);
            });
    }

    postInBackground(api: string, body: Object): Observable<any> {
        // Stringify payload
        let bodyString = JSON.stringify(body);
        // ...using post request
        return this.http
            .post(
            this.getFullApiUrl(api),
            bodyString,
            this.headerOptions()
            )
            .timeout(this.receiveTimeout);
    }

    postwithoutAuthorWithoutRequestType(api: string, body: Object): Observable<any> {
        // Stringify payload
        let bodyString = JSON.stringify(body);

        // ...using post request
        return this.http
            .post(
            this.getFullApiUrl(api),
            bodyString,
            this.headerOptionsNoAuthorization()
            )
            .timeout(this.receiveTimeout)
            // ...and calling .json() on the response to return data
            .map(this.extractData.bind(this))
            // ...errors if any
            .catch((error) => {
                return this.extractData(error);
            });
    }

    postwithoutAuthorization(api: string, body: Object): Observable<any> {
        // Stringify payload
        let bodyString = JSON.stringify(body);

        // ...using post request
        return this.http
            .post(
            this.getFullApiUrl(api),
            bodyString,
            this.headerOptionsNoAuthorizationBalance()
            )
            .timeout(this.receiveTimeout)
            // ...and calling .json() on the response to return data
            .map(this.extractData.bind(this))
            // ...errors if any
            .catch((error) => {
                return this.extractData(error);
            });
    }

    // put method
    put(api: string, body: Object, rawError = false): Observable<any> {
        let bodyString = JSON.stringify(body);

        return this.http
            .put(
            this.getFullApiUrl(api),
            bodyString,
            this.headerOptions()
            )
            .timeout(this.receiveTimeout)
            // ...and calling .json() on the response to return data
            .map(this.extractData.bind(this))
            // ...errors if any
            .catch((error) => {
                return this.extractData(error, rawError);
            });
    }

    // Delete method
    delete(api: string, body: Object, rawError = false): Observable<any> {
        let headerOptions = this.headerOptions();
        headerOptions.body = body;

        return this.http
            .delete(
            this.getFullApiUrl(api),
            headerOptions
            )
            .timeout(this.receiveTimeout)
            // ...and calling .json() on the response to return data
            .map(this.extractData.bind(this))
            // ...errors if any
            .catch((error) => {
                return this.extractData(error, rawError);
            });
    }

    deleteWithoutBody(api: string): Observable<any> {
        let headerOptions = this.headerOptions();

        return this.http
            .delete(
            this.getFullApiUrl(api),
            headerOptions
            )
            .timeout(this.receiveTimeout)
            // ...and calling .json() on the response to return data
            .map(this.extractData.bind(this))
            // ...errors if any
            .catch((error) => {
                return this.extractData(error);
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

    private headerOptionsNoAuthorizationBalance() {
        // ... Set content type to JSON
        let headers = new Headers({
            'Content-Type': 'application/json',
            'API_Authentication': API_Authentication,
            'Device_Name': MobileDeviceService.getInstance().getDeviceType(),
            'Request_Type': 'BALANCE'
        });

        // Create a request option
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    private headerOptionsNoAuthorization() {
        // ... Set content type to JSON
        let headers = new Headers({
            'Content-Type': 'application/json',
            'API_Authentication': API_Authentication,
            'Device_Name': MobileDeviceService.getInstance().getDeviceType(),
        });

        // Create a request option
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    // Fetch data by get method from backend API service
    // tslint:disable-next-line:member-ordering
    getExternal(api: string): Observable<any> {
        return this.http
            .get(api)
            .timeout(this.receiveTimeout)
            .map(response => {
                return this.extractData(response);
            })
            .catch((err) => {
                return this.extractData(err);
            });
    }
}
