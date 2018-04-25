webpackJsonp([70],{

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_login_logoutData_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AccountManagement_verifyPIN_verifyPIN_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__(1013);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SettingsPage = (function () {
    function SettingsPage(alertCtrl, routeManager, authService, logoutDataService, modalCtrl, navCtrl, touchId, navSvc) {
        this.alertCtrl = alertCtrl;
        this.routeManager = routeManager;
        this.authService = authService;
        this.logoutDataService = logoutDataService;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.touchId = touchId;
        this.navSvc = navSvc;
        this.settingsPage = [
            {
                title: "Account Details",
                routeLink: "AccountDetailsPage"
            },
            {
                title: "Change Email",
                routeLink: "ChangeEmailPage"
            },
            {
                title: "Change Password",
                routeLink: "ChangePasswordPage"
            },
            {
                title: "Change PIN",
                routeLink: "ChangePINPage"
            },
            {
                title: "Touch ID",
                routeLink: "ChangeTouchIDPage"
            },
            {
                title: "Change Payment Methods",
                routeLink: "ChangePaymentMethodsPage"
            }
        ];
        this.changing_PIN = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.changing_PIN;
        this.account_management_logout = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_management_logout;
    }
    SettingsPage.prototype.gotoPage = function (page) {
        var _this = this;
        var vPinSvc = __WEBPACK_IMPORTED_MODULE_5__AccountManagement_verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance();
        var verifyScreenModal;
        if (page === 'ChangePINPage') {
            this.showAlert(page);
        }
        else if (page === 'ChangeTouchIDPage') {
            this.touchId.isAvailable().then(function (res) {
                _this.navCtrl.push(page);
            }).catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(__WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_api_touch_ID_not_available);
            });
        }
        else {
            this.navCtrl.push(page);
        }
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_11_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    SettingsPage.prototype.showAlert = function (page) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: 'Change PIN',
            cssClass: 'l2s-alert--flat l2s-alert--twobutton',
            message: this.changing_PIN,
            buttons: [
                {
                    text: 'Cancel',
                    cssClass: 'cancel-button',
                    handler: function (data) {
                    }
                },
                {
                    text: 'OK',
                    cssClass: 'main-button',
                    handler: function (data) {
                        _this.navCtrl.push(page);
                    }
                },
                {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: this.account_management_logout,
            cssClass: 'l2s-alert--flat l2s-alert--twobutton',
            buttons: [
                {
                    text: 'Cancel',
                    cssClass: 'cancel-button',
                    handler: function () {
                    }
                },
                {
                    text: 'OK',
                    cssClass: 'main-button',
                    handler: function () {
                        __WEBPACK_IMPORTED_MODULE_11_jquery___default()('.app-root').removeClass('not-show-tab');
                        __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().IsActiveYourCardDetailsPage = false;
                        __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = {};
                        __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().resetState();
                        if (__WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(__WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().PauseSub)) {
                            __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().PauseSub.unsubscribe();
                            __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().PauseSub = undefined;
                        }
                        _this.logoutDataService.logout()
                            .subscribe(function (res) {
                        });
                        _this.authService.Logout();
                        __WEBPACK_IMPORTED_MODULE_8__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().resetState();
                        _this.navSvc.getRootNav().setRoot('WelcomePage');
                        location.reload();
                    }
                },
                {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.gotoHomePage = function () {
        this.navCtrl.parent.select(0);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\Others\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ng-container *ngFor="let settingItem of settingsPage">\n      <button ion-item detail-none\n              (click)="gotoPage(settingItem.routeLink)"\n      >{{ settingItem.title }}</button>\n    </ng-container>\n    <button ion-item detail-none (click)="logout()">Logout</button>\n  </ion-list>\n\n\n  \n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="SettingsPage-back-button">\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\Others\settings\settings.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__framework_login_logoutData_service__["a" /* LogoutDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_4__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_3__framework_login_logoutData_service__["a" /* LogoutDataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* NavService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_service__ = __webpack_require__(369);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__nav_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_key_string_pipe__ = __webpack_require__(376);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__(372);
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(1012);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ })

});
//# sourceMappingURL=70.js.map