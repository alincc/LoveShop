import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../../framework/services/httpService/http.service";

export interface RetrieveBalanceRequestBody {
  'cardID': string;
  'csc': string;
}

@Injectable()
export class ChangeBalanceStep2Service {
  constructor(
    private http: HttpService
  ) {
  }

  retrieveCardType(cardId): Observable<any> {
    return this.http.postwithoutAuthorization("card/type", cardId);
  }

  getHelpCSC(code): Observable<any> {
    return this.http.get("cms/message/code="+ code);
  }

  getBalanceCard(cardInformation): Observable<any> {
    return this.http.postwithoutAuthorWithoutRequestType("card/balance-status", cardInformation);
  }

}
