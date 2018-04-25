import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class RegisterDataService {
  constructor(
    private http: HttpService
  ) {
  }

  getPasswordValidationRules(): Observable<any> {
    return this.http.get("account/password-policy");
  }

  validateEmailAddress(email: string): Observable<any> {
    return this.http.post("account/email", email);
  }

  searchPostcodeAutoComplete(url: string): Observable<any> {
    return this.http.getExternal(url);
  }

  lookUpAddress(url: string): Observable<any> {
    return this.http.getExternal(url);
  }

  createAccount(userData): Observable<any> {
    return this.http.post("account", userData);
  }

    getContentFromRetreiveContent(code): Observable<any> {
        return this.http.get('cms/message/code=' + code);
    }
}
