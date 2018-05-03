webpackJsonp([2],{

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationStoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_nav_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var defaultLocation = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.Where2SpendInStoreMap.defaultLocation;
var GPS_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.Where2SpendInStoreMap.GPS_ERROR_MSG;
var LocationStoresPage = (function () {
    function LocationStoresPage(http, platform, diagnostic, geolocation, locationAccuracy, routeManager, navParams, navCtrl, alertCtrl, navSvc, where2SpendDataService) {
        var _this = this;
        this.http = http;
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.routeManager = routeManager;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navSvc = navSvc;
        this.where2SpendDataService = where2SpendDataService;
        this.enter_postcode_or_search_for_an_address = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.enter_postcode_or_search_for_an_address;
        this.use_current_location = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.use_current_location;
        this.keyPCA = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.LocationService.PCA_KEY;
        this.showList = false;
        this.listAddressItems = [];
        this.address = '';
        this.suggestSearch$ = new __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["Subject"]();
        this.options = {};
        this.txtPostCode = "";
        this.model = {
            addressLine1: '',
            addressLine2: '',
            town: '',
            county: '',
            postcode: '',
            telephoneNumber: '',
            country: '',
        };
        this.countryLists = [
            {
                countryId: "UK",
                countryName: "United Kingdom"
            }
        ];
        this.selectedAddress = "";
        this.searchStream = this.suggestSearch$
            .asObservable()
            .debounceTime(250)
            .switchMap(function (keyword) {
            var term = '';
            var lastId = undefined;
            if (typeof keyword === 'string') {
                term = keyword;
            }
            else if (typeof keyword === 'object') {
                term = keyword['keyword'];
                lastId = keyword['lastId'];
            }
            return _this.getItems(term, lastId);
        }, function (outerValue, innerValue) { return ({
            keywordPostcode: outerValue,
            response: innerValue
        }); })
            .filter(function (x) { return !!(x.response); });
    }
    LocationStoresPage.prototype.search = function (event) {
        this.canApply = false;
        var keyword = event.target.value;
        this.suggestSearch$.next(keyword);
    };
    LocationStoresPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.from = null;
        this.address = '';
        __WEBPACK_IMPORTED_MODULE_14_jquery___default()('.app-root').addClass('not-show-tab');
        if (this.navParams.get('from')) {
            this.from = this.navParams.get('from');
        }
        this.searchSub = this.searchStream.subscribe(function (res) { return _this.responseHandler(res); });
    };
    LocationStoresPage.prototype.ionViewDidEnter = function () {
    };
    LocationStoresPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_14_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    LocationStoresPage.prototype.ionViewDidLeave = function () {
        this.searchSub && this.searchSub.unsubscribe();
    };
    LocationStoresPage.prototype.responseHandler = function (res) {
        var response = res.response, keywordPostcode = res.keywordPostcode;
        this.listAddressItems = response.Items || [];
        this.showList = true;
        if (this.listAddressItems.length === 1 && __WEBPACK_IMPORTED_MODULE_15__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.listAddressItems[0].Error)) {
            this.listAddressItems[0].Text = "No results found.";
        }
        if (this.listAddressItems.length <= 0) {
            this.listAddressItems.push({
                Text: "No results found."
            });
        }
    };
    LocationStoresPage.prototype.formatLocationAddress = function (item) {
        if (__WEBPACK_IMPORTED_MODULE_15__framework_services_utilities_utilities__["a" /* Utils */].lengthGreaterThan0(item.Description)) {
            return item.Text + " " + item.Description;
        }
        else {
            return item.Text;
        }
    };
    LocationStoresPage.prototype.getItems = function (keywordPostcode, lastId) {
        if (lastId === void 0) { lastId = 'GBR|'; }
        // if the value is an empty string don't filter the items
        if (keywordPostcode && keywordPostcode.trim() != '' && keywordPostcode.trim().length > 2) {
            var url = 'https://services.postcodeanywhere.co.uk/CapturePlus/Interactive/Find/v2.10/json3.ws?'
                + 'Key=' + this.keyPCA
                + '&Country=GBR'
                + '&SearchTerm=' + encodeURI(keywordPostcode)
                + '&LanguagePreference=EN'
                + '&LastId=' + encodeURI(lastId)
                + '&SearchFor=Everything'
                + '&MaxSuggestions=10'
                + '&MaxResults=';
            return this.http.getExternal(url);
        }
        else {
            // hide the results when the query is empty
            this.showList = false;
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(null);
        }
    };
    LocationStoresPage.prototype.goToMapPage = function () {
        var _this = this;
        if (this._locationSub) {
            this._locationSub.unsubscribe();
        }
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this._locationSub = this._checkGPSEnabled()
            .do(function (status) {
            if (!status) {
                throw new Error(GPS_ERROR_MSG);
            }
        }).flatMap(function () { return _this._getGpsLocation(); })
            .subscribe(function (location) {
            __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().currenrLocation = location;
            __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus = true;
            __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().refreshCategory = true;
            __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().useMyLocation = true;
            __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepLocation = false;
            _this.navCtrl.pop().then(function () { });
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            __WEBPACK_IMPORTED_MODULE_12__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(GPS_ERROR_MSG);
            if (error && error.code === 1) {
                __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus = false;
            }
        });
    };
    LocationStoresPage.prototype.requestLocation = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function (result) {
                    __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus = true;
                }, function (error) {
                    __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus = false;
                    __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                });
            }
        });
    };
    LocationStoresPage.prototype.apply = function () {
        var _this = this;
        this.getLocationFormPostCode(this.model.postcode).subscribe(function (res) {
            var service = __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance();
            service.keepLocation = true;
            service.refreshCategory = true;
            service.useMyLocation = false;
            __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().pickupAddress = _this.selectedAddress;
            var coords = {
                latitude: parseFloat(res.result.latitude),
                longitude: parseFloat(res.result.longitude)
            };
            service.currenrLocation = { coords: coords };
            service.categories = null;
            _this.navCtrl.pop().then(function () {
            });
        });
    };
    LocationStoresPage.prototype.pickupAddress = function (item) {
        var _this = this;
        this.selectedAddress = item.Text;
        if (item && item.Next && item.Next.toLowerCase() === 'find') {
            this.suggestSearch$.next({
                keyword: item.Text,
                lastId: item.Id
            });
            return;
        }
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var url = 'https://services.postcodeanywhere.co.uk/CapturePlus/Interactive/Retrieve/v2.10/json3.ws?'
            + 'Key=' + this.keyPCA
            + '&Id=' + item.Id;
        this.http.getExternal(url)
            .subscribe(function (response) {
            var addressItem = response.Items[0];
            if (addressItem && !addressItem.Error) {
                _this.model = {
                    addressLine1: addressItem.Line1,
                    addressLine2: addressItem.Line2,
                    town: addressItem.City,
                    county: addressItem.ProvinceName || addressItem.Province || '',
                    postcode: addressItem.PostalCode,
                    country: _this.countryLists[0].countryName,
                    label: _this.prettify(addressItem.Label),
                    telephoneNumber: ''
                };
                _this.txtPostCode = _this.prettify(addressItem.Label);
                _this.canApply = true;
                _this.showList = false;
            }
            else {
                _this.canApply = false;
            }
        }, function () {
            __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    LocationStoresPage.prototype.prettify = function (str) {
        if (typeof str !== 'string') {
            return '';
        }
        return str.replace(/\n/g, ', ').replace(/↵/g, ', ');
    };
    LocationStoresPage.prototype.getLocationFormPostCode = function (code) {
        return this.http.getExternal('http://api.postcodes.io/postcodes/' + code);
    };
    LocationStoresPage.prototype.getAddress = function (place) {
        var location = this._getLocationFromPlace(place);
        if (location) {
            __WEBPACK_IMPORTED_MODULE_5__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().currenrLocation = location;
        }
    };
    LocationStoresPage.prototype._getLocationFromPlace = function (place) {
        return place && place.geometry && place.geometry.location && {
            coords: {
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
            }
        };
    };
    LocationStoresPage.prototype._handleGeoError = function (error) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'GPS NOT AVAILABLE',
            message: GPS_ERROR_MSG,
            cssClass: 'l2s-alert--flat l2s-alert--twobutton',
            buttons: [
                {
                    text: 'Cancel',
                    cssClass: 'cancel-button',
                    handler: function () {
                    }
                },
                {
                    text: 'Go To Setting',
                    cssClass: 'main-button',
                    handler: function () {
                        _this._gotoLocationSetting();
                    }
                }, {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    LocationStoresPage.prototype._checkGPSEnabled = function () {
        if (this._isMobilePlatform()) {
            if (this.platform.is('ios')) {
                return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(true);
            }
            return this._checkDeviceGPSEnabled();
        }
        return this._checkHtmlGeoEnabled();
    };
    LocationStoresPage.prototype._checkHtmlGeoEnabled = function () {
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(true);
    };
    LocationStoresPage.prototype._checkDeviceGPSEnabled = function () {
        var promise = this.diagnostic.isGpsLocationEnabled().then(function (state) {
            return state;
        });
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    LocationStoresPage.prototype._getHtmlLocation = function () {
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (observer) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (state) {
                    observer.next(state);
                }, function (error) {
                    observer.error(error);
                });
            }
            else {
                // HTML Geo API not supported
                var error = new Error("HTML Geo API not supported.");
                observer.error(error);
            }
        });
    };
    LocationStoresPage.prototype._isMobilePlatform = function () {
        return !!window && !!window.hasOwnProperty('cordova');
    };
    LocationStoresPage.prototype._getGpsLocation = function () {
        if (this._isMobilePlatform()) {
            return this._getDeviceGpsLocation();
        }
        return this._getHtmlLocation();
    };
    LocationStoresPage.prototype._getDeviceGpsLocation = function () {
        var promise = this.geolocation.getCurrentPosition().then(function (state) {
            return state;
        });
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    LocationStoresPage.prototype._gotoLocationSetting = function () {
        if (this._isMobilePlatform()) {
            if (this.platform.is('ios')) {
                this.diagnostic.switchToSettings();
            }
            else {
                this.diagnostic.switchToLocationSettings();
            }
        }
    };
    LocationStoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-locationStores',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\locationStores\locationStores.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title item-centered>\n      Edit Location\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row class="top-row" (click)="goToMapPage()">\n      <ion-item>\n        <ion-label>\n          <ion-icon name="md-locate"></ion-icon>\n          <span> {{use_current_location}}</span>\n        </ion-label>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-col class="or" padding text-center>\n        <p class="no-margin or">OR</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class="lookup-address">\n      <ion-col class="location-row">\n        <ion-item>\n          <ion-input search [ngModel]="txtPostCode" (input)="search($event)" class="location-input" placeholder="{{enter_postcode_or_search_for_an_address}}"></ion-input>\n        </ion-item>\n        <ion-list padding *ngIf="showList" class="suggestion-address">\n          <ion-item *ngFor="let item of listAddressItems" (click)="pickupAddress(item)">\n            {{ formatLocationAddress(item) }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="footer-wrapper">\n    <ion-row padding>\n      <ion-col>\n        <button [disabled]="!canApply" ion-button large full (click)="apply()">Apply</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="LocationStoresPage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\locationStores\locationStores.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__["d" /* Where2SpendServices */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__framework_services_httpService_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_13__shared_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__["d" /* Where2SpendServices */]])
    ], LocationStoresPage);
    return LocationStoresPage;
}());

//# sourceMappingURL=locationStores.js.map

/***/ }),

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(1024);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/**
 * @module
 * @description
 * Entry point for all public APIs of the async local storage package.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_ng2_google_place_module__ = __webpack_require__(1025);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_ng2_google_place_module__["a"]; });
/**
 * @module
 * @description
 * Entry point for all public APIs of the async local storage package.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglePlaceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_google_place_directive__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng2_google_place_service__ = __webpack_require__(847);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GooglePlaceModule = (function () {
    function GooglePlaceModule() {
    }
    GooglePlaceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ng2_google_place_service__["a" /* GooglePlaceService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ng2_google_place_directive__["a" /* GooglePlaceDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__ng2_google_place_directive__["a" /* GooglePlaceDirective */]]
        })
    ], GooglePlaceModule);
    return GooglePlaceModule;
}());

//# sourceMappingURL=ng2-google-place.module.js.map

/***/ }),

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglePlaceDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_google_place_service__ = __webpack_require__(847);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GooglePlaceDirective = (function () {
    function GooglePlaceDirective(el, service) {
        this.el = el;
        this.service = service;
        this.CountryCodes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.setAddress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.street_number = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.postal_code = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.country = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.lat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.lng = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.adr_address = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.formatted_address = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.name = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.place_id = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.types = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.url = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.utc_offset = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.vicinity = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.photos = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.street = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.city = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.state = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.district = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    GooglePlaceDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.CountryCodes.emit(this.service.countryIsoCode());
        this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
        this.trigger = this.autocomplete.addListener('place_changed', function () {
            _this.place = _this.autocomplete.getPlace();
            if (_this.place && _this.place.place_id) {
                _this.invokeEvent();
            }
        });
    };
    GooglePlaceDirective.prototype.invokeEvent = function () {
        this.setAddress.emit(this.place);
        this.street_number.emit(this.service.street_number(this.place.address_components) ? this.service.street_number(this.place.address_components) : null);
        this.street.emit(this.service.street(this.place.address_components) ? this.service.street(this.place.address_components) : null);
        this.city.emit(this.service.city(this.place.address_components) ? this.service.city(this.place.address_components) : null);
        this.state.emit(this.service.state(this.place.address_components) ? this.service.state(this.place.address_components) : null);
        this.country.emit(this.service.country(this.place.address_components) ? this.service.country(this.place.address_components) : null);
        this.postal_code.emit(this.service.postal_code(this.place.address_components) ? this.service.postal_code(this.place.address_components) : null);
        this.district.emit(this.service.administrative_area_level_2(this.place.address_components) ? this.service.administrative_area_level_2(this.place.address_components) : null);
        this.lat.emit(this.place.geometry.location.lat() ? this.place.geometry.location.lat() : null);
        this.lng.emit(this.place.geometry.location.lng() ? this.place.geometry.location.lng() : null);
        this.adr_address.emit(this.place.adr_address ? this.place.adr_address : null);
        this.formatted_address.emit(this.place.formatted_address ? this.place.formatted_address : null);
        this.name.emit(this.place.name ? this.place.name : null);
        this.place_id.emit(this.place.place_id ? this.place.place_id : null);
        this.types.emit(this.place.types ? this.place.types : null);
        this.url.emit(this.place.url ? this.place.url : null);
        this.utc_offset.emit(this.place.utc_offset ? this.place.utc_offset : null);
        this.vicinity.emit(this.place.vicinity ? this.place.vicinity : null);
        this.photos.emit(this.place.photos ? this.place.photos : null);
        /*
       DEPRECATED SINCE 2014
       this.place.id
       reference
       */
        /*
        NOT USED YET
    
        this.intersection.emit(this.service.intersection(this.place.address_components) ? this.service.intersection(this.place.address_components) : null)
        this.political.emit(this.service.political(this.place.address_components) ? this.service.political(this.place.address_components) : null)
        this.colloquial_area.emit(this.service.colloquial_area(this.place.address_components) ? this.service.colloquial_area(this.place.address_components) : null)
        
        this.ward.emit(this.service.ward(this.place.address_components) ? this.service.ward(this.place.address_components) : null)
        
        this.administrative_area_level_3.emit(this.service.administrative_area_level_3(this.place.address_components) ? this.service.administrative_area_level_3(this.place.address_components) : null)
        this.administrative_area_level_4.emit(this.service.administrative_area_level_4(this.place.address_components) ? this.service.administrative_area_level_4(this.place.address_components) : null)
        this.administrative_area_level_5.emit(this.service.administrative_area_level_5(this.place.address_components) ? this.service.administrative_area_level_5(this.place.address_components) : null)
        
        this.sublocality.emit(this.service.sublocality(this.place.address_components) ? this.service.sublocality(this.place.address_components) : null)
        this.sublocality_level_1.emit(this.service.sublocality_level_1(this.place.address_components) ? this.service.sublocality_level_1(this.place.address_components) : null)
        this.sublocality_level_2.emit(this.service.sublocality_level_2(this.place.address_components) ? this.service.sublocality_level_2(this.place.address_components) : null)
        this.sublocality_level_3.emit(this.service.sublocality_level_3(this.place.address_components) ? this.service.sublocality_level_3(this.place.address_components) : null)
        this.sublocality_level_4.emit(this.service.sublocality_level_4(this.place.address_components) ? this.service.sublocality_level_4(this.place.address_components) : null)
        this.sublocality_level_5.emit(this.service.sublocality_level_5(this.place.address_components) ? this.service.sublocality_level_5(this.place.address_components) : null)
        
        this.neighborhood.emit(this.service.neighborhood(this.place.address_components) ? this.service.neighborhood(this.place.address_components) : null)
        this.premise.emit(this.service.premise(this.place.address_components) ? this.service.premise(this.place.address_components) : null)
        this.subpremise.emit(this.service.subpremise(this.place.address_components) ? this.service.subpremise(this.place.address_components) : null)
        this.natural_feature.emit(this.service.natural_feature(this.place.address_components) ? this.service.natural_feature(this.place.address_components) : null)
        this.airport.emit(this.service.airport(this.place.address_components) ? this.service.airport(this.place.address_components) : null)
        this.park.emit(this.service.park(this.place.address_components) ? this.service.park(this.place.address_components) : null)
        this.point_of_interest.emit(this.service.point_of_interest(this.place.address_components) ? this.service.point_of_interest(this.place.address_components) : null)
        this.floor.emit(this.service.floor(this.place.address_components) ? this.service.floor(this.place.address_components) : null)
        this.establishment.emit(this.service.establishment(this.place.address_components) ? this.service.establishment(this.place.address_components) : null)
        this.parking.emit(this.service.parking(this.place.address_components) ? this.service.parking(this.place.address_components) : null)
        this.post_box.emit(this.service.post_box(this.place.address_components) ? this.service.post_box(this.place.address_components) : null)
        this.postal_town.emit(this.service.postal_town(this.place.address_components) ? this.service.postal_town(this.place.address_components) : null)
        this.room.emit(this.service.room(this.place.address_components) ? this.service.room(this.place.address_components) : null)
        this.bus_station.emit(this.service.bus_station(this.place.address_components) ? this.service.bus_station(this.place.address_components) : null)
        this.train_station.emit(this.service.train_station(this.place.address_components) ? this.service.train_station(this.place.address_components) : null)
        this.transit_station.emit(this.service.transit_station(this.place.address_components) ? this.service.transit_station(this.place.address_components) : null)
        */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('options'),
        __metadata("design:type", Object)
    ], GooglePlaceDirective.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "CountryCodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "setAddress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "street_number", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "postal_code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "country", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "lat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "lng", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "adr_address", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "formatted_address", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "place_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "types", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "utc_offset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "vicinity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "photos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "street", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "city", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "state", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GooglePlaceDirective.prototype, "district", void 0);
    GooglePlaceDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[ng2-google-place-autocomplete]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__ng2_google_place_service__["a" /* GooglePlaceService */]])
    ], GooglePlaceDirective);
    return GooglePlaceDirective;
}());

//# sourceMappingURL=ng2-google-place.directive.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationStoresPageModule", function() { return LocationStoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locationStores__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_ng2_google_place_autocomplete_index__ = __webpack_require__(1023);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LocationStoresPageModule = (function () {
    function LocationStoresPageModule() {
    }
    LocationStoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__locationStores__["a" /* LocationStoresPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__locationStores__["a" /* LocationStoresPage */]), __WEBPACK_IMPORTED_MODULE_3__libs_ng2_google_place_autocomplete_index__["a" /* GooglePlaceModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__locationStores__["a" /* LocationStoresPage */]]
        })
    ], LocationStoresPageModule);
    return LocationStoresPageModule;
}());

//# sourceMappingURL=locationStores.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Where2SpendSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var Where2SpendSharingDataService = (function () {
    function Where2SpendSharingDataService() {
        this.needBackToYOurCardDetail = false;
        this.updateEvent$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(Where2SpendSharingDataService.prototype, "needBackToYOurCard", {
        get: function () {
            return this.needBackToYOurCardDetail;
        },
        set: function (status) {
            this.needBackToYOurCardDetail = status;
        },
        enumerable: true,
        configurable: true
    });
    Where2SpendSharingDataService.prototype.resetState = function () {
        this.categories = null;
        this.selectedCard = null;
        this.useMyLocation = true;
        this.currenrLocation = false;
        this.keepLocation = false;
        this.keepData = false;
        this.refreshCategory = false;
        this.gpsStatus = false;
        this.needBackToYOurCardDetail = false;
    };
    Where2SpendSharingDataService.getInstance = function () {
        if (!Where2SpendSharingDataService._instance) {
            Where2SpendSharingDataService._instance = new Where2SpendSharingDataService();
        }
        return Where2SpendSharingDataService._instance;
    };
    return Where2SpendSharingDataService;
}());

//# sourceMappingURL=where2SpendSharingData.services.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARD_INSTORE; });
/* unused harmony export VOUCHER_INSTORE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ONLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VIRTUAL_MASTERCARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Where2SpendServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CARD_INSTORE = 'CARD_INSTORE';
var VOUCHER_INSTORE = 'VOUCHER_INSTORE';
var ONLINE = 'ONLINE';
var VIRTUAL_MASTERCARD = 'VIRTUAL_MASTERCARD';
var Where2SpendServices = (function () {
    function Where2SpendServices(http) {
        this.http = http;
    }
    Where2SpendServices.prototype.retriveRetailerLocation = function (body) {
        return this.http.post('card/where', body).share();
    };
    Where2SpendServices.prototype.searchPostcodeAutoComplete = function (url) {
        return this.http.getExternal(url);
    };
    Where2SpendServices.prototype.lookUpAddress = function (url) {
        return this.http.getExternal(url);
    };
    Where2SpendServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], Where2SpendServices);
    return Where2SpendServices;
}());

//# sourceMappingURL=where2Spend.services.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagnostic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 *
 * @usage
 * ```typescript
 * import { Diagnostic } from '@ionic-native/diagnostic';
 *
 * constructor(private diagnostic: Diagnostic) { }
 *
 * ...
 *
 * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
 * let errorCallback = (e) => console.error(e);
 *
 * this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
 *
 * this.diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);
 *
 *
 * this.diagnostic.getBluetoothState()
 *   .then((state) => {
 *     if (state == this.diagnostic.bluetoothState.POWERED_ON){
 *       // do something
 *     } else {
 *       // do something else
 *     }
 *   }).catch(e => console.error(e));
 *
 * ```
 *
 */
var Diagnostic = (function (_super) {
    __extends(Diagnostic, _super);
    function Diagnostic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.permission = {
            READ_CALENDAR: 'READ_CALENDAR',
            WRITE_CALENDAR: 'WRITE_CALENDAR',
            CAMERA: 'CAMERA',
            READ_CONTACTS: 'READ_CONTACTS',
            WRITE_CONTACTS: 'WRITE_CONTACTS',
            GET_ACCOUNTS: 'GET_ACCOUNTS',
            ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
            ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
            RECORD_AUDIO: 'RECORD_AUDIO',
            READ_PHONE_STATE: 'READ_PHONE_STATE',
            CALL_PHONE: 'CALL_PHONE',
            ADD_VOICEMAIL: 'ADD_VOICEMAIL',
            USE_SIP: 'USE_SIP',
            PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
            READ_CALL_LOG: 'READ_CALL_LOG',
            WRITE_CALL_LOG: 'WRITE_CALL_LOG',
            SEND_SMS: 'SEND_SMS',
            RECEIVE_SMS: 'RECEIVE_SMS',
            READ_SMS: 'READ_SMS',
            RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
            RECEIVE_MMS: 'RECEIVE_MMS',
            WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
            READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
            BODY_SENSORS: 'BODY_SENSORS'
        };
        _this.locationAuthorizationMode = {
            ALWAYS: 'always',
            WHEN_IN_USE: 'when_in_use'
        };
        _this.permissionGroups = {
            CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
            CAMERA: ['CAMERA'],
            CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
            LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
            MICROPHONE: ['RECORD_AUDIO'],
            PHONE: ['READ_PHONE_STATE', 'CALL_PHONE', 'ADD_VOICEMAIL', 'USE_SIP', 'PROCESS_OUTGOING_CALLS', 'READ_CALL_LOG', 'WRITE_CALL_LOG'],
            SENSORS: ['BODY_SENSORS'],
            SMS: ['SEND_SMS', 'RECEIVE_SMS', 'READ_SMS', 'RECEIVE_WAP_PUSH', 'RECEIVE_MMS'],
            STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE']
        };
        _this.locationMode = {
            HIGH_ACCURACY: 'high_accuracy',
            DEVICE_ONLY: 'device_only',
            BATTERY_SAVING: 'battery_saving',
            LOCATION_OFF: 'location_off'
        };
        _this.bluetoothState = {
            UNKNOWN: 'unknown',
            RESETTING: 'resetting',
            UNSUPPORTED: 'unsupported',
            UNAUTHORIZED: 'unauthorized',
            POWERED_OFF: 'powered_off',
            POWERED_ON: 'powered_on',
            POWERING_OFF: 'powering_off',
            POWERING_ON: 'powering_on'
        };
        return _this;
    }
    /**
     * Checks if app is able to access device location.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isLocationAvailable = function () { return; };
    /**
     * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
     * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isWifiAvailable = function () { return; };
    /**
     * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
     * application is authorized to use it.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isCameraAvailable = function (externalStorage) { return; };
    /**
     * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
     * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isBluetoothAvailable = function () { return; };
    /**
     * Displays the device location settings to allow user to enable location services/change location mode.
     */
    Diagnostic.prototype.switchToLocationSettings = function () { };
    /**
     * Displays mobile settings to allow user to enable mobile data.
     */
    Diagnostic.prototype.switchToMobileDataSettings = function () { };
    /**
     * Displays Bluetooth settings to allow user to enable Bluetooth.
     */
    Diagnostic.prototype.switchToBluetoothSettings = function () { };
    /**
     * Displays WiFi settings to allow user to enable WiFi.
     */
    Diagnostic.prototype.switchToWifiSettings = function () { };
    /**
     * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isWifiEnabled = function () { return; };
    /**
     * Enables/disables WiFi on the device.
     * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
     * @param state {boolean}
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.setWifiState = function (state) { return; };
    /**
     * Enables/disables Bluetooth on the device.
     * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
     * @param state {boolean}
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.setBluetoothState = function (state) { return; };
    // ANDROID AND IOS ONLY
    /**
     * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isLocationEnabled = function () { return; };
    /**
     * Checks if the application is authorized to use location.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isLocationAuthorized = function () { return; };
    /**
     * Returns the location authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getLocationAuthorizationStatus = function () { return; };
    /**
     * Returns the location authorization status for the application.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     *
     * @param {string} [mode] iOS only: location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestLocationAuthorization = function (mode) { return; };
    /**
     * Checks if camera hardware is present on device.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isCameraPresent = function () { return; };
    /**
     * Checks if the application is authorized to use the camera.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isCameraAuthorized = function (externalStorage) { return; };
    /**
     * Returns the camera authorization status for the application.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getCameraAuthorizationStatus = function (externalStorage) { return; };
    /**
     * Requests camera authorization for the application.
     * @param {boolean} [externalStorage] Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestCameraAuthorization = function (externalStorage) { return; };
    /**
     * Checks if the application is authorized to use the microphone.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isMicrophoneAuthorized = function () { return; };
    /**
     * Returns the microphone authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getMicrophoneAuthorizationStatus = function () { return; };
    /**
     * Requests microphone authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestMicrophoneAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use contacts (address book).
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isContactsAuthorized = function () { return; };
    /**
     * Returns the contacts authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getContactsAuthorizationStatus = function () { return; };
    /**
     * Requests contacts authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestContactsAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use the calendar.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isCalendarAuthorized = function () { return; };
    /**
     * Returns the calendar authorization status for the application.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getCalendarAuthorizationStatus = function () { return; };
    /**
     * Requests calendar authorization for the application.
     *
     * Notes for iOS:
     *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     *   - This requests permission for `READ_CALENDAR` run-time permission
     *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
     *
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestCalendarAuthorization = function () { return; };
    /**
     * Opens settings page for this app.
     * On Android, this opens the "App Info" page in the Settings app.
     * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.switchToSettings = function () { return; };
    /**
     * Returns the state of Bluetooth on the device.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getBluetoothState = function () { return; };
    /**
     * Registers a function to be called when a change in Bluetooth state occurs.
     * @param handler
     */
    Diagnostic.prototype.registerBluetoothStateChangeHandler = function (handler) { };
    /**
     * Registers a function to be called when a change in Location state occurs.
     * @param handler
     */
    Diagnostic.prototype.registerLocationStateChangeHandler = function (handler) { };
    // ANDROID ONLY
    /**
     * Checks if high-accuracy locations are available to the app from GPS hardware.
     * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isGpsLocationAvailable = function () { return; };
    /**
     * Checks if location mode is set to return high-accuracy locations from GPS hardware.
     *   Returns true if Location mode is enabled and is set to either:
     *   - Device only = GPS hardware only (high accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isGpsLocationEnabled = function () { return; };
    /**
     * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isNetworkLocationAvailable = function () { return; };
    /**
     * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to either:
     *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isNetworkLocationEnabled = function () { return; };
    /**
     * Returns the current location mode setting for the device.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getLocationMode = function () { return; };
    /**
     * Returns the current authorisation status for a given permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getPermissionAuthorizationStatus = function (permission) { return; };
    /**
     * Returns the current authorisation status for multiple permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getPermissionsAuthorizationStatus = function (permissions) { return; };
    /**
     * Requests app to be granted authorisation for a runtime permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestRuntimePermission = function (permission) { return; };
    /**
     * Requests app to be granted authorisation for multiple runtime permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestRuntimePermissions = function (permissions) { return; };
    /**
     * Indicates if the plugin is currently requesting a runtime permission via the native API.
     * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
     * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
     * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
     * @returns {boolean}
     */
    Diagnostic.prototype.isRequestingPermission = function () { return; };
    /**
     * Registers a function to be called when a runtime permission request has completed.
     * Pass in a falsey value to de-register the currently registered function.
     * @param handler {Function}
     */
    Diagnostic.prototype.registerPermissionRequestCompleteHandler = function (handler) { return; };
    /**
     * Checks if the device setting for Bluetooth is switched on.
     * This requires `BLUETOOTH` permission on Android
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isBluetoothEnabled = function () { return; };
    /**
     * Checks if the device has Bluetooth capabilities.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.hasBluetoothSupport = function () { return; };
    /**
     * Checks if the device has Bluetooth Low Energy (LE) capabilities.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.hasBluetoothLESupport = function () { return; };
    /**
     * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.hasBluetoothLEPeripheralSupport = function () { return; };
    /**
     * Checks if the application is authorized to use external storage.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isExternalStorageAuthorized = function () { return; };
    /**
     * CReturns the external storage authorization status for the application.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.getExternalStorageAuthorizationStatus = function () { return; };
    /**
     * Requests external storage authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestExternalStorageAuthorization = function () { return; };
    /**
     * Returns details of external SD card(s): absolute path, is writable, free space.
     *
     * The intention of this method is to return the location and details of removable external SD cards.
     * This differs from the "external directories" returned by cordova-plugin-file which return mount points relating to non-removable (internal) storage.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getexternalsdcarddetails)
     *
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getExternalSdCardDetails = function () { return; };
    /**
     * Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.
     */
    Diagnostic.prototype.switchToWirelessSettings = function () { };
    /**
     * Displays NFC settings to allow user to enable NFC.
     */
    Diagnostic.prototype.switchToNFCSettings = function () { };
    /**
     * Checks if NFC hardware is present on device.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isNFCPresent = function () { return; };
    /**
     * Checks if the device setting for NFC is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isNFCEnabled = function () { return; };
    /**
     * Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isNFCAvailable = function () { return; };
    /**
     * Registers a function to be called when a change in NFC state occurs. Pass in a falsey value to de-register the currently registered function.
     * @param hander {Function} callback function to be called when NFC state changes
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.registerNFCStateChangeHandler = function (handler) { };
    // IOS ONLY
    /**
     * Checks if the application is authorized to use the Camera Roll in Photos app.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isCameraRollAuthorized = function () { return; };
    /**
     * Returns the authorization status for the application to use the Camera Roll in Photos app.
     * @returns {Promise<string>}
     */
    Diagnostic.prototype.getCameraRollAuthorizationStatus = function () { return; };
    /**
     * Requests camera roll authorization for the application.
     * Should only be called if authorization status is NOT_REQUESTED.
     * Calling it when in any other state will have no effect.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestCameraRollAuthorization = function () { return; };
    /**
     * Checks if remote (push) notifications are enabled.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isRemoteNotificationsEnabled = function () { return; };
    /**
     * Indicates if the app is registered for remote (push) notifications on the device.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isRegisteredForRemoteNotifications = function () { return; };
    /**
     * Indicates the current setting of notification types for the app in the Settings app.
     * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getRemoteNotificationTypes = function () { return; };
    /**
     * Checks if the application is authorized to use reminders.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isRemindersAuthorized = function () { return; };
    /**
     * Returns the reminders authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getRemindersAuthorizationStatus = function () { return; };
    /**
     * Requests reminders authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestRemindersAuthorization = function () { return; };
    /**
     * Checks if the application is authorized for background refresh.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isBackgroundRefreshAuthorized = function () { return; };
    /**
     * Returns the background refresh authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getBackgroundRefreshStatus = function () { return; };
    /**
     * Requests Bluetooth authorization for the application.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)
     * @return {Promise<any>}
     */
    Diagnostic.prototype.requestBluetoothAuthorization = function () { return; };
    /**
     * Checks if motion tracking is available on the current device.
     * @return {Promise<boolean>}
     */
    Diagnostic.prototype.isMotionAvailable = function () { return; };
    /**
     * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
     * There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
     * therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.
     *
     * @return {Promise<boolean>}
     */
    Diagnostic.prototype.isMotionRequestOutcomeAvailable = function () { return; };
    /**
     * Requests and checks motion authorization for the application: there is no way to independently request only or check only, so both must be done in one operation.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestandcheckmotionauthorization)
     *
     * @return {Promise<any>}
     */
    Diagnostic.prototype.requestAndCheckMotionAuthorization = function () { return; };
    return Diagnostic;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));
Diagnostic.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
Diagnostic.ctorParameters = function () { return []; };
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaProperty */],
    __metadata("design:type", Object)
], Diagnostic.prototype, "permissionStatus", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaProperty */],
    __metadata("design:type", Object)
], Diagnostic.prototype, "NFCState", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isLocationAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isWifiAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isBluetoothAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToLocationSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToMobileDataSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToBluetoothSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToWifiSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isWifiEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "setWifiState", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "setBluetoothState", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isLocationEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isLocationAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getLocationAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestLocationAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraPresent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getCameraAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestCameraAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isMicrophoneAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getMicrophoneAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestMicrophoneAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isContactsAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getContactsAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestContactsAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCalendarAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getCalendarAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestCalendarAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "switchToSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getBluetoothState", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerBluetoothStateChangeHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerLocationStateChangeHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isGpsLocationAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isGpsLocationEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNetworkLocationAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNetworkLocationEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getLocationMode", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getPermissionAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getPermissionsAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestRuntimePermission", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestRuntimePermissions", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Diagnostic.prototype, "isRequestingPermission", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerPermissionRequestCompleteHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isBluetoothEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "hasBluetoothSupport", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "hasBluetoothLESupport", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "hasBluetoothLEPeripheralSupport", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isExternalStorageAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getExternalStorageAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestExternalStorageAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getExternalSdCardDetails", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToWirelessSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToNFCSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNFCPresent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNFCEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNFCAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerNFCStateChangeHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraRollAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getCameraRollAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestCameraRollAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isRemoteNotificationsEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isRegisteredForRemoteNotifications", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getRemoteNotificationTypes", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isRemindersAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getRemindersAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestRemindersAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isBackgroundRefreshAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getBackgroundRefreshStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestBluetoothAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isMotionAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isMotionRequestOutcomeAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestAndCheckMotionAuthorization", null);
Diagnostic = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
        pluginName: 'Diagnostic',
        plugin: 'cordova.plugins.diagnostic',
        pluginRef: 'cordova.plugins.diagnostic',
        repo: 'https://github.com/dpa99c/cordova-diagnostic-plugin',
        platforms: ['Android', 'iOS', 'Windows']
    })
], Diagnostic);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Geolocation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name Geolocation
 * @description
 * This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.
 *
 *  This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.
 *
 * @usage
 *
 * ```typescript
 * import { Geolocation } from '@ionic-native/geolocation';
 *
 * ...
 *
 * constructor(private geolocation: Geolocation) {}
 *
 * ...
 *
 * this.geolocation.getCurrentPosition().then((resp) => {
 *  // resp.coords.latitude
 *  // resp.coords.longitude
 * }).catch((error) => {
 *   console.log('Error getting location', error);
 * });
 *
 * let watch = this.geolocation.watchPosition();
 * watch.subscribe((data) => {
 *  // data can be a set of coordinates, or an error (if an error occurred).
 *  // data.coords.latitude
 *  // data.coords.longitude
 * });
 * ```
 * @interfaces
 * Coordinates
 * Geoposition
 * PositionError
 * GeolocationOptions
 */
var Geolocation = (function (_super) {
    __extends(Geolocation, _super);
    function Geolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the device's current position.
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Promise<Geoposition>} Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
     */
    Geolocation.prototype.getCurrentPosition = function (options) { return; };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.prototype.watchPosition = function (options) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    return Geolocation;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));
Geolocation.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
Geolocation.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Geolocation.prototype, "getCurrentPosition", null);
Geolocation = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
        pluginName: 'Geolocation',
        plugin: 'cordova-plugin-geolocation',
        pluginRef: 'navigator.geolocation',
        repo: 'https://github.com/apache/cordova-plugin-geolocation',
        install: 'ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"',
        installVariables: ['GEOLOCATION_USAGE_DESCRIPTION'],
        platforms: ['Amazon Fire OS', 'Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], Geolocation);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationAccuracy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Location Accuracy
 * @description
 * This Cordova/Phonegap plugin for Android and iOS to request enabling/changing of Location Services by triggering a native dialog from within the app, avoiding the need for the user to leave your app to change location settings manually.
 *
 * @usage
 * ```typescript
 * import { LocationAccuracy } from '@ionic-native/location-accuracy';
 *
 * constructor(private locationAccuracy: LocationAccuracy) { }
 *
 * ...
 *
 * this.locationAccuracy.canRequest().then((canRequest: boolean) => {
 *
 *   if(canRequest) {
 *     // the accuracy option will be ignored by iOS
 *     this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
 *       () => console.log('Request successful'),
 *       error => console.log('Error requesting location permissions', error)
 *     );
 *   }
 *
 * });
 *
 * ```
 */
var LocationAccuracy = (function (_super) {
    __extends(LocationAccuracy, _super);
    function LocationAccuracy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_NO_POWER = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_LOW_POWER = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_SETTINGS_SATISFIED = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_USER_AGREED = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_ALREADY_REQUESTING = -1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACTION = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACCURACY = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_EXCEPTION = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_CANNOT_CHANGE_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_USER_DISAGREED = 4;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
        return _this;
    }
    /**
     * Indicates if you can request accurate location
     * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
     */
    LocationAccuracy.prototype.canRequest = function () { return; };
    /**
     * Indicates if a request is currently in progress
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
     */
    LocationAccuracy.prototype.isRequesting = function () { return; };
    /**
     * Requests accurate location
     * @param accuracy {number} Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
     */
    LocationAccuracy.prototype.request = function (accuracy) { return; };
    return LocationAccuracy;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));
LocationAccuracy.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
LocationAccuracy.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationAccuracy.prototype, "canRequest", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationAccuracy.prototype, "isRequesting", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocationAccuracy.prototype, "request", null);
LocationAccuracy = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
        pluginName: 'LocationAccuracy',
        plugin: 'cordova-plugin-request-location-accuracy',
        pluginRef: 'cordova.plugins.locationAccuracy',
        repo: 'https://github.com/dpa99c/cordova-plugin-request-location-accuracy',
        platforms: ['Android', 'iOS']
    })
], LocationAccuracy);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglePlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GooglePlaceService = (function () {
    function GooglePlaceService() {
    }
    GooglePlaceService.prototype.find = function (address_components, query, val) {
        if (val === void 0) { val = null; }
        for (var _i = 0, address_components_1 = address_components; _i < address_components_1.length; _i++) {
            var attr = address_components_1[_i];
            for (var _a = 0, _b = attr.types; _a < _b.length; _a++) {
                var type = _b[_a];
                if (type == query) {
                    return val ? attr[val] : attr;
                }
            }
        }
        return null;
    };
    GooglePlaceService.prototype.street_number = function (address_components) {
        return this.find(address_components, 'street_number', 'long_name');
    };
    GooglePlaceService.prototype.street = function (address_components) {
        return this.find(address_components, 'route', 'long_name');
    };
    GooglePlaceService.prototype.city = function (address_components) {
        return this.find(address_components, 'locality', 'long_name');
    };
    GooglePlaceService.prototype.state = function (address_components) {
        return this.find(address_components, 'administrative_area_level_1', 'long_name');
    };
    GooglePlaceService.prototype.postal_code = function (address_components) {
        return this.find(address_components, 'postal_code', 'long_name');
    };
    GooglePlaceService.prototype.country = function (address_components) {
        return this.find(address_components, 'country', 'long_name');
    };
    GooglePlaceService.prototype.administrative_area_level_2 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_2', "long_name");
    };
    // MORE NOT USED YET /////
    GooglePlaceService.prototype.intersection = function (address_components) {
        return this.find(address_components, 'intersection');
    };
    GooglePlaceService.prototype.political = function (address_components) {
        return this.find(address_components, 'political');
    };
    GooglePlaceService.prototype.administrative_area_level_3 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_3');
    };
    GooglePlaceService.prototype.administrative_area_level_4 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_4');
    };
    GooglePlaceService.prototype.administrative_area_level_5 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_5');
    };
    GooglePlaceService.prototype.colloquial_area = function (address_components) {
        return this.find(address_components, 'colloquial_area');
    };
    GooglePlaceService.prototype.ward = function (address_components) {
        return this.find(address_components, 'ward');
    };
    GooglePlaceService.prototype.sublocality = function (address_components) {
        return this.find(address_components, 'sublocality');
    };
    GooglePlaceService.prototype.sublocality_level_1 = function (address_components) {
        return this.find(address_components, 'sublocality_level_1');
    };
    GooglePlaceService.prototype.sublocality_level_2 = function (address_components) {
        return this.find(address_components, 'sublocality_level_2');
    };
    GooglePlaceService.prototype.sublocality_level_3 = function (address_components) {
        return this.find(address_components, 'sublocality_level_3');
    };
    GooglePlaceService.prototype.sublocality_level_4 = function (address_components) {
        return this.find(address_components, 'sublocality_level_4');
    };
    GooglePlaceService.prototype.sublocality_level_5 = function (address_components) {
        return this.find(address_components, 'sublocality_level_5');
    };
    GooglePlaceService.prototype.neighborhood = function (address_components) {
        return this.find(address_components, 'neighborhood');
    };
    GooglePlaceService.prototype.premise = function (address_components) {
        return this.find(address_components, 'premise');
    };
    GooglePlaceService.prototype.subpremise = function (address_components) {
        return this.find(address_components, 'subpremise');
    };
    GooglePlaceService.prototype.natural_feature = function (address_components) {
        return this.find(address_components, 'natural_feature');
    };
    GooglePlaceService.prototype.airport = function (address_components) {
        return this.find(address_components, 'airport');
    };
    GooglePlaceService.prototype.park = function (address_components) {
        return this.find(address_components, 'park');
    };
    GooglePlaceService.prototype.point_of_interest = function (address_components) {
        return this.find(address_components, 'point_of_interest');
    };
    GooglePlaceService.prototype.floor = function (address_components) {
        return this.find(address_components, 'floor');
    };
    GooglePlaceService.prototype.establishment = function (address_components) {
        return this.find(address_components, 'establishment');
    };
    GooglePlaceService.prototype.parking = function (address_components) {
        return this.find(address_components, 'parking');
    };
    GooglePlaceService.prototype.post_box = function (address_components) {
        return this.find(address_components, 'post_box');
    };
    GooglePlaceService.prototype.postal_town = function (address_components) {
        return this.find(address_components, 'postal_town');
    };
    GooglePlaceService.prototype.room = function (address_components) {
        return this.find(address_components, 'room');
    };
    GooglePlaceService.prototype.bus_station = function (address_components) {
        return this.find(address_components, 'bus_station');
    };
    GooglePlaceService.prototype.train_station = function (address_components) {
        return this.find(address_components, 'train_station');
    };
    GooglePlaceService.prototype.transit_station = function (address_components) {
        return this.find(address_components, 'transit_station');
    };
    /// return list ISO 3166-1 Alpha-2 country code
    GooglePlaceService.prototype.countryIsoCode = function () {
        return [
            {
                Name: "Afghanistan",
                Code: "AF"
            },
            {
                Name: "Åland Islands",
                Code: "AX"
            },
            {
                Name: "Albania",
                Code: "AL"
            },
            {
                Name: "Algeria",
                Code: "DZ"
            },
            {
                Name: "American Samoa",
                Code: "AS"
            },
            {
                Name: "Andorra",
                Code: "AD"
            },
            {
                Name: "Angola",
                Code: "AO"
            },
            {
                Name: "Anguilla",
                Code: "AI"
            },
            {
                Name: "Antarctica",
                Code: "AQ"
            },
            {
                Name: "Antigua and Barbuda",
                Code: "AG"
            },
            {
                Name: "Argentina",
                Code: "AR"
            },
            {
                Name: "Armenia",
                Code: "AM"
            },
            {
                Name: "Aruba",
                Code: "AW"
            },
            {
                Name: "Australia",
                Code: "AU"
            },
            {
                Name: "Austria",
                Code: "AT"
            },
            {
                Name: "Azerbaijan",
                Code: "AZ"
            },
            {
                Name: "Bahamas",
                Code: "BS"
            },
            {
                Name: "Bahrain",
                Code: "BH"
            },
            {
                Name: "Bangladesh",
                Code: "BD"
            },
            {
                Name: "Barbados",
                Code: "BB"
            },
            {
                Name: "Belarus",
                Code: "BY"
            },
            {
                Name: "Belgium",
                Code: "BE"
            },
            {
                Name: "Belize",
                Code: "BZ"
            },
            {
                Name: "Benin",
                Code: "BJ"
            },
            {
                Name: "Bermuda",
                Code: "BM"
            },
            {
                Name: "Bhutan",
                Code: "BT"
            },
            {
                Name: "Bolivia, Plurinational State of",
                Code: "BO"
            },
            {
                Name: "Bonaire, Sint Eustatius and Saba",
                Code: "BQ"
            },
            {
                Name: "Bosnia and Herzegovina",
                Code: "BA"
            },
            {
                Name: "Botswana",
                Code: "BW"
            },
            {
                Name: "Bouvet Island",
                Code: "BV"
            },
            {
                Name: "Brazil",
                Code: "BR"
            },
            {
                Name: "British Indian Ocean Territory",
                Code: "IO"
            },
            {
                Name: "Brunei Darussalam",
                Code: "BN"
            },
            {
                Name: "Bulgaria",
                Code: "BG"
            },
            {
                Name: "Burkina Faso",
                Code: "BF"
            },
            {
                Name: "Burundi",
                Code: "BI"
            },
            {
                Name: "Cambodia",
                Code: "KH"
            },
            {
                Name: "Cameroon",
                Code: "CM"
            },
            {
                Name: "Canada",
                Code: "CA"
            },
            {
                Name: "Cape Verde",
                Code: "CV"
            },
            {
                Name: "Cayman Islands",
                Code: "KY"
            },
            {
                Name: "Central African Republic",
                Code: "CF"
            },
            {
                Name: "Chad",
                Code: "TD"
            },
            {
                Name: "Chile",
                Code: "CL"
            },
            {
                Name: "China",
                Code: "CN"
            },
            {
                Name: "Christmas Island",
                Code: "CX"
            },
            {
                Name: "Cocos (Keeling) Islands",
                Code: "CC"
            },
            {
                Name: "Colombia",
                Code: "CO"
            },
            {
                Name: "Comoros",
                Code: "KM"
            },
            {
                Name: "Congo",
                Code: "CG"
            },
            {
                Name: "Congo, the Democratic Republic of the",
                Code: "CD"
            },
            {
                Name: "Cook Islands",
                Code: "CK"
            },
            {
                Name: "Costa Rica",
                Code: "CR"
            },
            {
                Name: "Côte d'Ivoire",
                Code: "CI"
            },
            {
                Name: "Croatia",
                Code: "HR"
            },
            {
                Name: "Cuba",
                Code: "CU"
            },
            {
                Name: "Curaçao",
                Code: "CW"
            },
            {
                Name: "Cyprus",
                Code: "CY"
            },
            {
                Name: "Czech Republic",
                Code: "CZ"
            },
            {
                Name: "Denmark",
                Code: "DK"
            },
            {
                Name: "Djibouti",
                Code: "DJ"
            },
            {
                Name: "Dominica",
                Code: "DM"
            },
            {
                Name: "Dominican Republic",
                Code: "DO"
            },
            {
                Name: "Ecuador",
                Code: "EC"
            },
            {
                Name: "Egypt",
                Code: "EG"
            },
            {
                Name: "El Salvador",
                Code: "SV"
            },
            {
                Name: "Equatorial Guinea",
                Code: "GQ"
            },
            {
                Name: "Eritrea",
                Code: "ER"
            },
            {
                Name: "Estonia",
                Code: "EE"
            },
            {
                Name: "Ethiopia",
                Code: "ET"
            },
            {
                Name: "Falkland Islands (Malvinas)",
                Code: "FK"
            },
            {
                Name: "Faroe Islands",
                Code: "FO"
            },
            {
                Name: "Fiji",
                Code: "FJ"
            },
            {
                Name: "Finland",
                Code: "FI"
            },
            {
                Name: "France",
                Code: "FR"
            },
            {
                Name: "French Guiana",
                Code: "GF"
            },
            {
                Name: "French Polynesia",
                Code: "PF"
            },
            {
                Name: "French Southern Territories",
                Code: "TF"
            },
            {
                Name: "Gabon",
                Code: "GA"
            },
            {
                Name: "Gambia",
                Code: "GM"
            },
            {
                Name: "Georgia",
                Code: "GE"
            },
            {
                Name: "Germany",
                Code: "DE"
            },
            {
                Name: "Ghana",
                Code: "GH"
            },
            {
                Name: "Gibraltar",
                Code: "GI"
            },
            {
                Name: "Greece",
                Code: "GR"
            },
            {
                Name: "Greenland",
                Code: "GL"
            },
            {
                Name: "Grenada",
                Code: "GD"
            },
            {
                Name: "Guadeloupe",
                Code: "GP"
            },
            {
                Name: "Guam",
                Code: "GU"
            },
            {
                Name: "Guatemala",
                Code: "GT"
            },
            {
                Name: "Guernsey",
                Code: "GG"
            },
            {
                Name: "Guinea",
                Code: "GN"
            },
            {
                Name: "Guinea-Bissau",
                Code: "GW"
            },
            {
                Name: "Guyana",
                Code: "GY"
            },
            {
                Name: "Haiti",
                Code: "HT"
            },
            {
                Name: "Heard Island and McDonald Islands",
                Code: "HM"
            },
            {
                Name: "Holy See (Vatican City State)",
                Code: "VA"
            },
            {
                Name: "Honduras",
                Code: "HN"
            },
            {
                Name: "Hong Kong",
                Code: "HK"
            },
            {
                Name: "Hungary",
                Code: "HU"
            },
            {
                Name: "Iceland",
                Code: "IS"
            },
            {
                Name: "India",
                Code: "IN"
            },
            {
                Name: "Indonesia",
                Code: "ID"
            },
            {
                Name: "Iran, Islamic Republic of",
                Code: "IR"
            },
            {
                Name: "Iraq",
                Code: "IQ"
            },
            {
                Name: "Ireland",
                Code: "IE"
            },
            {
                Name: "Isle of Man",
                Code: "IM"
            },
            {
                Name: "Israel",
                Code: "IL"
            },
            {
                Name: "Italy",
                Code: "IT"
            },
            {
                Name: "Jamaica",
                Code: "JM"
            },
            {
                Name: "Japan",
                Code: "JP"
            },
            {
                Name: "Jersey",
                Code: "JE"
            },
            {
                Name: "Jordan",
                Code: "JO"
            },
            {
                Name: "Kazakhstan",
                Code: "KZ"
            },
            {
                Name: "Kenya",
                Code: "KE"
            },
            {
                Name: "Kiribati",
                Code: "KI"
            },
            {
                Name: "Korea, Democratic People's Republic of",
                Code: "KP"
            },
            {
                Name: "Korea, Republic of",
                Code: "KR"
            },
            {
                Name: "Kuwait",
                Code: "KW"
            },
            {
                Name: "Kyrgyzstan",
                Code: "KG"
            },
            {
                Name: "Lao People's Democratic Republic",
                Code: "LA"
            },
            {
                Name: "Latvia",
                Code: "LV"
            },
            {
                Name: "Lebanon",
                Code: "LB"
            },
            {
                Name: "Lesotho",
                Code: "LS"
            },
            {
                Name: "Liberia",
                Code: "LR"
            },
            {
                Name: "Libya",
                Code: "LY"
            },
            {
                Name: "Liechtenstein",
                Code: "LI"
            },
            {
                Name: "Lithuania",
                Code: "LT"
            },
            {
                Name: "Luxembourg",
                Code: "LU"
            },
            {
                Name: "Macao",
                Code: "MO"
            },
            {
                Name: "Macedonia, the Former Yugoslav Republic of",
                Code: "MK"
            },
            {
                Name: "Madagascar",
                Code: "MG"
            },
            {
                Name: "Malawi",
                Code: "MW"
            },
            {
                Name: "Malaysia",
                Code: "MY"
            },
            {
                Name: "Maldives",
                Code: "MV"
            },
            {
                Name: "Mali",
                Code: "ML"
            },
            {
                Name: "Malta",
                Code: "MT"
            },
            {
                Name: "Marshall Islands",
                Code: "MH"
            },
            {
                Name: "Martinique",
                Code: "MQ"
            },
            {
                Name: "Mauritania",
                Code: "MR"
            },
            {
                Name: "Mauritius",
                Code: "MU"
            },
            {
                Name: "Mayotte",
                Code: "YT"
            },
            {
                Name: "Mexico",
                Code: "MX"
            },
            {
                Name: "Micronesia, Federated States of",
                Code: "FM"
            },
            {
                Name: "Moldova, Republic of",
                Code: "MD"
            },
            {
                Name: "Monaco",
                Code: "MC"
            },
            {
                Name: "Mongolia",
                Code: "MN"
            },
            {
                Name: "Montenegro",
                Code: "ME"
            },
            {
                Name: "Montserrat",
                Code: "MS"
            },
            {
                Name: "Morocco",
                Code: "MA"
            },
            {
                Name: "Mozambique",
                Code: "MZ"
            },
            {
                Name: "Myanmar",
                Code: "MM"
            },
            {
                Name: "Namibia",
                Code: "NA"
            },
            {
                Name: "Nauru",
                Code: "NR"
            },
            {
                Name: "Nepal",
                Code: "NP"
            },
            {
                Name: "Netherlands",
                Code: "NL"
            },
            {
                Name: "New Caledonia",
                Code: "NC"
            },
            {
                Name: "New Zealand",
                Code: "NZ"
            },
            {
                Name: "Nicaragua",
                Code: "NI"
            },
            {
                Name: "Niger",
                Code: "NE"
            },
            {
                Name: "Nigeria",
                Code: "NG"
            },
            {
                Name: "Niue",
                Code: "NU"
            },
            {
                Name: "Norfolk Island",
                Code: "NF"
            },
            {
                Name: "Northern Mariana Islands",
                Code: "MP"
            },
            {
                Name: "Norway",
                Code: "NO"
            },
            {
                Name: "Oman",
                Code: "OM"
            },
            {
                Name: "Pakistan",
                Code: "PK"
            },
            {
                Name: "Palau",
                Code: "PW"
            },
            {
                Name: "Palestine, State of",
                Code: "PS"
            },
            {
                Name: "Panama",
                Code: "PA"
            },
            {
                Name: "Papua New Guinea",
                Code: "PG"
            },
            {
                Name: "Paraguay",
                Code: "PY"
            },
            {
                Name: "Peru",
                Code: "PE"
            },
            {
                Name: "Philippines",
                Code: "PH"
            },
            {
                Name: "Pitcairn",
                Code: "PN"
            },
            {
                Name: "Poland",
                Code: "PL"
            },
            {
                Name: "Portugal",
                Code: "PT"
            },
            {
                Name: "Puerto Rico",
                Code: "PR"
            },
            {
                Name: "Qatar",
                Code: "QA"
            },
            {
                Name: "Réunion",
                Code: "RE"
            },
            {
                Name: "Romania",
                Code: "RO"
            },
            {
                Name: "Russian Federation",
                Code: "RU"
            },
            {
                Name: "Rwanda",
                Code: "RW"
            },
            {
                Name: "Saint Barthélemy",
                Code: "BL"
            },
            {
                Name: "Saint Helena, Ascension and Tristan da Cunha",
                Code: "SH"
            },
            {
                Name: "Saint Kitts and Nevis",
                Code: "KN"
            },
            {
                Name: "Saint Lucia",
                Code: "LC"
            },
            {
                Name: "Saint Martin (French part)",
                Code: "MF"
            },
            {
                Name: "Saint Pierre and Miquelon",
                Code: "PM"
            },
            {
                Name: "Saint Vincent and the Grenadines",
                Code: "VC"
            },
            {
                Name: "Samoa",
                Code: "WS"
            },
            {
                Name: "San Marino",
                Code: "SM"
            },
            {
                Name: "Sao Tome and Principe",
                Code: "ST"
            },
            {
                Name: "Saudi Arabia",
                Code: "SA"
            },
            {
                Name: "Senegal",
                Code: "SN"
            },
            {
                Name: "Serbia",
                Code: "RS"
            },
            {
                Name: "Seychelles",
                Code: "SC"
            },
            {
                Name: "Sierra Leone",
                Code: "SL"
            },
            {
                Name: "Singapore",
                Code: "SG"
            },
            {
                Name: "Sint Maarten (Dutch part)",
                Code: "SX"
            },
            {
                Name: "Slovakia",
                Code: "SK"
            },
            {
                Name: "Slovenia",
                Code: "SI"
            },
            {
                Name: "Solomon Islands",
                Code: "SB"
            },
            {
                Name: "Somalia",
                Code: "SO"
            },
            {
                Name: "South Africa",
                Code: "ZA"
            },
            {
                Name: "South Georgia and the South Sandwich Islands",
                Code: "GS"
            },
            {
                Name: "South Sudan",
                Code: "SS"
            },
            {
                Name: "Spain",
                Code: "ES"
            },
            {
                Name: "Sri Lanka",
                Code: "LK"
            },
            {
                Name: "Sudan",
                Code: "SD"
            },
            {
                Name: "Suriname",
                Code: "SR"
            },
            {
                Name: "Svalbard and Jan Mayen",
                Code: "SJ"
            },
            {
                Name: "Swaziland",
                Code: "SZ"
            },
            {
                Name: "Sweden",
                Code: "SE"
            },
            {
                Name: "Switzerland",
                Code: "CH"
            },
            {
                Name: "Syrian Arab Republic",
                Code: "SY"
            },
            {
                Name: "Taiwan, Province of China",
                Code: "TW"
            },
            {
                Name: "Tajikistan",
                Code: "TJ"
            },
            {
                Name: "Tanzania, United Republic of",
                Code: "TZ"
            },
            {
                Name: "Thailand",
                Code: "TH"
            },
            {
                Name: "Timor-Leste",
                Code: "TL"
            },
            {
                Name: "Togo",
                Code: "TG"
            },
            {
                Name: "Tokelau",
                Code: "TK"
            },
            {
                Name: "Tonga",
                Code: "TO"
            },
            {
                Name: "Trinidad and Tobago",
                Code: "TT"
            },
            {
                Name: "Tunisia",
                Code: "TN"
            },
            {
                Name: "Turkey",
                Code: "TR"
            },
            {
                Name: "Turkmenistan",
                Code: "TM"
            },
            {
                Name: "Turks and Caicos Islands",
                Code: "TC"
            },
            {
                Name: "Tuvalu",
                Code: "TV"
            },
            {
                Name: "Uganda",
                Code: "UG"
            },
            {
                Name: "Ukraine",
                Code: "UA"
            },
            {
                Name: "United Arab Emirates",
                Code: "AE"
            },
            {
                Name: "United Kingdom",
                Code: "GB"
            },
            {
                Name: "United States",
                Code: "US"
            },
            {
                Name: "United States Minor Outlying Islands",
                Code: "UM"
            },
            {
                Name: "Uruguay",
                Code: "UY"
            },
            {
                Name: "Uzbekistan",
                Code: "UZ"
            },
            {
                Name: "Vanuatu",
                Code: "VU"
            },
            {
                Name: "Venezuela, Bolivarian Republic of",
                Code: "VE"
            },
            {
                Name: "Viet Nam",
                Code: "VN"
            },
            {
                Name: "Virgin Islands, British",
                Code: "VG"
            },
            {
                Name: "Virgin Islands, U.S.",
                Code: "VI"
            },
            {
                Name: "Wallis and Futuna",
                Code: "WF"
            },
            {
                Name: "Western Sahara",
                Code: "EH"
            },
            {
                Name: "Yemen",
                Code: "YE"
            },
            {
                Name: "Zambia",
                Code: "ZM"
            },
            {
                Name: "Zimbabwe",
                Code: "ZW"
            }
        ];
    };
    // Types options 
    GooglePlaceService.prototype.TypesOptions = function () {
        return [
            '(cities)',
            '(regions)',
            'country',
            'postal_code',
            'sublocality',
            'establishment',
            'address',
            'geocode'
        ];
    };
    GooglePlaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GooglePlaceService);
    return GooglePlaceService;
}());

//# sourceMappingURL=ng2-google-place.service.js.map

/***/ })

});
//# sourceMappingURL=2.js.map