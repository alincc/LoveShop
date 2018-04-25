import {Component, ViewChildren, QueryList} from '@angular/core';
import {NavController, IonicPage, TextInput} from 'ionic-angular';
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {AddMyCardService} from './addMyCard.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {requireValidator} from "../../../framework/validations/validator-required.directive";
import {AuththenticationGuardService} from "../../../framework/login/authenticationGuard.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";
import {PinCodeService} from "../../../framework/services/pinCodeService/pinCode.service";
import {minlengthFieldValidator} from "../../../framework/validations/validator-minlengthField.directive";
import {emailValidator} from "../../../framework/validations/validator-email.directive";
import {NavService} from "../../../shared/nav.service";
import {maxlengthFieldValidator} from "../../../framework/validations/validator-maxlengthField.directive";
import { AppConfig as app } from "../../../framework/appConfig";
@IonicPage()
@Component({
  selector: 'page-addMyCard',
  templateUrl: 'addMyCard.html',
  providers: [
    AddMyCardService
  ]
})
export class AddMyCardPage {
  model: any = {};
  account_management_to_add_card_register = app.Configuration.ContentMessage.account_management_to_add_card_register;
  account_management_register_addcard = app.Configuration.ContentMessage.account_management_register_addcard;
  account_management_already_have_account = app.Configuration.ContentMessage.account_management_already_have_account;
  ForgotPassword_en_properties = app.Configuration.ContentMessage.ForgotPassword_en_properties;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(private formBuilder: FormBuilder,
              private authService: AuththenticationGuardService,
              public routeManager: RouteManagerService,
              private addMyCardService: AddMyCardService,
              public navCtrl: NavController,
              private navSvc: NavService) {

    this.model = {
      emailAddress: "",
      password: ""
    };
    this.buildForm();
  }


  doLoginToAddCard() {
    if (this.userLoginForm.valid) {
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          if (!res.ok) {
            return;
          }
          let body = res.response;

          let authInfo = {
            token: body.accessToken,
            accessTokenExpiry: body.accessTokenExpiry,
            emailAddress: this.userLoginForm.value.emailAddress
          };
          this.authService.authenticated(authInfo);

          if (PinCodeService.getInstance()
              .needSetupPinCode(this.userLoginForm.value.emailAddress) === true) {
            this.navSvc.getRootNav().setRoot('SetupPINPage', {
              nextPage: 'TouchIDSettingFirstTimePage',
              finalPage: 'AddCardNumberPage'
            });
          } else {
            this.navSvc.getRootNav().setRoot('AddCardNumberPage');
          }
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        },
        complete: () => {

          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.addMyCardService
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
      'emailAddress': [this.model.emailAddress, [
        requireValidator('emailAddress'),
        minlengthFieldValidator(6, 'Email'),
          maxlengthFieldValidator(81, 'Email'),
        emailValidator()
      ]],
      'password': [this.model.password, [
        requireValidator('password'),
      ]]
    }, {
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
