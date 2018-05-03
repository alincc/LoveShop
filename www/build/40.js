webpackJsonp([40],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountTopUpPageModule", function() { return AmountTopUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amountTopUp__ = __webpack_require__(935);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AmountTopUpPageModule = (function () {
    function AmountTopUpPageModule() {
    }
    AmountTopUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__amountTopUp__["a" /* AmountTopUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__amountTopUp__["a" /* AmountTopUpPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__amountTopUp__["a" /* AmountTopUpPage */]
            ]
        })
    ], AmountTopUpPageModule);
    return AmountTopUpPageModule;
}());

//# sourceMappingURL=amountTopUp.module.js.map

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

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailsDataService; });
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


var CardDetailsDataService = (function () {
    function CardDetailsDataService(http) {
        this.http = http;
    }
    CardDetailsDataService.prototype.getUserDetails = function () {
        return this.http.get("account");
    };
    CardDetailsDataService.prototype.removeCard = function (card) {
        return this.http.delete("card", card);
    };
    CardDetailsDataService.prototype.updateCardNickName = function (modelNickName) {
        return this.http.put("card/nickname", modelNickName);
    };
    CardDetailsDataService.prototype.suspendCard = function (cardModel) {
        return this.http.post("card/suspend", cardModel);
    };
    CardDetailsDataService.prototype.generateOrder = function (topUpmodel) {
        return this.http.post("order", topUpmodel);
    };
    CardDetailsDataService.prototype.getSMSAlertSetting = function (cardNumber) {
        return this.http.post("card/sms", cardNumber);
    };
    CardDetailsDataService.prototype.updateSMSAlertSetting = function (model) {
        return this.http.put("card/sms", model);
    };
    CardDetailsDataService.prototype.retrieveMasterCardInfo = function (body) {
        return this.http.post("card/mastercard", body);
    };
    CardDetailsDataService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    CardDetailsDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], CardDetailsDataService);
    return CardDetailsDataService;
}());

//# sourceMappingURL=cardDetailsData.service.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmountTopUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cardDetailsData_service__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__amountTopUp_service__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__orderManagement_orderDiscountGiftCard_orderDiscountGiftCardSharingData_services__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AmountTopUpPage = (function () {
    function AmountTopUpPage(formBuilder, navParams, navCtrl, routeManager, amountTopUpService) {
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.routeManager = routeManager;
        this.amountTopUpService = amountTopUpService;
        this.productValid = true;
        this.minValue = 0;
        this.maxValue = 0;
        this.topUpErrorForm = {
            message: '',
            valid: true
        };
        this.formErrors = {
            'topUpInput': ''
        };
        this.buildForm();
    }
    AmountTopUpPage.prototype.buildForm = function () {
        var _this = this;
        this.topUpForm = this.formBuilder.group({
            'topUpInput': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('topUpInput')
                ]]
        });
        this.topUpForm.valueChanges.subscribe(function (data) { return _this.onValueChanges(data); });
        this.onValueChanges();
    };
    AmountTopUpPage.prototype.onValueChanges = function (data) {
        if (!this.topUpForm) {
            return;
        }
        var form = this.topUpForm;
        for (var fieldError in this.formErrors) {
            this.formErrors[fieldError] = '';
            var control = form.get(fieldError);
            if (control && control.dirty && !control.valid) {
                this.formErrors[fieldError] = control.errors[Object.keys(control.errors)[0]];
            }
        }
        if (this.textInputs) {
            this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
        }
    };
    AmountTopUpPage.prototype.ionViewDidLeave = function () {
    };
    AmountTopUpPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.app-root').addClass('not-show-tab');
        __WEBPACK_IMPORTED_MODULE_10__orderManagement_orderDiscountGiftCard_orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().resetNewOrderNumber();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').removeClass('invalidValue');
            if (this.navParams.get('cardSelected')) {
                this.cardPrimary = this.navParams.get('cardSelected');
                this.minValue = this.cardPrimary.lowerValue;
                this.maxValue = this.cardPrimary.upperValue;
            }
            this.rootPage = this.navParams.get('rootPage');
            this.cardIndex = this.navParams.get('cardIndex');
        }
        this.getContentMSG();
    };
    AmountTopUpPage.prototype.confirmTopUp = function () {
        var _this = this;
        this.topUpErrorForm = {
            valid: true,
            message: ''
        };
        var codeMustShow = ['2192'];
        __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var body = this._buildGenerateTopupRequest();
        var observer = {
            next: function (res) {
                __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.navCtrl.push('MakeTopUptPage', {
                    dataAfterGenerateOrder: body,
                    cardprimary: _this.cardPrimary,
                    cardIndex: _this.cardIndex
                });
            },
            error: function (error) {
                if (typeof error.code !== 'undefined' && codeMustShow.indexOf((error.code + '')) !== -1) {
                    _this.topUpErrorForm = {
                        valid: false,
                        message: error.message || error.code
                    };
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_9__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(error.message);
                }
                __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.amountTopUpService
            .generateOrder(body)
            .subscribe(observer);
    };
    AmountTopUpPage.prototype.changeInput = function ($event) {
        var lengthInput = this.topUpForm.value.topUpInput.length;
        if (lengthInput > 0) {
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('input').width((lengthInput * 37) + 'px');
            if (lengthInput > 2) {
                __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('input').width((lengthInput * 26) + 'px');
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('input').width('150px');
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('.pound-icon').remove();
        }
        var poundIcon = __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('.pound-icon');
        if (lengthInput > 0 && poundIcon.length < 1) {
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('input').before('<span class="pound-icon">£</span>');
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('input').removeClass('m-l-26');
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('.pound-icon').removeClass('icon-absolute');
        }
        if (lengthInput >= 7) {
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('input').css('margin', 0);
            if (screen.width < 768) {
                __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('input').width('calc(100% - 26px)');
                __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('input').addClass('m-l-26');
                __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('.pound-icon').addClass('icon-absolute');
            }
        }
        if (lengthInput >= 16) {
            if (screen.width >= 768) {
                __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('input').width('calc(100% - 26px)');
                __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('input').addClass('m-l-26');
                __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('.pound-icon').addClass('icon-absolute');
            }
        }
    };
    AmountTopUpPage.prototype.otherValueChange = function (value) {
        if (isNaN(value) || parseFloat(value) < this.minValue || parseFloat(value) > this.maxValue) {
            this.productValid = false;
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').addClass('invalidValue');
        }
        else {
            this.productValid = true;
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').removeClass('invalidValue');
        }
    };
    AmountTopUpPage.prototype.focusToInput = function () {
        __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.inputAmount').children('input').focus();
    };
    AmountTopUpPage.prototype.getContentMSG = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (__WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0]) && __WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response) && __WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.confirm_top_up_amount = res[0].response.message;
                    _this.confirm_top_up_amount = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.confirm_top_up_amount;
                }
                if (__WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1]) && __WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response) && __WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.applied_to_this_amount = res[1].response.message;
                    _this.applied_to_this_amount = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.applied_to_this_amount;
                }
                if (__WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2]) && __WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response) && __WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.applied_to_card_load = res[2].response.message;
                    _this.applied_to_card_load = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.applied_to_card_load;
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        __WEBPACK_IMPORTED_MODULE_13_rxjs_Observable__["Observable"].combineLatest(this.amountTopUpService.getContentFromRetreiveContent("confirm-top-up-amount"), this.amountTopUpService.getContentFromRetreiveContent("applied-to-this-amount"), this.amountTopUpService.getContentFromRetreiveContent("applied-to-card-load")).subscribe(observer);
    };
    AmountTopUpPage.prototype._buildGenerateTopupRequest = function () {
        var cardSelectedOrder = {
            "propositionId": this.cardPrimary.propositionId,
            "orderJourney": "CARD_TOPUP",
            "orderlines": [],
            "cardProductCode": this.cardPrimary.productCode,
        };
        var product = {
            "productCode": this.cardPrimary.topUpProductCode,
            "cardNumber": this.cardPrimary.cardNumber,
            "serialNumber": this.cardPrimary.serialNumber,
            "quantity": 1,
            "loadAmount": parseFloat(this.topUpForm.value.topUpInput)
        };
        cardSelectedOrder.orderlines.push(product);
        return cardSelectedOrder;
    };
    AmountTopUpPage.prototype.gotoPreviousPage = function () {
        if (this.rootPage === true) {
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.app-root').removeClass('not-show-tab');
            this.navCtrl.parent.select(0);
        }
        else {
            this.navCtrl.pop();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], AmountTopUpPage.prototype, "textInputs", void 0);
    AmountTopUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-amountTopUp',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\amountTopUp\amountTopUp.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="gotoPreviousPage()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>TOP UP</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container-content">\n  <ion-grid class="content-wrapper" >\n    <ion-row class="m-b-50 m-t-30">\n      <ion-col>\n        <p text-center>{{confirm_top_up_amount}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class="m-b-20">\n      <ion-col col-8 push-2>\n        <div class="topUpErrorForm error m-b-10" *ngIf="!topUpErrorForm.valid && topUpErrorForm.message"\n             [innerHTML]="topUpErrorForm.message">\n        </div>\n        <form [formGroup]="topUpForm" text-center>\n          <ion-item class="item-input--wrapper item-big" no-padding (click)="focusToInput()">\n            <ion-input id="inputAmount"\n                       class="inputAmount topUpInputiOS montserrat-bold"\n                       name="topUpInput " type="text" inputmode="numeric"\n                       placeholder="£0.00"\n                       formControlName="topUpInput"\n                       (focusout)=\'otherValueChange($event.target.value)\'\n                       (ionChange)="changeInput($event)" text-wrap>\n\n            </ion-input>\n            <ion-input id="inputAmount2"\n                       (focusout)=\'otherValueChange($event.target.value)\'\n                       class="inputAmount topUpInputandroid montserrat-bold"\n                       name="topUpInput " type="tel"\n                       placeholder="£0.00"\n                       formControlName="topUpInput"\n                       (ionChange)="changeInput($event)" text-wrap></ion-input>\n          </ion-item>\n          <ion-item-divider ion-item light no-lines class="error"  *ngIf="!productValid">\n            <p>Please enter an amount between {{minValue | number:\'1.2-2\'}} and {{maxValue | number:\'1.2-2\'}}</p>\n          </ion-item-divider>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row class="m-b-50 discount-info">\n      <ion-col *ngIf="cardPrimary?.discountPercentageMessage">\n        <p class="openSans-bold">{{cardPrimary?.discountPercentageMessage}}</p>\n        <p>{{applied_to_this_amount}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button large block [disabled]="!topUpForm.valid || !productValid " (click)="confirmTopUp()">Confirm Amount</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n\n\n\n          \n<ion-row style="display: none;" \n(click)="gotoPreviousPage()"\nid="AmountTopUpPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\amountTopUp\amountTopUp.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__cardDetailsData_service__["a" /* CardDetailsDataService */],
                __WEBPACK_IMPORTED_MODULE_5__amountTopUp_service__["a" /* AmountTopUpService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_5__amountTopUp_service__["a" /* AmountTopUpService */]])
    ], AmountTopUpPage);
    return AmountTopUpPage;
}());

//# sourceMappingURL=amountTopUp.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmountTopUpService; });
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


var AmountTopUpService = (function () {
    function AmountTopUpService(http) {
        this.http = http;
    }
    AmountTopUpService.prototype.generateOrder = function (orderInfor) {
        return this.http.post("order", orderInfor, true);
    };
    AmountTopUpService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    AmountTopUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], AmountTopUpService);
    return AmountTopUpService;
}());

//# sourceMappingURL=amountTopUp.service.js.map

/***/ })

});
//# sourceMappingURL=40.js.map