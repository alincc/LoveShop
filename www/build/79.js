webpackJsonp([79],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreInfoPageModule", function() { return MoreInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moreInformation__ = __webpack_require__(890);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoreInfoPageModule = (function () {
    function MoreInfoPageModule() {
    }
    MoreInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__moreInformation__["a" /* MoreInfoPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__moreInformation__["a" /* MoreInfoPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__moreInformation__["a" /* MoreInfoPage */]]
        })
    ], MoreInfoPageModule);
    return MoreInfoPageModule;
}());

//# sourceMappingURL=moreInformation.module.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__moreInformation_service__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MoreInfoPage = (function () {
    function MoreInfoPage(routeManager, moreInformationService, http, platform, navCtrl, iab) {
        this.routeManager = routeManager;
        this.moreInformationService = moreInformationService;
        this.http = http;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.pagesInfo = [
            {
                title: "About us",
                routeLink: "AboutPage"
            },
            {
                title: "Delivery information",
                routeLink: "DeliveryInformationPage"
            },
            {
                title: "FAQs",
                routeLink: "FAQPage"
            },
            {
                title: "Returns & refunds",
                routeLink: "ReturnRefundPage"
            },
            {
                title: "Business Enquiries",
                routeLink: "BusinessEnquiriesPage"
            },
            {
                title: "Contact us",
                routeLink: "ContactUsPage"
            }
        ];
        this.pagesInfo2 = [
            {
                title: "E-Money Trust",
                routeLink: "EMoneyTrustPage"
            },
            {
                title: "Privacy policy",
                routeLink: "PrivacyPolicyPage"
            },
            {
                title: "App terms & conditions",
                routeLink: "TermsConditionsPage"
            }
        ];
    }
    MoreInfoPage.prototype.onItemClick = function (pageItem) {
        if (pageItem.routeLink == 'TermsConditionsPage') {
            this.retriveContent('app.l2s.tcs');
            return;
        }
        else if (pageItem.routeLink == 'FAQPage') {
            this.retriveContent("app.l2s.faqs");
            return;
        }
        else if (pageItem.routeLink == 'BusinessEnquiriesPage') {
            this.retriveContent('app.l2s.business-enquiry');
            return;
        }
        else if (pageItem.routeLink == 'EMoneyTrustPage') {
            this.retriveContent('app.l2s.emoneytrust');
            return;
        }
        this.navCtrl.push(pageItem.routeLink);
    };
    MoreInfoPage.prototype.retriveContent = function (code) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                if (res && res.response && res.response.message) {
                    var body = res.response;
                    var url_1 = _this._normalizeUrl(res.response.message);
                    var target = "_system";
                    if (code === "app.l2s.faqs") {
                        target = "_blank";
                    }
                    if (_this.platform.is('ipad')) {
                        _this.platform.ready().then(function () {
                            if (cordova && cordova.InAppBrowser) {
                                window.open = cordova.InAppBrowser.open(url_1, "_blank", "hidden=no,location=yes,clearsessioncache=yes,clearcache=yes");
                            }
                        });
                    }
                    else {
                        var browser = _this.iab.create(url_1, target, "location=true");
                    }
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.moreInformationService
            .getInfo(code)
            .subscribe(observer);
    };
    MoreInfoPage.prototype._normalizeUrl = function (url) {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            if (url.startsWith('/')) {
                return 'https://www.love2shop.co.uk' + url;
            }
            return 'http://' + url;
        }
        return url;
    };
    MoreInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-moreInformation',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AppInforManagement\moreInformation\moreInformation.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      More Info\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item detail-none *ngFor="let pageItem of pagesInfo" (click)="onItemClick(pageItem)">{{ pageItem.title }}</button>\n  </ion-list>\n  <ion-item-divider ion-item>\n  </ion-item-divider>\n  <ion-list>\n    <button ion-item detail-none *ngFor="let pageItem of pagesInfo2" (click)="onItemClick(pageItem)">{{ pageItem.title }}</button>\n  </ion-list>\n\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="MoreInfoPage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AppInforManagement\moreInformation\moreInformation.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__moreInformation_service__["a" /* MoreInformationService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_5__moreInformation_service__["a" /* MoreInformationService */],
            __WEBPACK_IMPORTED_MODULE_4__framework_services_httpService_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MoreInfoPage);
    return MoreInfoPage;
}());

//# sourceMappingURL=moreInformation.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreInformationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoreInformationService = (function () {
    function MoreInformationService(http) {
        this.http = http;
    }
    MoreInformationService.prototype.getInfo = function (code) {
        return this.http.get("cms/message/code=" + code);
    };
    MoreInformationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], MoreInformationService);
    return MoreInformationService;
}());

//# sourceMappingURL=moreInformation.service.js.map

/***/ })

});
//# sourceMappingURL=79.js.map