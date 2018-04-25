import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../../framework/services/httpService/http.service";

export interface RetrieveBalanceRequestBody {
  'cardID': string;
}

@Injectable()
export class ChangeBalanceStep1Service {
  constructor(
    private http: HttpService
  ) {
  }

  retrieveCardType(cardId): Observable<any> {
    return this.http.postwithoutAuthorization("card/type", cardId);
  }

  getBalanceCard(cardInformation): Observable<any> {
    return this.http.postwithoutAuthorWithoutRequestType("card/balance-status", cardInformation);
  }
}


