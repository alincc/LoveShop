webpackJsonp([12],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountPageModule", function() { return EditAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editAccount__ = __webpack_require__(858);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditAccountPageModule = (function () {
    function EditAccountPageModule() {
    }
    EditAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__editAccount__["a" /* EditAccountPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editAccount__["a" /* EditAccountPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__editAccount__["a" /* EditAccountPage */]]
        })
    ], EditAccountPageModule);
    return EditAccountPageModule;
}());

//# sourceMappingURL=editAccount.module.js.map

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

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editData_service__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_minlength_directive__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_containsCharacters_directive__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_phone_directive__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_validations_validator_maxlengthField_directive__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__framework_validations_validator_minlengthField_directive__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__framework_services_utilities_utilities__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var EditAccountPage = (function () {
    function EditAccountPage(formBuilder, navCtrl, routeManager, alertCtrl, editDataService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.editDataService = editDataService;
        this.enter_postcode_or_search_for_an_address = __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.enter_postcode_or_search_for_an_address;
        this.enter_address_manually = __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.enter_address_manually;
        this.dob = '';
        this.showContent = false;
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
        this.countryLists = [
            {
                countryId: "UK",
                countryName: "United Kingdom"
            }
        ];
        this.isShowAddress = true;
        this.suggestSearch$ = new __WEBPACK_IMPORTED_MODULE_15_rxjs_Subject__["Subject"]();
        this.showList = false;
        this.model = {
            title: '',
            firstName: '',
            lastName: '',
            addressLine1: '',
            addressLine2: '',
            dob: '',
            county: '',
            postcode: '',
            town: '',
            country: '',
            telephoneNumber: ''
        };
        this.updateSuccessFullMSG = '';
        this.formErrors = {
            'title': '',
            'firstName': '',
            'lastName': '',
            'addressLine1': '',
            'addressLine2': '',
            'postcode': '',
            'town': '',
            'county': '',
            'telephoneNumber': ''
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
    EditAccountPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_12_jquery___default()('.app-root').addClass('not-show-tab');
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            this.getUserDataDetails();
            this.getContentSuccessfull();
        }
    };
    EditAccountPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_12_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    EditAccountPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.searchSub = this.searchStream.subscribe(function (res) { return _this.responseHandler(res); });
    };
    EditAccountPage.prototype.ionViewDidLeave = function () {
        this.searchSub && this.searchSub.unsubscribe();
    };
    EditAccountPage.prototype.responseHandler = function (res) {
        var response = res.response, keywordPostcode = res.keywordPostcode;
        this.listAddressItems = response.Items || [];
        this.showList = true;
        if (this.listAddressItems.length === 1 && __WEBPACK_IMPORTED_MODULE_18__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.listAddressItems[0].Error)) {
            this.listAddressItems[0].Text = "No results found.";
        }
        if (this.listAddressItems.length <= 0) {
            this.listAddressItems.push({
                Text: "No results found."
            });
        }
    };
    EditAccountPage.prototype.getUserDataDetails = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                var formatPhoneNumber = body.telephoneNumbers;
                formatPhoneNumber = formatPhoneNumber.substr(formatPhoneNumber.indexOf(':') + 1, formatPhoneNumber.length);
                _this.dob = body.dob;
                var formatDOB = _this.formatDateStandard(body.dob);
                var datePipeEn = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */]('en-GB');
                formatDOB = datePipeEn.transform(formatDOB, 'dd MMMM yyyy');
                _this.model = {
                    title: body.title,
                    firstName: body.firstName,
                    lastName: body.lastName,
                    addressLine1: body.addressLine1,
                    addressLine2: body.addressLine2,
                    dob: formatDOB,
                    county: body.county,
                    postcode: body.postcode,
                    town: body.town,
                    country: body.country,
                    telephoneNumber: formatPhoneNumber
                };
                _this.showContent = true;
                _this.buildForm();
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.editDataService
            .getUserData()
            .subscribe(observer);
    };
    EditAccountPage.prototype.formatDateStandard = function (date) {
        var arrStrDate = date.split('/');
        return arrStrDate[2] + '-' + arrStrDate[1] + '-' + arrStrDate[0];
    };
    EditAccountPage.prototype.getContentSuccessfull = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.updateSuccessFullMSG = body.message;
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.editDataService
            .getContentFromRetreiveContent('personal-details-successfully-updated')
            .subscribe(observer);
    };
    EditAccountPage.prototype.updateUserDetails = function () {
        var _this = this;
        if (this.updateAccountForm.valid) {
            this.updateAccountForm.value.dob = this.dob;
            __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                    if (!res.ok) {
                        return;
                    }
                    __WEBPACK_IMPORTED_MODULE_6__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(_this.updateSuccessFullMSG);
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.editDataService
                .updateAccount(this.updateAccountForm.value)
                .subscribe(observer);
        }
    };
    EditAccountPage.prototype.buildForm = function () {
        var _this = this;
        this.updateAccountForm = this.formBuilder.group({
            'title': [this.model.title, [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('title')
                ]],
            'firstName': [this.model.firstName, [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('firstName'),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_minlength_directive__["a" /* minlengthValidator */])(2, 'First Name'),
                    Object(__WEBPACK_IMPORTED_MODULE_13__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(25, 'First Name'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_containsCharacters_directive__["c" /* containsOnlyLeterValidator */])('First Name')
                ]],
            'lastName': [this.model.lastName, [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('lastName'),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_minlength_directive__["a" /* minlengthValidator */])(2, 'Last Name'),
                    Object(__WEBPACK_IMPORTED_MODULE_13__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(25, 'Last Name'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_containsCharacters_directive__["c" /* containsOnlyLeterValidator */])('Last Name')
                ]],
            'addressLine1': [this.model.addressLine1, [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('addressLine1'),
                    Object(__WEBPACK_IMPORTED_MODULE_13__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(40, 'Address Line 1'),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_minlength_directive__["a" /* minlengthValidator */])(2, 'Address Line 1'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_containsCharacters_directive__["a" /* containsCharactersValidator */])('Address Line 1'),
                ]],
            'addressLine2': [this.model.addressLine2, [
                    Object(__WEBPACK_IMPORTED_MODULE_13__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(40, 'Address Line 2'),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_minlength_directive__["a" /* minlengthValidator */])(1, 'Address Line 2'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_containsCharacters_directive__["a" /* containsCharactersValidator */])('Address Line 2'),
                ]],
            'town': [this.model.town, [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('town'),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_minlength_directive__["a" /* minlengthValidator */])(1, 'Town'),
                    Object(__WEBPACK_IMPORTED_MODULE_13__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(40, 'Town'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_containsCharacters_directive__["a" /* containsCharactersValidator */])('Town'),
                ]],
            'county': [this.model.county, [
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_containsCharacters_directive__["a" /* containsCharactersValidator */])('County'),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_minlength_directive__["a" /* minlengthValidator */])(1, 'County'),
                    Object(__WEBPACK_IMPORTED_MODULE_13__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(40, 'County')
                ]],
            'postcode': [this.model.postcode, [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('postcode'),
                    Object(__WEBPACK_IMPORTED_MODULE_14__framework_validations_validator_minlengthField_directive__["b" /* minlengthFieldValidatorPostcode */])(1, 'Postcode'),
                    Object(__WEBPACK_IMPORTED_MODULE_13__framework_validations_validator_maxlengthField_directive__["e" /* maxlengthFieldValidatorPostcode */])(8, 'Postcode'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_containsCharacters_directive__["b" /* containsCharactersValidatorPostCode */])('Postcode')
                ]],
            'dob': [{ value: this.model.dob, disabled: true }],
            'country': [this.model.country],
            'telephoneNumber': [this.model.telephoneNumber, [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('telephoneNumber'),
                    Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_phone_directive__["a" /* phoneValidator */])(),
                ]]
        }, {
            validator: {
                updateOn: 'blur'
            }
        });
        this.updateAccountForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    EditAccountPage.prototype.errorMessage = function (path) {
        var control = this.updateAccountForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'title' ||
            path === 'firstName' ||
            path === 'lastName' ||
            path === 'addressLine1' ||
            path === 'addressLine2' ||
            path === 'county' ||
            path === 'postcode' ||
            path === 'telephoneNumber' ||
            path === 'town') {
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
    EditAccountPage.prototype.formatLocationAddress = function (item) {
        if (__WEBPACK_IMPORTED_MODULE_18__framework_services_utilities_utilities__["a" /* Utils */].lengthGreaterThan0(item.Description)) {
            return item.Text + " " + item.Description;
        }
        else {
            return item.Text;
        }
    };
    EditAccountPage.prototype.getItems = function (keywordPostcode, lastId) {
        if (lastId === void 0) { lastId = 'GBR|'; }
        // if the value is an empty string don't filter the items
        if (keywordPostcode && keywordPostcode.trim() != '' && keywordPostcode.trim().length > 2) {
            var url = 'https://services.postcodeanywhere.co.uk/CapturePlus/Interactive/Find/v2.10/json3.ws?'
                + 'Key=' + __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__["a" /* AppConfig */].Configuration.LocationService.PCA_KEY
                + '&Country=GBR'
                + '&SearchTerm=' + encodeURI(keywordPostcode)
                + '&LanguagePreference=EN'
                + '&LastId=' + encodeURI(lastId)
                + '&SearchFor=Everything'
                + '&MaxSuggestions=10'
                + '&MaxResults=';
            return this.editDataService
                .searchPostcodeAutoComplete(url);
        }
        else {
            // hide the results when the query is empty
            this.showList = false;
            return __WEBPACK_IMPORTED_MODULE_16_rxjs_Observable__["Observable"].of(null);
        }
    };
    EditAccountPage.prototype.pickupAddress = function (item) {
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
            + 'Key=' + __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__["a" /* AppConfig */].Configuration.LocationService.PCA_KEY
            + '&Id=' + item.Id;
        this.editDataService
            .lookUpAddress(url)
            .subscribe(function (response) {
            var addressItem = response.Items[0];
            if (addressItem && !addressItem.Error) {
                var model = {
                    addressLine1: addressItem.Line1,
                    addressLine2: addressItem.Line2,
                    town: addressItem.City,
                    county: addressItem.ProvinceName || addressItem.Province || '',
                    postcode: addressItem.PostalCode,
                    country: _this.countryLists[0].countryName,
                };
                _this.updateAccountForm.patchValue(model);
                _this.showList = false;
                _this.isShowAddress = true;
            }
        }, function () {
            __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], EditAccountPage.prototype, "textInputs", void 0);
    EditAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editAccount',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\editAccount\editAccount.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-center>\n            Account Details\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class="content-wrapper p-b-50" *ngIf="showContent">\n        <ion-row>\n            <ion-col>\n                <form [formGroup]="updateAccountForm">\n                    <ion-row>\n                        <ion-item class="input-has-value">\n                            <ion-label floating>Title*</ion-label>\n                            <ion-select name="title" formControlName="title" (ionChange)="showStyle = true">\n                                <ion-option *ngFor="let title of userTitle" value="{{ title.text }}">{{ title.text }}\n                                </ion-option>\n                            </ion-select>\n                            <ion-icon item-right primary>\n                                <i class="fa fa-angle-down" aria-hidden="true"></i>\n                            </ion-icon>\n                        </ion-item>\n                        <ion-item-divider ion-item light no-lines class="error"\n                                          *ngIf="updateAccountForm.get(\'title\').dirty && !updateAccountForm.get(\'title\').valid">\n                            <p>{{errorMessage(\'title\')}}</p>\n                        </ion-item-divider>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-item>\n                            <ion-label floating>First name*</ion-label>\n                            <ion-input name="firstName" type="text" formControlName="firstName"></ion-input>\n                        </ion-item>\n                        <ion-item-divider ion-item light no-lines class="error"\n                                          *ngIf="updateAccountForm.get(\'firstName\').dirty && !updateAccountForm.get(\'firstName\').valid">\n                            <p>{{errorMessage(\'firstName\')}}</p>\n                        </ion-item-divider>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-item>\n                            <ion-label floating>Last name*</ion-label>\n                            <ion-input name="surName" type="text" formControlName="lastName"></ion-input>\n                        </ion-item>\n                        <ion-item-divider ion-item light no-lines class="error"\n                                          *ngIf="updateAccountForm.get(\'lastName\').dirty && !updateAccountForm.get(\'lastName\').valid">\n                            <p>{{errorMessage(\'lastName\')}}</p>\n                        </ion-item-divider>\n                    </ion-row>\n\n\n                    <ion-row>\n                        <ion-col>\n                            <div class="divider--full"></div>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class="readonly--wrapper">\n                        <p>Date of Birth</p>\n                        <p class="text-16">{{model.dob}}</p>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-col>\n                            <div class="divider--full"></div>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class="address-label--wrapper">\n                        <ion-col col-6>\n                            <p text-left class="montserrat-regular text-16 title">Address</p>\n                        </ion-col>\n                        <ion-col col-6>\n                            <p text-right>* is mandatory</p>\n                        </ion-col>\n                        <p class="title montserrat-bold text-underline text-14 p-t-10" [hidden]="!isShowAddress" (click)="isShowAddress = !isShowAddress">Lookup postcode</p>\n                    </ion-row>\n                    <ion-row class="lookup-address" [hidden]="isShowAddress">\n                        <ion-col>\n                            <ion-item>\n                                <ion-label floating>{{enter_postcode_or_search_for_an_address}}</ion-label>\n                                <ion-input (input)="suggestSearch$.next($event.target.value)" placeholder=""></ion-input>\n                            </ion-item>\n                            <ion-list *ngIf="showList" class="suggestion-address">\n                                <ion-item *ngFor="let item of listAddressItems" (click)="pickupAddress(item)">\n                                    {{ formatLocationAddress(item) }}\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row [hidden]="isShowAddress" class="p-b-13 p-t-10">\n                        <ion-col>\n                            <p class="title montserrat-regular text-16" (click)="isShowAddress = !isShowAddress">{{enter_address_manually}}</p>\n                        </ion-col>\n                    </ion-row>\n                    <ng-container *ngIf="isShowAddress">\n                        <ion-row>\n                            <ion-item>\n                                <ion-label floating>Address Line 1*</ion-label>\n                                <ion-input name="addressLine1" type="text" formControlName="addressLine1"></ion-input>\n                            </ion-item>\n                            <ion-item-divider ion-item light no-lines class="error"\n                                              *ngIf="updateAccountForm.get(\'addressLine1\').dirty && !updateAccountForm.get(\'addressLine1\').valid">\n                                <p>{{errorMessage(\'addressLine1\')}}</p>\n                            </ion-item-divider>\n                        </ion-row>\n\n                        <ion-row>\n                            <ion-item>\n                                <ion-label floating>Address Line 2</ion-label>\n                                <ion-input name="addressLine2" type="text"  formControlName="addressLine2"></ion-input>\n                            </ion-item>\n                            <ion-item-divider ion-item light no-lines class="error"\n                                              *ngIf="updateAccountForm.get(\'addressLine2\').dirty && !updateAccountForm.get(\'addressLine2\').valid">\n                                <p>{{errorMessage(\'addressLine2\')}}</p>\n                            </ion-item-divider>\n                        </ion-row>\n                        <ion-row>\n                            <ion-item>\n                                <ion-label floating>Town*</ion-label>\n                                <ion-input name="town" type="text" formControlName="town"></ion-input>\n                            </ion-item>\n                            <ion-item-divider ion-item light no-lines class="error"\n                                              *ngIf="updateAccountForm.get(\'town\').dirty && !updateAccountForm.get(\'town\').valid">\n                                <p>{{errorMessage(\'town\')}}</p>\n                            </ion-item-divider>\n                        </ion-row>\n\n                        <ion-row>\n                            <ion-item>\n                                <ion-label floating>County</ion-label>\n                                <ion-input name="county" type="text"  formControlName="county"></ion-input>\n                            </ion-item>\n                            <ion-item-divider ion-item light no-lines class="error"\n                                              *ngIf="updateAccountForm.get(\'county\').dirty && !updateAccountForm.get(\'county\').valid">\n                                <p>{{errorMessage(\'county\')}}</p>\n                            </ion-item-divider>\n                        </ion-row>\n                        <ion-row>\n                            <ion-item>\n                                <ion-label floating>Postcode*</ion-label>\n                                <ion-input name="postcode" type="text" formControlName="postcode"></ion-input>\n                            </ion-item>\n                            <ion-item-divider ion-item light no-lines class="error"\n                                              *ngIf="updateAccountForm.get(\'postcode\').dirty && !updateAccountForm.get(\'postcode\').valid">\n                                <p>{{errorMessage(\'postcode\')}}</p>\n                            </ion-item-divider>\n                        </ion-row>\n\n                        <ion-row>\n                            <ion-item class="input-has-value">\n                                <ion-label floating>Country*</ion-label>\n                                <ion-select name="country" formControlName="country" disabled="true">\n                                    <ion-option *ngFor="let countryItem of countryLists"\n                                                value="{{ countryItem.countryName }}">\n                                        {{ countryItem.countryName }}\n                                    </ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-row>\n                    </ng-container>\n                    <ion-row>\n                        <ion-col>\n                            <div class="divider--full"></div>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-item class="telephoneNumber">\n                            <div class="border-divider border-color"></div>\n                            <ion-label floating>Telephone*</ion-label>\n                            <ion-input name="telephoneNumber" type="tel" formControlName="telephoneNumber"\n                                       placeholder=""></ion-input>\n                        </ion-item>\n                        <ion-item-divider ion-item light no-lines class="error"\n                                          *ngIf="updateAccountForm.get(\'telephoneNumber\').dirty && !updateAccountForm.get(\'telephoneNumber\').valid">\n                            <p>{{errorMessage(\'telephoneNumber\')}}</p>\n                        </ion-item-divider>\n                    </ion-row>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid class="footer-wrapper" *ngIf="showContent">\n        <button ion-button large block class="btn-update" [disabled]="!updateAccountForm.valid" (click)="updateUserDetails()">\n            UPDATE\n        </button>\n    </ion-grid>\n</ion-content>\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="EditAccountPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\editAccount\editAccount.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__editData_service__["a" /* EditAccountService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__editData_service__["a" /* EditAccountService */]])
    ], EditAccountPage);
    return EditAccountPage;
}());

//# sourceMappingURL=editAccount.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAccountService; });
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


var EditAccountService = (function () {
    function EditAccountService(http) {
        this.http = http;
    }
    EditAccountService.prototype.getUserData = function () {
        return this.http.get("account");
    };
    EditAccountService.prototype.updateAccount = function (userData) {
        return this.http.put("account", userData);
    };
    EditAccountService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    EditAccountService.prototype.searchPostcodeAutoComplete = function (url) {
        return this.http.getExternal(url);
    };
    EditAccountService.prototype.lookUpAddress = function (url) {
        return this.http.getExternal(url);
    };
    EditAccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], EditAccountService);
    return EditAccountService;
}());

//# sourceMappingURL=editData.service.js.map

/***/ })

});
//# sourceMappingURL=12.js.map