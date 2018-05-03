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
import { AppConfig as app } from "../../../../framework/appConfig.ts";
import { YourCardDetailsSharingDataService } from "../../cardDetails/yourCardDetails/yourCardDetailsSharingData.services";
import $ from 'jquery';
import { AlertController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AddCardNumberService } from './addCardNumber.service';

@IonicPage()
@Component({
  selector: 'page-addCardNumber',
  templateUrl: 'addCardNumber.html',
  providers: [
    CardIO,
    AddCardDataService,
    AddCardNumberService,
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
    private addCardNumberService: AddCardNumberService,
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
    // this.navCtrl.push('AddCreditDebitCardPage');
    this.checkAuthorization();
  }
  checkAuthorization() {
    this.showCamera();
    // this.diagnostic.isCameraAuthorized().then((authorized) => {
    //   if (!authorized) {
    //     this.diagnostic.requestCameraAuthorization().then((status) => {
    //       switch (status) {
    //         case this.diagnostic.permissionStatus.GRANTED:
    //         case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE: {
    //           this.showCamera();
    //           break;
    //         }
    //         default: {
    //         }
    //       }
    //     }).catch((error) => this.onError(error));
    //   } else {
    //     this.showCamera();
    //   }

    // }).catch((error) => this.onError(error));
  }

  showCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    const processData = (imageData) => {

      var the_file = new Blob([window.atob(imageData)], { type: 'image/png'});
      var fd = new FormData();
      fd.append('cardImage', the_file, 'card.png');
      this.addCardNumberService.submitCardImage(fd)
        .subscribe(data => {
          console.log(data);
        }, err => console.error(err)
      );
    };

    const base64Data = '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';
    processData(base64Data);

    // this.camera.getPicture(options).then(processData, (err) => { 
    //   // Handle error
    // });

  }




}
