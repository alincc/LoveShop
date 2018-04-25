import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, Platform, Navbar, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { Where2SpendSharingDataService } from "../../where2SpendSharingData.services";
import { RetriveRetailerRequest, Where2SpendServices, CARD_INSTORE, VIRTUAL_MASTERCARD, VOUCHER_INSTORE } from "../../where2Spend.services";
import { Subscription } from "rxjs/Subscription";
import { AuththenticationGuardService } from "../../../../framework/login/authenticationGuard.service";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Observable } from "rxjs/Observable";
import { Diagnostic } from "@ionic-native/diagnostic";
import { Observer } from "rxjs/Observer";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { NavService } from "../../../../shared/nav.service";
import { VerifyPINService } from "../../../AccountManagement/verifyPIN/verifyPIN.service";
import { Utils } from '../../../../framework/services/utilities/utilities';
import { AppConfig as app } from '../../../../framework/appConfig';
import { MobileDeviceService } from '../../../../framework/services/mobileDeviceService/mobileDeviceService.service';

declare var google;
const MAX_REQUEST_TIME = 5;

@IonicPage()
@Component({
  selector: 'page-where2SpendInStoreMap',
  templateUrl: 'where2SpendInStoreMap.html',
  providers: [
    Geolocation,
    LocationAccuracy,
    Diagnostic,
    InAppBrowser,
    Where2SpendServices
  ]
})
export class Where2SpendInStoreMapPage {
  requestTime: any;
  lastRequestTime: number;
  opemMsCardSub: any;
  categoryAvailable: boolean;
  @ViewChild('map') mapElRef: ElementRef;
  @ViewChild(Navbar) navBar: Navbar;

  infowindow: any;
  youAreHere: any;
  _markers: any = [];
  _locationSub: Subscription;
  stores: any;
  retailers: any;
  isLogin: boolean;
  categories: any;
  _mapLoadded: boolean = false;
  location: any = app.Configuration.Where2SpendInStoreMap.defaultLocation;
  gpsAvailable: any = true;
  keepBackToYourCard: any = false;
  imageBaseUrl: string;

  map: any;
  card: any;
  retailerSub: Subscription;
  resumeSub: Subscription;

  constructor(
    public routeManager: RouteManagerService,
    public platform: Platform,
    public diagnostic: Diagnostic,
    public geolocation: Geolocation,
    public locationAccuracy: LocationAccuracy,
    private geo: Geolocation,
    public navCtrl: NavController,
    private iab: InAppBrowser,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private navController: NavController,
    private viewCtrl: ViewController,
    private authService: AuththenticationGuardService,
    private navSvc: NavService,
    private Where2SpendServices: Where2SpendServices
  ) {
    this.imageBaseUrl = app.Configuration.HttpService.baseResourceUrl;
    this.resumeSub = this.platform.resume.subscribe(() => {
      setTimeout(() => {
        this._checkGPSEnabled()
          .filter(status => status)
          .flatMap(() => this.checkLocationAuthorized())
          .filter(granted => granted)
          .subscribe((status) => {
            if (Where2SpendSharingDataService.getInstance().useMyLocation) {
              this.lastRequestLocation = "";
              this.getLocation();
            }
          });
      }, app.Configuration.Where2SpendInStoreMap.checkGPSOnResume);
    });

    this.lastRequestLocation = "";
    Where2SpendSharingDataService.getInstance().updateEvent$.asObservable().subscribe(() => {
      this.ionViewDidEnter();
    });
  }

  ngAfterViewInit() {
    this._caculateMapHeight();
  }

  ionViewDidLoad() {
    this.loadInitialData();
    this.loadMap(app.Configuration.Where2SpendInStoreMap.defaultLocation);
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

  ionViewDidLeave() {
    if (this._locationSub) {
      this._locationSub.unsubscribe();
    }
  }

  ionViewWillLeave() {
    if (Where2SpendSharingDataService.getInstance() && !this.keepBackToYourCard) {
      Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail = false;
      this.keepBackToYourCard = false;
      this.navCtrl.popToRoot();
    }
  }

  ionViewWillEnter() {
  }

  ionViewDidEnter() {
    this.isLogin = !!localStorage.getItem('token');
    this.card = Where2SpendSharingDataService.getInstance().selectedCard;
    this.categoryAvailable = true;

    if (Where2SpendSharingDataService.getInstance().keepData) {
      Where2SpendSharingDataService.getInstance().keepData = false;
      return;
    }

    if (Where2SpendSharingDataService.getInstance().keepLocation) {
      Where2SpendSharingDataService.getInstance().keepLocation = false;
      this._updateData();
      return;
    }

    this._resetData();

    if (this._locationSub) {
      this._locationSub.unsubscribe();
    }
    this.requestTime = 0;
    VerifyPINService.getInstance().byPassVerifyPin = true;
    this.checkAuthorization();
    // update map after enter
    setTimeout(() => {
      if (this.map) {
        google.maps.event.trigger(this.map, 'resize');
      }
    }, 1500);

    this.resumeSub = this.platform.resume.subscribe(() => {
      setTimeout(() => {
        this._checkGPSEnabled()
          .filter(status => status)
          .flatMap(() => this.checkLocationAuthorized())
          .filter(granted => granted)
          .subscribe((status) => {
            if (Where2SpendSharingDataService.getInstance().useMyLocation) {
              this.getLocation();
            }
          });
      }, app.Configuration.Where2SpendInStoreMap.checkGPSOnResume);
    });
  }

  checkIsLogin() {
    return !!localStorage.getItem('token');
  }

  onError(error) {
    Where2SpendSharingDataService.getInstance().gpsStatus = false;
  }

  checkAuthorization() {
    this.diagnostic.isLocationAuthorized().then((authorized) => {
      if (!authorized) {
        this.diagnostic.requestLocationAuthorization().then((status) => {
          switch (status) {
            case this.diagnostic.permissionStatus.GRANTED: {
              this.checkLocationMode();
              break;
            }
            case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE: {
              this.checkLocationMode();
              break;
            }
            case this.diagnostic.permissionStatus.DENIED:
              break;
            case this.diagnostic.permissionStatus.DENIED_ALWAYS: {
              break;
            }
            default: {
            }
          }
        }).catch((error) => this.onError(error));
      } else {
        this.checkLocationMode();
      }
    }).catch((error) => this.onError(error));
  }

  checkLocationMode() {
    Where2SpendSharingDataService.getInstance().useMyLocation = true;
    if (this.platform.is('ios')) {
      this.getLocation();
    } else {
      this.diagnostic.getLocationMode().then((locationMode) => {
        if (locationMode === this.diagnostic.locationMode.HIGH_ACCURACY) {
          this.getLocation();
        } else {
          this.requestLocationAccuracy();
        }
      }).catch((error) => this.onError(error));
    }
  }

  requestLocationAccuracy() {
    this.locationAccuracy.canRequest().then((canRequest) => {
      if (canRequest) {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
          this.checkLocationMode(); //recheck mode
        }).catch((error) => this.onError(error));
      }
    }).catch((error) => this.onError(error));
  }

  getLocation() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this._locationSub = this._getGpsLocation()
      .subscribe((location) => {

        let isNotMultipleRequest = !this.isManyRequestAtTheSameTime();
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if (isNotMultipleRequest === true) {
          VerifyPINService.getInstance().byPassVerifyPin = false;

          Where2SpendSharingDataService.getInstance().currenrLocation = location;
          Where2SpendSharingDataService.getInstance().categories = null;
          Where2SpendSharingDataService.getInstance().gpsStatus = true;
          if (document.getElementById("map") === null) return;

          this.location = location;
          this.updateMap(this.location);
          this._resetData();
          this._updateData();
        }
      }, (error) => {
        Where2SpendSharingDataService.getInstance().gpsStatus = false;
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  requestLocation() {
    if (this.requestTime > MAX_REQUEST_TIME) {
      return;
    }
    this.requestTime++;
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          (result) => {
            Where2SpendSharingDataService.getInstance().gpsStatus = true;
            this.getLocation();
          },
          (error) => {
            Where2SpendSharingDataService.getInstance().gpsStatus = false;
            this.gotoListPage();
          }
        );
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this._caculateMapHeight();
  }

  gotoChangeCard() {
    Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail = false;
    this.navCtrl.parent.select(1);
  }

  gotoVirtalMsCard() {
    this.keepBackToYourCard = true;
    if (this.opemMsCardSub) {
      this.opemMsCardSub.unsubscribe();
    }
    const body: RetriveRetailerRequest = { requestType: VIRTUAL_MASTERCARD };
    this.opemMsCardSub = this.Where2SpendServices.retriveRetailerLocation(body).subscribe(res => {
      if (res && res.response && res.response.link) {
        let url = res.response.link;
        const browser = this.iab.create(url, "_system", "location=true");
      }
    }, (err) => {
    });
  }

  gotoListPage() {
    this.keepBackToYourCard = true;
    this.navCtrl
      .push('Where2SpendInStoreListPage')
      .then(() => {
        const index = this.navCtrl.getActive().index - 1;
        this.navCtrl.remove(index);
      });
  }

  gotoOnlinePage() {
    this.keepBackToYourCard = true;
    this.navCtrl
      .push('Where2SpendOnlinePage')
      .then(() => {
        const index = this.navCtrl.getActive().index - 1;
        this.navCtrl.remove(index);
      });
  }

  gotoCategoty() {
    this.keepBackToYourCard = true;
    if (this.categoryAvailable) {
      this.navCtrl.push('CategoryStoresPage')
    }
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
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this.retailerSub = this.Where2SpendServices.retriveRetailerLocation(body).subscribe((res) => {
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

  loadMap(myLoc: any) {
    this._mapLoadded = true;
    // create a new map by passing HTMLElement
    let mapEle = this.mapElRef.nativeElement;

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: app.Configuration.Where2SpendInStoreMap.defaultLocation,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });

    google.maps.event.addListener(this.map, 'idle', () => {
      if (this.map) {
        google.maps.event.trigger(this.map, 'resize');
      }
    });

    google.maps.event.addListener(this.map, "click", () => {
      if (this.infowindow) {
        this._closeInfoWindow();
      }
    });
  }

  alertCurrentStore() {
    this.keepBackToYourCard = true;
    if (this.infowindow) {
      this.navCtrl.push('AlertStoreDetailsPage', { 'store': this.infowindow.store });
    }
  }

  updateMap(loc: any) {
    loc.lat = parseFloat(loc.lat);
    loc.lng = parseFloat(loc.lng);

    this.map.setCenter(loc);
  }

  updateYouAreHere(loc: any) {
    let location = {
      lat: loc.coords.latitude,
      lng: loc.coords.longitude
    }
    this.updateMap(location);

    if (this.youAreHere) this.youAreHere.setMap(null);
    if (
      (isNaN(location.lat) !== true)
      && (isNaN(location.lng) !== true)
    ) {
      let content = Where2SpendSharingDataService.getInstance().pickupAddress;
      if (
        (Where2SpendSharingDataService.getInstance().useMyLocation)
        || (Utils.lengthGreaterThan0(content) === false)
      ) {
        content = app.Configuration.Where2SpendInStoreMap.youAreHere;
      }
      this.youAreHere = new google.maps.InfoWindow({
        content: content
      });
      const marker = new google.maps.Marker({
        position: {
          lat: location.lat,
          lng: location.lng
        },
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        map: this.map
      });
      this._markers.push(marker);
      this.youAreHere.open(this.map, marker);
      Observable.interval(app.Configuration.Where2SpendInStoreMap.checkGPSOnResume).skip(1).filter(n => n%2===1).take(2).subscribe(() => {
        const infowindowEl = document.querySelector('.gm-style-iw');
        if (infowindowEl) {
          infowindowEl.setAttribute('class', '');
          infowindowEl.setAttribute('style', 'top: 9px; position: absolute; left: 15px;');
        }
      });
    }
  }

  private lastRequestLocationTime: any;
  isManyRequestAtTheSameTime() {
    var now = new Date();
    if (Utils.isNull(this.lastRequestLocationTime)) {
      this.lastRequestLocationTime = new Date(1900, 1, 1, 1, 1, 1, 1);
    }
    var seconds = (now.getTime() - this.lastRequestLocationTime.getTime()) / 1000;
    this.lastRequestLocationTime = now;
    return seconds < 2;
  }

  private lastRequestLocation: string = "";
  isTheSameWithLastRequest(currentRequest) {
    let isNotMultipleRequest = !this.isManyRequestAtTheSameTime();
    if (isNotMultipleRequest === true) return false;

    let request2String = JSON.stringify(currentRequest);
    if (request2String === this.lastRequestLocation) {
      return true;
    }

    if (Utils.lengthGreaterThan0(this.lastRequestLocation)) {
      let lastLoc = JSON.parse(this.lastRequestLocation);
      let lastLong = parseFloat(lastLoc.longitude).toFixed(3);
      let lastLat = parseFloat(lastLoc.latitude).toFixed(3);
      let currentLong = parseFloat(currentRequest.longitude).toFixed(3);
      let currentLat = parseFloat(currentRequest.latitude).toFixed(3);
      if (
        (lastLong === currentLong)
        && (lastLat === currentLat)
      ) {
        return true;
      }
    }

    this.lastRequestLocation = request2String;
    return false;
  }

  updateRetailer() {
    const body = this._buildRetailerRequest();
    if (this.isTheSameWithLastRequest(body) === true) return;

    this._clearMarkers();
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const service = Where2SpendSharingDataService.getInstance();
    this.retailerSub = this.Where2SpendServices.retriveRetailerLocation(body).subscribe((res) => {
      LoadingIndicatorService.getInstance().hideLoadingIndicator();
      if (res && res.response && res.response.retailers) {
        this.retailers = res.response.retailers;
        this.stores = this.retailers.reduce((allStores, retailer) => {
          const stores = retailer.stores;
          for (let i = 0; i < stores.length; i++) {
            stores[i].retailer = retailer;
            stores[i].addressLine = this._buildAdressLine(stores[i]);
          }
          return allStores.concat(stores);
        }, []);

        if (Where2SpendSharingDataService.getInstance().categories == null) {
          this.updateCategory();
        }

        this.updateStoreToMap();
        this.updateYouAreHere(this.location);
      }
    }, (error) => {
      LoadingIndicatorService.getInstance().hideLoadingIndicator();
    }, () => {
      LoadingIndicatorService.getInstance().hideLoadingIndicator();
    })
  }

  updateStoreToMap() {
    for (let store of this.stores) {
      const marker = this._buildMarkerFromStore(store);
      this._buildMarkerEvent(marker);
      this._markers.push(marker);
      marker.setMap(this.map);
    }
  }

  private _caculateMapHeight() {
    // let mapEl: HTMLElement = document.getElementById('map');
    // if(mapEl) {
    //   mapEl.setAttribute('style', `height: ${window.innerHeight - mapEl.offsetTop}px`);
    //   if(this.map){
    //     google.maps.event.trigger(this.map, 'resize');
    //   }
    // }
  }

  private _buildMarkerFromStore(store) {
    const option = {
      position: {
        lat: store.latitude,
        lng: store.longitude
      },
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      title: '',
      label: '',
      draggable: false
    };
    const marker = new google.maps.Marker(option);
    marker.store = store;
    return marker;
  }

  private _buildMarkerEvent(marker) {
    google.maps.event.addListener(marker, 'click', () => {
      this._closeInfoWindow();
      this._showMarkerInfoWindow(marker);
    })
  }

  checkLocationAuthorized(): Observable<boolean> {
    if (this.platform.is('ios')) {
      return Observable.of(true);
    }
    const promise = this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.ACCESS_FINE_LOCATION).then(status => {
      if (status === this.diagnostic.permissionStatus.GRANTED ||
        status === this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE ||
        status === this.diagnostic.permissionStatus.NOT_REQUESTED) {
        return true;
      }
      return false;
    });
    return Observable.fromPromise(promise);
  }

  private _showMarkerInfoWindow(marker) {
    const content = this._buildInfoWindowContent(marker);
    const infowindow = new google.maps.InfoWindow({
      content: content
    });
    infowindow.store = marker.store;
    this._buildInfoWindowEvent(infowindow);
    this.infowindow = infowindow;
    this.infowindow.open(this.map, marker);
  }

  private _buildInfoWindowEvent(infowindow) {
    google.maps.event.addListener(infowindow, 'domready', () => {
      const infowindowEl = document.querySelector('.gm-style-iw');
      if (infowindowEl && infowindowEl.nextElementSibling) {
        const nextDiv = infowindowEl.nextElementSibling.setAttribute('style', 'display: none;');
        const img = infowindowEl.nextElementSibling.querySelector('img');
        if (img) {
          img.setAttribute('style', 'display: none');
        }
      }
      if (infowindowEl && infowindowEl.parentElement) {
        infowindowEl.parentElement.addEventListener('click', () => {
          this.alertCurrentStore();
        }, false);
      }
    });
  }

  private _closeInfoWindow() {
    if (!this.infowindow) {
      return;
    }

    this.infowindow.close();
  }

  private _buildInfoWindowContent(marker) {
    let label = '';
    if (marker && marker.store && marker.store.retailer && marker.store.retailer.name) {
      label = marker.store.retailer.name;
    }

    return `<div class="l2s-alert-store l2s-map-infowindow-label">
              <span class="label">
                ${label}
              </span>
              <span class="icon">
                <img class="icon" src="assets/icon/info.png"/>
              </span>
            </div>`;
  }

  private _clearMarkers() {
    for (let marker of this._markers) {
      marker.setMap(null);
    }

    this._markers = [];
  }

  private _gotoListPage() {
    this.keepBackToYourCard = true;
    this.navSvc.getRootNav().push("Where2SpendInStoreListPage");
  }

  private _showError(message) {
    ToastMessageService.getInstance().showToastMessage(message);
  }

  private _buildAdressLine(store) {
    return store.addressLine1;
  }

  private gotoLocationStoresPage() {

    this.keepBackToYourCard = true;
    this.navCtrl.push('LocationStoresPage');
  }

  private _buildCategoryRequest() {
    const loc = this._selectLatLng(this.location);
    const scheme = (this.card && this.card.scheme) ? this.card.scheme : undefined;
    const type = CARD_INSTORE;
    const req: RetriveRetailerRequest = {
      requestType: type,
      scheme: scheme,
      latitude: '' + loc.lat,
      longitude: '' + loc.lng
    }

    return req;
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

  private _resetData() {
    this.stores = [];
    this._clearMarkers();
  }

  private _updateData() {
    this.location = Where2SpendSharingDataService.getInstance().currenrLocation;
    this.categories = Where2SpendSharingDataService.getInstance().categories;
    this.gpsAvailable = Where2SpendSharingDataService.getInstance().gpsStatus;
    this.stores = [];

    if (this.location) {
      const loc = this._selectLatLng(this.location);
      if (this._mapLoadded) {
        this._clearMarkers();
        this.updateMap(loc);
        this.updateRetailer();
      } else {
        this.loadMap(loc);
      }
    }
  }

  private _selectLatLng(location) {
    if (!location || !location.coords) {
      return app.Configuration.Where2SpendInStoreMap.defaultLocation;
    }
    return {
      lat: location.coords.latitude,
      lng: location.coords.longitude
    }
  }

  private _handleGeoError(error) {
    let alert = this.alertCtrl.create({
      title: 'GPS NOT AVAILABLE',
      message: app.Configuration.Where2SpendInStoreMap.GPS_ERROR_MSG,
      cssClass: 'l2s-alert--flat l2s-alert--twobutton',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'cancel-button',
          handler: () => {
            this._gotoListPage();
          }
        },
        {
          text: 'Go To Setting',
          cssClass: 'main-button',
          handler: () => {
            this.gotoListPage();
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

  private _checkGPSEnabled(): Observable<any> {
    if (this.viewCtrl.component.name !== "Where2SpendInStoreMapPage") return;

    if (this._isMobilePlatform()) {
      if (this.platform.is('ios')) {
        return Observable.of(true);
      }
      return this._checkDeviceGPSEnabled();
    }

    return this._checkHtmlGeoEnabled();
  }

  private _checkHtmlGeoEnabled() {
    return Observable.of(true);
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
