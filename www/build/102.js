webpackJsonp([102],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeTouchIDPageModule", function() { return ChangeTouchIDPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changeTouchID__ = __webpack_require__(857);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangeTouchIDPageModule = (function () {
    function ChangeTouchIDPageModule() {
    }
    ChangeTouchIDPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__changeTouchID__["a" /* ChangeTouchIDPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__changeTouchID__["a" /* ChangeTouchIDPage */]),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__changeTouchID__["a" /* ChangeTouchIDPage */]]
        })
    ], ChangeTouchIDPageModule);
    return ChangeTouchIDPageModule;
}());

//# sourceMappingURL=changeTouchID.module.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeTouchIDPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verifyPIN_verifyPIN_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verifyPIN_verifyPIN__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChangeTouchIDPage = (function () {
    function ChangeTouchIDPage(navCtrl, modalCtrl, touchId) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.touchId = touchId;
        this.messageTouchNotAvailable = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_api_touch_ID_not_available;
        this.use_fingerprint_not_PIN = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.use_fingerprint_not_PIN;
        this.use_same_finger = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.use_same_finger;
        this.isChangeTouchAvailable = false;
        this.touchIDState = __WEBPACK_IMPORTED_MODULE_2__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().touchIDState;
        this.touchAvailable = true;
    }
    ChangeTouchIDPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.app-root').addClass('not-show-tab');
        var vPinSvc = __WEBPACK_IMPORTED_MODULE_2__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance();
        vPinSvc.IsChangeTouchScreen = true;
        this.isChangeTouchAvailable = true;
        // After verify PIN then check touch is available or not
        // if not redirect to setting page.
        vPinSvc.verifyPINClosedInChangeTouch.subscribe(function (res) {
            if (res === true && _this.isChangeTouchAvailable === true) {
                // No touch available then redirect to setting page.
                _this.isChangeTouchAvailable = false;
                __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(_this.messageTouchNotAvailable);
                __WEBPACK_IMPORTED_MODULE_2__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().touchIDState = false;
                _this.navCtrl.setRoot('SettingsPage');
            }
        });
    };
    ChangeTouchIDPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    ChangeTouchIDPage.prototype.ionViewDidLeave = function () {
        __WEBPACK_IMPORTED_MODULE_2__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().IsChangeTouchScreen = false;
    };
    ChangeTouchIDPage.prototype.changeTouchState = function () {
        var _this = this;
        this.touchId.isAvailable().then(function (res) {
            _this.showVerifyPIN(_this.touchIDState);
        })
            .catch(function (err) {
            _this.navCtrl.setRoot('SettingsPage');
            __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(_this.messageTouchNotAvailable);
        });
    };
    ChangeTouchIDPage.prototype.showVerifyPIN = function (state) {
        var _this = this;
        var vPinSvc = __WEBPACK_IMPORTED_MODULE_2__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance();
        var verifyScreenModal;
        verifyScreenModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__verifyPIN_verifyPIN__["a" /* VerifyPINPage */], { callFrom: 'ChangeTouchID', touchState: state }, {
            cssClass: 'touchable-page'
        });
        verifyScreenModal.onDidDismiss(function () {
            if (_this.touchIDState === true) {
                _this.touchId.isAvailable()
                    .then(function (res) {
                    __WEBPACK_IMPORTED_MODULE_2__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().touchIDState = _this.touchIDState;
                })
                    .catch(function (err) {
                    _this.navCtrl.setRoot('SettingsPage');
                    __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(_this.messageTouchNotAvailable);
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().touchIDState = _this.touchIDState;
            }
            vPinSvc.VisibleScreen = false;
        });
        verifyScreenModal.present();
    };
    ChangeTouchIDPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changeTouchID',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\changeTouchID\changeTouchID.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Touch ID\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row padding>\n    <p>{{use_fingerprint_not_PIN}}</p>\n    <p>\n      <span>\n        {{use_same_finger}}\n      </span>\n    </p>\n  </ion-row>\n  <ion-row class="touch-setting">\n    <ion-item>\n      <ion-label>Touch ID</ion-label>\n      <ion-toggle class="new-style" [(ngModel)]="touchIDState" (ionChange)="changeTouchState()"></ion-toggle>\n    </ion-item>\n\n  </ion-row>\n</ion-content>\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="ChangeTouchIDPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\changeTouchID\changeTouchID.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], ChangeTouchIDPage);
    return ChangeTouchIDPage;
}());

//# sourceMappingURL=changeTouchID.js.map

/***/ })

});
//# sourceMappingURL=102.js.map