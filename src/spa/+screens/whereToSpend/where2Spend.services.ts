import { HttpService } from './../../framework/services/httpService/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

export const CARD_INSTORE = 'CARD_INSTORE';
export const VOUCHER_INSTORE = 'VOUCHER_INSTORE';
export const ONLINE = 'ONLINE';
export const VIRTUAL_MASTERCARD = 'VIRTUAL_MASTERCARD';


export type RetriveRetailerRequestType = 'CARD_INSTORE'  | 
                                         'VOUCHER_INSTORE' | 
                                         'ONLINE' | 
                                         'VIRTUAL_MASTERCARD';

export interface CategoryOpt {
  [x: string]: string
}                                         

export interface RetriveRetailerRequest {
  requestType: RetriveRetailerRequestType;
  scheme?: string;
  latitude?: string;
  longitude?: string;
  categories?: CategoryOpt[]
  key?: string;
}

@Injectable()
export class Where2SpendServices {
  constructor(
    private http: HttpService
  ) {
  }

  retriveRetailerLocation(body: RetriveRetailerRequest){
    return this.http.post('card/where', body).share();
  }

  searchPostcodeAutoComplete(url: string): Observable<any> {
    return this.http.getExternal(url);
  }

  lookUpAddress(url: string): Observable<any> {
    return this.http.getExternal(url);
  }
  

}
