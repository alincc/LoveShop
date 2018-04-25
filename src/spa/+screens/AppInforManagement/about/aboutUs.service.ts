import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class AboutUsService {
  constructor(private http: HttpService) {
  }

  getAboutUs(): Observable<any> {
    return this.http.get("cms/content/urlTitle=footer-about-us");
  }
}
