import { Component, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonicPage, NavController, TextInput } from 'ionic-angular';
import { RegisterSharingDataService } from "../registerSharingData.service";
import { RegisterDataService } from './../registerData.service';
import { LoadingIndicatorService } from '../../../../framework/services/loadingIndicatorService/loadingIndicator.service';
import { Utils } from '../../../../framework/services/utilities/utilities';

import { requireValidator } from '../../../../framework/validations/validator-required.directive';
import { phoneValidator } from '../../../../framework/validations/validator-phone.directive';
import {
  containsCharactersValidator,
  containsCharactersValidatorPostCode
} from '../../../../framework/validations/validator-containsCharacters.directive';
import {
  minlengthFieldValidator,
  minlengthFieldValidatorPostcode
} from '../../../../framework/validations/validator-minlengthField.directive';
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { AuththenticationGuardService } from "../../../../framework/login/authenticationGuard.service";
import { AuthenticationDataSharingService } from "../../../../framework/login/authenticationDataSharing.service";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {
  maxlengthFieldValidator,
  maxlengthFieldValidatorPostcode
} from "../../../../framework/validations/validator-maxlengthField.directive";
import { AppConfig as app } from '../../../../framework/appConfig';
import {YourCardDetailsSharingDataService} from "../../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;

@IonicPage()
@Component({
  selector: 'page-registerStep3',
  templateUrl: 'registerStep3.html',
  providers: [
    RegisterDataService
  ]
})

export class RegisterStep3Page {
  keyPCA: string = app.Configuration.LocationService.PCA_KEY;
  enter_postcode_or_search_for_an_address = app.Configuration.ContentMessage.enter_postcode_or_search_for_an_address;
  enter_address_manually = app.Configuration.ContentMessage.enter_address_manually;
  txtPostCode: string = "";
  model: any = {
    addressLine1: '',
    addressLine2: '',
    town: '',
    county: '',
    postcode: '',
    telephoneNumber: '',
    country: '',
  };

  countryLists: any = [
    {
      countryId: "UK",
      countryName: "United Kingdom"
    }
  ];
  showStyle = true;
  _submitregister;

  dirtySelectValue() {
    if (this.showStyle) {
      return "input-has-value";
    } else {
      return "";
    }
  }

  isShowAddress: boolean = false;

  suggestSearch$: Subject<string | { keyword: string, lastId?: string }> = new Subject();
  searchStream: Observable<any>;
  searchSub: Subscription;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public routeManager: RouteManagerService,
    private authService: AuththenticationGuardService,
    public navCtrl: NavController,
    private registerDataService: RegisterDataService) {
    this.buildForm();
    this.searchStream = this.suggestSearch$
      .debounceTime(250)
      .switchMap(keyword => {
        let term = '';
        let lastId = undefined;
        if (typeof keyword === 'string') {
          term = keyword
        } else if (typeof keyword === 'object') {
          term = keyword['keyword'];
          lastId = keyword['lastId'];
        }
        return this.getItems(term, lastId);
      }, (outerValue, innerValue) => ({
        keywordPostcode: outerValue,
        response: innerValue
      }))
      .filter(x => !!(x.response));
  }

  ionViewDidEnter() {
    this.searchSub = this.searchStream.subscribe(res => this.responseHandler(res));
  }

  ionViewDidLeave() {
    this.searchSub && this.searchSub.unsubscribe();
  }

  formatLocationAddress(item) {
    if (Utils.lengthGreaterThan0(item.Description)) {
      return item.Text + " " + item.Description;
    } else {
      return item.Text;
    }
  }

  showList: boolean = false;
  listAddressItems: any;
  public getItems(keywordPostcode: string, lastId = 'GBR|') {
    // if the value is an empty string don't filter the items
    if (keywordPostcode && keywordPostcode.trim() != '' && keywordPostcode.trim().length > 2) {
      let url =
        'https://services.postcodeanywhere.co.uk/CapturePlus/Interactive/Find/v2.10/json3.ws?'
        + 'Key=' + this.keyPCA
        + '&Country=GBR'
        + '&SearchTerm=' + encodeURI(keywordPostcode)
        + '&LanguagePreference=EN'
        + '&LastId=' + encodeURI(lastId)
        + '&SearchFor=Everything'
        + '&MaxSuggestions=10'
        + '&MaxResults='
        ;

      return this.registerDataService
        .searchPostcodeAutoComplete(url);
    } else {

      // hide the results when the query is empty
      this.showList = false;
      return Observable.of(null);
    }
  }

  public pickupAddress(item) {

    if (item && item.Next && item.Next.toLowerCase() === 'find') {
      this.suggestSearch$.next({
        keyword: item.Text,
        lastId: item.Id
      });
      return;
    }

    LoadingIndicatorService.getInstance().showLoadingIndicator();
    let url =
      'https://services.postcodeanywhere.co.uk/CapturePlus/Interactive/Retrieve/v2.10/json3.ws?'
      + 'Key=' + this.keyPCA
      + '&Id=' + item.Id
      ;

    this.registerDataService
      .lookUpAddress(url)
      .subscribe(response => {
        let addressItem = response.Items[0];
        if (addressItem && !addressItem.Error) {
          this.model = {
            addressLine1: addressItem.Line1,
            addressLine2: addressItem.Line2,
            town: addressItem.City,
            county: addressItem.ProvinceName || addressItem.Province || '',
            postcode: addressItem.PostalCode,
            country: this.countryLists[0].countryName,
            telephoneNumber: '',
            isShowAddress: true
          };

          this.registerUserForm.setValue(this.model);

          this.showList = false;
          this.isShowAddress = true;
        }
      }, () => {
      },
      () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
      );
  }

  public submitRegisterData() {
    if (this.registerUserForm.valid) {
      this._unsubscribe();
      this.registerUserForm.value.isShowAddress = this.isShowAddress;

      RegisterSharingDataService.getInstance().saveStep3Screen(this.registerUserForm.value);
      const authShareService = AuthenticationDataSharingService.getInstance();
      let registerModel = RegisterSharingDataService.getInstance().getRegisterData();
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      this._submitregister = this.registerDataService
        .createAccount(registerModel)
        .subscribe(res => {
          if (!res.ok) {
            return;
          }
          let body = res.response;
          let authInfo = {
            token: body.accessToken,
            accessTokenExpiry: body.accessTokenExpiry,
            emailAddress: registerModel.emailAddress
          };
          this.authService.authenticated(authInfo);
          // storage email address for later use
          authShareService.loginEmail = registerModel.emailAddress;
          YourCardDetailsSharingDataService.getInstance().goToFromLogin = true;
          this.navCtrl.setRoot('RegisterStep4Page');
        }, (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }, () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        });
    }
  }


  registerUserForm: FormGroup;
  formErrors = {
    'addressLine1': '',
    'addressLine2': '',
    'town': '',
    'county': '',
    'postcode': '',
    'telephoneNumber': '',
    'isShowAddress': ''
  };

  buildForm() {
    this.registerUserForm = this.formBuilder.group({
      'addressLine1': [this.model.addressLine1, [
        requireValidator('Address Line 1'),
        minlengthFieldValidator(2, "Address Line 1"),
        maxlengthFieldValidator(40, "Address Line 1"),
        containsCharactersValidator('Address Line 1'),
      ]],
      'addressLine2': [this.model.addressLine2, [
        maxlengthFieldValidator(40, "Address Line 2"),
        containsCharactersValidator('Address Line 2'),
      ]],
      'town': [this.model.town, [
        requireValidator('Town'),
        containsCharactersValidator('Town'),
        minlengthFieldValidator(1, "Town"),
        maxlengthFieldValidator(40, "Town")
      ]],
      'county': [this.model.county, [
        containsCharactersValidator('County'),
        maxlengthFieldValidator(40, "County")
      ]],
      'postcode': [this.model.postcode, [
        requireValidator('Postcode'),
        minlengthFieldValidatorPostcode(1, "Postcode"),
        maxlengthFieldValidatorPostcode(8, "Postcode"),
        containsCharactersValidatorPostCode('Postcode'),
      ]],
      'country': [this.countryLists[0].countryName],
      'telephoneNumber': [this.model.telephoneNumber, [
        requireValidator('telephoneNumber'),
        phoneValidator()
      ]],
      'isShowAddress': ['']
    },
      {
        validator: {
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
        if (Utils.isNotNull(res.step3Model)) {
          this.registerUserForm.setValue(res.step3Model);
          this.isShowAddress = res.step3Model.isShowAddress;
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

    if (path === 'addressLine1' ||
      path === 'addressLine2' ||
      path === 'town' ||
      path === 'county' ||
      path === 'telephoneNumber' ||
      path === 'postcode') {
      if (control.hasError('required')) {
        return control.getError('required');
      } else {
        if (control.hasError('minlengthField')) {
          return control.getError('minlengthField')
        }

        if (control.hasError('maxLengthField')) {
          return control.getError('maxLengthField')
        }

        if (control.hasError('minlength')) {
          return control.getError('minlength')
        }

        if (control.hasError('containsCharacters')) {
          return control.getError('containsCharacters')
        }

        if (control.hasError('phoneError')) {
          return control.getError('phoneError')
        }
      }
    }
  }

  private _showError(message) {
    ToastMessageService.getInstance().showToastMessage(message);
  }

  private _unsubscribe() {
    if (this._submitregister) {
      this._submitregister.unsubscribe();
    }
  }


  private _handleError(res) {
    LoadingIndicatorService.getInstance().hideLoadingIndicator();
    let msg = DEFAULT_ERROR_MSG;
    try {
      let body = JSON.parse(res._body);
      msg = body.errors[0].message;
    } catch (e) {
      msg = DEFAULT_ERROR_MSG;
    }
    this._showError(msg);
  }


  private responseHandler(res: any) {
    const { response, keywordPostcode } = res;
    this.listAddressItems = response.Items || [];

    this.showList = true;
    if (this.listAddressItems.length === 1 && Utils.isNotNull(this.listAddressItems[0].Error)) {
      this.listAddressItems[0].Text = "No results found.";
    }

    if (this.listAddressItems.length <= 0) {
      this.listAddressItems.push({
        Text: "No results found."
      });
    }
  }
}
