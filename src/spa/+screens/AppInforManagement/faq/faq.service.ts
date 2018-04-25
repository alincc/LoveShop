import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class FAQService {
  constructor(private http: HttpService) {
  }

  getfaq(): Observable<any> {
    return this.http.get("cms/message/code=app.l2s.faqs");
  }

}
