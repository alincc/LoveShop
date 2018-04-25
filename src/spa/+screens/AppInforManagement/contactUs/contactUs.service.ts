import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class ContactUsService {
  constructor(private http: HttpService) {
  }

  getContactUs(): Observable<any> {
    return this.http.get("cms/content/urlTitle=footer-customer-support");
  }
}
