webpackJsonp([26],{

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Where2SpendInStoreListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_nav_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var Where2SpendInStoreListPage = (function () {
    function Where2SpendInStoreListPage(routeManager, navCrtl, viewCtrl, iab, platform, diagnostic, geolocation, navCtrl, navSvc, authService, where2SpendServices) {
        var _this = this;
        this.routeManager = routeManager;
        this.navCrtl = navCrtl;
        this.viewCtrl = viewCtrl;
        this.iab = iab;
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navSvc = navSvc;
        this.authService = authService;
        this.where2SpendServices = where2SpendServices;
        this.gpsAvailable = true;
        this.keepBackToYourCard = false;
        this.imageBaseUrl = 'https://www.love2shop.co.uk';
        __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().updateEvent$.asObservable().subscribe(function () {
            _this.ionViewDidEnter();
        });
    }
    Where2SpendInStoreListPage.prototype.ionViewWillLeave = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance() && !this.keepBackToYourCard) {
            __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail = false;
            this.keepBackToYourCard = false;
            this.navCtrl.popToRoot();
        }
        if (this.resumeSub) {
            this.resumeSub.unsubscribe();
        }
    };
    Where2SpendInStoreListPage.prototype.ionViewDidLoad = function () {
        this.loadInitialData();
    };
    Where2SpendInStoreListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.categoryAvailable = true;
        var service = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance();
        this.card = service.selectedCard;
        this.isLogin = !!localStorage.getItem('token');
        this.gpsAvailable = service.gpsStatus;
        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepData) {
            __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepData = false;
            return;
        }
        this.location = service.currenrLocation;
        this.categories = service.categories;
        this.gpsAvailable = service.gpsStatus;
        this._resetData();
        if (this.location) {
            this._updateData();
        }
        this.resumeSub = this.platform.resume.subscribe(function () {
            _this._checkGPSEnabled().subscribe(function (status) {
                _this._checkGPSEnabled().subscribe(function (status) {
                    if (!status) {
                    }
                    else {
                        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().useMyLocation) {
                            _this._getGpsLocation().subscribe(function (location) {
                                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().currenrLocation = location;
                                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories = null;
                                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus = true;
                                _this._resetData();
                                _this._updateData();
                            });
                        }
                    }
                });
            });
        });
    };
    Where2SpendInStoreListPage.prototype.gotoPreviousPage = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance()) {
            var needBackToYourCard = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail;
            if (needBackToYourCard) {
                var index = this.viewCtrl.index;
                this.navCtrl.remove(index);
                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail = false;
                this.keepBackToYourCard = false;
                this.navCtrl.parent.select(0);
            }
            else {
                this.navCtrl.pop();
            }
        }
    };
    Where2SpendInStoreListPage.prototype.checkIsLogin = function () {
        return !!localStorage.getItem('token');
    };
    Where2SpendInStoreListPage.prototype.gotoVirtalMsCard = function () {
        var _this = this;
        this.keepBackToYourCard = true;
        if (this.opemMsCardSub) {
            this.opemMsCardSub.unsubscribe();
        }
        var body = { requestType: __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__["c" /* VIRTUAL_MASTERCARD */] };
        this.opemMsCardSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe(function (res) {
            if (res && res.response && res.response.link) {
                var url = res.response.link;
                var browser = _this.iab.create(url, "_system", "location=true");
            }
        }, function (err) {
        });
    };
    Where2SpendInStoreListPage.prototype.gotoMapPage = function () {
        var _this = this;
        this.keepBackToYourCard = true;
        __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepLocation = true;
        this.navCrtl
            .push('Where2SpendInStoreMapPage')
            .then(function () {
            var index = _this.navCrtl.getActive().index - 1;
            _this.navCrtl.remove(index);
        });
    };
    Where2SpendInStoreListPage.prototype.gotoLocationStoresPage = function () {
        this.keepBackToYourCard = true;
        this.navCtrl.push('LocationStoresPage');
    };
    Where2SpendInStoreListPage.prototype._checkGPSEnabled = function () {
        if (this._isMobilePlatform()) {
            if (this.platform.is('ios')) {
                return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].of(true);
            }
            return this._checkDeviceGPSEnabled();
        }
        return this._checkHtmlGeoEnabled();
    };
    Where2SpendInStoreListPage.prototype._isMobilePlatform = function () {
        return !!window && !!window.hasOwnProperty('cordova');
    };
    Where2SpendInStoreListPage.prototype._checkHtmlGeoEnabled = function () {
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].of(true);
    };
    Where2SpendInStoreListPage.prototype._checkDeviceGPSEnabled = function () {
        var promise = this.diagnostic.isGpsLocationEnabled().then(function (state) {
            if (!state) {
                throw new Error("GPS is disabled");
            }
            return state;
        });
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    Where2SpendInStoreListPage.prototype.gotoChangeCard = function () {
        __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail = false;
        this.navCtrl.parent.select(1);
    };
    Where2SpendInStoreListPage.prototype.gotoOnlinePage = function (storeItem) {
        var _this = this;
        this.keepBackToYourCard = true;
        this.navCrtl
            .push('Where2SpendOnlinePage')
            .then(function () {
            var index = _this.navCrtl.getActive().index - 1;
            _this.navCrtl.remove(index);
        });
    };
    Where2SpendInStoreListPage.prototype.gotoStoreDetail = function (store) {
        this.keepBackToYourCard = true;
        this.navCtrl.push('AlertStoreDetailsPage', { 'store': store });
    };
    Where2SpendInStoreListPage.prototype.loadInitialData = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories) {
            this.categories = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories;
            return;
        }
    };
    Where2SpendInStoreListPage.prototype.updateCategory = function () {
        var _this = this;
        this.categoryAvailable = false;
        var body = this._buildCategoryRequest();
        this.retailerSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe(function (res) {
            var service = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance();
            if (res && res.response && res.response.categories) {
                if (Array.isArray(res.response.categories)) {
                    for (var i = 0; i < res.response.categories.length; i++) {
                        res.response.categories[i].selected = true;
                    }
                }
                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories = res.response.categories.sort(_this.categorySortFn.bind(_this));
                _this.categories = service.categories;
                _this.categoryAvailable = true;
            }
            else {
                _this.categoryAvailable = true;
                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories = [];
            }
        }, function (error) {
            _this.categoryAvailable = true;
            __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories = [];
        });
    };
    Where2SpendInStoreListPage.prototype.gotoCategoty = function () {
        this.keepBackToYourCard = true;
        if (this.categoryAvailable) {
            this.navCrtl.push('CategoryStoresPage');
        }
    };
    Where2SpendInStoreListPage.prototype._buildCategoryRequest = function () {
        var loc = this._selectLatLng(this.location);
        var type = __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__["a" /* CARD_INSTORE */];
        var scheme = (this.card && this.card.scheme) ? this.card.scheme : undefined;
        var req = {
            requestType: type,
            scheme: scheme,
            latitude: '' + loc.lat,
            longitude: '' + loc.lng
        };
        return req;
    };
    Where2SpendInStoreListPage.prototype._updateData = function () {
        if (this.location) {
            this.updateRetailer();
        }
    };
    Where2SpendInStoreListPage.prototype.updateRetailer = function () {
        var _this = this;
        this.stores = [];
        var body = this._buildRetailerRequest();
        __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this.retailerSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe(function (res) {
            var service = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance();
            if (res && res.response && res.response.retailers) {
                _this.retailers = res.response.retailers;
                var stores = _this.retailers.reduce(function (allStores, retailer) {
                    var stores = retailer.stores;
                    for (var i = 0; i < stores.length; i++) {
                        stores[i].retailer = retailer;
                        stores[i].addressLine = _this._buildAdressLine(stores[i]);
                    }
                    return allStores.concat(stores);
                }, []);
                _this.stores = stores.sort(_this.storeSortFn.bind(_this));
                if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories == null) {
                    _this.updateCategory();
                }
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    Where2SpendInStoreListPage.prototype._handleError = function (res) {
        __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        var msg = DEFAULT_ERROR_MSG;
        try {
            var body = JSON.parse(res._body);
            msg = body.errors[0].message;
        }
        catch (e) {
            msg = DEFAULT_ERROR_MSG;
        }
        this._showError(msg);
    };
    Where2SpendInStoreListPage.prototype.storeSortFn = function (store1, store2) {
        return this._alphabetSortFn(store1, store2, function (store) { return store.retailer.name; });
    };
    Where2SpendInStoreListPage.prototype.categorySortFn = function (category1, category2) {
        return this._alphabetSortFn(category1, category2, function (cat) { return cat.name; });
    };
    Where2SpendInStoreListPage.prototype._alphabetSortFn = function (store1, store2, selector) {
        if (typeof selector !== 'function') {
            selector = function (param) { return param; };
        }
        if (selector(store1) < selector(store2))
            return -1;
        if (selector(store1) > selector(store2))
            return 1;
        return 0;
    };
    Where2SpendInStoreListPage.prototype._showError = function (message) {
        __WEBPACK_IMPORTED_MODULE_6__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    Where2SpendInStoreListPage.prototype._buildRetailerRequest = function () {
        var loc = this._selectLatLng(this.location);
        var cat = this._buildCategoryOpt();
        var scheme = (this.card && this.card.scheme) ? this.card.scheme : undefined;
        var type = __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__["a" /* CARD_INSTORE */];
        var req = {
            requestType: type,
            scheme: scheme,
            latitude: '' + loc.lat,
            longitude: '' + loc.lng,
            categories: cat
        };
        return req;
    };
    Where2SpendInStoreListPage.prototype._buildAdressLine = function (store) {
        if (!store) {
            return '';
        }
        var address = '';
        address += (store.addressLine1) ? store.addressLine1 + ", " : '';
        address += (store.addressLine2) ? store.addressLine2 + ", " : '';
        address += (store.town) ? store.town + ", " : '';
        address += (store.county) ? "" + store.county : '';
        return address;
    };
    Where2SpendInStoreListPage.prototype._resetData = function () {
        this.stores = [];
    };
    Where2SpendInStoreListPage.prototype._buildCategoryOpt = function () {
        if (!Array.isArray(this.categories)) {
            return;
        }
        var cats = this.categories.filter(function (cat) { return cat.selected; });
        if (cats.length === 0) {
            return;
        }
        else {
            cats = cats.map(function (cat) { return ({ key: cat.key }); });
        }
        return cats;
    };
    Where2SpendInStoreListPage.prototype._selectLatLng = function (location) {
        if (!location || !location.coords) {
            return {
                lat: 0,
                lng: 0
            };
        }
        return {
            lat: location.coords.latitude,
            lng: location.coords.longitude
        };
    };
    Where2SpendInStoreListPage.prototype._getHtmlLocation = function () {
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].create(function (observer) {
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
    Where2SpendInStoreListPage.prototype._getGpsLocation = function () {
        if (this._isMobilePlatform()) {
            return this._getDeviceGpsLocation();
        }
        return this._getHtmlLocation();
    };
    Where2SpendInStoreListPage.prototype._getDeviceGpsLocation = function () {
        var promise = this.geolocation.getCurrentPosition().then(function (state) {
            return state;
        });
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
    ], Where2SpendInStoreListPage.prototype, "navBar", void 0);
    Where2SpendInStoreListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-where2SpendInStoreList',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\where2SpendInStoreList\where2SpendInStoreList.html"*/'<ion-header *ngIf="checkIsLogin()" class="store-map-logged">\n  <ion-navbar>\n    <ion-buttons left >\n      <button ion-button icon-only (click)="gotoPreviousPage()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title >\n      WHERE TO SPEND\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-header *ngIf="!checkIsLogin()">\n  <ion-navbar>\n    <ion-title >\n      STORES\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf="checkIsLogin()" class="card-info">\n    <ion-item>\n      <ion-row>\n        <ion-col col-2>\n          <img [src]="imageBaseUrl + card?.cardLogoPath" alt=\'card logo\' />\n        </ion-col>\n        <ion-col class="card-content" padding col-7>\n          <div>\n            <h2 class="card-title">{{ card?.nickname }}&nbsp;</h2>\n            <h3>{{ card?.propositionName }}</h3>\n          </div>\n        </ion-col>\n        <ion-col class="card-action" col-3>\n          <span class="link" (click)="gotoChangeCard()">\n                  Change card\n            </span>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-row>\n  <ion-row *ngIf="!checkIsLogin()" class="card-stores three-em">\n    <ion-col col-4 no-padding>\n      <button ion-button full no-margin no-padding class="active left">Love2shop<br>In-store</button>\n    </ion-col>\n    <ion-col col-4 no-padding>\n      <button ion-button full no-margin no-padding (click)="gotoOnlinePage()" class="mid">Love2shop<br>Online</button>\n    </ion-col>\n    <ion-col col-4 no-padding>\n        <button ion-button full no-margin no-padding (click)="gotoVirtalMsCard()" class="right">Virtual<br>Mastercard</button>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="checkIsLogin()" class="card-stores">\n    <ion-col col-6 no-padding>\n      <button ion-button full no-margin no-padding class="active left">IN-STORE</button>\n    </ion-col>\n    <ion-col col-6 no-padding>\n      <button ion-button full no-margin no-padding (click)="gotoOnlinePage()" class="right">ONLINE</button>\n    </ion-col>\n  </ion-row>\n  <ion-row class="stores-category">\n    <ion-item no-padding no-margin>\n      <span item-start (click)="gotoCategoty()">\n        <ion-icon name="md-create"></ion-icon>\n        <p>Category</p>\n      </span>\n      <span item-centered>\n        <ion-buttons>\n          <button no-margin no-padding (click)="gotoMapPage()" class="btn-map">MAP</button>\n          <button no-margin no-padding class="btn-list active">LIST</button>\n        </ion-buttons>\n      </span>\n      <span item-end (click)="gotoLocationStoresPage()">\n        <ion-icon name="ios-navigate-outline"></ion-icon>\n        <p>Location</p>\n      </span>\n    </ion-item>\n  </ion-row>\n  <ion-row class="list-stores">\n    <ion-col padding>\n      <ion-row class="store-item" *ngFor="let storeItem of stores">\n        <ion-col col-3>\n            <img class="store-logo" [src]="imageBaseUrl + storeItem?.retailer?.imagePath">\n        </ion-col>\n        <ion-col col-6 padding class="list-info">\n            <h2 class="store-title">{{ storeItem?.retailer?.name }}</h2>\n            <p *ngIf="storeItem.addressLine" class="store-address">{{ storeItem.addressLine }}</p>\n            <p *ngIf="storeItem.postcode" class="store-address">{{ storeItem?.postcode }}</p>\n        </ion-col>\n        <ion-col col-3 padding class="detail" (click)="gotoStoreDetail(storeItem)">\n            <ion-icon name="ios-information-circle-outline"></ion-icon>\n            <p>Details</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style="display: none;" \n  (click)="gotoPreviousPage()"\n  id="Where2SpendInStoreListPage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\where2SpendInStoreList\where2SpendInStoreList.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__["d" /* Where2SpendServices */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_12__shared_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_5__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__["d" /* Where2SpendServices */]])
    ], Where2SpendInStoreListPage);
    return Where2SpendInStoreListPage;
}());

//# sourceMappingURL=where2SpendInStoreList.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Where2SpendInStoreListPageModule", function() { return Where2SpendInStoreListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__where2SpendInStoreList__ = __webpack_require__(1026);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Where2SpendInStoreListPageModule = (function () {
    function Where2SpendInStoreListPageModule() {
    }
    Where2SpendInStoreListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__where2SpendInStoreList__["a" /* Where2SpendInStoreListPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__where2SpendInStoreList__["a" /* Where2SpendInStoreListPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__where2SpendInStoreList__["a" /* Where2SpendInStoreListPage */]]
        })
    ], Where2SpendInStoreListPageModule);
    return Where2SpendInStoreListPageModule;
}());

//# sourceMappingURL=where2SpendInStoreList.module.js.map

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

/***/ })

});
//# sourceMappingURL=26.js.map