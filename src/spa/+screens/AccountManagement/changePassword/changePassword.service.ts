import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class ChangePasswordService {
  constructor(
    private http: HttpService
  ) {
  }

  getPasswordPolicy(): Observable<any> {
    return this.http.get("account/password-policy");
  }

  changePassword(password): Observable<any> {
    return this.http.put("account/password", password);
  }

  getContentFromRetreiveContent(code): Observable<any> {
      return this.http.get('cms/message/code=' + code);
  }

}
