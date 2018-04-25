webpackJsonp([92],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuySpecSaversPageModule", function() { return BuySpecSaversPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buySpecSavers__ = __webpack_require__(904);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuySpecSaversPageModule = (function () {
    function BuySpecSaversPageModule() {
    }
    BuySpecSaversPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__buySpecSavers__["a" /* BuySpecSaversPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buySpecSavers__["a" /* BuySpecSaversPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__buySpecSavers__["a" /* BuySpecSaversPage */]]
        })
    ], BuySpecSaversPageModule);
    return BuySpecSaversPageModule;
}());

//# sourceMappingURL=buySpecSavers.module.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuySpecSaversPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BASE_URL = 'https://www.love2shop.co.uk';
var BuySpecSaversPage = (function () {
    function BuySpecSaversPage(navCtrl, iab, routeManager, platform, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.routeManager = routeManager;
        this.platform = platform;
        this.navParams = navParams;
        this.showLink = false;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    BuySpecSaversPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    BuySpecSaversPage.prototype.onClickBenefitLink = function () {
        if (!this.benefit || !this.benefit.url) {
            return;
        }
        if (this.benefit.type.toLowerCase() === 'form' && this.benefit.hiddenFields && this.benefit.hiddenFields.fv_value) {
            var YourPostURL = this.benefit.url;
            var YourValue1 = this.benefit.hiddenFields.fv_value;
            var pageContent = '<html><head></head><body><form id="loginForm" action="' + YourPostURL + '" method="post">' +
                '<input type="hidden" name="fv_value" value="' + YourValue1 + '">' +
                '</form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>';
            var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);
            this.platform.ready().then(function () {
                if (cordova && cordova.InAppBrowser) {
                    window.open = cordova.InAppBrowser.open(pageContentUrl, "_blank", "hidden=no,location=yes,clearsessioncache=yes,clearcache=yes");
                }
            });
        }
        else {
            var url = this._normalizeUrl(this.benefit.url);
            var browser = this.iab.create(url, "_system", "location=true");
        }
    };
    BuySpecSaversPage.prototype._normalizeUrl = function (url) {
        if (url.startsWith('#') || url.startsWith('/#')) {
            return;
        }
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            if (url.startsWith('/')) {
                return BASE_URL + url;
            }
            if (url.startsWith('mycard')) {
                return BASE_URL + '/manage/' + url;
            }
            return 'http://' + url;
        }
        return url;
    };
    BuySpecSaversPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.app-root').addClass('not-show-tab');
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('benefit')) {
                var benefit = this.navParams.get('benefit');
                benefit = this._selectBenefitImage(benefit);
                this.showLink = this._checkCanShowLink(benefit);
                benefit = this._validContentImg(benefit);
                this.benefit = benefit;
            }
        }
    };
    BuySpecSaversPage.prototype._checkCanShowLink = function (benefit) {
        return benefit && benefit.url && this._validUrl(benefit.url);
    };
    BuySpecSaversPage.prototype._validUrl = function (url) {
        return url && typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/') || url.startsWith('mycard'));
    };
    BuySpecSaversPage.prototype._selectBenefitImage = function (benefit) {
        if (benefit && Array.isArray(benefit.images)) {
            benefit.image = benefit.images[0];
        }
        return benefit;
    };
    BuySpecSaversPage.prototype._validContentImg = function (benefit) {
        if (benefit && benefit.longDescription) {
            benefit.longDescription = benefit.longDescription.replace(/src="\//g, 'src="https://www.love2shop.co.uk/');
        }
        return benefit;
    };
    BuySpecSaversPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buySpecSavers',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\buy\buySpecSavers\buySpecSavers.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Benefit Details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="benefit-details">\n  <ion-grid class="content-wrapper" *ngIf="benefit">\n    <ion-row>\n      <div class="benefit-details__desc" [innerHTML]="benefit?.longDescription"></div>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="footer-wrapper" *ngIf="showLink">\n    <ion-row class="benefit-details__action">\n      <button ion-button block large (click)="onClickBenefitLink()">Benefit Link</button>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="BuySpecSaversPage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\buy\buySpecSavers\buySpecSavers.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], BuySpecSaversPage);
    return BuySpecSaversPage;
}());

//# sourceMappingURL=buySpecSavers.js.map

/***/ })

});
//# sourceMappingURL=92.js.map