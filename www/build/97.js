webpackJsonp([97],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep5PageModule", function() { return RegisterStep5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__touchIDSettingFirstTime__ = __webpack_require__(874);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_2__touchIDSettingFirstTime__["a" /* TouchIDSettingFirstTimePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__touchIDSettingFirstTime__["a" /* TouchIDSettingFirstTimePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__touchIDSettingFirstTime__["a" /* TouchIDSettingFirstTimePage */]]
        })
    ], RegisterStep5PageModule);
    return RegisterStep5PageModule;
}());

//# sourceMappingURL=touchIDSettingFirstTime.module.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchIDSettingFirstTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verifyPIN_verifyPIN_service__ = __webpack_require__(94);
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






var TouchIDSettingFirstTimePage = (function () {
    function TouchIDSettingFirstTimePage(routeManager, alertCtrl, touchId, navCtrl, navParams) {
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fingerprintVerified = false;
        this.reset_fingerprint = __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.reset_fingerprint;
        this.use_of_fingerprint = __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.use_of_fingerprint;
        this.create_print_ID = __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.create_print_ID;
        this.skip_id_setup = __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.skip_id_setup;
        this.wrong_touch_ID = __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.wrong_touch_ID;
        this.too_many_attempts = __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.too_many_attempts;
        this.touchId = touchId;
    }
    TouchIDSettingFirstTimePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.touchId.isAvailable()
            .then(function (res) {
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
    TouchIDSettingFirstTimePage.prototype.submitRegisterData = function () {
        var _this = this;
        this.touchId.isAvailable().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().touchIDState = true;
        })
            .catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_4__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().touchIDState = false;
        })
            .then(function (_) { return _this.navCtrl.setRoot(_this.navParams.get('nextPage')); });
    };
    TouchIDSettingFirstTimePage.prototype.skipTouchIDSetup = function () {
        var service = __WEBPACK_IMPORTED_MODULE_4__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance();
        service.touchIDState = false;
        this.navCtrl.setRoot(this.navParams.get('nextPage'));
    };
    TouchIDSettingFirstTimePage.prototype.showAlertTouchIdFail = function () {
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
    TouchIDSettingFirstTimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-touchIDSettingFirstTime',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\touchIDSettingFirstTime\touchIDSettingFirstTime.html"*/'<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row text-center class="p-t-20 p-b-20">\n      <ion-col>\n        <img class="l2s-logo" src="assets/images/l2s-logo.png" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class="text-14 p-t-20 p-b-30" text-center>{{create_print_ID}}</p>\n        <ion-row>\n          <p class="text-14" text-center>{{reset_fingerprint}}</p>\n        </ion-row>\n        <ion-item-divider></ion-item-divider>\n        <ion-row>\n          <ion-col text-center>\n            <ion-img src="assets/images/finger-thumb.png" width="80" height="110"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-item-divider></ion-item-divider>\n        <ion-row *ngIf="!fingerprintVerified">\n          <ion-col text-center (click)="skipTouchIDSetup()">\n            <span text-uppercase>{{skip_id_setup}}</span>\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="fingerprintVerified === true">\n          <ion-col text-center>\n            <h6>Scan completed!</h6>\n            <p text-center>{{use_of_fingerprint}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button large block [disabled]="!fingerprintVerified" (click)="submitRegisterData()">Next</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\touchIDSettingFirstTime\touchIDSettingFirstTime.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TouchIDSettingFirstTimePage);
    return TouchIDSettingFirstTimePage;
}());

//# sourceMappingURL=touchIDSettingFirstTime.js.map

/***/ })

});
//# sourceMappingURL=97.js.map