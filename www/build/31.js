webpackJsonp([31],{

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderEcodeStep1Module", function() { return orderEcodeStep1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderECodeStep1__ = __webpack_require__(992);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var orderEcodeStep1Module = (function () {
    function orderEcodeStep1Module() {
    }
    orderEcodeStep1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderECodeStep1__["a" /* OrderEcodeStep1 */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderECodeStep1__["a" /* OrderEcodeStep1 */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderECodeStep1__["a" /* OrderEcodeStep1 */]]
        })
    ], orderEcodeStep1Module);
    return orderEcodeStep1Module;
}());

//# sourceMappingURL=orderECodeStep1.module.js.map

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

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderEcodeStep1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__orderEcodeStep1_service__ = __webpack_require__(993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_numeric_directive__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_minlength_directive__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_maxlengthField_directive__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var OrderEcodeStep1 = (function () {
    function OrderEcodeStep1(routeManager, formBuilder, navCtrl, orderEcodeStep1Service) {
        this.routeManager = routeManager;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.orderEcodeStep1Service = orderEcodeStep1Service;
        this.totalPrice = 0;
        this.totalFee = 0;
        this.enter_csc = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.enter_csc;
        this.formErrors = {
            'cvv': ''
        };
        this.buildForm();
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    OrderEcodeStep1.prototype.buildForm = function () {
        var _this = this;
        this.confirmOrderForm = this.formBuilder.group({
            'cvv': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_required_directive__["a" /* requireValidator */])('cvv'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_minlength_directive__["b" /* minlengthValidatorCSC */])(3, 'CSC'),
                    Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_maxlengthField_directive__["b" /* maxlengthFieldValidatorCSC */])(3, 'CSC'),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_numeric_directive__["b" /* numericValidatorCSC */])(),
                ]],
        }, {
            validator: {
                updateOn: 'blur'
            }
        });
        this.confirmOrderForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    OrderEcodeStep1.prototype.ionViewWillEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            var dataBasket = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
            this.allProductsOnBasket = dataBasket.productsOnBasket;
            this.primaryCard = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getPrimaryCard();
            this.orderGenerateEcode = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataAfterGenerateOrder();
            if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.primaryCard)) {
                if (this.primaryCard.cardType === 'FLEXECODE_2.0') {
                    var cardId = this.primaryCard.cardId;
                    this.endingCard = cardId.substr(cardId.length - 5);
                }
                else {
                    var cardNumber = this.primaryCard.cardNumber;
                    this.endingCard = cardNumber.substr(cardNumber.length - 4);
                }
            }
            if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.orderGenerateEcode)) {
                this.calculateTotal(this.orderGenerateEcode.orderlines);
            }
            this.updateOrderDelivery();
        }
    };
    OrderEcodeStep1.prototype.calculateTotal = function (products) {
        this.totalPrice = 0;
        this.totalFee = 0;
        if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(products) && products.length > 0) {
            for (var i = 0; i < products.length; i++) {
                this.totalFee += products[i].feeAmount;
                this.totalPrice += ((products[i].unitPrice) * (products[i].quantity)) + this.totalFee;
            }
        }
    };
    OrderEcodeStep1.prototype.updateOrderDelivery = function () {
        if (this._updateDeliveryMethod) {
            this._updateDeliveryMethod.unsubscribe();
        }
        var orderData = this._buildUpdateDeliveryMethodRequest();
        __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this._updateDeliveryMethod = this.orderEcodeStep1Service.updateDeliveryMethod(orderData)
            .subscribe(function (res) {
            if (!res.ok) {
                return;
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    OrderEcodeStep1.prototype.confirmOrder = function () {
        var _this = this;
        this._unsubscribe();
        var orderData = this._buildConfirmOrder();
        __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this._confirmOrder = this.orderEcodeStep1Service.confirmOrder(orderData)
            .subscribe(function (res) {
            if (!res.ok) {
                return;
            }
            _this.navCtrl.push('OrderEcodeStep2');
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    OrderEcodeStep1.prototype._buildUpdateDeliveryMethodRequest = function () {
        var orderSummary = {
            "propositionId": this.primaryCard.propositionId || '',
            "orderNumber": this.orderGenerateEcode.orderNumber || '',
            "title": this.orderGenerateEcode.title || '',
            "firstName": this.orderGenerateEcode.firstName || '',
            "lastName": this.orderGenerateEcode.lastName || '',
            "addressLine1": this.orderGenerateEcode.addressLine1 || '',
            "addressLine2": this.orderGenerateEcode.addressLine2 || '',
            "town": this.orderGenerateEcode.town || '',
            "county": this.orderGenerateEcode.county || '',
            "postcode": this.orderGenerateEcode.postcode || '',
            "country": this.orderGenerateEcode.country || '',
            "deliveryMethodCode": this.orderGenerateEcode.availableDeliveryMethods[0].code || '',
        };
        return orderSummary;
    };
    OrderEcodeStep1.prototype._buildConfirmOrder = function () {
        var orderSummary = {
            'orderNumber': this.orderGenerateEcode.orderNumber,
            'paymentCards': []
        };
        var cardItem = {
            'cardNumber': this.primaryCard.cardNumber,
            'eCode': this.primaryCard.cardId,
            'csc': this.confirmOrderForm.value.cvv,
            'expiryDate': this.primaryCard.expiryDate,
            'amount': this.orderGenerateEcode.totalPaymentAmount
        };
        orderSummary.paymentCards.push(cardItem);
        return orderSummary;
    };
    OrderEcodeStep1.prototype._unsubscribe = function () {
        if (this._confirmOrder) {
            this._confirmOrder.unsubscribe();
        }
    };
    OrderEcodeStep1.prototype.errorMessage = function (path) {
        var control = this.confirmOrderForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'cvv') {
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
                if (control.hasError('minlengthField')) {
                    return control.getError('minlengthField');
                }
                if (control.hasError('key')) {
                    return control.getError('key');
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], OrderEcodeStep1.prototype, "textInputs", void 0);
    OrderEcodeStep1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderEcodeStep1',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderECode\orderECodeStep1\orderEcodeStep1.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            payment\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row padding>\n            <ion-col>\n                <ion-row>\n                    <p class="payment-title" no-margin>Payment method</p>\n                </ion-row>\n                <ion-row>\n                    <p class="text-14" no-margin *ngIf="(primaryCard?.cardType) !== \'FLEXECODE_2.0\'">Your flexecash card ending\n                        {{endingCard}}</p>\n                    <p class="text-14" no-margin *ngIf="(primaryCard?.cardType) === \'FLEXECODE_2.0\'">Your flexecode card ending\n                        {{endingCard}}</p>\n                </ion-row>\n                <ion-card>\n                    <ion-row class="card-panel">\n                        <div class="img-wrapper">\n                            <img *ngIf="primaryCard?.cardLogoPath" [src]="baseResourceUrl + primaryCard?.cardLogoPath"/>\n                        </div>\n                        <div padding-left class="card-panel--right">\n                            <p no-margin>{{primaryCard?.nickname}}</p>\n                            <p no-margin>\n                                <span>Ends in</span><span>&nbsp;{{endingCard}} | </span>\n                                <span>Expires</span><span>&nbsp;{{primaryCard?.expiryDate}}</span>\n                            </p>\n                            <p no-margin class="openSans-bold">\n                                    Value on card:\n                                    <span float-right class="openSans-bold">{{this.primaryCard?.balance  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</span>\n                            </p>\n                        </div>\n                    </ion-row>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="card-security">\n            <ion-col>\n                <ion-row class="p-t-5" *ngIf="(primaryCard?.cardType) !== \'FLEXECODE_2.0\'">\n                    <ion-col>\n                        <p no-margin class="p-b-5 title">{{enter_csc}}</p>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row *ngIf="(primaryCard?.cardType) !== \'FLEXECODE_2.0\'">\n                    <ion-col col-8>\n                        <form [formGroup]="confirmOrderForm">\n                            <ion-input type="tel" placeholder="Card Security Code" formControlName="cvv"\n                                       class="input--border only-password"></ion-input>\n                            <ion-item-divider ion-item light no-lines class="error"\n                                              *ngIf="confirmOrderForm.get(\'cvv\').dirty && !confirmOrderForm.get(\'cvv\').valid">\n                                <p>{{errorMessage(\'cvv\')}}</p>\n                            </ion-item-divider>\n                        </form>\n                    </ion-col>\n                    <ion-col col-4 padding-left>\n                        <img src="assets/images/card-csc-icon.png" height="40"/>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col padding-vertical>\n                        <p no-margin class="text-14" *ngIf="this.orderGenerateEcode?.deliveryEmailAddress">E-codes\n                            will be emailed to:</p>\n                        <p no-margin class="text-14">{{this.orderGenerateEcode?.deliveryEmailAddress}}</p>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <button [disabled]="!confirmOrderForm.valid && (primaryCard?.cardType) !== \'FLEXECODE_2.0\'"\n                            ion-button block\n                            large color="primary" (click)="confirmOrder()">Pay Now\n                    </button>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n\n        <ion-card>\n            <ion-row padding-horizontal class="p-t-25">\n                <h6 class="order-list-title">Order details</h6>\n            </ion-row>\n            <ion-row padding-horizontal class="p-b-5">\n                <ion-col col-9></ion-col>\n                <ion-col col-3>\n                <p class="order-list-price">Price</p>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n        <ion-row>\n            <ion-col col-12>\n                <ion-card class="card-item--wrapper">\n                    <ion-row padding-horizontal class="product-item" *ngFor="let product of orderGenerateEcode?.orderlines">\n                        <ion-col col-9 padding-right align-self-center *ngIf="product?.imgUrl" class="card-left-panel">\n                            <img *ngIf="product?.imgUrl"\n                                 [src]="baseResourceUrl + product?.imgUrl"/>\n                            <div class="product-info" padding-left>\n                                <p class="">{{product?.productDescription}}</p>\n                                <p class="">Quantity:<span>&nbsp;{{product?.quantity}}</span></p>\n                            </div>\n                        </ion-col>\n                        <ion-col col-3 align-self-top class="" *ngIf="product?.imgUrl" class="card-right-panel">\n                           <p class="text-14">\n                               {{(product?.paymentAmount) | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n                           </p>\n\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n\n\n\n\n        <ion-row padding-horizontal *ngFor="let product of orderGenerateEcode?.orderlines">\n            <ion-col col-9 class="text-10" *ngIf="!product?.imgUrl">\n                {{product?.productDescription}}\n            </ion-col>\n            <ion-col col-3 align-self-top class="text-10" *ngIf="!product?.imgUrl">\n                {{(product?.paymentAmount) | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row padding-horizontal class="p-t-5 p-b-15">\n            <ion-col col-9 class="">\n                <p  class="text-14" no-margin>Total</p>\n            </ion-col>\n            <ion-col col-3 class="text-14">\n                {{orderGenerateEcode?.totalPaymentAmount | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="OrderEcodeStep1-back-button">\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderECode\orderECodeStep1\orderEcodeStep1.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__orderEcodeStep1_service__["a" /* OrderEcodeStep1Service */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__orderEcodeStep1_service__["a" /* OrderEcodeStep1Service */]])
    ], OrderEcodeStep1);
    return OrderEcodeStep1;
}());

//# sourceMappingURL=orderECodeStep1.js.map

/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderEcodeStep1Service; });
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


var OrderEcodeStep1Service = (function () {
    function OrderEcodeStep1Service(http) {
        this.http = http;
    }
    OrderEcodeStep1Service.prototype.confirmOrder = function (orderInfor) {
        return this.http.post("order/payment/flexecash", orderInfor);
    };
    OrderEcodeStep1Service.prototype.updateDeliveryMethod = function (orderInforToUpdateDelivery) {
        return this.http.put("order/delivery", orderInforToUpdateDelivery);
    };
    OrderEcodeStep1Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], OrderEcodeStep1Service);
    return OrderEcodeStep1Service;
}());

//# sourceMappingURL=orderEcodeStep1.service.js.map

/***/ })

});
//# sourceMappingURL=31.js.map