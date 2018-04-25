webpackJsonp([39],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeTopUpSuccessFullPageModule", function() { return MakeTopUpSuccessFullPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__makeTopUpSuccessfull__ = __webpack_require__(940);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MakeTopUpSuccessFullPageModule = (function () {
    function MakeTopUpSuccessFullPageModule() {
    }
    MakeTopUpSuccessFullPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__makeTopUpSuccessfull__["a" /* MakeTopUpSuccessFullPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__makeTopUpSuccessfull__["a" /* MakeTopUpSuccessFullPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__makeTopUpSuccessfull__["a" /* MakeTopUpSuccessFullPage */]
            ]
        })
    ], MakeTopUpSuccessFullPageModule);
    return MakeTopUpSuccessFullPageModule;
}());

//# sourceMappingURL=makeTopUpSuccessfull.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDiscountGiftCardSharingDataService; });
var OrderDiscountGiftCardSharingDataService = (function () {
    function OrderDiscountGiftCardSharingDataService() {
        this.addressDelivery = {
            addressIsUpdated: false,
            newAddress: null
        };
        this.needUpdateOrderNumber = {
            status: false,
            newOrderNumber: null
        };
        this.selectGreetingCard = {
            selectedGreetingCard: false,
            greetingCardSelected: null,
            greetingCardIndex: 0,
        };
        this.selectExtraGreetingCard = {
            selectedExtraGreetingCard: false,
            extraGreetingCardSelected: null,
            extraGreetingCardIndex: 0,
            quantity: 0,
        };
        this.isZeroQuantityExtra = false;
        this.msgPersonal = {
            haveMessagePersonal: false,
            contentMessage: null,
        };
        if (OrderDiscountGiftCardSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use YourCardDetailsSharingDataService.getInstance() instead of new.');
        }
        OrderDiscountGiftCardSharingDataService._instance = this;
    }
    OrderDiscountGiftCardSharingDataService.prototype.resetData = function () {
        this.addressDelivery = {
            addressIsUpdated: false,
            newAddress: null
        };
        this.resetFreeCardDesign();
        this.resetExtraCardDesign();
        this.resetmsgPersonal();
    };
    OrderDiscountGiftCardSharingDataService.prototype.resetFreeCardDesign = function () {
        this.selectGreetingCard = {
            selectedGreetingCard: false,
            greetingCardSelected: null,
            greetingCardIndex: 0,
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.resetExtraCardDesign = function () {
        this.selectExtraGreetingCard = {
            selectedExtraGreetingCard: false,
            extraGreetingCardSelected: null,
            extraGreetingCardIndex: 0,
            quantity: 0,
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.resetmsgPersonal = function () {
        this.msgPersonal = {
            haveMessagePersonal: false,
            contentMessage: null
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.needUpdateDelivery = function (data) {
        this.addressDelivery = {
            addressIsUpdated: true,
            newAddress: data
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.getUpdateDelivery = function () {
        return this.addressDelivery;
    };
    OrderDiscountGiftCardSharingDataService.prototype.resetDelivery = function () {
        this.addressDelivery = {
            addressIsUpdated: false,
            newAddress: null
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.saveSelectedFreeGreetingCard = function (index, card) {
        this.resetFreeCardDesign();
        this.selectGreetingCard = {
            selectedGreetingCard: true,
            greetingCardSelected: card || null,
            greetingCardIndex: index || null,
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.getSelectedFreeGreetingCard = function () {
        return this.selectGreetingCard;
    };
    OrderDiscountGiftCardSharingDataService.prototype.saveExtraGreetingCard = function (card, index, quantity) {
        this.resetExtraCardDesign();
        this.selectExtraGreetingCard = {
            selectedExtraGreetingCard: true,
            extraGreetingCardSelected: card || null,
            extraGreetingCardIndex: index || null,
            quantity: quantity || 0,
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.getExtraGreetingCard = function () {
        return this.selectExtraGreetingCard;
    };
    OrderDiscountGiftCardSharingDataService.prototype.saveMessagePersonal = function (msg) {
        this.msgPersonal = {
            haveMessagePersonal: true,
            contentMessage: msg
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.getMessagePersonal = function () {
        return this.msgPersonal;
    };
    OrderDiscountGiftCardSharingDataService.prototype.setisZeroQuantityExtra = function (msg) {
        this.isZeroQuantityExtra = true;
    };
    OrderDiscountGiftCardSharingDataService.prototype.getIsZeroQuantityExtra = function () {
        return this.isZeroQuantityExtra;
    };
    OrderDiscountGiftCardSharingDataService.prototype.getNewOrderNumber = function () {
        return this.needUpdateOrderNumber;
    };
    OrderDiscountGiftCardSharingDataService.prototype.resetNewOrderNumber = function () {
        this.needUpdateOrderNumber = {
            status: false,
            newOrderNumber: null
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.setNewOrderNumber = function (newOrderNumber) {
        this.needUpdateOrderNumber = {
            status: true,
            newOrderNumber: newOrderNumber
        };
    };
    OrderDiscountGiftCardSharingDataService.getInstance = function () {
        return OrderDiscountGiftCardSharingDataService._instance;
    };
    OrderDiscountGiftCardSharingDataService._instance = new OrderDiscountGiftCardSharingDataService();
    return OrderDiscountGiftCardSharingDataService;
}());

//# sourceMappingURL=orderDiscountGiftCardSharingData.services.js.map

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

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenefitsDataService; });
var BenefitsDataService = (function () {
    function BenefitsDataService() {
        this._needBackToExchange = {
            needBackToExchange: false,
            currentIndex: null,
        };
        this.currentCardNumber = null;
    }
    BenefitsDataService.getInstance = function () {
        if (!this._instance) {
            this._instance = this.createInstance();
        }
        return this._instance;
    };
    BenefitsDataService.createInstance = function () {
        return new BenefitsDataService();
    };
    Object.defineProperty(BenefitsDataService.prototype, "currentCardNumber", {
        get: function () {
            return this._currentCardNumber;
        },
        set: function (value) {
            this._currentCardNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    BenefitsDataService.prototype.setNeedBackToExchange = function (status, index) {
        this._needBackToExchange.needBackToExchange = status;
        this._needBackToExchange.currentIndex = index;
    };
    BenefitsDataService.prototype.getNeedBackToExchange = function () {
        return this._needBackToExchange;
    };
    BenefitsDataService.prototype.resetNeedBackToExchange = function () {
        this._needBackToExchange = {
            needBackToExchange: false,
            currentIndex: null,
        };
    };
    return BenefitsDataService;
}());

//# sourceMappingURL=benefitsData.service.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeTopUpSuccessFullPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cardDetailsSharing_services__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__benefits_benefitsData_service__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orderManagement_orderDiscountGiftCard_orderDiscountGiftCardSharingData_services__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MakeTopUpSuccessFullPage = (function () {
    function MakeTopUpSuccessFullPage(routeManager, navCtrl, navParams) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order_confirmation_default_p_title = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_confirmation_default_p_title;
        this.order_confirmation_default_p_strapline = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_confirmation_default_p_strapline;
    }
    MakeTopUpSuccessFullPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_8__yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance()
            .refreshListCards$
            .next('update-list-cards-after-topup-successfully');
        __WEBPACK_IMPORTED_MODULE_6__orderManagement_orderDiscountGiftCard_orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().resetNewOrderNumber();
        this.needBackToExchangeObject = __WEBPACK_IMPORTED_MODULE_4__benefits_benefitsData_service__["a" /* BenefitsDataService */].getInstance().getNeedBackToExchange();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('dataAfterGenerateOrder')) {
                this.dataAfterGenerateOrder = this.navParams.get('dataAfterGenerateOrder');
                this.total = parseFloat(this.dataAfterGenerateOrder.orderValue) - parseFloat(this.dataAfterGenerateOrder.totalDiscount) + parseFloat(this.dataAfterGenerateOrder.feeAmount);
            }
            this.cardIndex = this.navParams.get('cardIndex');
        }
    };
    MakeTopUpSuccessFullPage.prototype.ionViewDidLeave = function () {
        __WEBPACK_IMPORTED_MODULE_4__benefits_benefitsData_service__["a" /* BenefitsDataService */].getInstance().resetNeedBackToExchange();
    };
    MakeTopUpSuccessFullPage.prototype.returnToyourCard = function () {
        var cardCurrent = __WEBPACK_IMPORTED_MODULE_8__yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().getCardCurrent;
        var card = {
            reloadData: true,
            cardNumber: cardCurrent.cardNumber,
            cardId: cardCurrent.cardID
        };
        __WEBPACK_IMPORTED_MODULE_3__cardDetailsSharing_services__["a" /* CardDetailSharingDataService */].getInstance().gotoCardDataReload = card;
        if (this.needBackToExchangeObject.needBackToExchange) {
            this.navCtrl.pop();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery___default()('.app-root').removeClass('not-show-tab');
            this.navCtrl.popToRoot();
            this.navCtrl.parent.select(0);
        }
    };
    MakeTopUpSuccessFullPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-makeTopUpSuccessfull',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\makeTopUpSuccessfull\makeTopUpSuccessfull.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      order complete\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="p-l-5 p-r-5 content-wrapper">\n    <ion-row class="p-b-15">\n      <ion-col>\n        <p><b>{{order_confirmation_default_p_title}}</b></p>\n        <p>{{order_confirmation_default_p_strapline}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-card class="card-item--wrapper m-b-15 order-num" padding>\n      <p text-center>\n        Order #{{dataAfterGenerateOrder?.orderNumber}}\n      </p>\n    </ion-card>\n\n    <ion-row class="padding-12">\n      <ion-col col-9>\n        Product\n      </ion-col>\n      <ion-col col-3>\n        Price\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="padding-12 card-item--wrapper">\n      <ion-col col-9 class="p-r-20">\n        <p>{{dataAfterGenerateOrder?.orderlines[0].productDescription}}</p>\n        <p>Quantity: {{dataAfterGenerateOrder?.orderlines[0].quantity}}</p>\n      </ion-col>\n      <ion-col col-3>\n        {{dataAfterGenerateOrder?.orderValue | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="padding-12">\n      <ion-col col-9 text-right class="p-r-20">\n        <p>Subtotal</p>\n        <p *ngIf="dataAfterGenerateOrder?.totalDiscount > 0">Discount</p>\n        <p *ngIf="dataAfterGenerateOrder?.feeAmount > 0">Payment method fee</p>\n      </ion-col>\n      <ion-col col-3>\n        <p>{{dataAfterGenerateOrder?.orderValue| currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n        <p *ngIf="dataAfterGenerateOrder?.totalDiscount > 0">{{dataAfterGenerateOrder?.totalDiscount| currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n        <p *ngIf="dataAfterGenerateOrder?.feeAmount > 0">{{dataAfterGenerateOrder?.feeAmount| currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class="total--background m-b-30" padding>\n      <ion-col col-9 text-right class="p-r-20">\n        <p class="text-uppercase">Total</p>\n      </ion-col>\n      <ion-col col-3>\n        <p class="text-uppercase">{{total| currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row margin-bottom>\n      <ion-col>\n        <p class="label text-bold">Billing Address</p>\n        <p class="value" *ngIf="dataAfterGenerateOrder?.addressLine1">{{dataAfterGenerateOrder?.addressLine1}}</p>\n        <p class="value" *ngIf="dataAfterGenerateOrder?.addressLine2">{{dataAfterGenerateOrder?.addressLine2}}</p>\n        <p class="value" *ngIf="dataAfterGenerateOrder?.town">{{dataAfterGenerateOrder?.town}}</p>\n        <p class="value" *ngIf="dataAfterGenerateOrder?.county">{{dataAfterGenerateOrder?.county}}</p>\n        <p class="value" *ngIf="dataAfterGenerateOrder?.postcode">{{dataAfterGenerateOrder?.postcode}}</p>\n        <p class="value" *ngIf="dataAfterGenerateOrder?.country">{{dataAfterGenerateOrder?.country}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button *ngIf="!needBackToExchangeObject?.needBackToExchange" ion-button block large color="primary" (click)="returnToyourCard()">\n        Return to your cards\n      </button>\n      <button *ngIf="needBackToExchangeObject?.needBackToExchange" ion-button block large color="primary" (click)="returnToyourCard()">\n        Continue shopping\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\makeTopUpSuccessfull\makeTopUpSuccessfull.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MakeTopUpSuccessFullPage);
    return MakeTopUpSuccessFullPage;
}());

//# sourceMappingURL=makeTopUpSuccessfull.js.map

/***/ })

});
//# sourceMappingURL=39.js.map