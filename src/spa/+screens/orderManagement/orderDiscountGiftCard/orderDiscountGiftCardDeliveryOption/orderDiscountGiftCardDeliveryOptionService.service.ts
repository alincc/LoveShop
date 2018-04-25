import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {HttpService} from "../../../../framework/services/httpService/http.service";

@Injectable()
export class OrderDiscountGiftCardDeliveryOptionService {

  constructor(
      private http: HttpService
  ) {
  }

  updateDeliveryOption(body): Observable<any> {
      return this.http.put('order/delivery', body);
  }

}
