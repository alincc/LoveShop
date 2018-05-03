webpackJsonp([100],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep5PageModule", function() { return RegisterStep5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerStep5__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterStep5PageModule = (function () {
    function RegisterStep5PageModule() {
    }
    RegisterStep5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__registerStep5__["a" /* RegisterStep5Page */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registerStep5__["a" /* RegisterStep5Page */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__registerStep5__["a" /* RegisterStep5Page */]]
        })
    ], RegisterStep5PageModule);
    return RegisterStep5PageModule;
}());

//# sourceMappingURL=registerStep5.module.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterStep5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_login_authenticationDataSharing_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__verifyPIN_verifyPIN_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterStep5Page = (function () {
    function RegisterStep5Page(routeManager, alertCtrl, navCtrl, touchId) {
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.fingerprintVerified = false;
        this.use_of_fingerprint = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.reset_fingerprint;
        this.reset_fingerprint = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.reset_fingerprint;
        this.create_print_ID = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.create_print_ID;
        this.skip_id_setup = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.skip_id_setup;
        this.wrong_touch_ID = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.wrong_touch_ID;
        this.too_many_attempts = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.too_many_attempts;
        this.touchId = touchId;
        this.emailLogin = __WEBPACK_IMPORTED_MODULE_2__framework_login_authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail;
    }
    RegisterStep5Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.touchId.isAvailable().then(function (res) {
            return _this.touchId.show({
                clientId: 'Touch ID for Love2Shop',
                clientSecret: 'myPassword',
                disableBackup: true,
            });
        }).then(function (res) {
            _this.fingerprintVerified = true;
        }).catch(function (err) {
            if (err === '-1' || err === '-8') {
                _this.showAlertTouchIdFail();
            }
            else {
                _this.fingerprintVerified = false;
                _this.skipTouchIDSetup();
            }
        });
    };
    RegisterStep5Page.prototype.submitRegisterData = function () {
        var _this = this;
        this.touchId.isAvailable().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_5__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().touchIDState = true;
            _this.navCtrl.setRoot('RegisterStep7Page');
        })
            .catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_5__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().touchIDState = false;
            _this.navCtrl.setRoot('RegisterStep7Page');
        });
    };
    RegisterStep5Page.prototype.skipTouchIDSetup = function () {
        __WEBPACK_IMPORTED_MODULE_5__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().touchIDState = false;
        this.navCtrl.setRoot('RegisterStep7Page');
    };
    RegisterStep5Page.prototype.showAlertTouchIdFail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.wrong_touch_ID,
            message: this.too_many_attempts,
            cssClass: 'wrong-pin',
            buttons: [{
                    text: 'OK',
                    handler: function (data) {
                        _this.fingerprintVerified = false;
                        _this.skipTouchIDSetup();
                    }
                }]
        });
        alert.present();
    };
    RegisterStep5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registerStep5',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep5\registerStep5.html"*/'<!--<ion-header>-->\n  <!--<ion-navbar>-->\n    <!--<ion-title></ion-title>-->\n  <!--</ion-navbar>-->\n<!--</ion-header>-->\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <ion-col text-center>\n        <img class="l2s-logo" src="assets/images/l2s-logo.png"/>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <p text-center class="p-b-50 p-t-40 text-14">{{create_print_ID}}</p>\n        <p text-center class="p-b-35 text-14">{{reset_fingerprint}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="p-b-20">\n      <ion-col text-center>\n        <img src="assets/images/finger-thumb.png" width="80" height="110">\n      </ion-col>\n    </ion-row>\n        \n    <ion-row *ngIf=\'!fingerprintVerified\'>\n      <ion-col text-center (click)="skipTouchIDSetup()">\n        <span text-uppercase>{{skip_id_setup}}</span>\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\'fingerprintVerified === true\'>\n      <ion-col text-center>\n        <h6>Scan completed!</h6>\n        <p text-center class="text-14">{{use_of_fingerprint}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button large block [disabled]="!fingerprintVerified" (click)="submitRegisterData()">Next</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep5\registerStep5.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], RegisterStep5Page);
    return RegisterStep5Page;
}());

//# sourceMappingURL=registerStep5.js.map

/***/ })

});
//# sourceMappingURL=100.js.map