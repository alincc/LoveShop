webpackJsonp([43],{

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Where2SpendOnlinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_9__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var Where2SpendOnlinePage = (function () {
    function Where2SpendOnlinePage(routeManager, navCtrl, viewCtrl, iab, authService, where2SpendServices) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.iab = iab;
        this.authService = authService;
        this.where2SpendServices = where2SpendServices;
        this.gpsAvailable = true;
        this.gotoStore = false;
        this.imageBaseUrl = 'https://www.love2shop.co.uk';
    }
    Where2SpendOnlinePage.prototype.ionViewDidLoad = function () {
        this.loadInitialData();
    };
    Where2SpendOnlinePage.prototype.gotoPreviousPage = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance()) {
            var needBackToYourCard = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail;
            if (needBackToYourCard) {
                var index = this.viewCtrl.index;
                this.navCtrl.remove(index);
                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail = false;
                this.gotoStore = false;
                this.navCtrl.parent.select(0);
            }
            else {
                this.navCtrl.pop();
            }
        }
    };
    Where2SpendOnlinePage.prototype.ionViewWillEnter = function () {
        this._resetData();
        this.card = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().selectedCard;
        this.location = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().currenrLocation;
        this.categories = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories;
        this.gpsAvailable = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus;
        this.isLogin = !!localStorage.getItem('token');
        this._updateData();
    };
    Where2SpendOnlinePage.prototype.checkIsLogin = function () {
        return !!localStorage.getItem('token');
    };
    Where2SpendOnlinePage.prototype.gotoVirtalMsCard = function () {
        var _this = this;
        this.gotoStore = true;
        if (this.opemMsCardSub) {
            this.opemMsCardSub.unsubscribe();
        }
        var body = { requestType: __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__["c" /* VIRTUAL_MASTERCARD */] };
        this.opemMsCardSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe(function (res) {
            if (res && res.response && res.response.link) {
                var url = res.response.link;
                var browser = _this.iab.create(url, "_system", "location=true");
            }
            else {
            }
        }, function (err) {
        });
    };
    Where2SpendOnlinePage.prototype.ionViewDidLeave = function () {
        if (this.retailerSub) {
            this.retailerSub.unsubscribe();
        }
        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance() && !this.gotoStore) {
            __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail = false;
            this.gotoStore = false;
            this.navCtrl.popToRoot();
        }
    };
    Where2SpendOnlinePage.prototype.gotoChangeCard = function () {
        __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail = false;
        this.navCtrl.parent.select(1);
    };
    Where2SpendOnlinePage.prototype.gotoInStorePage = function () {
        var _this = this;
        this.gotoStore = true;
        __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepLocation = true;
        this.navCtrl
            .push('Where2SpendInStoreMapPage')
            .then(function () {
            var index = _this.navCtrl.getActive().index - 1;
            _this.navCtrl.remove(index);
        });
    };
    Where2SpendOnlinePage.prototype.loadInitialData = function () {
        this.updateRetailer();
    };
    Where2SpendOnlinePage.prototype._alphabetSortFn = function (store1, store2) {
        if (store1.name < store2.name)
            return -1;
        if (store1.name > store2.name)
            return 1;
        return 0;
    };
    Where2SpendOnlinePage.prototype._updateData = function () {
        if (this.card) {
            this.updateRetailer();
        }
    };
    Where2SpendOnlinePage.prototype.onStoreClick = function (store) {
        if (store && store.websiteURL) {
            var url = this._normalizeUtl(store.websiteURL);
            var browser = this.iab.create(url, "_system", "location=true");
        }
    };
    Where2SpendOnlinePage.prototype._normalizeUtl = function (url) {
        if (!url || !url.startsWith('http://') || !url.startsWith('https://')) {
            return 'http://' + url;
        }
        return url;
    };
    Where2SpendOnlinePage.prototype.updateRetailer = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var body = this._buildRetailerRequest();
        this.retailerSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe(function (res) {
            if (res && res.response && res.response.retailers) {
                if (Array.isArray(res.response.retailers)) {
                    _this.retailers = res.response.retailers.sort(_this._alphabetSortFn.bind(_this));
                }
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    Where2SpendOnlinePage.prototype._buildAdressLine = function (store) {
        return store.addressLine1;
    };
    Where2SpendOnlinePage.prototype._handleError = function (res) {
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
    Where2SpendOnlinePage.prototype._showError = function (message) {
        __WEBPACK_IMPORTED_MODULE_6__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    Where2SpendOnlinePage.prototype._buildRetailerRequest = function () {
        var scheme = (this.card && this.card.scheme) ? this.card.scheme : undefined;
        var req = {
            requestType: __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__["b" /* ONLINE */],
            scheme: scheme
        };
        return req;
    };
    Where2SpendOnlinePage.prototype._resetData = function () {
    };
    Where2SpendOnlinePage.prototype._buildCategoryOpt = function () {
        return undefined;
    };
    Where2SpendOnlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-where2SpendOnline',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendOnline\where2SpendOnline.html"*/'<ion-header *ngIf="checkIsLogin()" class="store-map-logged">\n  <ion-navbar>\n    <ion-buttons left >\n      <button  ion-button icon-only (click)="gotoPreviousPage()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title >\n      WHERE TO SPEND\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-header *ngIf="!checkIsLogin()">\n  <ion-navbar>\n    <ion-title >\n      STORES\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-row *ngIf="checkIsLogin()" class="card-info">\n    <ion-item>\n      <ion-row>\n        <ion-col col-2>\n          <img [src]="imageBaseUrl + card?.cardLogoPath" alt=\'card logo\' />\n        </ion-col>\n        <ion-col class="card-content" padding col-7>\n          <div>\n            <h2 class="card-title">{{ card?.nickname }}&nbsp;</h2>\n            <h3>{{ card?.propositionName }}</h3>\n          </div>\n        </ion-col>\n        <ion-col class="card-action" col-3>\n          <span class="link" (click)="gotoChangeCard()">\n                  Change card\n            </span>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-row>\n  <ion-row *ngIf="checkIsLogin()" class="card-stores">\n    <ion-col col-6 no-padding>\n      <button ion-button full no-margin no-padding (click)="gotoInStorePage()" class="left">IN-STORE</button>\n    </ion-col>\n    <ion-col col-6 no-padding>\n      <button ion-button full no-margin no-padding class="active right">ONLINE</button>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="!checkIsLogin()" class="card-stores three-em">\n    <ion-col col-4 no-padding>\n      <button ion-button full no-margin no-padding (click)="gotoInStorePage()" class="left">Love2shop<br>In-store</button>\n    </ion-col>\n    <ion-col col-4 no-padding>\n      <button ion-button full no-margin no-padding class="active mid">Love2shop<br>Online</button>\n    </ion-col>\n    <ion-col col-4 no-padding>\n      <button ion-button full no-margin no-padding (click)="gotoVirtalMsCard()" class="right">Virtual<br>Mastercard</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col padding>\n        <ion-row no-padding class="list-stores-online" no-padding no-margin *ngFor="let storeItem of retailers" (click)="onStoreClick(storeItem)">\n            <ion-col col-3>\n              <img class="store-logo"[src]="imageBaseUrl + storeItem.imagePath" />\n            </ion-col>\n            <ion-col col-9 padding class="p-l-10">\n              <h5 class="store-title">{{ storeItem.name }}</h5>\n              <button class="store-link" (click)="onStoreClick(storeItem)">\n                  <div class="sm">Visit {{ storeItem.name }} online</div>\n                  <div class="icon">\n                    <ion-icon name="ios-arrow-forward"></ion-icon>\n                  </div>\n              </button>\n            </ion-col>\n          </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="display: none;" \n  (click)="gotoPreviousPage()"\n  id="Where2SpendOnlinePage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendOnline\where2SpendOnline.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__["d" /* Where2SpendServices */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_3__where2Spend_services__["d" /* Where2SpendServices */]])
    ], Where2SpendOnlinePage);
    return Where2SpendOnlinePage;
}());

//# sourceMappingURL=where2SpendOnline.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Where2SpendOnlinePageModule", function() { return Where2SpendOnlinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__where2SpendOnline__ = __webpack_require__(1028);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Where2SpendOnlinePageModule = (function () {
    function Where2SpendOnlinePageModule() {
    }
    Where2SpendOnlinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__where2SpendOnline__["a" /* Where2SpendOnlinePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__where2SpendOnline__["a" /* Where2SpendOnlinePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__where2SpendOnline__["a" /* Where2SpendOnlinePage */]]
        })
    ], Where2SpendOnlinePageModule);
    return Where2SpendOnlinePageModule;
}());

//# sourceMappingURL=where2SpendOnline.module.js.map

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

/***/ })

});
//# sourceMappingURL=43.js.map