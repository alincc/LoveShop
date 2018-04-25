import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class TermsConditionsService {
  constructor(private http: HttpService) {
  }

  getTermConditions(): Observable<any> {
    return this.http.get("cms/message/code=app.l2s.tcs");
  }

}
