import { RegisterDataService } from './../registerData.service';
import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, AlertController, Keyboard, NavController, TextInput } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { checkMatchWith } from '../../../../framework/validations/validator-emailMatch.directive';
import { Utils } from "../../../../framework/services/utilities/utilities";
import { RegisterSharingDataService } from "../registerSharingData.service";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { emailValidator } from "../../../../framework/validations/validator-email.directive";
import { passwordValidator } from "../../../../framework/validations/validator-password.directive";
import { minlengthFieldValidator } from "../../../../framework/validations/validator-minlengthField.directive";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import $ from 'jquery';
import {maxlengthFieldValidator} from "../../../../framework/validations/validator-maxlengthField.directive";
import { AppConfig as app } from '../../../../framework/appConfig';

@IonicPage()
@Component({
  selector: 'page-registerStep2',
  templateUrl: 'registerStep2.html',
  providers: [
    RegisterDataService
  ]
})

export class RegisterStep2Page {
  passwordValidationRules: any = {};
  inputType: string = 'password';
  visiblePassword: boolean = false;
  marketingOptOut: boolean = true;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public routeManager: RouteManagerService,
    public keyboard: Keyboard,
    public navCtrl: NavController,
    private registerDataService: RegisterDataService
  ) {
    this.buildForm();
    $(document).ready(() => {
      $('input').keypress((e) => {
        var code = (e.keyCode ? e.keyCode : e.which);
        if ((code == 13) || (code == 10)) {
          $(this).blur();
          this.keyboard.close();
          return false;
        }
      });
    });
  }

  registerUserForm: FormGroup;
  formErrors = {
    'emailAddress': '',
    'confirmEmailAddress': '',
    'password': ''
  };

  updateSuccessFullMSG= '';
  account_login_details = app.Configuration.ContentMessage.account_login_details;
  marketing_opt_out = app.Configuration.ContentMessage.marketing_opt_out;
  please_enter_your_email_and_password_below_which_will_be_used_to_login_to_your_account_in_the_future =
    app.Configuration.ContentMessage.please_enter_your_email_and_password_below_which_will_be_used_to_login_to_your_account_in_the_future;

  ionViewWillEnter() {
    this.getContentSuccessfull();
  }
  public buildForm() {
    this.registerUserForm = this.formBuilder.group({
      'emailAddress': ['', [
        requireValidator('E-mail address'),
        minlengthFieldValidator(6, 'Email'),
        maxlengthFieldValidator(81, 'Email'),
        emailValidator()
      ]],
      'confirmEmailAddress': ['', [
        requireValidator('Email'),
        minlengthFieldValidator(6, 'Email'),
        maxlengthFieldValidator(81, 'Email'),
        emailValidator()
      ]],
      'password': ['', [
        requireValidator('Password'),
        passwordValidator()
      ]],
      'marketingOptOut': ['']
    },
      {
        validator: {
          validators: checkMatchWith('emailAddress', 'confirmEmailAddress', 'Email', 'confirmation email'),
          updateOn: 'blur'
        }
      });

    this.registerUserForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });

    RegisterSharingDataService.getInstance().state$.subscribe(
      (res) => {
        if (Utils.isNotNull(res.step2Model)) {
          this.registerUserForm.setValue(res.step2Model);
          this.marketingOptOut = res.step2Model.marketingOptOut;
        }
      }
    );
  }

  errorMessage(path: string) {
    const control = this.registerUserForm.get(path);
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

        if (control.hasError('notEquivalent')) {
          return control.getError('notEquivalent')
        }

        if (control.hasError('passwordInvalid')) {
          return control.getError('passwordInvalid')
        }
      }
    }
  }


    public getContentSuccessfull() {
        LoadingIndicatorService.getInstance().showLoadingIndicator();
        const observer = {
            next: (res) => {
                if (!res.ok) {
                    return;
                }
                let body = res.response;
                this.updateSuccessFullMSG = body.message;
            },
            error: (error) => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            },
            complete: () => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            }
        };
        this.registerDataService
            .getContentFromRetreiveContent('email-already-in-use')
            .subscribe(observer);
    }


  public showPassword() {
    this.visiblePassword = !this.visiblePassword;
    if (this.visiblePassword) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

  public showAlertPasswordInfo() {
    if (!this.passwordValidationRules.message) {
      let passwordPolicy = localStorage.getItem('password-policy');
      if (passwordPolicy) {
        let policy = JSON.parse(passwordPolicy);
        this.passwordValidationRules = {
          'message': policy.passwordPolicyFriendlyMessage
        };
      }
    }

    let alert = this.alertCtrl.create({
      title: app.Configuration.RegisterStep2Page.AlertPasswordTitle,
      message: this.passwordValidationRules.message,
      cssClass: "l2s-alert--default l2s-alert--centered l2s-password-alert",
      buttons: ['OK']
    });
    alert.present();
  }

  public submitRegisterData() {
    if (this.registerUserForm.valid) {
      this.registerUserForm.value.marketingOptOut = this.marketingOptOut;
      RegisterSharingDataService.getInstance().saveStep2Screen(this.registerUserForm.value);
      let submitEmail: any = {
        emailAddress: this.registerUserForm.value.emailAddress
      };

      LoadingIndicatorService.getInstance().showLoadingIndicator();
      this.registerDataService
        .validateEmailAddress(submitEmail)
        .subscribe(res => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          if (res.status === 200) {
            if (res.response && res.response.validEmailAddress === true) {
              this.navCtrl.push('RegisterStep3Page');
            } else {
              ToastMessageService.getInstance().showToastMessage( this.updateSuccessFullMSG);
            }
          } else if (res.status > 4) {
            try {
              let errors = res.json().errors;

              if (errors.length > 0) {
                let emailErrorMsg = "";
                for (let error of errors) {
                  emailErrorMsg += error.message + "<br>";
                }

                let emailErrorTitle = "Email Invalid:";
                let alert = this.alertCtrl.create({
                  title: emailErrorTitle,
                  message: emailErrorMsg,
                  buttons: ['OK']
                });

                alert.present();
              }
            } catch(e) {}
          }
        },
        error => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        });
    }
  }
}
