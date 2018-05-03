webpackJsonp([24],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotPassword__ = __webpack_require__(860);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPasswordPageModule = (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgotPassword__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotPassword__["a" /* ForgotPasswordPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__forgotPassword__["a" /* ForgotPasswordPage */]
            ]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgotPassword.module.js.map

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

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = minlengthFieldValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = minlengthFieldValidatorPostcode;
/* unused harmony export MinlengthFieldValidatorDirective */
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



function minlengthFieldValidator(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length < length)
                ? { minlengthField: errorMessage(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessage(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return fieldName + " can be no less than " + length + " characters in length.";
}
function minlengthFieldValidatorPostcode(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length < length)
                ? { minlengthField: errorMessagePostCode(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessagePostCode(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_api_invalid_postcode;
}
var MinlengthFieldValidatorDirective = (function () {
    function MinlengthFieldValidatorDirective() {
        this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].nullValidator;
    }
    MinlengthFieldValidatorDirective_1 = MinlengthFieldValidatorDirective;
    MinlengthFieldValidatorDirective.prototype.ngOnChanges = function (changes) {
        var change = changes['minlengthField'];
        if (change) {
            this.valFn = minlengthFieldValidator(parseInt(change.currentValue, 0));
        }
        else {
            this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].nullValidator;
        }
    };
    MinlengthFieldValidatorDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MinlengthFieldValidatorDirective.prototype, "minlengthField", void 0);
    MinlengthFieldValidatorDirective = MinlengthFieldValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[minlengthField]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: MinlengthFieldValidatorDirective_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], MinlengthFieldValidatorDirective);
    return MinlengthFieldValidatorDirective;
    var MinlengthFieldValidatorDirective_1;
}());

//# sourceMappingURL=validator-minlengthField.directive.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emailValidator;
/* unused harmony export EmailValidatorDirective */
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



function emailValidator() {
    return function (control) {
        var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (!emailRegex.test(control.value)) {
            return { email: errorMessage() };
        }
        return null;
    };
}
function errorMessage() {
    return __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.email_invalid_email;
}
var EmailValidatorDirective = (function () {
    function EmailValidatorDirective() {
        this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].nullValidator;
        this.valFn = emailValidator();
    }
    EmailValidatorDirective_1 = EmailValidatorDirective;
    EmailValidatorDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    EmailValidatorDirective = EmailValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[isEmail]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: EmailValidatorDirective_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], EmailValidatorDirective);
    return EmailValidatorDirective;
    var EmailValidatorDirective_1;
}());

//# sourceMappingURL=validator-email.directive.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_email_directive__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgotPassword_service__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_validations_validator_minlengthField_directive__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_maxlengthField_directive__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__);
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













var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(formBuilder, routerManager, navCtrl, forgotPasswordService) {
        this.formBuilder = formBuilder;
        this.routerManager = routerManager;
        this.navCtrl = navCtrl;
        this.forgotPasswordService = forgotPasswordService;
        this.model = {};
        this.formErrors = {
            'emailAddress': '',
        };
        this.forgot_password_enter_email_address_below = "";
        this.model = {
            emailAddress: "",
        };
        this.buildForm(this.model);
    }
    ForgotPasswordPage.prototype.ionViewWillEnter = function () {
        this.getContentMSG();
    };
    ForgotPasswordPage.prototype.buildForm = function (user) {
        var _this = this;
        this.forgotPassword = this.formBuilder.group({
            'emailAddress': [user.emailAddress, [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('E-mail address'),
                    Object(__WEBPACK_IMPORTED_MODULE_8__framework_validations_validator_minlengthField_directive__["a" /* minlengthFieldValidator */])(6, 'Email'),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(81, 'Email'),
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_email_directive__["a" /* emailValidator */])()
                ]],
        }, {
            validator: {
                updateOn: 'blur'
            }
        });
        this.forgotPassword.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    ForgotPasswordPage.prototype.submitForgotPassword = function () {
        var _this = this;
        if (this.forgotPassword.valid) {
            __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    if (!res.ok) {
                        return;
                    }
                    _this.navCtrl.push("ForgotPasswordSuccess");
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                },
                complete: function () {
                    __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.forgotPasswordService
                .forgotPassword(this.forgotPassword.value)
                .subscribe(observer);
        }
    };
    ForgotPasswordPage.prototype.getContentMSG = function () {
        var _this = this;
        var observer = {
            next: function (res) {
                if (__WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0]) && __WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response) && __WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.forgot_password_success_email_sent = res[0].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1]) && __WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response) && __WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.forgot_password_enter_email_address_below = res[1].response.message;
                    _this.forgot_password_enter_email_address_below = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.forgot_password_enter_email_address_below;
                }
            },
            error: function (error) {
            },
            complete: function () {
            }
        };
        __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__["Observable"].combineLatest(this.forgotPasswordService.getContentFromRetreiveContent("forgot-password.success.email-sent"), this.forgotPasswordService.getContentFromRetreiveContent("forgot-password-enter-email-address-below")).subscribe(observer);
    };
    ForgotPasswordPage.prototype.errorMessage = function (path) {
        var control = this.forgotPassword.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'emailAddress' || path === 'password') {
            if (control.hasError('required')) {
                return control.getError('required');
            }
            else {
                if (control.hasError('minlengthField')) {
                    return control.getError('minlengthField');
                }
                if (control.hasError('maxLengthField')) {
                    return control.getError('maxLengthField');
                }
                if (control.hasError('email')) {
                    return control.getError('email');
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], ForgotPasswordPage.prototype, "textInputs", void 0);
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotPassword',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AccountManagement\forgotPassword\forgotPassword.html"*/'<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <button (click)="navCtrl.pop()" ion-button="button-bar" class="fake-back-btn">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center class="m-t-40">\n        <img class="l2s-logo" src="assets/images/l2s-logo.png" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="p-t-50 p-b-30">\n      <ion-col padding>\n        <p class="text-14" text-center>{{forgot_password_enter_email_address_below}}</p>\n      </ion-col>\n    </ion-row>\n    <form class="m-b-50" [formGroup]="forgotPassword">\n      <ion-row>\n        <ion-col>\n          <ion-item class="l2s-input-md">\n            <ion-label floating>Email</ion-label>\n            <ion-input name="emailAddress" type="text" formControlName="emailAddress"></ion-input>\n          </ion-item>\n          <ion-item-divider ion-item light no-lines class="error"\n                            *ngIf="forgotPassword.get(\'emailAddress\').dirty && !forgotPassword.get(\'emailAddress\').valid">\n            <p>{{errorMessage(\'emailAddress\')}}</p>\n          </ion-item-divider>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n      <ion-col>\n          <button ion-button large block [disabled]="!forgotPassword.valid" (click)="submitForgotPassword()" class="reset-button">Send reset email</button>          \n      </ion-col>\n    </ion-row>   \n</ion-content>\n\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="ForgotPasswordPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AccountManagement\forgotPassword\forgotPassword.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__forgotPassword_service__["a" /* ForgotPasswordService */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__forgotPassword_service__["a" /* ForgotPasswordService */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgotPassword.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordService; });
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


var ForgotPasswordService = (function () {
    function ForgotPasswordService(http) {
        this.http = http;
    }
    ForgotPasswordService.prototype.forgotPassword = function (email) {
        return this.http.post("account/password/reset", email);
    };
    ForgotPasswordService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    ForgotPasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], ForgotPasswordService);
    return ForgotPasswordService;
}());

//# sourceMappingURL=forgotPassword.service.js.map

/***/ })

});
//# sourceMappingURL=24.js.map