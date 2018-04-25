import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Subscription} from "rxjs/Subscription";
import {
  BuyDiscountedSupperGiftCardService, CatalogueTypes,
  RequestRetrieveCatalogue
} from "./buyDiscountedSupperGiftCard.service";
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {OrderManagementSharingDataService} from "../../../orderManagement/orderManagementSharingData.services";
import {AppConfig} from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-buyDiscountedSupperGiftCard',
  templateUrl: 'buyDiscountedSupperGiftCard.html',
  providers: [
    BuyDiscountedSupperGiftCardService
  ]
})
export class BuyDiscountedSupperGiftCardPage {
  benefit: any;
  categoryName: string = 'discounted supermarket cards';
  card: any;
  products: any;
  catalogue: any;
  category: any;
  noContent: any;
  baseResourceUrl;
  basket_form_no_card_available;

  private _getCardsSub: Subscription;
  private _generateOrder: Subscription;

  constructor(public routeManager: RouteManagerService,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              public navCtrl: NavController,
              public buyDiscountedSupperGiftCardService: BuyDiscountedSupperGiftCardService) {
    this.baseResourceUrl = AppConfig.Configuration.HttpService.baseResourceUrl;
    this.basket_form_no_card_available = AppConfig.Configuration.ContentMessage.basket_form_no_card_available;
  }

  ionViewWillEnter() {
    this._resetData();
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
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

  gotoOrder(product) {
    if (this._generateOrder) {
      this._generateOrder.unsubscribe();
    }
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    let body = this._buildGenerateOrderRequest(product);

    this.buyDiscountedSupperGiftCardService.generateOrder(body)
      .subscribe((res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        OrderManagementSharingDataService.getInstance().savePrimaryCard((this.card));
        OrderManagementSharingDataService.getInstance().saveOrderGenerateOrderSupermarket(body);
        this.navCtrl.push("OrderSupermarketStep1");
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  private _buildGenerateOrderRequest(product) {
    let body = {
      "propositionId": this.card.propositionId,
      "orderJourney": "ORDER_STORE_CARD",
      "orderlines": []
    }

    let orderLineProductSelected = {
      "productCode": product.productCode,
      "quantity": 1,
    }
    body.orderlines.push(orderLineProductSelected);
    return body;
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

              let str = this.category.longDescription;
              if (this.category.longDescription.indexOf(this.baseResourceUrl) < 1) {
                this.category.longDescription = str.replace('src="', 'src="' + this.baseResourceUrl);
              }
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

  private _unsubscribe() {
    if (this._getCardsSub) {
      this._getCardsSub.unsubscribe();
    }
  }
}
