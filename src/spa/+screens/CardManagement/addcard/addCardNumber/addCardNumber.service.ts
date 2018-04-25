import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import { AppConfig as app } from "../../../framework/appConfig";
import { MobileDeviceService } from '../../../../framework/services/mobileDeviceService/mobileDeviceService.service';
import { HttpService } from '../../../../framework/services/httpService/http.service';
import { Camera, CameraOptions } from '@ionic-native/camera';

// const API_Authentication = app.Configuration.HttpService.API_Authentication;


declare const getImageCardDetail: any;
@Injectable()
export class AddCardNumberService {
    imgSrc :any;
    constructor(private http: HttpService,
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
        const headers = new Headers();
        return this.http.post('/card/image', data)
            .map(x => {
                // x.cardId;
                // x.expiryDate
                return x;
            });
    }
 
}
