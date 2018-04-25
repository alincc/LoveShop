import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class PrivacyPolicyService {
  constructor(private http: HttpService) {
  }

  getPrivacyPolicy(): Observable<any> {
    return this.http.get("cms/content/urlTitle=privacy-policy-content");
  }
}
