import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, TextInput } from 'ionic-angular';
import { RouteManagerService } from '../../../../framework/services/routeManager/routeManager.service';
import { MyShoppingBasketSharingDataService } from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { FormBuilder, FormGroup } from "@angular/forms";
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { OrderEcodeStep1Service } from "./orderEcodeStep1.service";
import { numericValidatorCSC } from "../../../../framework/validations/validator-numeric.directive";
import { minlengthValidatorCSC } from "../../../../framework/validations/validator-minlength.directive";
import { maxlengthFieldValidatorCSC } from "../../../../framework/validations/validator-maxlengthField.directive";
import { AppConfig as app } from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-orderEcodeStep1',
  templateUrl: 'orderEcodeStep1.html',
  providers: [
    OrderEcodeStep1Service
  ]
})
export class OrderEcodeStep1 {
  products: any;
  allProductsOnBasket: any;
  currency: any;
  totalPrice = 0;
  totalFee = 0;
  primaryCard: any;
  orderGenerateEcode: any;
  endingCard: any;
  _confirmOrder: any;
  _updateDeliveryMethod: any;
  baseResourceUrl;
  enter_csc = app.Configuration.ContentMessage.enter_csc;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(
    public routeManager: RouteManagerService,
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private orderEcodeStep1Service: OrderEcodeStep1Service
  ) {
    this.buildForm();
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
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

      let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
      this.allProductsOnBasket = dataBasket.productsOnBasket;

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

      if (Utils.isNotNull(this.orderGenerateEcode)) {
        this.calculateTotal(this.orderGenerateEcode.orderlines);
      }

      this.updateOrderDelivery();
    }
  }

  calculateTotal(products) {
    this.totalPrice = 0;
    this.totalFee = 0;
    if (Utils.isNotNull(products) && products.length > 0) {
      for (let i = 0; i < products.length; i++) {
        this.totalFee += products[i].feeAmount;
        this.totalPrice += ((products[i].unitPrice) * (products[i].quantity)) + this.totalFee;
      }
    }
  }

  updateOrderDelivery() {
    if (this._updateDeliveryMethod) {
      this._updateDeliveryMethod.unsubscribe();
    }
    let orderData = this._buildUpdateDeliveryMethodRequest();
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this._updateDeliveryMethod = this.orderEcodeStep1Service.updateDeliveryMethod(orderData)
      .subscribe((res) => {
        if (!res.ok) {
          return;
        }
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  confirmOrder() {
    this._unsubscribe();
    let orderData = this._buildConfirmOrder();
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this._confirmOrder = this.orderEcodeStep1Service.confirmOrder(orderData)
      .subscribe((res) => {
        if (!res.ok) {
          return;
        }
        this.navCtrl.push('OrderEcodeStep2');
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  private _buildUpdateDeliveryMethodRequest() {
    let orderSummary =
      {
        "propositionId": this.primaryCard.propositionId || '',
        "orderNumber": this.orderGenerateEcode.orderNumber || '',
        "title": this.orderGenerateEcode.title || '',
        "firstName": this.orderGenerateEcode.firstName || '',
        "lastName": this.orderGenerateEcode.lastName || '',
        "addressLine1": this.orderGenerateEcode.addressLine1 || '',
        "addressLine2": this.orderGenerateEcode.addressLine2 || '',
        "town": this.orderGenerateEcode.town || '',
        "county": this.orderGenerateEcode.county || '',
        "postcode": this.orderGenerateEcode.postcode || '',
        "country": this.orderGenerateEcode.country || '',
        "deliveryMethodCode": this.orderGenerateEcode.availableDeliveryMethods[0].code || '',
      }

    return orderSummary;
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
