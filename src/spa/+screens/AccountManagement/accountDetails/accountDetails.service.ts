import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class AccountDetailsService {
  constructor(
    private http: HttpService
  ) {
  }

  getUserDetails(): Observable<any> {
    return this.http.get("account");
  }

}
