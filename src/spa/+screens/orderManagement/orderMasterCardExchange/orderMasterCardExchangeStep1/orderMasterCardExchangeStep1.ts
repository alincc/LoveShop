import {FormBuilder, FormGroup} from '@angular/forms';
import {Component, ViewChildren, QueryList} from '@angular/core';
import {IonicPage, NavParams, NavController, TextInput} from 'ionic-angular';
import {requireValidator} from '../../../../framework/validations/validator-required.directive';
import {RouteManagerService} from '../../../../framework/services/routeManager/routeManager.service';
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {OrderMasterCardExchangeStep1Service} from "./orderMasterCardExchangeStep1.service";
import {OrderMasterCardExchangeSharingDataService} from "./../orderMasterCardExchangeSharingData.services";
import {MyShoppingBasketSharingDataService} from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import {Utils} from "../../../../framework/services/utilities/utilities";
import {minlengthValidatorCSC} from "../../../../framework/validations/validator-minlength.directive";
import {numericValidatorCSC} from "../../../../framework/validations/validator-numeric.directive";
import {maxlengthFieldValidatorCSC} from "../../../../framework/validations/validator-maxlengthField.directive";
import $ from 'jquery';
import {AppConfig as app} from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-orderMasterCardExchangeStep1',
  templateUrl: 'orderMasterCardExchangeStep1.html',
  providers: [
    OrderMasterCardExchangeStep1Service,
  ]
})
export class OrderMasterCardExchangeStep1 {
  orderInfor: any;
  orderInforAfterGenerate: any;
  orderSummary: any;
  cardPrimary: any;
  fourLastCardNumber: any;
  haveCardFee =false;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;
  baseResourceUrl;
  cardNumberContainSpace;
  masterCardTypeSelected;
  constructor(private formBuilder: FormBuilder,
              public routeManager: RouteManagerService,
              private navParams: NavParams,
              public navCtrl: NavController,
              public orderMasterCardExchangeStep1Service: OrderMasterCardExchangeStep1Service,) {
    this.buildForm();
    this.orderSummary = {
      'orderNumber': '',
      'paymentCards': []
    }
  }

  confirmOrderForm: FormGroup;
  formErrors = {
    'cvv': ''
  };
  targetCard;
  currentBalanceRemaining = 0;
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
  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }
  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
        if (this.navParams.get('masterCardTypeSelected')) {
          this.masterCardTypeSelected = this.navParams.get('masterCardTypeSelected');
        }
        if (this.navParams.get('orderInforAfterGenerate')) {
          this.haveCardFee =false;

          this.orderInforAfterGenerate = this.navParams.get('orderInforAfterGenerate');

          if(this.orderInforAfterGenerate
            && Utils.isNotNull(this.orderInforAfterGenerate.orderlines[1])
            && Utils.isNotNull(this.orderInforAfterGenerate.orderlines[1].paymentAmount)
            && this.orderInforAfterGenerate.orderlines[1].paymentAmount > 0) {
            this.haveCardFee = true;
          }
        }
        if (this.navParams.get('primaryCard')) {
          this.cardPrimary = this.navParams.get('primaryCard');
          if (Utils.isNotNull(this.cardPrimary)) {
            if(this.cardPrimary.cardType === 'FLEXECODE_2.0') {
              let cardId = this.cardPrimary.cardId;
              this.fourLastCardNumber = cardId.substr(cardId.length - 5);
              this.cardNumberContainSpace = this.cardPrimary.cardId;
            } else {
              let cardNumber = this.cardPrimary.cardNumber;
              this.fourLastCardNumber = cardNumber.substr(cardNumber.length - 4);
              this.cardNumberContainSpace = this.cardPrimary.cardNumber.split(/(\d{4})/).join(' ').trim();
            }

            if(Utils.isNotNull(this.cardPrimary.balance) && Utils.isNotNull(this.orderInforAfterGenerate) && Utils.isNotNull(this.orderInforAfterGenerate.totalPaymentAmount)) {
              this.currentBalanceRemaining = parseFloat(this.cardPrimary.balance) - parseFloat(this.orderInforAfterGenerate.totalPaymentAmount)
            }

          }
        }

      }
    }
  }

  ionViewWillLease() {
    $('.app-root').removeClass('not-show-tab');
  }


  confirmOrder() {
    this.orderSummary = {
      'orderNumber': '',
      'paymentCards': []
    };

    let cardItem = {
      'cardNumber': this.cardPrimary.cardNumber,
      'eCode': this.cardPrimary.cardId,
      'csc': this.confirmOrderForm.value.cvv,
      'expiryDate': this.cardPrimary.expiryDate,
      'amount': this.orderInforAfterGenerate.totalPaymentAmount
    }

    this.orderSummary.orderNumber = this.orderInforAfterGenerate.orderNumber;
    this.orderSummary.paymentCards.push(cardItem);

    if (this.confirmOrderForm.valid) {
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          if (!res.ok) {
            LoadingIndicatorService.getInstance().hideLoadingIndicator();
            return;
          }
          let body = res.response;

          if (Utils.isNotNull(body)) {
            this.navCtrl.push('OrderMasterCardExchangeStep2',
              {
                orderSuccess: body,
                orderInforAfterGenerate: this.orderInforAfterGenerate,
                cardPrimary: this.cardPrimary,
                imageMasterCard: this.masterCardTypeSelected.mediumImages[0]
              });
          }
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        },
        complete: () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.orderMasterCardExchangeStep1Service
        .confirmOrder(this.orderSummary)
        .subscribe(observer);
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
