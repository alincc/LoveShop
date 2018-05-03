import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import { AppConfig as app } from "../../../../framework/appConfig.ts";
import { MobileDeviceService } from '../../../../framework/services/mobileDeviceService/mobileDeviceService.service';
import { HttpService } from '../../../../../framework/services/httpService/http.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuththenticationGuardService } from '../../../../framework/login/authenticationGuard.service';

// const API_Authentication = app.Configuration.HttpService.API_Authentication;

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;
const API_Authentication = app.Configuration.HttpService.API_Authentication;
const NO_CONNECTION_MSG = app.Configuration.HttpService.NO_CONNECTION_MSG;
const TOKEN_INVALID = app.Configuration.HttpService.TOKEN_INVALID;
const INVALID_PAYMENT_MSG = app.Configuration.HttpService.INVALID_PAYMENT_MSG;
const INVALID_PAYMENT_FEE_MSG = app.Configuration.HttpService.INVALID_PAYMENT_FEE_MSG;
const INVALID_TOPUP_2192 = app.Configuration.HttpService.INVALID_TOPUP_2192;

declare const getImageCardDetail: any;
@Injectable()
export class AddCardNumberService {
    imgSrc :any;
    constructor(private http: HttpClient,
        private authenticationService: AuththenticationGuardService,
        private camera: Camera) {

    }
    

    captureCardImage(data?: any): Promise<any> {
         
    
        const result = new Promise((resolve, reject) => {
            getImageCardDetail.show(data, resolve, reject);
        });
        
        return result;
 
        // do something
        // call native
        // open camera
        // check if we have permission to access camera
    }


    getCardDetail(): Observable<any> {
        const data = {
            filename: 'card.jpg',
            name: 'cardImage'
        }
        const headers = new HttpHeaders();
        return this.http.post('card/image', data)
            .map(x => {
                // x.cardId;
                // x.expiryDate
                return x;
            });
    }

    submitCardImage(formData: FormData) {
        let headers = new HttpHeaders({
            'Content-Type': 'multipart/form-data',
            'API_Authentication': API_Authentication,
            'Authorization': this.authenticationService.getToken(),
            'Device_Name': MobileDeviceService.getInstance().getDeviceType()
        });
        return this.http.post(
            app.Configuration.HttpService.baseApiUrl +'card/image',
            formData, {headers, observe: 'response'}
        );
    }
 
}
