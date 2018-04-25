import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class CardDetailsDataService {
  constructor(
    private http: HttpService
  ) {
  }

  getUserDetails(): Observable<any> {
    return this.http.get("account");
  }

  removeCard(card): Observable<any> {
    return this.http.delete("card", card);
  }

  updateCardNickName(modelNickName): Observable<any> {
    return this.http.put("card/nickname", modelNickName);
  }

  suspendCard(cardModel): Observable<any> {
    return this.http.post("card/suspend", cardModel);
  }

  generateOrder(topUpmodel): Observable<any> {
    return this.http.post("order", topUpmodel);
  }

  getSMSAlertSetting(cardNumber): Observable<any> {
    return this.http.post("card/sms", cardNumber);
  }

  updateSMSAlertSetting(model): Observable<any> {
    return this.http.put("card/sms", model);
  }

  retrieveMasterCardInfo(body): Observable<any> {
    return this.http.post("card/mastercard", body);
  }

  getContentFromRetreiveContent(code): Observable<any> {
    return this.http.get('cms/message/code=' + code);
  }
}
