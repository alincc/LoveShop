import {Component, QueryList, ViewChildren} from '@angular/core';
import {IonicPage, NavController, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {emailValidator} from '../../../framework/validations/validator-email.directive';
import {requireValidator} from '../../../framework/validations/validator-required.directive';
import {LoadingIndicatorService} from '../../../framework/services/loadingIndicatorService/loadingIndicator.service';
import {ForgotPasswordService} from './forgotPassword.service';
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";
import {minlengthFieldValidator} from "../../../framework/validations/validator-minlengthField.directive";
import {maxlengthFieldValidator} from "../../../framework/validations/validator-maxlengthField.directive";
import {Utils} from "../../../framework/services/utilities/utilities";
import {Observable} from 'rxjs/Observable';
import {AppConfig as app} from "../../../framework/appConfig";
@IonicPage()
@Component({
    selector: 'page-forgotPassword',
    templateUrl: 'forgotPassword.html',
    providers: [
        ForgotPasswordService,
    ]
})
export class ForgotPasswordPage {
    model: any = {};
    @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

    constructor(private formBuilder: FormBuilder,
                public routerManager: RouteManagerService,
                public navCtrl: NavController,
                private forgotPasswordService: ForgotPasswordService) {
        this.model = {
            emailAddress: "",
        };

        this.buildForm(this.model);
    }

    forgotPassword: FormGroup;
    formErrors = {
        'emailAddress': '',
    };
    forgot_password_enter_email_address_below = "";

    ionViewWillEnter() {
      this.getContentMSG();
    }

    public buildForm(user) {
        this.forgotPassword = this.formBuilder.group({
            'emailAddress': [user.emailAddress, [
                requireValidator('E-mail address'),
                minlengthFieldValidator(6, 'Email'),
                maxlengthFieldValidator(81, 'Email'),
                emailValidator()
            ]],
        }, {
            validator: {
                updateOn: 'blur'
            }
        });

        this.forgotPassword.statusChanges.subscribe(() => {
            if (this.textInputs) {
                this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
            }
        });

    }


    submitForgotPassword() {
        if (this.forgotPassword.valid) {
            LoadingIndicatorService.getInstance().showLoadingIndicator();
            const observer = {
                next: (res) => {
                    if (!res.ok) {
                        return;
                    }
                    this.navCtrl.push("ForgotPasswordSuccess");
                },
                error: (error) => {
                    LoadingIndicatorService.getInstance().hideLoadingIndicator();
                },
                complete: () => {
                    LoadingIndicatorService.getInstance().hideLoadingIndicator();
                }
            };
            this.forgotPasswordService
                .forgotPassword(this.forgotPassword.value)
                .subscribe(observer);
        }
    }


  public getContentMSG() {
    const observer = {
      next: (res) => {
        if (Utils.isNotNull(res[0]) && Utils.isNotNull(res[0].response) && Utils.isNotNull(res[0].response.message)) {
          app.Configuration.ContentMessage.forgot_password_success_email_sent = res[0].response.message;
        }

        if (Utils.isNotNull(res[1]) && Utils.isNotNull(res[1].response) && Utils.isNotNull(res[1].response.message)) {
          app.Configuration.ContentMessage.forgot_password_enter_email_address_below = res[1].response.message;
          this.forgot_password_enter_email_address_below = app.Configuration.ContentMessage.forgot_password_enter_email_address_below;
        }

      },
      error: (error) => {
      },
      complete: () => {
      }
    };
    Observable.combineLatest(
      this.forgotPasswordService.getContentFromRetreiveContent("forgot-password.success.email-sent"),
      this.forgotPasswordService.getContentFromRetreiveContent("forgot-password-enter-email-address-below"),
    ).subscribe(observer)
  }


  errorMessage(path: string) {
        const control = this.forgotPassword.get(path);
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
