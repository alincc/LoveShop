import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class SetupPINService {
  constructor(
    private http: HttpService
  ) {
  }

  updatePIN(): Observable<any> {
    return this.http.get("account/password-policy");
  }

}
