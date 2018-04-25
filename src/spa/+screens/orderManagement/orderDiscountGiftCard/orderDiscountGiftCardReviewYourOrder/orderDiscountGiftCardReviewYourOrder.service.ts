import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {HttpService} from "../../../../framework/services/httpService/http.service";

@Injectable()
export class OrderDiscountGiftCardReviewYourOrderService {

  constructor(
      private http: HttpService
  ) {
  }

  getRetrieveCatalogue(body): Observable<any> {
      return this.http.post('card/catalogue', body);
  }

  generateOrder(orderInfor): Observable<any> {
    return this.http.post("order", orderInfor);
  }

  getContentFromRetreiveContent(code): Observable<any> {
    return this.http.get('cms/message/code=' + code);
  }

}
