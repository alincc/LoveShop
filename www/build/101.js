webpackJsonp([101],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordSuccessModule", function() { return ForgotPasswordSuccessModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotPasswordSuccess__ = __webpack_require__(862);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPasswordSuccessModule = (function () {
    function ForgotPasswordSuccessModule() {
    }
    ForgotPasswordSuccessModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__forgotPasswordSuccess__["a" /* ForgotPasswordSuccess */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotPasswordSuccess__["a" /* ForgotPasswordSuccess */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__forgotPasswordSuccess__["a" /* ForgotPasswordSuccess */]]
        })
    ], ForgotPasswordSuccessModule);
    return ForgotPasswordSuccessModule;
}());

//# sourceMappingURL=forgotPasswordSuccess.module.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordSuccess; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordSuccess = (function () {
    function ForgotPasswordSuccess(routerManager, navCtrl) {
        this.routerManager = routerManager;
        this.navCtrl = navCtrl;
        this.forgot_password_success_email_sent = __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.forgot_password_success_email_sent;
    }
    ForgotPasswordSuccess.prototype.returnToLogin = function () {
        this.navCtrl.push("LoginPage");
    };
    ForgotPasswordSuccess = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotPasswordSuccess',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\forgotPassword\forgotPasswordSuccess\forgotPasswordSuccess.html"*/'<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <ion-col text-center class="m-t-30">\n        <img class="l2s-logo" src="assets/images/l2s-logo.png" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding>\n      <ion-col class="p-t-50 p-b-50">\n        <p class="text-14" text-center>\n          {{forgot_password_success_email_sent}}\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button large block (click)="returnToLogin()">Return to Login</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\forgotPassword\forgotPasswordSuccess\forgotPasswordSuccess.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ForgotPasswordSuccess);
    return ForgotPasswordSuccess;
}());

//# sourceMappingURL=forgotPasswordSuccess.js.map

/***/ })

});
//# sourceMappingURL=101.js.map