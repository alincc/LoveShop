webpackJsonp([8],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPinToCardPageModule", function() { return AddPinToCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addPinToCard__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__httpAddCard_service__ = __webpack_require__(810);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddPinToCardPageModule = (function () {
    function AddPinToCardPageModule() {
    }
    AddPinToCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__addPinToCard__["a" /* AddPinToCardPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__addPinToCard__["a" /* AddPinToCardPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_3__addPinToCard__["a" /* AddPinToCardPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__httpAddCard_service__["a" /* HttpAddCardService */]
            ]
        })
    ], AddPinToCardPageModule);
    return AddPinToCardPageModule;
}());

//# sourceMappingURL=addPinToCard.module.js.map

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

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = minlengthValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = minlengthValidatorCSC;
/* unused harmony export minlengthValidatorPostCode */
/* unused harmony export minlengthValidatorSerialNumber */
/* harmony export (immutable) */ __webpack_exports__["c"] = minlengthValidatorPIN;
/* unused harmony export MinLengthValidatorDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function minlengthValidator(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined' && input !== '' && input.trim() !== '') {
            return (input.length < length)
                ? { minlength: errorMessage(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessage(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return fieldName + " must be at least " + length + " characters in length.";
}
function minlengthValidatorCSC(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length < length)
                ? { minlength: errorMessageCSC(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessageCSC(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    // return `The CSC must contain 3 digit numbers.`;
    return __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.cardCsc_less_than_min;
}
function minlengthValidatorPostCode(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length < length)
                ? { minlength: errorMessagePostCode(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessagePostCode(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_api_invalid_postcode;
}
function errorMessageSerialNumber(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return "Must be " + length + " digit numbers.";
}
function minlengthValidatorSerialNumber(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length < length)
                ? { minlength: errorMessageSerialNumber(fieldName, length) }
                : null;
        }
        return null;
    };
}
function minlengthValidatorPIN(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length < length)
                ? { minlength: errorMessagePIN(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessagePIN(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_4_digits;
}
var MinLengthValidatorDirective = (function () {
    function MinLengthValidatorDirective() {
        this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].nullValidator;
    }
    MinLengthValidatorDirective_1 = MinLengthValidatorDirective;
    MinLengthValidatorDirective.prototype.ngOnChanges = function (changes) {
        var change = changes['minlength'];
        if (change) {
            this.valFn = minlengthValidator(parseInt(change.currentValue, 0));
        }
        else {
            this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].nullValidator;
        }
    };
    MinLengthValidatorDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MinLengthValidatorDirective.prototype, "minlength", void 0);
    MinLengthValidatorDirective = MinLengthValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[minlength]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: MinLengthValidatorDirective_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], MinLengthValidatorDirective);
    return MinLengthValidatorDirective;
    var MinLengthValidatorDirective_1;
}());

//# sourceMappingURL=validator-minlength.directive.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpAddCardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_services_mobileDeviceService_mobileDeviceService_service__ = __webpack_require__(169);
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

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);

var AddCardSharingDataService = (function () {
    function AddCardSharingDataService() {
        this.defaultMasterData = {};
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](this.currentMasterData);
        if (AddCardSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use AddCardSharingDataService.getInstance() instead of new.');
        }
        AddCardSharingDataService._instance = this;
    }
    Object.defineProperty(AddCardSharingDataService.prototype, "state$", {
        get: function () {
            return this._state$;
        },
        enumerable: true,
        configurable: true
    });
    AddCardSharingDataService.prototype.resetState = function () {
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$.next(this.currentMasterData);
    };
    AddCardSharingDataService.prototype.saveStep1Screen = function (step1Model) {
        this.currentMasterData.step1Model = step1Model;
    };
    AddCardSharingDataService.prototype.saveStep2Screen = function (step2Model) {
        this.currentMasterData.step2Model = step2Model;
    };
    AddCardSharingDataService.prototype.getStep1Model = function () {
        return Object.assign({}, this.currentMasterData.step1Model);
    };
    AddCardSharingDataService.prototype.getCardNumberAtStep1 = function () {
        return this.currentMasterData.step1Model.cardID;
    };
    AddCardSharingDataService.prototype.getTopUpData = function () {
        var cardModel = {
            // step 1
            amountTopUp: this.currentMasterData.step1Model.cardID,
        };
        return cardModel;
    };
    AddCardSharingDataService.prototype.getDisplayCard = function (cardID) {
        var displayCard = cardID.toString().replace(/-/g, '');
        displayCard = displayCard.substring(0, displayCard.length - 4).replace(/./g, '*') +
            displayCard.substring(displayCard.length - 4);
        return displayCard;
    };
    AddCardSharingDataService.getInstance = function () {
        return AddCardSharingDataService._instance;
    };
    // tslint:disable-next-line:member-ordering
    AddCardSharingDataService._instance = new AddCardSharingDataService();
    return AddCardSharingDataService;
}());

//# sourceMappingURL=addCardSharing.services.js.map

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPinToCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addCardSharing_services__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addCardData_service__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_numeric_directive__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_minlength_directive__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_validations_validator_maxlengthField_directive__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AddPinToCardPage = (function () {
    function AddPinToCardPage(alertCtrl, routeManager, formBuilder, iab, navParams, navCtrl, addCardDataService) {
        this.alertCtrl = alertCtrl;
        this.routeManager = routeManager;
        this.formBuilder = formBuilder;
        this.iab = iab;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.addCardDataService = addCardDataService;
        this.model = {};
        this.must_read_ts_cs = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.must_read_ts_cs;
        this.formErrors = {
            'pin': '',
            'termCondition': false
        };
        this.buildForm();
    }
    AddPinToCardPage.prototype.buildForm = function () {
        var _this = this;
        this.addCardForm = this.formBuilder.group({
            'pin': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin'),
                    Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_minlength_directive__["c" /* minlengthValidatorPIN */])(4, "PIN"),
                    Object(__WEBPACK_IMPORTED_MODULE_12__framework_validations_validator_maxlengthField_directive__["d" /* maxlengthFieldValidatorPIN */])(4, 'PIN'),
                    Object(__WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_numeric_directive__["c" /* numericValidatorPIN */])(),
                ]],
            'termCondition': [false, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].requiredTrue
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
    AddPinToCardPage.prototype.errorMessage = function (path) {
        var control = this.addCardForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'pin' || path === 'termCondition') {
            if (control.hasError('required')) {
                return control.getError('required');
            }
            else {
                if (control.hasError('maxLengthField')) {
                    return control.getError('maxLengthField');
                }
                if (control.hasError('minlength')) {
                    return control.getError('minlength');
                }
                if (control.hasError('key')) {
                    return control.getError('key');
                }
            }
        }
    };
    AddPinToCardPage.prototype.showAlert = function (cardId, nickname) {
        var _this = this;
        var displayCard = __WEBPACK_IMPORTED_MODULE_4__addCardSharing_services__["a" /* AddCardSharingDataService */].getInstance().getDisplayCard(cardId);
        var alert = this.alertCtrl.create({
            title: __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_management_card_added_to_wallet,
            cssClass: 'l2s-alert--flat l2s-alert--default',
            message: "<p>You added: </p><p>" + nickname + "</p><p>" + displayCard + "</p><p class='m-t-10'>To your Card Wallet</p>",
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'main-button',
                    handler: function (data) {
                        _this.addCardDataService.gotoCardDetailAndReload(cardId, '');
                    }
                }, {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    AddPinToCardPage.prototype.ionViewWillEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('cardInfo')) {
                this.cardInfo = this.navParams.get('cardInfo');
            }
            if (this.navParams.get('responseCard')) {
                this.responseCard = this.navParams.get('responseCard');
            }
        }
    };
    AddPinToCardPage.prototype.getHelpContent = function (code) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                if (res && res.response && res.response.message) {
                    _this.showAlertHelp(res.response.message);
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.addCardDataService
            .getHelp(code)
            .subscribe(observer);
    };
    AddPinToCardPage.prototype.showAlertHelp = function (message) {
        var alert = this.alertCtrl.create({
            title: '',
            cssClass: 'l2s-alert--flat l2s-alert--default',
            message: message,
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'main-button',
                    handler: function (data) {
                    }
                }, {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    AddPinToCardPage.prototype.gotoTermsPage = function (code) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                if (res && res.response && res.response.message) {
                    var url = __WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].normalizeUrl(res.response.message);
                    var browser = _this.iab.create(url, "_system", "location=true");
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.addCardDataService
            .getHelp(code)
            .subscribe(observer);
    };
    AddPinToCardPage.prototype.submitToAddCard = function (cardInfo) {
        var _this = this;
        var body = {
            "cardID": this.cardInfo.cardID,
            "csc": this.cardInfo.csc,
            "nickname": this.cardInfo.nickname,
            "pin": this.addCardForm.value.pin,
            "termsAgreed": this.addCardForm.value.termCondition,
        };
        __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                if (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body) && __WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body.cardAdded)) {
                    if (body.cardAdded) {
                        _this.showAlert(_this.cardInfo.cardID, _this.cardInfo.nickname);
                    }
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.addCardDataService
            .addCard(body)
            .subscribe(observer);
    };
    AddPinToCardPage.prototype._convertCardId = function (cardId) {
        if (!cardId) {
            return null;
        }
        var newCard = (cardId.substr(0, 4) + '-') +
            (cardId.substr(4, 4) + '-') +
            (cardId.substr(8, 4) + '-') +
            (cardId.substr(12, 4) + '-') +
            (cardId.substr(16, 3));
        return newCard;
    };
    AddPinToCardPage.prototype.gotoYourCard = function () {
        this.navCtrl.setRoot('AddCardNumberPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], AddPinToCardPage.prototype, "textInputs", void 0);
    AddPinToCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addPinToCard',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\CardManagement\addcard\addPinToCard\addPinToCard.html"*/'<ion-header>\n  <ion-navbar>\n    <!--<button class="fs-16" ion-button icon-only (click)="gotoYourCard()">-->\n      <!--<ion-icon name="ios-arrow-back"></ion-icon>-->\n    <!--</button>-->\n    <ion-title>Add a Card</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper" >\n    <ion-row>\n      <ion-col>\n        <p class="text-14">Your new card:</p>\n        <h2>{{cardInfo?.cardID}}</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="m-t-10">\n        <form name="addCardForm" [formGroup]="addCardForm">\n          <ion-row class="m-b-10" *ngIf="responseCard?.pinRequired === true">\n            <ion-col>\n              <ion-item no-padding class="item-has-addon">\n                <ion-input name="pin" type="tel" formControlName=\'pin\' placeholder="PIN"\n                           class="only-password"\n                ></ion-input>\n                <ion-icon name="help-circle" (click)="getHelpContent(\'flexewallet.add-card.form.alert.pin\')" item-right></ion-icon>\n              </ion-item>\n              <ion-item-divider ion-item light no-lines class="error"\n                                *ngIf="addCardForm.get(\'pin\').dirty && !addCardForm.get(\'pin\').valid">\n                <p>{{errorMessage(\'pin\')}}</p>\n              </ion-item-divider>\n            </ion-col>\n          </ion-row>\n          <ion-row class="m-b-20" *ngIf="responseCard?.termsRequired === true">\n            <ion-col>\n              <ion-item no-padding class="item-flex-start" >\n                <ion-label class="margin-0" text-wrap *ngFor="let tc of responseCard?.termsContent" [innerHTML]="tc" >\n                </ion-label>\n                <ion-checkbox formControlName=\'termCondition\' checked="isChecked"></ion-checkbox>\n              </ion-item>\n              <ion-item-divider ion-item light no-lines class="error"\n                                *ngIf="addCardForm.get(\'termCondition\').dirty && !addCardForm.get(\'termCondition\').valid">\n                <p>{{must_read_ts_cs}}</p>\n              </ion-item-divider>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-row class="footer-wrapper" *ngIf="responseCard?.pinRequired === true && responseCard?.termsRequired !== true">\n    <ion-col>\n      <button ion-button block large [disabled]="addCardForm.get(\'pin\').valid" (click)="submitToAddCard()">Add card</button>\n    </ion-col>\n  </ion-row>\n  <ion-row class="footer-wrapper" *ngIf="responseCard?.pinRequired === true && responseCard?.termsRequired === true">\n    <ion-col>\n      <button ion-button block large [disabled]="!addCardForm.valid" (click)="submitToAddCard()">Add card</button>\n    </ion-col>\n  </ion-row>\n  <ion-row class="footer-wrapper" *ngIf="responseCard?.pinRequired !== true && responseCard?.termsRequired === true">\n    <ion-col>\n      <button ion-button block large [disabled]="!addCardForm.get(\'termCondition\').valid" (click)="submitToAddCard()">Add card</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="AddPinToCardPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\CardManagement\addcard\addPinToCard\addPinToCard.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__addCardData_service__["a" /* AddCardDataService */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__addCardData_service__["a" /* AddCardDataService */]])
    ], AddPinToCardPage);
    return AddPinToCardPage;
}());

//# sourceMappingURL=addPinToCard.js.map

/***/ })

});
//# sourceMappingURL=8.js.map