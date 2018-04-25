import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {HttpService} from "../../../../framework/services/httpService/http.service";

@Injectable()
export class MakeTopUp3DSService {
  constructor(
      private http: HttpService
  ) {
  }

  paymentResume(body): Observable<any> {
    return this.http.post("order/payment/card/resume", body);
  }

}
