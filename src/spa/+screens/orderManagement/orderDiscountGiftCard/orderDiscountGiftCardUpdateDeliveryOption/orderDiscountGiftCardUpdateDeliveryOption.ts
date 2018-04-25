import { Component, ViewChildren, QueryList } from '@angular/core';
import {IonicPage, AlertController, NavController, NavParams, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {checkMatchWith} from '../../../../framework/validations/validator-passwordMatch.directive';
import {passwordValidator} from "../../../../framework/validations/validator-password.directive";
import {ToastMessageService} from "../../../../framework/services/toastMessageService/toastMessage.service";
import {Utils} from "../../../../framework/services/utilities/utilities";
import {LogoutDataService} from "../../../../framework/login/logoutData.service";
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {
    minlengthFieldValidator,
    minlengthFieldValidatorPostcode
} from "../../../../framework/validations/validator-minlengthField.directive";
import {
    containsCharactersValidator,
    containsCharactersValidatorPostCode
} from "../../../../framework/validations/validator-containsCharacters.directive";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {requireValidator} from "../../../../framework/validations/validator-required.directive";
import {OrderDiscountGiftCardUpdateDeliveryOptionService} from "./orderDiscountGiftCardUpdateDeliveryOption.service";
import {OrderDiscountGiftCardSharingDataService} from "../orderDiscountGiftCardSharingData.services";
import {AuththenticationGuardService} from "../../../../framework/login/authenticationGuard.service";
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {
    maxlengthFieldValidator,
    maxlengthFieldValidatorPostcode
} from "../../../../framework/validations/validator-maxlengthField.directive";
import {minlengthValidator} from "../../../../framework/validations/validator-minlength.directive";
import { AppConfig as app } from '../../../../framework/appConfig';

@IonicPage()
@Component({
  selector: 'page-orderDiscountGiftCardUpdateDeliveryOption',
  templateUrl: 'OrderDiscountGiftCardUpdateDeliveryOption.html',
  providers: [
    AuththenticationGuardService,
    OrderDiscountGiftCardUpdateDeliveryOptionService
  ]
})
export class OrderDiscountGiftCardUpdateDeliveryOptionPage {

  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  suggestSearch$: Subject<string | {keyword: string, lastId?: string}> = new Subject();

  constructor(private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public routeManager: RouteManagerService,
              private orderDiscountGiftCardUpdateDeliveryOptionService: OrderDiscountGiftCardUpdateDeliveryOptionService,
              public navParams: NavParams,
              public navCtrl: NavController) {
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

  updateDeliveryForm: FormGroup;
  formErrors = {
    'addressLine1': '',
    'town': '',
    'county': '',
    'postcode': '',
  };
  deliveryInformation;


  keyPCA: string = app.Configuration.LocationService.PCA_KEY;

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

  searchStream: Observable<any>;
  searchSub: Subscription;

  ionViewDidEnter() {
    this.searchSub = this.searchStream.subscribe(res => this.responseHandler(res));
  }

  ionViewDidLeave() {
    this.bodyPost = null;
    this.searchSub && this.searchSub.unsubscribe();
  }

  showList: boolean = false;
  listAddressItems: any;
  bodyPost =null;

  showStyle = true;

  dirtySelectValue() {
    if (this.showStyle) {
      return "input-has-value";
    } else {
      return "";
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
        + 'Key=' + this.keyPCA
        + '&Country=GBR'
        + '&SearchTerm=' + encodeURI(keywordPostcode)
        + '&LanguagePreference=EN'
        + '&LastId=' + encodeURI(lastId)
        + '&SearchFor=Everything'
        + '&MaxSuggestions=10'
        + '&MaxResults='
      ;

      return this.orderDiscountGiftCardUpdateDeliveryOptionService
        .searchPostcodeAutoComplete(url);
    } else {

      // hide the results when the query is empty
      this.showList = false;
      return Observable.of(null);
    }
  }



  public pickupAddress(item) {
    if(item && item.Next && item.Next.toLowerCase() === 'find') {
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

    this.orderDiscountGiftCardUpdateDeliveryOptionService
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
            };

            this.updateDeliveryForm.setValue(this.model);

            this.showList = false;
          }
        },() => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        },
        () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }
      );
  }

  private responseHandler(res: any) {

    const { response, keywordPostcode } = res;
    this.listAddressItems = response.Items || [];

    // Show the results
    this.showList = true;

    if (this.listAddressItems.length > 0) {
      if(this.listAddressItems.length === 1 && Utils.isNotNull(this.listAddressItems[0].Error)) {
        this.listAddressItems[0].Text = "No results found.";
      }

      if (this.listAddressItems.length == 0) {
        this.listAddressItems.push({
          Text: "No results found."
        });
      }
    } else {
      this.listAddressItems.push({
        Text: "No results found."
      });
    }
  }

  updateOrderDeliveryDetail() {
    this.bodyPost = {
      "propositionId": this.deliveryInformation.propositionId,
      "orderNumber": this.deliveryInformation.orderNumber,
      "title": this.deliveryInformation.title,
      "firstName": this.deliveryInformation.firstName,
      "lastName": this.deliveryInformation.lastName,

      "addressLine1": this.updateDeliveryForm.value.addressLine1,
      "addressLine2": this.updateDeliveryForm.value.addressLine2,
      "town": this.updateDeliveryForm.value.town,
      "county": this.updateDeliveryForm.value.county,
      "postcode": this.updateDeliveryForm.value.postcode,
      "country": this.updateDeliveryForm.value.country,

      "deliveryMethodCode": this.deliveryInformation.deliveryMethodCode,
    }


    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        OrderDiscountGiftCardSharingDataService.getInstance().needUpdateDelivery(this.bodyPost);
        this.navCtrl.pop();
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.orderDiscountGiftCardUpdateDeliveryOptionService
      .updateDeliveryOption(this.bodyPost)
      .subscribe(observer);
  }



  ionViewWillEnter() {
    this.bodyPost = null;
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {

      if (this.navParams.get('deliveryInformation')) {
        this.deliveryInformation = this.navParams.get('deliveryInformation');
      }
    }
  }

  buildForm() {
    this.updateDeliveryForm = this.formBuilder.group({
        'addressLine1': [this.model.addressLine1, [
            requireValidator('Address Line 1'),
            minlengthFieldValidator(2, "Address Line 1"),
            maxlengthFieldValidator(40, "Address Line 1"),
            containsCharactersValidator('Address Line 1')
        ]],
        'addressLine2': [this.model.addressLine2, [
            minlengthValidator(1, 'Address Line 2'),
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
            containsCharactersValidatorPostCode('Postcode')
        ]],
        'country': [this.countryLists[0].countryName],
    }, {
      validator: {
        updateOn: 'blur'
      }
    });

    this.updateDeliveryForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });
  }

  errorMessage(path: string) {
    const control = this.updateDeliveryForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'addressLine1' || path === 'addressLine2' || path === 'town' || path === 'county' || path === 'postcode') {
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


          if (control.hasError('containsCharacters')) {
          return control.getError('containsCharacters')
        }
      }
    }
  }
}
