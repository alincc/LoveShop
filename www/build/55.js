webpackJsonp([55],{

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeTopUptPage3DSModule", function() { return MakeTopUptPage3DSModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__makeTopUp3DS__ = __webpack_require__(939);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MakeTopUptPage3DSModule = (function () {
    function MakeTopUptPage3DSModule() {
    }
    MakeTopUptPage3DSModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__makeTopUp3DS__["a" /* MakeTopUp3DSPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__makeTopUp3DS__["a" /* MakeTopUp3DSPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__makeTopUp3DS__["a" /* MakeTopUp3DSPage */]
            ]
        })
    ], MakeTopUptPage3DSModule);
    return MakeTopUptPage3DSModule;
}());

//# sourceMappingURL=makeTopUp3DS.module.js.map

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

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeTopUp3DSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__makeTopUp3DS_service__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__orderManagement_orderDiscountGiftCard_orderDiscountGiftCardSharingData_services__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MakeTopUp3DSPage = (function () {
    function MakeTopUp3DSPage(alertCtrl, routeManager, makeTopUp3DSService, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.routeManager = routeManager;
        this.makeTopUp3DSService = makeTopUp3DSService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitedParesponse = false;
    }
    MakeTopUp3DSPage.prototype.ionViewWillEnter = function () {
        this.errorObject = null;
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.app-root').addClass('not-show-tab');
        this.submitedParesponse = false;
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('bankPayment')) {
                this.bankPayment = this.navParams.get('bankPayment');
            }
            if (this.navParams.get('cardPrimary')) {
                this.cardPrimary = this.navParams.get('cardPrimary');
            }
            if (this.navParams.get('dataAfterGenerateOrder')) {
                this.dataAfterGenerateOrder = this.navParams.get('dataAfterGenerateOrder');
            }
            this.cardIndex = this.navParams.get('cardIndex');
        }
    };
    MakeTopUp3DSPage.prototype.ionViewDidLeave = function () {
        this.errorObject = null;
        this.submitedParesponse = false;
        clearTimeout(this.timerAutoSubmit);
    };
    MakeTopUp3DSPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.errorObject = null;
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#submitIframe3D').click();
        }, __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.MakeTopUp3DS.submitIframe3D);
        setTimeout(function () {
            _this.autoSubmitPaResponse();
        }, __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.MakeTopUp3DS.autoSubmitPaResponse);
    };
    MakeTopUp3DSPage.prototype.autoSubmitPaResponse = function () {
        var _this = this;
        this.timerAutoSubmit = setTimeout(function () {
            var found = false;
            var PaRes;
            var PaResTextarea;
            PaResTextarea = window.localStorage.getItem('PaResponse');
            localStorage.removeItem('PaResponse');
            if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(PaResTextarea) && PaResTextarea !== '') {
                PaRes = PaResTextarea;
                if (PaRes !== '') {
                    found = true;
                    _this.paymentResume(PaRes);
                    clearTimeout(_this.timerAutoSubmit);
                    return;
                }
            }
            if (!found) {
                _this.autoSubmitPaResponse();
            }
        }, __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.MakeTopUp3DS.submitIframe3D);
    };
    MakeTopUp3DSPage.prototype.paymentResume = function (Pares) {
        var _this = this;
        // only submit PaResponse once time;
        if (this.submitedParesponse === true)
            return;
        this.submitedParesponse = true;
        var body = {
            "orderNumber": this.dataAfterGenerateOrder.orderNumber,
            "paRes": Pares
        };
        window.localStorage.removeItem('PaResponse');
        __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this.makeTopUp3DSService.paymentResume(body)
            .subscribe(function (res) {
            if (!res.ok) {
                return;
            }
            _this.navCtrl.push('MakeTopUpSuccessFullPage', {
                dataAfterGenerateOrder: _this.dataAfterGenerateOrder,
                cardIndex: _this.cardIndex
            }).then(function () {
                var startIndex = _this.navCtrl.getActive().index - 3;
                _this.navCtrl.remove(startIndex, 3);
            });
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error.data) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error.data.response)) {
                var orderNumber = error.data.response.orderNumber;
                __WEBPACK_IMPORTED_MODULE_7__orderManagement_orderDiscountGiftCard_orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().setNewOrderNumber(orderNumber);
            }
            if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error.data) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error.data.errors[0])) {
                _this.errorObject = error.data.errors[0];
            }
            _this.navCtrl.push('MakeTopUptPage', {
                cardprimary: _this.cardPrimary,
                dataAfterGenerateOrder: _this.dataAfterGenerateOrder,
                cardIndex: _this.cardIndex,
                errorObject: _this.errorObject
            }).then(function () {
                _this.errorObject = null;
                var startIndex = _this.navCtrl.getActive().index - 2;
                _this.navCtrl.remove(startIndex, 2);
            });
        }, function () {
            __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    MakeTopUp3DSPage.prototype.gotoAmount = function () {
        var _this = this;
        this.navCtrl.push('MakeTopUptPage', {
            cardprimary: this.cardPrimary,
            dataAfterGenerateOrder: this.dataAfterGenerateOrder,
            cardIndex: this.cardIndex,
            errorObject: null
        }).then(function () {
            _this.errorObject = null;
            var startIndex = _this.navCtrl.getActive().index - 2;
            _this.navCtrl.remove(startIndex, 2);
        });
    };
    MakeTopUp3DSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-makeTopUp3DS',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\makeTopUp3DS\makeTopUp3DS.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="gotoAmount()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>3D Secure</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form ngNoForm action="{{bankPayment?.url}}" style="display: none" target="ACSframe" method="POST">\n            <textarea name="PaReq"\n                      value="{{bankPayment?.paReq}}" style="display: none"></textarea>\n          <input\n            name="TermUrl"\n            value="javascript:window.parent.postMessage(document.getElementsByName(\'PaRes\')[0].value, \'*\');" style="display: none"/>\n          <input\n            name="MD" style="display: none"\n            value="{{dataAfterGenerateOrder?.orderNumber}}"/>\n          <button type="submit" style="display: none" id="submitIframe3D">Submit</button>\n        </form>\n\n        <iframe #iframe id="paymentIframe"\n                class="iframe__content--full"\n                src="about:blank"\n                name="ACSframe"></iframe>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\makeTopUp3DS\makeTopUp3DS.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__makeTopUp3DS_service__["a" /* MakeTopUp3DSService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_5__makeTopUp3DS_service__["a" /* MakeTopUp3DSService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MakeTopUp3DSPage);
    return MakeTopUp3DSPage;
}());

//# sourceMappingURL=makeTopUp3DS.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeTopUp3DSService; });
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


var MakeTopUp3DSService = (function () {
    function MakeTopUp3DSService(http) {
        this.http = http;
    }
    MakeTopUp3DSService.prototype.paymentResume = function (body) {
        return this.http.post("order/payment/card/resume", body);
    };
    MakeTopUp3DSService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], MakeTopUp3DSService);
    return MakeTopUp3DSService;
}());

//# sourceMappingURL=makeTopUp3DS.service.js.map

/***/ })

});
//# sourceMappingURL=55.js.map