import { Component, ViewChildren, QueryList } from '@angular/core';
import { AlertController, IonicPage, NavParams, NavController, TextInput } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { AddCardDataService } from "../addCardData.service";
import { LoadingIndicatorService } from '../../../../framework/services/loadingIndicatorService/loadingIndicator.service';
import { Utils } from "../../../../framework/services/utilities/utilities";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { minlengthValidatorCSC } from "../../../../framework/validations/validator-minlength.directive";
import { numericValidatorCSC } from "../../../../framework/validations/validator-numeric.directive";
import {
  maxlengthFieldValidator,
  maxlengthFieldValidatorCSC
} from "../../../../framework/validations/validator-maxlengthField.directive";
import { AddCardSharingDataService } from '../addCardSharing.services';
import { AppConfig as app } from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-addFlexCash',
  templateUrl: 'addFlexCash.html',
  providers: [
    AddCardDataService
  ]
})

export class AddFlexCashPage {
  cardNumberOld;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(public alertCtrl: AlertController,
    public routeManager: RouteManagerService,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    public navCtrl: NavController,
    private addCardDataService: AddCardDataService) {
    this.buildForm();
  }

  addCardForm: FormGroup;
  formErrors = {
    'cardID': '',
    'csc': '',
    'nickname': ''
  };

  enter_all_digits = app.Configuration.ContentMessage.enter_all_digits;

  public buildForm() {
    this.addCardForm = this.formBuilder.group({
      'cardID': ['', [
        requireValidator('card ID'),
        maxlengthFieldValidator(19, 'Card or e-code number')
      ]],
      'csc': ['', [
        requireValidator('csc'),
        minlengthValidatorCSC(3, 'CSC'),
        maxlengthFieldValidatorCSC(3, 'CSC'),
        numericValidatorCSC(),
      ]],
      'nickname': ['']
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

    if (path === 'cardID' || path === 'csc') {
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

  submitToAddCardFlexCash() {
    let bodyPost = {
      "cardID": this.addCardForm.value.cardID,
      "csc": this.addCardForm.value.csc,
      "nickname": this.addCardForm.value.nickname
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
          if (body.activationRequired === true) {
            this.navCtrl.push('AddPinToCardPage', { 'cardInfo': bodyPost, responseCard: body });
          } else {
            let body = res.response;
            if (Utils.isNotNull(body) && Utils.isNotNull(body.cardAdded)) {
              if (body.cardAdded) {
                this.showAlert(this.addCardForm.value.cardID, this.addCardForm.value.nickname);
              } else {
                ToastMessageService.getInstance().showToastMessage(app.Configuration.HttpService.DEFAULT_ERROR_MSG);
              }
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

  _convertCardId(cardId) {
    if (!cardId) {
      return null;
    }
    let newCard = (cardId.substr(0, 4) + '-') +
      (cardId.substr(4, 4) + '-') +
      (cardId.substr(8, 4) + '-') +
      (cardId.substr(12, 4) + '-') +
      (cardId.substr(16, 3));
    return newCard;
  }

  gotoYourCard() {
    this.navCtrl.setRoot('AddCardNumberPage');
  }
}
