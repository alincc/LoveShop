webpackJsonp([14],{

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBalanceStep2PageModule", function() { return CheckBalanceStep2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkBalanceStep2__ = __webpack_require__(953);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckBalanceStep2PageModule = (function () {
    function CheckBalanceStep2PageModule() {
    }
    CheckBalanceStep2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__checkBalanceStep2__["a" /* CheckBalanceStep2Page */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkBalanceStep2__["a" /* CheckBalanceStep2Page */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__checkBalanceStep2__["a" /* CheckBalanceStep2Page */]]
        })
    ], CheckBalanceStep2PageModule);
    return CheckBalanceStep2PageModule;
}());

//# sourceMappingURL=checkBalanceStep2.module.js.map

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

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardBalanceSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__ = __webpack_require__(44);


var CardBalanceSharingDataService = (function () {
    function CardBalanceSharingDataService() {
        this.defaultMasterData = {};
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](this.currentMasterData);
        if (CardBalanceSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use CardBalanceSharingDataService.getInstance() instead of new.');
        }
        CardBalanceSharingDataService._instance = this;
    }
    Object.defineProperty(CardBalanceSharingDataService.prototype, "state$", {
        get: function () {
            return this._state$;
        },
        enumerable: true,
        configurable: true
    });
    CardBalanceSharingDataService.prototype.resetState = function () {
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$.next(this.currentMasterData);
    };
    CardBalanceSharingDataService.prototype.saveStep1Screen = function (step1Model) {
        this.currentMasterData.step1Model = step1Model;
    };
    CardBalanceSharingDataService.prototype.saveStep2Screen = function (step2Model) {
        this.currentMasterData.step2Model = step2Model;
    };
    CardBalanceSharingDataService.prototype.getCardNumberAtStep1 = function () {
        return this.currentMasterData.step1Model.cardNumber;
    };
    CardBalanceSharingDataService.prototype.getCardData = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.currentMasterData.step2Model)) {
            var cardModel = {
                // step 1
                cardID: this.currentMasterData.step1Model.cardNumber,
                // step 2
                csc: this.currentMasterData.step2Model.securityCode
            };
            return cardModel;
        }
        else {
            var cardModel = {
                cardID: this.currentMasterData.step1Model.cardNumber,
            };
            return cardModel;
        }
    };
    CardBalanceSharingDataService.prototype.getCardDataOnlyCardNumber = function () {
        var cardModel = {
            // step 1
            cardNumber: this.currentMasterData.step1Model.cardNumber,
        };
        return cardModel;
    };
    CardBalanceSharingDataService.getInstance = function () {
        return CardBalanceSharingDataService._instance;
    };
    // tslint:disable-next-line:member-ordering
    CardBalanceSharingDataService._instance = new CardBalanceSharingDataService();
    return CardBalanceSharingDataService;
}());

//# sourceMappingURL=cardBalanceSharingData.service.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardBalanceDataService; });
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


var CardBalanceDataService = (function () {
    function CardBalanceDataService(http) {
        this.http = http;
    }
    CardBalanceDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], CardBalanceDataService);
    return CardBalanceDataService;
}());

//# sourceMappingURL=cardBalanceData.service.js.map

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBalanceStep2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cardBalanceData_service__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cardBalanceSharingData_service__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkBalanceStep2_service__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_numeric_directive__ = __webpack_require__(370);
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














var CheckBalanceStep2Page = (function () {
    function CheckBalanceStep2Page(formBuilder, routeManager, cardBalanceDataService, changeBalanceStep2Service, alertCtrl, navCtrl, navParams) {
        this.formBuilder = formBuilder;
        this.routeManager = routeManager;
        this.cardBalanceDataService = cardBalanceDataService;
        this.changeBalanceStep2Service = changeBalanceStep2Service;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardNumberAtStep1 = "";
        this.messageContent = "";
        this.code = 'resend-link-now';
        this.formErrors = {
            'cardNumber': '',
            'securityCode': ''
        };
        this.buildForm();
    }
    CheckBalanceStep2Page.prototype.buildForm = function () {
        var _this = this;
        this.checkBalanceForm = this.formBuilder.group({
            'cardNumber': [this.cardNumberAtStep1, [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('cardNumber'),
                    Object(__WEBPACK_IMPORTED_MODULE_12__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(19, 'Card or e-code number'),
                ]],
            'securityCode': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('csc'),
                    Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_minlength_directive__["b" /* minlengthValidatorCSC */])(3, 'CSC'),
                    Object(__WEBPACK_IMPORTED_MODULE_12__framework_validations_validator_maxlengthField_directive__["b" /* maxlengthFieldValidatorCSC */])(3, 'CSC'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_numeric_directive__["b" /* numericValidatorCSC */])(),
                ]]
        }, {
            validator: {
                updateOn: 'blur'
            }
        });
        this.checkBalanceForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    CheckBalanceStep2Page.prototype.getHelpContent = function (code) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
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
                __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.changeBalanceStep2Service
            .getHelpCSC(code)
            .subscribe(observer);
    };
    CheckBalanceStep2Page.prototype.showAlertHelp = function (message) {
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
    CheckBalanceStep2Page.prototype.ionViewWillEnter = function () {
        if (this.navParams.get('cardNumber')) {
            this.cardNumberOld = this.navParams.get('cardNumber');
            this.checkBalanceForm.patchValue({ 'cardNumber': this.cardNumberOld + '' });
        }
    };
    CheckBalanceStep2Page.prototype.detectChangeCard = function () {
        var _this = this;
        if (this.checkBalanceForm.valid) {
            var bodyPost = {
                "cardID": this.checkBalanceForm.value.cardNumber
            };
            __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                    if (!res.ok) {
                        return;
                    }
                    var body = res.response;
                    _this.checkNextStepNavigate(body);
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.changeBalanceStep2Service
                .retrieveCardType(bodyPost)
                .subscribe(observer);
        }
    };
    CheckBalanceStep2Page.prototype.checkNextStepNavigate = function (cardInformation) {
        if (__WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInformation) && cardInformation.cardType === 'FLEXECODE_2.0') {
            this.navCtrl.setRoot('CheckBalanceStep1Page', { cardNumber: this.checkBalanceForm.value.cardNumber });
        }
        else {
            var body = {
                cardID: this.checkBalanceForm.value.cardNumber,
                csc: this.checkBalanceForm.value.securityCode
            };
            this.getBalanceData(body);
        }
    };
    CheckBalanceStep2Page.prototype.submitToCheckCardBalance = function () {
        if (this.cardNumberOld !== this.checkBalanceForm.value.cardNumber) {
            this.detectChangeCard();
            return;
        }
        if (this.checkBalanceForm.valid) {
            var body = {
                cardID: this.checkBalanceForm.value.cardNumber,
                csc: this.checkBalanceForm.value.securityCode
            };
            this.getBalanceData(body);
        }
    };
    CheckBalanceStep2Page.prototype.getBalanceData = function (cardInfor) {
        var _this = this;
        if (this.checkBalanceForm.valid) {
            __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                    if (!res.ok) {
                        return;
                    }
                    var balanceValue = res.response;
                    _this.navCtrl
                        .setRoot('CheckBalanceStep3Page', { 'balanceValue': balanceValue, 'cardNumber': _this.checkBalanceForm.value.cardNumber });
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_6__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.changeBalanceStep2Service
                .getBalanceCard(cardInfor)
                .subscribe(observer);
        }
    };
    CheckBalanceStep2Page.prototype.errorMessage = function (path) {
        var control = this.checkBalanceForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'cardNumber' || path === 'securityCode') {
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
    CheckBalanceStep2Page.prototype.gotoStep1 = function () {
        this.navCtrl.setRoot('CheckBalanceStep1Page', { 'cardNumber': this.checkBalanceForm.value.cardNumber });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], CheckBalanceStep2Page.prototype, "textInputs", void 0);
    CheckBalanceStep2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkBalanceStep2',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\CardManagement\checkBalance\checkBalanceStep2\checkBalanceStep2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button  ion-button icon-only (click)="gotoStep1()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Check my Balance\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="form-balance--container">\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <ion-col>\n        <form [formGroup]="checkBalanceForm">\n\n          <ion-row margin-bottom>\n            <ion-col>\n              <ion-item no-padding>\n                <ion-input name="cardNumber" type="text"  formControlName="cardNumber"  placeholder="Card or e-code number"></ion-input>\n              </ion-item>\n              <ion-item-divider ion-item light no-lines class="error"\n                                *ngIf="checkBalanceForm.get(\'cardNumber\').dirty && !checkBalanceForm.get(\'cardNumber\').valid">\n                <p>{{errorMessage(\'cardNumber\')}}</p>\n              </ion-item-divider>\n            </ion-col>\n          </ion-row>\n\n          <ion-row margin-bottom>\n            <ion-col>\n              <ion-item no-padding class="item-has-addon">\n                <ion-input name="securityCode" type="tel" formControlName="securityCode"\n                           placeholder="Please enter your security code"\n                           class="only-password"\n                ></ion-input>\n                <ion-icon name="help-circle" item-right (click)="getHelpContent(\'flexewallet.add-card.form.alert.csc\')"></ion-icon>\n              </ion-item>\n              <div class="m-r-38">\n                <ion-item-divider ion-item light no-lines class="error"\n                                  *ngIf="checkBalanceForm.get(\'securityCode\').dirty && !checkBalanceForm.get(\'securityCode\').valid">\n                  <p>{{errorMessage(\'securityCode\')}}</p>\n                </ion-item-divider>\n              </div>\n\n            </ion-col>\n          </ion-row>\n\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button block large [disabled]="!checkBalanceForm.valid" (click)="submitToCheckCardBalance()">Submit</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\CardManagement\checkBalance\checkBalanceStep2\checkBalanceStep2.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__cardBalanceData_service__["a" /* CardBalanceDataService */],
                __WEBPACK_IMPORTED_MODULE_5__cardBalanceSharingData_service__["a" /* CardBalanceSharingDataService */],
                __WEBPACK_IMPORTED_MODULE_8__checkBalanceStep2_service__["a" /* ChangeBalanceStep2Service */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_4__cardBalanceData_service__["a" /* CardBalanceDataService */],
            __WEBPACK_IMPORTED_MODULE_8__checkBalanceStep2_service__["a" /* ChangeBalanceStep2Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CheckBalanceStep2Page);
    return CheckBalanceStep2Page;
}());

//# sourceMappingURL=checkBalanceStep2.js.map

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeBalanceStep2Service; });
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


var ChangeBalanceStep2Service = (function () {
    function ChangeBalanceStep2Service(http) {
        this.http = http;
    }
    ChangeBalanceStep2Service.prototype.retrieveCardType = function (cardId) {
        return this.http.postwithoutAuthorization("card/type", cardId);
    };
    ChangeBalanceStep2Service.prototype.getHelpCSC = function (code) {
        return this.http.get("cms/message/code=" + code);
    };
    ChangeBalanceStep2Service.prototype.getBalanceCard = function (cardInformation) {
        return this.http.postwithoutAuthorWithoutRequestType("card/balance-status", cardInformation);
    };
    ChangeBalanceStep2Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], ChangeBalanceStep2Service);
    return ChangeBalanceStep2Service;
}());

//# sourceMappingURL=checkBalanceStep2.service.js.map

/***/ })

});
//# sourceMappingURL=14.js.map