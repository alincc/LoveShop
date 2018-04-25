import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterDataService } from './../registerData.service';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { IonicPage, AlertController, NavController, TextInput, Select } from 'ionic-angular';
import { RegisterSharingDataService } from "../registerSharingData.service";
import { DatePipe } from "@angular/common";
import { minlengthValidator } from '../../../../framework/validations/validator-minlength.directive';
import { containsOnlyLeterValidator } from '../../../../framework/validations/validator-containsCharacters.directive';
import { ageValidator } from '../../../../framework/validations/validator-age.directive';
import { requireDropdownListValidator } from '../../../../framework/validations/validator-requiredDropdownList.directive';
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { HttpService } from "../../../../framework/services/httpService/http.service";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { maxlengthFieldValidator } from "../../../../framework/validations/validator-maxlengthField.directive";
import { AppConfig as app } from "../../../../framework/appConfig";
import {Utils} from "../../../../framework/services/utilities/utilities";
import {Observable} from 'rxjs/Observable';
import { requireStandardDropdownListValidator } from "../../../../framework/validations/validator-requiredStandardDropdownList.directive";
const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;

@IonicPage()
@Component({
  selector: 'page-registerStep1',
  templateUrl: 'registerStep1.html',
  providers: [
    RegisterDataService,
    InAppBrowser
  ]
})

export class RegisterStep1Page {

  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;
  @ViewChildren(Select) selectInputs: QueryList<Select>;

  viewModel: any = {};
  model: any = {
    title: null,
    firstName: null,
    lastName: null,
    dob: null
  };
  personal_details = "";
  account_login_details = "";
  please_enter_your_email_and_password_below_which_will_be_used_to_login_to_your_account_in_the_future = "";
  marketing_opt_out = "";
  account_created = "";
  five_digit_pin = "";

  userTitle = [
    {
      "id": 1,
      "text": "Mrs"
    },
    {
      "id": 2,
      "text": "Mr"
    },
    {
      "id": 3,
      "text": "Miss"
    },
    {
      "id": 4,
      "text": "Ms"
    },
    {
      "id": 5,
      "text": "Dr"
    }
  ];

  datemax = ((new Date()).getFullYear()) - 18;
  datemin = ((new Date()).getFullYear()) - 99;
  constructor(
    private formBuilder: FormBuilder,
    public routeManager: RouteManagerService,
    public alertCtrl: AlertController,
    public http: HttpService,
    private iab: InAppBrowser,
    public navCtrl: NavController,
    private registerDataService: RegisterDataService
  ) {

    this.buildForm();
  }

  public submitRegisterData() {
    if (this.registerUserForm.valid) {
      let datePipeEn: DatePipe = new DatePipe('en-GB');
      const data = Object.assign({}, this.registerUserForm.value);

      data.dob = datePipeEn.transform(this.registerUserForm.value.dob, 'dd/MM/yyyy');
      data.termsAgreed = true;

      LoadingIndicatorService.getInstance().showLoadingIndicator();
      this.registerDataService
        .getPasswordValidationRules()
        .subscribe(res => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          if (res.status === 200) {
            // store password policy
            localStorage.setItem('password-policy', JSON.stringify(res.response));

            // redirect to next step
            RegisterSharingDataService.getInstance().saveStep1Screen(data);
            this.navCtrl.push("RegisterStep2Page");
          } else if (res.status > 4) {
            try {
              let err = res.json().errors;
              if (err.length > 0) {
                ToastMessageService.getInstance().showToastMessage(err[0].message);
              }
            } catch (e) {
              ToastMessageService.getInstance().showToastMessage(DEFAULT_ERROR_MSG);
            }
          }
        },
        error => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        });
    }
  }

  registerUserForm: FormGroup;
  formErrors = {
    'title': '',
    'firstName': '',
    'lastName': '',
    'dob': ''
  };
  showStyle: false;
  dirtySelectValue() {
    if (this.showStyle) {
      return "input-has-value";
    } else {
      return "";
    }
  }

  ionViewWillEnter() {
    this.getContentMSG();
  }

  buildForm() {
    this.registerUserForm = this.formBuilder.group({
      'title': ['-1', [
        requireStandardDropdownListValidator('title')
      ]],
      'firstName': ['', [
        requireValidator('First name'),
        minlengthValidator(2, 'First Name'),
        maxlengthFieldValidator(25, 'First Name'),
        containsOnlyLeterValidator('First Name')
      ]],
      'lastName': ['', [
        requireValidator('Last Name'),
        minlengthValidator(2, 'Last Name'),
        maxlengthFieldValidator(25, 'Last Name'),
        containsOnlyLeterValidator('Last Name')
      ]],
      'dob': [null, [
        // Validators.required,
        ageValidator()
      ]]

    }, {
        validator: {
          updateOn: 'blur'
        }
      });

    RegisterSharingDataService.getInstance().resetState();
    this.registerUserForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });
  }

  errorMessage(path: string) {
    const control = this.registerUserForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    const invalidChar = ' contains invalid characters';
    if (control.valid) {
      return '';
    }
    if (path === 'title') {
      return control.getError('required');
    }
    if (path === 'firstName' || path === 'lastName') {
      if (control.hasError('required')) {
        return control.getError('required');
      }
      if (control.hasError('minlength')) {
        return control.getError('minlength')
      }
      if (control.hasError('maxLengthField')) {
        return control.getError('maxLengthField')
      }
      if (control.hasError('containsCharacters')) {
        return (path === 'firstName' ? 'First Name' : 'Last Name') + invalidChar;
      }
    }
    if (path === 'dob') {
      if (control.hasError('required')) {
        return control.getError('required');
      }
      return control.getError('ageInvalid')
    }
  }

  retriveMessage(code) {
    this.http.get("cms/message/code=" + code).subscribe(res => {
      if (res && res.response && res.response.message) {
        const url = this._normalizeUrl(res.response.message);
        const browser = this.iab.create(url, "_system", "location=true");
      }
    });
  }

  private _normalizeUrl(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (url.startsWith('/')) {
        return 'https://www.love2shop.co.uk' + url;
      }
      return 'http://' + url;
    }

    return url;
  }

  iconClick(target) {
    target.open();
  }

  public getContentMSG() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (Utils.isNotNull(res[0]) && Utils.isNotNull(res[0].response) && Utils.isNotNull(res[0].response.message)) {
          app.Configuration.ContentMessage.personal_details = res[0].response.message;
          this.personal_details = app.Configuration.ContentMessage.personal_details;
        }

        if (Utils.isNotNull(res[1]) && Utils.isNotNull(res[1].response) && Utils.isNotNull(res[1].response.message)) {
          app.Configuration.ContentMessage.account_login_details = res[1].response.message;

        }

        if (Utils.isNotNull(res[2]) && Utils.isNotNull(res[2].response) && Utils.isNotNull(res[2].response.message)) {
          app.Configuration.ContentMessage.please_enter_your_email_and_password_below_which_will_be_used_to_login_to_your_account_in_the_future = res[2].response.message;
        }

        if (Utils.isNotNull(res[3]) && Utils.isNotNull(res[3].response) && Utils.isNotNull(res[3].response.message)) {
          app.Configuration.ContentMessage.marketing_opt_out = res[3].response.message;
        }

        if (Utils.isNotNull(res[4]) && Utils.isNotNull(res[4].response) && Utils.isNotNull(res[4].response.message)) {
          app.Configuration.ContentMessage.account_created = res[4].response.message;
        }

        if (Utils.isNotNull(res[5]) && Utils.isNotNull(res[5].response) && Utils.isNotNull(res[5].response.message)) {
          app.Configuration.ContentMessage.five_digit_pin = res[5].response.message;
        }

        if (Utils.isNotNull(res[6]) && Utils.isNotNull(res[6].response) && Utils.isNotNull(res[6].response.message)) {
          app.Configuration.ContentMessage.registration_successful = res[6].response.message;
        }

        if (Utils.isNotNull(res[7]) && Utils.isNotNull(res[7].response) && Utils.isNotNull(res[7].response.message)) {
          app.Configuration.ContentMessage.registered_successful = res[7].response.message;
        }

        if (Utils.isNotNull(res[8]) && Utils.isNotNull(res[8].response) && Utils.isNotNull(res[8].response.message)) {
          app.Configuration.ContentMessage.next_to_add_card = res[8].response.message;
        }


      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    Observable.combineLatest(
      this.registerDataService.getContentFromRetreiveContent("personal-details"),
      this.registerDataService.getContentFromRetreiveContent("account-login-details"),
      this.registerDataService.getContentFromRetreiveContent("please-enter-your-email-and-password-below-which-will-be-used-to-login-to-your-account-in-the-future"),
      this.registerDataService.getContentFromRetreiveContent("marketing-opt-out"),
      this.registerDataService.getContentFromRetreiveContent("account-created"),
      this.registerDataService.getContentFromRetreiveContent("5-digit-pin"),
      this.registerDataService.getContentFromRetreiveContent("registration-successful"),
      this.registerDataService.getContentFromRetreiveContent("registered-successful"),
      this.registerDataService.getContentFromRetreiveContent("next-to-add-card"),
    ).subscribe(observer)
  }

}
