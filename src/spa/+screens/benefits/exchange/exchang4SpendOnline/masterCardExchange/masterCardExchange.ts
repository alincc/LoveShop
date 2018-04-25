import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {RouteManagerService} from "../../../../../framework/services/routeManager/routeManager.service";
import {ToastMessageService} from "../../../../../framework/services/toastMessageService/toastMessage.service";
import {MasterCardExchangeService} from "./masterCardExchange.service";
import {LoadingIndicatorService} from "../../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {requireValidator} from "../../../../../framework/validations/validator-required.directive";
import $ from 'jquery';
import {AppConfig as app} from "../../../../../framework/appConfig";
import {numericValidator} from "../../../../../framework/validations/validator-numeric.directive";
import {Observable} from 'rxjs/Observable';
import {Utils} from "../../../../../framework/services/utilities/utilities";

const BASE_URL = 'https://www.love2shop.co.uk';
const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;

@IonicPage()
@Component({
  selector: 'page-masterCardExchange',
  templateUrl: 'masterCardExchange.html',
  providers: [
    InAppBrowser,
    MasterCardExchangeService
  ]
})
export class MasterCardExchangePage {
  amountStr: string;
  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('amountInputAc') amountInputAc: ElementRef;

  tAandCBaseUrl = 'https://www.love2shopbusiness.co.uk';
  primaryCard: any;
  targetCard: any;
  readTAndC: any = false;
  exchangeValue: any;
  amount: any;
  amountWidth: string;
  feeMsg;
  exchange_value_to_vmc;
  how_much_to_transfer;
  firstTouch: Boolean = false;
  masterCardTypeSelected;

  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;


  constructor(public routeManager: RouteManagerService,
              public formBuilder: FormBuilder,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              private masterCardExchangeService: MasterCardExchangeService,
              private iab: InAppBrowser) {
    this.buildForm();
  }

  ionViewWillEnter() {

    this.amount = '0';
    this.amountWidth = '1em';
    this.firstTouch = false;
    this.getContentHardCode();
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.navParams.get('primaryCard')) {
        this.primaryCard = this.navParams.get('primaryCard');
      }
      if (this.navParams.get('targetCard')) {
        this.targetCard = this.navParams.get('targetCard');
      }

      if (this.navParams.get('masterCardTypeSelected')) {
        this.masterCardTypeSelected = this.navParams.get('masterCardTypeSelected');
      }

      if (this.navParams.get('feeMsg')) {
        this.feeMsg = this.navParams.get('feeMsg');
      }
    }
  }

  goToTandC() {
    if (this.targetCard && this.targetCard.customAttributes && this.targetCard.customAttributes.TERMS_URL) {
      const url = this._normalizeUrl(this.targetCard.customAttributes.TERMS_URL);
      const browser = this.iab.create(this.tAandCBaseUrl + this.targetCard.customAttributes.TERMS_URL, "_system", "location=true");
    } else {
      this._showError(DEFAULT_ERROR_MSG);
    }
  }


  exchangeForm: FormGroup;
  formErrors = {
    'exchangeInput': ''
  };

  public buildForm() {
    this.exchangeForm = this.formBuilder.group({
      'exchangeInput': ['', [
        requireValidator('exchangeInput'),
        numericValidator()
      ]],
      'termCondition': [false, [
        Validators.requiredTrue
      ]]
    });

    this.exchangeForm.valueChanges.subscribe(data => this.onValueChanges(data));
    this.onValueChanges();
  }

  onValueChanges(data?: any) {
    if (!this.exchangeForm) {
      return;
    }
    const form = this.exchangeForm;
    for (let fieldError in this.formErrors) {
      this.formErrors[fieldError] = '';
      let control = form.get(fieldError);
      if (control && control.dirty && !control.valid) {
        this.formErrors[fieldError] = control.errors[Object.keys(control.errors)[0]];
      }
    }
    if (this.textInputs) {
      this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
    }
  }


  changeInput($event) {


    let lengthInput = this.exchangeForm.value.exchangeInput.length;
    if (lengthInput > 0) {
      $('.inputAmount').children('input').width((lengthInput * 37) + 'px');
      if (lengthInput > 2) {
        $('.inputAmount').children('input').width((lengthInput * 26) + 'px');
      }
    } else {
      $('.inputAmount').children('input').width('150px');
      $('.inputAmount').children('.pound-icon').remove();
    }

    let poundIcon = $('.inputAmount').children('.pound-icon');
    if (lengthInput > 0 && poundIcon.length < 1) {
      $('.inputAmount').children('input').before('<span class="pound-icon">£</span>');
      $('.inputAmount').children('input').removeClass('m-l-26');
      $('.inputAmount').children('.pound-icon').removeClass('icon-absolute');
    }

    if (lengthInput >= 7) {
      $('.inputAmount').children('input').css('margin', 0);

      if (screen.width < 768) {
        $('.inputAmount').children('input').width('calc(100% - 26px)');
        $('.inputAmount').children('input').addClass('m-l-26');
        $('.inputAmount').children('.pound-icon').addClass('icon-absolute');
      }
    }
    if (lengthInput >= 16) {
      if (screen.width >= 768) {
        $('.inputAmount').children('input').width('calc(100% - 26px)');
        $('.inputAmount').children('input').addClass('m-l-26');
        $('.inputAmount').children('.pound-icon').addClass('icon-absolute');
      }
    }
  }


  focusToInput() {
    if (!this.firstTouch) {
      this.showAlertWarning();
    }
  }


  generateOrder() {

    if (Utils.isNotNull(this.primaryCard.purchaseMasterCardFailureMessage) && (parseFloat(this.exchangeForm.value.exchangeInput) > parseFloat(this.primaryCard.balance))) {
        ToastMessageService.getInstance().showToastMessage(this.primaryCard.purchaseMasterCardFailureMessage);
    } else {
      this.exchangeValue = {
        "propositionId": this.primaryCard.propositionId,
        "paymentCardNumber": this.primaryCard.cardNumber,
        "orderJourney": "MASTERCARD_PURCHASE",
        "orderlines": [{
          "productCode": this.targetCard.productCode,
          "quantity": 1,
          "loadAmount": this.exchangeForm.value.exchangeInput
        }]
      };
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          if (!res.ok) {
            return;
          }
          let body = res.response;

          this.navCtrl.push('OrderMasterCardExchangeStep1', {
            orderInforAfterGenerate: body,
            primaryCard: this.primaryCard,
            masterCardTypeSelected: this.masterCardTypeSelected
          });

        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        },
        complete: () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.masterCardExchangeService
        .generateOrder(this.exchangeValue)
        .subscribe(observer);
    }
  }


  public getContentHardCode() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (Utils.isNotNull(res[0]) && Utils.isNotNull(res[0].response) && Utils.isNotNull(res[0].response.message)) {
          this.exchange_value_to_vmc = res[0].response.message;
        }

        if (Utils.isNotNull(res[1]) && Utils.isNotNull(res[1].response) && Utils.isNotNull(res[1].response.message)) {
          this.how_much_to_transfer = res[1].response.message;
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
      this.masterCardExchangeService.getContentFromRetreiveContent("exchange-value-to-vmc"),
      this.masterCardExchangeService.getContentFromRetreiveContent("how-much-to-transfer"),
    ).subscribe(observer)
  }

  showAlertWarning() {
    let alertWarning = this.alertCtrl.create({
      cssClass: 'l2s-alert--default l2s-alert--centered',
      title: 'Got something in mind?',
      message: `Please add any extra charges for delivery etc to your transfer amount. Most retailers will only accept a single payment method.`,
      buttons: [{
        text: 'Ok got it',
        handler: data => {
          this.firstTouch = true;
        }
      }]
    });
    alertWarning.present();
  }

  private _showError(message) {
    ToastMessageService.getInstance().showToastMessage(message);
  }

  private _normalizeUrl(url) {
    if (url.startsWith('#') || url.startsWith('/#')) {
      return;
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (url.startsWith('/')) {
        return BASE_URL + url;
      }
      return 'http://' + url;
    }

    return url;
  }
}
