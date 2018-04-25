webpackJsonp([3],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep2PageModule", function() { return RegisterStep2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerStep2__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterStep2PageModule = (function () {
    function RegisterStep2PageModule() {
    }
    RegisterStep2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__registerStep2__["a" /* RegisterStep2Page */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registerStep2__["a" /* RegisterStep2Page */]), __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__registerStep2__["a" /* RegisterStep2Page */]]
        })
    ], RegisterStep2PageModule);
    return RegisterStep2PageModule;
}());

//# sourceMappingURL=registerStep2.module.js.map

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

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDataService; });
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


var RegisterDataService = (function () {
    function RegisterDataService(http) {
        this.http = http;
    }
    RegisterDataService.prototype.getPasswordValidationRules = function () {
        return this.http.get("account/password-policy");
    };
    RegisterDataService.prototype.validateEmailAddress = function (email) {
        return this.http.post("account/email", email);
    };
    RegisterDataService.prototype.searchPostcodeAutoComplete = function (url) {
        return this.http.getExternal(url);
    };
    RegisterDataService.prototype.lookUpAddress = function (url) {
        return this.http.getExternal(url);
    };
    RegisterDataService.prototype.createAccount = function (userData) {
        return this.http.post("account", userData);
    };
    RegisterDataService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    RegisterDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], RegisterDataService);
    return RegisterDataService;
}());

//# sourceMappingURL=registerData.service.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);

var RegisterSharingDataService = (function () {
    function RegisterSharingDataService() {
        this.defaultMasterData = {};
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](this.currentMasterData);
        if (RegisterSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use RegisterSharingDataService.getInstance() instead of new.');
        }
        RegisterSharingDataService._instance = this;
    }
    Object.defineProperty(RegisterSharingDataService.prototype, "state$", {
        get: function () {
            return this._state$;
        },
        enumerable: true,
        configurable: true
    });
    RegisterSharingDataService.prototype.resetState = function () {
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$.next(this.currentMasterData);
    };
    RegisterSharingDataService.prototype.saveStep1Screen = function (step1Model) {
        this.currentMasterData.step1Model = step1Model;
    };
    RegisterSharingDataService.prototype.saveStep2Screen = function (step2Model) {
        this.currentMasterData.step2Model = step2Model;
    };
    RegisterSharingDataService.prototype.getEmailAddressAtStep3 = function () {
        return this.currentMasterData.step2Model.emailAddress;
    };
    RegisterSharingDataService.prototype.saveStep3Screen = function (step3Model) {
        this.currentMasterData.step3Model = step3Model;
    };
    RegisterSharingDataService.prototype.saveStep4Screen = function (step4Model) {
        this.currentMasterData.step4Model = step4Model;
    };
    RegisterSharingDataService.prototype.getRegisterData = function () {
        var registerModel = {
            // step 1
            title: this.currentMasterData.step1Model.title,
            firstName: this.currentMasterData.step1Model.firstName,
            lastName: this.currentMasterData.step1Model.lastName,
            dob: this.currentMasterData.step1Model.dob,
            termsAgreed: this.currentMasterData.step1Model.termsAgreed,
            // step 2
            emailAddress: this.currentMasterData.step2Model.emailAddress,
            password: this.currentMasterData.step2Model.password,
            marketingOptOut: this.currentMasterData.step2Model.marketingOptOut,
            // step 3
            addressLine1: this.currentMasterData.step3Model.addressLine1,
            addressLine2: this.currentMasterData.step3Model.addressLine2,
            country: this.currentMasterData.step3Model.country,
            county: this.currentMasterData.step3Model.county,
            postcode: this.currentMasterData.step3Model.postcode,
            telephoneNumber: this.currentMasterData.step3Model.telephoneNumber,
            town: this.currentMasterData.step3Model.town,
            accountType: "B2C",
            businessName: ""
        };
        return registerModel;
    };
    RegisterSharingDataService.getInstance = function () {
        return RegisterSharingDataService._instance;
    };
    // tslint:disable-next-line:member-ordering
    RegisterSharingDataService._instance = new RegisterSharingDataService();
    return RegisterSharingDataService;
}());

//# sourceMappingURL=registerSharingData.service.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkMatchWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utilities_utilities__ = __webpack_require__(44);

function checkMatchWith(field, confirmField, fieldName, confirmFieldName) {
    if (fieldName === void 0) { fieldName = 'Password'; }
    if (confirmFieldName === void 0) { confirmFieldName = 'confirmation password'; }
    return function (group) {
        var fieldInput = group.controls[field], confirmationInput = group.controls[confirmField];
        if (fieldInput &&
            confirmationInput &&
            __WEBPACK_IMPORTED_MODULE_0__services_utilities_utilities__["a" /* Utils */].isNotNull(fieldInput.value) &&
            __WEBPACK_IMPORTED_MODULE_0__services_utilities_utilities__["a" /* Utils */].isNotNull(confirmationInput.value) &&
            fieldInput.value.toLowerCase() !== confirmationInput.value.toLowerCase()) {
            return confirmationInput.setErrors({ notEquivalent: errorMessage(fieldName, confirmFieldName) });
        }
        else {
            return confirmationInput.setErrors(null);
        }
    };
}
function errorMessage(fieldName, confrimFieldName) {
    return fieldName + " and " + confrimFieldName + " do not match.";
}
//# sourceMappingURL=validator-emailMatch.directive.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = passwordValidator;
/* unused harmony export ValidatorPasswordDirective */
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



var errorMessage = {
    'passwordInvalid': __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.password_invalid_characters
};
function passwordValidator() {
    return function (control) {
        var passwordInput = control.value;
        var message = errorMessage.passwordInvalid;
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*#?&.,Â£()=+"])[\w$@!%*#?&.,Â£()=+"]{8,}$/;
        var passwordPolicy = localStorage.getItem('password-policy');
        if (passwordPolicy) {
            try {
                var policyStr = passwordPolicy;
                var policy = JSON.parse(policyStr);
            }
            catch (e) {
            }
        }
        var error = regex.test(passwordInput) ? null : { passwordInvalid: message };
        return error;
    };
}
var ValidatorPasswordDirective = (function () {
    function ValidatorPasswordDirective() {
        this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].nullValidator;
        this.valFn = passwordValidator();
    }
    ValidatorPasswordDirective_1 = ValidatorPasswordDirective;
    ValidatorPasswordDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    ValidatorPasswordDirective = ValidatorPasswordDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[validatorPassword]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: ValidatorPasswordDirective_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ValidatorPasswordDirective);
    return ValidatorPasswordDirective;
    var ValidatorPasswordDirective_1;
}());

//# sourceMappingURL=validator-password.directive.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterStep2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registerData_service__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_emailMatch_directive__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registerSharingData_service__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_email_directive__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_password_directive__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_validations_validator_minlengthField_directive__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__framework_validations_validator_maxlengthField_directive__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var RegisterStep2Page = (function () {
    function RegisterStep2Page(formBuilder, alertCtrl, routeManager, keyboard, navCtrl, registerDataService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.routeManager = routeManager;
        this.keyboard = keyboard;
        this.navCtrl = navCtrl;
        this.registerDataService = registerDataService;
        this.passwordValidationRules = {};
        this.inputType = 'password';
        this.visiblePassword = false;
        this.marketingOptOut = true;
        this.formErrors = {
            'emailAddress': '',
            'confirmEmailAddress': '',
            'password': ''
        };
        this.updateSuccessFullMSG = '';
        this.account_login_details = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_login_details;
        this.marketing_opt_out = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.marketing_opt_out;
        this.please_enter_your_email_and_password_below_which_will_be_used_to_login_to_your_account_in_the_future = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.please_enter_your_email_and_password_below_which_will_be_used_to_login_to_your_account_in_the_future;
        this.buildForm();
        __WEBPACK_IMPORTED_MODULE_14_jquery___default()(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_14_jquery___default()('input').keypress(function (e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                if ((code == 13) || (code == 10)) {
                    __WEBPACK_IMPORTED_MODULE_14_jquery___default()(_this).blur();
                    _this.keyboard.close();
                    return false;
                }
            });
        });
    }
    RegisterStep2Page.prototype.ionViewWillEnter = function () {
        this.getContentSuccessfull();
    };
    RegisterStep2Page.prototype.buildForm = function () {
        var _this = this;
        this.registerUserForm = this.formBuilder.group({
            'emailAddress': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('E-mail address'),
                    Object(__WEBPACK_IMPORTED_MODULE_12__framework_validations_validator_minlengthField_directive__["a" /* minlengthFieldValidator */])(6, 'Email'),
                    Object(__WEBPACK_IMPORTED_MODULE_15__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(81, 'Email'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_email_directive__["a" /* emailValidator */])()
                ]],
            'confirmEmailAddress': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('Email'),
                    Object(__WEBPACK_IMPORTED_MODULE_12__framework_validations_validator_minlengthField_directive__["a" /* minlengthFieldValidator */])(6, 'Email'),
                    Object(__WEBPACK_IMPORTED_MODULE_15__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(81, 'Email'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_email_directive__["a" /* emailValidator */])()
                ]],
            'password': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('Password'),
                    Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_password_directive__["a" /* passwordValidator */])()
                ]],
            'marketingOptOut': ['']
        }, {
            validator: {
                validators: Object(__WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_emailMatch_directive__["a" /* checkMatchWith */])('emailAddress', 'confirmEmailAddress', 'Email', 'confirmation email'),
                updateOn: 'blur'
            }
        });
        this.registerUserForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
        __WEBPACK_IMPORTED_MODULE_7__registerSharingData_service__["a" /* RegisterSharingDataService */].getInstance().state$.subscribe(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res.step2Model)) {
                _this.registerUserForm.setValue(res.step2Model);
                _this.marketingOptOut = res.step2Model.marketingOptOut;
            }
        });
    };
    RegisterStep2Page.prototype.errorMessage = function (path) {
        var control = this.registerUserForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'emailAddress' || path === 'confirmEmailAddress' || path === 'password') {
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
                if (control.hasError('notEquivalent')) {
                    return control.getError('notEquivalent');
                }
                if (control.hasError('passwordInvalid')) {
                    return control.getError('passwordInvalid');
                }
            }
        }
    };
    RegisterStep2Page.prototype.getContentSuccessfull = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.updateSuccessFullMSG = body.message;
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.registerDataService
            .getContentFromRetreiveContent('email-already-in-use')
            .subscribe(observer);
    };
    RegisterStep2Page.prototype.showPassword = function () {
        this.visiblePassword = !this.visiblePassword;
        if (this.visiblePassword) {
            this.inputType = 'text';
        }
        else {
            this.inputType = 'password';
        }
    };
    RegisterStep2Page.prototype.showAlertPasswordInfo = function () {
        if (!this.passwordValidationRules.message) {
            var passwordPolicy = localStorage.getItem('password-policy');
            if (passwordPolicy) {
                var policy = JSON.parse(passwordPolicy);
                this.passwordValidationRules = {
                    'message': policy.passwordPolicyFriendlyMessage
                };
            }
        }
        var alert = this.alertCtrl.create({
            title: __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.RegisterStep2Page.AlertPasswordTitle,
            message: this.passwordValidationRules.message,
            cssClass: "l2s-alert--default l2s-alert--centered l2s-password-alert",
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterStep2Page.prototype.submitRegisterData = function () {
        var _this = this;
        if (this.registerUserForm.valid) {
            this.registerUserForm.value.marketingOptOut = this.marketingOptOut;
            __WEBPACK_IMPORTED_MODULE_7__registerSharingData_service__["a" /* RegisterSharingDataService */].getInstance().saveStep2Screen(this.registerUserForm.value);
            var submitEmail = {
                emailAddress: this.registerUserForm.value.emailAddress
            };
            __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            this.registerDataService
                .validateEmailAddress(submitEmail)
                .subscribe(function (res) {
                __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                if (res.status === 200) {
                    if (res.response && res.response.validEmailAddress === true) {
                        _this.navCtrl.push('RegisterStep3Page');
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_9__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(_this.updateSuccessFullMSG);
                    }
                }
                else if (res.status > 4) {
                    try {
                        var errors = res.json().errors;
                        if (errors.length > 0) {
                            var emailErrorMsg = "";
                            for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
                                var error = errors_1[_i];
                                emailErrorMsg += error.message + "<br>";
                            }
                            var emailErrorTitle = "Email Invalid:";
                            var alert_1 = _this.alertCtrl.create({
                                title: emailErrorTitle,
                                message: emailErrorMsg,
                                buttons: ['OK']
                            });
                            alert_1.present();
                        }
                    }
                    catch (e) { }
                }
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* QueryList */])
    ], RegisterStep2Page.prototype, "textInputs", void 0);
    RegisterStep2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-registerStep2',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep2\registerStep2.html"*/'\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <button (click)="navCtrl.pop()" ion-button="button-bar" class="fake-back-btn">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <img class="l2s-logo" src="assets/images/l2s-logo.png"/>\n      </ion-col>\n    </ion-row>\n    <ion-row class="p-t-20">\n      <ion-col>\n        <p class="title montserrat-regular text-16">{{account_login_details}}</p>\n        <p text-wrap class="text-14">{{please_enter_your_email_and_password_below_which_will_be_used_to_login_to_your_account_in_the_future}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-grid>\n          <form [formGroup]="registerUserForm ">\n            <ion-row>\n              <ion-item>\n                <ion-label floating>E-mail Address</ion-label>\n                <ion-input deny-copy name="emailAddress" type="text"  formControlName="emailAddress"></ion-input>\n              </ion-item>\n\n              <ion-item-divider ion-item light no-lines\n                                class="error"\n                                *ngIf="registerUserForm.get(\'emailAddress\').dirty\n                                && !registerUserForm.get(\'emailAddress\').valid">\n                <p>{{errorMessage(\'emailAddress\')}}</p>\n              </ion-item-divider>\n            </ion-row>\n\n            <ion-row>\n              <ion-item>\n                <ion-label floating>Confirm E-mail Address</ion-label>\n                <ion-input deny-copy name="confirmEmailAddress" type="text"\n                           formControlName="confirmEmailAddress" [class.ng-invalid]="formErrors.confirmEmailAddress"></ion-input>\n              </ion-item>\n              <ion-item-divider ion-item light no-lines\n                                class="error"\n                                *ngIf="registerUserForm.get(\'confirmEmailAddress\').dirty\n                                && !registerUserForm.get(\'confirmEmailAddress\').valid">\n                <p>{{errorMessage(\'confirmEmailAddress\')}}</p>\n              </ion-item-divider>\n            </ion-row>\n\n            <ion-row>\n              <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input name="password"  formControlName="password" type="{{inputType}}"></ion-input>\n                <button ion-button item-right class="btnShow  show-password prevent-default l2s-btn--primary" (click)="showPassword()">\n                  <span *ngIf="inputType == \'password\'">SHOW</span>\n                  <span *ngIf="inputType == \'text\'">HIDE</span>\n                </button>\n              </ion-item>\n              <ion-item-divider ion-item light no-lines\n                                class="error"\n                                *ngIf="registerUserForm.get(\'password\').dirty\n                                && !registerUserForm.get(\'password\').valid">\n                <p>{{errorMessage(\'password\')}}</p>\n              </ion-item-divider>\n            </ion-row>\n\n            <ion-row class="password-rules ">\n              <ion-icon name="ios-information-circle-outline" (click)="showAlertPasswordInfo()" float-left></ion-icon>\n              <span class="text-14 m-t-8">Password rules</span>\n            </ion-row>\n\n          </form>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <ion-row class="marketing-optout">\n        <ion-col>\n          <ion-item class="none-background">\n            <ion-label text-wrap>{{marketing_opt_out}}</ion-label>\n            <ion-checkbox [(ngModel)]="marketingOptOut"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <button ion-button large block [disabled]="!registerUserForm.valid " (click)="submitRegisterData() ">Next\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="RegisterStep2Page-back-button">\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep2\registerStep2.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__registerData_service__["a" /* RegisterDataService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_13__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__registerData_service__["a" /* RegisterDataService */]])
    ], RegisterStep2Page);
    return RegisterStep2Page;
}());

//# sourceMappingURL=registerStep2.js.map

/***/ })

});
//# sourceMappingURL=3.js.map