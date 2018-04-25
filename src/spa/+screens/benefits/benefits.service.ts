import { CardOfferRequestBody } from './benefits.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from "../../framework/appConfig";
import { HttpService } from "../../framework/services/httpService/http.service";

type CatalogueType = 'P' | 'S' | 'F';

const PRODUCT: CatalogueType = 'P';
const PERSONALISATION: CatalogueType = 'S';
const FULFILMENT: CatalogueType = 'F';

export const CatalogueTypes = {
  PRODUCT,
  PERSONALISATION,
  FULFILMENT
}

export interface RequestRetrieveCatalogue {
  propositionId?: string;
  scheme?: string;
  series?: string;
  productCode?: string;
  catalogueType: CatalogueType;
  url?: string;
}

export interface CardOfferRequestBody {
  propositionId: string;
  scheme: string;
  series: string;
  productCode: string;
}

export const MAP_BENEFIT_EXCHANGE_PAGE = {
  'exchange to spend online': 'Exchang4SpendOnlinePage',
  'exchange for e-codes': 'Exchange4ECodePage',
  'exchange for dining e-codes': 'Exchange4DiningECodePage',
  'exchange for other gift cards': 'Exchange4OtherGiftCardsPage',
  'holidays': 'HolidaysPage',
};
export const MAP_BENEFIT_BUY_PAGE = {
  'discounted gift cards': 'BuyDiscountedGiftCardPage',
  'discounted supermarket cards': 'BuyDiscountedSupperGiftCardPage',
  'default': 'BuySpecSaversPage'
};

export const MAP_BENEFIT_PAGE = {
  ...MAP_BENEFIT_BUY_PAGE,
  ...MAP_BENEFIT_EXCHANGE_PAGE
};

@Injectable()
export class BenefitsService {

  constructor(
    private http: HttpService
  ) {
  }

  getRetrieveCardsInfo(): Observable<any> {
    return this.http.get(`card`);
  }

  getGenericsOffers() {
    return this.http.post(`card/offers`, {});
  }

  getOffersByCard(body: CardOfferRequestBody, backgroud?: boolean): Observable<any> {
    if (backgroud) {
      return this.http.postInBackground(`card/offers`, body);
    } else {
      return this.http.post(`card/offers`, body);
    }
  }

  getSpecialOffers(): Observable<any> {
    return this.http.post(`card/offers`, {});
  }

  buildCatalogueRequestFromCard(card: any, url: string, catalogueType: CatalogueType = PRODUCT): RequestRetrieveCatalogue {
    const req: RequestRetrieveCatalogue = {
      propositionId: card.propositionId,
      productCode: card.productCode,
      series: card.series,
      scheme: card.scheme,
      url: url,
      catalogueType: catalogueType
    };
    return req;
  }

  getRetrieveCatalogue(body: RequestRetrieveCatalogue): Observable<any> {
    return this.http.post(`card/catalogue`, body);
  }

  getContentFromRetreiveContent(code): Observable<any> {
    return this.http.get('cms/message/code=' + code);
  }
}
