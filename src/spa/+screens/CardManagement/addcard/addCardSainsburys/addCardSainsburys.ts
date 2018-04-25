import { Component, ViewChildren, QueryList } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { AddCardDataService } from "../addCardData.service";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { serialNumberMatch } from "../../../../framework/validations/validator-serialNumberSainsburyMatch.directive";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { maxlengthFieldValidator } from "../../../../framework/validations/validator-maxlengthField.directive";
import { numericValidator, numericValidatorSerial } from "../../../../framework/validations/validator-numeric.directive";
import { AppConfig as app } from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-addCardSainsburys',
  templateUrl: 'addCardSainsburys.html',
  providers: [
    AddCardDataService
  ]
})

export class AddCardSainsburysPage {

  cardNumberOld;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(public alertCtrl: AlertController,
    public routeManager: RouteManagerService,
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private addCardDataService: AddCardDataService,
    public navParams: NavParams) {
    this.buildForm();
  }
  enter_all_digits = app.Configuration.ContentMessage.enter_all_digits;
  addCardForm: FormGroup;
  formErrors = {
    'cardID': '',
    'serialNumber': '',
    'confirmSerialNumber': ''
  };

  buildForm() {
    this.addCardForm = this.formBuilder.group({
      'cardID': ['', [
        requireValidator('cardID'),
        maxlengthFieldValidator(19, 'Card or e-code number')
      ]],
      'serialNumber': ['', [
        requireValidator('serialNumber'),
        maxlengthFieldValidator(10, 'Serial number'),
        numericValidatorSerial()
      ]],
      'confirmSerialNumber': ['', [
        requireValidator('confirmSerialNumber'),
        maxlengthFieldValidator(10, 'Serial number'),
        numericValidatorSerial()
      ]]
    }, {
        validator: {
          validators: serialNumberMatch('serialNumber', 'confirmSerialNumber'),
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

    if (path === 'cardID' || path === 'serialNumber' || path === 'confirmSerialNumber') {
      if (control.hasError('required')) {
        return control.getError('required');
      } else {
        if (control.hasError('maxLengthField')) {
          return control.getError('maxLengthField')
        }

        if (control.hasError('notEquivalent')) {
          return control.getError('notEquivalent')
        }

        if (control.hasError('numericInvalid')) {
          return control.getError('numericInvalid')
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

  ionViewWillEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.navParams.get('cardNumber')) {
        this.cardNumberOld = this.navParams.get('cardNumber');
        this.addCardForm.patchValue({ 'cardID': this.cardNumberOld + '' });
      }
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

  showAlert(fourLastDigit) {
    let alert = this.alertCtrl.create({
      title: app.Configuration.ContentMessage.account_management_card_added_to_wallet,
      cssClass: 'l2s-alert--flat l2s-alert--default',
      message: "<p>You added: </p><p>Sainsbury's</p><p>Ends in " + fourLastDigit + "</p>",
      buttons: [
        {
          text: 'Return to your cards',
          cssClass: 'main-button no-transform ',
          handler: data => {
            this.addCardDataService.gotoCardDetailAndReload(this.addCardForm.value.cardID, '');
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

  _get4LastDigitsCardNumber(cardId) {
    if (!cardId) {
      return null;
    }
    return cardId.substr(cardId.length - 4);
  }

  submitToAddCardSainsBurys() {
    if (this.cardNumberOld !== this.addCardForm.value.cardID) {
      this.detectChangeCard();
      return;
    }

    let bodyPost = {
      "cardID": this.addCardForm.value.cardID,
      "serialNumber": this.addCardForm.value.serialNumber
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
              let fourLastDigit = this._get4LastDigitsCardNumber(this.addCardForm.value.cardID);
              this.showAlert(fourLastDigit);
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

  gotoYourCard() {
    this.navCtrl.setRoot('AddCardNumberPage');
  }
}
