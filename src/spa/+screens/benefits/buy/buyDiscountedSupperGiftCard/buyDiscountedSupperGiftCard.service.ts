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
export class BuyDiscountedSupperGiftCardService {
  constructor(
      private http: HttpService
  ) {
  }

  getRetrieveCatalogue(body: RequestRetrieveCatalogue): Observable<any> {
      return this.http.post(`card/catalogue`, body);
  }

  generateOrder(orderInfor): Observable<any> {
    return this.http.post("order", orderInfor);
  }
}
