import { Component } from '@angular/core';
import { IonicPage, AlertController, NavParams, NavController } from 'ionic-angular';
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { RequestRetrieveCatalogue, CatalogueTypes, Exchange4ECodeService } from "./exchange4ECode.service";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { MyShoppingBasketSharingDataService } from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import $ from 'jquery';
import { AppConfig as app } from "../../../../framework/appConfig";
import {CardType} from "../../../../models/card-type";
import {BenefitsDataService} from "../../benefitsData.service";
import {YourCardDetailsSharingDataService} from "../../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";
const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;;

@IonicPage()
@Component({
  selector: 'page-exchange4ECode',
  templateUrl: 'exchange4ECode.html',
  providers: [
    Exchange4ECodeService
  ]
})
export class Exchange4ECodePage {
  category: any;
  benefit: any;
  categoryName: string = 'Exchange for e-codes';

  _getCardsSub: any;
  card: any;
  noContent = false;
  products: any;
  catalogue: any;
  productsOnBasket = 0;
  baseResourceUrl;
    cardIndex = 0;
  constructor(
    public routeManager: RouteManagerService,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public navCtrl: NavController,
    public exchange4ECodeService: Exchange4ECodeService
  ) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  ionViewWillEnter() {


    this._resetData();
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
        $('.app-root').removeClass('not-show-tab');
      if (this.navParams.get('benefit')) {
        this.benefit = this.navParams.get('benefit');
      }
      if (this.navParams.get('card')) {
        let card = this.navParams.get('card');
        this.card = YourCardDetailsSharingDataService.getInstance()
            .getLatestCardInfoFromHomeSharing(card);;
      }
      if (this.navParams.get('catalogues')) {
        const catalogues = this.navParams.get('catalogues');
        this.products = this._extractsCardFromCatalogues(catalogues);
      }
    }
  }

  ionViewDidEnter() {
    this.calculateProductOnbasket();
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

        if (this.navParams.get('cardIndex')) {
            this.cardIndex = this.navParams.get('cardIndex');
        }

        if (card.cardType === CardType.FLEXECODE && cardNumber.indexOf('-') > 0) {
            cardNumber = cardNumber.replace(/-/g, "");
        }
        return cardNumber.substr(cardNumber.length - 4);
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

  gotoAllBarOneCode(product) {
    this.navCtrl.push('ExchangeEcodeAllBarOneEcodePage', { ecode: product, primaryCard: this.card, catalogue: this.catalogue });
  }


    gotoTopUp() {
        this.navCtrl.push("AmountTopUpPage", {
            cardSelected: this.card,
            cardIndex: this.cardIndex
        });

        let currentIndexStack = this.navCtrl.getActive().index;
        BenefitsDataService.getInstance().setNeedBackToExchange(true, currentIndexStack);
    }


    private _resetData() {
    this.products = [];
    this.benefit = null;
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

  private _selectCategoryImage(cat: any) {
    if (cat.smallImages && Array.isArray(cat.smallImages) && cat.smallImages[0]) {
      return cat.smallImages[0]
    }
    return null;
  }

  private _handleError(res) {
    LoadingIndicatorService.getInstance().hideLoadingIndicator();
    let msg = DEFAULT_ERROR_MSG;
    try {
      let body = JSON.parse(res._body);
      msg = body.errors[0].message;
    } catch (e) {
      msg = DEFAULT_ERROR_MSG;
    }
    this._showError(msg);
  }

  private _showError(message) {
    ToastMessageService.getInstance().showToastMessage(message);
  }

  _buildCatague(catalogue) {
    return catalogue;
  }

  private _selectDisplayFee(card) {
    if (!card || !card.discountPercentage) {
      return '0';
    }
    return card.discountPercentage;
  }

  private _unsubscribe() {
    if (this._getCardsSub) {
      this._getCardsSub.unsubscribe();
    }
  }
}
