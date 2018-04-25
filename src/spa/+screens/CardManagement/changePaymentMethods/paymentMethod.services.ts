import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class PaymentMethodService {
  constructor(
    private http: HttpService
  ) {
  }

  getListPaymentMethod(): Observable<any> {
    return this.http.get("account/payment-methods");
  }

  removeTokenizedCard(body): Observable<any> {
    return this.http.delete("account/payment-methods", body);
  }

  updateTokenizedCard(body): Observable<any> {
    return this.http.put("account/payment-methods", body);
  }

}
