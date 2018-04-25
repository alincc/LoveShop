import { HttpService } from './../services/httpService/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import $ from 'jquery';

@Injectable()
export class LogoutDataService {
  constructor(
    private http: HttpService
  ) {
  }

  logout(): Observable<any> {
    $('.app-root').removeClass('not-show-tab');
    return this.http.deleteWithoutBody('account/authenticate');
  }

}
