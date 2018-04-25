import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Navbar, ViewController, Platform } from 'ionic-angular';
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import {
  CARD_INSTORE,
  RetriveRetailerRequest,
  Where2SpendServices,
  VIRTUAL_MASTERCARD,
  VOUCHER_INSTORE
} from "../../where2Spend.services";
import { Where2SpendSharingDataService } from "../../where2SpendSharingData.services";
import { Subscription } from "rxjs/Subscription";
import { AuththenticationGuardService } from "../../../../framework/login/authenticationGuard.service";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { Observable } from "rxjs/Observable";
import { Diagnostic } from "@ionic-native/diagnostic";
import { Geolocation } from '@ionic-native/geolocation';
import { Observer } from "rxjs/Observer";
import { NavService } from "../../../../shared/nav.service";
import { AppConfig as app } from "../../../../framework/appConfig";
import { MobileDeviceService } from '../../../../framework/services/mobileDeviceService/mobileDeviceService.service';

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;

@IonicPage()
@Component({
  selector: 'page-where2SpendInStoreList',
  templateUrl: 'where2SpendInStoreList.html',
  providers: [
    Where2SpendServices,
    Geolocation,
    InAppBrowser,
    Diagnostic
  ]
})
export class Where2SpendInStoreListPage {
  opemMsCardSub: any;
  categoryAvailable: boolean;
  stores: any;
  retailers: any;
  gpsAvailable: any = true;
  isLogin: boolean;

  retailerSub: Subscription;
  resumeSub: Subscription;

  categories: any;
  location: any;
  keepBackToYourCard: boolean = false;
  card: any;
  imageBaseUrl = 'https://www.love2shop.co.uk';
  @ViewChild(Navbar) navBar: Navbar;

  constructor(public routeManager: RouteManagerService,
    public navCrtl: NavController,
    private viewCtrl: ViewController,
    private iab: InAppBrowser,
    public platform: Platform,
    public diagnostic: Diagnostic,
    public geolocation: Geolocation,
    public navCtrl: NavController,
    private navSvc: NavService,
    private authService: AuththenticationGuardService,
    private where2SpendServices: Where2SpendServices) {

    Where2SpendSharingDataService.getInstance().updateEvent$.asObservable().subscribe(() => {
      this.ionViewDidEnter();
    });
  }

  ionViewWillLeave() {
    if (Where2SpendSharingDataService.getInstance() && !this.keepBackToYourCard) {
      Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail = false;
      this.keepBackToYourCard = false;
      this.navCtrl.popToRoot();
    }

    if (this.resumeSub) {
      this.resumeSub.unsubscribe();
    }
  }

  ionViewDidLoad() {
    this.loadInitialData();
  }

  ionViewDidEnter() {
    this.categoryAvailable = true;
    const service = Where2SpendSharingDataService.getInstance();
    this.card = service.selectedCard;
    this.isLogin = !!localStorage.getItem('token');
    this.gpsAvailable = service.gpsStatus;

    if (Where2SpendSharingDataService.getInstance().keepData) {
      Where2SpendSharingDataService.getInstance().keepData = false;
      return;
    }

    this.location = service.currenrLocation;
    this.categories = service.categories;
    this.gpsAvailable = service.gpsStatus;

    this._resetData();

    if (this.location) {
      this._updateData();
    }

    this.resumeSub = this.platform.resume.subscribe(() => {
      this._checkGPSEnabled().subscribe((status) => {
        this._checkGPSEnabled().subscribe((status) => {
          if (!status) {
          } else {
            if (Where2SpendSharingDataService.getInstance().useMyLocation) {
              this._getGpsLocation().subscribe((location) => {
                Where2SpendSharingDataService.getInstance().currenrLocation = location;
                Where2SpendSharingDataService.getInstance().categories = null;
                Where2SpendSharingDataService.getInstance().gpsStatus = true;
                this._resetData();
                this._updateData();
              })
            }
          }
        });
      });
    });
  }

  gotoPreviousPage() {
    if (Where2SpendSharingDataService.getInstance()) {
      let needBackToYourCard = Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail;
      if (needBackToYourCard) {
        const index = this.viewCtrl.index;
        this.navCtrl.remove(index);
        Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail = false;
        this.keepBackToYourCard = false;
        this.navCtrl.parent.select(0);
      } else {
        this.navCtrl.pop();
      }
    }
  }

  checkIsLogin() {
    return !!localStorage.getItem('token');
  }

  gotoVirtalMsCard() {
    this.keepBackToYourCard = true;
    if (this.opemMsCardSub) {
      this.opemMsCardSub.unsubscribe();
    }
    const body: RetriveRetailerRequest = { requestType: VIRTUAL_MASTERCARD };
    this.opemMsCardSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe(res => {
      if (res && res.response && res.response.link) {
        let url = res.response.link;
        const browser = this.iab.create(url, "_system", "location=true");
      }
    }, (err) => {
    })
  }

  gotoMapPage() {
    this.keepBackToYourCard = true;
    Where2SpendSharingDataService.getInstance().keepLocation = true;
    this.navCrtl
      .push('Where2SpendInStoreMapPage')
      .then(() => {
        const index = this.navCrtl.getActive().index - 1;
        this.navCrtl.remove(index);
      });
  }

  gotoLocationStoresPage() {
    this.keepBackToYourCard = true;
    this.navCtrl.push('LocationStoresPage');
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

  private _isMobilePlatform(): boolean {
    return !!window && !!window.hasOwnProperty('cordova');
  }

  private _checkHtmlGeoEnabled() {
    return Observable.of(true)
  }

  private _checkDeviceGPSEnabled(): Observable<any> {
    const promise = this.diagnostic.isGpsLocationEnabled().then((state) => {
      if (!state) {
        throw new Error("GPS is disabled");
      }
      return state;
    });
    return Observable.fromPromise(promise);
  }

  gotoChangeCard() {
    Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail = false;
    this.navCtrl.parent.select(1);
  }

  gotoOnlinePage(storeItem) {
    this.keepBackToYourCard = true;
    this.navCrtl
      .push('Where2SpendOnlinePage')
      .then(() => {
        const index = this.navCrtl.getActive().index - 1;
        this.navCrtl.remove(index);
      });
  }

  gotoStoreDetail(store) {
    this.keepBackToYourCard = true;
    this.navCtrl.push('AlertStoreDetailsPage', { 'store': store });
  }

  loadInitialData() {
    if (Where2SpendSharingDataService.getInstance().categories) {
      this.categories = Where2SpendSharingDataService.getInstance().categories;
      return;
    }
  }

  updateCategory() {
    this.categoryAvailable = false;
    const body = this._buildCategoryRequest();
    this.retailerSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe((res) => {
      const service = Where2SpendSharingDataService.getInstance();
      if (res && res.response && res.response.categories) {
        if (Array.isArray(res.response.categories)) {
          for (let i = 0; i < res.response.categories.length; i++) {
            res.response.categories[i].selected = true;
          }
        }

        Where2SpendSharingDataService.getInstance().categories = res.response.categories.sort(this.categorySortFn.bind(this));
        this.categories = service.categories;
        this.categoryAvailable = true;
      } else {
        this.categoryAvailable = true;
        Where2SpendSharingDataService.getInstance().categories = [];
      }
    }, error => {
      this.categoryAvailable = true;
      Where2SpendSharingDataService.getInstance().categories = [];
    });
  }

  gotoCategoty() {
    this.keepBackToYourCard = true;
    if (this.categoryAvailable) {
      this.navCrtl.push('CategoryStoresPage');
    }
  }

  private _buildCategoryRequest() {
    const loc = this._selectLatLng(this.location);
    const type = CARD_INSTORE;
    const scheme = (this.card && this.card.scheme) ? this.card.scheme : undefined;
    const req: RetriveRetailerRequest = {
      requestType: type,
      scheme: scheme,
      latitude: '' + loc.lat,
      longitude: '' + loc.lng
    }

    return req;
  }

  private _updateData() {
    if (this.location) {
      this.updateRetailer();
    }
  }

  updateRetailer() {
    this.stores = [];
    const body = this._buildRetailerRequest();
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this.retailerSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe((res) => {
      const service = Where2SpendSharingDataService.getInstance();
      if (res && res.response && res.response.retailers) {
        this.retailers = res.response.retailers;
        const stores = this.retailers.reduce((allStores, retailer) => {
          const stores = retailer.stores;
          for (let i = 0; i < stores.length; i++) {
            stores[i].retailer = retailer;
            stores[i].addressLine = this._buildAdressLine(stores[i]);
          }
          return allStores.concat(stores);
        }, []);

        this.stores = stores.sort(this.storeSortFn.bind(this));

        if (Where2SpendSharingDataService.getInstance().categories == null) {
          this.updateCategory();
        }
      }
    }, (error) => {
      LoadingIndicatorService.getInstance().hideLoadingIndicator();
    }, () => {
      LoadingIndicatorService.getInstance().hideLoadingIndicator();
    })
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

  private storeSortFn(store1, store2) {
    return this._alphabetSortFn(store1, store2, store => store.retailer.name);
  }

  private categorySortFn(category1, category2) {
    return this._alphabetSortFn(category1, category2, cat => cat.name);
  }

  private _alphabetSortFn(store1, store2, selector) {
    if (typeof selector !== 'function') {
      selector = (param) => param;
    }
    if (selector(store1) < selector(store2)) return -1;
    if (selector(store1) > selector(store2)) return 1;
    return 0;
  }

  private _showError(message) {
    ToastMessageService.getInstance().showToastMessage(message);
  }

  private _buildRetailerRequest(): RetriveRetailerRequest {
    const loc = this._selectLatLng(this.location);
    const cat = this._buildCategoryOpt();
    const scheme = (this.card && this.card.scheme) ? this.card.scheme : undefined;
    const type = CARD_INSTORE;
    const req: RetriveRetailerRequest = {
      requestType: type,
      scheme: scheme,
      latitude: '' + loc.lat,
      longitude: '' + loc.lng,
      categories: cat
    }

    return req;
  }

  private _buildAdressLine(store) {
    if (!store) {
      return '';
    }

    let address = '';
    address += (store.addressLine1) ? `${store.addressLine1}, ` : '';
    address += (store.addressLine2) ? `${store.addressLine2}, ` : '';
    address += (store.town) ? `${store.town}, ` : '';
    address += (store.county) ? `${store.county}` : '';
    return address;
  }

  private _resetData() {
    this.stores = [];
  }

  private _buildCategoryOpt() {
    if (!Array.isArray(this.categories)) {
      return;
    }
    let cats = this.categories.filter(cat => cat.selected);
    if (cats.length === 0) {
      return;
    } else {
      cats = cats.map(cat => ({ key: cat.key }));
    }

    return cats;
  }

  private _selectLatLng(location) {
    if (!location || !location.coords) {
      return {
        lat: 0,
        lng: 0
      };
    }
    return {
      lat: location.coords.latitude,
      lng: location.coords.longitude
    }
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

}
