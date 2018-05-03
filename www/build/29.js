webpackJsonp([29],{

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderMasterCardExchangeStep1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orderMasterCardExchangeStep1_service__ = __webpack_require__(1002);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_validations_validator_minlength_directive__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_numeric_directive__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_maxlengthField_directive__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_jquery__);
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













var OrderMasterCardExchangeStep1 = (function () {
    function OrderMasterCardExchangeStep1(formBuilder, routeManager, navParams, navCtrl, orderMasterCardExchangeStep1Service) {
        this.formBuilder = formBuilder;
        this.routeManager = routeManager;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.orderMasterCardExchangeStep1Service = orderMasterCardExchangeStep1Service;
        this.haveCardFee = false;
        this.formErrors = {
            'cvv': ''
        };
        this.currentBalanceRemaining = 0;
        this.buildForm();
        this.orderSummary = {
            'orderNumber': '',
            'paymentCards': []
        };
    }
    OrderMasterCardExchangeStep1.prototype.buildForm = function () {
        var _this = this;
        this.confirmOrderForm = this.formBuilder.group({
            'cvv': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('cvv'),
                    Object(__WEBPACK_IMPORTED_MODULE_8__framework_validations_validator_minlength_directive__["b" /* minlengthValidatorCSC */])(3, 'CSC'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_maxlengthField_directive__["b" /* maxlengthFieldValidatorCSC */])(3, 'CSC'),
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
    OrderMasterCardExchangeStep1.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_11_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    OrderMasterCardExchangeStep1.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_11_jquery___default()('.app-root').addClass('not-show-tab');
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
                if (this.navParams.get('masterCardTypeSelected')) {
                    this.masterCardTypeSelected = this.navParams.get('masterCardTypeSelected');
                }
                if (this.navParams.get('orderInforAfterGenerate')) {
                    this.haveCardFee = false;
                    this.orderInforAfterGenerate = this.navParams.get('orderInforAfterGenerate');
                    if (this.orderInforAfterGenerate
                        && __WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.orderInforAfterGenerate.orderlines[1])
                        && __WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.orderInforAfterGenerate.orderlines[1].paymentAmount)
                        && this.orderInforAfterGenerate.orderlines[1].paymentAmount > 0) {
                        this.haveCardFee = true;
                    }
                }
                if (this.navParams.get('primaryCard')) {
                    this.cardPrimary = this.navParams.get('primaryCard');
                    if (__WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.cardPrimary)) {
                        if (this.cardPrimary.cardType === 'FLEXECODE_2.0') {
                            var cardId = this.cardPrimary.cardId;
                            this.fourLastCardNumber = cardId.substr(cardId.length - 5);
                            this.cardNumberContainSpace = this.cardPrimary.cardId;
                        }
                        else {
                            var cardNumber = this.cardPrimary.cardNumber;
                            this.fourLastCardNumber = cardNumber.substr(cardNumber.length - 4);
                            this.cardNumberContainSpace = this.cardPrimary.cardNumber.split(/(\d{4})/).join(' ').trim();
                        }
                        if (__WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.cardPrimary.balance) && __WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.orderInforAfterGenerate) && __WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.orderInforAfterGenerate.totalPaymentAmount)) {
                            this.currentBalanceRemaining = parseFloat(this.cardPrimary.balance) - parseFloat(this.orderInforAfterGenerate.totalPaymentAmount);
                        }
                    }
                }
            }
        }
    };
    OrderMasterCardExchangeStep1.prototype.ionViewWillLease = function () {
        __WEBPACK_IMPORTED_MODULE_11_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    OrderMasterCardExchangeStep1.prototype.confirmOrder = function () {
        var _this = this;
        this.orderSummary = {
            'orderNumber': '',
            'paymentCards': []
        };
        var cardItem = {
            'cardNumber': this.cardPrimary.cardNumber,
            'eCode': this.cardPrimary.cardId,
            'csc': this.confirmOrderForm.value.cvv,
            'expiryDate': this.cardPrimary.expiryDate,
            'amount': this.orderInforAfterGenerate.totalPaymentAmount
        };
        this.orderSummary.orderNumber = this.orderInforAfterGenerate.orderNumber;
        this.orderSummary.paymentCards.push(cardItem);
        if (this.confirmOrderForm.valid) {
            __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    if (!res.ok) {
                        __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                        return;
                    }
                    var body = res.response;
                    if (__WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body)) {
                        _this.navCtrl.push('OrderMasterCardExchangeStep2', {
                            orderSuccess: body,
                            orderInforAfterGenerate: _this.orderInforAfterGenerate,
                            cardPrimary: _this.cardPrimary,
                            imageMasterCard: _this.masterCardTypeSelected.mediumImages[0]
                        });
                    }
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                },
                complete: function () {
                    __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.orderMasterCardExchangeStep1Service
                .confirmOrder(this.orderSummary)
                .subscribe(observer);
        }
    };
    OrderMasterCardExchangeStep1.prototype.errorMessage = function (path) {
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* QueryList */])
    ], OrderMasterCardExchangeStep1.prototype, "textInputs", void 0);
    OrderMasterCardExchangeStep1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-orderMasterCardExchangeStep1',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderMasterCardExchange\orderMasterCardExchangeStep1\orderMasterCardExchangeStep1.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            payment\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class="content-wrapper">\n        <ion-row>\n            <p class="label">Basket</p>\n        </ion-row>\n        <ion-row class="card-info--wrapper">\n            <table>\n                <thead>\n                    <th>Product</th>\n                    <th>Quantity</th>\n                    <th>Total</th>\n                </thead>\n                <tbody>\n                    <tr *ngFor="let orderline of orderInforAfterGenerate?.orderlines">\n                        <td>{{orderline?.productDescription}}</td>\n                        <td>{{orderline?.quantity}}</td>\n                        <td>{{orderline?.paymentAmount  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</td>\n                    </tr>\n                    <!--<tr *ngIf="haveCardFee">-->\n                        <!--<td colspan="2">Card Fee </td>-->\n                        <!--<td>{{orderInforAfterGenerate?.orderlines[1]?.paymentAmount  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</td>-->\n                    <!--</tr>-->\n                </tbody>\n                <tfoot>\n                    <td colspan="2">Sub Total</td>\n                    <td>{{orderInforAfterGenerate?.totalPaymentAmount  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</td>\n                </tfoot>\n            </table>\n        </ion-row>\n\n        <ion-row class="m-b-15">\n            <ion-col>\n                <p class="label">Primary card payment</p>\n                <div class="product-info">\n                    <img src="{{baseResourceUrl}}{{cardPrimary?.cardLogoPath}}"/>\n                    <p class="card-num">{{cardPrimary?.nickname}}</p>\n                    <p>Ends in {{fourLastCardNumber}} | Expires {{cardPrimary?.expiryDate}}</p>\n                    <p class="value-balance">Value: {{orderInforAfterGenerate?.totalPaymentAmount  | currency:\'GBP\':\'symbol\':\'1.2-2\'}} | Balance remaining {{ currentBalanceRemaining  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n                </div>\n                <form [formGroup]="confirmOrderForm">\n                    <ion-input type="tel"\n                               placeholder="Card Security Code"\n                               formControlName="cvv"\n                               class="input--border only-password"></ion-input>\n                    <img class="csc" src="assets/images/card-csc-icon.png" height="34" width="51"/>\n                    <ion-item-divider ion-item light no-lines class="error"\n                                      *ngIf="confirmOrderForm.get(\'cvv\').dirty && !confirmOrderForm.get(\'cvv\').valid">\n                        <p>{{errorMessage(\'cvv\')}}</p>\n                    </ion-item-divider>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-row class="footer--wrapper" padding>\n        <ion-col>\n            <button ion-button block large [disabled]="!confirmOrderForm.valid" (click)="confirmOrder()">\n                <i class="fa fa-lock m-r-5 m-t-2"></i> Pay Now\n            </button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row style="display: none;" \n    (click)="navCtrl.pop()"\n    id="OrderMasterCardExchangeStep1-back-button">\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderMasterCardExchange\orderMasterCardExchangeStep1\orderMasterCardExchangeStep1.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__orderMasterCardExchangeStep1_service__["a" /* OrderMasterCardExchangeStep1Service */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__orderMasterCardExchangeStep1_service__["a" /* OrderMasterCardExchangeStep1Service */]])
    ], OrderMasterCardExchangeStep1);
    return OrderMasterCardExchangeStep1;
}());

//# sourceMappingURL=orderMasterCardExchangeStep1.js.map

/***/ }),

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderMasterCardExchangeStep1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderMasterCardExchangeStep1Service = (function () {
    function OrderMasterCardExchangeStep1Service(http) {
        this.http = http;
    }
    OrderMasterCardExchangeStep1Service.prototype.generateOrder = function (orderInfor) {
        return this.http.post("order", orderInfor);
    };
    OrderMasterCardExchangeStep1Service.prototype.confirmOrder = function (orderInfor) {
        return this.http.post("order/payment/flexecash", orderInfor);
    };
    OrderMasterCardExchangeStep1Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], OrderMasterCardExchangeStep1Service);
    return OrderMasterCardExchangeStep1Service;
}());

//# sourceMappingURL=orderMasterCardExchangeStep1.service.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderMasterCardExchangeStep1Module", function() { return orderMasterCardExchangeStep1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderMasterCardExchangeStep1__ = __webpack_require__(1001);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var orderMasterCardExchangeStep1Module = (function () {
    function orderMasterCardExchangeStep1Module() {
    }
    orderMasterCardExchangeStep1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderMasterCardExchangeStep1__["a" /* OrderMasterCardExchangeStep1 */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderMasterCardExchangeStep1__["a" /* OrderMasterCardExchangeStep1 */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderMasterCardExchangeStep1__["a" /* OrderMasterCardExchangeStep1 */]]
        })
    ], orderMasterCardExchangeStep1Module);
    return orderMasterCardExchangeStep1Module;
}());

//# sourceMappingURL=orderMasterCardExchangeStep1.module.js.map

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

/***/ })

});
//# sourceMappingURL=29.js.map