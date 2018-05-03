webpackJsonp([37],{

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__where2SpendSharingData_services__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__where2Spend_services__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_nav_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Others_tabs_tabs__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var VALID_CARD_TYPES = [];
var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_10__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var MASTER_CARD_TYPES = ['MASTERCARD', 'PMASTERCARD'];
var L2S_CARD_TYPES = ['FLEXECASH', 'FLEXECODE', 'FLEXECODE_2.0'];
var ChangeCardPage = (function () {
    function ChangeCardPage(navCtrl, where2SpendServices, iab, navSvc, tabPage, routeManager) {
        this.navCtrl = navCtrl;
        this.where2SpendServices = where2SpendServices;
        this.iab = iab;
        this.navSvc = navSvc;
        this.tabPage = tabPage;
        this.routeManager = routeManager;
        this.validCardType = VALID_CARD_TYPES;
        this.imageBaseUrl = 'https://www.love2shop.co.uk';
    }
    ChangeCardPage.prototype.ionViewWillEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (__WEBPACK_IMPORTED_MODULE_3__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance()) {
                var needBackToYourCard = __WEBPACK_IMPORTED_MODULE_3__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail;
                if (needBackToYourCard === true) {
                    this.navCtrl.push('Where2SpendInStoreMapPage');
                    return;
                }
            }
            if (__WEBPACK_IMPORTED_MODULE_11__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance()) {
                var cards = __WEBPACK_IMPORTED_MODULE_11__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().getCardsList();
                if (!cards || cards.length <= 0) {
                    this.gotoAddCard();
                }
                this.listCards = this._filterCardsList(cards);
            }
        }
    };
    ChangeCardPage.prototype.gotoAddCard = function () {
    };
    ChangeCardPage.prototype.pickCardItem = function (item) {
        __WEBPACK_IMPORTED_MODULE_3__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().selectedCard = item;
        __WEBPACK_IMPORTED_MODULE_11__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = item;
        if (this._isL2SCard(item)) {
            this._gotoMapPage();
        }
        else if (this._isMasterCard(item)) {
            this.gotoVirtalMsCard();
        }
    };
    ChangeCardPage.prototype.gotoVirtalMsCard = function () {
        var _this = this;
        if (this.opemMsCardSub) {
            this.opemMsCardSub.unsubscribe();
        }
        var body = { requestType: __WEBPACK_IMPORTED_MODULE_4__where2Spend_services__["c" /* VIRTUAL_MASTERCARD */] };
        this.opemMsCardSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe(function (res) {
            if (res && res.response && res.response.link) {
                var url = res.response.link;
                var browser = _this.iab.create(url, "_system", "location=true");
            }
        }, function (err) {
        });
    };
    ChangeCardPage.prototype._handleError = function (res) {
        __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        var msg = DEFAULT_ERROR_MSG;
        try {
            var body = JSON.parse(res._body);
            msg = body.errors[0].message;
        }
        catch (e) {
            msg = DEFAULT_ERROR_MSG;
        }
        this._showError(msg);
    };
    ChangeCardPage.prototype._showError = function (message) {
        __WEBPACK_IMPORTED_MODULE_6__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    ChangeCardPage.prototype._gotoMapPage = function () {
        __WEBPACK_IMPORTED_MODULE_3__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepData = false;
        __WEBPACK_IMPORTED_MODULE_3__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().useMyLocation = true;
        __WEBPACK_IMPORTED_MODULE_3__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepLocation = false;
        __WEBPACK_IMPORTED_MODULE_3__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().currenrLocation = null;
        __WEBPACK_IMPORTED_MODULE_3__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories = null;
        this.navCtrl.push('Where2SpendInStoreMapPage');
    };
    ChangeCardPage.prototype._filterCardsList = function (cards) {
        var result = [];
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var card = cards_1[_i];
            if (this._filterCardFn(card)) {
                result.push(card);
            }
        }
        return result;
    };
    ChangeCardPage.prototype._filterCardFn = function (card) {
        return card && this._isValidCardType(card) && this._cardCanShowWhere2Spend(card);
    };
    ChangeCardPage.prototype._isValidCardType = function (card) {
        return this._isMasterCard(card) || this._isL2SCard(card);
    };
    ChangeCardPage.prototype._isMasterCard = function (card) {
        return card && card.cardType && MASTER_CARD_TYPES.indexOf(card.cardType) > -1;
    };
    ChangeCardPage.prototype._isL2SCard = function (card) {
        return card && card.cardType && L2S_CARD_TYPES.indexOf(card.cardType) > -1;
    };
    ChangeCardPage.prototype._cardCanShowWhere2Spend = function (card) {
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("tabs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Tabs */])
    ], ChangeCardPage.prototype, "tabs", void 0);
    ChangeCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changeCard',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\changeCard\changeCard.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title item-center>\n      Where To Spend\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-row class="txt-intro">\n          <p text-center>Please choose a card below</p>\n        </ion-row>\n        <ion-row class="list-cards">\n          <ion-list>\n            <ion-item *ngFor="let cardItem of listCards; let index=index; let odd=odd; let even=even;" [ngClass]="{ odd: odd, even: even }"\n              (click)="pickCardItem(cardItem)">\n              <ion-row>\n                <ion-col col-3>\n                  <img class="card-thumb" [src]="imageBaseUrl + cardItem.cardLogoPath">\n                </ion-col>\n                <ion-col col-8 padding>\n                  <h2 *ngIf="!cardItem?.nickname" class="card-title">&nbsp;</h2>\n                  <h2 *ngIf="cardItem?.nickname" class="card-title">{{ cardItem?.nickname }}</h2>\n                  <div class="card-subtitle">{{ cardItem?.propositionName }}</div>\n                </ion-col>\n                <ion-col col-1>\n                  <ion-icon class="icon-md" name="ios-arrow-forward"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\changeCard\changeCard.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__where2Spend_services__["d" /* Where2SpendServices */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__where2Spend_services__["d" /* Where2SpendServices */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_8__shared_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_9__Others_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */]])
    ], ChangeCardPage);
    return ChangeCardPage;
}());

//# sourceMappingURL=changeCard.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeCardPageModule", function() { return ChangeCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changeCard__ = __webpack_require__(1020);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangeCardPageModule = (function () {
    function ChangeCardPageModule() {
    }
    ChangeCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__changeCard__["a" /* ChangeCardPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changeCard__["a" /* ChangeCardPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__changeCard__["a" /* ChangeCardPage */]]
        })
    ], ChangeCardPageModule);
    return ChangeCardPageModule;
}());

//# sourceMappingURL=changeCard.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Where2SpendSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var Where2SpendSharingDataService = (function () {
    function Where2SpendSharingDataService() {
        this.needBackToYOurCardDetail = false;
        this.updateEvent$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(Where2SpendSharingDataService.prototype, "needBackToYOurCard", {
        get: function () {
            return this.needBackToYOurCardDetail;
        },
        set: function (status) {
            this.needBackToYOurCardDetail = status;
        },
        enumerable: true,
        configurable: true
    });
    Where2SpendSharingDataService.prototype.resetState = function () {
        this.categories = null;
        this.selectedCard = null;
        this.useMyLocation = true;
        this.currenrLocation = false;
        this.keepLocation = false;
        this.keepData = false;
        this.refreshCategory = false;
        this.gpsStatus = false;
        this.needBackToYOurCardDetail = false;
    };
    Where2SpendSharingDataService.getInstance = function () {
        if (!Where2SpendSharingDataService._instance) {
            Where2SpendSharingDataService._instance = new Where2SpendSharingDataService();
        }
        return Where2SpendSharingDataService._instance;
    };
    return Where2SpendSharingDataService;
}());

//# sourceMappingURL=where2SpendSharingData.services.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARD_INSTORE; });
/* unused harmony export VOUCHER_INSTORE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ONLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VIRTUAL_MASTERCARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Where2SpendServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CARD_INSTORE = 'CARD_INSTORE';
var VOUCHER_INSTORE = 'VOUCHER_INSTORE';
var ONLINE = 'ONLINE';
var VIRTUAL_MASTERCARD = 'VIRTUAL_MASTERCARD';
var Where2SpendServices = (function () {
    function Where2SpendServices(http) {
        this.http = http;
    }
    Where2SpendServices.prototype.retriveRetailerLocation = function (body) {
        return this.http.post('card/where', body).share();
    };
    Where2SpendServices.prototype.searchPostcodeAutoComplete = function (url) {
        return this.http.getExternal(url);
    };
    Where2SpendServices.prototype.lookUpAddress = function (url) {
        return this.http.getExternal(url);
    };
    Where2SpendServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], Where2SpendServices);
    return Where2SpendServices;
}());

//# sourceMappingURL=where2Spend.services.js.map

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\Others\tabs\tabs.html"*/'<ion-tabs  #tabs [selectedIndex]="selectedIndex" (ionChange)="tabSelected($event)">\n  <ion-tab [root]="tab1Root" [rootParams]="yourCardData"  tabTitle="YOUR CARDS" tabIcon="l2s-card" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="STORES"  tabIcon="l2s-basket"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="YOUR BENEFITS" tabIcon="l2s-aperture"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="MORE" tabIcon="l2s-more"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\Others\tabs\tabs.html"*/
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
//# sourceMappingURL=37.js.map