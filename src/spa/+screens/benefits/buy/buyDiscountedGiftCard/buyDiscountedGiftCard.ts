import { Component } from '@angular/core';
import { IonicPage, AlertController, NavParams, NavController } from 'ionic-angular';
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { Subscription } from "rxjs/Subscription";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { RequestRetrieveCatalogue, CatalogueTypes, BuyDiscountedGiftCardService } from "./buyDiscountedGiftCard.service";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { MyShoppingBasketSharingDataService } from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import { AppConfig as app } from "../../../../framework/appConfig";
import {CardType} from "../../../../models/card-type";
import $ from 'jquery';
const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;

@IonicPage()
@Component({
  selector: 'page-buyDiscountedGiftCard',
  templateUrl: 'buyDiscountedGiftCard.html',
  providers: [
    BuyDiscountedGiftCardService
  ]
})
export class BuyDiscountedGiftCardPage {
  productsOnBasket: number;
  benefit: any;
  baseResourceUrl;
  categoryName: string = 'discounted gift cards';
  card: any;
  products: any;
  catalogue: any;
  category: any;
  noContent: any;
  basket_form_checkout_current_product = app.Configuration.ContentMessage.basket_form_checkout_current_product;
  basket_form_no_card_available = app.Configuration.ContentMessage.basket_form_no_card_available;
  private _getCardsSub: Subscription;

  constructor(
    public routeManager: RouteManagerService,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public navCtrl: NavController,
    public buyDiscountedGiftCardService: BuyDiscountedGiftCardService) {
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
        this.card = this.navParams.get('card');
      }
      if (this.navParams.get('catalogues')) {
        const catalogues = this.navParams.get('catalogues');
        this.products = this._extractsCardFromCatalogues(catalogues);
      }
    }
  }

  ionViewDidLeave() {
    this._unsubscribe();
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

  gotoBuyADiscountedGiftCard(product) {
    this.navCtrl.push('BuyADiscountedGiftCardPage', {
      offer: product,
      primaryCard: this.card,
      catalogue: this.catalogue,
      category: this.category
    });
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

  private _resetData() {
    this.products = [];
    this.benefit = null;
    this.catalogue = null;
    this.catalogue = null;
    this.noContent = false;
  }

  private _showError(message) {
    ToastMessageService.getInstance().showToastMessage(message);
  }

  private _unsubscribe() {
    if (this._getCardsSub) {
      this._getCardsSub.unsubscribe();
    }
  }
}
