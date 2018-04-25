import {Component, ViewChild} from '@angular/core';
import {AlertController, Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {RouteManagerService} from "../../../../../framework/services/routeManager/routeManager.service";
import {MyShoppingBasketSharingDataService} from "../../../../myShoppingBasket/myShoppingBasketSharingData.services";
import {LoadingIndicatorService} from "../../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {BuyADiscountedGiftCardService} from "./buyADiscountedGiftCard.service";
import {AppConfig as app} from "../../../../../framework/appConfig";
import {CardType} from "../../../../../models/card-type";
import $ from 'jquery';
import {Utils} from "../../../../../framework/services/utilities/utilities";

const MAX_CONST = 5000;

@IonicPage()
@Component({
  selector: 'page-buyADiscountedGiftCard',
  templateUrl: 'buyADiscountedGiftCard.html',
  providers: [
    BuyADiscountedGiftCardService
  ]
})
export class BuyADiscountedGiftCardPage {
  invalidValue: boolean;
  maxQuantityError: boolean;
  otherQuantityError: boolean;
  minQuartryError: boolean;
  dirtyCardQuantityButton: boolean;
  isMixType: boolean;
  minValueErr: boolean;
  otherValueError: any;
  maxValueErr: boolean;
  quantity: any;
  otherQuantity: any;
  isValidated: any;
  otherValue: any;
  value: any;
  dirtyCardValueButton: boolean;
  feeProduct: any;
  exchangeValue: string;
  offer: any;
  catalogue: any;
  primaryCard: any;
  category: any;
  alertRef: any;
  isQuatityInputMode: boolean;
  anyType: any;
  cardValues: any = [];
  anyValues: any = [];
  cardQuantities: any = [];
  clickedValue: any;
  clickedQuantity: any;
  selectedProduct: any;
  selectedProductId: any;
  productsOnBasket: any = 0;
  productFee = {
    orderlines: []
  };
  baseResourceUrl;
  mesageConfirm = '';
  basket_form_checkout_current_product = app.Configuration.ContentMessage.basket_form_checkout_current_product;
  required = app.Configuration.ContentMessage.required;
  quantity_invalid = app.Configuration.ContentMessage.quantity_invalid;
  park_catalogue_product_out_of_stock = app.Configuration.ContentMessage.park_catalogue_product_out_of_stock;
  @ViewChild('content') content: Content;

  constructor(public routeManager: RouteManagerService,
              public alertCtrl: AlertController,
              public navController: NavController,
              public navCtrl: NavController,
              public buyADiscountedGiftCardService: BuyADiscountedGiftCardService,
              public navParams: NavParams) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
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
        this.primaryCard = this.navParams.get('primaryCard');
      }
      if (this.navParams.get('offer')) {
        this.offer = this.navParams.get('offer');
      }
      if (this.navParams.get('catalogue')) {
        this.catalogue = this.navParams.get('catalogue');
      }
      if (this.navParams.get('category')) {
        this.category = this.navParams.get('category');
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

  get allOutOfStock() {
    return !(this.offer && this.offer.products && this.offer.products.find((p) => p.stockAvailable));
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

  addToBasket() {
    let body = null;
    body = this._buildProductFeeRequest();

    this.productFee.orderlines = [];
    this.productFee.orderlines = body.orderlines;
    MyShoppingBasketSharingDataService.getInstance().pushDatatoBasket(this.primaryCard, this.selectedProduct, this.productFee, this.quantity);
    let IsDifferentCategory = MyShoppingBasketSharingDataService.getInstance().getIsDifferentCategory();
    let isDifferentCard = MyShoppingBasketSharingDataService.getInstance().getIsDifferentCard();

    if (isDifferentCard) {
      this.showPopupNeedRemove(this.primaryCard, this.selectedProduct, this.productFee, this.quantity);
    } else if (IsDifferentCategory) {
      this.showPopupNeedCheckOut();
    } else {
      MyShoppingBasketSharingDataService.getInstance().getDataBasket().needCaculateFee = false;
      this.calculateProductOnbasket();
      this.showPopupToBasket();
    }
  }

  gotoBasket() {
    this.navController.push("MyShoppingBasketPage", {needRemovePageWhenContinueShopping: true}).then(() => {
    });
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
    this.buyADiscountedGiftCardService
      .getContentFromRetreiveContent('park-api.basket.mixed-clear-basket')
      .subscribe(observer);
  }

  showPopupNeedRemove(cardInfor, productSelected, productFee, quantity) {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message:  this.basket_form_checkout_current_product,
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
            let objectCombined = Object.assign({}, productSelected, productFee, quantityOfitem);
            MyShoppingBasketSharingDataService.getInstance().getDataBasket().productsOnBasket.push(objectCombined);
            MyShoppingBasketSharingDataService.getInstance().getDataBasket().cardInformation = cardInfor;
            MyShoppingBasketSharingDataService.getInstance().getDataBasket().feeObject = null;
            MyShoppingBasketSharingDataService.getInstance().getDataBasket().feeObject = productFee;
            MyShoppingBasketSharingDataService.getInstance().getDataBasket().needCaculateFee = false;
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
      ],
      enableBackdropDismiss: false
    });
    this.alertRef = alert;
    alert.present();
  }

  showPopupNeedCheckOut() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: this.mesageConfirm,
      cssClass: 'l2s-alert--flat  l2s-alert--default',
      buttons: [
        {
          text: 'Close',
          cssClass: "main-button",
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
    };

    let orderLineProductSelected = {
      "productCode": this.selectedProduct.productCode,
      "quantity": parseInt(this.quantity),
      "unitPrice": parseFloat(this.selectedProduct.price),
    };
    if (this.selectedProduct.type == 'any-value') {
      orderLineProductSelected['unitPrice'] = parseFloat(this.value);
      this.selectedProduct.price = parseFloat(this.value);
    }
    let products = MyShoppingBasketSharingDataService.getInstance().getDataBasket();

    if (Utils.isNotNull(products) && Utils.isNotNull(products.cardInformation)) {
      let cardSelectedInfor = products.cardInformation;
      if ((cardSelectedInfor.cardNumber === this.primaryCard.cardNumber) &&
        (cardSelectedInfor.propositionId === this.primaryCard.propositionId)) {
        if (products && products.feeObject && products.feeObject.orderlines && products.feeObject.orderlines.length > 0) {
          let detectNewProduct = false;
          for (let i = 0; i < products.feeObject.orderlines.length; i++) {
            let orderlineItem = {
              "productCode": products.feeObject.orderlines[i].productCode,
              "quantity": parseInt(products.feeObject.orderlines[i].quantity),
              "unitPrice": parseFloat(products.feeObject.orderlines[i].unitPrice)
            };

            if(orderlineItem.productCode === orderLineProductSelected.productCode &&
              orderlineItem.unitPrice === orderLineProductSelected.unitPrice) {
              detectNewProduct = true;
              orderlineItem.quantity += orderLineProductSelected.quantity;
            }

            body.orderlines.push(orderlineItem);
          }
          if(!detectNewProduct) {
            body.orderlines.push(orderLineProductSelected);
          }
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
            MyShoppingBasketSharingDataService.getInstance().savePrimaryCard((this.primaryCard));
            this.navController.push("MyShoppingBasketPage" , {needRemovePageWhenContinueShopping: true}).then(() => {
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

  scrollToBottom(delay) {
  }

  gotoTopUp() {
    this.navCtrl.push("AmountTopUpPage", {cardSelected: this.primaryCard});
  }

  private _resetData() {
    this.isQuatityInputMode = false;
    this.exchangeValue = '£0.00';
    this.primaryCard = null;
    this.category = null;
    this.offer = null;
    this.quantity = null;
    this.value = null;
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
