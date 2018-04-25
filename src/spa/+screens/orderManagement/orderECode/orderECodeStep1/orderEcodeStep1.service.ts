import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {HttpService} from "../../../../framework/services/httpService/http.service";

@Injectable()
export class OrderEcodeStep1Service {

  constructor(
      private http: HttpService
  ) {
  }

  confirmOrder(orderInfor): Observable<any> {
    return this.http.post("order/payment/flexecash", orderInfor);
  }

  updateDeliveryMethod(orderInforToUpdateDelivery): Observable<any> {
    return this.http.put("order/delivery", orderInforToUpdateDelivery);
  }
}
