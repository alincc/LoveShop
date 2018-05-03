webpackJsonp([48],{

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDiscountGiftCard3DSModule", function() { return OrderDiscountGiftCard3DSModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCard3DS__ = __webpack_require__(979);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderDiscountGiftCard3DSModule = (function () {
    function OrderDiscountGiftCard3DSModule() {
    }
    OrderDiscountGiftCard3DSModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCard3DS__["a" /* OrderDiscountGiftCard3DSPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCard3DS__["a" /* OrderDiscountGiftCard3DSPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCard3DS__["a" /* OrderDiscountGiftCard3DSPage */]
            ]
        })
    ], OrderDiscountGiftCard3DSModule);
    return OrderDiscountGiftCard3DSModule;
}());

//# sourceMappingURL=orderDiscountGiftCard3DS.module.js.map

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

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDiscountGiftCard3DSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orderDiscountGiftCard3DS_service__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__orderDiscountGiftCardSharingData_services__ = __webpack_require__(809);
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









var OrderDiscountGiftCard3DSPage = (function () {
    function OrderDiscountGiftCard3DSPage(alertCtrl, routeManager, orderDiscountGiftCard3DSService, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.routeManager = routeManager;
        this.orderDiscountGiftCard3DSService = orderDiscountGiftCard3DSService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitedParesponse = false;
    }
    OrderDiscountGiftCard3DSPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.submitedParesponse = false;
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('bankPayment')) {
                this.bankPayment = this.navParams.get('bankPayment');
            }
            if (this.navParams.get('dataAfterGenerateOrder')) {
                this.dataAfterGenerateOrder = this.navParams.get('dataAfterGenerateOrder');
            }
            if (this.navParams.get('dataBeforeGenerateOrder')) {
                this.dataBeforeGenerateOrder = this.navParams.get('dataBeforeGenerateOrder');
            }
            this.cardIndex = this.navParams.get('cardIndex');
            if (this.navParams.get('deliveryMethod')) {
                this.deliveryMethod = this.navParams.get('deliveryMethod');
            }
            if (this.navParams.get('total')) {
                this.total = this.navParams.get('total');
            }
        }
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_5_jquery___default()('#submitIframe3D').click();
        }, __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.OrderDiscountGiftCard3DS.submitIframe3D);
        setTimeout(function () {
            _this.autoSubmitPaResponse();
        }, __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.OrderDiscountGiftCard3DS.autoSubmitPaResponse);
    };
    OrderDiscountGiftCard3DSPage.prototype.ionViewDidLeave = function () {
        this.submitedParesponse = false;
        clearTimeout(this.timerAutoSubmit);
    };
    OrderDiscountGiftCard3DSPage.prototype.autoSubmitPaResponse = function () {
        var _this = this;
        this.timerAutoSubmit = setTimeout(function () {
            var found = false;
            var PaRes;
            var PaResTextarea;
            PaResTextarea = localStorage.getItem('PaResponse');
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
        }, __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.OrderDiscountGiftCard3DS.checkPaymentResume);
    };
    OrderDiscountGiftCard3DSPage.prototype.paymentResume = function (Pares) {
        var _this = this;
        // only submit PaResponse once time;
        if (this.submitedParesponse === true)
            return;
        this.submitedParesponse = true;
        var body = {
            "orderNumber": this.dataAfterGenerateOrder.orderNumber,
            "paRes": Pares
        };
        __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this.orderDiscountGiftCard3DSService.paymentResume(body)
            .subscribe(function (res) {
            if (!res.ok) {
                return;
            }
            _this.navCtrl.push('OrderDiscountGiftCardComplete', {
                dataAfterGenerateOrder: _this.dataAfterGenerateOrder,
                dataBeforeGenerateOrder: _this.dataBeforeGenerateOrder,
                cardIndex: _this.cardIndex,
                deliveryMethod: _this.deliveryMethod,
                total: _this.total
            });
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error.data) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error.data.response)) {
                var orderNumber = error.data.response.orderNumber;
                __WEBPACK_IMPORTED_MODULE_7__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().setNewOrderNumber(orderNumber);
            }
            var errorObject = null;
            if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error.data) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error.data.errors[0])) {
                errorObject = error.data.errors[0];
            }
            _this.navCtrl.push('OrderDiscountGiftCardPaymentCardPage', {
                dataAfterGenerateOrder: _this.dataAfterGenerateOrder,
                cardIndex: _this.cardIndex,
                deliveryMethod: _this.deliveryMethod,
                total: _this.total,
                errorObject: errorObject
            }).then(function () {
                var startIndex = _this.navCtrl.getActive().index - 2;
                _this.navCtrl.remove(startIndex, 2);
            });
        }, function () {
            __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    OrderDiscountGiftCard3DSPage.prototype.goBack = function () {
        var _this = this;
        this.navCtrl.push('OrderDiscountGiftCardPaymentCardPage', {
            dataAfterGenerateOrder: this.dataAfterGenerateOrder,
            cardIndex: this.cardIndex,
            deliveryMethod: this.deliveryMethod,
            total: this.total,
            errorObject: null
        }).then(function () {
            var startIndex = _this.navCtrl.getActive().index - 2;
            _this.navCtrl.remove(startIndex, 2);
        });
    };
    OrderDiscountGiftCard3DSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderDiscountGiftCard3DS',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCard3DS\orderDiscountGiftCard3DS.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button  ion-button icon-only (click)="goBack()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>3D Secure</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form ngNoForm action="{{bankPayment?.url}}" style="display: none" target="ACSframe" method="POST">\n            <textarea name="PaReq"\n                      value="{{bankPayment?.paReq}}" style="display: none"></textarea>\n          <input\n            name="TermUrl"\n            value="javascript:window.parent.postMessage(document.getElementsByName(\'PaRes\')[0].value, \'*\');" style="display: none"/>\n          <input\n            name="MD" style="display: none"\n            value="{{dataAfterGenerateOrder?.orderNumber}}"/>\n          <button type="submit" style="display: none" id="submitIframe3D">Submit</button>\n        </form>\n\n        <iframe #iframe id="paymentIframe"\n                class="iframe__content--full"\n                src="about:blank"\n                name="ACSframe"></iframe>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n<ion-row style="display: none;" \n(click)="goBack()"\nid="OrderDiscountGiftCard3DSPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCard3DS\orderDiscountGiftCard3DS.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__orderDiscountGiftCard3DS_service__["a" /* OrderDiscountGiftCard3DSService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_6__orderDiscountGiftCard3DS_service__["a" /* OrderDiscountGiftCard3DSService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], OrderDiscountGiftCard3DSPage);
    return OrderDiscountGiftCard3DSPage;
}());

//# sourceMappingURL=orderDiscountGiftCard3DS.js.map

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDiscountGiftCard3DSService; });
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


var OrderDiscountGiftCard3DSService = (function () {
    function OrderDiscountGiftCard3DSService(http) {
        this.http = http;
    }
    OrderDiscountGiftCard3DSService.prototype.paymentResume = function (body) {
        return this.http.post("order/payment/card/resume", body);
    };
    OrderDiscountGiftCard3DSService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], OrderDiscountGiftCard3DSService);
    return OrderDiscountGiftCard3DSService;
}());

//# sourceMappingURL=orderDiscountGiftCard3DS.service.js.map

/***/ })

});
//# sourceMappingURL=48.js.map