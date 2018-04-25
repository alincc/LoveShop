import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../../framework/services/httpService/http.service";

@Injectable()
export class OrderDiscountGiftCardUpdateDeliveryOptionService {
  constructor(
    private http: HttpService
  ) {
  }

  address;


  searchPostcodeAutoComplete(url: string): Observable<any> {
    return this.http.getExternal(url);
  }

  lookUpAddress(url: string): Observable<any> {
    return this.http.getExternal(url);
  }

  updateDeliveryOption(body): Observable<any> {
    return this.http.put('order/delivery', body);
  }

  saveNewAddress(address) {
    this.address = address;
  }

  getNewAddress() {
    return this.address;
  }

  resetNewAddress() {
    this.address = null;
  }


}
