import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavParams, NavController, TextInput } from 'ionic-angular';
import { RouteManagerService } from '../../../../framework/services/routeManager/routeManager.service';
import { MyShoppingBasketSharingDataService } from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { OrderExchangeGiftCardStep2Service } from "./orderExchangeGiftCardStep2.service";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { minlengthValidatorCSC } from "../../../../framework/validations/validator-minlength.directive";
import { numericValidatorCSC } from "../../../../framework/validations/validator-numeric.directive";
import { maxlengthFieldValidatorCSC } from "../../../../framework/validations/validator-maxlengthField.directive";
import { AppConfig as app } from "../../../../framework/appConfig";

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;
const ORDER_JOURNEY = "SPEND_WITH_FLEXECASH";

@IonicPage()
@Component({
  selector: 'page-orderExchangeGiftCardStep2',
  templateUrl: 'orderExchangeGiftCardStep2.html',
  providers: [
    OrderExchangeGiftCardStep2Service
  ]
})
export class OrderExchangeGiftCardStep2 {
  products: any;
  currency: any;
  totalFee = 0;
  totalFeeDelivery = 0;
  totalPrice = 0;
  totalPotentialFee = 0;
  deliveryIndex = 0;
  primaryCard: any;
  orderAfterGenerate: any;
  endingCard: any;
  _confirmOrder: any;
  _updateDeliveryMethod: any;
  allProductsOnBasket: any;
  baseResourceUrl;
  enter_csc = app.Configuration.ContentMessage.enter_csc;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(
    public routeManager: RouteManagerService,
    private formBuilder: FormBuilder,
    private orderExchangeGiftCardStep2Service: OrderExchangeGiftCardStep2Service,
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
    this.buildForm();
  }

  confirmOrderForm: FormGroup;
  formErrors = {
    'cvv': ''
  };
  buildForm() {
    this.confirmOrderForm = this.formBuilder.group({
      'cvv': ['', [
        requireValidator('cvv'),
        minlengthValidatorCSC(3, 'CSC'),
        maxlengthFieldValidatorCSC(3, 'CSC'),
        numericValidatorCSC(),
      ]],
    }, {
        validator: {
          updateOn: 'blur'
        }
      });

    this.confirmOrderForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });
  }

  errorMessage(path: string) {
    const control = this.confirmOrderForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'cvv') {
      if (control.hasError('required')) {
        return control.getError('required');
      } else {


        if (control.hasError('maxLengthField')) {
          return control.getError('maxLengthField')
        }

        if (control.hasError('minlength')) {
          return control.getError('minlength')
        }

        if (control.hasError('minlengthField')) {
          return control.getError('minlengthField')
        }
        if (control.hasError('key')) {
          return control.getError('key')
        }
      }
    }
  }

  ionViewWillEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {

      if (this.navParams.get('deliveryIndex')) {
        this.deliveryIndex = this.navParams.get('deliveryIndex');
      }
      this.primaryCard = MyShoppingBasketSharingDataService.getInstance().getPrimaryCard();
      this.orderAfterGenerate = MyShoppingBasketSharingDataService.getInstance().getDataAfterGenerateOrder();

      let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
      this.allProductsOnBasket = dataBasket.productsOnBasket;

      if (Utils.isNotNull(this.primaryCard)) {
        this.currency = Utils.convertCurrency(this.primaryCard.currency);
        if (this.primaryCard.cardType === 'FLEXECODE_2.0') {
          let cardId = this.primaryCard.cardId;
          this.endingCard = cardId.substr(cardId.length - 5);
        } else {
          let cardNumber = this.primaryCard.cardNumber;
          this.endingCard = cardNumber.substr(cardNumber.length - 4);
        }
      }

      if (Utils.isNotNull(this.orderAfterGenerate)) {
        this.calculateTotal(this.orderAfterGenerate.orderlines, this.deliveryIndex);
      }

    }
  }

  calculateTotal(products, index) {
    this.totalFee = 0;
    this.totalPrice = 0;
    this.totalFeeDelivery = 0;
    this.totalPotentialFee = 0;
    if (Utils.isNotNull(products) && products.length > 0) {
      for (let i = 0; i < products.length; i++) {
        this.totalFee += products[i].feeAmount;
      }
      this.totalFeeDelivery = this.orderAfterGenerate.availableDeliveryMethods[index].cost;

      this.totalPotentialFee = this.totalFee + this.totalFeeDelivery;
      this.totalPrice = this.orderAfterGenerate.totalPaymentAmount + this.totalPotentialFee;
    }
  }

  confirmOrder() {
    this._unsubscribe();
    let orderData = this._buildConfirmOrder();
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this._confirmOrder = this.orderExchangeGiftCardStep2Service.confirmOrder(orderData)
      .subscribe((res) => {
        if (!res.ok) {
          return;
        }

        this.navCtrl.push('OrderExchangeGiftCardStep3', { deliveryIndex: this.deliveryIndex });
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  private _buildConfirmOrder() {
    let orderSummary = {
      'orderNumber': this.orderAfterGenerate.orderNumber,
      'paymentCards': []
    }

    let cardItem = {
      'cardNumber': this.primaryCard.cardNumber,
      'eCode': this.primaryCard.cardId,
      'csc': this.confirmOrderForm.value.cvv,
      'expiryDate': this.primaryCard.expiryDate,
      'amount': this.orderAfterGenerate.totalPaymentAmount
    }
    orderSummary.paymentCards.push(cardItem);
    return orderSummary;
  }

  private _showError(message) {
    ToastMessageService.getInstance().showToastMessage(message);
  }

  private _unsubscribe() {
    if (this._confirmOrder) {
      this._confirmOrder.unsubscribe();
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

}
