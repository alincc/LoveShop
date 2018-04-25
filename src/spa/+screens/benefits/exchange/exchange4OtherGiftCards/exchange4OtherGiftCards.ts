import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {
  CatalogueTypes, Exchange4OtherGiftCardsService,
  RequestRetrieveCatalogue
} from "./exchange4OtherGiftCards.service";
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {MyShoppingBasketSharingDataService} from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import $ from 'jquery';
import {AppConfig as app} from "../../../../framework/appConfig";
import {CardType} from "../../../../models/card-type";
import {BenefitsDataService} from "../../benefitsData.service";
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {YourCardDetailsSharingDataService} from "../../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";

@IonicPage()
@Component({
  selector: 'page-exchange4OtherGiftCards',
  templateUrl: 'exchange4OtherGiftCards.html',
  providers: [
    Exchange4OtherGiftCardsService
  ]
})
export class Exchange4OtherGiftCardsPage {
  category: any;
  benefit: any;
  categoryName: string = 'Exchange for other gift cards';

  _getCardsSub: any;
  card: any;
  noContent = false;
  products: any;
  catalogue: any;
  productsOnBasket = 0;
  baseResourceUrl;
  cardIndex = 0;
  exchange_funds;
  constructor(public routeManager: RouteManagerService,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              public exchange4OtherGCService: Exchange4OtherGiftCardsService,
              public navCtrl: NavController) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  ionViewWillEnter() {
    this._resetData();
    this.getContentHardCode();
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      $('.app-root').removeClass('not-show-tab');
      if (this.navParams.get('benefit')) {
        this.benefit = this.navParams.get('benefit');
      }
      if (this.navParams.get('card')) {
        this.card = YourCardDetailsSharingDataService.getInstance()
          .getLatestCardInfoFromHomeSharing(this.navParams.get('card'));
      }

      if (this.navParams.get('cardIndex')) {
        this.cardIndex = this.navParams.get('cardIndex');
      }
      if (this.navParams.get('catalogues')) {
        const catalogues = this.navParams.get('catalogues');
        this.products = this._extractsCardFromCatalogues(catalogues);
      }
    }
  }


  public getContentHardCode() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.exchange_funds = body.message;
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.exchange4OtherGCService
      .getContentFromRetreiveContent('exchange-funds')
      .subscribe(observer);
  }

  get4LastDigitsCardNumber(card) {

    let cardNumber = null;
    if (card.cardType === CardType.FLEXECODE) {
      cardNumber = card.cardId;
    } else {
      cardNumber = card.cardNumber;
    }

    if (!cardNumber) {
      return null;
    }

    if (card.cardType === CardType.FLEXECODE && cardNumber.indexOf('-') > 0) {
      cardNumber = cardNumber.replace(/-/g, "");
    }
    return cardNumber.substr(cardNumber.length - 4);
  }

  ionViewDidEnter() {
    this.calculateProductOnbasket();
  }

  calculateProductOnbasket() {
    this.productsOnBasket = 0;
    let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
    for (let i = 0; i < (<any>dataBasket).productsOnBasket.length; i++) {
      this.productsOnBasket += parseInt(dataBasket.productsOnBasket[i].quantity);
    }
  }

  ionViewDidLeave() {
    this._unsubscribe();
  }

  goToGiftExchange(product) {
    this.navCtrl.push('GiftCardExchangePage', {
      offer: product,
      primaryCard: this.card,
      catalogue: this.catalogue
    });
  }

  private _resetData() {
    this.products = [];
    this.benefit = null;
    this.catalogue = null;
    this.catalogue = null;
    this.noContent = false;
    this.productsOnBasket = 0;
  }

  private _buildCatalogueRequest(): RequestRetrieveCatalogue {
    const catalogueType = CatalogueTypes.PRODUCT;
    const body: RequestRetrieveCatalogue = {
      propositionId: this.card.propositionId,
      productCode: this.card.productCode,
      series: this.card.series,
      scheme: this.card.scheme,
      url: this.benefit.url,
      catalogueType: catalogueType
    }
    return body;
  }


  private _extractsCardFromCatalogues(catalogues) {
    let products = [];
    if (Array.isArray(catalogues)) {
      for (let i = 0; i < catalogues.length; i++) {
        let catalogue = catalogues[i];
        if (Array.isArray(catalogue.categories)) {
          for (let j = 0; j < catalogue.categories.length; j++) {
            let category = catalogue.categories[j];
            category.image = this._selectCategoryImage(category);
            if (category.name.toLowerCase() == this.categoryName.toLowerCase()) {
              this.catalogue = catalogue;
              this.category = category;
              if (Array.isArray(category.subCategories)) {
                for (let k = 0; k < category.subCategories.length; k++) {
                  let subCategory = category.subCategories[k];
                  subCategory.image = this._selectCategoryImage(subCategory);
                  if (Array.isArray(subCategory.products)) {
                    for (let l = 0; l < subCategory.products.length; l++) {
                      subCategory.products[l].benefit = this.benefit;
                      subCategory.products[l].subCategory = subCategory;
                      subCategory.products[l].category = category;
                      subCategory.products[l].catalogue = catalogue;
                    }
                  }
                }
                products = category.subCategories;

              } else if (Array.isArray(category.products)) {
                products = category.products;
              }
            }
          }
        }
      }
    }

    return products;
  }


  gotoTopUp() {
    this.navCtrl.push("AmountTopUpPage", {
      cardSelected: this.card,
      cardIndex: this.cardIndex
    });
    let currentIndexStack = this.navCtrl.getActive().index;
    BenefitsDataService.getInstance().setNeedBackToExchange(true, currentIndexStack);
  }


  private _selectCategoryImage(cat: any) {
    if (cat.smallImages && Array.isArray(cat.smallImages) && cat.smallImages[0]) {
      return cat.smallImages[0]
    }
    return null;
  }

  _buildCatague(catalogue) {
    catalogue.displayFee = this._selectDisplayFee(catalogue);
    return catalogue;
  }

  _selectDisplayFee(catalogue) {
    if (!catalogue || !catalogue.customAttributes || catalogue.customAttributes.serviceFeeMinimumAmount) {
      return '0';
    }
    return catalogue.customAttributes.serviceFeeMinimumAmount;
  }

  private _unsubscribe() {
    if (this._getCardsSub) {
      this._getCardsSub.unsubscribe();
    }
  }
}
