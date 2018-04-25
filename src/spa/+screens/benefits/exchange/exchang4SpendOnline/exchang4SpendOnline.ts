import { Component } from '@angular/core';
import { IonicPage, AlertController, NavParams, NavController } from 'ionic-angular';
import { Exchang4SpendOnlineService, RequestRetrieveCatalogue, CatalogueTypes } from "./exchang4SpendOnline.service";
import { Subscription } from "rxjs/Subscription";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import {AppConfig as app} from "../../../../framework/appConfig";


@IonicPage()
@Component({
  selector: 'page-exchang4SpendOnline',
  templateUrl: 'exchang4SpendOnline.html',
  providers: [
    Exchang4SpendOnlineService
  ]
})
export class Exchang4SpendOnlinePage {
  category: any;
  catalogue: any;

  categoryName: string = 'Exchange to Spend Online';

  benefit: any;
  card: any;
  products: any;
  noContent: any;
  feeMsg;
  baseResourceUrl: any;
  images: any[] = [];
  add_card_important_card_info = app.Configuration.ContentMessage.add_card_important_card_info;

  private _getCardsSub: Subscription;

  constructor(
    public routeManager: RouteManagerService,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public navCtrl: NavController,
    public exchang4SpendOnlineService: Exchang4SpendOnlineService) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  ionViewDidEnter() {
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

  extracMsgFee(contentMsg) {
    this.feeMsg = '';
    let indexString = contentMsg.shortDescription.indexOf('Please Note:');
    if (indexString > -1) {
      this.feeMsg = contentMsg.shortDescription.substr(indexString).replace(/<[^>]*>/g, "").replace("Please Note:", "").trim();
    }
  }

  showCardInformation(card: any, index) {
    this.navCtrl.push("MasterCardInfoPage", { card: card, products: this.products, masterCardTypeSelected: this.products[index], idx : index,  primaryCard: this.card });
  }

  showCardExchange(card: any, index) {
    const product = (card && Array.isArray(card.products)) ? card.products[0] : card;
    this.extracMsgFee(card);
    this.navCtrl.push("MasterCardExchangePage", { targetCard: product, masterCardTypeSelected: this.products[index], primaryCard: this.card, feeMsg: this.feeMsg });
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

  private _resetData() {
    this.products = [];
    this.card = null;
    this.noContent = false;
    this.benefit = null;
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

  private _unsubscribe() {
    if (this._getCardsSub) {
      this._getCardsSub.unsubscribe();
    }
  }
}
