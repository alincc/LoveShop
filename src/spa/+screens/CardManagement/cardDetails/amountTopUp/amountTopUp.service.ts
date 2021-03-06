import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {HttpService} from "../../../../framework/services/httpService/http.service";

@Injectable()
export class AmountTopUpService {
  constructor(
      private http: HttpService
  ) {
  }

  generateOrder(orderInfor): Observable<any> {
    return this.http.post("order", orderInfor, true);
  }

  getContentFromRetreiveContent(code): Observable<any> {
    return this.http.get('cms/message/code=' + code);
  }
}
