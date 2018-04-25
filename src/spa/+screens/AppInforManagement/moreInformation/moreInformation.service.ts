import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class MoreInformationService {
  constructor(private http: HttpService) {
  }

  getInfo(code): Observable<any> {
    return this.http.get("cms/message/code=" + code);
  }

}
