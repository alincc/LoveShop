webpackJsonp([77],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPageModule", function() { return TermsConditionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__termsConditions__ = __webpack_require__(894);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsConditionsPageModule = (function () {
    function TermsConditionsPageModule() {
    }
    TermsConditionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__termsConditions__["a" /* TermsConditionsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__termsConditions__["a" /* TermsConditionsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__termsConditions__["a" /* TermsConditionsPage */]]
        })
    ], TermsConditionsPageModule);
    return TermsConditionsPageModule;
}());

//# sourceMappingURL=termsConditions.module.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__termsConditions_service__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TermsConditionsPage = (function () {
    function TermsConditionsPage(navCtrl, routerManager, termsConditionsService, http, navParams) {
        this.navCtrl = navCtrl;
        this.routerManager = routerManager;
        this.termsConditionsService = termsConditionsService;
        this.http = http;
        this.navParams = navParams;
    }
    TermsConditionsPage.prototype.ionViewWillEnter = function () {
        if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            this.getTermCondition();
        }
    };
    TermsConditionsPage.prototype.getTermCondition = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.textContent = body.content;
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.termsConditionsService
            .getTermConditions()
            .subscribe(observer);
    };
    TermsConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termsConditions',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AppInforManagement\termsConditions\termsConditions.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      TermsConditions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div [innerHTML]="textContent"></div>\n</ion-content>\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="TermsConditionsPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AppInforManagement\termsConditions\termsConditions.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__termsConditions_service__["a" /* TermsConditionsService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_4__termsConditions_service__["a" /* TermsConditionsService */],
            __WEBPACK_IMPORTED_MODULE_3__framework_services_httpService_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TermsConditionsPage);
    return TermsConditionsPage;
}());

//# sourceMappingURL=termsConditions.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionsService; });
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


var TermsConditionsService = (function () {
    function TermsConditionsService(http) {
        this.http = http;
    }
    TermsConditionsService.prototype.getTermConditions = function () {
        return this.http.get("cms/message/code=app.l2s.tcs");
    };
    TermsConditionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], TermsConditionsService);
    return TermsConditionsService;
}());

//# sourceMappingURL=termsConditions.service.js.map

/***/ })

});
//# sourceMappingURL=77.js.map