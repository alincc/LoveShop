import { Component, ViewChildren, QueryList } from '@angular/core';
import {IonicPage, NavController, TextInput} from 'ionic-angular';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {requireValidator} from '../../../framework/validations/validator-required.directive';
import {ChangePINService} from "./changePIN.service";
import {LoadingIndicatorService} from '../../../framework/services/loadingIndicatorService/loadingIndicator.service';
import {PinCodeService} from '../../../framework/services/pinCodeService/pinCode.service';
import {ToastMessageService} from '../../../framework/services/toastMessageService/toastMessage.service';
import {Utils} from '../../../framework/services/utilities/utilities';
import {AuththenticationGuardService} from "../../../framework/login/authenticationGuard.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";
import {minlengthFieldValidator} from "../../../framework/validations/validator-minlengthField.directive";
import {emailValidator} from "../../../framework/validations/validator-email.directive";
import $ from 'jquery';
import {maxlengthFieldValidator} from "../../../framework/validations/validator-maxlengthField.directive";
import { AppConfig as app } from "../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-changePIN',
  templateUrl: 'changePIN.html',
  providers: [
    ChangePINService
  ]
})
export class ChangePINPage {
  model: any = {};
  park_api_enter_userid_password_to_change_pin = app.Configuration.ContentMessage.park_api_enter_userid_password_to_change_pin;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;    

  constructor(private formBuilder: FormBuilder,
              private authService: AuththenticationGuardService,
              public routeManager: RouteManagerService,
              public navCtrl: NavController,
              private changePINService: ChangePINService) {
    this.buildForm();
  }
  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
  }

  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }

  public doLogin() {
    if (this.userLoginForm.valid) {
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
            emailAddress: this.userLoginForm.value.emailAddress
          };

          let userOld = window.window.localStorage.getItem('lastLoggedIn');
          let userNew = this.userLoginForm.value.emailAddress;

          if (Utils.isNotNull(userOld) && Utils.isNotNull(userNew)) {
            if (userOld.toLocaleLowerCase().trim() !== userNew.toLocaleLowerCase().trim()) {

              ToastMessageService.getInstance().showToastMessage(app.Configuration.ContentMessage.park_api_user_id_no_match);
            } else {
              this.navCtrl.push('UpdatePINPage');
            }
          }
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.changePINService
        .login(this.userLoginForm.value)
        .subscribe(observer);
    }
  }

  userLoginForm: FormGroup;
  formErrors = {
    'emailAddress': '',
    'password': ''
  };

  buildForm() {
    this.userLoginForm = this.formBuilder.group({
      'emailAddress': ['', [
        requireValidator('emailAddress'),
        minlengthFieldValidator(6, 'Email'),
        maxlengthFieldValidator(81, 'Email'),
        emailValidator()
      ]],
      'password': ['', [
        requireValidator('password'),
      ]]
    },{
      validator: {
        updateOn: 'blur'
      }
    });

    this.userLoginForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });

  }

  errorMessage(path: string) {
    const control = this.userLoginForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'emailAddress' || path === 'password') {
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
}
