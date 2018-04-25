import { Component, ViewChildren, QueryList } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { AddCardDataService } from "../addCardData.service";
import { HttpAddCardService } from "../httpAddCard.service";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { minlengthValidatorCSC } from "../../../../framework/validations/validator-minlength.directive";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { numericValidatorCSC } from "../../../../framework/validations/validator-numeric.directive";
import {
  maxlengthFieldValidator,
  maxlengthFieldValidatorCSC
} from "../../../../framework/validations/validator-maxlengthField.directive";
import { AddCardSharingDataService } from '../addCardSharing.services';
import { AppConfig as app } from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-addCardPhysicalMasterCard',
  templateUrl: 'addCardPhysicalMasterCard.html',
  providers: [
    AddCardDataService,
    HttpAddCardService,
    InAppBrowser,
  ]
})

export class AddCardPhysicalMasterCardPage {
  model = {
    cardID: '',
    csc: '',
    nickname: '',
    termsAgreed: ''
  };

  cardNumberOld;
  termsPath;
  bodyCardType;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(public routeManager: RouteManagerService,
    private formBuilder: FormBuilder,
    private addCardDataService: AddCardDataService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public iab: InAppBrowser,
    public navParams: NavParams) {
    this.buildForm();
  }

  addCardForm: FormGroup;
  formErrors = {
    cardID: '',
    csc: '',
    nickname: '',
    termsAgreed: false,
    cardOwner: false,
  };
  enter_all_digits = app.Configuration.ContentMessage.enter_all_digits;
  must_read_ts_cs = app.Configuration.ContentMessage.must_read_ts_cs;
  account_management_confirm_user_of_card = app.Configuration.ContentMessage.account_management_confirm_user_of_card;
  account_management_confirm_user = app.Configuration.ContentMessage.account_management_confirm_user;
  public buildForm() {
    this.addCardForm = this.formBuilder.group({
      cardID: ['', [
        requireValidator('cardID'),
        maxlengthFieldValidator(19, 'Card or e-code number')
      ]],
      csc: ['', [
        requireValidator('csc'),
        minlengthValidatorCSC(3, 'CSC'),
        maxlengthFieldValidatorCSC(3, 'CSC'),
        numericValidatorCSC(),
      ]],
      nickname: ['',],
      termsAgreed: [false, [
        Validators.requiredTrue
      ]],
      cardOwner: [false, [
        Validators.requiredTrue
      ]]
    }, {
        validator: {
          updateOn: 'blur'
        }
      });

    this.addCardForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });
  }

  errorMessage(path: string) {
    const control = this.addCardForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'cardID' || path === 'csc' || path === 'termsAgreed' || path === 'cardOwner') {
      if (control.hasError('required')) {
        return control.getError('required');
      } else {
        if (control.hasError('maxLengthField')) {
          return control.getError('maxLengthField')
        }

        if (control.hasError('minlength')) {
          return control.getError('minlength')
        }

        if (control.hasError('key')) {
          return control.getError('key')
        }
      }
    }
  }

  getHelpContent(code) {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        if (res && res.response && res.response.message) {
          this.showAlertHelp(res.response.message);
        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.addCardDataService
      .getHelp(code)
      .subscribe(observer);
  }

  showAlertHelp(message) {
    let alert = this.alertCtrl.create({
      title: '',
      cssClass: 'l2s-alert--flat l2s-alert--default',
      message: message,
      buttons: [
        {
          text: 'OK',
          cssClass: 'main-button',
          handler: data => {
          }
        },{
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }

  gotoYourCard() {
    this.navCtrl.setRoot('AddCardNumberPage');
  }

  private _normalizeUrl(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (url.startsWith('/')) {
        return 'https://www.love2shop.co.uk' + url;
      }
      return 'http://' + url;
    }

    return url;
  }

  ionViewWillEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.navParams.get('cardNumber')) {
        this.cardNumberOld = this.navParams.get('cardNumber');
        this.addCardForm.patchValue({ 'cardID': this.cardNumberOld + '' });
      }

      if (this.navParams.get('termsPath')) {
        this.termsPath = this.navParams.get('termsPath');
      }

      if (this.navParams.get('bodyCardType')) {
        this.bodyCardType = this.navParams.get('bodyCardType');
      }

      if (Utils.isNotNull(this.bodyCardType) && Utils.isNotNull(this.bodyCardType.endUserPromptRequired)) {
        if (this.bodyCardType.endUserPromptRequired !== true) {
          this.addCardForm.removeControl('cardOwner')
        }
      }

      if (Utils.isNotNull(this.bodyCardType) && Utils.isNotNull(this.bodyCardType.termsRequired)) {
        if (this.bodyCardType.termsRequired !== true) {
          this.addCardForm.removeControl('termsAgreed')
        }
      }
    }
  }

  onValueChanges(data?: any) {
    if (!this.addCardForm) {
      return;
    }
    const form = this.addCardForm;
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

  detectChangeCard() {
    if (this.addCardForm.valid) {
      let bodyPost = {
        "cardID": this.addCardForm.value.cardID
      }
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          if (!res.ok) {
            return;
          }
          let body = res.response;
          if (Utils.isNotNull(body) && Utils.isNotNull(body.cardType)) {
            this.addCardDataService.navigationPage(body, this.addCardForm.value.cardID);
          }
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        },
        complete: () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.addCardDataService
        .checkCardTypeToAddCard(bodyPost)
        .subscribe(observer);
    }
  }

  showAlert(cardId, nickname) {
    const displayCard = AddCardSharingDataService.getInstance().getDisplayCard(cardId);
    let alert = this.alertCtrl.create({
      title: app.Configuration.ContentMessage.account_management_card_added_to_wallet,
      cssClass: 'l2s-alert--flat l2s-alert--default',
      message: "<p>You added: </p><p class='m-b-0'>" + nickname + "</p><p class='m-t-0'>" + displayCard + "</p><p class='m-t-10'>To your Card Wallet</p>",
      buttons: [
        {
          text: 'OK',
          cssClass: 'main-button',
          handler: data => {
            this.addCardDataService.gotoCardDetailAndReload('', cardId);
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
    alert.present();
  }

  _convertCardId(cardId) {
    if (!cardId) {
      return null;
    }
    let newCard = (cardId.substr(0, 4) + '-') +
      (cardId.substr(4, 4) + '-') +
      (cardId.substr(8, 4) + '-') +
      (cardId.substr(12, 4));
    return newCard;
  }

  submitToAddPhysicalMasterCard() {
    let bodyPost = {
      "cardID": this.addCardForm.value.cardID,
      "csc": this.addCardForm.value.csc,
      "nickname": this.addCardForm.value.nickname,
      "endUserConfirmed": this.addCardForm.value.cardOwner,
      "termsAgreed": this.addCardForm.value.termsAgreed,
    }
    if (this.cardNumberOld !== this.addCardForm.value.cardID) {
      this.detectChangeCard();
      return;
    }
    if (this.addCardForm.valid) {
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          if (!res.ok) {
            return;
          }
          let body = res.response;

          if (Utils.isNotNull(body) && Utils.isNotNull(body.cardAdded)) {
            if (body.cardAdded) {
              this.showAlert(body.cardID, this.addCardForm.value.nickname);
            } else {
              ToastMessageService.getInstance().showToastMessage(app.Configuration.HttpService.DEFAULT_ERROR_MSG);
            }
          }
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        },
        complete: () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.addCardDataService
        .addCard(bodyPost)
        .subscribe(observer);
    }
  }

  gotoTermsPage() {
    const url = this._normalizeUrl(this.termsPath);
    const browser = this.iab.create(url, "_system", "location=true");
  }
}
