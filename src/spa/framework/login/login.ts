import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginDataService } from './loginData.service';
import { RouteManagerService } from './../../framework/services/routeManager/routeManager.service';
import { AuththenticationGuardService } from './authenticationGuard.service';
import { Component, ViewChildren, QueryList } from '@angular/core';
import {
  IonicPage,
  ViewController,
  NavController,
  TextInput
} from 'ionic-angular';
import { requireValidator } from "../validations/validator-required.directive";
import { LoadingIndicatorService } from "../services/loadingIndicatorService/loadingIndicator.service";
import { PinCodeService } from "../services/pinCodeService/pinCode.service";
import { Subscription } from "rxjs/Subscription";
import {minlengthFieldValidator} from "../validations/validator-minlengthField.directive";
import {emailValidator} from "../validations/validator-email.directive";
import $ from 'jquery';
import {maxlengthFieldValidator} from "../validations/validator-maxlengthField.directive";
import {AppConfig as app} from "../appConfig";
import {YourCardDetailsSharingDataService} from "../../+screens/CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";
import {ContentMessageService} from "../../+screens/CardManagement/cardDetails/yourCardDetails/contentMessage.service";
import {YourCardDetailsApiGateway} from "../../+screens/CardManagement/cardDetails/yourCardDetails/yourCardDetailsApiGateway";
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    LoginDataService,
    ContentMessageService,
    YourCardDetailsApiGateway
  ]
})

export class LoginPage {

  model: any = {};

  private _loginSUb: Subscription;
  focusInInput = false;
  ForgotPassword_en_properties = app.Configuration.ContentMessage.ForgotPassword_en_properties;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuththenticationGuardService,
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public routeManager: RouteManagerService,
    public loginDataService: LoginDataService,
    public contentMessageService: ContentMessageService

) {
    this.model = {
      emailAddress: '',
      password: '',
    };
    this.buildForm(this.model);
  }


  login() {
    if (this.manageUserForm.valid) {
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          if (!res.ok) {
            return;
          }
          let body = res.response;

          let authInfo = {
            token: body.accessToken,
            accessTokenExpiry: body.accessTokenExpiry,
            emailAddress: this.manageUserForm.value.emailAddress
          };
          this.authService.authenticated(authInfo);
          $('.app-root').removeClass('not-show-tab');

          YourCardDetailsSharingDataService.getInstance().goToFromLogin = true;
          if (PinCodeService.getInstance()
              .needSetupPinCode(
                this.manageUserForm.value.emailAddress
              ) === true
          ) {
            this.navCtrl.setRoot('SetupPINPage', { nextPage: 'TouchIDSettingFirstTimePage' });
          } else {
            this.navCtrl.setRoot('TabsPage', {showVerifyPIN: false});
          }
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.loginDataService
        .login(this.manageUserForm.value)
        .subscribe(observer);
    }
  }


  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('');
    this.contentMessageService.getContentMessage();
  }

  ionViewDidLeave() {
    this._unsubscribe();
  }

  manageUserForm: FormGroup;
  formErrors = {
    'emailAddress': '',
    'password': '',
  };
  buildForm(user) {
    this.manageUserForm = this.formBuilder.group({
      'emailAddress': [user.emailAddress, [
        requireValidator('emailAddress'),
        minlengthFieldValidator(6, 'Email'),
        maxlengthFieldValidator(81, 'Email'),
        emailValidator()
      ]],
      'password': [user.password, [
        requireValidator('password')
      ]]
    }, {
      validator: {updateOn: 'blur'}
    });

      this.manageUserForm.statusChanges.subscribe(() => {
          if (this.textInputs) {
              this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
          }
      });

  }

  errorMessage(path: string) {
    const control = this.manageUserForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'emailAddress' || path === 'confirmEmailAddress' || path === 'password') {
      if (control.hasError('required')) {
        return control.getError('required');
      } else {

        if (control.hasError('minlengthField')) {
          return control.getError('minlengthField')
        }

        if (control.hasError('maxLengthField')) {
          return control.getError('maxLengthField')
        }

        if (control.hasError('email')) {
          return control.getError('email')
        }
      }
    }
  }

  private _unsubscribe(){
    if(this._loginSUb){
      this._loginSUb.unsubscribe();
    }
  }

  focusIntoInput() {
    this.focusInInput = true;
  }

  focusOutInput() {
    this.focusInInput = false;
  }

}
