webpackJsonp([18],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeEmailPageModule", function() { return ChangeEmailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changeEmail__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangeEmailPageModule = (function () {
    function ChangeEmailPageModule() {
    }
    ChangeEmailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__changeEmail__["a" /* ChangeEmailPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changeEmail__["a" /* ChangeEmailPage */]), __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__changeEmail__["a" /* ChangeEmailPage */]]
        })
    ], ChangeEmailPageModule);
    return ChangeEmailPageModule;
}());

//# sourceMappingURL=changeEmail.module.js.map

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

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changeEmail_service__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_minlengthField_directive__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_emailMatch_directive__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_email_directive__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_login_authenticationDataSharing_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_login_logoutData_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_nav_service__ = __webpack_require__(369);
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

















var ChangeEmailPage = (function () {
    function ChangeEmailPage(formBuilder, routerManager, alertCtrl, logoutDataService, authService, navCtrl, navSvc, changeEmailService) {
        this.formBuilder = formBuilder;
        this.routerManager = routerManager;
        this.alertCtrl = alertCtrl;
        this.logoutDataService = logoutDataService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navSvc = navSvc;
        this.changeEmailService = changeEmailService;
        this.model = {};
        this.current_email = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.current_email;
        this.formErrors = {
            'newEmail': '',
            'confirmNewEmail': '',
            'password': ''
        };
        this.model = {
            currentEmail: __WEBPACK_IMPORTED_MODULE_8__framework_login_authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail
        };
        this.buildForm();
    }
    ChangeEmailPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_14_jquery___default()('.app-root').addClass('not-show-tab');
        if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
        }
    };
    ChangeEmailPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_14_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    ChangeEmailPage.prototype.buildForm = function () {
        var _this = this;
        this.changeEmailForm = this.formBuilder.group({
            'newEmail': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_required_directive__["a" /* requireValidator */])('newEmail'),
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_minlengthField_directive__["a" /* minlengthFieldValidator */])(6, 'Email'),
                    Object(__WEBPACK_IMPORTED_MODULE_15__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(81, 'Email'),
                    Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_email_directive__["a" /* emailValidator */])()
                ]],
            'confirmNewEmail': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_required_directive__["a" /* requireValidator */])('confirmNewEmail'),
                    Object(__WEBPACK_IMPORTED_MODULE_15__framework_validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(81, 'Email'),
                ]],
            'password': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_required_directive__["a" /* requireValidator */])('password')
                ]]
        }, {
            validator: {
                validators: Object(__WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_emailMatch_directive__["a" /* checkMatchWith */])('newEmail', 'confirmNewEmail', 'Email', 'confirmation email'),
                updateOn: 'blur'
            }
        });
        this.changeEmailForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    ChangeEmailPage.prototype.errorMessage = function (path) {
        var control = this.changeEmailForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'newEmail' || path === 'confirmNewEmail' || path === 'password') {
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
            }
        }
    };
    ChangeEmailPage.prototype.updateEmailAddress = function () {
        var _this = this;
        var emailInformation = {
            "newEmailAddress": this.changeEmailForm.value.newEmail,
            "password": this.changeEmailForm.value.password
        };
        if (this.changeEmailForm.valid) {
            __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    if (!res.ok) {
                        return;
                    }
                    _this.logoutDataService.logout()
                        .subscribe(function (res) {
                    });
                    _this.authService.Logout();
                    _this.navSvc.getRootNav().setRoot('LoginPage');
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                },
                complete: function () {
                    __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.changeEmailService
                .changeEmail(emailInformation)
                .subscribe(observer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], ChangeEmailPage.prototype, "textInputs", void 0);
    ChangeEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changeEmail',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AccountManagement\changeEmail\changeEmail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Change Email\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <ion-col>\n        <form [formGroup]="changeEmailForm">\n          <ion-row class="p-t-30 p-b-30" text-center>\n            <p class="text-14" text-center>{{current_email}}</p>\n            <p class="text-14 openSans-bold" text-center>{{this.model.currentEmail}}</p>\n          </ion-row>\n\n          <ion-row class="p-b-20">\n            <ion-item class="l2s-input-md">\n              <ion-label floating>New email address</ion-label>\n              <ion-input deny-copy name="newEmail"  formControlName="newEmail"></ion-input>\n            </ion-item>\n            <ion-item-divider ion-item light no-lines class="error"\n                              *ngIf="changeEmailForm.get(\'newEmail\').dirty && !changeEmailForm.get(\'newEmail\').valid">\n              <p>{{errorMessage(\'newEmail\')}}</p>\n            </ion-item-divider>\n          </ion-row>\n\n          <ion-row class="p-b-20">\n            <ion-item class="l2s-input-md">\n              <ion-label floating>Confirm new email address</ion-label>\n              <ion-input deny-copy name="confirmNewEmail" formControlName="confirmNewEmail"></ion-input>\n            </ion-item>\n\n            <ion-item-divider ion-item light no-lines class="error"\n                              *ngIf="changeEmailForm.get(\'confirmNewEmail\').dirty && !changeEmailForm.get(\'confirmNewEmail\').valid">\n              <p>{{errorMessage(\'confirmNewEmail\')}}</p>\n            </ion-item-divider>\n\n          </ion-row>\n\n          <ion-row class="p-b-20">\n            <ion-item class="l2s-input-md">\n              <ion-label floating>Password</ion-label>\n              <ion-input name="password" type="password" formControlName="password"></ion-input>\n            </ion-item>\n            <ion-item-divider ion-item light no-lines class="error"\n                              *ngIf="changeEmailForm.get(\'password\').dirty && !changeEmailForm.get(\'password\').valid">\n              <p>{{errorMessage(\'password\')}}</p>\n            </ion-item-divider>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="footer-wrapper">\n      <button ion-button large block [disabled]="!changeEmailForm.valid" (click)="updateEmailAddress()">Update email address</button>\n  </ion-grid>\n</ion-content>\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="ChangeEmailPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AccountManagement\changeEmail\changeEmail.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__changeEmail_service__["a" /* ChangeEmailService */],
                __WEBPACK_IMPORTED_MODULE_11__framework_login_logoutData_service__["a" /* LogoutDataService */],
                __WEBPACK_IMPORTED_MODULE_12__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_10__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_11__framework_login_logoutData_service__["a" /* LogoutDataService */],
            __WEBPACK_IMPORTED_MODULE_12__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_13__shared_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_3__changeEmail_service__["a" /* ChangeEmailService */]])
    ], ChangeEmailPage);
    return ChangeEmailPage;
}());

//# sourceMappingURL=changeEmail.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeEmailService; });
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


var ChangeEmailService = (function () {
    function ChangeEmailService(http) {
        this.http = http;
    }
    ChangeEmailService.prototype.changeEmail = function (email) {
        return this.http.put("account/email", email);
    };
    ChangeEmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], ChangeEmailService);
    return ChangeEmailService;
}());

//# sourceMappingURL=changeEmail.service.js.map

/***/ })

});
//# sourceMappingURL=18.js.map