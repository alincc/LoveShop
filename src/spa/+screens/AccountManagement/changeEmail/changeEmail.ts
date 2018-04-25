import {Component, ViewChildren, QueryList} from '@angular/core';
import {AlertController, IonicPage, NavController, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ChangeEmailService} from './changeEmail.service';
import {minlengthFieldValidator} from "../../../framework/validations/validator-minlengthField.directive";
import {requireValidator} from "../../../framework/validations/validator-required.directive";
import {checkMatchWith} from '../../../framework/validations/validator-emailMatch.directive';
import {emailValidator} from "../../../framework/validations/validator-email.directive";
import {AuthenticationDataSharingService} from "../../../framework/login/authenticationDataSharing.service";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";
import {LogoutDataService} from "../../../framework/login/logoutData.service";
import {AuththenticationGuardService} from "../../../framework/login/authenticationGuard.service";
import {NavService} from "../../../shared/nav.service";
import $ from 'jquery';
import {maxlengthFieldValidator} from "../../../framework/validations/validator-maxlengthField.directive";
import {AppConfig as app} from "../../../framework/appConfig";


@IonicPage()
@Component({
  selector: 'page-changeEmail',
  templateUrl: 'changeEmail.html',
  providers: [
    ChangeEmailService,
    LogoutDataService,
    AuththenticationGuardService
  ]
})
export class ChangeEmailPage {
  model: any = {};
  current_email = app.Configuration.ContentMessage.current_email;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(private formBuilder: FormBuilder,
              public routerManager: RouteManagerService,
              public alertCtrl: AlertController,
              private logoutDataService: LogoutDataService,
              private authService: AuththenticationGuardService,
              public navCtrl: NavController,
              private navSvc: NavService,
              private changeEmailService: ChangeEmailService) {
    this.model = {
      currentEmail: AuthenticationDataSharingService.getInstance().loginEmail
    }
    this.buildForm();
  }

  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
    }
  }

  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }

  changeEmailForm: FormGroup;
  formErrors = {
    'newEmail': '',
    'confirmNewEmail': '',
    'password': ''
  };

  buildForm() {
    this.changeEmailForm = this.formBuilder.group({
        'newEmail': ['', [
          requireValidator('newEmail'),
          minlengthFieldValidator(6, 'Email'),
          maxlengthFieldValidator(81, 'Email'),
          emailValidator()
        ]],
        'confirmNewEmail': ['', [
          requireValidator('confirmNewEmail'),
          maxlengthFieldValidator(81, 'Email'),
        ]],
        'password': ['', [
          requireValidator('password')
        ]]
      },
      {
        validator: {
          validators: checkMatchWith('newEmail', 'confirmNewEmail', 'Email', 'confirmation email'),
          updateOn: 'blur'
        }
      }
    );

    this.changeEmailForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });
  }

  errorMessage(path: string) {
    const control = this.changeEmailForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'newEmail' || path === 'confirmNewEmail' || path === 'password') {
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
      }
    }
  }

  public updateEmailAddress() {

    let emailInformation = {
      "newEmailAddress": this.changeEmailForm.value.newEmail,
      "password": this.changeEmailForm.value.password
    }
    if (this.changeEmailForm.valid) {
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          if (!res.ok) {
            return;
          }
          this.logoutDataService.logout()
            .subscribe(res => {
            });
          this.authService.Logout();


          this.navSvc.getRootNav().setRoot('LoginPage');
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        },
        complete: () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.changeEmailService
        .changeEmail(emailInformation)
        .subscribe(observer);
    }
  }

}
