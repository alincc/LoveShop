import {Component} from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoadingIndicatorService} from "../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {ExchangeEcodeAllBarOneEcodeService} from "./exchangeEcodeAllBarOneEcode.service";
import {Utils} from "../../framework/services/utilities/utilities";
import {MyShoppingBasketService} from "./myShoppingBasket.service";
import {RouteManagerService} from "../../framework/services/routeManager/routeManager.service";
import {MyShoppingBasketSharingDataService} from "./myShoppingBasketSharingData.services";
import $ from 'jquery';
import {OrderDiscountGiftCardSharingDataService} from "../orderManagement/orderDiscountGiftCard/orderDiscountGiftCardSharingData.services";
import {AppConfig as app} from "../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-myShoppingBasket',
  templateUrl: 'myShoppingBasket.html',
  providers: [
    MyShoppingBasketService
  ]
})
export class MyShoppingBasketPage {

  currency: any;
  totalPrice = 0;
  totalFee = 0;
  products = [];
  _generateOrder;
  productEcode = 0;
  productVoucher = 0;
  alertRef;
  productsOnBasket;
  productValid = true;
  feeObject;
  baseResourceUrl;
  discount_applied_at_checkout = "";
  goToFromBuyDC = false;
  maxError = false;
  minError = false;
  priceError = false;
  quantityError = false;
  needRemoveDuplicateItem = false;
  indexItemNeedRemove;
  needRemovePageWhenContinueShopping;
  basket_form_no_products_basket = app.Configuration.ContentMessage.basket_form_no_products_basket;
  quantity_invalid = app.Configuration.ContentMessage.quantity_invalid;

  constructor(public routeManager: RouteManagerService,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              public navController: NavController,
              public events: Events,
              public myShoppingBasketService: MyShoppingBasketService,
              public navParams: NavParams) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  ionViewWillEnter() {
    this.goToFromBuyDC = false;
    $('.app-root').addClass('not-show-tab');
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.navParams.get('needRemovePageWhenContinueShopping')) {
        this.needRemovePageWhenContinueShopping = this.navParams.get('needRemovePageWhenContinueShopping');
      }

      let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
      OrderDiscountGiftCardSharingDataService.getInstance().resetData();
      this.productsOnBasket = (<any>dataBasket).productsOnBasket.length;
      this.products = MyShoppingBasketSharingDataService.getInstance().getDataBasket().productsOnBasket;
      this.feeObject = MyShoppingBasketSharingDataService.getInstance().getDataBasket().feeObject;
      if (Utils.isNotNull(this.products) && this.products.length > 0) {
        this.currency = Utils.convertCurrency(this.products[0].currencyCode);
        this.calculateTotal();
      }
    }
  }

  ionViewWillLeave() {
  }

  ionViewDidEnter() {
    OrderDiscountGiftCardSharingDataService.getInstance().resetData();
    this.getContentHardCode();
  }

  removeBasket(index) {
    let alert = this.alertCtrl.create({
      title: '',
      message: app.Configuration.ContentMessage.confirm_removal,
      cssClass: 'l2s-alert--flat l2s-alert--twobutton',
      buttons: [
        {
          text: 'Yes',
          cssClass: 'main-button',
          handler: () => {
            MyShoppingBasketSharingDataService.getInstance().removeItemFromBasket(index);
            this.productValid = true;
            setTimeout(() => {
              let countInvalidValue = $('#productListid').find('.invalidValue');
              if (countInvalidValue.length > 0) {
                this.productValid = false;
              }
            }, 100)
            this.reCalculateFee();
          }
        },
        {
          text: 'No',
          cssClass: 'cancel-button',
          handler: () => {
          }
        }, {
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
          }
        }
      ]
    });
    this.alertRef = alert;
    alert.present();
  }

  checkOut() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    let defineOrderBasket = this.defineOrderBasket();

    this._generateOrder = this.myShoppingBasketService.generateOrder(defineOrderBasket.body)
      .subscribe((res) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if (!res.ok) {
          return;
        }

        let body = res.response;
        let productOnBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket().productsOnBasket;
        if (body && body.orderlines && productOnBasket.length > 0) {
          for (let j = 0; j < body.orderlines.length; j++) {
            for (let i = 0; i < productOnBasket.length; i++) {
              if (productOnBasket[i].productCode === body.orderlines[j].productCode) {
                body.orderlines[j].imgUrl = productOnBasket[i].subCategory.image;
              }
            }
          }
        }

        MyShoppingBasketSharingDataService.getInstance().saveDataAfterGenerateOrder(body);
        if (Utils.isNotNull(defineOrderBasket.urlNextScreen === 'OrderDiscountGiftCardReviewYourOrder')) {
          this.navCtrl.push(defineOrderBasket.urlNextScreen, {bodyOrder: defineOrderBasket.body});
          return;
        }
        this.navCtrl.push(defineOrderBasket.urlNextScreen);
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  private calculateTotal() {

    this.totalPrice = 0;
    this.totalFee = 0;
    this.products = MyShoppingBasketSharingDataService.getInstance().getDataBasket().productsOnBasket;
    for (let i = 0; i < this.products.length; i++) {
      if (/^\d+$/.test(this.products[i].quantity)) {
        this.totalPrice += (this.products[i].price) * (this.products[i].quantity);
      }
    }
    this.feeObject = MyShoppingBasketSharingDataService.getInstance().getDataBasket().feeObject;

    if (Utils.isNotNull(this.feeObject) && Utils.isNotNull(this.feeObject.totalFee)) {
      this.totalFee = this.feeObject.totalFee;
      this.totalPrice += this.feeObject.totalFee;
    } else {
      this.goToFromBuyDC = true;
    }
  }

  otherValueChange(value, index) {

    this.quantityError = false;
    if (!value || (value && value.length && value.length === 0 || parseInt(value) === 0)) {
      this.productValid = false;
      this.quantityError = true;
      $(event.target).addClass('invalidValue');
      $(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-has-error');
      this.overQuantityOrZero();
    } else if (parseInt(value) > 99999 || isNaN(value) || !/^\d+$/.test(value)) {
      this.productValid = false;
      this.quantityError = true;
      $(event.target).addClass('invalidValue');
      $(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-has-error');
    } else {
      this.productValid = true;
      $(event.target).removeClass('invalidValue');
      $(event.target).closest('.product-infor--wrapper').removeClass('product-infor--wrapper-has-error');
      this.products[index].quantity = parseInt(value);
      this.feeObject.orderlines[index].quantity = parseInt(value);
      this.reCalculateFee();
    }


    setTimeout(() => {
      let countInvalidValue = $('#productListid').find('.invalidValue');
      if (countInvalidValue.length > 0) {
        this.productValid = false;
      }
    }, 100)
  }


  otherValuePriceChange(value, index) {

    this.priceError = false;
    this.maxError = false;
    this.minError = false;
    const maxValue = parseFloat(this.products[index].customAttributes.UPPER_VALUE);
    const minvalue = parseFloat(this.products[index].customAttributes.LOWER_VALUE);
    const valuePrice = parseFloat(value);
    if (!value || (value && value.length && value.length === 0 || parseFloat(value) === 0)) {
      this.priceError = true;
      this.productValid = false;
      $(event.target).addClass('invalidValue');
      $(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-price-has-error');
      this.overQuantityOrZero();
    } else if (isNaN(value) || !/^[0-9]*\.?[0-9]+$/.test(value)) {
      this.priceError = true;
      this.productValid = false;
      $(event.target).addClass('invalidValue');
      $(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-price-has-error');
    } else if (valuePrice > maxValue) {
      this.productValid = false;
      $(event.target).addClass('invalidValue');
      $(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-price-has-error');
      this.maxError = true;
    } else if (valuePrice < minvalue) {
      this.productValid = false;
      $(event.target).addClass('invalidValue');
      $(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-price-has-error');
      this.minError = true;
    } else {
      this.productValid = true;
      $(event.target).removeClass('invalidValue');
      $(event.target).closest('.product-infor--wrapper').removeClass('product-infor--wrapper-price-has-error');
      this.products[index].value = value;
      this.products[index].price = value;
      this.feeObject.orderlines[index].unitPrice = parseFloat(value);


      let duplicateProduct = false;
      let productBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket().productsOnBasket;
      for (let i = 0; i < productBasket.length; i++) {
        if (!duplicateProduct && (productBasket[i].category.categoryId) === (this.products[index].category.categoryId)) {
          if (productBasket[i].productCode === this.products[index].productCode
            && productBasket[i].productId === this.products[index].productId &&
            productBasket[i].price === this.products[index].price) {
            if (i !== index) {
              duplicateProduct = true;
              this.needRemoveDuplicateItem = true;
              // this.indexItemNeedRemove = index;

              this.feeObject.orderlines[index].unitPrice = parseFloat(value);

              if (i > index) {
                productBasket[index].quantity = parseInt(productBasket[i].quantity) + parseInt(this.products[index].quantity);
                this.indexItemNeedRemove = i;
              } else {
                productBasket[i].quantity = parseInt(productBasket[i].quantity) + parseInt(this.products[index].quantity);
                this.indexItemNeedRemove = index;
              }

            }


          }
        }
      }
      this.reCalculateFee();
    }

    setTimeout(() => {
      let countInvalidValue = $('#productListid').find('.invalidValue');
      if (countInvalidValue.length > 0) {
        this.productValid = false;
      }
    }, 100)
  }

  overQuantityOrZero() {
    let alert = this.alertCtrl.create({
      title: '',
      message: `Quantity cannot be blank or zero`,
      cssClass: 'l2s-alert--default l2s-alert--flat',
      buttons: [
        {
          text: 'OK',
          cssClass: "btn-basket",
          handler: () => {
          }
        }, {
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
          }
        }
      ]
    });
    this.alertRef = alert;
    alert.present();
  }

  defineOrderBasket() {
    let basketData = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
    let bodyOrderBasket = {
      body: null,
      urlNextScreen: ''
    };
    if (Utils.isNotNull(basketData.productsOnBasket[0].benefit.orderJourney)) {
      if ((basketData.productsOnBasket[0].benefit.orderJourney) === 'ECOMMERCE_B2C') {
        bodyOrderBasket.body = MyShoppingBasketSharingDataService.getInstance().getDataToGenerateOrderBuy();
        bodyOrderBasket.urlNextScreen = 'OrderDiscountGiftCardReviewYourOrder';
      } else {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].benefit.url === 'mycard/choose/ecodes' ||
            this.products[i].benefit.url === 'mycard/choose/dining-out') {
            this.productEcode += 1;
          }
          if (this.products[i].benefit.url === 'mycard/choose/spend-online') {
            this.productVoucher += 1;
          }
        }
        bodyOrderBasket.body = MyShoppingBasketSharingDataService.getInstance().getDataToGenerateOrderExchange();
        if (this.productEcode > 0 && this.productVoucher > 0) {
          bodyOrderBasket.urlNextScreen = 'OrderMixBasketStep1';
        } else if (this.productEcode > 0 && this.productVoucher === 0) {
          bodyOrderBasket.urlNextScreen = 'OrderEcodeStep1';
        } else if (this.productEcode === 0 && this.productVoucher > 0) {
          bodyOrderBasket.urlNextScreen = 'OrderExchangeGiftCardStep1';
        }
      }
    }
    return bodyOrderBasket;
  }

  gotoBenefit() {
    if (this.needRemovePageWhenContinueShopping) {
      const index = this.navCtrl.getActive().index - 1;
      this.navCtrl.remove(index).then(() => {
          this.navController.pop();
        }
      );

    } else {
      this.navController.pop();
    }

  }

  reCalculateFee() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const body = this._buildProductFeeRequest();
    const needCaculateFee = MyShoppingBasketSharingDataService.getInstance().getDataBasket().needCaculateFee;
    if (body.orderlines.length > 0 && needCaculateFee) {
      this.myShoppingBasketService.calculateFee(body)
        .subscribe((res) => {
          if (!res.ok) {
            return;
          }
          MyShoppingBasketSharingDataService.getInstance().setFeeObject(null);
          MyShoppingBasketSharingDataService.getInstance().setFeeObject(res.response);

          if (this.needRemoveDuplicateItem && Utils.isNotNull(this.indexItemNeedRemove)) {
            let productBasketx = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
            MyShoppingBasketSharingDataService.getInstance().getDataBasket().productsOnBasket.splice(this.indexItemNeedRemove, 1);
            let productBasketx2 = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
            this.needRemoveDuplicateItem = false;
            this.indexItemNeedRemove = null;
          }

          let productBasketx2 = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
          this.calculateTotal();
        }, (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }, () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        });
    } else {
      this.calculateTotal();
      LoadingIndicatorService.getInstance().hideLoadingIndicator();
    }
  }

  private _buildProductFeeRequest() {
    let primaryCard = MyShoppingBasketSharingDataService.getInstance().getDataBasket().cardInformation;

    let body = {
      "propositionId": primaryCard.propositionId,
      "cardNumber": primaryCard.cardNumber,
      "orderlines": []
    }

    let products = MyShoppingBasketSharingDataService.getInstance().getDataBasket();

    if (products && products.feeObject && products.feeObject.orderlines) {
      for (let i = 0; i < products.feeObject.orderlines.length; i++) {
        let orderlineItem = {
          "productCode": products.feeObject.orderlines[i].productCode,
          "quantity": parseInt(products.feeObject.orderlines[i].quantity),
          "loadAmount": parseFloat(products.feeObject.orderlines[i].unitPrice)
        }
        body.orderlines.push(orderlineItem);
      }
    }

    return body;
  }

  public getContentHardCode() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.discount_applied_at_checkout = body.message;
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.myShoppingBasketService
      .getContentFromRetreiveContent('park-catalogue.configurable-layout.discount-applied-at-checkout')
      .subscribe(observer);
  }


}
