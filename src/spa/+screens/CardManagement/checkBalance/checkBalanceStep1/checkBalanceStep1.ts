import { Component, ViewChildren, QueryList } from '@angular/core';
import {IonicPage, NavController, NavParams, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CardIO} from '@ionic-native/card-io';
import {Utils} from "../../../../framework/services/utilities/utilities";
import {requireValidator} from "../../../../framework/validations/validator-required.directive";
import {CardBalanceSharingDataService} from "../cardBalanceSharingData.service";
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {ChangeBalanceStep1Service, RetrieveBalanceRequestBody} from './checkBalanceStep1.service';
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {maxlengthFieldValidator} from "../../../../framework/validations/validator-maxlengthField.directive";
import {AppConfig as app} from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-checkBalanceStep1',
  templateUrl: 'checkBalanceStep1.html',
  providers: [
    CardBalanceSharingDataService,
    ChangeBalanceStep1Service,
    CardIO
  ]
})

export class CheckBalanceStep1Page {

  model: any;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(private formBuilder: FormBuilder,
              public routeManager: RouteManagerService,
              private cardIO: CardIO,
              public navCtrl: NavController,
              public navParams: NavParams,
              public changeBalanceStep1Service: ChangeBalanceStep1Service) {
    this.buildForm();
  }

  ionViewWillEnter() {
    if (this.navParams.get('cardNumber')) {
      let cardNumberOld = this.navParams.get('cardNumber');
      this.checkBalanceForm.patchValue({'cardNumber': cardNumberOld + ''});
    }
  }

  setCardData(data: any) {
    this.checkBalanceForm.setValue({cardNumber: data.cardNumber});
  }

  scanButton() {
    this.cardIO.canScan()
      .then(
        (res: boolean) => {
          if (res) {
            let options = {
              requireExpiry: true
            };
            return this.cardIO.scan(options);
          }
        }
      )
      .then(res => {
          this.setCardData(res);
        }, err => {
        }
      );
  }


  submitToCheckCardBalance() {
    let cardID = {
      'cardID': this.checkBalanceForm.value.cardNumber
    }
    if (this.checkBalanceForm.valid) {
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          if (!res.ok) {
            return;
          }
          let body = res.response;
          this.checkNextStepNavigate(body);

        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.changeBalanceStep1Service
        .retrieveCardType(cardID)
        .subscribe(observer);
    }
  }

  checkNextStepNavigate(cardInformation) {
    if (Utils.isNotNull(cardInformation) && cardInformation.cardType !== 'FLEXECODE_2.0' && cardInformation.cardType !== 'TESCO' && cardInformation.cardType !== 'SAINSBURYS') {
      this.navCtrl.setRoot('CheckBalanceStep2Page', {cardNumber: this.checkBalanceForm.value.cardNumber});
    } else {
      const data: RetrieveBalanceRequestBody = {
        'cardID': this.checkBalanceForm.value.cardNumber
      };
      this.getBalanceData(data);
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
          this.navCtrl.setRoot('CheckBalanceStep3Page', {
            'balanceValue': balanceValue,
            'cardNumber': this.checkBalanceForm.value.cardNumber
          });
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.changeBalanceStep1Service
        .getBalanceCard(cardInfor)
        .subscribe(observer);
    }
  }

  checkBalanceForm: FormGroup;
  formErrors = {
    'cardNumber': ''
  };

  buildForm() {
    this.checkBalanceForm = this.formBuilder.group({
      'cardNumber': ['', [
        requireValidator('cardNumber'),
        maxlengthFieldValidator(19, 'Card or e-code number'),
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


  errorMessage(path: string) {
    const control = this.checkBalanceForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'cardNumber') {
      if (control.hasError('required')) {
        return control.getError('required');
      }else {
        if (control.hasError('maxLengthField')) {
          return control.getError('maxLengthField')
        }
      }
    }
  }



  gotoWelcome() {
    this.navCtrl.setRoot('WelcomePage');
  }
}
