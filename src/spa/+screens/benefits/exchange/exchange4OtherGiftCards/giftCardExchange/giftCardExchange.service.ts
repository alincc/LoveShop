import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {HttpService} from "../../../../../framework/services/httpService/http.service";

@Injectable()
export class GiftCardExchangeService {
  constructor(
      private http: HttpService
  ) {
  }

  calculateFee(body): Observable<any> {
    return this.http.post(`order/fees`, body);
  }

    getContentFromRetreiveContent(code): Observable<any> {
        return this.http.get('cms/message/code=' + code);
    }
}
