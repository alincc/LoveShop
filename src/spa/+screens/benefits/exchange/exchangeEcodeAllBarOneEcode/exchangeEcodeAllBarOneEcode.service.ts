import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AppConfig } from "../../../../framework/appConfig";
import {HttpService} from "../../../../framework/services/httpService/http.service";

export const CatalogueTypes = {
    PRODUCT: 'P',
    PERSONALISATION: 'S',
    FULFILMENT: 'F'
}

export interface RequestRetrieveCatalogue {
    propositionId?: string;
    scheme?: string;
    series?: string;
    productCode?: string;
    catalogueType: string;
    url?: string;
}

@Injectable()
export class ExchangeEcodeAllBarOneEcodeService {
  constructor(
      private http: HttpService
  ) {
  }

  getRetrieveCatalogue(body: RequestRetrieveCatalogue): Observable<any> {
      return this.http.post(`card/catalogue`, body);
  }

  calculateFee(body): Observable<any> {
    return this.http.post(`order/fees`, body);
  }

    getContentFromRetreiveContent(code): Observable<any> {
        return this.http.get('cms/message/code=' + code);
    }
}
