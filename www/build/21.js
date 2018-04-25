webpackJsonp([21],{

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDiscountGiftCardPaymentCardModule", function() { return OrderDiscountGiftCardPaymentCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardPaymentCard__ = __webpack_require__(986);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderDiscountGiftCardPaymentCardModule = (function () {
    function OrderDiscountGiftCardPaymentCardModule() {
    }
    OrderDiscountGiftCardPaymentCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardPaymentCard__["a" /* OrderDiscountGiftCardPaymentCardPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardPaymentCard__["a" /* OrderDiscountGiftCardPaymentCardPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardPaymentCard__["a" /* OrderDiscountGiftCardPaymentCardPage */]]
        })
    ], OrderDiscountGiftCardPaymentCardModule);
    return OrderDiscountGiftCardPaymentCardModule;
}());

//# sourceMappingURL=orderDiscountGiftCardPaymentCard.module.js.map

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

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDiscountGiftCardPaymentCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orderDiscountGiftCardPaymentCardService_service__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_minlength_directive__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_numeric_directive__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__orderDiscountGiftCardSharingData_services__ = __webpack_require__(809);
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














var OrderDiscountGiftCardPaymentCardPage = (function () {
    function OrderDiscountGiftCardPaymentCardPage(formBuilder, routeManager, navCtrl, orderDiscountGiftCardPaymentCardService, navParams) {
        this.formBuilder = formBuilder;
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.orderDiscountGiftCardPaymentCardService = orderDiscountGiftCardPaymentCardService;
        this.navParams = navParams;
        this.tokenizedCards = [];
        this.cardTypeSelected = [];
        this.feeAmount = 0;
        this.showListCard = false;
        this.showAddNewCard = false;
        this.expireError = false;
        this.yearmin = ((new Date()).getFullYear());
        this.monthmin = ((new Date()).getMonth());
        this.subtotal = 0;
        this.percentDiscountCal = 0;
        this.dataBasketProducts = [];
        this.invalidFeeAmount = '';
        this.feeAmountError = {
            message: '',
            invalid: false
        };
        this.paymentErrorCode = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.INVALID_PAYMENT_MSG;
        this.paymentFeeErrorCode = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.INVALID_PAYMENT_FEE_MSG;
        this.order_gwp_default_section6_action_p = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section6_action_p;
        this.add_card_add_new_card = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.add_card_add_new_card;
        this.add_card_use_saved_card = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.add_card_use_saved_card;
        this.order_datacash_payment_capture_default_cardNumber_label = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_datacash_payment_capture_default_cardNumber_label;
        this.order_datacash_payment_capture_default_label_save_card = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_datacash_payment_capture_default_label_save_card;
        this.formErrors = {
            'topUpInput': '',
            'cardnumber': '',
            'monthCard': '',
            'year': '',
            'cvv': '',
            'saveCard': '',
        };
        this.formErrorsOnlyCVV = {
            'cvv': '',
        };
        this.buildForm();
        this.buildFormOnlyCVV();
    }
    OrderDiscountGiftCardPaymentCardPage.prototype.ionViewDidLeave = function () {
        this.invalidFeeAmount = '';
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.buildForm = function () {
        var _this = this;
        this.topUpForm = this.formBuilder.group({
            'topUpInput': ['', []],
            'cardnumber': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_required_directive__["a" /* requireValidator */])('cardnumber'),
                    Object(__WEBPACK_IMPORTED_MODULE_12__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(19, 'Card number'),
                    Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_numeric_directive__["a" /* numericValidator */])(),
                ]],
            'monthCard': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_required_directive__["a" /* requireValidator */])('monthCard')
                ]],
            'paymentMethodsWithFees': [0, []],
            'yearCard': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_required_directive__["a" /* requireValidator */])('yearCard')
                ]],
            'cvv': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_required_directive__["a" /* requireValidator */])('cvv'),
                    Object(__WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_minlength_directive__["b" /* minlengthValidatorCSC */])(3, 'CSC'),
                    Object(__WEBPACK_IMPORTED_MODULE_12__framework_validations_validator_maxlengthField_directive__["b" /* maxlengthFieldValidatorCSC */])(3, 'CSC'),
                    Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_numeric_directive__["b" /* numericValidatorCSC */])(),
                ]],
            'saveCard': [false, []],
        }, {
            validator: {
                updateOn: 'blur'
            }
        });
        this.topUpForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.errorMessage = function (path) {
        var control = this.topUpForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'cardnumber' || path === 'monthCard' || path === 'yearCard' || path === 'cvv') {
            if (control.hasError('required')) {
                return control.getError('required');
            }
            else {
                if (control.hasError('minlength')) {
                    return control.getError('minlength');
                }
                if (control.hasError('numericInvalid')) {
                    return control.getError('numericInvalid');
                }
                if (control.hasError('minlengthField')) {
                    return control.getError('minlengthField');
                }
                if (control.hasError('maxLengthField')) {
                    return control.getError('maxLengthField');
                }
                if (control.hasError('key')) {
                    return control.getError('key');
                }
            }
        }
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.buildFormOnlyCVV = function () {
        var _this = this;
        this.topUpFormOnlyCVV = this.formBuilder.group({
            'cvv': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_required_directive__["a" /* requireValidator */])('cvv'),
                    Object(__WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_minlength_directive__["b" /* minlengthValidatorCSC */])(3, 'CSC'),
                    Object(__WEBPACK_IMPORTED_MODULE_12__framework_validations_validator_maxlengthField_directive__["b" /* maxlengthFieldValidatorCSC */])(3, 'CSC'),
                    Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_numeric_directive__["b" /* numericValidatorCSC */])(),
                ]],
        }, {
            validator: {
                updateOn: 'blur'
            }
        });
        this.topUpFormOnlyCVV.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.errorMessageCVV = function (path) {
        var control = this.topUpFormOnlyCVV.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'cvv') {
            if (control.hasError('required')) {
                return control.getError('required');
            }
            else {
                if (control.hasError('minlength')) {
                    return control.getError('minlength');
                }
                if (control.hasError('maxLengthField')) {
                    return control.getError('maxLengthField');
                }
                if (control.hasError('minlengthField')) {
                    return control.getError('minlengthField');
                }
                if (control.hasError('key')) {
                    return control.getError('key');
                }
            }
        }
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.changeDate = function () {
        var _this = this;
        this.expireError = false;
        setTimeout(function () {
            if (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(_this.topUpForm.value.monthCard)) {
                if (parseInt(_this.topUpForm.value.yearCard) === _this.yearmin) {
                    if (parseInt(_this.topUpForm.value.monthCard.substr(2, 2)) < _this.monthmin + 1) {
                        _this.expireError = true;
                        return;
                    }
                }
            }
        }, 1000);
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.changemonth = function () {
        var _this = this;
        this.expireError = false;
        setTimeout(function () {
            if (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(_this.topUpForm.value.yearCard)) {
                if (parseInt(_this.topUpForm.value.yearCard) === _this.yearmin) {
                    if (parseInt(_this.topUpForm.value.monthCard.substr(2, 2)) < _this.monthmin + 1) {
                        _this.expireError = true;
                        return;
                    }
                }
            }
        }, 1000);
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.selectCardPayment = function (card) {
        this.cardSelected = card;
        this.feeAmount = parseFloat(this.cardSelected.feeAmount);
        this.total = parseFloat(this.dataAfterGenerateOrder.orderValue) - parseFloat(this.dataAfterGenerateOrder.totalDiscount) + this.feeAmount + this.deliveryMethod.cost;
        this.showListCard = false;
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.changeFeeCard = function () {
        this.feeAmount = parseFloat(this.topUpForm.value.paymentMethodsWithFees);
        this.total = this.dataAfterGenerateOrder.orderValue - this.dataAfterGenerateOrder.totalDiscount + this.feeAmount + this.deliveryMethod.cost;
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.updateFeeCardSelected = function () {
        if (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.cardSelected)) {
            this.feeAmount = parseFloat(this.cardSelected.feeAmount);
        }
        this.total = parseFloat(this.dataAfterGenerateOrder.orderValue) - parseFloat(this.dataAfterGenerateOrder.totalDiscount) + this.feeAmount + this.deliveryMethod.cost;
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.iconClick = function (target) {
        target.open();
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.ionViewWillEnter = function () {
        this.showAddNewCard = false;
        var dataBasket = __WEBPACK_IMPORTED_MODULE_10__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        this.dataBasketProducts = __WEBPACK_IMPORTED_MODULE_10__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().productsOnBasket;
        this.cardPrimary = dataBasket.cardInformation;
        this.freeGreetingCard = __WEBPACK_IMPORTED_MODULE_11__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().getSelectedFreeGreetingCard();
        this.exTraGreetingCard = __WEBPACK_IMPORTED_MODULE_11__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().getExtraGreetingCard();
        this.expireError = false;
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('errorObject')) {
                this.errorObject = this.navParams.get('errorObject');
            }
            if (this.navParams.get('dataBeforeGenerateOrder')) {
                this.dataBeforeGenerateOrder = this.navParams.get('dataBeforeGenerateOrder');
            }
            if (this.navParams.get('dataAfterGenerateOrder')) {
                this.dataAfterGenerateOrder = this.navParams.get('dataAfterGenerateOrder');
                var newOrderNumber = __WEBPACK_IMPORTED_MODULE_11__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().getNewOrderNumber();
                if (newOrderNumber.status) {
                    this.dataAfterGenerateOrder.orderNumber = newOrderNumber.newOrderNumber;
                }
                this.deliveryMethod = this.navParams.get('deliveryMethod');
                this.subtotal = parseFloat(this.dataAfterGenerateOrder.totalPaymentAmount) + parseFloat(this.deliveryMethod.cost);
                if (this.dataAfterGenerateOrder && this.dataAfterGenerateOrder.tokenizationEnabled) {
                    this.tokenizedCards = this.dataAfterGenerateOrder.tokenizedCards;
                    if (this.tokenizedCards.length < 1) {
                        this.showAddNewCard = true;
                    }
                    if (Array.isArray(this.tokenizedCards)) {
                        for (var i = 0; i < this.tokenizedCards.length; i++) {
                            if (this.tokenizedCards[i].cardScheme.toLowerCase() === 'mastercard') {
                            }
                        }
                        var index = this.tokenizedCards.findIndex(function (card) { return (card.default === true); });
                        if (index >= 0) {
                            this.cardSelected = this.tokenizedCards[index];
                        }
                    }
                }
                else {
                    this.showAddNewCard = true;
                }
                this.cardTypeSelected = this.dataAfterGenerateOrder.paymentMethodsWithFees;
                this.topUpForm.patchValue({ 'topUpInput': '£' + this.dataAfterGenerateOrder.orderValue + '' });
                if (this.showAddNewCard) {
                    this.feeAmount = this.topUpForm.value.paymentMethodsWithFees;
                    // this.methodCardType = this.cardTypeSelected[0].feeAmount;
                }
                else {
                    if (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.cardSelected)) {
                        this.feeAmount = this.cardSelected.feeAmount;
                    }
                }
                this.total = this.dataAfterGenerateOrder.orderValue - this.dataAfterGenerateOrder.totalDiscount + this.feeAmount + this.deliveryMethod.cost;
                this.percentDiscount = this.cardPrimary.discountPercentage;
                this.percentDiscountCal = parseFloat(this.dataAfterGenerateOrder.totalDiscount) * 100 / parseFloat(this.dataAfterGenerateOrder.orderValue);
                this.percentDiscountCal = (this.percentDiscountCal.toFixed(2)) / 1;
            }
        }
    };
    OrderDiscountGiftCardPaymentCardPage.prototype.payNow = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var body = this._buildGenerateMakeTopupRequest();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                if (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body)) {
                    var feeAmount = {
                        'feeAmount': _this.feeAmount,
                    };
                    var objectCombined = Object.assign(_this.dataAfterGenerateOrder, feeAmount);
                    _this.navCtrl.push('OrderDiscountGiftCard3DSPage', {
                        bankPayment: body,
                        dataAfterGenerateOrder: objectCombined,
                        deliveryMethod: _this.deliveryMethod,
                        total: _this.total,
                        dataBeforeGenerateOrder: _this.dataBeforeGenerateOrder
                    });
                }
                else {
                    var feeAmount = {
                        'feeAmount': _this.feeAmount,
                    };
                    var objectCombined = Object.assign(_this.dataAfterGenerateOrder, feeAmount);
                    _this.navCtrl.push('OrderDiscountGiftCardComplete', {
                        dataAfterGenerateOrder: objectCombined,
                        cardSelected: _this.cardPrimary,
                        deliveryMethod: _this.deliveryMethod,
                        total: _this.total,
                        dataBeforeGenerateOrder: _this.dataBeforeGenerateOrder
                    });
                }
            },
            error: function (error) {
                if (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error) && __WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error.data) && __WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error.data.response)) {
                    var orderNumber = error.data.response.orderNumber;
                    _this.dataAfterGenerateOrder.orderNumber = orderNumber;
                    __WEBPACK_IMPORTED_MODULE_11__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().setNewOrderNumber(orderNumber);
                    if (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error.data.errors[0])
                        && Array.isArray(error.data.errors)
                        && (error.data.errors[0].code === _this.paymentErrorCode)) {
                        _this.errorObject = error.data.errors[0];
                    }
                }
                if (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(error) && (error.code === _this.paymentFeeErrorCode)) {
                    _this.feeAmountError.message = error.message || error.code;
                    if (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(_this.feeAmountError.message)) {
                        _this.feeAmountError.invalid = true;
                    }
                }
                __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.orderDiscountGiftCardPaymentCardService
            .bankPayment(body)
            .subscribe(observer);
    };
    OrderDiscountGiftCardPaymentCardPage.prototype._buildGenerateMakeTopupRequest = function () {
        if (this.showAddNewCard) {
            var order = {
                "orderNumber": this.dataAfterGenerateOrder.orderNumber,
                "authenticationMethod": "CARD_NUMBER",
                "authenticationValue": this.topUpForm.value.cardnumber,
                "cv2": this.topUpForm.value.cvv,
                "expiryDate": this.topUpForm.value.monthCard.substr(2) + "/" + this.topUpForm.value.yearCard.substr(2),
                "paymentAmount": parseFloat(this.subtotal.toFixed(2)),
                "paymentMethodFee": parseFloat(this.topUpForm.value.paymentMethodsWithFees),
                "saveCard": this.topUpForm.value.saveCard
            };
            this.feeAmount = parseFloat(this.topUpForm.value.paymentMethodsWithFees);
            return order;
        }
        else {
            var order = {
                "orderNumber": this.dataAfterGenerateOrder.orderNumber,
                "authenticationMethod": "TOKEN",
                "authenticationValue": this.cardSelected.token,
                "cv2": this.topUpFormOnlyCVV.value.cvv,
                "expiryDate": this.cardSelected.expiryDate,
                "paymentAmount": parseFloat(this.subtotal.toFixed(2)),
                "paymentMethodFee": this.cardSelected.feeAmount,
            };
            this.feeAmount = this.cardSelected.feeAmount;
            return order;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], OrderDiscountGiftCardPaymentCardPage.prototype, "textInputs", void 0);
    OrderDiscountGiftCardPaymentCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderDiscountGiftCardPaymentCard',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCardPaymentCard\orderDiscountGiftCardPaymentCard.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            payment\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class="content-wrapper">\n\n        <ion-row class="payment-detail--wrapper">\n            <ion-col>\n                <p class="tittle--medium tittle--medium-decorate ">Payment details</p>\n                <div>\n                    <p class="text-content-small">Payment methods we accept</p>\n                    <img src="assets/images/accepted-card-types.png"/>\n                </div>\n                <div *ngIf="cardTypeSelected.length > 0">\n                    <p class="text-content-small color">Debit Card 0% fee</p>\n                    <p class="text-content-small color p-b-8">Credit Card 1% fee (&pound;1.00 minimum)</p>\n                </div>\n\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="add-card p-t-10" *ngIf="errorObject?.code === paymentErrorCode">\n            <ion-item-divider ion-item light no-lines class="ptt-error-msg error">\n                <p [innerHTML]="errorObject?.message">\n                </p>\n            </ion-item-divider>\n        </ion-row>\n\n\n        <ion-row class="add-card">\n            <ion-item-group *ngIf="!showAddNewCard ">\n                <ion-item>\n                    <p item-end class="text-link-item add-new openSans-bold"\n                       (click)="showAddNewCard = !showAddNewCard; showListCard=false; changeFeeCard()">{{add_card_add_new_card}}</p>\n                </ion-item>\n            </ion-item-group>\n            <ion-item-group *ngIf="showAddNewCard && (tokenizedCards.length > 0)">\n                <ion-item>\n                    <p item-end\n                       class="text-link-item openSans-bold add-new"\n                       (click)="showAddNewCard = !showAddNewCard;  showListCard=false; updateFeeCardSelected()">{{add_card_use_saved_card}}</p>\n                </ion-item>\n            </ion-item-group>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col>\n                <div class="add-new-card" *ngIf="showAddNewCard">\n                    <form [formGroup]="topUpForm" class="form-card--wrapper">\n\n                        <ion-row>\n                            <!--<p class="p-b-5"><span item-start class="no-wrap-text">Credit / Debit card number</span></p>-->\n                            <ion-item>\n                                <ion-input name="cardnumber" type="tel"\n                                           placeholder="Credit / Debit card number"\n                                           formControlName="cardnumber"></ion-input>\n                            </ion-item>\n                            <ion-item-divider ion-item light no-lines class="error"\n                                              *ngIf="topUpForm.get(\'cardnumber\').dirty && !topUpForm.get(\'cardnumber\').valid">\n                                <p>{{errorMessage(\'cardnumber\')}}</p>\n                            </ion-item-divider>\n\n                        </ion-row>\n\n                        <ion-row class="expiry-date--wrapper p-t-15">\n                            <!--<p class="p-b-5"><span item-start class="no-wrap-text">Expiry</span></p>-->\n                            <ion-col class="m-r-5">\n                                <ion-datetime (ionChange)="changemonth()" class="datetime-month"\n                                              displayFormat="YY"\n                                              min="2001" max="2012"\n                                              #month\n                                              formControlName="monthCard"\n                                              placeholder="Month"></ion-datetime>\n                                <ion-icon (click)="iconClick(month)" name="arrow-down" item-right primary class="icon-down"></ion-icon>\n                                <ion-item-divider ion-item light no-lines class="error"\n                                                  *ngIf="topUpForm.get(\'monthCard\').dirty && !topUpForm.get(\'monthCard\').valid">\n                                    <p>{{errorMessage(\'monthCard\')}}</p>\n                                </ion-item-divider>\n                            </ion-col>\n                            <ion-col class="m-l-5">\n                                <ion-datetime (ionChange)="changeDate()" class="datetime-year" #year\n                                              displayFormat="YYYY"\n                                              pickerFormat="YYYY" min="{{yearmin}}" max="2030"\n                                              formControlName="yearCard" placeholder="Year"></ion-datetime>\n                                <ion-icon (click)="iconClick(year)" name="arrow-down" item-right primary class="icon-down"></ion-icon>\n                                <ion-item-divider ion-item light no-lines class="error"\n                                                  *ngIf="topUpForm.get(\'yearCard\').dirty && !topUpForm.get(\'yearCard\').valid">\n                                    <p>{{errorMessage(\'yearCard\')}}</p>\n                                </ion-item-divider>\n                            </ion-col>\n                            <ion-item-divider ion-item light no-lines class="error" *ngIf="expireError">\n                                <p class="p-l-15">{{order_gwp_default_section6_action_p}}</p>\n                            </ion-item-divider>\n\n                        </ion-row>\n\n                        <ion-row class="m-b-10 p-t-15 input-csc-wrapper position-relative">\n                                <ion-input class="cvv-input only-password" name="cvv" type="tel"\n                                           placeholder="Security code (3 digit number)"\n                                           formControlName="cvv"></ion-input>\n                            </ion-item>\n                            <img class="csc " src="assets/images/card-csc-icon.png" height="34" width="51"/>\n                            <ion-item-divider ion-item light no-lines class="error"\n                                              *ngIf="topUpForm.get(\'cvv\').dirty && !topUpForm.get(\'cvv\').valid">\n                                <p>{{errorMessage(\'cvv\')}}</p>\n                            </ion-item-divider>\n\n                        </ion-row>\n\n                        <ion-row class="list-radio-checkbox">\n                            <ion-list radio-group formControlName="paymentMethodsWithFees"\n                                      (ionChange)="changeFeeCard()"\n                                      class="m-b-1">\n                                <ion-item-divider ion-item light no-lines class="error error-html"\n                                                  *ngIf="invalidFeeAmount.length > 0">\n                                    <p [innerHTML]=invalidFeeAmount></p>\n                                </ion-item-divider>\n                                <ion-item *ngFor="let item of cardTypeSelected; let i = index">\n                                    <ion-label>\n                                        Pay by {{item?.displayName}} - Total\n                                        {{dataAfterGenerateOrder?.totalPaymentAmount\n                                        + item.feeAmount + deliveryMethod?.cost | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n                                    </ion-label>\n                                    <ion-radio item-left value="{{item?.feeAmount}}"\n                                               [checked]="i==1"></ion-radio>\n                                </ion-item>\n\n                            </ion-list>\n                        </ion-row>\n\n\n                        <ion-item-group>\n                            <ion-item *ngIf="showAddNewCard">\n                                <ion-label>{{add_card_use_saved_card}}</ion-label>\n                                <ion-checkbox formControlName="saveCard"></ion-checkbox>\n                            </ion-item>\n                        </ion-item-group>\n\n\n                    </form>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <div class="list-cards" *ngIf="!showAddNewCard && tokenizedCards.length> 0">\n                    <div class="card-selected" [ngClass]="{\'open-list-card\': showListCard}">\n                        <ion-item>\n                            <img src="assets/images/{{cardSelected?.cardScheme}}.png" height="31" width="49"/>\n                            <p text-left class="text-uppercase openSans-bold">{{cardSelected?.cardScheme}}</p>\n                            <p text-left class="text-info">\n                                Ends {{cardSelected?.panLast4}}\n                                <span class="min-width-80">\n                 - Exp {{cardSelected?.expiryDate}}\n                </span>\n                                <span class="min-width-80">\n                  - Total: {{dataAfterGenerateOrder?.totalPaymentAmount + cardSelected?.feeAmount | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n                </span>\n                            </p>\n                            <ion-icon item-right primary (click)="showListCard = !showListCard">\n                                <i class="fa fa-angle-down" aria-hidden="true"></i>\n                            </ion-icon>\n                        </ion-item>\n                    </div>\n                    <ul class="card-dropdown-list" *ngIf="showListCard">\n                        <li *ngFor="let cardItem of tokenizedCards" (click)="selectCardPayment(cardItem);">\n                            <ion-item *ngIf="cardItem.token !== cardSelected.token">\n                                <img src="assets/images/{{cardItem?.cardScheme}}.png" height="31" width="49"/>\n                                <p class="text-uppercase openSans-bold" text-left>{{cardItem?.cardScheme}}</p>\n                                <p class="text-info" text-left>\n                                    Ends {{ cardItem?.panLast4 }}\n                                    <span class="min-width-80">\n                    - Exp {{cardItem?.expiryDate}}\n                  </span>\n                                    <span class="min-width-80">\n                   - Total: {{dataAfterGenerateOrder?.totalPaymentAmount + cardItem?.feeAmount | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</span>\n\n                                </p>\n                            </ion-item>\n                        </li>\n                    </ul>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <form [formGroup]="topUpFormOnlyCVV"\n                      class="form-card--wrapper p-b-20 p-t-15 input-csc-wrapper position-relative"\n                      *ngIf="!showAddNewCard && tokenizedCards.length> 0">\n                    <ion-item>\n                        <ion-input class="cvv-input only-password" name="cvv" placeholder="Security code (3 digit number)"\n                                   type="tel"\n                                   formControlName="cvv"></ion-input>\n                    </ion-item>\n                    <img class="csc " src="assets/images/card-csc-icon.png" height="34" width="51"/>\n\n                    <ion-item-divider ion-item light no-lines class="error"\n                                      *ngIf="topUpFormOnlyCVV.get(\'cvv\').dirty && !topUpFormOnlyCVV.get(\'cvv\').valid">\n                        <p>{{errorMessageCVV(\'cvv\')}}</p>\n                    </ion-item-divider>\n                </form>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row class="total m-b-20">\n            <p class="p-t-5 p-b-5">\n                <span item-start class="openSans-bold">Total payable</span>\n                <span float-right class="openSans-bold">{{dataAfterGenerateOrder?.totalPaymentAmount + deliveryMethod?.cost | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</span>\n            </p>\n            <p class="p-t-5 p-b-5 text-12" *ngIf="feeAmount > 0">\n                <span item-start class="text-12">Card fee </span>\n                <span float-right class="text-12">{{feeAmount | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</span>\n            </p>\n        </ion-row>\n\n    </ion-grid>\n    <ion-row class=" footer-wrapper" *ngIf="showAddNewCard">\n        <ion-col>\n            <button ion-button large block [disabled]="topUpForm.valid === false  || expireError === true"\n                    (click)="payNow()">Pay Now\n            </button>\n        </ion-col>\n    </ion-row>\n    <ion-row class=" footer-wrapper" *ngIf="!showAddNewCard">\n        <ion-col>\n            <button ion-button large block [disabled]="!topUpFormOnlyCVV.valid && !showAddNewCard" (click)="payNow()">\n                Pay Now\n            </button>\n        </ion-col>\n    </ion-row>\n    <ion-row class="summary--wrapper">\n        <ion-col>\n            <p class="tittle--medium tittle--medium-decorate ">Order Summary</p>\n            <table>\n                <thead>\n                <th>\n                    Product\n                </th>\n                <th>Quantity</th>\n                <th>Total</th>\n                </thead>\n                <tbody>\n                <tr *ngFor="let product of dataAfterGenerateOrder?.orderlines">\n                    <td>\n                        <p>{{product?.productDescription}}</p>\n                        <p class="active" *ngIf="product?.discountPercentage > 0">{{product?.discountPercentage}}%\n                            Discount</p>\n                    </td>\n                    <td>\n                        <p>\n                            {{product?.quantity}}\n                        </p>\n                    </td>\n                    <td>\n                        <p>\n                            {{(product?.paymentAmount) | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n                        </p>\n                        <p class="active" *ngIf="product?.discountAmount > 0">-{{product?.discountAmount |\n                            currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n                    </td>\n                </tr>\n\n                <tr *ngIf="dataAfterGenerateOrder?.totalDiscount > 0">\n                    <td colspan="2">\n                        <p>\n                            Total Discount\n                        </p>\n                    </td>\n                    <td>\n                        <p>\n                            -{{dataAfterGenerateOrder?.totalDiscount | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n                        </p>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan="2">\n                        <p>\n                            Delivery: {{deliveryMethod?.title}}\n\n                        </p>\n                    </td>\n                    <td>\n                        <p>\n                            {{deliveryMethod?.cost | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n                        </p>\n                    </td>\n                </tr>\n                </tbody>\n                <tfoot>\n                <tr>\n                    <td colspan="2">\n                        <p class="text-bold">\n                            Sub Total\n                        </p>\n                    </td>\n                    <td>\n                        <p class="text-bold">\n                            {{dataAfterGenerateOrder?.totalPaymentAmount + deliveryMethod?.cost |\n                            currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n                        </p>\n                    </td>\n                </tr>\n                </tfoot>\n            </table>\n\n        </ion-col>\n    </ion-row>\n</ion-content>\n\n\n<ion-row style="display: none;"\n         (click)="navCtrl.pop()"\n         id="OrderDiscountGiftCardPaymentCardPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCardPaymentCard\orderDiscountGiftCardPaymentCard.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__orderDiscountGiftCardPaymentCardService_service__["a" /* OrderDiscountGiftCardPaymentCardService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__orderDiscountGiftCardPaymentCardService_service__["a" /* OrderDiscountGiftCardPaymentCardService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], OrderDiscountGiftCardPaymentCardPage);
    return OrderDiscountGiftCardPaymentCardPage;
}());

//# sourceMappingURL=orderDiscountGiftCardPaymentCard.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDiscountGiftCardPaymentCardService; });
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


var OrderDiscountGiftCardPaymentCardService = (function () {
    function OrderDiscountGiftCardPaymentCardService(http) {
        this.http = http;
    }
    OrderDiscountGiftCardPaymentCardService.prototype.generateOrder = function (orderInfor) {
        return this.http.post("order", orderInfor);
    };
    OrderDiscountGiftCardPaymentCardService.prototype.bankPayment = function (orderInfor) {
        return this.http.post("order/payment/card", orderInfor);
    };
    OrderDiscountGiftCardPaymentCardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], OrderDiscountGiftCardPaymentCardService);
    return OrderDiscountGiftCardPaymentCardService;
}());

//# sourceMappingURL=orderDiscountGiftCardPaymentCardService.service.js.map

/***/ })

});
//# sourceMappingURL=21.js.map