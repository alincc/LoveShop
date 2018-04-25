import { HttpService } from './../services/httpService/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginDataService {
  constructor(
    private http: HttpService
  ) {
  }

  login(dataLogin: any): Observable<any> {
    return this.http.post('account/authenticate', dataLogin);
  }

}
