import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../../framework/services/httpService/http.service';

@Injectable()
export class YourCardDetailsApiGateway {
  constructor(
    private http: HttpService
  ) {
  }

  getListCards(): Observable<any> {

    return this.http.get("card");
  }

  getMessageByCode(code): Observable<any> {
        return this.http.get('cms/message/code=' + code);
    }
}

