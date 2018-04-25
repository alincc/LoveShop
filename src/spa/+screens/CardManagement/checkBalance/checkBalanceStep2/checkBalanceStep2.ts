import { Component, ViewChildren, QueryList } from '@angular/core';
import {IonicPage, AlertController, NavController, NavParams, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {requireValidator} from "../../../../framework/validations/validator-required.directive";
import {CardBalanceDataService} from "../cardBalanceData.service";
import {CardBalanceSharingDataService} from "../cardBalanceSharingData.service";
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {ToastMessageService} from "../../../../framework/services/toastMessageService/toastMessage.service";
import {Utils} from "../../../../framework/services/utilities/utilities";
import {ChangeBalanceStep2Service, RetrieveBalanceRequestBody} from './checkBalanceStep2.service';
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {numericValidatorCSC} from "../../../../framework/validations/validator-numeric.directive";
import {minlengthValidatorCSC} from "../../../../framework/validations/validator-minlength.directive";
import {
  maxlengthFieldValidator,
  maxlengthFieldValidatorCSC
} from "../../../../framework/validations/validator-maxlengthField.directive";
import {AppConfig as app} from "../../../../framework/appConfig";
@IonicPage()
@Component({
  selector: 'page-checkBalanceStep2',
  templateUrl: 'checkBalanceStep2.html',
  providers: [
    CardBalanceDataService,
    CardBalanceSharingDataService,
    ChangeBalanceStep2Service
  ]
})

export class CheckBalanceStep2Page {

  cardNumberAtStep1: any = "";
  messageContent: any = "";
  code = 'resend-link-now';
  cardNumberOld;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;    

  constructor(private formBuilder: FormBuilder,
              public routeManager: RouteManagerService,
              private cardBalanceDataService: CardBalanceDataService,
              private changeBalanceStep2Service: ChangeBalanceStep2Service,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.buildForm();
  }

  checkBalanceForm: FormGroup;
  formErrors = {
    'cardNumber': '',
    'securityCode': ''
  };

  buildForm() {
    this.checkBalanceForm = this.formBuilder.group({
      'cardNumber': [this.cardNumberAtStep1, [
        requireValidator('cardNumber'),
        maxlengthFieldValidator(19, 'Card or e-code number'),
      ]],
      'securityCode': ['', [
        requireValidator('csc'),
        minlengthValidatorCSC(3, 'CSC'),
        maxlengthFieldValidatorCSC(3, 'CSC'),
        numericValidatorCSC(),
      ]]

    }, {
      validator: {
        updateOn: 'blur'
      }
    });


    this.checkBalanceForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });

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
    this.changeBalanceStep2Service
      .getHelpCSC(code)
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
    if (this.navParams.get('cardNumber')) {
      this.cardNumberOld = this.navParams.get('cardNumber');
      this.checkBalanceForm.patchValue({'cardNumber': this.cardNumberOld + ''});
    }
  }

  detectChangeCard() {
    if (this.checkBalanceForm.valid) {
      let bodyPost = {
        "cardID": this.checkBalanceForm.value.cardNumber
      }
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          if (!res.ok) {
            return;
          }
          let body = res.response;
          this.checkNextStepNavigate(body)

        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.changeBalanceStep2Service
        .retrieveCardType(bodyPost)
        .subscribe(observer);
    }
  }

  checkNextStepNavigate(cardInformation) {
    if (Utils.isNotNull(cardInformation) && cardInformation.cardType === 'FLEXECODE_2.0') {
      this.navCtrl.setRoot('CheckBalanceStep1Page', {cardNumber: this.checkBalanceForm.value.cardNumber});
    } else {
      const body: RetrieveBalanceRequestBody = {
        cardID: this.checkBalanceForm.value.cardNumber,
        csc: this.checkBalanceForm.value.securityCode
      };
      this.getBalanceData(body);
    }
  }

  submitToCheckCardBalance() {
    if (this.cardNumberOld !== this.checkBalanceForm.value.cardNumber) {
      this.detectChangeCard();
      return;
    }
    if (this.checkBalanceForm.valid) {
      const body: RetrieveBalanceRequestBody = {
        cardID: this.checkBalanceForm.value.cardNumber,
        csc: this.checkBalanceForm.value.securityCode
      };
      this.getBalanceData(body);
    }
  }


  getBalanceData(cardInfor) {
    if (this.checkBalanceForm.valid) {
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          if (!res.ok) {
            return;
          }
          let balanceValue = res.response;
          this.navCtrl
            .setRoot('CheckBalanceStep3Page', {'balanceValue': balanceValue, 'cardNumber': this.checkBalanceForm.value.cardNumber});
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.changeBalanceStep2Service
        .getBalanceCard(cardInfor)
        .subscribe(observer);
    }
  }

  errorMessage(path: string) {
    const control = this.checkBalanceForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'cardNumber' || path === 'securityCode') {
      if (control.hasError('required')) {
        return control.getError('required');
      }else {
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


  gotoStep1() {
    this.navCtrl.setRoot('CheckBalanceStep1Page', {'cardNumber': this.checkBalanceForm.value.cardNumber});
  }

}
