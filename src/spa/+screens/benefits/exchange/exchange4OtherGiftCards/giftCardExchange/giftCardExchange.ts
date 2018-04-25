import {Component, ViewChild} from '@angular/core';
import {AlertController, Content, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoadingIndicatorService} from "../../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {GiftCardExchangeService} from "./giftCardExchange.service";
import {ToastMessageService} from "../../../../../framework/services/toastMessageService/toastMessage.service";
import {RouteManagerService} from "../../../../../framework/services/routeManager/routeManager.service";
import {MyShoppingBasketSharingDataService} from "../../../../myShoppingBasket/myShoppingBasketSharingData.services";
import {AppConfig as app} from "../../../../../framework/appConfig";
import {CardType} from "../../../../../models/card-type";
import $ from 'jquery';
import {BenefitsDataService} from "../../../benefitsData.service";
import {Utils} from "../../../../../framework/services/utilities/utilities";
import {YourCardDetailsSharingDataService} from "../../../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;
const MAX_CONST = 5000;


@IonicPage()
@Component({
  selector: 'page-giftCardExchange',
  templateUrl: 'giftCardExchange.html',
  providers: [
    GiftCardExchangeService
  ]
})
export class GiftCardExchangePage {
  invalidValue: boolean;
  maxQuantityError: boolean;
  otherQuantityError: boolean;
  minQuartryError: boolean;
  anyValues: any[];
  otherValueError: any;
  minValueErr: boolean;
  maxValueErr: boolean;
  isValidated: any;
  isMixType: any;
  value: any;
  quantity: any;
  otherQuantity: any;
  anyType: any;
  selectedProduct: any;
  selectedProductId: any;
  offer: any;
  catalogue: any;
  primaryCard: any;
  alertRef: any;
  otherValue: any;
  exchangeValue: any;
  cardValues: any = [];
  cardQuantities: any = [];
  clickedValue: any;
  clickedQuantity: any;
  selectedRow: any;
  feeProduct: any;
  dirtyCardValueButton = false;
  dirtyCardQuantityButton = false;
  productsOnBasket = 0;
  productFee = 0;
  baseResourceUrl;
  mesageConfirm = '';
  cardIndex = 0;
  basket_form_checkout_current_product = app.Configuration.ContentMessage.basket_form_checkout_current_product;
  required = app.Configuration.ContentMessage.required;
  quantity_invalid = app.Configuration.ContentMessage.quantity_invalid;
  park_catalogue_product_out_of_stock = app.Configuration.ContentMessage.park_catalogue_product_out_of_stock;
  @ViewChild('content') content: Content;

  constructor(public routeManager: RouteManagerService,
              public alertCtrl: AlertController,
              public navController: NavController,
              public navCtrl: NavController,
              public events: Events,
              public giftCardExchangeService: GiftCardExchangeService,
              public navParams: NavParams) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  ionViewDidLeave() {
    this.dirtyCardValueButton = false;
    this.dirtyCardQuantityButton = false;
    this.selectedProduct = null;
    this.quantity = null;
  }

  ionViewWillEnter() {
    if (!this.navParams.get('primaryCard') || !this.navParams.get('offer')) {
      return;
    }
    this.getContentMSG();
    this._resetData();
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      $('.app-root').removeClass('not-show-tab');
      if (this.navParams.get('primaryCard')) {
        this.primaryCard = YourCardDetailsSharingDataService.getInstance()
            .getLatestCardInfoFromHomeSharing(this.navParams.get('primaryCard'));
        MyShoppingBasketSharingDataService.getInstance().savePrimaryCard(this.primaryCard);
      }
      if (this.navParams.get('offer')) {
        this.offer = this.navParams.get('offer');
      }
      if (this.navParams.get('catalogue')) {
        this.catalogue = this.navParams.get('catalogue');
      }

      if (this.navParams.get('cardIndex')) {
        this.cardIndex = this.navParams.get('cardIndex');
      }

      this.anyType = this._isAnyValueType();
      if (!this.anyType) {
        this.isMixType = this._isMixType();
      }

      this.selectedProduct = this._selectDefaultProduct();
      if (this.selectedProduct) {
        this.selectedProductId = this.selectedProduct.productId;
      }

      this._buildOptions();
      this.isValidated = this.validateForm();
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

  public getContentMSG() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.mesageConfirm = body.message;
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.giftCardExchangeService
      .getContentFromRetreiveContent('park-api.basket.mixed-clear-basket')
      .subscribe(observer);
  }

  showPopupNeedRemove(cardInfor, productSelected, productFee, quantity) {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: this.basket_form_checkout_current_product,
      cssClass: 'l2s-alert--flat  l2s-alert--twobutton',
      buttons: [
        {
          text: 'Clear Basket',
          cssClass: "main-button",
          handler: () => {
            MyShoppingBasketSharingDataService.getInstance().resetState();
            let quantityOfitem = {
              'quantity': parseInt(quantity),
              'value': productSelected.price,
            };
            let objectCombined = Object.assign(productSelected, productFee, quantityOfitem);
            MyShoppingBasketSharingDataService.getInstance().getDataBasket().productsOnBasket.push(objectCombined);
            MyShoppingBasketSharingDataService.getInstance().getDataBasket().cardInformation = cardInfor;
            MyShoppingBasketSharingDataService.getInstance().getDataBasket().feeObject = null;
            MyShoppingBasketSharingDataService.getInstance().getDataBasket().feeObject = productFee;
            MyShoppingBasketSharingDataService.getInstance().getDataBasket().needCaculateFee = true;

            this.navController.push("MyShoppingBasketPage", {needRemovePageWhenContinueShopping: true}).then(() => {
            });
          }
        },
        {
          text: 'Cancel',
          cssClass: 'cancel-button',
          handler: () => {
          }
        },{
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

  gotoBasket() {
    this.navController.push("MyShoppingBasketPage", {needRemovePageWhenContinueShopping: true}).then(() => {
    });
  }

  pickCardValue(value) {
    this.dirtyCardValueButton = true;
    this.value = value;
    this.clickedValue = value;
    this.otherValue = null;
    this.isValidated = this.validateForm();
  }

  selectCardValue(productId) {
    this.selectedProduct = this.offer.products.find(p => p.productId == productId);
    if (this.selectedProduct) {
      this.selectedProductId = this.selectedProduct.productId;
    }

    this.otherQuantity = null;
    for (let i=0; i < this.cardQuantities.length; i ++) {
      if(this.cardQuantities[i].default) {
        this.quantity = this.clickedQuantity = this.cardQuantities[i].value;
      }
    }
    this.dirtyCardQuantityButton = true;

    this.otherValue = null;
    for (let i=0; i < this.anyValues.length; i ++) {
      if(this.anyValues[i].default) {
        this.value = this.clickedValue =  this.anyValues[i].value;
      }
    }
    this.dirtyCardValueButton = true;

    this.isValidated = this.validateForm();
  }

  pickCardQuantity(value) {
    this.dirtyCardQuantityButton = true;
    this.clickedQuantity = value;
    this.quantity = this.clickedQuantity;
    this.otherQuantity = null;
    this.isValidated = this.validateForm();
  }

  canShowChooseValue() {
    return this.selectedProduct && this.selectedProduct.type === 'any-value';
  }

  get allOutOfStock() {
    return !(this.offer && this.offer.products && this.offer.products.find((p) => p.stockAvailable));
  }

  otherValueChange(value) {
    this.dirtyCardValueButton = true;
    this.otherValue = value;
    this.clickedValue = null;
    this.value = this.otherValue;

    this.isValidated = this.validateForm();
  }

  otherQuantityChange(value) {
    this.dirtyCardQuantityButton = true;
    this.otherQuantity = value;
    this.quantity = this.otherQuantity;
    this.clickedQuantity = null;

    this.isValidated = this.validateForm();
  }

  validateForm() {
    if (this.selectedProduct && this.selectedProduct.type == 'any-value') {
      const value = parseFloat(this.value);

      this.invalidValue = !/^[0-9]*\.?[0-9]+$/.test(this.value);
      const maxValue = parseFloat(this.selectedProduct.customAttributes.UPPER_VALUE);
      const minvalue = parseFloat(this.selectedProduct.customAttributes.LOWER_VALUE);
      this.maxValueErr = value > maxValue;
      this.minValueErr = value < minvalue;
      this.otherValueError = this.invalidValue || (this.maxValueErr || this.minValueErr);
    } else {
      this.otherValueError = !this.selectedProduct;
    }

    const quantity = parseInt(this.quantity);
    const invalidQuantityValue = isNaN(this.quantity) || !/^\d+$/.test(this.quantity);
    this.minQuartryError = !quantity || quantity <= 0;
    this.maxQuantityError = !quantity || quantity > 99999;
    this.otherQuantityError = invalidQuantityValue || (this.minQuartryError || this.maxQuantityError);

    return !this.otherValueError && this.quantity && !this.otherQuantityError;
  }

  recheckValue() {
    if (!this.otherValue) {
      this.otherValue = '';
    }
    if (!this.otherQuantity) {
      this.otherQuantity = '';
    }
    this.isValidated = this.validateForm();
  }

  scrollToBottom(delay) {
    // if (this.content) {
    //     Observable.interval(200).take(10).subscribe(() => {
    //         this.content.scrollToBottom();
    //     });
    // }
  }

  showPopupToBasket() {
    let message = `${this.quantity} x ${this.selectedProduct.name}`;
    if (this.selectedProduct && this.selectedProduct.type == 'any-value') {
      message = `${this.quantity} x &pound;${this.value} ${this.selectedProduct.name}`;
    }
    let alert = this.alertCtrl.create({
      title: 'Item added to basket',
      message: message,
      cssClass: 'l2s-alert--flat l2s-alert--twobutton',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Go to basket',
          cssClass: "main-button",
          handler: () => {
            this.navController.push("MyShoppingBasketPage", {needRemovePageWhenContinueShopping: true}).then(() => {
            });
          }
        },
        {
          text: 'Continue shopping',
          cssClass: 'cancel-button',
          handler: () => {
            this.navController.pop();
          }
        },

        {
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

  addToBasket() {
    this._unsubscribe();
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const body = this._buildProductFeeRequest();
    this.productFee = 0;
    this.feeProduct = this.giftCardExchangeService.calculateFee(body)
      .subscribe((res) => {
        if (!res.ok) {
          return;
        }

        this.productFee = res.response;
        MyShoppingBasketSharingDataService.getInstance().pushDatatoBasket(this.primaryCard, this.selectedProduct, this.productFee, this.quantity);
        let IsDifferentCategory = MyShoppingBasketSharingDataService.getInstance().getIsDifferentCategory();
        let isDifferentCard = MyShoppingBasketSharingDataService.getInstance().getIsDifferentCard();

        if (isDifferentCard) {
          this.showPopupNeedRemove(this.primaryCard, this.selectedProduct, this.productFee, this.quantity);
        } else if (IsDifferentCategory) {
          this.showPopupNeedCheckOut();
        } else {
          MyShoppingBasketSharingDataService.getInstance().getDataBasket().needCaculateFee = true;
          this.calculateProductOnbasket();
          this.showPopupToBasket();
        }
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  showPopupNeedCheckOut() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: this.mesageConfirm,
      cssClass: 'l2s-alert--default l2s-alert--flat  l2s-alert--centered',
      buttons: [
        {
          text: 'Close',
          cssClass: "btn-basket",
          handler: () => {
          }
        },{
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
          }
        }
      ],
      enableBackdropDismiss: false
    });
    this.alertRef = alert;
    alert.present();
  }

  private _buildProductFeeRequest() {
    let body = {
      "propositionId": this.primaryCard.propositionId,
      "cardNumber": this.primaryCard.cardNumber,
      "orderlines": []
    }

    let orderLineProductSelected = {
      "productCode": this.selectedProduct.productCode,
      "quantity": this.quantity,
    }

    if (this.selectedProduct.type === 'any-value') {
      orderLineProductSelected['loadAmount'] = parseFloat(this.value);
      this.selectedProduct.price = this.value;
    }
    let products = MyShoppingBasketSharingDataService.getInstance().getDataBasket();

    if (Utils.isNotNull(products) && Utils.isNotNull(products.cardInformation)) {
      let cardSelectedInfor = products.cardInformation;
      if ((cardSelectedInfor.cardNumber === this.primaryCard.cardNumber) &&
        (cardSelectedInfor.propositionId === this.primaryCard.propositionId)) {
        if (products && products.feeObject && products.feeObject.orderlines && products.feeObject.orderlines.length > 0) {
          for (let i = 0; i < products.feeObject.orderlines.length; i++) {
            let orderlineItem = {
              "productCode": products.feeObject.orderlines[i].productCode,
              "quantity": parseInt(products.feeObject.orderlines[i].quantity),
              "loadAmount": parseInt(products.feeObject.orderlines[i].unitPrice)
            }
            body.orderlines.push(orderlineItem);
          }
          body.orderlines.push(orderLineProductSelected);
        } else {
          body.orderlines.push(orderLineProductSelected);
        }
      } else {
        body.orderlines.push(orderLineProductSelected);
      }
    } else {
      body.orderlines.push(orderLineProductSelected);
    }

    return body;
  }

  private _showError(message) {
    ToastMessageService.getInstance().showToastMessage(message);
  }

  private _unsubscribe() {
    if (this.feeProduct) {
      this.feeProduct.unsubscribe();
    }
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


  gotoTopUp() {
    this.navCtrl.push("AmountTopUpPage", {
      cardSelected: this.primaryCard,
      cardIndex: this.cardIndex
    });
    let currentIndexStack = this.navCtrl.getActive();
    BenefitsDataService.getInstance().setNeedBackToExchange(true, currentIndexStack);
  }


  getCurrentPrice() {
    if (!this.selectedProduct) {
      return 0;
    }
    if (this.selectedProduct.type == 'any-value') {
      return parseFloat(this.value);
    } else {
      return parseFloat(this.selectedProduct.price);
    }
  }

  getCurrentQuantity() {
    if (!this.selectedProduct) {
      return 0;
    }
    return parseFloat(this.quantity);
  }

  valueGreatherThanBalance(fee: number): boolean {
    if (!this.selectedProduct) {
      return false;
    }
    if (!fee) {
      fee = 0;
    }
    const balance = parseFloat(this.primaryCard.balance);
    const cost = this.getCurrentPrice() * this.getCurrentQuantity() + fee;
    return balance < cost;
  }

  valueGreatherThanMax() {
    if (!this.selectedProduct) {
      return false;
    }
    const price = this.getCurrentPrice();
    const quantity = this.getCurrentQuantity()
    const cost = price * quantity;
    return cost > MAX_CONST;
  }

  delay(fn: any, time: number = 500) {
    if (typeof fn === 'function') {
      setTimeout(fn, time);
    }
  }

  private _resetData() {
    this.value = null;
    this.otherValue = null;
    this.quantity = null;
    this.value = null;
    this.selectedProduct = null;
    this.exchangeValue = '£0.00';
    this.primaryCard = null;
    this.offer = null;
    this.cardValues = [];
    this.cardQuantities = [];
    this.anyValues = [];
    this.dirtyCardValueButton = false;
    this.dirtyCardQuantityButton = false;
    this.productsOnBasket = 0;
    this.selectedProductId = -1;
    this.otherQuantity = null;
    this.otherValue = null;
  }

  private _isAnyValueType() {
    return this.offer && Array.isArray(this.offer.products) && this.offer.products.length == 1 && this.offer.products[0].type == 'any-value';
  }

  private _isMixType() {
    return this.offer && Array.isArray(this.offer.products) && this.offer.products.length > 1;
  }

  private _buildOptions() {
    this._buildValueOption();
    this._buildQuantityOprion();
    this.dirtyCardValueButton = true;
    this.dirtyCardQuantityButton = true;
  }

  private _buildValueOption() {
    if (this.offer) {

      this.anyValues = this._buildDefautValueOption();
      for (let i=0; i < this.anyValues.length; i ++) {
        if(this.anyValues[i].default) {
          this.value = this.clickedValue =  this.anyValues[i].value;
        }
      }

      this.dirtyCardValueButton = true;

      if (Array.isArray(this.offer.products)) {
        this.cardValues = this._buildProductsValueOption();
      }
    }
  }

  private _buildDefautValueOption() {
    let domain = [];
    if (this.catalogue && this.catalogue.defaultSelectorOptions && Array.isArray(this.catalogue.defaultSelectorOptions.AMOUNT)) {
      domain = this.catalogue.defaultSelectorOptions.AMOUNT;
    } else if (this.offer && this.offer.categorySelectorOptions && Array.isArray(this.offer.categorySelectorOptions.AMOUNT)) {
      domain = this.offer.categorySelectorOptions.AMOUNT
    } else if (this.offer && this.offer.category && this.offer.category.categorySelectorOptions && Array.isArray(this.offer.category.categorySelectorOptions.AMOUNT)) {
      domain = this.offer.category.categorySelectorOptions.AMOUNT;
    }


    return domain.map((amount, index) => {
      return {
        id: index,
        text: `£${amount.value}`,
        value: amount.value,
        default: amount.default
      };
    })
  }

  private _buildProductsValueOption() {
    return this.offer.products.map((product, index) => {
      return {
        id: index,
        text: product.name,
        value: product.productCode,
        product: product
      };
    })
  }

  private _buildQuantityOprion() {
    if (this.catalogue && this.catalogue.defaultSelectorOptions) {
      if (Array.isArray(this.catalogue.defaultSelectorOptions.QUANTITY)) {
        this.cardQuantities = this.catalogue.defaultSelectorOptions.QUANTITY;
        this.quantity = this.clickedQuantity;

        for (let i=0; i < this.cardQuantities.length; i ++) {
          if(this.cardQuantities[i].default) {
            this.quantity = this.clickedQuantity =  this.cardQuantities[i].value;
          }
        }
        this.dirtyCardQuantityButton = true;
      }
    }
  }

  private _selectDefaultProduct() {
    if (this.anyType) {
      return this.offer && this.offer.products && this.offer.products[0];
    } else {
      return this.offer && this.offer.products && this.offer.products.find(p => p.default);
    }
  }
}
