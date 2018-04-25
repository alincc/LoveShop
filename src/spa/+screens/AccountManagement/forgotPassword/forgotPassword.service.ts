import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class ForgotPasswordService {
  constructor(private http: HttpService) {
  }

  forgotPassword(email): Observable<any> {
    return this.http.post("account/password/reset", email);
  }

  getContentFromRetreiveContent(code): Observable<any> {
    return this.http.get('cms/message/code=' + code);
  }
}
