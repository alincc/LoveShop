import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class CookieService {
  constructor(private http: HttpService) {
  }

  getCookie(): Observable<any> {
    return this.http.get("cms/content/urlTitle=footer-cookies");
  }
}
