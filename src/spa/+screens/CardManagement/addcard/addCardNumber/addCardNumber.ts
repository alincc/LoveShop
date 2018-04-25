import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CardIO } from '@ionic-native/card-io';
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { AddCardSharingDataService } from "../addCardSharing.services";
import { AddCardDataService } from "../addCardData.service";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { TabsPage } from "../../../Others/tabs/tabs";
import { maxlengthFieldValidator } from "../../../../framework/validations/validator-maxlengthField.directive";
import { Observable } from 'rxjs/Observable';
import { AppConfig as app } from "../../../../framework/appConfig";
import { YourCardDetailsSharingDataService } from "../../cardDetails/yourCardDetails/yourCardDetailsSharingData.services";
import $ from 'jquery';
import { AlertController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-addCardNumber',
  templateUrl: 'addCardNumber.html',
  providers: [
    CardIO,
    AddCardDataService,
    Diagnostic
  ]
})

export class AddCardNumberPage {
  onError(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;
  constructor(public routeManager: RouteManagerService,
    private cardIO: CardIO,
    public formBuilder: FormBuilder,
    private cardDataService: AddCardDataService,
    private navCtrl: NavController,
    private navParams: NavParams,
    public alertCtrl: AlertController,
    private diagnostic: Diagnostic,
    private camera: Camera) {
    YourCardDetailsSharingDataService.getInstance().IsOpenedAddCardScreen = true;

    this.buildForm();
  }

  addCardForm: FormGroup;
  formErrors = {
    'cardID': ''
  };
  enter_all_digits;

  public buildForm() {
    this.addCardForm = this.formBuilder.group({
      'cardID': ['', [
        requireValidator('cardID'),
        maxlengthFieldValidator(19, 'Card or e-code number')
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

  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    this.getContentMSG();
  }

  ionViewDidEnter() {
    this.buildForm();
  }


  public getContentMSG() {
    const observer = {
      next: (res) => {
        if (Utils.isNotNull(res[0]) && Utils.isNotNull(res[0].response) && Utils.isNotNull(res[0].response.message)) {
          app.Configuration.ContentMessage.enter_all_digits = res[0].response.message;
          this.enter_all_digits = app.Configuration.ContentMessage.enter_all_digits;
        }

        let msg_code =
          [
            'must_read_ts_cs',
            'account_management_confirm_user_of_card',
            'account_management_confirm_user',
            'account_management_new_ecode',
            'account_management_card_added_to_wallet',
          ];

        for (let i = 1; i < msg_code.length; i++) {
          if (Utils.isNotNull(res[i]) && Utils.isNotNull(res[i].response) && Utils.isNotNull(res[i].response.message)) {
            let mg_item_code = msg_code[i];
            app.Configuration.ContentMessage[mg_item_code] = res[i].response.message;
          }
        }

      },
      error: (error) => {
      },
      complete: () => {
      }
    };
    Observable.combineLatest(
      this.cardDataService.getHelp("enter-all-digits"),
      this.cardDataService.getHelp("must-read-ts-cs"),
      this.cardDataService.getHelp("account-management.confirm-user-of-card"),
      this.cardDataService.getHelp("account-management.confirm-user"),
      this.cardDataService.getHelp("account-management.new-ecode"),
      this.cardDataService.getHelp("account-management.card-added-to-wallet"),
    ).subscribe(observer)
  }

  checkCardType() {
    if (this.addCardForm.valid) {
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          if (!res.ok) {
            return;
          }
          let body = res.response;
          if (Utils.isNotNull(body) && Utils.isNotNull(body.cardType)) {
            this.cardDataService.navigationPage(body, this.addCardForm.value.cardID);
          }
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        },
        complete: () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.cardDataService
        .checkCardTypeToAddCard(this.addCardForm.value)
        .subscribe(observer);
    }
  }

  gotoHomePage() {
    YourCardDetailsSharingDataService.getInstance().IsOpenedAddCardScreen = false;
    let callFrom = this.navParams.get('callFrom');
    if ((callFrom && callFrom === 'Register') || this.isUserLogedIn()) {
      YourCardDetailsSharingDataService.getInstance().CallFromRegister = true;
      let needBackToYourCard = YourCardDetailsSharingDataService.getInstance().needBackToYourCard;
      if (needBackToYourCard === true) {
        YourCardDetailsSharingDataService.getInstance().needBackToYourCard = false;
        YourCardDetailsSharingDataService.getInstance().goToFromAddCard = true;
        this.navCtrl.pop();
      } else {
        this.navCtrl.setRoot('TabsPage');
      }
    } else {
      YourCardDetailsSharingDataService.getInstance().CallFromRegister = false;
      this.navCtrl.pop();
    }
  }

  isUserLogedIn() {
    return !!localStorage && !!localStorage.getItem('token');
  }

  openCamera() {
  this.checkAuthorization;
  }
  checkAuthorization() {
    this.diagnostic.isCameraAuthorized().then((authorized) => {
      if (!authorized) {
        this.diagnostic.requestCameraAuthorization().then((status) => {
          switch (status) {
            case this.diagnostic.permissionStatus.GRANTED:
            case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE: {
              this.showCamera();
              break;
            }
          default: {
          }
          }
        }).catch((error) => this.onError(error));
      } else {
        this.showCamera();
      }

    }).catch((error) => this.onError(error));
  }
  showCamera() { 
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }
  

}
