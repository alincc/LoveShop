import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, TextInput } from 'ionic-angular';
import { RouteManagerService } from '../../../../framework/services/routeManager/routeManager.service';
import { MyShoppingBasketSharingDataService } from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { FormBuilder, FormGroup } from "@angular/forms";
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { OrderMixBasketStep2Service } from "./orderMixBasketStep2.service";
import { minlengthValidatorCSC } from "../../../../framework/validations/validator-minlength.directive";
import { numericValidatorCSC } from "../../../../framework/validations/validator-numeric.directive";
import { maxlengthFieldValidatorCSC } from "../../../../framework/validations/validator-maxlengthField.directive";
import { AppConfig as app } from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-orderMixBasketStep2',
  templateUrl: 'orderMixBasketStep2.html',
  providers: [
    OrderMixBasketStep2Service
  ]
})
export class OrderMixBasketStep2 {
  products: any;
  currency: any;
  totalPrice = 0;
  totalFee = 0;
  primaryCard: any;
  orderGenerateEcode: any;
  endingCard: any;
  _confirmOrder: any;
  allProductsOnBasket;
  _updateDeliveryMethod: any;
  baseResourceUrl;
  enter_csc = app.Configuration.ContentMessage.enter_csc;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(
    public routeManager: RouteManagerService,
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private orderMixBasketStep2Service: OrderMixBasketStep2Service,
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

  ionViewWillEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.primaryCard = MyShoppingBasketSharingDataService.getInstance().getPrimaryCard();
      this.orderGenerateEcode = MyShoppingBasketSharingDataService.getInstance().getDataAfterGenerateOrder();
      if (Utils.isNotNull(this.primaryCard)) {
        if (this.primaryCard.cardType === 'FLEXECODE_2.0') {
          let cardId = this.primaryCard.cardId;
          this.endingCard = cardId.substr(cardId.length - 5);
        } else {
          let cardNumber = this.primaryCard.cardNumber;
          this.endingCard = cardNumber.substr(cardNumber.length - 4);
        }
      }

      let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
      this.allProductsOnBasket = dataBasket.productsOnBasket;

      if (Utils.isNotNull(this.orderGenerateEcode)) {
        this.calculateTotal(this.orderGenerateEcode.orderlines);
      }
    }
  }

  calculateTotal(products) {
    if (Utils.isNotNull(products) && products.length > 0) {
      for (let i = 0; i < products.length; i++) {
        this.totalFee += products[i].feeAmount;
        this.totalPrice += ((products[i].unitPrice) * (products[i].quantity)) + this.totalFee;
      }
    }
  }

  confirmOrder() {
    this._unsubscribe();
    let orderData = this._buildConfirmOrder();
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this._confirmOrder = this.orderMixBasketStep2Service.confirmOrder(orderData)
      .subscribe((res) => {
        if (!res.ok) {
          return;
        }
        MyShoppingBasketSharingDataService.getInstance().resetState();
        this.navCtrl.push('OrderExchangeGiftCardStep3');
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  private _buildConfirmOrder() {
    let orderSummary = {
      'orderNumber': this.orderGenerateEcode.orderNumber,
      'paymentCards': []
    }

    let cardItem = {
      'cardNumber': this.primaryCard.cardNumber,
      'eCode': this.primaryCard.cardId,
      'csc': this.confirmOrderForm.value.cvv,
      'expiryDate': this.primaryCard.expiryDate,
      'amount': this.orderGenerateEcode.totalPaymentAmount
    }
    orderSummary.paymentCards.push(cardItem);
    return orderSummary;
  }

  private _unsubscribe() {
    if (this._confirmOrder) {
      this._confirmOrder.unsubscribe();
    }
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
}
