import { HttpService } from './../../../../framework/services/httpService/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderMasterCardExchangeStep1Service {
  constructor(private http: HttpService) {
  }

  generateOrder(orderInfor): Observable<any> {
    return this.http.post("order", orderInfor);
  }

  confirmOrder(orderInfor): Observable<any> {
    return this.http.post("order/payment/flexecash", orderInfor);
  }

}
