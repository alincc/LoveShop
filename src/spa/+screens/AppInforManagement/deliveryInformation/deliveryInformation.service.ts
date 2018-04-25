import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class DeliveryInfomationService {
  constructor(private http: HttpService) {
  }

  getDeliveryInfomationService(): Observable<any> {
    return this.http.get("cms/content/urlTitle=footer-delivery-information");
  }
}
