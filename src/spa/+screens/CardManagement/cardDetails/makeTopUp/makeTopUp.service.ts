import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {HttpService} from "../../../../framework/services/httpService/http.service";

@Injectable()
export class MakeTopUpService {
  constructor(
      private http: HttpService
  ) {
  }

  generateOrder(orderInfor): Observable<any> {
    return this.http.post("order", orderInfor);
  }

  bankPayment(orderInfor): Observable<any> {
    return this.http.post("order/payment/card", orderInfor, true);
  }

  getHelpCSC(code): Observable<any> {
    return this.http.get("cms/message/code="+ code);
  }
}
