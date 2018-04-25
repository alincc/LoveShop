import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class ReturnService {
  constructor(private http: HttpService) {
  }

  getReturn(): Observable<any> {
    return this.http.get("cms/content/urlTitle=footer-returns-refunds");
  }
}
