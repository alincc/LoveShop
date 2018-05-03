webpackJsonp([5],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardNumberPageModule", function() { return AddCardNumberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addCardNumber__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__httpAddCard_service__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddCardNumberPageModule = (function () {
    function AddCardNumberPageModule() {
    }
    AddCardNumberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__addCardNumber__["a" /* AddCardNumberPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__addCardNumber__["a" /* AddCardNumberPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_3__addCardNumber__["a" /* AddCardNumberPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__httpAddCard_service__["a" /* HttpAddCardService */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ]
        })
    ], AddCardNumberPageModule);
    return AddCardNumberPageModule;
}());

//# sourceMappingURL=addCardNumber.module.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = maxlengthFieldValidator;
/* harmony export (immutable) */ __webpack_exports__["e"] = maxlengthFieldValidatorPostcode;
/* harmony export (immutable) */ __webpack_exports__["c"] = maxlengthFieldValidatorExtraCard;
/* harmony export (immutable) */ __webpack_exports__["b"] = maxlengthFieldValidatorCSC;
/* harmony export (immutable) */ __webpack_exports__["d"] = maxlengthFieldValidatorPIN;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appConfig__ = __webpack_require__(43);

function maxlengthFieldValidator(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length > length)
                ? { maxLengthField: errorMessage(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessage(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return fieldName + " can be no more than " + length + " characters in length.";
}
function maxlengthFieldValidatorPostcode(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length > length)
                ? { maxLengthField: errorMessagePostCode(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessagePostCode(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return __WEBPACK_IMPORTED_MODULE_0__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_api_invalid_postcode;
}
function maxlengthFieldValidatorExtraCard(length) {
    return function (control) {
        var input = parseInt(control.value);
        if (input !== null && typeof input !== 'undefined') {
            return (input > length)
                ? { maxLengthField: errorMessageExtraCard(length) }
                : null;
        }
        return null;
    };
}
function errorMessageExtraCard(length) {
    return "Maximum " + length + " extra gift cards.";
}
function maxlengthFieldValidatorCSC(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length > length)
                ? { maxLengthField: errorMessageCSC(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessageCSC(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    // return `The CSC must contain 3 digit numbers.`;
    return __WEBPACK_IMPORTED_MODULE_0__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.cardCsc_less_than_min;
}
function maxlengthFieldValidatorPIN(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length > length)
                ? { maxLengthField: errorMessagePIN(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessagePIN(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return __WEBPACK_IMPORTED_MODULE_0__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_4_digits;
}
//# sourceMappingURL=validator-maxlengthField.directive.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpAddCardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_services_mobileDeviceService_mobileDeviceService_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Imports



// Import RxJs required methods











var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var API_Authentication = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.API_Authentication;
var NO_CONNECTION_MSG = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.NO_CONNECTION_MSG;
var TOKEN_INVALID = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.TOKEN_INVALID;
var HttpAddCardService = (function () {
    function HttpAddCardService(authenticationService, events, http) {
        this.authenticationService = authenticationService;
        this.events = events;
        this.http = http;
        this.receiveTimeout = 120000;
    }
    HttpAddCardService.prototype.post = function (api, requestType, body) {
        var _this = this;
        // Stringify payload
        var bodyString = JSON.stringify(body);
        // ...using post request
        return this.http
            .post(this.getFullApiUrl(api), bodyString, this.headerOptions(requestType))
            .timeout(this.receiveTimeout)
            .map(this.extractData.bind(this))
            .catch(function (error) {
            return _this.extractData(error);
        });
    };
    HttpAddCardService.prototype.getFullApiUrl = function (api) {
        return api.indexOf("http") === -1
            ? __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseApiUrl + api
            : api;
    };
    HttpAddCardService.prototype.headerOptions = function (requestType) {
        // ... Set content type to JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'API_Authentication': API_Authentication,
            'Authorization': this.authenticationService.getToken(),
            'Device_Name': __WEBPACK_IMPORTED_MODULE_11__framework_services_mobileDeviceService_mobileDeviceService_service__["a" /* MobileDeviceService */].getInstance().getDeviceType(),
            'Request_Type': requestType
        });
        // Create a request option
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    HttpAddCardService.prototype.extractData = function (res) {
        if (res.status <= 4) {
            __WEBPACK_IMPORTED_MODULE_10__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(NO_CONNECTION_MSG);
            return;
        }
        else if (res.status === 401) {
            var errors = res.json().errors;
            var message = '';
            if (__WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__["a" /* Utils */].lengthGreaterThan0(errors)) {
                if (errors[0].code === "token.invalid" || errors[0].code === "park-api.token.expired") {
                    this.authenticationService.invalidToken$.next({
                        message: TOKEN_INVALID
                    });
                }
                message = errors[0].message;
            }
            else {
                message = DEFAULT_ERROR_MSG;
            }
            __WEBPACK_IMPORTED_MODULE_10__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message, __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.time2ShowToast);
            return;
        }
        else if (res.status !== 200) {
            var message = '';
            var result_1;
            try {
                result_1 = res.json();
            }
            catch (e) { }
            if (__WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(result_1) && __WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(result_1.errors) && result_1.errors.length > 0) {
                if (__WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(result_1.errors[0].message)) {
                    message = result_1.errors[0].message;
                }
                else {
                    var code = result_1.errors[0].code;
                    if (__WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(code)) {
                        this.getMessage('cms/message/code=' + code);
                    }
                    else {
                        message = DEFAULT_ERROR_MSG;
                    }
                }
            }
            else {
                message = DEFAULT_ERROR_MSG;
            }
            __WEBPACK_IMPORTED_MODULE_10__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
            return;
        }
        var result;
        if (res.ok === true) {
            result = res.json() || {};
        }
        else {
            result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(res);
        }
        result.ok = res.ok;
        result.status = res.status;
        return result;
    };
    HttpAddCardService.prototype.getMessage = function (api) {
        return this.http
            .get(this.getFullApiUrl(api), this.headerOptionsGetContent())
            .subscribe(function (res) {
            var message = DEFAULT_ERROR_MSG;
            try {
                var body = res.json();
                if (body && body.response && body.response.message) {
                    message = body.response.message;
                }
                else if (body && Array.isArray(body.errors) && body.errors.length > 0) {
                    message = body.errors[0];
                }
                else {
                    message = DEFAULT_ERROR_MSG;
                }
            }
            catch (error) {
                message = DEFAULT_ERROR_MSG;
            }
            __WEBPACK_IMPORTED_MODULE_10__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_10__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(DEFAULT_ERROR_MSG);
        });
    };
    HttpAddCardService.prototype.headerOptionsGetContent = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'API_Authentication': API_Authentication,
            'Device_Name': __WEBPACK_IMPORTED_MODULE_11__framework_services_mobileDeviceService_mobileDeviceService_service__["a" /* MobileDeviceService */].getInstance().getDeviceType(),
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    HttpAddCardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpAddCardService);
    return HttpAddCardService;
}());

//# sourceMappingURL=httpAddCard.service.js.map

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

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpAddCard_service__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cardDetails_cardDetailsSharing_services__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_nav_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddCardDataService = (function () {
    function AddCardDataService(http, httpAddCard, navCtrl, navSvc, viewCtrl) {
        this.http = http;
        this.httpAddCard = httpAddCard;
        this.navCtrl = navCtrl;
        this.navSvc = navSvc;
        this.viewCtrl = viewCtrl;
    }
    AddCardDataService.prototype.checkCardTypeToAddCard = function (cardID) {
        return this.httpAddCard.post("card/type", 'ADD_CARD', cardID);
    };
    AddCardDataService.prototype.checkCardTypeBalance = function (cardID) {
        return this.httpAddCard.post("card/type", 'BALANCE', cardID);
    };
    AddCardDataService.prototype.addCard = function (cardModel) {
        return this.httpAddCard.post("card", "", cardModel);
    };
    AddCardDataService.prototype.getHelp = function (code) {
        return this.http.get("cms/message/code=" + code);
    };
    AddCardDataService.prototype.getRetrieveCardsInfo = function () {
        return this.http.get("card");
    };
    AddCardDataService.prototype.gotoCardDetailAndReload = function (cardId, cardNumber) {
        __WEBPACK_IMPORTED_MODULE_6__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().goToFromAddCard = true;
        //variable is not make sense but cardId:CardNumber is correct
        var needBackToYourCard = __WEBPACK_IMPORTED_MODULE_6__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().needBackToYourCard;
        if (needBackToYourCard === true) {
            __WEBPACK_IMPORTED_MODULE_6__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().needBackToYourCard = false;
            var card = {
                reloadData: true,
                cardId: cardNumber,
                cardNumber: cardId,
            };
            __WEBPACK_IMPORTED_MODULE_4__cardDetails_cardDetailsSharing_services__["a" /* CardDetailSharingDataService */].getInstance().gotoCardDataReload = card;
            this.navCtrl.popToRoot();
        }
        else {
            this.navCtrl.setRoot('TabsPage');
        }
    };
    AddCardDataService.prototype.saveNavigationState = function (linkPage) {
        this.linkPage = linkPage;
    };
    AddCardDataService.prototype.resetNavigationState = function () {
        this.linkPage = null;
    };
    AddCardDataService.prototype.navigationPage = function (body, cardID) {
        if (body.cardType === 'FLEXECASH') {
            var index = this.viewCtrl.index;
            if (index > 1) {
                this.navCtrl.remove(index, 1, { animate: false, duration: 0 });
            }
            this.navCtrl.push('AddFlexCashPage', { 'cardNumber': cardID, 'termsPath': body.termsPath, animate: false, duration: 0 });
        }
        else if (body.cardType === 'FLEXECODE_2.0') {
            var index = this.viewCtrl.index;
            if (index > 1) {
                this.navCtrl.remove(index, 1, { animate: false, duration: 0 });
            }
            this.navCtrl.push('AddFlexECodePage', { 'cardNumber': cardID, animate: false, duration: 0 });
        }
        else if (body.cardType === 'MASTERCARD') {
            var index = this.viewCtrl.index;
            if (index > 1) {
                this.navCtrl.remove(index, 1, { animate: false, duration: 0 });
            }
            this.navCtrl.push('AddCardPhysicalMasterCardPage', {
                'cardNumber': cardID,
                'termsPath': body.termsPath,
                'bodyCardType': body,
                animate: false,
                duration: 0
            });
        }
        else if (body.cardType === 'STORECARD' && body.doubleEnterFields === 'CARD_NUMBER') {
            var index = this.viewCtrl.index;
            if (index > 1) {
                this.navCtrl.remove(index, 1, { animate: false, duration: 0 });
            }
            this.navCtrl.push('AddCardTescoPage', { 'cardNumber': cardID, animate: false, duration: 0 });
        }
        else if (body.cardType === 'STORECARD' && body.doubleEnterFields === 'SERIAL_NUMBER') {
            var index = this.viewCtrl.index;
            if (index > 1) {
                this.navCtrl.remove(index, 1, { animate: false, duration: 0 });
            }
            this.navCtrl.push('AddCardSainsburysPage', { 'cardNumber': cardID, animate: false, duration: 0 });
        }
    };
    AddCardDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_httpService_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1__httpAddCard_service__["a" /* HttpAddCardService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* ViewController */]])
    ], AddCardDataService);
    return AddCardDataService;
}());

//# sourceMappingURL=addCardData.service.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagnostic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 *
 * @usage
 * ```typescript
 * import { Diagnostic } from '@ionic-native/diagnostic';
 *
 * constructor(private diagnostic: Diagnostic) { }
 *
 * ...
 *
 * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
 * let errorCallback = (e) => console.error(e);
 *
 * this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
 *
 * this.diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);
 *
 *
 * this.diagnostic.getBluetoothState()
 *   .then((state) => {
 *     if (state == this.diagnostic.bluetoothState.POWERED_ON){
 *       // do something
 *     } else {
 *       // do something else
 *     }
 *   }).catch(e => console.error(e));
 *
 * ```
 *
 */
var Diagnostic = (function (_super) {
    __extends(Diagnostic, _super);
    function Diagnostic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.permission = {
            READ_CALENDAR: 'READ_CALENDAR',
            WRITE_CALENDAR: 'WRITE_CALENDAR',
            CAMERA: 'CAMERA',
            READ_CONTACTS: 'READ_CONTACTS',
            WRITE_CONTACTS: 'WRITE_CONTACTS',
            GET_ACCOUNTS: 'GET_ACCOUNTS',
            ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
            ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
            RECORD_AUDIO: 'RECORD_AUDIO',
            READ_PHONE_STATE: 'READ_PHONE_STATE',
            CALL_PHONE: 'CALL_PHONE',
            ADD_VOICEMAIL: 'ADD_VOICEMAIL',
            USE_SIP: 'USE_SIP',
            PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
            READ_CALL_LOG: 'READ_CALL_LOG',
            WRITE_CALL_LOG: 'WRITE_CALL_LOG',
            SEND_SMS: 'SEND_SMS',
            RECEIVE_SMS: 'RECEIVE_SMS',
            READ_SMS: 'READ_SMS',
            RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
            RECEIVE_MMS: 'RECEIVE_MMS',
            WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
            READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
            BODY_SENSORS: 'BODY_SENSORS'
        };
        _this.locationAuthorizationMode = {
            ALWAYS: 'always',
            WHEN_IN_USE: 'when_in_use'
        };
        _this.permissionGroups = {
            CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
            CAMERA: ['CAMERA'],
            CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
            LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
            MICROPHONE: ['RECORD_AUDIO'],
            PHONE: ['READ_PHONE_STATE', 'CALL_PHONE', 'ADD_VOICEMAIL', 'USE_SIP', 'PROCESS_OUTGOING_CALLS', 'READ_CALL_LOG', 'WRITE_CALL_LOG'],
            SENSORS: ['BODY_SENSORS'],
            SMS: ['SEND_SMS', 'RECEIVE_SMS', 'READ_SMS', 'RECEIVE_WAP_PUSH', 'RECEIVE_MMS'],
            STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE']
        };
        _this.locationMode = {
            HIGH_ACCURACY: 'high_accuracy',
            DEVICE_ONLY: 'device_only',
            BATTERY_SAVING: 'battery_saving',
            LOCATION_OFF: 'location_off'
        };
        _this.bluetoothState = {
            UNKNOWN: 'unknown',
            RESETTING: 'resetting',
            UNSUPPORTED: 'unsupported',
            UNAUTHORIZED: 'unauthorized',
            POWERED_OFF: 'powered_off',
            POWERED_ON: 'powered_on',
            POWERING_OFF: 'powering_off',
            POWERING_ON: 'powering_on'
        };
        return _this;
    }
    /**
     * Checks if app is able to access device location.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isLocationAvailable = function () { return; };
    /**
     * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
     * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isWifiAvailable = function () { return; };
    /**
     * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
     * application is authorized to use it.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isCameraAvailable = function (externalStorage) { return; };
    /**
     * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
     * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isBluetoothAvailable = function () { return; };
    /**
     * Displays the device location settings to allow user to enable location services/change location mode.
     */
    Diagnostic.prototype.switchToLocationSettings = function () { };
    /**
     * Displays mobile settings to allow user to enable mobile data.
     */
    Diagnostic.prototype.switchToMobileDataSettings = function () { };
    /**
     * Displays Bluetooth settings to allow user to enable Bluetooth.
     */
    Diagnostic.prototype.switchToBluetoothSettings = function () { };
    /**
     * Displays WiFi settings to allow user to enable WiFi.
     */
    Diagnostic.prototype.switchToWifiSettings = function () { };
    /**
     * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isWifiEnabled = function () { return; };
    /**
     * Enables/disables WiFi on the device.
     * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
     * @param state {boolean}
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.setWifiState = function (state) { return; };
    /**
     * Enables/disables Bluetooth on the device.
     * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
     * @param state {boolean}
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.setBluetoothState = function (state) { return; };
    // ANDROID AND IOS ONLY
    /**
     * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isLocationEnabled = function () { return; };
    /**
     * Checks if the application is authorized to use location.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isLocationAuthorized = function () { return; };
    /**
     * Returns the location authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getLocationAuthorizationStatus = function () { return; };
    /**
     * Returns the location authorization status for the application.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     *
     * @param {string} [mode] iOS only: location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestLocationAuthorization = function (mode) { return; };
    /**
     * Checks if camera hardware is present on device.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isCameraPresent = function () { return; };
    /**
     * Checks if the application is authorized to use the camera.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isCameraAuthorized = function (externalStorage) { return; };
    /**
     * Returns the camera authorization status for the application.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getCameraAuthorizationStatus = function (externalStorage) { return; };
    /**
     * Requests camera authorization for the application.
     * @param {boolean} [externalStorage] Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestCameraAuthorization = function (externalStorage) { return; };
    /**
     * Checks if the application is authorized to use the microphone.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isMicrophoneAuthorized = function () { return; };
    /**
     * Returns the microphone authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getMicrophoneAuthorizationStatus = function () { return; };
    /**
     * Requests microphone authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestMicrophoneAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use contacts (address book).
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isContactsAuthorized = function () { return; };
    /**
     * Returns the contacts authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getContactsAuthorizationStatus = function () { return; };
    /**
     * Requests contacts authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestContactsAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use the calendar.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isCalendarAuthorized = function () { return; };
    /**
     * Returns the calendar authorization status for the application.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getCalendarAuthorizationStatus = function () { return; };
    /**
     * Requests calendar authorization for the application.
     *
     * Notes for iOS:
     *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     *   - This requests permission for `READ_CALENDAR` run-time permission
     *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
     *
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestCalendarAuthorization = function () { return; };
    /**
     * Opens settings page for this app.
     * On Android, this opens the "App Info" page in the Settings app.
     * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.switchToSettings = function () { return; };
    /**
     * Returns the state of Bluetooth on the device.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getBluetoothState = function () { return; };
    /**
     * Registers a function to be called when a change in Bluetooth state occurs.
     * @param handler
     */
    Diagnostic.prototype.registerBluetoothStateChangeHandler = function (handler) { };
    /**
     * Registers a function to be called when a change in Location state occurs.
     * @param handler
     */
    Diagnostic.prototype.registerLocationStateChangeHandler = function (handler) { };
    // ANDROID ONLY
    /**
     * Checks if high-accuracy locations are available to the app from GPS hardware.
     * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isGpsLocationAvailable = function () { return; };
    /**
     * Checks if location mode is set to return high-accuracy locations from GPS hardware.
     *   Returns true if Location mode is enabled and is set to either:
     *   - Device only = GPS hardware only (high accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isGpsLocationEnabled = function () { return; };
    /**
     * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isNetworkLocationAvailable = function () { return; };
    /**
     * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to either:
     *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isNetworkLocationEnabled = function () { return; };
    /**
     * Returns the current location mode setting for the device.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getLocationMode = function () { return; };
    /**
     * Returns the current authorisation status for a given permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getPermissionAuthorizationStatus = function (permission) { return; };
    /**
     * Returns the current authorisation status for multiple permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getPermissionsAuthorizationStatus = function (permissions) { return; };
    /**
     * Requests app to be granted authorisation for a runtime permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestRuntimePermission = function (permission) { return; };
    /**
     * Requests app to be granted authorisation for multiple runtime permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestRuntimePermissions = function (permissions) { return; };
    /**
     * Indicates if the plugin is currently requesting a runtime permission via the native API.
     * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
     * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
     * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
     * @returns {boolean}
     */
    Diagnostic.prototype.isRequestingPermission = function () { return; };
    /**
     * Registers a function to be called when a runtime permission request has completed.
     * Pass in a falsey value to de-register the currently registered function.
     * @param handler {Function}
     */
    Diagnostic.prototype.registerPermissionRequestCompleteHandler = function (handler) { return; };
    /**
     * Checks if the device setting for Bluetooth is switched on.
     * This requires `BLUETOOTH` permission on Android
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isBluetoothEnabled = function () { return; };
    /**
     * Checks if the device has Bluetooth capabilities.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.hasBluetoothSupport = function () { return; };
    /**
     * Checks if the device has Bluetooth Low Energy (LE) capabilities.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.hasBluetoothLESupport = function () { return; };
    /**
     * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.hasBluetoothLEPeripheralSupport = function () { return; };
    /**
     * Checks if the application is authorized to use external storage.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isExternalStorageAuthorized = function () { return; };
    /**
     * CReturns the external storage authorization status for the application.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.getExternalStorageAuthorizationStatus = function () { return; };
    /**
     * Requests external storage authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestExternalStorageAuthorization = function () { return; };
    /**
     * Returns details of external SD card(s): absolute path, is writable, free space.
     *
     * The intention of this method is to return the location and details of removable external SD cards.
     * This differs from the "external directories" returned by cordova-plugin-file which return mount points relating to non-removable (internal) storage.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getexternalsdcarddetails)
     *
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getExternalSdCardDetails = function () { return; };
    /**
     * Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.
     */
    Diagnostic.prototype.switchToWirelessSettings = function () { };
    /**
     * Displays NFC settings to allow user to enable NFC.
     */
    Diagnostic.prototype.switchToNFCSettings = function () { };
    /**
     * Checks if NFC hardware is present on device.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isNFCPresent = function () { return; };
    /**
     * Checks if the device setting for NFC is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isNFCEnabled = function () { return; };
    /**
     * Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isNFCAvailable = function () { return; };
    /**
     * Registers a function to be called when a change in NFC state occurs. Pass in a falsey value to de-register the currently registered function.
     * @param hander {Function} callback function to be called when NFC state changes
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.registerNFCStateChangeHandler = function (handler) { };
    // IOS ONLY
    /**
     * Checks if the application is authorized to use the Camera Roll in Photos app.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isCameraRollAuthorized = function () { return; };
    /**
     * Returns the authorization status for the application to use the Camera Roll in Photos app.
     * @returns {Promise<string>}
     */
    Diagnostic.prototype.getCameraRollAuthorizationStatus = function () { return; };
    /**
     * Requests camera roll authorization for the application.
     * Should only be called if authorization status is NOT_REQUESTED.
     * Calling it when in any other state will have no effect.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestCameraRollAuthorization = function () { return; };
    /**
     * Checks if remote (push) notifications are enabled.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isRemoteNotificationsEnabled = function () { return; };
    /**
     * Indicates if the app is registered for remote (push) notifications on the device.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isRegisteredForRemoteNotifications = function () { return; };
    /**
     * Indicates the current setting of notification types for the app in the Settings app.
     * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getRemoteNotificationTypes = function () { return; };
    /**
     * Checks if the application is authorized to use reminders.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isRemindersAuthorized = function () { return; };
    /**
     * Returns the reminders authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getRemindersAuthorizationStatus = function () { return; };
    /**
     * Requests reminders authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestRemindersAuthorization = function () { return; };
    /**
     * Checks if the application is authorized for background refresh.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isBackgroundRefreshAuthorized = function () { return; };
    /**
     * Returns the background refresh authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getBackgroundRefreshStatus = function () { return; };
    /**
     * Requests Bluetooth authorization for the application.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)
     * @return {Promise<any>}
     */
    Diagnostic.prototype.requestBluetoothAuthorization = function () { return; };
    /**
     * Checks if motion tracking is available on the current device.
     * @return {Promise<boolean>}
     */
    Diagnostic.prototype.isMotionAvailable = function () { return; };
    /**
     * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
     * There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
     * therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.
     *
     * @return {Promise<boolean>}
     */
    Diagnostic.prototype.isMotionRequestOutcomeAvailable = function () { return; };
    /**
     * Requests and checks motion authorization for the application: there is no way to independently request only or check only, so both must be done in one operation.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestandcheckmotionauthorization)
     *
     * @return {Promise<any>}
     */
    Diagnostic.prototype.requestAndCheckMotionAuthorization = function () { return; };
    return Diagnostic;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));
Diagnostic.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
Diagnostic.ctorParameters = function () { return []; };
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaProperty */],
    __metadata("design:type", Object)
], Diagnostic.prototype, "permissionStatus", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaProperty */],
    __metadata("design:type", Object)
], Diagnostic.prototype, "NFCState", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isLocationAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isWifiAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isBluetoothAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToLocationSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToMobileDataSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToBluetoothSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToWifiSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isWifiEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "setWifiState", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "setBluetoothState", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isLocationEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isLocationAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getLocationAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestLocationAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraPresent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getCameraAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestCameraAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isMicrophoneAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getMicrophoneAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestMicrophoneAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isContactsAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getContactsAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestContactsAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCalendarAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getCalendarAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestCalendarAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "switchToSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getBluetoothState", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerBluetoothStateChangeHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerLocationStateChangeHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isGpsLocationAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isGpsLocationEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNetworkLocationAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNetworkLocationEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getLocationMode", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getPermissionAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getPermissionsAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestRuntimePermission", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestRuntimePermissions", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Diagnostic.prototype, "isRequestingPermission", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerPermissionRequestCompleteHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isBluetoothEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "hasBluetoothSupport", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "hasBluetoothLESupport", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "hasBluetoothLEPeripheralSupport", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isExternalStorageAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getExternalStorageAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestExternalStorageAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getExternalSdCardDetails", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToWirelessSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToNFCSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNFCPresent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNFCEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNFCAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerNFCStateChangeHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraRollAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getCameraRollAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestCameraRollAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isRemoteNotificationsEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isRegisteredForRemoteNotifications", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getRemoteNotificationTypes", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isRemindersAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getRemindersAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestRemindersAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isBackgroundRefreshAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getBackgroundRefreshStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestBluetoothAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isMotionAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isMotionRequestOutcomeAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestAndCheckMotionAuthorization", null);
Diagnostic = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
        pluginName: 'Diagnostic',
        plugin: 'cordova.plugins.diagnostic',
        pluginRef: 'cordova.plugins.diagnostic',
        repo: 'https://github.com/dpa99c/cordova-diagnostic-plugin',
        platforms: ['Android', 'iOS', 'Windows']
    })
], Diagnostic);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardIO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Card IO
 * @description
 * @usage
 * Note: For use with iOS 10 + When building your app with the iOS 10 SDK +, you have to add some info to the info.plist file. This is due to increased security in iOS 10. Go to your app directory and search for the <your app name>Info.plist file. Add the following lines in the main <dict> element.
 * ```xml
 *<key>NSCameraUsageDescription</key>
 *<string>To scan credit cards.</string>
 *```
 * ```typescript
 * import { CardIO } from '@ionic-native/card-io';
 *
 * constructor(private cardIO: CardIO) { }
 *
 * ...
 *
 *
 * this.cardIO.canScan()
 *   .then(
 *     (res: boolean) => {
 *       if(res){
 *         let options = {
 *           requireExpiry: true,
 *           requireCVV: false,
 *           requirePostalCode: false
 *         };
 *         CardIO.scan(options);
 *       }
 *     }
 *   );
 * ```
 * @interfaces
 * CardIOOptions
 * CardIOResponse
 */
var CardIO = (function (_super) {
    __extends(CardIO, _super);
    function CardIO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check whether card scanning is currently available. (May vary by
     * device, OS version, network connectivity, etc.)
     *
     * @returns {Promise<boolean>}
     */
    CardIO.prototype.canScan = function () {
        return;
    };
    /**
     * Scan a credit card with card.io.
     * @param {CardIOOptions} [options] Options for configuring the plugin
     * @returns {Promise<any>}
     */
    CardIO.prototype.scan = function (options) {
        return;
    };
    /**
     * Retrieve the version of the card.io library. Useful when contacting support.
     * @returns {Promise<string>}
     */
    CardIO.prototype.version = function () {
        return;
    };
    CardIO.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    CardIO.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CardIO.prototype, "canScan", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CardIO.prototype, "scan", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CardIO.prototype, "version", null);
    CardIO = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
            pluginName: 'CardIO',
            plugin: 'card.io.cordova.mobilesdk',
            pluginRef: 'CardIO',
            repo: 'https://github.com/card-io/card.io-Cordova-Plugin',
            platforms: ['Android', 'iOS']
        })
    ], CardIO);
    return CardIO;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_card_io__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addCardData_service__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_maxlengthField_directive__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_appConfig_ts__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_diagnostic__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__addCardNumber_service__ = __webpack_require__(923);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AddCardNumberPage = (function () {
    function AddCardNumberPage(routeManager, cardIO, formBuilder, cardDataService, navCtrl, navParams, alertCtrl, diagnostic, addCardNumberService, camera) {
        this.routeManager = routeManager;
        this.cardIO = cardIO;
        this.formBuilder = formBuilder;
        this.cardDataService = cardDataService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.diagnostic = diagnostic;
        this.addCardNumberService = addCardNumberService;
        this.camera = camera;
        this.formErrors = {
            'cardID': ''
        };
        __WEBPACK_IMPORTED_MODULE_12__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().IsOpenedAddCardScreen = true;
        this.buildForm();
    }
    AddCardNumberPage.prototype.onError = function (arg0) {
        throw new Error("Method not implemented.");
    };
    AddCardNumberPage.prototype.buildForm = function () {
        var _this = this;
        this.addCardForm = this.formBuilder.group({
            'cardID': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('cardID'),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(19, 'Card or e-code number')
                ]]
        }, {
            validator: {
                updateOn: 'blur'
            }
        });
        this.addCardForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    AddCardNumberPage.prototype.errorMessage = function (path) {
        var control = this.addCardForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_11__framework_appConfig_ts__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'cardID') {
            if (control.hasError('required')) {
                return control.getError('required');
            }
            else {
                if (control.hasError('maxLengthField')) {
                    return control.getError('maxLengthField');
                }
            }
        }
    };
    AddCardNumberPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_13_jquery___default()('.app-root').addClass('not-show-tab');
        this.getContentMSG();
    };
    AddCardNumberPage.prototype.ionViewDidEnter = function () {
        this.buildForm();
    };
    AddCardNumberPage.prototype.getContentMSG = function () {
        var _this = this;
        var observer = {
            next: function (res) {
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_11__framework_appConfig_ts__["a" /* AppConfig */].Configuration.ContentMessage.enter_all_digits = res[0].response.message;
                    _this.enter_all_digits = __WEBPACK_IMPORTED_MODULE_11__framework_appConfig_ts__["a" /* AppConfig */].Configuration.ContentMessage.enter_all_digits;
                }
                var msg_code = [
                    'must_read_ts_cs',
                    'account_management_confirm_user_of_card',
                    'account_management_confirm_user',
                    'account_management_new_ecode',
                    'account_management_card_added_to_wallet',
                ];
                for (var i = 1; i < msg_code.length; i++) {
                    if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i].response.message)) {
                        var mg_item_code = msg_code[i];
                        __WEBPACK_IMPORTED_MODULE_11__framework_appConfig_ts__["a" /* AppConfig */].Configuration.ContentMessage[mg_item_code] = res[i].response.message;
                    }
                }
            },
            error: function (error) {
            },
            complete: function () {
            }
        };
        __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].combineLatest(this.cardDataService.getHelp("enter-all-digits"), this.cardDataService.getHelp("must-read-ts-cs"), this.cardDataService.getHelp("account-management.confirm-user-of-card"), this.cardDataService.getHelp("account-management.confirm-user"), this.cardDataService.getHelp("account-management.new-ecode"), this.cardDataService.getHelp("account-management.card-added-to-wallet")).subscribe(observer);
    };
    AddCardNumberPage.prototype.checkCardType = function () {
        var _this = this;
        if (this.addCardForm.valid) {
            __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    if (!res.ok) {
                        return;
                    }
                    var body = res.response;
                    if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body.cardType)) {
                        _this.cardDataService.navigationPage(body, _this.addCardForm.value.cardID);
                    }
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                },
                complete: function () {
                    __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.cardDataService
                .checkCardTypeToAddCard(this.addCardForm.value)
                .subscribe(observer);
        }
    };
    AddCardNumberPage.prototype.gotoHomePage = function () {
        __WEBPACK_IMPORTED_MODULE_12__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().IsOpenedAddCardScreen = false;
        var callFrom = this.navParams.get('callFrom');
        if ((callFrom && callFrom === 'Register') || this.isUserLogedIn()) {
            __WEBPACK_IMPORTED_MODULE_12__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().CallFromRegister = true;
            var needBackToYourCard = __WEBPACK_IMPORTED_MODULE_12__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().needBackToYourCard;
            if (needBackToYourCard === true) {
                __WEBPACK_IMPORTED_MODULE_12__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().needBackToYourCard = false;
                __WEBPACK_IMPORTED_MODULE_12__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().goToFromAddCard = true;
                this.navCtrl.pop();
            }
            else {
                this.navCtrl.setRoot('TabsPage');
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_12__cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().CallFromRegister = false;
            this.navCtrl.pop();
        }
    };
    AddCardNumberPage.prototype.isUserLogedIn = function () {
        return !!localStorage && !!localStorage.getItem('token');
    };
    AddCardNumberPage.prototype.openCamera = function () {
        // this.navCtrl.push('AddCreditDebitCardPage');
        this.checkAuthorization();
    };
    AddCardNumberPage.prototype.checkAuthorization = function () {
        this.showCamera();
        // this.diagnostic.isCameraAuthorized().then((authorized) => {
        //   if (!authorized) {
        //     this.diagnostic.requestCameraAuthorization().then((status) => {
        //       switch (status) {
        //         case this.diagnostic.permissionStatus.GRANTED:
        //         case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE: {
        //           this.showCamera();
        //           break;
        //         }
        //         default: {
        //         }
        //       }
        //     }).catch((error) => this.onError(error));
        //   } else {
        //     this.showCamera();
        //   }
        // }).catch((error) => this.onError(error));
    };
    AddCardNumberPage.prototype.showCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var processData = function (imageData) {
            var the_file = new Blob([window.atob(imageData)], { type: 'image/png' });
            var fd = new FormData();
            fd.append('cardImage', the_file, 'card.png');
            _this.addCardNumberService.submitCardImage(fd)
                .subscribe(function (data) {
                console.log(data);
            }, function (err) { return console.error(err); });
        };
        var base64Data = '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';
        processData(base64Data);
        // this.camera.getPicture(options).then(processData, (err) => { 
        //   // Handle error
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], AddCardNumberPage.prototype, "textInputs", void 0);
    AddCardNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addCardNumber',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\CardManagement\addcard\addCardNumber\addCardNumber.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="gotoHomePage()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add A Card</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <ion-col class="p-t-20">\n        <p class="text-14">{{enter_all_digits}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <form name="addCardForm" [formGroup]="addCardForm">\n          <ion-row class="m-b-20">\n            <ion-col>\n              <ion-item no-padding class="item-has-addon">\n                <ion-input name="cardID" type="text" formControlName=\'cardID\' placeholder="Card or e-code number"></ion-input>\n                <ion-icon name="camera" (click)="openCamera()" item-right></ion-icon>\n              </ion-item>\n\n              <ion-item-divider ion-item light no-lines class="error" *ngIf="addCardForm.get(\'cardID\').dirty && !addCardForm.get(\'cardID\').valid">\n                <p>{{errorMessage(\'cardID\')}}</p>\n              </ion-item-divider>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button block large [disabled]="!addCardForm.valid " (click)="checkCardType()">Submit</button>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style="display: none;" (click)="gotoHomePage()" id="AddCardNumberPage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\CardManagement\addcard\addCardNumber\addCardNumber.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_card_io__["a" /* CardIO */],
                __WEBPACK_IMPORTED_MODULE_5__addCardData_service__["a" /* AddCardDataService */],
                __WEBPACK_IMPORTED_MODULE_16__addCardNumber_service__["a" /* AddCardNumberService */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_diagnostic__["a" /* Diagnostic */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_card_io__["a" /* CardIO */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__addCardData_service__["a" /* AddCardDataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_16__addCardNumber_service__["a" /* AddCardNumberService */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */]])
    ], AddCardNumberPage);
    return AddCardNumberPage;
}());

//# sourceMappingURL=addCardNumber.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardNumberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_appConfig_ts__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_mobileDeviceService_mobileDeviceService_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_login_authenticationGuard_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// const API_Authentication = app.Configuration.HttpService.API_Authentication;
var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_1__framework_appConfig_ts__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var API_Authentication = __WEBPACK_IMPORTED_MODULE_1__framework_appConfig_ts__["a" /* AppConfig */].Configuration.HttpService.API_Authentication;
var NO_CONNECTION_MSG = __WEBPACK_IMPORTED_MODULE_1__framework_appConfig_ts__["a" /* AppConfig */].Configuration.HttpService.NO_CONNECTION_MSG;
var TOKEN_INVALID = __WEBPACK_IMPORTED_MODULE_1__framework_appConfig_ts__["a" /* AppConfig */].Configuration.HttpService.TOKEN_INVALID;
var INVALID_PAYMENT_MSG = __WEBPACK_IMPORTED_MODULE_1__framework_appConfig_ts__["a" /* AppConfig */].Configuration.HttpService.INVALID_PAYMENT_MSG;
var INVALID_PAYMENT_FEE_MSG = __WEBPACK_IMPORTED_MODULE_1__framework_appConfig_ts__["a" /* AppConfig */].Configuration.HttpService.INVALID_PAYMENT_FEE_MSG;
var INVALID_TOPUP_2192 = __WEBPACK_IMPORTED_MODULE_1__framework_appConfig_ts__["a" /* AppConfig */].Configuration.HttpService.INVALID_TOPUP_2192;
var AddCardNumberService = (function () {
    function AddCardNumberService(http, authenticationService, camera) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.camera = camera;
    }
    AddCardNumberService.prototype.captureCardImage = function (data) {
        var result = new Promise(function (resolve, reject) {
            getImageCardDetail.show(data, resolve, reject);
        });
        return result;
        // do something
        // call native
        // open camera
        // check if we have permission to access camera
    };
    AddCardNumberService.prototype.getCardDetail = function () {
        var data = {
            filename: 'card.jpg',
            name: 'cardImage'
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
        return this.http.post('card/image', data)
            .map(function (x) {
            // x.cardId;
            // x.expiryDate
            return x;
        });
    };
    AddCardNumberService.prototype.submitCardImage = function (formData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'multipart/form-data',
            'API_Authentication': API_Authentication,
            'Authorization': this.authenticationService.getToken(),
            'Device_Name': __WEBPACK_IMPORTED_MODULE_2__framework_services_mobileDeviceService_mobileDeviceService_service__["a" /* MobileDeviceService */].getInstance().getDeviceType()
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__framework_appConfig_ts__["a" /* AppConfig */].Configuration.HttpService.baseApiUrl + 'card/image', formData, { headers: headers, observe: 'response' });
    };
    AddCardNumberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], AddCardNumberService);
    return AddCardNumberService;
}());

//# sourceMappingURL=addCardNumber.service.js.map

/***/ })

});
//# sourceMappingURL=5.js.map