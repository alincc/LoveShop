webpackJsonp([68],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterCardExchangePageModule", function() { return MasterCardExchangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masterCardExchange__ = __webpack_require__(907);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MasterCardExchangePageModule = (function () {
    function MasterCardExchangePageModule() {
    }
    MasterCardExchangePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__masterCardExchange__["a" /* MasterCardExchangePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__masterCardExchange__["a" /* MasterCardExchangePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__masterCardExchange__["a" /* MasterCardExchangePage */]]
        })
    ], MasterCardExchangePageModule);
    return MasterCardExchangePageModule;
}());

//# sourceMappingURL=masterCardExchange.module.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterCardExchangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__masterCardExchange_service__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_numeric_directive__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_services_utilities_utilities__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var BASE_URL = 'https://www.love2shop.co.uk';
var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_10__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var MasterCardExchangePage = (function () {
    function MasterCardExchangePage(routeManager, formBuilder, navParams, alertCtrl, navCtrl, masterCardExchangeService, iab) {
        this.routeManager = routeManager;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.masterCardExchangeService = masterCardExchangeService;
        this.iab = iab;
        this.tAandCBaseUrl = 'https://www.love2shopbusiness.co.uk';
        this.readTAndC = false;
        this.firstTouch = false;
        this.formErrors = {
            'exchangeInput': ''
        };
        this.buildForm();
    }
    MasterCardExchangePage.prototype.ionViewWillEnter = function () {
        this.amount = '0';
        this.amountWidth = '1em';
        this.firstTouch = false;
        this.getContentHardCode();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('primaryCard')) {
                this.primaryCard = this.navParams.get('primaryCard');
            }
            if (this.navParams.get('targetCard')) {
                this.targetCard = this.navParams.get('targetCard');
            }
            if (this.navParams.get('masterCardTypeSelected')) {
                this.masterCardTypeSelected = this.navParams.get('masterCardTypeSelected');
            }
            if (this.navParams.get('feeMsg')) {
                this.feeMsg = this.navParams.get('feeMsg');
            }
        }
    };
    MasterCardExchangePage.prototype.goToTandC = function () {
        if (this.targetCard && this.targetCard.customAttributes && this.targetCard.customAttributes.TERMS_URL) {
            var url = this._normalizeUrl(this.targetCard.customAttributes.TERMS_URL);
            var browser = this.iab.create(this.tAandCBaseUrl + this.targetCard.customAttributes.TERMS_URL, "_system", "location=true");
        }
        else {
            this._showError(DEFAULT_ERROR_MSG);
        }
    };
    MasterCardExchangePage.prototype.buildForm = function () {
        var _this = this;
        this.exchangeForm = this.formBuilder.group({
            'exchangeInput': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_8__framework_validations_validator_required_directive__["a" /* requireValidator */])('exchangeInput'),
                    Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()
                ]],
            'termCondition': [false, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].requiredTrue
                ]]
        });
        this.exchangeForm.valueChanges.subscribe(function (data) { return _this.onValueChanges(data); });
        this.onValueChanges();
    };
    MasterCardExchangePage.prototype.onValueChanges = function (data) {
        if (!this.exchangeForm) {
            return;
        }
        var form = this.exchangeForm;
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
    MasterCardExchangePage.prototype.changeInput = function ($event) {
        var lengthInput = this.exchangeForm.value.exchangeInput.length;
        if (lengthInput > 0) {
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('input').width((lengthInput * 37) + 'px');
            if (lengthInput > 2) {
                __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('input').width((lengthInput * 26) + 'px');
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('input').width('150px');
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('.pound-icon').remove();
        }
        var poundIcon = __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('.pound-icon');
        if (lengthInput > 0 && poundIcon.length < 1) {
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('input').before('<span class="pound-icon">£</span>');
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('input').removeClass('m-l-26');
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('.pound-icon').removeClass('icon-absolute');
        }
        if (lengthInput >= 7) {
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('input').css('margin', 0);
            if (screen.width < 768) {
                __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('input').width('calc(100% - 26px)');
                __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('input').addClass('m-l-26');
                __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('.pound-icon').addClass('icon-absolute');
            }
        }
        if (lengthInput >= 16) {
            if (screen.width >= 768) {
                __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('input').width('calc(100% - 26px)');
                __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('input').addClass('m-l-26');
                __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.inputAmount').children('.pound-icon').addClass('icon-absolute');
            }
        }
    };
    MasterCardExchangePage.prototype.focusToInput = function () {
        if (!this.firstTouch) {
            this.showAlertWarning();
        }
    };
    MasterCardExchangePage.prototype.generateOrder = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_13__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.primaryCard.purchaseMasterCardFailureMessage) && (parseFloat(this.exchangeForm.value.exchangeInput) > parseFloat(this.primaryCard.balance))) {
            __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(this.primaryCard.purchaseMasterCardFailureMessage);
        }
        else {
            this.exchangeValue = {
                "propositionId": this.primaryCard.propositionId,
                "paymentCardNumber": this.primaryCard.cardNumber,
                "orderJourney": "MASTERCARD_PURCHASE",
                "orderlines": [{
                        "productCode": this.targetCard.productCode,
                        "quantity": 1,
                        "loadAmount": this.exchangeForm.value.exchangeInput
                    }]
            };
            __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    if (!res.ok) {
                        return;
                    }
                    var body = res.response;
                    _this.navCtrl.push('OrderMasterCardExchangeStep1', {
                        orderInforAfterGenerate: body,
                        primaryCard: _this.primaryCard,
                        masterCardTypeSelected: _this.masterCardTypeSelected
                    });
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                },
                complete: function () {
                    __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.masterCardExchangeService
                .generateOrder(this.exchangeValue)
                .subscribe(observer);
        }
    };
    MasterCardExchangePage.prototype.getContentHardCode = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (__WEBPACK_IMPORTED_MODULE_13__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0]) && __WEBPACK_IMPORTED_MODULE_13__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response) && __WEBPACK_IMPORTED_MODULE_13__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response.message)) {
                    _this.exchange_value_to_vmc = res[0].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_13__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1]) && __WEBPACK_IMPORTED_MODULE_13__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response) && __WEBPACK_IMPORTED_MODULE_13__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response.message)) {
                    _this.how_much_to_transfer = res[1].response.message;
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].combineLatest(this.masterCardExchangeService.getContentFromRetreiveContent("exchange-value-to-vmc"), this.masterCardExchangeService.getContentFromRetreiveContent("how-much-to-transfer")).subscribe(observer);
    };
    MasterCardExchangePage.prototype.showAlertWarning = function () {
        var _this = this;
        var alertWarning = this.alertCtrl.create({
            cssClass: 'l2s-alert--default l2s-alert--centered',
            title: 'Got something in mind?',
            message: "Please add any extra charges for delivery etc to your transfer amount. Most retailers will only accept a single payment method.",
            buttons: [{
                    text: 'Ok got it',
                    handler: function (data) {
                        _this.firstTouch = true;
                    }
                }]
        });
        alertWarning.present();
    };
    MasterCardExchangePage.prototype._showError = function (message) {
        __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    MasterCardExchangePage.prototype._normalizeUrl = function (url) {
        if (url.startsWith('#') || url.startsWith('/#')) {
            return;
        }
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            if (url.startsWith('/')) {
                return BASE_URL + url;
            }
            return 'http://' + url;
        }
        return url;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('amountInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MasterCardExchangePage.prototype, "amountInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('amountInputAc'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MasterCardExchangePage.prototype, "amountInputAc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], MasterCardExchangePage.prototype, "textInputs", void 0);
    MasterCardExchangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-masterCardExchange',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\exchange\exchang4SpendOnline\masterCardExchange\masterCardExchange.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Select Card Exchange\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid  class="content-wrapper">\n    <ion-row padding text-center class="sub-desc">\n      <p>{{exchange_value_to_vmc}}</p>\n    </ion-row>\n    <ion-row text-center class="card-info">\n      <p>\n        Your flexecash card <br>\n        <span class="text-16 openSans-bold text-uppercase">{{ primaryCard?.nickname }}</span> <br> \n        has a balance of {{ primaryCard?.balance  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n      </p>\n    </ion-row>\n    <ion-row class="card-topup p-b-15 input--wrapper">\n      <p>{{how_much_to_transfer}}</p>\n    </ion-row>\n\n    <ion-row class="p-b-15 input--wrapper">\n      <ion-col col-8 push-2 >\n        <div class="overlay" [ngClass]="{\'not-show\': firstTouch}" (click)="focusToInput()">\n        </div>\n        <form [formGroup]="exchangeForm" text-center>\n          <ion-item class="item-big" no-padding >\n            <ion-input id="inputAmount"\n                       inputmode="numeric"\n                       class="inputAmount topUpInputiOS"\n                       name="exchangeInput "\n                       type="number"\n                       placeholder="£0.00"\n                       formControlName="exchangeInput"\n                       (ionChange)="changeInput($event)" text-wrap></ion-input>\n            <ion-input id="inputAmount2" inputmode="numeric" class="inputAmount topUpInputandroid" name="exchangeInput " type="tel" placeholder="£0.00" formControlName="exchangeInput" (ionChange)="changeInput($event)" text-wrap></ion-input>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class="fee-msg">{{feeMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-grid class="footer--wrapper" padding>\n      <ion-row>\n        <ion-col col-12 class="t-and-c">\n            <form [formGroup]="exchangeForm">\n              <ion-item>\n                <ion-label class="m-l-10" text-wrap>\n                  I have read and accepted the <span class="link" (click)="goToTandC()">T&Cs</span>\n                </ion-label>\n                <ion-checkbox formControlName=\'termCondition\'></ion-checkbox>\n              </ion-item>\n          </form>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <button class="m-b-0" [disabled]="!exchangeForm.valid" ion-button block large (click)="generateOrder()">Continue</button>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="MasterCardExchangePage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\exchange\exchang4SpendOnline\masterCardExchange\masterCardExchange.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__masterCardExchange_service__["a" /* MasterCardExchangeService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__masterCardExchange_service__["a" /* MasterCardExchangeService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MasterCardExchangePage);
    return MasterCardExchangePage;
}());

//# sourceMappingURL=masterCardExchange.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterCardExchangeService; });
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


var MasterCardExchangeService = (function () {
    function MasterCardExchangeService(http) {
        this.http = http;
    }
    MasterCardExchangeService.prototype.generateOrder = function (orderInfor) {
        return this.http.post("order", orderInfor);
    };
    MasterCardExchangeService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    MasterCardExchangeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], MasterCardExchangeService);
    return MasterCardExchangeService;
}());

//# sourceMappingURL=masterCardExchange.service.js.map

/***/ })

});
//# sourceMappingURL=68.js.map