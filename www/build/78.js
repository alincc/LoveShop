webpackJsonp([78],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function() { return PrivacyPolicyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacyPolicy__ = __webpack_require__(892);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrivacyPolicyPageModule = (function () {
    function PrivacyPolicyPageModule() {
    }
    PrivacyPolicyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__privacyPolicy__["a" /* PrivacyPolicyPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__privacyPolicy__["a" /* PrivacyPolicyPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__privacyPolicy__["a" /* PrivacyPolicyPage */]]
        })
    ], PrivacyPolicyPageModule);
    return PrivacyPolicyPageModule;
}());

//# sourceMappingURL=privacyPolicy.module.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacyPolicy_service__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrivacyPolicyPage = (function () {
    function PrivacyPolicyPage(routerManager, navCtrl, privacyPolicyService) {
        this.routerManager = routerManager;
        this.navCtrl = navCtrl;
        this.privacyPolicyService = privacyPolicyService;
    }
    PrivacyPolicyPage.prototype.ionViewWillEnter = function () {
        if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            this.getPrivacyContent();
        }
    };
    PrivacyPolicyPage.prototype.getPrivacyContent = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.privacyContent = body.content;
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.privacyPolicyService
            .getPrivacyPolicy()
            .subscribe(observer);
    };
    PrivacyPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacyPolicy',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AppInforManagement\privacyPolicy\privacyPolicy.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Privacy Policy\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div padding class="text-14" [innerHTML]="privacyContent">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="PrivacyPolicyPage-back-button">\n</ion-row>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AppInforManagement\privacyPolicy\privacyPolicy.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__privacyPolicy_service__["a" /* PrivacyPolicyService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__privacyPolicy_service__["a" /* PrivacyPolicyService */]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());

//# sourceMappingURL=privacyPolicy.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyService; });
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


var PrivacyPolicyService = (function () {
    function PrivacyPolicyService(http) {
        this.http = http;
    }
    PrivacyPolicyService.prototype.getPrivacyPolicy = function () {
        return this.http.get("cms/content/urlTitle=privacy-policy-content");
    };
    PrivacyPolicyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], PrivacyPolicyService);
    return PrivacyPolicyService;
}());

//# sourceMappingURL=privacyPolicy.service.js.map

/***/ })

});
//# sourceMappingURL=78.js.map