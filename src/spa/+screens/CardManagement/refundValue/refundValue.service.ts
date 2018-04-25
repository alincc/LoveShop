import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class RefundValueService {
  constructor(private http: HttpService) {
  }

  postValidateVirtualMasterCard(cardId): Observable<any> {
    return this.http.post("card/mastercard/validate-refund", cardId);
  }

  postPerformVirtualMasterCard(cardId): Observable<any> {
    return this.http.post("card/mastercard/refund", cardId);
  }

  getContentFromRetreiveContent(cardUrl): Observable<any> {
    return this.http.get('cms/content/urlTitle=' + cardUrl);
  }
}
