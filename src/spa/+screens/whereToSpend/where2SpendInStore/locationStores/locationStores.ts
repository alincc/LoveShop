import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { Where2SpendServices } from "../../where2Spend.services";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { Where2SpendSharingDataService } from "../../where2SpendSharingData.services";
import { Observable } from "rxjs/Observable";
import { Diagnostic } from "@ionic-native/diagnostic";
import { Observer } from "rxjs/Observer";
import { Geolocation } from '@ionic-native/geolocation';
import { HttpService } from "../../../../framework/services/httpService/http.service";
import { Subject } from "rxjs/Subject";
import { LocationAccuracy } from "@ionic-native/location-accuracy";
import { Subscription } from "rxjs/Subscription";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { NavService } from "../../../../shared/nav.service";
import $ from 'jquery';
import { Utils } from "../../../../framework/services/utilities/utilities";
import { AppConfig as app } from "../../../../framework/appConfig";

const defaultLocation = app.Configuration.Where2SpendInStoreMap.defaultLocation;
const GPS_ERROR_MSG = app.Configuration.Where2SpendInStoreMap.GPS_ERROR_MSG;

@IonicPage()
@Component({
  selector: 'page-locationStores',
  templateUrl: 'locationStores.html',
  providers: [
    Where2SpendServices,
    Diagnostic,
    LocationAccuracy,
    Geolocation
  ]
})
export class LocationStoresPage {
  enter_postcode_or_search_for_an_address = app.Configuration.ContentMessage.enter_postcode_or_search_for_an_address;
  use_current_location = app.Configuration.ContentMessage.use_current_location;
  canApply: boolean;
  _locationSub: any;
  from: any;

  keyPCA: string = app.Configuration.LocationService.PCA_KEY;
  showList: boolean = false;
  listAddressItems: any = [];
  address: any = '';
  adr_address: any;

  suggestSearch$: Subject<string | { keyword: string, lastId?: string }> = new Subject();
  searchStream: Observable<any>;
  searchSub: Subscription;

  options: any = {
  };

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

  constructor(
    public http: HttpService,
    public platform: Platform,
    public diagnostic: Diagnostic,
    public geolocation: Geolocation,
    public locationAccuracy: LocationAccuracy,
    public routeManager: RouteManagerService,
    public navParams: NavParams,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private navSvc: NavService,
    private where2SpendDataService: Where2SpendServices
  ) {
    this.searchStream = this.suggestSearch$
      .asObservable()
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

  search(event) {
    this.canApply = false;
    const keyword = event.target.value;
    this.suggestSearch$.next(keyword);
  }

  ionViewWillEnter() {
    this.from = null;
    this.address = '';
    $('.app-root').addClass('not-show-tab');

    if (this.navParams.get('from')) {
      this.from = this.navParams.get('from');
    }
    this.searchSub = this.searchStream.subscribe(res => this.responseHandler(res));
  }

  ionViewDidEnter() {
  }

  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
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

      return this.http.getExternal(url);
    } else {
      // hide the results when the query is empty
      this.showList = false;
      return Observable.of(null);
    }
  }

  goToMapPage() {
    if (this._locationSub) {
      this._locationSub.unsubscribe();
    }

    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this._locationSub = this._checkGPSEnabled()
      .do(status => {
        if (!status) {
          throw new Error(GPS_ERROR_MSG);
        }
      }).flatMap(() => this._getGpsLocation())
      .subscribe((location) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        Where2SpendSharingDataService.getInstance().currenrLocation = location;
        Where2SpendSharingDataService.getInstance().gpsStatus = true;

        Where2SpendSharingDataService.getInstance().refreshCategory = true;
        Where2SpendSharingDataService.getInstance().useMyLocation = true;
        Where2SpendSharingDataService.getInstance().keepLocation = false;
        this.navCtrl.pop().then(() => { });
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        ToastMessageService.getInstance().showToastMessage(GPS_ERROR_MSG);
        if (error && error.code === 1) {
          Where2SpendSharingDataService.getInstance().gpsStatus = false;
        }
      });
  }

  requestLocation() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          (result) => {
            Where2SpendSharingDataService.getInstance().gpsStatus = true;
          },
          error => {
            Where2SpendSharingDataService.getInstance().gpsStatus = false;
            LoadingIndicatorService.getInstance().hideLoadingIndicator();
          }
        );
      }
    });
  }

  apply() {
    this.getLocationFormPostCode(this.model.postcode).subscribe(res => {
      const service = Where2SpendSharingDataService.getInstance();
      service.keepLocation = true;
      service.refreshCategory = true;
      service.useMyLocation = false;
      Where2SpendSharingDataService.getInstance().pickupAddress = this.selectedAddress;

      const coords = {
        latitude: parseFloat(res.result.latitude),
        longitude: parseFloat(res.result.longitude)
      };
      service.currenrLocation = { coords };
      service.categories = null;
      this.navCtrl.pop().then(() => {
      });
    });
  }

  private selectedAddress: string = "";
  public pickupAddress(item) {
    this.selectedAddress = item.Text;
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
      + '&Id=' + item.Id;

    this.http.getExternal(url)
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
            label: this.prettify(addressItem.Label),
            telephoneNumber: ''
          };

          this.txtPostCode = this.prettify(addressItem.Label);
          this.canApply = true;
          this.showList = false;
        } else {
          this.canApply = false;
        }
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
      );
  }

  prettify(str) {
    if (typeof str !== 'string') {
      return '';
    }

    return str.replace(/\n/g, ', ').replace(/↵/g, ', ');
  }

  getLocationFormPostCode(code) {
    return this.http.getExternal('http://api.postcodes.io/postcodes/' + code);
  }

  getAddress(place) {
    const location = this._getLocationFromPlace(place);
    if (location) {
      Where2SpendSharingDataService.getInstance().currenrLocation = location;
    }
  }

  private _getLocationFromPlace(place) {
    return place && place.geometry && place.geometry.location && {
      coords: {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng()
      }
    }
  }

  private _handleGeoError(error) {
    let alert = this.alertCtrl.create({
      title: 'GPS NOT AVAILABLE',
      message: GPS_ERROR_MSG,
      cssClass: 'l2s-alert--flat l2s-alert--twobutton',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'cancel-button',
          handler: () => {
          }
        },
        {
          text: 'Go To Setting',
          cssClass: 'main-button',
          handler: () => {
            this._gotoLocationSetting();
          }
        },{
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }

  private _checkGPSEnabled(): Observable<any> {
    if (this._isMobilePlatform()) {
      if (this.platform.is('ios')) {
        return Observable.of(true);
      }
      return this._checkDeviceGPSEnabled();
    }
    return this._checkHtmlGeoEnabled();
  }

  private _checkHtmlGeoEnabled() {
    return Observable.of(true)
  }

  private _checkDeviceGPSEnabled(): Observable<any> {
    const promise = this.diagnostic.isGpsLocationEnabled().then((state) => {
      return state;
    });
    return Observable.fromPromise(promise);
  }

  private _getHtmlLocation(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((state) => {
          observer.next(state);
        }, (error) => {
          observer.error(error);
        })
      } else {
        // HTML Geo API not supported
        const error = new Error("HTML Geo API not supported.");
        observer.error(error);
      }
    })
  }

  private _isMobilePlatform(): boolean {
    return !!window && !!window.hasOwnProperty('cordova');
  }

  private _getGpsLocation() {
    if (this._isMobilePlatform()) {
      return this._getDeviceGpsLocation();
    }
    return this._getHtmlLocation();
  }

  private _getDeviceGpsLocation(): Observable<any> {
    const promise = this.geolocation.getCurrentPosition().then((state) => {
      return state;
    });
    return Observable.fromPromise(promise);
  }

  private _gotoLocationSetting() {
    if (this._isMobilePlatform()) {
      if (this.platform.is('ios')) {
        this.diagnostic.switchToSettings();
      } else {
        this.diagnostic.switchToLocationSettings();
      }
    }
  }
}
