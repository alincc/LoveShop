webpackJsonp([76],{

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewAlertSettingsPageModule", function() { return viewAlertSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewAlertSettings__ = __webpack_require__(941);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var viewAlertSettingsPageModule = (function () {
    function viewAlertSettingsPageModule() {
    }
    viewAlertSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__viewAlertSettings__["a" /* viewAlertSettingsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewAlertSettings__["a" /* viewAlertSettingsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__viewAlertSettings__["a" /* viewAlertSettingsPage */]]
        })
    ], viewAlertSettingsPageModule);
    return viewAlertSettingsPageModule;
}());

//# sourceMappingURL=viewAlertSettings.module.js.map

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

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return viewAlertSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cardDetailsData_service__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var viewAlertSettingsPage = (function () {
    function viewAlertSettingsPage(navParams, routeManager, alertCtrl, navCtrl, cardDetailsDataService) {
        this.navParams = navParams;
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.cardDetailsDataService = cardDetailsDataService;
        this.model = {
            _alertBalance: false,
            _alertThreshold: false,
            _optOut: false,
            get alertBalance() {
                return this._alertBalance;
            },
            set alertBalance(val) {
                if (val) {
                    this.alertThreshold = false;
                    this.optOut = false;
                }
                this._alertBalance = val;
            },
            get alertThreshold() {
                return this._alertThreshold;
            },
            set alertThreshold(val) {
                if (val) {
                    this.alertBalance = false;
                    this.optOut = false;
                }
                this._alertThreshold = val;
            },
            get optOut() {
                return this._optOut;
            },
            set optOut(val) {
                if (val) {
                    this.alertBalance = false;
                    this.alertThreshold = false;
                }
                this._optOut = val;
            }
        };
        this.phoneError = {
            valid: false,
            errMsg: ''
        };
        this.thresholdError = {
            valid: false,
            errMsg: ''
        };
        this.threshold_amount_numeric = "Threshold amount must be numeric";
        this.threshold_greater_than_zero = "";
        this.order_confirmation_default_confirmation_SMS = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_confirmation_default_confirmation_SMS;
        this.invalid_phone_format = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.invalid_phone_format;
    }
    viewAlertSettingsPage.prototype.ionViewWillEnter = function () {
        this.getContentMSG();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('cardNumber')) {
                this.cardNumber = this.navParams.get('cardNumber');
            }
            this.balance = this.navParams.get('balance');
            this.resetData();
            this.retrieveSMSAlertSetting(this.cardNumber);
        }
    };
    viewAlertSettingsPage.prototype.resetData = function () {
        this.model.alertBalance = false;
        this.model.alertThreshold = false;
        this.model.thresholdAmount = '';
        this.model.phoneNumber = '';
        this.phoneError = {
            valid: false,
            errMsg: ''
        };
        this.thresholdError = {
            valid: false,
            errMsg: ''
        };
    };
    viewAlertSettingsPage.prototype.validate = function () {
        this.validateMobileNumber(this.model.telephoneNumber);
        this.validateThresholdValue(this.model.thresholdAmount);
    };
    viewAlertSettingsPage.prototype.toggleAlertThreshold = function (value) {
        if (value === true) {
            this.model.alertBalance = false;
            this.model.thresholdAmount = '';
            this.thresholdError.errMsg = '';
        }
    };
    viewAlertSettingsPage.prototype.toggleAlertBalance = function (value) {
        if (value === true) {
            this.model.alertThreshold = false;
        }
    };
    viewAlertSettingsPage.prototype.toggleAlertOptOut = function (value) {
        if (value) {
            this.model.alertThreshold = false;
            this.model.alertBalance = false;
            this.model.telephoneNumber = '';
            this.model.thresholdAmount = '';
        }
        else {
            this.restoreSavedData();
        }
    };
    viewAlertSettingsPage.prototype.restoreSavedData = function () {
        if (this.saveData) {
            // check the alert type and assign to model
            var data = this.saveData;
            if (data.alertType === 'PAYMENT_NOTIFICATION') {
                this.model.alertBalance = true;
            }
            else if (data.alertType === 'THRESHOLD_NOTIFICATION') {
                this.model.alertThreshold = true;
                this.model.thresholdAmount = data.thresholdAmount || '';
            }
            this.model.currentPhoneNumber = this.convertCountryCode(data.phoneNumber);
            this.model.telephoneNumber = this.model.currentPhoneNumber;
            this.isUpdateMode = true;
        }
    };
    viewAlertSettingsPage.prototype.retrieveSMSAlertSetting = function (cardNumber) {
        var _this = this;
        var cardModelSMS = {
            "cardNumber": cardNumber
        };
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                if (body.length > 0) {
                    // check the alert type and assign to model
                    var data = body[0];
                    _this.saveData = data;
                    if (data.alertType === 'PAYMENT_NOTIFICATION') {
                        _this.model.alertBalance = true;
                    }
                    else if (data.alertType === 'THRESHOLD_NOTIFICATION') {
                        _this.model.alertThreshold = true;
                        _this.model.thresholdAmount = data.thresholdAmount || '';
                    }
                    _this.model.currentPhoneNumber = _this.convertCountryCode(data.phoneNumber);
                    _this.model.telephoneNumber = _this.model.currentPhoneNumber;
                    _this.isUpdateMode = true;
                    _this.validate();
                }
                else {
                    _this.model.alertBalance = false;
                    _this.model.alertThreshold = false;
                    _this.isUpdateMode = false;
                    _this.model.optOut = false;
                    _this.model.telephoneNumber = '';
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.cardDetailsDataService
            .getSMSAlertSetting(cardModelSMS)
            .subscribe(observer);
    };
    viewAlertSettingsPage.prototype.convertCountryCode = function (phoneNumber) {
        if (phoneNumber && phoneNumber.indexOf('44') === 0) {
            return '0' + phoneNumber.substr(2);
        }
        return phoneNumber;
    };
    viewAlertSettingsPage.prototype.phoneValidator = function (phone) {
        if (this.model.optOut === true) {
            return null;
        }
        if (!phone) {
            return { phoneError: __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required };
        }
        if (isNaN(phone)) {
            return { phoneError: 'Phone must be numeric' };
        }
        var isPhoneOk = false;
        // check phone start with '07'
        isPhoneOk = phone.substring(0, 2) === '07';
        if (isPhoneOk === true) {
            if ((phone.length === 10)
                || (phone.length === 11)) {
                return null;
            }
        }
        // check phone start with '03'
        isPhoneOk = phone.substring(0, 2) === '03';
        if (isPhoneOk === true) {
            if (phone.length === 11) {
                return null;
            }
        }
        return { phoneError: this.invalid_phone_format };
    };
    viewAlertSettingsPage.prototype.validateMobileNumber = function (phone) {
        var error = this.phoneValidator(phone);
        if (error !== null) {
            this.phoneError.valid = false;
            this.phoneError.errMsg = error.phoneError;
        }
        else {
            this.phoneError.valid = true;
            this.phoneError.errMsg = '';
        }
    };
    viewAlertSettingsPage.prototype.thresholdValidator = function (value) {
        if (this.model.optOut === true) {
            return null;
        }
        if (!this.model.alertThreshold) {
            return null;
        }
        if (!value) {
            return { thresholdError: __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required };
        }
        if (isNaN(value)) {
            return { thresholdError: this.threshold_amount_numeric };
        }
        if (value <= 0) {
            return { thresholdError: this.threshold_greater_than_zero };
        }
        if (this.balance < value) {
            return { thresholdError: this.threshold_equal_to_card_balance };
        }
        return null;
    };
    viewAlertSettingsPage.prototype.validateThresholdValue = function (value) {
        var error = this.thresholdValidator(value);
        if (error !== null) {
            this.thresholdError.valid = false;
            this.thresholdError.errMsg = error.thresholdError;
        }
        else {
            this.thresholdError.valid = true;
            this.thresholdError.errMsg = '';
        }
    };
    viewAlertSettingsPage.prototype.registerAlert = function () {
        if (this.phoneError.valid === false) {
            return;
        }
        this.updateAlertOptOut();
    };
    viewAlertSettingsPage.prototype.updateAlertOptOut = function () {
        var _this = this;
        if (this.phoneError.valid === false) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var cardModelSMS = {};
        if (this.model.optOut) {
            this.model.alertBalance = false;
            this.model.alertThreshold = false;
            cardModelSMS = {
                cardNumber: this.cardNumber,
                optOut: true
            };
            var observer = {
                next: function (res) {
                    __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                    __WEBPACK_IMPORTED_MODULE_4__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(_this.flexecash_sms_optout_succeeded);
                    _this.resetData();
                    _this.retrieveSMSAlertSetting(_this.cardNumber);
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.cardDetailsDataService
                .updateSMSAlertSetting(cardModelSMS)
                .subscribe(observer);
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNull(this.model.currentPhoneNumber) || this.model.currentPhoneNumber === '') {
                if (this.model.alertBalance) {
                    cardModelSMS = {
                        cardNumber: this.cardNumber,
                        currentPhoneNumber: this.model.telephoneNumber,
                        alertType: 'PAYMENT'
                    };
                }
                else if (this.model.alertThreshold) {
                    cardModelSMS = {
                        cardNumber: this.cardNumber,
                        currentPhoneNumber: this.model.telephoneNumber,
                        alertType: 'THRESHOLD',
                        thresholdAmount: parseFloat(this.model.thresholdAmount),
                    };
                }
            }
            else {
                if (this.model.alertBalance) {
                    cardModelSMS = {
                        cardNumber: this.cardNumber,
                        currentPhoneNumber: this.model.currentPhoneNumber,
                        newPhoneNumber: this.model.telephoneNumber,
                        alertType: 'PAYMENT'
                    };
                }
                else if (this.model.alertThreshold) {
                    cardModelSMS = {
                        cardNumber: this.cardNumber,
                        currentPhoneNumber: this.model.currentPhoneNumber,
                        alertType: 'THRESHOLD',
                        thresholdAmount: parseFloat(this.model.thresholdAmount)
                    };
                }
            }
            cardModelSMS.optOut = false;
            var observer = {
                next: function (res) {
                    __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                    if (!res.ok) {
                        return;
                    }
                    if (!_this.isUpdateMode) {
                        __WEBPACK_IMPORTED_MODULE_4__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(_this.flexecash_sms_register_succeeded);
                        _this.showAlertSetup();
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(_this.flexecash_sms_update_succeeded);
                        _this.retrieveSMSAlertSetting(_this.cardNumber);
                    }
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.cardDetailsDataService
                .updateSMSAlertSetting(cardModelSMS)
                .subscribe(observer);
        }
    };
    viewAlertSettingsPage.prototype.showAlertSetup = function () {
        var _this = this;
        var alertSetting = this.alertCtrl.create({
            title: 'Alert set up',
            message: this.order_confirmation_default_confirmation_SMS,
            cssClass: 'l2s-alert--flat l2s-alert--twobutton',
            buttons: [
                {
                    text: 'Return to your cards',
                    cssClass: 'main-button',
                    handler: function (data) {
                        _this.navCtrl.parent.select(0);
                    }
                },
                {
                    text: 'Update alert',
                    cssClass: 'cancel-button',
                    handler: function (data) {
                        _this.retrieveSMSAlertSetting(_this.cardNumber);
                    }
                }, {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }
            ]
        });
        setTimeout(function () { alertSetting.present(); }, 500);
    };
    viewAlertSettingsPage.prototype.getContentMSG = function () {
        var _this = this;
        var observer = {
            next: function (res) {
                if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0]) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response.message)) {
                    _this.sms_alerts_for_balance_and_threshold = res[0].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1]) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response.message)) {
                    _this.receive_balance_by_sms = res[1].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2]) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response.message)) {
                    _this.receive_sms_threshold_alert = res[2].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3]) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3].response) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3].response.message)) {
                    // this.threshold_amount_numeric = res[3].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[4]) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[4].response) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[4].response.message)) {
                    _this.threshold_greater_than_zero = res[4].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[5]) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[5].response) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[5].response.message)) {
                    _this.threshold_equal_to_card_balance = res[5].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[6]) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[6].response) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[6].response.message)) {
                    _this.flexecash_sms_register_succeeded = res[6].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[7]) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[7].response) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[7].response.message)) {
                    _this.flexecash_sms_update_succeeded = res[7].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[8]) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[8].response) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[8].response.message)) {
                    _this.flexecash_sms_optout_succeeded = res[8].response.message;
                }
            },
            error: function (error) {
            },
            complete: function () {
            }
        };
        __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].combineLatest(this.cardDetailsDataService.getContentFromRetreiveContent("sms-alerts-for-balance-and-threshold"), this.cardDetailsDataService.getContentFromRetreiveContent("receive-balance-by-sms"), this.cardDetailsDataService.getContentFromRetreiveContent("receive-sms-threshold-alert"), this.cardDetailsDataService.getContentFromRetreiveContent("receive-sms-threshold-alert"), this.cardDetailsDataService.getContentFromRetreiveContent("threshold-greater-than-zero"), this.cardDetailsDataService.getContentFromRetreiveContent("threshold-equal-to-card-balance"), this.cardDetailsDataService.getContentFromRetreiveContent("flexecash.sms.register.succeeded"), this.cardDetailsDataService.getContentFromRetreiveContent("flexecash.sms.update.succeeded"), this.cardDetailsDataService.getContentFromRetreiveContent("flexecash.sms.optout.succeeded")).subscribe(observer);
    };
    viewAlertSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewAlertSettings',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\viewAlertSettings\viewAlertSettings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Alerts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n   <ion-row>\n      <ion-col>\n        <p>\n           {{sms_alerts_for_balance_and_threshold}}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row class="m-b-20">\n      <ion-col>\n        <ion-list>\n          <ion-item no-padding>\n            <ion-input name="telephoneNumber" type="tel"\n                       [class.ng-valid]="!phoneError.errMsg"\n                       [class.ng-invalid]="phoneError.errMsg"\n                       maxlength="11" placeholder="Enter Mobile Number"\n                       (blur)="validateMobileNumber($event.target.value)" [(ngModel)]="model.telephoneNumber">\n            </ion-input>\n          </ion-item>\n          <ion-item-divider ion-item light no-lines class="error" *ngIf="phoneError.errMsg.length > 0">\n            <p class="p-t-0 p-b-0">{{ phoneError.errMsg }}</p>\n          </ion-item-divider>\n          <ion-item no-padding>\n            <p>Update alert type</p>\n          </ion-item>\n          <ion-item no-padding>\n            <ion-toggle class="new-style" [(ngModel)]="model.alertBalance" (ngModelChange)="toggleAlertBalance($event)"></ion-toggle>\n            <ion-label>\n              <h3 class="openSans-bold">Balance Alert</h3>\n              <p text-wrap>{{receive_balance_by_sms}}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item-divider no-padding>\n            <div class="border-divider"></div>\n          </ion-item-divider>\n          <ion-item no-padding>\n            <ion-toggle  class="new-style" [(ngModel)]="model.alertThreshold" (ngModelChange)="toggleAlertThreshold($event)"></ion-toggle>\n            <ion-label>\n              <h3 class="openSans-bold">Threshold Alert</h3>\n                <p text-wrap>{{receive_sms_threshold_alert}}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item no-padding id="input-curency-item"  *ngIf="model.alertThreshold" class="input-curency-item">\n            <ion-input name="threshold" type="tel" (blur)="validateThresholdValue($event.target.value)" [(ngModel)]="model.thresholdAmount" [class.ng-invalid]="model.alertThreshold && thresholdError.errMsg.length > 0" [class.ng-valid]="!model.alertThreshold && thresholdError.errMsg.length <= 0"></ion-input>\n          </ion-item>\n          <ion-item-divider *ngIf="model.alertThreshold && thresholdError.errMsg.length > 0" ion-item light no-lines class="error">\n              <p class="p-t-0 p-b-0">{{ thresholdError.errMsg }}</p>\n          </ion-item-divider>\n          <div *ngIf="isUpdateMode">\n              <ion-item-divider no-padding>\n                <div class="border-divider"></div>\n              </ion-item-divider>\n              <ion-item no-padding>\n                <ion-toggle [(ngModel)]="model.optOut" (ngModelChange)="toggleAlertOptOut($event)"></ion-toggle>\n                <ion-label>\n                  <h3 class="openSans-bold">Opt Out</h3>\n                </ion-label>\n              </ion-item>\n              <ion-item-divider no-padding>\n                <div class="border-divider"></div>\n              </ion-item-divider>\n            </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="footer-wrapper">\n      <ion-row>\n          <ion-col>\n            <ion-row>\n              <button ion-button large block [disabled]="!phoneError.valid || (model.alertThreshold && !thresholdError.valid) || (!model.alertBalance && !model.alertThreshold)" *ngIf=\'!isUpdateMode\' (click)="registerAlert()">Register for alerts</button>\n              <button ion-button large block [disabled]="(!model.optOut && (!phoneError.valid || (model.alertThreshold && !thresholdError.valid) || (!model.alertBalance && !model.alertThreshold)))" *ngIf=\'isUpdateMode\' (click)="updateAlertOptOut()">Update</button>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="viewAlertSettingsPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\viewAlertSettings\viewAlertSettings.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__cardDetailsData_service__["a" /* CardDetailsDataService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__cardDetailsData_service__["a" /* CardDetailsDataService */]])
    ], viewAlertSettingsPage);
    return viewAlertSettingsPage;
}());

//# sourceMappingURL=viewAlertSettings.js.map

/***/ })

});
//# sourceMappingURL=76.js.map