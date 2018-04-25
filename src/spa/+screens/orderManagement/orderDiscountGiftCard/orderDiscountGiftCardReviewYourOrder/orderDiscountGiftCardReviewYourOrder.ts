import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RouteManagerService} from '../../../../framework/services/routeManager/routeManager.service';
import {MyShoppingBasketSharingDataService} from '../../../myShoppingBasket/myShoppingBasketSharingData.services';
import {LoadingIndicatorService} from '../../../../framework/services/loadingIndicatorService/loadingIndicator.service';
import {OrderDiscountGiftCardReviewYourOrderService} from './orderDiscountGiftCardReviewYourOrder.service';
import {Utils} from '../../../../framework/services/utilities/utilities';
import {OrderDiscountGiftCardSharingDataService} from '../orderDiscountGiftCardSharingData.services';
import {AppConfig as app} from "../../../../framework/appConfig";
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-orderDiscountGiftCardReviewYourOrder',
  templateUrl: 'orderDiscountGiftCardReviewYourOrder.html',
  providers: [
    OrderDiscountGiftCardReviewYourOrderService
  ]
})
export class OrderDiscountGiftCardReviewYourOrder {
  _generateOrder;
  products;
  indexSelectedGreetingCard = 0;
  indexExtraSelectedGreetingCard = 0;
  productToChooseDesign = [];
  extraGCToChooseDesign = [];
  primaryCard;
  tempGreetingCard;
  tempExtraGreetingCard;
  tempGreetingCardMSG;
  orderGreetingCard;
  baseImageUrl = app.Configuration.HttpService.baseResourceUrl;
  exTraGreetingCard;
  freeGreetingCard;

  total = 0;
  needGotoExtraPage = false;
  order_gwp_default_section4_need_free_wallet_info ='';
  order_gwp_default_section4_need_free_wallet='';
  order_gwp_default_section4_need_free_wallet_button='';
  order_gwp_default_section4_choice_h4_1='';
  order_gwp_default_section4_buying_multiple_vouchers_info='';
  order_gwp_default_section4_buying_multiple_vouchers_button='';
  order_gwp_default_section4_choice_h4_2='';

  constructor(public routeManager: RouteManagerService,
              public navParams: NavParams,
              public navCtrl: NavController,
              private orderDiscountGiftCardReviewYourOrderService: OrderDiscountGiftCardReviewYourOrderService) {

  }

  ionViewWillEnter() {
    OrderDiscountGiftCardSharingDataService.getInstance().resetNewOrderNumber();
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {


      let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
      this.products = dataBasket.productsOnBasket;
      this.primaryCard = MyShoppingBasketSharingDataService.getInstance().getPrimaryCard();
      if (this.navParams.get('bodyOrder')) {
        this._generateOrder = this.navParams.get('bodyOrder');
      }
      if (this.navParams.get('needGotoFreeGC') === true) {
        this.addFreeGreetingCard();
      }
    }
    this.needGotoExtraPage = false;

    this.buildGenerateOrder();
    this.getContentMSG();
  }

  ionViewDidEnter() {
    this.buildGenerateOrder();
  }

  ionViewDidLeave() {
    this.needGotoExtraPage = false;
  }

  buildGenerateOrder() {

    let greetingCard = OrderDiscountGiftCardSharingDataService.getInstance().getSelectedFreeGreetingCard();
    this.freeGreetingCard = OrderDiscountGiftCardSharingDataService.getInstance().getSelectedFreeGreetingCard();
    let greetingCardExtra = OrderDiscountGiftCardSharingDataService.getInstance().getExtraGreetingCard();
    this.exTraGreetingCard = OrderDiscountGiftCardSharingDataService.getInstance().getExtraGreetingCard();
    let greetingCardMsg = OrderDiscountGiftCardSharingDataService.getInstance().getMessagePersonal();

    if (Utils.isNotNull(greetingCard) && (Utils.isNotNull(greetingCard.greetingCardSelected))) {
      if (greetingCard.selectedGreetingCard === true) {
        this.indexSelectedGreetingCard = greetingCard.greetingCardIndex;
        this.tempGreetingCard = {
          'productCode': greetingCard.greetingCardSelected.productCode || '',
          'quantity': 1,
        }
      }
    }

    if (Utils.isNotNull(greetingCardExtra) && (Utils.isNotNull(greetingCardExtra.extraGreetingCardSelected))) {
      if (greetingCardExtra.selectedExtraGreetingCard === true) {
        this.indexExtraSelectedGreetingCard = greetingCardExtra.extraGreetingCardIndex;
        this.tempExtraGreetingCard = {
          'productCode': greetingCardExtra.extraGreetingCardSelected.productCode || '',
          'quantity': greetingCardExtra.quantity,
        }
      }
    }

    if (Utils.isNotNull(greetingCardMsg) && Utils.isNotNull(greetingCardMsg.contentMessage)) {
      this.tempGreetingCardMSG = {
        'giftWalletMessageLine1': greetingCardMsg.contentMessage.to || '',
        'giftWalletMessageLine2': greetingCardMsg.contentMessage.message || '',
        'giftWalletMessageLine3': greetingCardMsg.contentMessage.from || '',
      }
    }

    if (Utils.isNotNull(this.tempGreetingCard)) {
      this.orderGreetingCard = Object.assign({}, this.tempGreetingCard, this.tempGreetingCardMSG);
    }

    this.total = 0;
    if (Array.isArray(this.products) && this.products.length > 0) {
      for (let i = 0; i < this.products.length; i++) {
        this.total += parseInt(this.products[i].quantity) * parseFloat(this.products[i].price);
      }

      if (Utils.isNotNull(this.exTraGreetingCard) && this.exTraGreetingCard.selectedExtraGreetingCard) {
        this.total += parseInt(this.exTraGreetingCard.quantity) * parseFloat(this.exTraGreetingCard.extraGreetingCardSelected.price);
      }
    }


  }

  arrangeDelivery() {
    this.buildGenerateOrder();
    if (Utils.isNotNull(this._generateOrder)) {
      delete this._generateOrder.validateOnly;

      if (Utils.isNotNull(this.orderGreetingCard)) {
        let tempCardObject = {
          'productCode': this.orderGreetingCard.productCode || '',
          'quantity': 1,
          'giftWalletMessageLine1': this.orderGreetingCard.giftWalletMessageLine1,
          'giftWalletMessageLine2': this.orderGreetingCard.giftWalletMessageLine2,
          'giftWalletMessageLine3': this.orderGreetingCard.giftWalletMessageLine3,
        };

        if (this.freeGreetingCard.selectedGreetingCard) {
          let indexFreeGreetingCardInOrder = this.checkExistFreeGreetingCard(this.freeGreetingCard);
          if (indexFreeGreetingCardInOrder !== (-1)) {
            this._generateOrder.orderlines.splice(indexFreeGreetingCardInOrder, 1);
            this._generateOrder.orderlines.push(tempCardObject);
          } else {
            this._generateOrder.orderlines.push(tempCardObject);
          }
        }
      }
      if (this.exTraGreetingCard.selectedExtraGreetingCard) {
        let indexExtraGreetingCardInOrder = this.checkExistExtraGreetingCard(this.exTraGreetingCard);
        if (indexExtraGreetingCardInOrder !== (-1) && this.exTraGreetingCard.selectedExtraGreetingCard) {
          this._generateOrder.orderlines.splice(indexExtraGreetingCardInOrder, 1);
          this._generateOrder.orderlines.push(this.tempExtraGreetingCard);
        } else {
          this._generateOrder.orderlines.push(this.tempExtraGreetingCard);
        }
      }

      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          if (!res.ok) {
            return;
          }

          let dataAfterGenerateOrder = res.response;
          this.navCtrl.push('OrderDiscountGiftCardDeliveryOption',
            {dataBeforeGenerate: this._generateOrder, dataAfterGenerate: dataAfterGenerateOrder});
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        },
        complete: () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.orderDiscountGiftCardReviewYourOrderService
        .generateOrder(this._generateOrder)
        .subscribe(observer);
    }
  }

  checkExistExtraGreetingCard(typeGreetingCard) {
    let existCardIndex = -1;
    if (Utils.isNotNull(typeGreetingCard) && typeGreetingCard.selectedExtraGreetingCard) {
      let orderline = this._generateOrder.orderlines;
      for (let i = 0; i < orderline.length; i++) {
        if (orderline[i].productCode === this.exTraGreetingCard.extraGreetingCardSelected.productCode) {
          existCardIndex = i;
        }
      }
    }
    return existCardIndex;
  }

  checkExistFreeGreetingCard(typeGreetingCard) {
    let existCardIndex = -1;
    if (Utils.isNotNull(typeGreetingCard) && typeGreetingCard.selectedGreetingCard) {
      let orderline = this._generateOrder.orderlines;
      for (let i = 0; i < orderline.length; i++) {
        if (orderline[i].productCode === this.freeGreetingCard.greetingCardSelected.productCode) {
          existCardIndex = i;
        }
      }
    }
    return existCardIndex;
  }

  updatePersonalMessage() {
    this.navCtrl.push('OrderDiscountGiftCardAddPersonalMessage');
  }

  updateDesignCard() {
    this.navCtrl.push(
      'OrderDiscountGiftCardChooseCardDesign',
      {productToChooseDesign: this.productToChooseDesign, cardDesignIndex: this.indexSelectedGreetingCard});
  }

  updateExtraDesignCard() {

    this.navCtrl.push(
      'OrderDiscountGiftCardExtraGiftWallets',
      {
        productToChooseDesign: this.extraGCToChooseDesign,
        cardDesignIndex: this.indexExtraSelectedGreetingCard,
        quantity: this.exTraGreetingCard.quantity
      });
  }

  removeFreeGCReload() {

    let indexFreeGreetingCardInOrder = this.checkExistFreeGreetingCard(this.freeGreetingCard);
    if (indexFreeGreetingCardInOrder !== (-1)) {
      this._generateOrder.orderlines.splice(indexFreeGreetingCardInOrder, 1);
    }
    OrderDiscountGiftCardSharingDataService.getInstance().resetFreeCardDesign();
    setTimeout(() => {
      this.buildGenerateOrder();
    }, 200)
  }

  removeExtraGCReload() {
    let indexExtraGreetingCardInOrder = this.checkExistExtraGreetingCard(this.exTraGreetingCard);
    if (indexExtraGreetingCardInOrder !== (-1)) {
      this._generateOrder.orderlines.splice(indexExtraGreetingCardInOrder, 1);
    }
    OrderDiscountGiftCardSharingDataService.getInstance().resetExtraCardDesign();
    setTimeout(() => {
      this.buildGenerateOrder();
    }, 200)
  }


  getFreeGreetingCard() {
    let bodyToGetRetreiveCatalogue = {
      'propositionId': this.primaryCard.propositionId,
      'scheme': this.primaryCard.scheme,
      'series': this.primaryCard.series,
      'productCode': this.primaryCard.productCode,
      'catalogueType': 'S'
    }

    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        if (Utils.isNotNull(res.response) && Utils.isNotNull(res.response.catalogues[0])) {
          this.productToChooseDesign = res.response.catalogues[0].products;
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          if (!this.needGotoExtraPage) {
            this.navCtrl.push(
              'OrderDiscountGiftCardChooseCardDesign',
              {
                productToChooseDesign: this.productToChooseDesign,
                cardDesignIndex: this.indexSelectedGreetingCard
              });
          } else {
            this.navigateToExtraPage();
          }

        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.orderDiscountGiftCardReviewYourOrderService
      .getRetrieveCatalogue(bodyToGetRetreiveCatalogue)
      .subscribe(observer);
  }

  addFreeGreetingCard() {
    this.getFreeGreetingCard();
  }

  getExtraGreetingCard() {

    let bodyToGetRetreiveCatalogue = {
      'propositionId': this.primaryCard.propositionId,
      'scheme': this.primaryCard.scheme,
      'series': this.primaryCard.series,
      'productCode': this.primaryCard.productCode,
      'catalogueType': 'F'
    }

    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        if (Utils.isNotNull(res.response) && Utils.isNotNull(res.response.catalogues[0])) {
          this.extraGCToChooseDesign = res.response.catalogues[0].products;
        }
        setTimeout(() => {
          this.getFreeGreetingCard();
        }, 200)
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.orderDiscountGiftCardReviewYourOrderService
      .getRetrieveCatalogue(bodyToGetRetreiveCatalogue)
      .subscribe(observer);
  }

  addExtraGreetingCard() {
    this.needGotoExtraPage = true;
    this.getExtraGreetingCard();
  }

  navigateToExtraPage() {
    let freeGreetingCardObject = {
      'productToChooseDesign': this.productToChooseDesign,
      'cardDesignIndex': this.indexSelectedGreetingCard
    }
    this.navCtrl.push(
      'OrderDiscountGiftCardExtraGiftWallets',
      {
        productToChooseDesign: this.extraGCToChooseDesign,
        cardDesignIndex: this.indexExtraSelectedGreetingCard,
        freeGreetingCardObject: freeGreetingCardObject
      });
  }

  public getContentMSG() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (Utils.isNotNull(res[0]) && Utils.isNotNull(res[0].response) && Utils.isNotNull(res[0].response.message)) {
          app.Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet_info = res[0].response.message;
          this.order_gwp_default_section4_need_free_wallet_info = app.Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet_info;
        }

        if (Utils.isNotNull(res[1]) && Utils.isNotNull(res[1].response) && Utils.isNotNull(res[1].response.message)) {
          app.Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet = res[1].response.message;
          this.order_gwp_default_section4_need_free_wallet = app.Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet;
        }

        if (Utils.isNotNull(res[2]) && Utils.isNotNull(res[2].response) && Utils.isNotNull(res[2].response.message)) {
          app.Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet_button = res[2].response.message;
          this.order_gwp_default_section4_need_free_wallet_button = app.Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet_button;
        }

        if (Utils.isNotNull(res[3]) && Utils.isNotNull(res[3].response) && Utils.isNotNull(res[3].response.message)) {
          app.Configuration.ContentMessage.order_gwp_default_section4_choice_h4_1 = res[3].response.message;
          this.order_gwp_default_section4_choice_h4_1 = app.Configuration.ContentMessage.order_gwp_default_section4_choice_h4_1;
        }

        if (Utils.isNotNull(res[4]) && Utils.isNotNull(res[4].response) && Utils.isNotNull(res[4].response.message)) {
          app.Configuration.ContentMessage.order_gwp_default_section4_buying_multiple_vouchers_info = res[4].response.message;
          this.order_gwp_default_section4_buying_multiple_vouchers_info = app.Configuration.ContentMessage.order_gwp_default_section4_buying_multiple_vouchers_info;
        }
        if (Utils.isNotNull(res[5]) && Utils.isNotNull(res[5].response) && Utils.isNotNull(res[5].response.message)) {
          app.Configuration.ContentMessage.order_gwp_default_section4_buying_multiple_vouchers_button = res[5].response.message;
          this.order_gwp_default_section4_buying_multiple_vouchers_button = app.Configuration.ContentMessage.order_gwp_default_section4_buying_multiple_vouchers_button;
        }

        if (Utils.isNotNull(res[6]) && Utils.isNotNull(res[6].response) && Utils.isNotNull(res[6].response.message)) {
          app.Configuration.ContentMessage.order_gwp_default_section4_choice_h4_2 = res[6].response.message;
          this.order_gwp_default_section4_choice_h4_2 = app.Configuration.ContentMessage.order_gwp_default_section4_choice_h4_2;
        }

        if (Utils.isNotNull(res[7]) && Utils.isNotNull(res[7].response) && Utils.isNotNull(res[7].response.message)) {
          app.Configuration.ContentMessage.order_gwp_default_section1_action_h2 = res[7].response.message;
        }

        if (Utils.isNotNull(res[8]) && Utils.isNotNull(res[8].response) && Utils.isNotNull(res[8].response.message)) {
          // app.Configuration.ContentMessage.cardCsc_less_than_min = res[8].response.message;
        }

        if (Utils.isNotNull(res[9]) && Utils.isNotNull(res[9].response) && Utils.isNotNull(res[9].response.message)) {
          app.Configuration.ContentMessage.order_gwp_default_section1_choice_p = res[9].response.message;
        }

        if (Utils.isNotNull(res[10]) && Utils.isNotNull(res[10].response) && Utils.isNotNull(res[10].response.message)) {
          app.Configuration.ContentMessage.order_gwp_default_section3_action_p = res[10].response.message;
        }

        if (Utils.isNotNull(res[11]) && Utils.isNotNull(res[11].response) && Utils.isNotNull(res[11].response.message)) {
          app.Configuration.ContentMessage.order_gwp_default_section6_action_p = res[11].response.message;
        }

      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    Observable.combineLatest(
      this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.need-free-wallet-info"),
      this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.need-free-wallet"),
      this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.need-free-wallet-button"),

      this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.choice.h4-1"),
      this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.buying-multiple-vouchers-info"),
      this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.buying-multiple-vouchers-button"),

      this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.choice.h4-2"),
      this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section1.action.h2"),
      this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section1.action.h2"),

      // this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section1.choice.p"),
      // this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section3.action.p"),
      // this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section6.action.p"),
    ).subscribe(observer)
  }
}
