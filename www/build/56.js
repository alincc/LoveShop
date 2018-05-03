webpackJsonp([56],{

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundValuePageModule", function() { return RefundValuePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__refundValue__ = __webpack_require__(958);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RefundValuePageModule = (function () {
    function RefundValuePageModule() {
    }
    RefundValuePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__refundValue__["a" /* RefundValuePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__refundValue__["a" /* RefundValuePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__refundValue__["a" /* RefundValuePage */]]
        })
    ], RefundValuePageModule);
    return RefundValuePageModule;
}());

//# sourceMappingURL=refundValue.module.js.map

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

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundValueService; });
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


var RefundValueService = (function () {
    function RefundValueService(http) {
        this.http = http;
    }
    RefundValueService.prototype.postValidateVirtualMasterCard = function (cardId) {
        return this.http.post("card/mastercard/validate-refund", cardId);
    };
    RefundValueService.prototype.postPerformVirtualMasterCard = function (cardId) {
        return this.http.post("card/mastercard/refund", cardId);
    };
    RefundValueService.prototype.getContentFromRetreiveContent = function (cardUrl) {
        return this.http.get('cms/content/urlTitle=' + cardUrl);
    };
    RefundValueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], RefundValueService);
    return RefundValueService;
}());

//# sourceMappingURL=refundValue.service.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundValuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__refundValue_service__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cardDetails_cardDetailsSharing_services__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RefundValuePage = (function () {
    function RefundValuePage(navParams, returnService, routeManager, navCtrl, alertCtrl) {
        this.navParams = navParams;
        this.returnService = returnService;
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.account_management_refund_full_value = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_management_refund_full_value;
        this.account_management_full_refund_being_processed = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_management_full_refund_being_processed;
        this.account_management_click_to_refund_balance = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_management_click_to_refund_balance;
        this.cardFullInfor = {
            'cardId': '',
            'nickname': '',
            'expiryDate': '',
            'last4DigitCardNumber': '',
            'cardLogoPath': '',
            'totalRefund': '',
            'currency': '',
            'productType': ''
        };
        this.showContent = false;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    RefundValuePage.prototype.ionViewWillEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (__WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.navParams.get('cardIndex'))) {
                this.cardIndex = this.navParams.get('cardIndex');
            }
            if (__WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.navParams.get('totalRefund'))) {
                this.cardFullInfor.totalRefund = this.navParams.get('totalRefund');
            }
            this.cardList = __WEBPACK_IMPORTED_MODULE_8__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().getCardsList();
            this.cardCurrent = this.cardList[this.cardIndex];
            this.cardFullInfor.nickname = this.cardList[this.cardIndex].nickname;
            this.cardFullInfor.expiryDate = this.cardList[this.cardIndex].expiryDate;
            this.cardFullInfor.last4DigitCardNumber = this.cardList[this.cardIndex].last4DigitCardNumber;
            this.cardFullInfor.cardLogoPath = this.cardList[this.cardIndex].cardLogoPath;
            this.cardFullInfor.cardId = this.cardList[this.cardIndex].cardId;
            this.cardFullInfor.productType = this.cardList[this.cardIndex].productType;
            if (this.cardFullInfor.productType === 'CLOSED') {
                this.getContentOfReturn('mastercard-refund-process-details-closed');
            }
            else if (this.cardFullInfor.productType === 'OPEN') {
                this.getContentOfReturn('mastercard-refund-process-details-open');
            }
        }
    };
    RefundValuePage.prototype.performVirtualMasterCard = function () {
        var _this = this;
        var cardID = {
            'cardID': this.cardFullInfor.cardId
        };
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                    return;
                }
                var body = res.response;
                if (__WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body)) {
                }
                _this.showAlert();
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.returnService
            .postPerformVirtualMasterCard(cardID)
            .subscribe(observer);
    };
    RefundValuePage.prototype.showAlert = function () {
        var _this = this;
        var card = {
            reloadData: true,
            cardNumber: "",
            cardId: this.cardFullInfor.cardId
        };
        var alert = this.alertCtrl.create({
            message: this.account_management_full_refund_being_processed,
            cssClass: 'l2s-alert--flat l2s-alert--default',
            buttons: [
                {
                    text: 'Return to your cards',
                    cssClass: 'main-button',
                    handler: function (data) {
                        __WEBPACK_IMPORTED_MODULE_6__cardDetails_cardDetailsSharing_services__["a" /* CardDetailSharingDataService */].getInstance().gotoCardDataReload = card;
                        _this.navCtrl.parent.select(0);
                    }
                },
                {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                        __WEBPACK_IMPORTED_MODULE_6__cardDetails_cardDetailsSharing_services__["a" /* CardDetailSharingDataService */].getInstance().gotoCardDataReload = card;
                        _this.navCtrl.parent.select(0);
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    RefundValuePage.prototype.getContentOfReturn = function (url) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                    return;
                }
                var body = res.response;
                _this.showContent = true;
                if (__WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body)) {
                    var elem = document.createElement('textarea');
                    elem.innerHTML = body.content;
                    var decoded = elem.value;
                    _this.returnContent = decoded;
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.returnService
            .getContentFromRetreiveContent(url)
            .subscribe(observer);
    };
    RefundValuePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-refundValue',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\CardManagement\refundValue\refundValue.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Refund Value\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <ion-grid class="content-wrapper">\n    <ion-row text-center class="m-b-20 m-t-10" *ngIf=showContent>\n      <ion-col col-8 push-2>\n        <div class="card-infor-wrapper">\n\n        <p class="text-bold text-uppercase">{{this.cardFullInfor?.nickname}}</p>\n        <p class="text-small p-t-3 p-b-3">{{ this.cardCurrent?.productName}}</p>\n        <div text-center>\n          <img src="{{baseResourceUrl}}{{this.cardFullInfor?.cardLogoPath}}" alt="card logo" class="img-mastercard">\n        </div>\n        <p class="m-t-20 expire-information">\n          <span>\n            Expires {{this.cardFullInfor?.expiryDate}}\n          </span>|\n          <span>\n            Ends in {{this.cardFullInfor?.last4DigitCardNumber}}\n          </span>\n        </p>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="text-content" *ngIf=showContent>\n      <ion-col>\n         <div [innerHTML]="returnContent"></div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-grid  class="footer-wrapper">\n    <ion-row *ngIf=showContent>\n      <ion-col text-center>\n        <p class="openSans-bold p-b-10">{{account_management_click_to_refund_balance}}</p>\n        <p class="openSans-bold p-b-10">{{this.cardFullInfor?.totalRefund | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n        <button ion-button  block large [disabled]="refundSucceed" (click)="performVirtualMasterCard()">\n          {{account_management_refund_full_value}}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="RefundValuePage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\CardManagement\refundValue\refundValue.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__refundValue_service__["a" /* RefundValueService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__refundValue_service__["a" /* RefundValueService */],
            __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RefundValuePage);
    return RefundValuePage;
}());

//# sourceMappingURL=refundValue.js.map

/***/ })

});
//# sourceMappingURL=56.js.map