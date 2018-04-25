webpackJsonp([94],{

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(841);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AccountManagement_verifyPIN_verifyPIN_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AccountManagement_verifyPIN_verifyPIN__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_pinCodeService_pinCode_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_login_authenticationDataSharing_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TabsPage = (function () {
    function TabsPage(navParams, modalCtrl, touchId, navCtrl, authGuardService) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.touchId = touchId;
        this.navCtrl = navCtrl;
        this.authGuardService = authGuardService;
        // tabRoots = ['HomePage', 'YourCardDetailsPage', 'ChangeCardPage', 'ExchangePage'];
        this.tabRoots = ['YourCardDetailsPage', 'ChangeCardPage', 'ExchangePage', 'MorePage'];
        this.selectedIndex = 0;
        this.tab1Root = 'YourCardDetailsPage';
        this.tab2Root = 'ChangeCardPage';
        this.tab3Root = 'ExchangePage';
        this.tab4Root = 'MorePage';
        this.needToUpdatePIN = false;
        if (__WEBPACK_IMPORTED_MODULE_5__framework_services_pinCodeService_pinCode_service__["a" /* PinCodeService */]
            .getInstance()
            .needSetupPinCode(__WEBPACK_IMPORTED_MODULE_6__framework_login_authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail) === true) {
            this.needToUpdatePIN = true;
        }
    }
    TabsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.needToUpdatePIN === true) {
            return this.navCtrl.setRoot('SetupPINPage', { nextPage: 'TouchIDSettingFirstTimePage' });
        }
        if (this.navParams.get('keepData')) {
            localStorage.setItem('no-reload-home-data', 'true');
            delete this.navParams.data.keepData;
        }
        else {
            localStorage.removeItem('no-reload-home-data');
        }
        if (this.navParams.get('tab')) {
            var tab = this.navParams.get('tab');
            var index = this.tabRoots.indexOf(tab);
            this.selectedIndex = (index > -1) ? index : 0;
            if (this.tabs) {
                this.tabs.select(this.selectedIndex, {});
            }
            delete this.navParams.data.tab;
        }
        if (this.navParams.get('root')) {
            var root = this.navParams.get('root');
            var data = this.navParams.get('data') || {};
            this.navCtrl.setRoot(root, data);
            delete this.navParams.data.root;
        }
        if (this.navParams.get('noVerify')) {
            delete this.navParams.data.noVerify;
            return;
        }
        var vPinSvc = __WEBPACK_IMPORTED_MODULE_3__AccountManagement_verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance();
        // after 3 times entered wrong PIN code
        vPinSvc.verifyPINClosed.subscribe(function (res) {
            if (res === true) {
                _this.navCtrl.setRoot('LoginPage');
            }
        });
        var showVerifyPIN = this.navParams.get('showVerifyPIN');
        if (vPinSvc.VisibleScreen === false && showVerifyPIN && showVerifyPIN === true) {
            this.navParams.data['showVerifyPIN'] = void (0);
            var verifyPIN = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__AccountManagement_verifyPIN_verifyPIN__["a" /* VerifyPINPage */], {}, {
                cssClass: 'touchable-page'
            });
            verifyPIN.onDidDismiss(function () {
                vPinSvc.VisibleScreen = false;
            });
            vPinSvc.VisibleScreen = true;
            verifyPIN.present();
        }
    };
    TabsPage.prototype.tabSelected = function (tab) {
        var cards = __WEBPACK_IMPORTED_MODULE_8__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().getCardsList();
        if (!cards || cards.length > 0) {
            this.tabs.select(tab.index);
        }
        else {
            if (tab.index === 3) {
                this.tabs.select(tab.index);
            }
            else {
                this.tabs.select(0);
            }
        }
    };
    TabsPage.prototype.ionVieDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_8__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().tabs = this.tabs;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("tabs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Tabs */])
    ], TabsPage.prototype, "tabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\Others\tabs\tabs.html"*/'<ion-tabs  #tabs [selectedIndex]="selectedIndex" (ionChange)="tabSelected($event)">\n  <ion-tab [root]="tab1Root" [rootParams]="yourCardData"  tabTitle="YOUR CARDS" tabIcon="l2s-card" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="STORES"  tabIcon="l2s-basket"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="YOUR BENEFITS" tabIcon="l2s-aperture"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="MORE" tabIcon="l2s-more"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\Others\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=94.js.map