import { Component, ViewChildren, QueryList } from '@angular/core';
import {IonicPage, AlertController, NavController, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {requireValidator} from '../../../framework/validations/validator-required.directive';
import {ChangePasswordService} from "./changePassword.service";
import {checkMatchWith} from '../../../framework/validations/validator-passwordMatch.directive';
import {passwordValidator} from "../../../framework/validations/validator-password.directive";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {ToastMessageService} from "../../../framework/services/toastMessageService/toastMessage.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";
import {LogoutDataService} from "../../../framework/login/logoutData.service";
import {AuththenticationGuardService} from "../../../framework/login/authenticationGuard.service";
import {AppConfig as app} from "../../../framework/appConfig";
import $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-changePassword',
  templateUrl: 'changePassword.html',
  providers: [
    ChangePasswordService,
    LogoutDataService,
    AuththenticationGuardService
  ]
})
export class ChangePasswordPage {
  model: any = {};
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(private formBuilder: FormBuilder,
              public routeManager: RouteManagerService,
              public alertCtrl: AlertController,
              private changePasswordService: ChangePasswordService,
              public navCtrl: NavController) {
    this.model = {
      passwordPolicy: ''
    }
    this.buildForm();
    this.getMessageValidate();
    this.isSendingRequest = false;
  }

  changePasswordForm: FormGroup;
  formErrors = {
    'oldPassword': '',
    'newPassword': '',
    'confirmNewPassword': ''
  };

  updateSuccessfullMSG = '';
  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    this.getContentSuccessfull();
  }

  buildForm() {
    this.changePasswordForm = this.formBuilder.group({
        'oldPassword': ['', [
          requireValidator('Password'),
        ]],
        'newPassword': ['', [
          requireValidator('Password'),
          passwordValidator()
        ]],
        'confirmNewPassword': ['', [
          requireValidator('Password'),
        ]]
      },{
        validator: {
          validators:  checkMatchWith('newPassword', 'confirmNewPassword'),
          updateOn: 'blur'
        }
      });

    this.changePasswordForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });

  }

  getMessageValidate() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        if (res.response !== null) {
          this.model.passwordPolicy = res.response.passwordPolicyFriendlyMessage;
        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.changePasswordService
      .getPasswordPolicy()
      .subscribe(observer);
  }

  updatePassword() {
    if (this.changePasswordForm.valid) {
      this.isSendingRequest = true;
      let passwordInfor = {
        "currentPassword": this.changePasswordForm.value.oldPassword,
        "newPassword": this.changePasswordForm.value.newPassword
      };
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          if (!res.ok) {
            return;
          }
          ToastMessageService.getInstance().showToastMessage(this.updateSuccessfullMSG);
          this.navCtrl.pop();
        },
        error: (error) => {
          this.isSendingRequest = false;
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.changePasswordService
        .changePassword(passwordInfor)
        .subscribe(observer);
    }
  }

  isSendingRequest: boolean = false;
  disableUpdateButton() {
    return !this.changePasswordForm.valid || this.isSendingRequest;
  }

    public getContentSuccessfull() {
        LoadingIndicatorService.getInstance().showLoadingIndicator();
        const observer = {
            next: (res) => {
                if (!res.ok) {
                    return;
                }
                let body = res.response;
                this.updateSuccessfullMSG = body.message;
            },
            error: (error) => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            },
            complete: () => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            }
        };
        this.changePasswordService
            .getContentFromRetreiveContent('password-updated')
            .subscribe(observer);
    }

  errorMessage(path: string) {
    const control = this.changePasswordForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'oldPassword' || path === 'newPassword' || path === 'confirmNewPassword') {
      if (control.hasError('required')) {
        return control.getError('required');
      } else {
        if (control.hasError('passwordInvalid')) {
          return control.getError('passwordInvalid')
        }

        if (control.hasError('notEquivalent')) {
          return control.getError('notEquivalent')
        }
      }
    }
  }

}
