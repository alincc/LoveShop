import { Component } from '@angular/core';
import { IonicPage, AlertController, NavParams, NavController } from 'ionic-angular';
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { CardDetailsDataService } from "../cardDetailsData.service";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import {AppConfig as app} from "../../../../framework/appConfig";
import {Observable} from 'rxjs/Observable';
@IonicPage()
@Component({
  selector: 'page-viewAlertSettings',
  templateUrl: 'viewAlertSettings.html',
  providers: [
    CardDetailsDataService
  ]
})

export class viewAlertSettingsPage {
  saveData: any;

  model: any = {
    _alertBalance: false,
    _alertThreshold: false,
    _optOut: false,
    get alertBalance() {
      return this._alertBalance
    },
    set alertBalance(val) {
      if (val) {
        this.alertThreshold = false;
        this.optOut = false;
      }
      this._alertBalance = val;
    },
    get alertThreshold() {
      return this._alertThreshold;
    },
    set alertThreshold(val) {
      if (val) {
        this.alertBalance = false;
        this.optOut = false;
      }
      this._alertThreshold = val;
    },
    get optOut() {
      return this._optOut;
    },
    set optOut(val) {
      if (val) {
        this.alertBalance = false;
        this.alertThreshold = false;
      }
      this._optOut = val;
    }
  };

  phoneError: any = {
    valid: false,
    errMsg: ''
  };

  thresholdError: any = {
    valid: false,
    errMsg: ''
  }

  isUpdateMode: boolean;
  cardNumber: any;
  balance: any;
  sms_alerts_for_balance_and_threshold;
  receive_balance_by_sms;
  receive_sms_threshold_alert;
  threshold_amount_numeric = "Threshold amount must be numeric";
  threshold_greater_than_zero = "";
  threshold_equal_to_card_balance;
  flexecash_sms_register_succeeded;
  flexecash_sms_update_succeeded;
  flexecash_sms_optout_succeeded;
  order_confirmation_default_confirmation_SMS = app.Configuration.ContentMessage.order_confirmation_default_confirmation_SMS;
  invalid_phone_format = app.Configuration.ContentMessage.invalid_phone_format;
  constructor(private navParams: NavParams,
    public routeManager: RouteManagerService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private cardDetailsDataService: CardDetailsDataService) {

  }

  ionViewWillEnter() {
    this.getContentMSG();
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.navParams.get('cardNumber')) {
        this.cardNumber = this.navParams.get('cardNumber');
      }
      this.balance = this.navParams.get('balance');
      this.resetData();
      this.retrieveSMSAlertSetting(this.cardNumber);
    }
  }

  resetData() {
    this.model.alertBalance = false;
    this.model.alertThreshold = false;
    this.model.thresholdAmount = '';
    this.model.phoneNumber = '';
    this.phoneError = {
      valid: false,
      errMsg: ''
    };
    this.thresholdError = {
      valid: false,
      errMsg: ''
    };
  }

  validate() {
    this.validateMobileNumber(this.model.telephoneNumber);
    this.validateThresholdValue(this.model.thresholdAmount);
  }

  toggleAlertThreshold(value) {
    if (value === true) {
      this.model.alertBalance = false;
      this.model.thresholdAmount = '';
      this.thresholdError.errMsg = '';
    }
  }

  toggleAlertBalance(value) {
    if (value === true) {
      this.model.alertThreshold = false;
    }
  }

  toggleAlertOptOut(value) {
    if (value) {
      this.model.alertThreshold = false;
      this.model.alertBalance = false;
      this.model.telephoneNumber = '';
      this.model.thresholdAmount = '';
    } else {
      this.restoreSavedData();
    }
  }

  restoreSavedData() {
    if (this.saveData) {
      // check the alert type and assign to model
      const data = this.saveData;
      if (data.alertType === 'PAYMENT_NOTIFICATION') {
        this.model.alertBalance = true;
      } else if (data.alertType === 'THRESHOLD_NOTIFICATION') {
        this.model.alertThreshold = true;
        this.model.thresholdAmount = data.thresholdAmount || '';
      }
      this.model.currentPhoneNumber = this.convertCountryCode(data.phoneNumber);
      this.model.telephoneNumber = this.model.currentPhoneNumber;
      this.isUpdateMode = true;
    }
  }


  retrieveSMSAlertSetting(cardNumber) {
    let cardModelSMS = {
      "cardNumber": cardNumber
    };
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();

        if (!res.ok) {
          return;
        }
        let body = res.response;
        if (body.length > 0) {
          // check the alert type and assign to model
          const data = body[0];
          this.saveData = data;
          if (data.alertType === 'PAYMENT_NOTIFICATION') {
            this.model.alertBalance = true;
          } else if (data.alertType === 'THRESHOLD_NOTIFICATION') {
            this.model.alertThreshold = true;
            this.model.thresholdAmount = data.thresholdAmount || '';
          }
          this.model.currentPhoneNumber = this.convertCountryCode(data.phoneNumber);
          this.model.telephoneNumber = this.model.currentPhoneNumber;
          this.isUpdateMode = true;
          this.validate();
        } else {
          this.model.alertBalance = false;
          this.model.alertThreshold = false;
          this.isUpdateMode = false;
          this.model.optOut = false;
          this.model.telephoneNumber = '';
        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.cardDetailsDataService
      .getSMSAlertSetting(cardModelSMS)
      .subscribe(observer);
  }


  convertCountryCode(phoneNumber): string {
    if (phoneNumber && phoneNumber.indexOf('44') === 0) {
      return '0' + phoneNumber.substr(2)
    }
    return phoneNumber;
  }

  phoneValidator(phone) {
    if (this.model.optOut === true) {
      return null;
    }

    if (!phone) {
      return { phoneError: app.Configuration.ContentMessage.required };
    }

    if (isNaN(phone)) {
      return { phoneError: 'Phone must be numeric' };
    }

    let isPhoneOk = false;

    // check phone start with '07'
    isPhoneOk = phone.substring(0, 2) === '07';
    if (isPhoneOk === true) {
      if (
        (phone.length === 10)
        || (phone.length === 11)
      ) {
        return null;
      }
    }

    // check phone start with '03'
    isPhoneOk = phone.substring(0, 2) === '03';
    if (isPhoneOk === true) {
      if (phone.length === 11) {
        return null;
      }
    }

    return { phoneError: this.invalid_phone_format };

  }

  validateMobileNumber(phone) {
    let error = this.phoneValidator(phone);
    if (error !== null) {
      this.phoneError.valid = false;
      this.phoneError.errMsg = error.phoneError;
    } else {
      this.phoneError.valid = true;
      this.phoneError.errMsg = '';
    }
  }

  thresholdValidator(value): any {
    if (this.model.optOut === true) {
      return null;
    }
    
    if (!this.model.alertThreshold) {
      return null;
    }

    if (!value) {
      return { thresholdError: app.Configuration.ContentMessage.required };
    }
    if (isNaN(value)) {
      return { thresholdError: this.threshold_amount_numeric };
    }
    if (value <=0 ) {
      return { thresholdError: this.threshold_greater_than_zero };
    }
    if (this.balance < value) {
      return { thresholdError: this.threshold_equal_to_card_balance };
    }

    return null;
  }

  validateThresholdValue(value) {
    let error = this.thresholdValidator(value);
    if (error !== null) {
      this.thresholdError.valid = false;
      this.thresholdError.errMsg = error.thresholdError;
    } else {
      this.thresholdError.valid = true;
      this.thresholdError.errMsg = '';
    }
  }

  registerAlert() {
    if (this.phoneError.valid === false) {
      return;
    }

    this.updateAlertOptOut();
  }

  updateAlertOptOut() {
    if (this.phoneError.valid === false) {
      return;
    }

    LoadingIndicatorService.getInstance().showLoadingIndicator();
    let cardModelSMS: any = {};
    if (this.model.optOut) {
      this.model.alertBalance = false;
      this.model.alertThreshold = false;

      cardModelSMS = {
        cardNumber: this.cardNumber,
        optOut: true
      };

      const observer = {
        next: (res) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          ToastMessageService.getInstance().showToastMessage(this.flexecash_sms_optout_succeeded);
          this.resetData();
          this.retrieveSMSAlertSetting(this.cardNumber);
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.cardDetailsDataService
        .updateSMSAlertSetting(cardModelSMS)
        .subscribe(observer);

    } else {
      if (Utils.isNull(this.model.currentPhoneNumber) || this.model.currentPhoneNumber === '') {
        if (this.model.alertBalance) {
          cardModelSMS = {
            cardNumber: this.cardNumber,
            currentPhoneNumber: this.model.telephoneNumber,
            alertType: 'PAYMENT'
          };
        } else if (this.model.alertThreshold) {
          cardModelSMS = {
            cardNumber: this.cardNumber,
            currentPhoneNumber: this.model.telephoneNumber,
            alertType: 'THRESHOLD',
            thresholdAmount: parseFloat(this.model.thresholdAmount),
          };
        }
      } else {
        if (this.model.alertBalance) {
          cardModelSMS = {
            cardNumber: this.cardNumber,
            currentPhoneNumber: this.model.currentPhoneNumber,
            newPhoneNumber: this.model.telephoneNumber,
            alertType: 'PAYMENT'
          };

        } else if (this.model.alertThreshold) {
          cardModelSMS = {
            cardNumber: this.cardNumber,
            currentPhoneNumber: this.model.currentPhoneNumber,
            alertType: 'THRESHOLD',
            thresholdAmount: parseFloat(this.model.thresholdAmount)
          };
        }
      }

      cardModelSMS.optOut = false;

      const observer = {
        next: (res) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();

          if (!res.ok) {
            return;
          }

          if (!this.isUpdateMode) {
            ToastMessageService.getInstance().showToastMessage(this.flexecash_sms_register_succeeded);
            this.showAlertSetup();
          } else {
            ToastMessageService.getInstance().showToastMessage(this.flexecash_sms_update_succeeded);
            this.retrieveSMSAlertSetting(this.cardNumber);
          }
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.cardDetailsDataService
        .updateSMSAlertSetting(cardModelSMS)
        .subscribe(observer);
    }
  }

  showAlertSetup() {
    let alertSetting = this.alertCtrl.create({
      title: 'Alert set up',
      message: this.order_confirmation_default_confirmation_SMS,
      cssClass: 'l2s-alert--flat l2s-alert--twobutton',
      buttons: [
        {
          text: 'Return to your cards',
          cssClass: 'main-button',
          handler: data => {
            this.navCtrl.parent.select(0);
          }
        },
        {
          text: 'Update alert',
          cssClass: 'cancel-button',
          handler: data => {
            this.retrieveSMSAlertSetting(this.cardNumber);
          }
        },{
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
          }
        }
      ]
    });
    setTimeout(()=>{ alertSetting.present()}, 500 )
  }


  public getContentMSG() {
    const observer = {
      next: (res) => {
        if (Utils.isNotNull(res[0]) && Utils.isNotNull(res[0].response) && Utils.isNotNull(res[0].response.message)) {
          this.sms_alerts_for_balance_and_threshold = res[0].response.message;
        }

        if (Utils.isNotNull(res[1]) && Utils.isNotNull(res[1].response) && Utils.isNotNull(res[1].response.message)) {
          this.receive_balance_by_sms = res[1].response.message;
        }

        if (Utils.isNotNull(res[2]) && Utils.isNotNull(res[2].response) && Utils.isNotNull(res[2].response.message)) {
          this.receive_sms_threshold_alert = res[2].response.message;
        }

        if (Utils.isNotNull(res[3]) && Utils.isNotNull(res[3].response) && Utils.isNotNull(res[3].response.message)) {
          // this.threshold_amount_numeric = res[3].response.message;
        }

        if (Utils.isNotNull(res[4]) && Utils.isNotNull(res[4].response) && Utils.isNotNull(res[4].response.message)) {
          this.threshold_greater_than_zero = res[4].response.message;
        }

        if (Utils.isNotNull(res[5]) && Utils.isNotNull(res[5].response) && Utils.isNotNull(res[5].response.message)) {
          this.threshold_equal_to_card_balance = res[5].response.message;
        }

        if (Utils.isNotNull(res[6]) && Utils.isNotNull(res[6].response) && Utils.isNotNull(res[6].response.message)) {
          this.flexecash_sms_register_succeeded = res[6].response.message;
        }

        if (Utils.isNotNull(res[7]) && Utils.isNotNull(res[7].response) && Utils.isNotNull(res[7].response.message)) {
          this.flexecash_sms_update_succeeded = res[7].response.message;
        }

        if (Utils.isNotNull(res[8]) && Utils.isNotNull(res[8].response) && Utils.isNotNull(res[8].response.message)) {
          this.flexecash_sms_optout_succeeded = res[8].response.message;
        }
      },
      error: (error) => {
      },
      complete: () => {
      }
    };
    Observable.combineLatest(
      this.cardDetailsDataService.getContentFromRetreiveContent("sms-alerts-for-balance-and-threshold"),
      this.cardDetailsDataService.getContentFromRetreiveContent("receive-balance-by-sms"),
      this.cardDetailsDataService.getContentFromRetreiveContent("receive-sms-threshold-alert"),
      this.cardDetailsDataService.getContentFromRetreiveContent("receive-sms-threshold-alert"),
      this.cardDetailsDataService.getContentFromRetreiveContent("threshold-greater-than-zero"),
      this.cardDetailsDataService.getContentFromRetreiveContent("threshold-equal-to-card-balance"),

      this.cardDetailsDataService.getContentFromRetreiveContent("flexecash.sms.register.succeeded"),
      this.cardDetailsDataService.getContentFromRetreiveContent("flexecash.sms.update.succeeded"),
      this.cardDetailsDataService.getContentFromRetreiveContent("flexecash.sms.optout.succeeded"),
    ).subscribe(observer)
  }

}
