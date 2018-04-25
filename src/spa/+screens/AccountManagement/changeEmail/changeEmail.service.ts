import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class ChangeEmailService {
  constructor(
    private http: HttpService
  ) {
  }

  changeEmail(email): Observable<any> {
    return this.http.put("account/email", email);
  }

}
