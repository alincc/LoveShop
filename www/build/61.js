webpackJsonp([61],{

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertStoreDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlertStoreDetailsPage = (function () {
    function AlertStoreDetailsPage(routeManager, navCrtl, iab, navParams) {
        this.routeManager = routeManager;
        this.navCrtl = navCrtl;
        this.iab = iab;
        this.navParams = navParams;
        this.storeItemDetails = navParams.get('storeItem');
    }
    AlertStoreDetailsPage.prototype.ionViewWillEnter = function () {
        if (this.navParams.get('store')) {
            var store = this.navParams.get('store');
            this.store = this._buildStore(store);
        }
    };
    AlertStoreDetailsPage.prototype.close = function () {
        __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepData = true;
        this.navCrtl.pop();
    };
    ;
    AlertStoreDetailsPage.prototype.onStoreLinkClick = function (store) {
        if (store && store.retailer && store.retailer.websiteURL) {
            var url = this._normalizeUtl(store.retailer.websiteURL);
            var browser = this.iab.create(url, "_system", "location=true");
        }
    };
    AlertStoreDetailsPage.prototype._normalizeUtl = function (url) {
        if (!url || !url.startsWith('http://') || !url.startsWith('https://')) {
            return 'http://' + url;
        }
        return url;
    };
    AlertStoreDetailsPage.prototype._buildStore = function (store) {
        store.prettyDistance = this._prettyDistance(store.distance);
        return store;
    };
    AlertStoreDetailsPage.prototype._prettyDistance = function (dis) {
        return parseFloat(dis).toFixed(2);
    };
    AlertStoreDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alertStoreDetails',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\alertStoreDetails\alertStoreDetails.html"*/'<ion-content>\n  <ion-row class="close" (click)="close()">\n    <div text-right>\n      <ion-icon name="close"></ion-icon>\n    </div>\n  </ion-row>\n  <ion-item-divider></ion-item-divider>\n  <ion-item-divider></ion-item-divider>\n  <ion-row class="store-distance">\n    <h1>{{ store?.retailer?.name }}</h1>\n    <p>Distance from your location: {{ store?.prettyDistance }} miles</p>\n  </ion-row>\n  <ion-item-divider></ion-item-divider>\n  <ion-row class="store-address">\n    <p>{{ store?.addressLine1 }}</p>\n    <p>{{ store?.addressLine2}}</p>\n    <p>{{ store?.town }}</p>\n    <p>{{ store?.county }}</p>\n    <p class="m-t-6">{{ store?.postcode }}</p>\n  </ion-row>\n  <ion-item-divider></ion-item-divider>\n  <ion-row *ngIf="store && store.telephoneNumber" class="store-phone">\n    <p>Telephone</p>\n    <p>{{ store?.telephoneNumber }}</p>\n  </ion-row>\n  <ion-item-divider></ion-item-divider>\n  <ion-item-divider></ion-item-divider>\n  <!-- <ion-row *ngIf="store && store.retailer && store.retailer.websiteURL">\n      <button ion-button full (click)="onStoreLinkClick(store)">Get direction from here</button>\n  </ion-row> -->\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\alertStoreDetails\alertStoreDetails.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AlertStoreDetailsPage);
    return AlertStoreDetailsPage;
}());

//# sourceMappingURL=alertStoreDetails.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertStoreDetailsPageModule", function() { return AlertStoreDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alertStoreDetails__ = __webpack_require__(1017);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertStoreDetailsPageModule = (function () {
    function AlertStoreDetailsPageModule() {
    }
    AlertStoreDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__alertStoreDetails__["a" /* AlertStoreDetailsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alertStoreDetails__["a" /* AlertStoreDetailsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__alertStoreDetails__["a" /* AlertStoreDetailsPage */]]
        })
    ], AlertStoreDetailsPageModule);
    return AlertStoreDetailsPageModule;
}());

//# sourceMappingURL=alertStoreDetails.module.js.map

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

/***/ })

});
//# sourceMappingURL=61.js.map