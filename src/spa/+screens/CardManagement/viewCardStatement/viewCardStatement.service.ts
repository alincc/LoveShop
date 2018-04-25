import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class ViewCardStatementService {
  constructor(private http: HttpService) {
  }

  getStatementList(cardData): Observable<any> {
    return this.http.post("card/statement", cardData);
  }

  getContentFromRetreiveContent(code): Observable<any> {
    return this.http.get('cms/message/code=' + code);
  }
}
