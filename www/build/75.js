webpackJsonp([75],{

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderMasterCardExchangeStep2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CardManagement_cardDetails_cardDetailsSharing_services__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderMasterCardExchangeStep2 = (function () {
    function OrderMasterCardExchangeStep2(routeManager, navParams, navCtrl) {
        this.routeManager = routeManager;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.purchasemastercard_form_label_card_details = __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.purchasemastercard_form_label_card_details;
        this.order_confirmation_card_tfoot = __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_confirmation_card_tfoot;
    }
    OrderMasterCardExchangeStep2.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.app-root').addClass('not-show-tab');
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_5__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('orderSuccess')) {
                this.orderComplete = this.navParams.get('orderSuccess');
            }
            if (this.navParams.get('orderInforAfterGenerate')) {
                this.orderInforAfterGenerate = this.navParams.get('orderInforAfterGenerate');
            }
            if (this.navParams.get('cardPrimary')) {
                this.cardPrimary = this.navParams.get('cardPrimary');
            }
            if (this.navParams.get('imageMasterCard')) {
                this.imageMasterCard = this.navParams.get('imageMasterCard');
            }
            this.orderComplete.orderNumber = this.orderInforAfterGenerate.orderNumber;
            this.orderComplete.logoPath = this.cardPrimary.cardLogoPath;
            this.orderComplete.title = this.orderInforAfterGenerate.title;
            this.orderComplete.lastName = this.orderInforAfterGenerate.lastName;
            this.orderComplete.firstName = this.orderInforAfterGenerate.firstName;
            this.orderComplete.totalPaymentAmount = this.orderInforAfterGenerate.orderlines[0].paymentAmount;
            var virtualCardNumber = this.orderComplete.cardNumber;
            this.cardVirtualToShowOnCard = virtualCardNumber.replace(/(\d{4})/g, '$1 ');
        }
    };
    OrderMasterCardExchangeStep2.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    OrderMasterCardExchangeStep2.prototype.goCardDetails = function () {
        var _this = this;
        var card = {
            reloadData: true,
            cardNumber: this.orderComplete.cardNumber,
            cardId: this.orderComplete.cardID
        };
        __WEBPACK_IMPORTED_MODULE_3__CardManagement_cardDetails_cardDetailsSharing_services__["a" /* CardDetailSharingDataService */].getInstance().gotoCardDataReload = card;
        __WEBPACK_IMPORTED_MODULE_6__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = card;
        this.navCtrl.popToRoot({ animate: false, duration: 0 });
        setTimeout(function () { return _this.navCtrl.parent.select(0, { animate: false, duration: 0 }); }, 200);
    };
    OrderMasterCardExchangeStep2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderMasterCardExchangeStep2',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderMasterCardExchange\orderMasterCardExchangeStep2\orderMasterCardExchangeStep2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      order complete\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row class="card-item--wrapper" text-center>\n      <ion-col>\n        <p text-center>Order #{{orderComplete?.orderNumber}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="img--wrapper">\n          <div class="img-area p-t-15 p-b-15">\n            <img src="{{baseResourceUrl}}{{imageMasterCard}}"/>\n          </div>\n        </div>\n        <!---->\n        <!--<div class="img&#45;&#45;wrapper">-->\n          <!--<p class="card-number">-->\n            <!--{{cardVirtualToShowOnCard}}-->\n          <!--</p>-->\n          <!--<p class="card-cvv">-->\n            <!--{{orderComplete?.cvv}}-->\n          <!--</p>-->\n          <!--<p class="card-expire">-->\n            <!--EXP {{orderComplete?.expiryDate}}-->\n          <!--</p>-->\n          <!--<div class="img-area">-->\n              <!--<img src="assets/images/anywhere-success-mastercard.jpg"/>-->\n          <!--</div>-->\n        <!--</div>-->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="info-bar">\n        <p class="info-title">{{purchasemastercard_form_label_card_details}}</p>\n        <p>\n          <span>Name of Virtual Card</span> {{orderComplete?.title}} {{orderComplete?.firstName}} {{orderComplete?.lastName}}\n        </p>\n        <p>\n          <span>Virtual Card Number</span> {{orderComplete?.cardNumber}}\n        </p>\n        <p>\n          <span>Expires</span> {{orderComplete?.expiryDate}}\n        </p>\n        <p>\n          <span>CVV</span> {{orderComplete?.cvv}}\n        </p>\n        <p>\n          <span>Virtual Card Balance</span> {{orderComplete?.totalPaymentAmount  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n        </p>\n        <p>\n          <span>Virtual Card Reference</span> {{orderComplete?.nickname}}\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <div class="note">\n        {{order_confirmation_card_tfoot}}\n      </div>\n    </ion-row>\n\n\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button block large (click)="goCardDetails()">\n        View your cards\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderMasterCardExchange\orderMasterCardExchangeStep2\orderMasterCardExchangeStep2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], OrderMasterCardExchangeStep2);
    return OrderMasterCardExchangeStep2;
}());

//# sourceMappingURL=orderMasterCardExchangeStep2.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderMasterCardExchangeStep2Module", function() { return orderMasterCardExchangeStep2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderMasterCardExchangeStep2__ = __webpack_require__(1002);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var orderMasterCardExchangeStep2Module = (function () {
    function orderMasterCardExchangeStep2Module() {
    }
    orderMasterCardExchangeStep2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderMasterCardExchangeStep2__["a" /* OrderMasterCardExchangeStep2 */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderMasterCardExchangeStep2__["a" /* OrderMasterCardExchangeStep2 */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderMasterCardExchangeStep2__["a" /* OrderMasterCardExchangeStep2 */]]
        })
    ], orderMasterCardExchangeStep2Module);
    return orderMasterCardExchangeStep2Module;
}());

//# sourceMappingURL=orderMasterCardExchangeStep2.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);

var CardDetailSharingDataService = (function () {
    function CardDetailSharingDataService() {
        this.defaultMasterData = {};
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](this.currentMasterData);
        if (CardDetailSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use CardDetailSharingDataService.getInstance() instead of new.');
        }
        CardDetailSharingDataService._instance = this;
    }
    Object.defineProperty(CardDetailSharingDataService.prototype, "state$", {
        get: function () {
            return this._state$;
        },
        enumerable: true,
        configurable: true
    });
    CardDetailSharingDataService.prototype.resetState = function () {
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$.next(this.currentMasterData);
    };
    CardDetailSharingDataService.prototype.saveStep1Screen = function (step1Model) {
        this.currentMasterData.step1Model = step1Model;
    };
    CardDetailSharingDataService.prototype.saveStep2Screen = function (step2Model) {
        this.currentMasterData.step2Model = step2Model;
    };
    CardDetailSharingDataService.prototype.getAmountTopupAtStep1 = function () {
        return this.currentMasterData.step1Model.topUpInput;
    };
    CardDetailSharingDataService.prototype.savePrimaryCard = function (primaryCard) {
        this.primaryCard = primaryCard;
    };
    CardDetailSharingDataService.prototype.getPrimaryCard = function () {
        return this.primaryCard;
    };
    CardDetailSharingDataService.prototype.resetPrimaryCard = function () {
        this.primaryCard = null;
    };
    CardDetailSharingDataService.prototype.saveCurrentCard = function (currentCard) {
        this.currentCard = currentCard;
    };
    CardDetailSharingDataService.prototype.getCurrentCard = function () {
        return this.currentCard;
    };
    CardDetailSharingDataService.prototype.resetCurrentCard = function () {
        this.currentCard = null;
    };
    Object.defineProperty(CardDetailSharingDataService.prototype, "gotoCardData", {
        get: function () {
            return this._gotoCardData;
        },
        set: function (card) {
            this._gotoCardData = card;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardDetailSharingDataService.prototype, "gotoCardDataReload", {
        get: function () {
            return this._gotoCardDataReload;
        },
        set: function (card) {
            this._gotoCardDataReload = card;
        },
        enumerable: true,
        configurable: true
    });
    CardDetailSharingDataService.getInstance = function () {
        return CardDetailSharingDataService._instance;
    };
    // tslint:disable-next-line:member-ordering
    CardDetailSharingDataService._instance = new CardDetailSharingDataService();
    return CardDetailSharingDataService;
}());

//# sourceMappingURL=cardDetailsSharing.services.js.map

/***/ })

});
//# sourceMappingURL=75.js.map