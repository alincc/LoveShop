import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, AlertController, TextInput, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditAccountService } from './editData.service';
import { requireValidator } from '../../../framework/validations/validator-required.directive';
import { LoadingIndicatorService } from '../../../framework/services/loadingIndicatorService/loadingIndicator.service';
import { ToastMessageService } from '../../../framework/services/toastMessageService/toastMessage.service';
import { DatePipe } from '@angular/common';
import { RouteManagerService } from "../../../framework/services/routeManager/routeManager.service";
import {
  minlengthValidator,
  minlengthValidatorPostCode
} from "../../../framework/validations/validator-minlength.directive";
import {
  containsCharactersValidator,
  containsCharactersValidatorPostCode,
  containsOnlyLeterValidator
} from "../../../framework/validations/validator-containsCharacters.directive";
import { phoneValidator } from "../../../framework/validations/validator-phone.directive";
import $ from 'jquery';
import {
  maxlengthFieldValidator,
  maxlengthFieldValidatorPostcode
} from "../../../framework/validations/validator-maxlengthField.directive";
import { minlengthFieldValidatorPostcode } from "../../../framework/validations/validator-minlengthField.directive";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { RegisterDataService } from '../register/registerData.service';
import { AppConfig as app } from '../../../framework/appConfig';
import { Utils } from '../../../framework/services/utilities/utilities';

@IonicPage()
@Component({
  selector: 'page-editAccount',
  templateUrl: 'editAccount.html',
  providers: [
    EditAccountService
  ]
})
export class EditAccountPage {
  enter_postcode_or_search_for_an_address = app.Configuration.ContentMessage.enter_postcode_or_search_for_an_address;
  enter_address_manually = app.Configuration.ContentMessage.enter_address_manually;
  dob: any = '';
  showContent = false;
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

  countryLists: any = [
    {
      countryId: "UK",
      countryName: "United Kingdom"
    }
  ];

  isShowAddress: boolean = true;
  suggestSearch$: Subject<string | { keyword: string, lastId?: string }> = new Subject();
  searchStream: Observable<any>;
  showList: boolean = false;
  searchSub: Subscription;
  listAddressItems: Array<any>;

  model = {
    title: '',
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    dob: '',
    county: '',
    postcode: '',
    town: '',
    country: '',
    telephoneNumber: ''
  };

  updateSuccessFullMSG = '';

  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public routeManager: RouteManagerService,
    public alertCtrl: AlertController,
    private editDataService: EditAccountService) {

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

  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.getUserDataDetails();
      this.getContentSuccessfull();
    }
  }

  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }

  ionViewDidEnter() {
    this.searchSub = this.searchStream.subscribe(res => this.responseHandler(res));
  }

  ionViewDidLeave() {
    this.searchSub && this.searchSub.unsubscribe();
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

  public getUserDataDetails() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        let formatPhoneNumber = body.telephoneNumbers;
        formatPhoneNumber = formatPhoneNumber.substr(formatPhoneNumber.indexOf(':') + 1, formatPhoneNumber.length);
        this.dob = body.dob;
        let formatDOB = this.formatDateStandard(body.dob);
        let datePipeEn: DatePipe = new DatePipe('en-GB');
        formatDOB = datePipeEn.transform(formatDOB, 'dd MMMM yyyy');
        this.model = {
          title: body.title,
          firstName: body.firstName,
          lastName: body.lastName,
          addressLine1: body.addressLine1,
          addressLine2: body.addressLine2,
          dob: formatDOB,
          county: body.county,
          postcode: body.postcode,
          town: body.town,
          country: body.country,
          telephoneNumber: formatPhoneNumber
        }
        this.showContent = true;
        this.buildForm();
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.editDataService
      .getUserData()
      .subscribe(observer);
  }

  formatDateStandard(date) {
    let arrStrDate = date.split('/');
    return arrStrDate[2] + '-' + arrStrDate[1] + '-' + arrStrDate[0];
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
    this.editDataService
      .getContentFromRetreiveContent('personal-details-successfully-updated')
      .subscribe(observer);
  }

  public updateUserDetails() {
    if (this.updateAccountForm.valid) {
      this.updateAccountForm.value.dob = this.dob;
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          if (!res.ok) {
            return;
          }
          ToastMessageService.getInstance().showToastMessage(this.updateSuccessFullMSG);
        },
        error: (error) => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      };
      this.editDataService
        .updateAccount(this.updateAccountForm.value)
        .subscribe(observer);
    }
  }


  updateAccountForm: FormGroup;
  formErrors = {
    'title': '',
    'firstName': '',
    'lastName': '',
    'addressLine1': '',
    'addressLine2': '',
    'postcode': '',
    'town': '',
    'county': '',
    'telephoneNumber': ''
  };

  buildForm() {
    this.updateAccountForm = this.formBuilder.group({
      'title': [this.model.title, [
        requireValidator('title')
      ]],
      'firstName': [this.model.firstName, [
        requireValidator('firstName'),
        minlengthValidator(2, 'First Name'),
        maxlengthFieldValidator(25, 'First Name'),
        containsOnlyLeterValidator('First Name')
      ]],
      'lastName': [this.model.lastName, [
        requireValidator('lastName'),
        minlengthValidator(2, 'Last Name'),
        maxlengthFieldValidator(25, 'Last Name'),
        containsOnlyLeterValidator('Last Name')
      ]],
      'addressLine1': [this.model.addressLine1, [
        requireValidator('addressLine1'),
        maxlengthFieldValidator(40, 'Address Line 1'),
        minlengthValidator(2, 'Address Line 1'),
        containsCharactersValidator('Address Line 1'),
      ]],
      'addressLine2': [this.model.addressLine2, [
        maxlengthFieldValidator(40, 'Address Line 2'),
        minlengthValidator(1, 'Address Line 2'),
        containsCharactersValidator('Address Line 2'),
      ]],
      'town': [this.model.town, [
        requireValidator('town'),
        minlengthValidator(1, 'Town'),
        maxlengthFieldValidator(40, 'Town'),
        containsCharactersValidator('Town'),
      ]],
      'county': [this.model.county, [
        containsCharactersValidator('County'),
        minlengthValidator(1, 'County'),
        maxlengthFieldValidator(40, 'County')
      ]],
      'postcode': [this.model.postcode, [
        requireValidator('postcode'),
        minlengthFieldValidatorPostcode(1, 'Postcode'),
        maxlengthFieldValidatorPostcode(8, 'Postcode'),
        containsCharactersValidatorPostCode('Postcode')
      ]],
      'dob': [{ value: this.model.dob, disabled: true }],
      'country': [this.model.country],
      'telephoneNumber': [this.model.telephoneNumber, [
        requireValidator('telephoneNumber'),
        phoneValidator(),
      ]]

    },
      {
        validator: {
          updateOn: 'blur'
        }
      });

    this.updateAccountForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });
  }

  errorMessage(path: string) {
    const control = this.updateAccountForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'title' ||
      path === 'firstName' ||
      path === 'lastName' ||
      path === 'addressLine1' ||
      path === 'addressLine2' ||
      path === 'county' ||
      path === 'postcode' ||
      path === 'telephoneNumber' ||
      path === 'town') {
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

  formatLocationAddress(item) {
    if (Utils.lengthGreaterThan0(item.Description)) {
      return item.Text + " " + item.Description;
    } else {
      return item.Text;
    }
  }

  public getItems(keywordPostcode: string, lastId = 'GBR|') {
    // if the value is an empty string don't filter the items
    if (keywordPostcode && keywordPostcode.trim() != '' && keywordPostcode.trim().length > 2) {
      let url =
        'https://services.postcodeanywhere.co.uk/CapturePlus/Interactive/Find/v2.10/json3.ws?'
        + 'Key=' + app.Configuration.LocationService.PCA_KEY
        + '&Country=GBR'
        + '&SearchTerm=' + encodeURI(keywordPostcode)
        + '&LanguagePreference=EN'
        + '&LastId=' + encodeURI(lastId)
        + '&SearchFor=Everything'
        + '&MaxSuggestions=10'
        + '&MaxResults='
        ;

      return this.editDataService
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
      + 'Key=' + app.Configuration.LocationService.PCA_KEY
      + '&Id=' + item.Id
      ;

    this.editDataService
      .lookUpAddress(url)
      .subscribe(response => {
        let addressItem = response.Items[0];
        if (addressItem && !addressItem.Error) {
          const model = {
            addressLine1: addressItem.Line1,
            addressLine2: addressItem.Line2,
            town: addressItem.City,
            county: addressItem.ProvinceName || addressItem.Province || '',
            postcode: addressItem.PostalCode,
            country: this.countryLists[0].countryName,
          };

          this.updateAccountForm.patchValue(model);

          this.showList = false;
          this.isShowAddress = true;
        }
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
      );
  }
}
