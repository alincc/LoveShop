import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class ChangePINService {
  constructor(
    private http: HttpService
  ) {
  }

  login(dataLogin: any): Observable<any> {
    return this.http.post('account/authenticate', dataLogin);
  }

}
