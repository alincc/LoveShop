import {Component, QueryList, ViewChildren} from '@angular/core';
import {IonicPage, NavController, NavParams, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {requireValidator} from "../../../../framework/validations/validator-required.directive";
import {CardDetailsDataService} from '../cardDetailsData.service';
import {AmountTopUpService} from "./amountTopUp.service";
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import $ from 'jquery';
import {ToastMessageService} from '../../../../framework/services/toastMessageService/toastMessage.service';
import {OrderDiscountGiftCardSharingDataService} from "../../../orderManagement/orderDiscountGiftCard/orderDiscountGiftCardSharingData.services";
import {Utils} from "../../../../framework/services/utilities/utilities";
import {AppConfig as app} from "../../../../framework/appConfig";
import {Observable} from 'rxjs/Observable';
@IonicPage()
@Component({
  selector: 'page-amountTopUp',
  templateUrl: 'amountTopUp.html',
  providers: [
    CardDetailsDataService,
    AmountTopUpService
  ]
})

export class AmountTopUpPage {
  cardPrimary;
  cardIndex;
  rootPage;
  productValid = true;
  minValue = 0;
  maxValue = 0;
  topUpErrorForm: any = {
    message: '',
    valid: true
  };
  confirm_top_up_amount;
  applied_to_this_amount;
  applied_to_card_load;


  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(private formBuilder: FormBuilder,
              private navParams: NavParams,
              public navCtrl: NavController,
              public routeManager: RouteManagerService,
              private amountTopUpService: AmountTopUpService) {
    this.buildForm();
  }

  topUpForm: FormGroup;
  formErrors = {
    'topUpInput': ''
  };

  public buildForm() {
    this.topUpForm = this.formBuilder.group({
      'topUpInput': ['', [
        requireValidator('topUpInput')
      ]]
    });

    this.topUpForm.valueChanges.subscribe(data => this.onValueChanges(data));
    this.onValueChanges();
  }

  onValueChanges(data?: any) {
    if (!this.topUpForm) {
      return;
    }
    const form = this.topUpForm;
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

  ionViewDidLeave() {
  }

  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    OrderDiscountGiftCardSharingDataService.getInstance().resetNewOrderNumber();
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      $('.inputAmount').removeClass('invalidValue');
      if (this.navParams.get('cardSelected')) {
        this.cardPrimary = this.navParams.get('cardSelected');
        this.minValue = this.cardPrimary.lowerValue;
        this.maxValue = this.cardPrimary.upperValue;
      }

      this.rootPage = this.navParams.get('rootPage');
      this.cardIndex = this.navParams.get('cardIndex');
    }

    this.getContentMSG();
  }

  confirmTopUp() {
    this.topUpErrorForm = {
      valid: true,
      message: ''
    };
    const codeMustShow = ['2192'];
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    let body = this._buildGenerateTopupRequest();
    const observer = {
      next: (res) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.navCtrl.push('MakeTopUptPage', {
          dataAfterGenerateOrder: body,
          cardprimary: this.cardPrimary,
          cardIndex: this.cardIndex
        });
      },
      error: (error) => {
        if (typeof error.code !== 'undefined' && codeMustShow.indexOf((error.code + '')) !== -1) {
          this.topUpErrorForm = {
            valid: false,
            message: error.message || error.code
          };
        } else {
          ToastMessageService.getInstance().showToastMessage(error.message);
        }
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.amountTopUpService
      .generateOrder(body)
      .subscribe(observer);
  }

  changeInput($event) {
    let lengthInput = this.topUpForm.value.topUpInput.length;
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

  otherValueChange(value) {
    if (isNaN(value) || parseFloat(value) < this.minValue || parseFloat(value) > this.maxValue) {
      this.productValid = false;
      $('.inputAmount').addClass('invalidValue');
    } else {
      this.productValid = true;
      $('.inputAmount').removeClass('invalidValue');
    }
  }

  focusToInput() {
    $('.inputAmount').children('input').focus();
  }

  public getContentMSG() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (Utils.isNotNull(res[0]) && Utils.isNotNull(res[0].response) && Utils.isNotNull(res[0].response.message)) {
          app.Configuration.ContentMessage.confirm_top_up_amount = res[0].response.message;
          this.confirm_top_up_amount = app.Configuration.ContentMessage.confirm_top_up_amount;
        }

        if (Utils.isNotNull(res[1]) && Utils.isNotNull(res[1].response) && Utils.isNotNull(res[1].response.message)) {
          app.Configuration.ContentMessage.applied_to_this_amount = res[1].response.message;
          this.applied_to_this_amount = app.Configuration.ContentMessage.applied_to_this_amount;
        }

        if (Utils.isNotNull(res[2]) && Utils.isNotNull(res[2].response) && Utils.isNotNull(res[2].response.message)) {
          app.Configuration.ContentMessage.applied_to_card_load = res[2].response.message;
          this.applied_to_card_load = app.Configuration.ContentMessage.applied_to_card_load;
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
      this.amountTopUpService.getContentFromRetreiveContent("confirm-top-up-amount"),
      this.amountTopUpService.getContentFromRetreiveContent("applied-to-this-amount"),
      this.amountTopUpService.getContentFromRetreiveContent("applied-to-card-load"),
    ).subscribe(observer)
  }


  private _buildGenerateTopupRequest() {
    let cardSelectedOrder =
      {
        "propositionId": this.cardPrimary.propositionId,
        "orderJourney": "CARD_TOPUP",
        "orderlines": [],
        "cardProductCode": this.cardPrimary.productCode,
      }

    let product = {
      "productCode": this.cardPrimary.topUpProductCode,
      "cardNumber": this.cardPrimary.cardNumber,
      "serialNumber": this.cardPrimary.serialNumber,
      "quantity": 1,
      "loadAmount": parseFloat(this.topUpForm.value.topUpInput)
    }

    cardSelectedOrder.orderlines.push(product);
    return cardSelectedOrder;
  }

  gotoPreviousPage() {
    if (this.rootPage === true) {
      $('.app-root').removeClass('not-show-tab');
      this.navCtrl.parent.select(0);
    } else {
      this.navCtrl.pop();
    }
  }
}
