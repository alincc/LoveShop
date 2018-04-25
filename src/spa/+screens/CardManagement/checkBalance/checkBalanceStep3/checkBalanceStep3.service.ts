import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../../framework/services/httpService/http.service";

@Injectable()
export class ChangeBalanceStep3Service {
  constructor(
    private http: HttpService
  ) {
  }

  getBalanceCard(cardInformation): Observable<any> {
    return this.http.postwithoutAuthorWithoutRequestType("card/balance-status", cardInformation);
  }

  getContentFromRetreiveContent(code): Observable<any> {
    return this.http.get('cms/message/code=' + code);
  }

}
