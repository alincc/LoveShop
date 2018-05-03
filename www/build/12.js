webpackJsonp([12],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep3PageModule", function() { return RegisterStep3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerStep3__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterStep3PageModule = (function () {
    function RegisterStep3PageModule() {
    }
    RegisterStep3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__registerStep3__["a" /* RegisterStep3Page */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registerStep3__["a" /* RegisterStep3Page */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__registerStep3__["a" /* RegisterStep3Page */]]
        })
    ], RegisterStep3PageModule);
    return RegisterStep3PageModule;
}());

//# sourceMappingURL=registerStep3.module.js.map

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

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = containsCharactersValidator;
/* harmony export (immutable) */ __webpack_exports__["c"] = containsOnlyLeterValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = containsCharactersValidatorPostCode;
/* unused harmony export ContainsCharactersValidatorDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function containsCharactersValidator(fieldName) {
    return function (control) {
        var pattern = /^[0-9a-zA-Z &\-'\u2018\u2019\u201A\u201B\u0060,\.\\\/]+$/;
        var field = control.value;
        if (__WEBPACK_IMPORTED_MODULE_2__services_utilities_utilities__["a" /* Utils */].isNotNull(field) && field !== '' && !pattern.test(field)) {
            return { containsCharacters: errorMessage(fieldName) };
        }
        return null;
    };
}
function containsOnlyLeterValidator(fieldName) {
    return function (control) {
        var pattern = /^[a-zA-Z \-'\u2018\u2019\u201A\u201B\u0060]+$/;
        var field = control.value;
        if (__WEBPACK_IMPORTED_MODULE_2__services_utilities_utilities__["a" /* Utils */].isNotNull(field) && !pattern.test(field)) {
            return { containsCharacters: errorMessage(fieldName) };
        }
        return null;
    };
}
function errorMessageEmail(fieldName) {
    return fieldName + " contains invalid characters";
}
function errorMessage(fieldName) {
    return fieldName + " contains invalid characters";
}
function containsCharactersValidatorPostCode(fieldName) {
    return function (control) {
        var patternStr = '$@!%*#?&,£()=+"';
        var input = control.value;
        for (var r = 0; r < patternStr.length; r++) {
            if (__WEBPACK_IMPORTED_MODULE_2__services_utilities_utilities__["a" /* Utils */].isNotNull(input)) {
                if (input.indexOf(patternStr[r]) !== -1) {
                    return { containsCharacters: errorMessagePostCode(fieldName) };
                }
            }
        }
        return null;
    };
}
function errorMessagePostCode(fieldName) {
    return __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_api_invalid_postcode;
}
var ContainsCharactersValidatorDirective = (function () {
    function ContainsCharactersValidatorDirective() {
        this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].nullValidator;
    }
    ContainsCharactersValidatorDirective_1 = ContainsCharactersValidatorDirective;
    ContainsCharactersValidatorDirective.prototype.ngOnChanges = function (changes) {
        var change = changes['containsCharacters'];
        if (change) {
            var val = change.currentValue;
            this.valFn = containsCharactersValidator(val);
        }
        else {
            this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].nullValidator;
        }
    };
    ContainsCharactersValidatorDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ContainsCharactersValidatorDirective.prototype, "containsCharacters", void 0);
    ContainsCharactersValidatorDirective = ContainsCharactersValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[containsCharacters]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: ContainsCharactersValidatorDirective_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], ContainsCharactersValidatorDirective);
    return ContainsCharactersValidatorDirective;
    var ContainsCharactersValidatorDirective_1;
}());

//# sourceMappingURL=validator-containsCharacters.directive.js.map

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

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = phoneValidator;
/* unused harmony export PhoneValidatorDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function phoneValidator() {
    return function (control) {
        var phone = control.value;
        if (isNaN(phone)) {
            return { phoneError: __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.invalid_phone_format };
        }
        if (__WEBPACK_IMPORTED_MODULE_2__services_utilities_utilities__["a" /* Utils */].isNotNull(phone)) {
            var isPhoneOk = false;
            // check home phome start with 01 or 02 or 0845
            isPhoneOk = phone.substring(0, 2) === '01'
                || phone.substring(0, 2) === '02'
                || phone.substring(0, 4) === '0845';
            if (isPhoneOk === true) {
                if (phone.length === 11) {
                    return null;
                }
            }
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
        }
        return { phoneError: __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.invalid_phone_format };
    };
}
var PhoneValidatorDirective = (function () {
    function PhoneValidatorDirective() {
        this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].nullValidator;
        this.valFn = phoneValidator();
    }
    PhoneValidatorDirective_1 = PhoneValidatorDirective;
    PhoneValidatorDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    PhoneValidatorDirective = PhoneValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[isPhone]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: PhoneValidatorDirective_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], PhoneValidatorDirective);
    return PhoneValidatorDirective;
    var PhoneValidatorDirective_1;
}());

//# sourceMappingURL=validator-phone.directive.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterStep3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registerSharingData_service__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registerData_service__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_validations_validator_phone_directive__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_containsCharacters_directive__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_minlengthField_directive__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_login_authenticationDataSharing_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__framework_validations_validator_maxlengthField_directive__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_18__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var RegisterStep3Page = (function () {
    function RegisterStep3Page(formBuilder, alertCtrl, routeManager, authService, navCtrl, registerDataService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.routeManager = routeManager;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.registerDataService = registerDataService;
        this.keyPCA = __WEBPACK_IMPORTED_MODULE_18__framework_appConfig__["a" /* AppConfig */].Configuration.LocationService.PCA_KEY;
        this.enter_postcode_or_search_for_an_address = __WEBPACK_IMPORTED_MODULE_18__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.enter_postcode_or_search_for_an_address;
        this.enter_address_manually = __WEBPACK_IMPORTED_MODULE_18__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.enter_address_manually;
        this.txtPostCode = "";
        this.model = {
            addressLine1: '',
            addressLine2: '',
            town: '',
            county: '',
            postcode: '',
            telephoneNumber: '',
            country: '',
        };
        this.countryLists = [
            {
                countryId: "UK",
                countryName: "United Kingdom"
            }
        ];
        this.showStyle = true;
        this.isShowAddress = false;
        this.suggestSearch$ = new __WEBPACK_IMPORTED_MODULE_15_rxjs_Subject__["Subject"]();
        this.showList = false;
        this.formErrors = {
            'addressLine1': '',
            'addressLine2': '',
            'town': '',
            'county': '',
            'postcode': '',
            'telephoneNumber': '',
            'isShowAddress': ''
        };
        this.buildForm();
        this.searchStream = this.suggestSearch$
            .debounceTime(250)
            .switchMap(function (keyword) {
            var term = '';
            var lastId = undefined;
            if (typeof keyword === 'string') {
                term = keyword;
            }
            else if (typeof keyword === 'object') {
                term = keyword['keyword'];
                lastId = keyword['lastId'];
            }
            return _this.getItems(term, lastId);
        }, function (outerValue, innerValue) { return ({
            keywordPostcode: outerValue,
            response: innerValue
        }); })
            .filter(function (x) { return !!(x.response); });
    }
    RegisterStep3Page.prototype.dirtySelectValue = function () {
        if (this.showStyle) {
            return "input-has-value";
        }
        else {
            return "";
        }
    };
    RegisterStep3Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.searchSub = this.searchStream.subscribe(function (res) { return _this.responseHandler(res); });
    };
    RegisterStep3Page.prototype.ionViewDidLeave = function () {
        this.searchSub && this.searchSub.unsubscribe();
    };
    RegisterStep3Page.prototype.formatLocationAddress = function (item) {
        if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].lengthGreaterThan0(item.Description)) {
            return item.Text + " " + item.Description;
        }
        else {
            return item.Text;
        }
    };
    RegisterStep3Page.prototype.getItems = function (keywordPostcode, lastId) {
        if (lastId === void 0) { lastId = 'GBR|'; }
        // if the value is an empty string don't filter the items
        if (keywordPostcode && keywordPostcode.trim() != '' && keywordPostcode.trim().length > 2) {
            var url = 'https://services.postcodeanywhere.co.uk/CapturePlus/Interactive/Find/v2.10/json3.ws?'
                + 'Key=' + this.keyPCA
                + '&Country=GBR'
                + '&SearchTerm=' + encodeURI(keywordPostcode)
                + '&LanguagePreference=EN'
                + '&LastId=' + encodeURI(lastId)
                + '&SearchFor=Everything'
                + '&MaxSuggestions=10'
                + '&MaxResults=';
            return this.registerDataService
                .searchPostcodeAutoComplete(url);
        }
        else {
            // hide the results when the query is empty
            this.showList = false;
            return __WEBPACK_IMPORTED_MODULE_16_rxjs_Observable__["Observable"].of(null);
        }
    };
    RegisterStep3Page.prototype.pickupAddress = function (item) {
        var _this = this;
        if (item && item.Next && item.Next.toLowerCase() === 'find') {
            this.suggestSearch$.next({
                keyword: item.Text,
                lastId: item.Id
            });
            return;
        }
        __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var url = 'https://services.postcodeanywhere.co.uk/CapturePlus/Interactive/Retrieve/v2.10/json3.ws?'
            + 'Key=' + this.keyPCA
            + '&Id=' + item.Id;
        this.registerDataService
            .lookUpAddress(url)
            .subscribe(function (response) {
            var addressItem = response.Items[0];
            if (addressItem && !addressItem.Error) {
                _this.model = {
                    addressLine1: addressItem.Line1,
                    addressLine2: addressItem.Line2,
                    town: addressItem.City,
                    county: addressItem.ProvinceName || addressItem.Province || '',
                    postcode: addressItem.PostalCode,
                    country: _this.countryLists[0].countryName,
                    telephoneNumber: '',
                    isShowAddress: true
                };
                _this.registerUserForm.setValue(_this.model);
                _this.showList = false;
                _this.isShowAddress = true;
            }
        }, function () {
        }, function () {
            __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    RegisterStep3Page.prototype.submitRegisterData = function () {
        var _this = this;
        if (this.registerUserForm.valid) {
            this._unsubscribe();
            this.registerUserForm.value.isShowAddress = this.isShowAddress;
            __WEBPACK_IMPORTED_MODULE_3__registerSharingData_service__["a" /* RegisterSharingDataService */].getInstance().saveStep3Screen(this.registerUserForm.value);
            var authShareService_1 = __WEBPACK_IMPORTED_MODULE_13__framework_login_authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance();
            var registerModel_1 = __WEBPACK_IMPORTED_MODULE_3__registerSharingData_service__["a" /* RegisterSharingDataService */].getInstance().getRegisterData();
            __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            this._submitregister = this.registerDataService
                .createAccount(registerModel_1)
                .subscribe(function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                var authInfo = {
                    token: body.accessToken,
                    accessTokenExpiry: body.accessTokenExpiry,
                    emailAddress: registerModel_1.emailAddress
                };
                _this.authService.authenticated(authInfo);
                // storage email address for later use
                authShareService_1.loginEmail = registerModel_1.emailAddress;
                __WEBPACK_IMPORTED_MODULE_19__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().goToFromLogin = true;
                _this.navCtrl.setRoot('RegisterStep4Page');
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }, function () {
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            });
        }
    };
    RegisterStep3Page.prototype.buildForm = function () {
        var _this = this;
        this.registerUserForm = this.formBuilder.group({
            'addressLine1': [this.model.addressLine1, [
                    Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_required_directive__["a" /* requireValidator */])('Address Line 1'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_minlengthField_directive__["a" /* minlengthFieldValidator */])(2, "Address Line 1"),
                    Object(__WEBPACK_IMPORTED_MODULE_17__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(40, "Address Line 1"),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_containsCharacters_directive__["a" /* containsCharactersValidator */])('Address Line 1'),
                ]],
            'addressLine2': [this.model.addressLine2, [
                    Object(__WEBPACK_IMPORTED_MODULE_17__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(40, "Address Line 2"),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_containsCharacters_directive__["a" /* containsCharactersValidator */])('Address Line 2'),
                ]],
            'town': [this.model.town, [
                    Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_required_directive__["a" /* requireValidator */])('Town'),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_containsCharacters_directive__["a" /* containsCharactersValidator */])('Town'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_minlengthField_directive__["a" /* minlengthFieldValidator */])(1, "Town"),
                    Object(__WEBPACK_IMPORTED_MODULE_17__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(40, "Town")
                ]],
            'county': [this.model.county, [
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_containsCharacters_directive__["a" /* containsCharactersValidator */])('County'),
                    Object(__WEBPACK_IMPORTED_MODULE_17__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(40, "County")
                ]],
            'postcode': [this.model.postcode, [
                    Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_required_directive__["a" /* requireValidator */])('Postcode'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_minlengthField_directive__["b" /* minlengthFieldValidatorPostcode */])(1, "Postcode"),
                    Object(__WEBPACK_IMPORTED_MODULE_17__framework_validations_validator_maxlengthField_directive__["e" /* maxlengthFieldValidatorPostcode */])(8, "Postcode"),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_containsCharacters_directive__["b" /* containsCharactersValidatorPostCode */])('Postcode'),
                ]],
            'country': [this.countryLists[0].countryName],
            'telephoneNumber': [this.model.telephoneNumber, [
                    Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_required_directive__["a" /* requireValidator */])('telephoneNumber'),
                    Object(__WEBPACK_IMPORTED_MODULE_8__framework_validations_validator_phone_directive__["a" /* phoneValidator */])()
                ]],
            'isShowAddress': ['']
        }, {
            validator: {
                updateOn: 'blur'
            }
        });
        this.registerUserForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
        __WEBPACK_IMPORTED_MODULE_3__registerSharingData_service__["a" /* RegisterSharingDataService */].getInstance().state$.subscribe(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res.step3Model)) {
                _this.registerUserForm.setValue(res.step3Model);
                _this.isShowAddress = res.step3Model.isShowAddress;
            }
        });
    };
    RegisterStep3Page.prototype.errorMessage = function (path) {
        var control = this.registerUserForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_18__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'addressLine1' ||
            path === 'addressLine2' ||
            path === 'town' ||
            path === 'county' ||
            path === 'telephoneNumber' ||
            path === 'postcode') {
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
                if (control.hasError('minlength')) {
                    return control.getError('minlength');
                }
                if (control.hasError('containsCharacters')) {
                    return control.getError('containsCharacters');
                }
                if (control.hasError('phoneError')) {
                    return control.getError('phoneError');
                }
            }
        }
    };
    RegisterStep3Page.prototype._showError = function (message) {
        __WEBPACK_IMPORTED_MODULE_14__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    RegisterStep3Page.prototype._unsubscribe = function () {
        if (this._submitregister) {
            this._submitregister.unsubscribe();
        }
    };
    RegisterStep3Page.prototype._handleError = function (res) {
        __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        var msg = DEFAULT_ERROR_MSG;
        try {
            var body = JSON.parse(res._body);
            msg = body.errors[0].message;
        }
        catch (e) {
            msg = DEFAULT_ERROR_MSG;
        }
        this._showError(msg);
    };
    RegisterStep3Page.prototype.responseHandler = function (res) {
        var response = res.response, keywordPostcode = res.keywordPostcode;
        this.listAddressItems = response.Items || [];
        this.showList = true;
        if (this.listAddressItems.length === 1 && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.listAddressItems[0].Error)) {
            this.listAddressItems[0].Text = "No results found.";
        }
        if (this.listAddressItems.length <= 0) {
            this.listAddressItems.push({
                Text: "No results found."
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], RegisterStep3Page.prototype, "textInputs", void 0);
    RegisterStep3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registerStep3',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep3\registerStep3.html"*/'\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <button (click)="navCtrl.pop()" ion-button="button-bar" class="fake-back-btn">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <img class="l2s-logo" src="assets/images/l2s-logo.png"/>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="p-b-10 p-t-20">\n      <ion-col>\n        <ion-input type="hidden" [(ngModel)]="isShowAddress"></ion-input>\n        <p class="title montserrat-regular">Address <span float-right text-right class="madatory-note text-14">*mandatory fields</span></p>\n        <p class="title montserrat-bold text-14 p-t-10 text-underline" [hidden]="!isShowAddress" (click)="isShowAddress = !isShowAddress">Lookup postcode</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="lookup-address" [hidden]="isShowAddress">\n      <ion-col>\n        <ion-item>\n          <ion-label floating>{{enter_postcode_or_search_for_an_address}}</ion-label>\n          <ion-input (input)="suggestSearch$.next($event.target.value)" placeholder=""></ion-input>\n        </ion-item>\n        <ion-list *ngIf="showList" class="suggestion-address">\n          <ion-item *ngFor="let item of listAddressItems" (click)="pickupAddress(item)">\n            {{ formatLocationAddress(item) }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row [hidden]="isShowAddress" class="p-b-13 p-t-10">\n      <ion-col>\n        <p class="title montserrat-bold text-14" (click)="isShowAddress = !isShowAddress">{{enter_address_manually}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="registerUserForm">\n      <ion-col>\n          <form [formGroup]="registerUserForm" class="form-register--wrapper">\n            <div *ngIf="isShowAddress">\n              <ion-row class="m-b-20">\n                <ion-item>\n                  <ion-label floating>Address line 1*</ion-label>\n                  <ion-input name="addressLine1" type="text"  formControlName="addressLine1"></ion-input>\n                </ion-item>\n\n                <ion-item-divider ion-item light no-lines class="error"\n                                  *ngIf="registerUserForm.get(\'addressLine1\').dirty && !registerUserForm.get(\'addressLine1\').valid">\n                  <p>{{errorMessage(\'addressLine1\')}}</p>\n                </ion-item-divider>\n              </ion-row>\n\n              <ion-row class="m-b-20">\n                <ion-item>\n                  <ion-label floating>Address line 2</ion-label>\n                  <ion-input name="addressLine2" type="text"  formControlName="addressLine2"></ion-input>\n                </ion-item>\n\n\n                <ion-item-divider ion-item light no-lines class="error"\n                                  *ngIf="registerUserForm.get(\'addressLine2\').dirty && !registerUserForm.get(\'addressLine2\').valid">\n                  <p>{{errorMessage(\'addressLine2\')}}</p>\n                </ion-item-divider>\n              </ion-row>\n\n              <ion-row class="m-b-20">\n                <ion-item>\n                  <ion-label floating>Town*</ion-label>\n                  <ion-input name="town" type="text"  formControlName="town"></ion-input>\n                </ion-item>\n\n                <ion-item-divider ion-item light no-lines class="error"\n                                  *ngIf="registerUserForm.get(\'town\').dirty && !registerUserForm.get(\'town\').valid">\n                  <p>{{errorMessage(\'town\')}}</p>\n                </ion-item-divider>\n              </ion-row>\n\n              <ion-row class="m-b-20">\n                <ion-item>\n                  <ion-label floating>County</ion-label>\n                  <ion-input name="county" type="text"  formControlName="county"></ion-input>\n                </ion-item>\n                <ion-item-divider ion-item light no-lines class="error"\n                                  *ngIf="registerUserForm.get(\'county\').dirty && !registerUserForm.get(\'county\').valid">\n                  <p>{{errorMessage(\'county\')}}</p>\n                </ion-item-divider>\n              </ion-row>\n\n              <ion-row class="m-b-20">\n                <ion-item>\n                  <ion-label floating>Postcode*</ion-label>\n                  <ion-input name="postcode" type="text" formControlName="postcode"></ion-input>\n                </ion-item>\n                <ion-item-divider ion-item light no-lines class="error"\n                                  *ngIf="registerUserForm.get(\'postcode\').dirty && !registerUserForm.get(\'postcode\').valid">\n                  <p>{{errorMessage(\'postcode\')}}</p>\n                </ion-item-divider>\n              </ion-row>\n\n              <ion-row class="m-b-20">\n                <ion-item [ngClass]="dirtySelectValue()">\n                  <ion-label floating>Country*</ion-label>\n                  <ion-select name="country" formControlName="country" disabled="true" (ionChange)="showStyle = true">\n                    <ion-option *ngFor="let countryItem of countryLists" value="{{ countryItem.countryName }}">\n                      {{ countryItem.countryName }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-row>\n            </div>\n            <ion-row class="p-b-15">\n              <ion-col>\n                <div class="border-divider border-color"></div>\n              </ion-col>\n            </ion-row>\n            <ion-row class="m-b-20">\n              <ion-item class="telephoneNumber">\n                <div class="border-divider border-color"></div>\n                <ion-label floating>Telephone*</ion-label>\n                <ion-input name="telephoneNumber" type="tel" formControlName="telephoneNumber"\n                  (focus)="showList = false"\n                  placeholder=""></ion-input>\n              </ion-item>\n              <ion-item-divider ion-item light no-lines class="error"\n                                *ngIf="registerUserForm.get(\'telephoneNumber\').dirty && !registerUserForm.get(\'telephoneNumber\').valid">\n                <p>{{errorMessage(\'telephoneNumber\')}}</p>\n              </ion-item-divider>\n            </ion-row>\n          </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button large block [disabled]="!registerUserForm.valid" (click)="submitRegisterData()">Next</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="RegisterStep3Page-back-button">\n  </ion-row>\n</ion-content>\n\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep3\registerStep3.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__registerData_service__["a" /* RegisterDataService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_11__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_12__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__registerData_service__["a" /* RegisterDataService */]])
    ], RegisterStep3Page);
    return RegisterStep3Page;
}());

//# sourceMappingURL=registerStep3.js.map

/***/ })

});
//# sourceMappingURL=12.js.map