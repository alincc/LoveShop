webpackJsonp([4],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep1PageModule", function() { return RegisterStep1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerStep1__ = __webpack_require__(863);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterStep1PageModule = (function () {
    function RegisterStep1PageModule() {
    }
    RegisterStep1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__registerStep1__["a" /* RegisterStep1Page */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registerStep1__["a" /* RegisterStep1Page */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__registerStep1__["a" /* RegisterStep1Page */]]
        })
    ], RegisterStep1PageModule);
    return RegisterStep1PageModule;
}());

//# sourceMappingURL=registerStep1.module.js.map

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

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterStep1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registerData_service__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registerSharingData_service__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_minlength_directive__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_containsCharacters_directive__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_validations_validator_age_directive__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__framework_validations_validator_maxlengthField_directive__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__framework_validations_validator_requiredStandardDropdownList_directive__ = __webpack_require__(865);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var RegisterStep1Page = (function () {
    function RegisterStep1Page(formBuilder, routeManager, alertCtrl, http, iab, navCtrl, registerDataService) {
        this.formBuilder = formBuilder;
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.registerDataService = registerDataService;
        this.viewModel = {};
        this.model = {
            title: null,
            firstName: null,
            lastName: null,
            dob: null
        };
        this.personal_details = "";
        this.account_login_details = "";
        this.please_enter_your_email_and_password_below_which_will_be_used_to_login_to_your_account_in_the_future = "";
        this.marketing_opt_out = "";
        this.account_created = "";
        this.five_digit_pin = "";
        this.userTitle = [
            {
                "id": 1,
                "text": "Mrs"
            },
            {
                "id": 2,
                "text": "Mr"
            },
            {
                "id": 3,
                "text": "Miss"
            },
            {
                "id": 4,
                "text": "Ms"
            },
            {
                "id": 5,
                "text": "Dr"
            }
        ];
        this.datemax = ((new Date()).getFullYear()) - 18;
        this.datemin = ((new Date()).getFullYear()) - 99;
        this.formErrors = {
            'title': '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        };
        this.buildForm();
    }
    RegisterStep1Page.prototype.submitRegisterData = function () {
        var _this = this;
        if (this.registerUserForm.valid) {
            var datePipeEn = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]('en-GB');
            var data_1 = Object.assign({}, this.registerUserForm.value);
            data_1.dob = datePipeEn.transform(this.registerUserForm.value.dob, 'dd/MM/yyyy');
            data_1.termsAgreed = true;
            __WEBPACK_IMPORTED_MODULE_13__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            this.registerDataService
                .getPasswordValidationRules()
                .subscribe(function (res) {
                __WEBPACK_IMPORTED_MODULE_13__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                if (res.status === 200) {
                    // store password policy
                    localStorage.setItem('password-policy', JSON.stringify(res.response));
                    // redirect to next step
                    __WEBPACK_IMPORTED_MODULE_4__registerSharingData_service__["a" /* RegisterSharingDataService */].getInstance().saveStep1Screen(data_1);
                    _this.navCtrl.push("RegisterStep2Page");
                }
                else if (res.status > 4) {
                    try {
                        var err = res.json().errors;
                        if (err.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_14__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(err[0].message);
                        }
                    }
                    catch (e) {
                        __WEBPACK_IMPORTED_MODULE_14__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(DEFAULT_ERROR_MSG);
                    }
                }
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_13__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            });
        }
    };
    RegisterStep1Page.prototype.dirtySelectValue = function () {
        if (this.showStyle) {
            return "input-has-value";
        }
        else {
            return "";
        }
    };
    RegisterStep1Page.prototype.ionViewWillEnter = function () {
        this.getContentMSG();
    };
    RegisterStep1Page.prototype.buildForm = function () {
        var _this = this;
        this.registerUserForm = this.formBuilder.group({
            'title': ['-1', [
                    Object(__WEBPACK_IMPORTED_MODULE_19__framework_validations_validator_requiredStandardDropdownList_directive__["a" /* requireStandardDropdownListValidator */])('title')
                ]],
            'firstName': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_required_directive__["a" /* requireValidator */])('First name'),
                    Object(__WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_minlength_directive__["a" /* minlengthValidator */])(2, 'First Name'),
                    Object(__WEBPACK_IMPORTED_MODULE_15__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(25, 'First Name'),
                    Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_containsCharacters_directive__["c" /* containsOnlyLeterValidator */])('First Name')
                ]],
            'lastName': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_required_directive__["a" /* requireValidator */])('Last Name'),
                    Object(__WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_minlength_directive__["a" /* minlengthValidator */])(2, 'Last Name'),
                    Object(__WEBPACK_IMPORTED_MODULE_15__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(25, 'Last Name'),
                    Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_containsCharacters_directive__["c" /* containsOnlyLeterValidator */])('Last Name')
                ]],
            'dob': [null, [
                    // Validators.required,
                    Object(__WEBPACK_IMPORTED_MODULE_8__framework_validations_validator_age_directive__["a" /* ageValidator */])()
                ]]
        }, {
            validator: {
                updateOn: 'blur'
            }
        });
        __WEBPACK_IMPORTED_MODULE_4__registerSharingData_service__["a" /* RegisterSharingDataService */].getInstance().resetState();
        this.registerUserForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    RegisterStep1Page.prototype.errorMessage = function (path) {
        var control = this.registerUserForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        var invalidChar = ' contains invalid characters';
        if (control.valid) {
            return '';
        }
        if (path === 'title') {
            return control.getError('required');
        }
        if (path === 'firstName' || path === 'lastName') {
            if (control.hasError('required')) {
                return control.getError('required');
            }
            if (control.hasError('minlength')) {
                return control.getError('minlength');
            }
            if (control.hasError('maxLengthField')) {
                return control.getError('maxLengthField');
            }
            if (control.hasError('containsCharacters')) {
                return (path === 'firstName' ? 'First Name' : 'Last Name') + invalidChar;
            }
        }
        if (path === 'dob') {
            if (control.hasError('required')) {
                return control.getError('required');
            }
            return control.getError('ageInvalid');
        }
    };
    RegisterStep1Page.prototype.retriveMessage = function (code) {
        var _this = this;
        this.http.get("cms/message/code=" + code).subscribe(function (res) {
            if (res && res.response && res.response.message) {
                var url = _this._normalizeUrl(res.response.message);
                var browser = _this.iab.create(url, "_system", "location=true");
            }
        });
    };
    RegisterStep1Page.prototype._normalizeUrl = function (url) {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            if (url.startsWith('/')) {
                return 'https://www.love2shop.co.uk' + url;
            }
            return 'http://' + url;
        }
        return url;
    };
    RegisterStep1Page.prototype.iconClick = function (target) {
        target.open();
    };
    RegisterStep1Page.prototype.getContentMSG = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_13__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (__WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0]) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.personal_details = res[0].response.message;
                    _this.personal_details = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.personal_details;
                }
                if (__WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1]) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_login_details = res[1].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2]) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.please_enter_your_email_and_password_below_which_will_be_used_to_login_to_your_account_in_the_future = res[2].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3]) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3].response) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.marketing_opt_out = res[3].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[4]) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[4].response) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[4].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_created = res[4].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[5]) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[5].response) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[5].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.five_digit_pin = res[5].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[6]) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[6].response) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[6].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.registration_successful = res[6].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[7]) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[7].response) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[7].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.registered_successful = res[7].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[8]) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[8].response) && __WEBPACK_IMPORTED_MODULE_17__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[8].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.next_to_add_card = res[8].response.message;
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_13__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_13__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        __WEBPACK_IMPORTED_MODULE_18_rxjs_Observable__["Observable"].combineLatest(this.registerDataService.getContentFromRetreiveContent("personal-details"), this.registerDataService.getContentFromRetreiveContent("account-login-details"), this.registerDataService.getContentFromRetreiveContent("please-enter-your-email-and-password-below-which-will-be-used-to-login-to-your-account-in-the-future"), this.registerDataService.getContentFromRetreiveContent("marketing-opt-out"), this.registerDataService.getContentFromRetreiveContent("account-created"), this.registerDataService.getContentFromRetreiveContent("5-digit-pin"), this.registerDataService.getContentFromRetreiveContent("registration-successful"), this.registerDataService.getContentFromRetreiveContent("registered-successful"), this.registerDataService.getContentFromRetreiveContent("next-to-add-card")).subscribe(observer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["T" /* QueryList */])
    ], RegisterStep1Page.prototype, "textInputs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* Select */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["T" /* QueryList */])
    ], RegisterStep1Page.prototype, "selectInputs", void 0);
    RegisterStep1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-registerStep1',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep1\registerStep1.html"*/'\n<ion-content>\n  <ion-grid class="content-wrapper">\n   <ion-row>\n      <button (click)="navCtrl.setRoot(\'WelcomePage\', null, { animate: true, direction: \'back\' })" ion-button="button-bar" class="fake-back-btn">\n        <ion-icon class="padding-20" name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <img class="l2s-logo" src="assets/images/l2s-logo.png"/>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <p text-center class="padding-30 text-14">{{personal_details}}</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]="registerUserForm">\n          <ion-row class="m-b-20" >\n            <div class="select--wrapper" [ngClass]="dirtySelectValue()">\n              <label class="wrap">\n                  <select \n                      class="select-choose-value"\n                      formControlName="title"\n                      [ngClass]="{\'defautValue\': registerUserForm.get(\'title\').value === \'-1\'}"\n                      >\n                      <option [value]="-1">Title</option>\n                      <option *ngFor="let title of userTitle; index as i" [value]="title.text">{{ title.text }}</option>\n                  </select>\n              </label>\n            </div>\n            <ion-item-divider ion-item light no-lines class="error"\n              *ngIf="registerUserForm.get(\'title\').dirty && !registerUserForm.get(\'title\').valid">\n              <p>{{errorMessage(\'title\')}}</p>\n            </ion-item-divider>\n          </ion-row>\n\n          <ion-row class="m-b-20">\n            <ion-item>\n              <ion-label floating>First Name</ion-label>\n              <ion-input name="firstName" type="text"  formControlName="firstName"></ion-input>\n            </ion-item>\n            <ion-item-divider ion-item light no-lines class="error"\n              *ngIf="registerUserForm.get(\'firstName\').dirty && !registerUserForm.get(\'firstName\').valid">\n              <p>{{errorMessage(\'firstName\')}}</p>\n            </ion-item-divider>\n          </ion-row>\n\n          <ion-row class="m-b-20">\n            <ion-item>\n              <ion-label floating>Last Name</ion-label>\n              <ion-input name="lastName" type="text"  formControlName="lastName"></ion-input>\n            </ion-item>\n            <ion-item-divider ion-item light no-lines class="error"\n              *ngIf="registerUserForm.get(\'lastName\').dirty && !registerUserForm.get(\'lastName\').valid">\n              <p>{{errorMessage(\'lastName\')}}</p>\n            </ion-item-divider>\n          </ion-row>\n\n          <ion-row class="m-b-20">\n            <ion-col no-padding class="m-r-12">\n              <ion-item [ngClass]="{\'date-time-error\' : registerUserForm.get(\'dob\').dirty && !registerUserForm.get(\'dob\').valid}">\n                <ion-label floating>Date of Birth</ion-label>\n                <ion-datetime #datetime displayFormat="DD MMMM YYYY" pickerFormat="MMMM DD YYYY" min="{{datemin}}" max="{{datemax}}" formControlName="dob" required></ion-datetime>\n                <ion-icon item-right primary  (click)="iconClick(datetime)"><i class="fa fa-angle-down" aria-hidden="true"></i></ion-icon>\n              </ion-item>\n            </ion-col>\n            <div class="eighteen-plus m-t-3">18+</div>\n            <ion-item-divider ion-item light no-lines class="error m-r-45"\n              *ngIf="registerUserForm.get(\'dob\').dirty && !registerUserForm.get(\'dob\').valid">\n              <p>{{errorMessage(\'dob\')}}</p>\n            </ion-item-divider>\n          </ion-row>\n\n\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <p class="text-14">By clicking Next you are confirming that you agree to our <span (click)="retriveMessage(\'app.l2s.tcs\')"><b>terms and conditions</b></span></p>\n      <button ion-button large block class="m-t-10" [disabled]="!registerUserForm.valid" (click)="submitRegisterData()" color="primary">Next</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.setRoot(\'WelcomePage\', null, { animate: true, direction: \'back\' })"\n  id="RegisterStep1Page-back-button">\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep1\registerStep1.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__registerData_service__["a" /* RegisterDataService */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_11__framework_services_httpService_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__registerData_service__["a" /* RegisterDataService */]])
    ], RegisterStep1Page);
    return RegisterStep1Page;
}());

//# sourceMappingURL=registerStep1.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ageValidator;
/* unused harmony export AgeValidatorDirective */
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



function ageValidator() {
    return function (control) {
        var input = control.value;
        var age = getAge(input);
        if (isNaN(age) === true) {
            return { ageInvalid: __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_api_date_of_birth };
        }
        return ((age >= 18) && (age <= 99))
            ? null
            : { ageInvalid: __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_api_minimum_age };
    };
}
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
var AgeValidatorDirective = (function () {
    function AgeValidatorDirective() {
        this.validatorFn = ageValidator();
    }
    AgeValidatorDirective_1 = AgeValidatorDirective;
    AgeValidatorDirective.prototype.validate = function (control) {
        return this.validatorFn(control);
    };
    AgeValidatorDirective = AgeValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[isAge]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: AgeValidatorDirective_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], AgeValidatorDirective);
    return AgeValidatorDirective;
    var AgeValidatorDirective_1;
}());

//# sourceMappingURL=validator-age.directive.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = requireStandardDropdownListValidator;
/* unused harmony export RequireStandardDropdownListDirective */
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



function requireStandardDropdownListValidator(fieldName) {
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined' && input === "-1") {
            return { required: errorMessage(fieldName) };
        }
        return null;
    };
}
function errorMessage(fieldName) {
    return __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
}
var RequireStandardDropdownListDirective = (function () {
    function RequireStandardDropdownListDirective() {
        this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].nullValidator;
        this.valFn = requireStandardDropdownListValidator();
    }
    RequireStandardDropdownListDirective_1 = RequireStandardDropdownListDirective;
    RequireStandardDropdownListDirective.prototype.ngOnChanges = function (changes) {
        var change = changes['requireDropdownList'];
        if (change) {
            var val = change.currentValue;
            this.valFn = requireStandardDropdownListValidator(val);
        }
        else {
            this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].nullValidator;
        }
    };
    RequireStandardDropdownListDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], RequireStandardDropdownListDirective.prototype, "requireStandardDropdownList", void 0);
    RequireStandardDropdownListDirective = RequireStandardDropdownListDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[requireStandardDropdownList]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: RequireStandardDropdownListDirective_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RequireStandardDropdownListDirective);
    return RequireStandardDropdownListDirective;
    var RequireStandardDropdownListDirective_1;
}());

//# sourceMappingURL=validator-requiredStandardDropdownList.directive.js.map

/***/ })

});
//# sourceMappingURL=4.js.map