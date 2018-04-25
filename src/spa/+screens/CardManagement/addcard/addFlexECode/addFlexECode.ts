import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, AlertController, NavParams, NavController, TextInput } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { AddCardSharingDataService } from "../addCardSharing.services";
import { AddCardDataService } from "../addCardData.service";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { minlengthFieldValidator } from "../../../../framework/validations/validator-minlengthField.directive";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { maxlengthFieldValidator } from "../../../../framework/validations/validator-maxlengthField.directive";
import { AppConfig as app } from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-addFlexECode',
  templateUrl: 'addFlexECode.html',
  providers: [
    AddCardDataService
  ]
})

export class AddFlexECodePage {
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
  enter_all_digits = app.Configuration.ContentMessage.enter_all_digits;
  addCardForm: FormGroup;
  formErrors = {
    'cardID': ''
  };

  public buildForm() {
    this.addCardForm = this.formBuilder.group({
      'cardID': ['', [
        requireValidator('cardID'),
        maxlengthFieldValidator(19, 'Card or e-code number')
      ]],
      'nickname': [''],
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
    AddCardSharingDataService.getInstance().resetState();
  }

  errorMessage(path: string) {
    const control = this.addCardForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'cardID') {
      if (control.hasError('required')) {
        return control.getError('required');
      } else {
        if (control.hasError('maxLengthField')) {
          return control.getError('maxLengthField')
        }
      }
    }
  }

  submitToAddCardFlexECode() {
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
            this.navCtrl.push('AddPinToCodePage', { 'cardInfo': this.addCardForm.value, responseCard: body });
          } else {
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
        .addCard(this.addCardForm.value)
        .subscribe(observer);
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
        "cardID": this.addCardForm.value.cardID,
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

  gotoYourCard() {
    this.navCtrl.setRoot('AddCardNumberPage');
  }
}
