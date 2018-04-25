webpackJsonp([6],{

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loginData_service__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_pinCodeService_pinCode_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__validations_validator_minlengthField_directive__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__validations_validator_email_directive__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__validations_validator_maxlengthField_directive__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__screens_CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__screens_CardManagement_cardDetails_yourCardDetails_contentMessage_service__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__screens_CardManagement_cardDetails_yourCardDetails_yourCardDetailsApiGateway__ = __webpack_require__(829);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var LoginPage = (function () {
    function LoginPage(formBuilder, authService, viewCtrl, navCtrl, routeManager, loginDataService, contentMessageService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.routeManager = routeManager;
        this.loginDataService = loginDataService;
        this.contentMessageService = contentMessageService;
        this.model = {};
        this.focusInInput = false;
        this.ForgotPassword_en_properties = __WEBPACK_IMPORTED_MODULE_13__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.ForgotPassword_en_properties;
        this.formErrors = {
            'emailAddress': '',
            'password': '',
        };
        this.model = {
            emailAddress: '',
            password: '',
        };
        this.buildForm(this.model);
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.manageUserForm.valid) {
            __WEBPACK_IMPORTED_MODULE_7__services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    __WEBPACK_IMPORTED_MODULE_7__services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                    if (!res.ok) {
                        return;
                    }
                    var body = res.response;
                    var authInfo = {
                        token: body.accessToken,
                        accessTokenExpiry: body.accessTokenExpiry,
                        emailAddress: _this.manageUserForm.value.emailAddress
                    };
                    _this.authService.authenticated(authInfo);
                    __WEBPACK_IMPORTED_MODULE_11_jquery___default()('.app-root').removeClass('not-show-tab');
                    __WEBPACK_IMPORTED_MODULE_14__screens_CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().goToFromLogin = true;
                    if (__WEBPACK_IMPORTED_MODULE_8__services_pinCodeService_pinCode_service__["a" /* PinCodeService */].getInstance()
                        .needSetupPinCode(_this.manageUserForm.value.emailAddress) === true) {
                        _this.navCtrl.setRoot('SetupPINPage', { nextPage: 'TouchIDSettingFirstTimePage' });
                    }
                    else {
                        _this.navCtrl.setRoot('TabsPage', { showVerifyPIN: false });
                    }
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_7__services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.loginDataService
                .login(this.manageUserForm.value)
                .subscribe(observer);
        }
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.setBackButtonText('');
        this.contentMessageService.getContentMessage();
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this._unsubscribe();
    };
    LoginPage.prototype.buildForm = function (user) {
        var _this = this;
        this.manageUserForm = this.formBuilder.group({
            'emailAddress': [user.emailAddress, [
                    Object(__WEBPACK_IMPORTED_MODULE_6__validations_validator_required_directive__["a" /* requireValidator */])('emailAddress'),
                    Object(__WEBPACK_IMPORTED_MODULE_9__validations_validator_minlengthField_directive__["a" /* minlengthFieldValidator */])(6, 'Email'),
                    Object(__WEBPACK_IMPORTED_MODULE_12__validations_validator_maxlengthField_directive__["a" /* maxlengthFieldValidator */])(81, 'Email'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__validations_validator_email_directive__["a" /* emailValidator */])()
                ]],
            'password': [user.password, [
                    Object(__WEBPACK_IMPORTED_MODULE_6__validations_validator_required_directive__["a" /* requireValidator */])('password')
                ]]
        }, {
            validator: { updateOn: 'blur' }
        });
        this.manageUserForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    LoginPage.prototype.errorMessage = function (path) {
        var control = this.manageUserForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_13__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
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
            }
        }
    };
    LoginPage.prototype._unsubscribe = function () {
        if (this._loginSUb) {
            this._loginSUb.unsubscribe();
        }
    };
    LoginPage.prototype.focusIntoInput = function () {
        this.focusInInput = true;
    };
    LoginPage.prototype.focusOutInput = function () {
        this.focusInInput = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["T" /* QueryList */])
    ], LoginPage.prototype, "textInputs", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\framework\login\login.html"*/'<ion-content>\n  <ion-grid class="content-wrapper" [ngClass]="{\'inputFocusIn\': focusInInput }">\n    <ion-row>\n        <button (click)="navCtrl.setRoot(\'WelcomePage\', null, { animate: true, direction: \'back\' })" ion-button="button-bar" class="fake-back-btn">\n          <ion-icon name="ios-arrow-back"></ion-icon>\n        </button>\n      </ion-row>\n    <ion-row text-center class="p-t-20 p-b-20">\n      <ion-col>\n          <img class="l2s-logo" src="assets/images/l2s-logo.png"/>\n      </ion-col>\n    </ion-row>\n    <ion-row class="p-t-40">\n      <ion-col>\n        <div class="decs">Login to your account below</div>\n        <form [formGroup]="manageUserForm">\n          <ion-row class="m-b-20">\n            <ion-item>\n              <ion-label floating>Email Address</ion-label>\n              <ion-input [value]="model.emailAddress" formControlName="emailAddress"  (ionFocus)="focusIntoInput()"  (focusout)="focusOutInput()" type="text"></ion-input>\n            </ion-item>\n            <ion-item-divider ion-item light no-lines\n                              class="error"\n                              *ngIf="manageUserForm.get(\'emailAddress\').dirty\n                                && !manageUserForm.get(\'emailAddress\').valid">\n              <p>{{errorMessage(\'emailAddress\')}}</p>\n            </ion-item-divider>\n          </ion-row>\n\n\n          <ion-row>\n            <ion-item>\n              <ion-label floating>Password</ion-label>\n              <ion-input [value]="model.password" formControlName="password" type="password" clearOnEdit="true"  (ionFocus)="focusIntoInput()" (focusout)="focusOutInput()"></ion-input>\n            </ion-item>\n            <ion-item-divider ion-item light no-lines\n                              class="error"\n                              *ngIf="manageUserForm.get(\'password\').dirty\n                                && !manageUserForm.get(\'password\').valid">\n              <p>{{errorMessage(\'password\')}}</p>\n            </ion-item-divider>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <p class="text-link-item" text-center>\n                <a (click)="navCtrl.push(\'ForgotPasswordPage\')">{{ForgotPassword_en_properties}}</a>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <button (click)="login()" [disabled]="!manageUserForm || !manageUserForm.valid" ion-button large block>Login</button>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <div class="page-link">Not yet registered?</div>\n      <button ion-button large block outline (click)="navCtrl.push(\'RegisterStep1Page\')" class="l2s-btn l2s-btn--outline">Register</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.setRoot(\'WelcomePage\', null, { animate: true, direction: \'back\' })"\n  id="LoginPage-back-button">\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\framework\login\login.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__loginData_service__["a" /* LoginDataService */],
                __WEBPACK_IMPORTED_MODULE_15__screens_CardManagement_cardDetails_yourCardDetails_contentMessage_service__["a" /* ContentMessageService */],
                __WEBPACK_IMPORTED_MODULE_16__screens_CardManagement_cardDetails_yourCardDetails_yourCardDetailsApiGateway__["a" /* YourCardDetailsApiGateway */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1__loginData_service__["a" /* LoginDataService */],
            __WEBPACK_IMPORTED_MODULE_15__screens_CardManagement_cardDetails_yourCardDetails_contentMessage_service__["a" /* ContentMessageService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_httpService_http_service__ = __webpack_require__(161);
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


var LoginDataService = (function () {
    function LoginDataService(http) {
        this.http = http;
    }
    LoginDataService.prototype.login = function (dataLogin) {
        return this.http.post('account/authenticate', dataLogin);
    };
    LoginDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_httpService_http_service__["a" /* HttpService */]])
    ], LoginDataService);
    return LoginDataService;
}());

//# sourceMappingURL=loginData.service.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(1029);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

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

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourCardDetailsApiGateway; });
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


var YourCardDetailsApiGateway = (function () {
    function YourCardDetailsApiGateway(http) {
        this.http = http;
    }
    YourCardDetailsApiGateway.prototype.getListCards = function () {
        return this.http.get("card");
    };
    YourCardDetailsApiGateway.prototype.getMessageByCode = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    YourCardDetailsApiGateway = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], YourCardDetailsApiGateway);
    return YourCardDetailsApiGateway;
}());

//# sourceMappingURL=yourCardDetailsApiGateway.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentMessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__yourCardDetailsApiGateway__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContentMessageService = (function () {
    function ContentMessageService(yourCardDetailsApiGateway) {
        this.yourCardDetailsApiGateway = yourCardDetailsApiGateway;
    }
    ContentMessageService.prototype.getContentMessage = function () {
        __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                var msg_code = [
                    'cardCsc_required',
                    'cardCsc_less_than_min',
                    'cardCsc_invalid_characters',
                    'confirm_removal',
                    'wallet_remove_card_message',
                    'use_fingerprint_not_PIN',
                    'use_same_finger',
                    'changing_PIN',
                    'park_api_enter_userid_password_to_change_pin',
                    'current_email',
                    'basket_form_no_products_basket',
                    'basket_form_checkout_current_product',
                    'basket_form_no_card_available',
                    'add_card_add_new_card',
                    'add_card_use_saved_card',
                    'order_datacash_payment_capture_default_cardNumber_label',
                    'order_datacash_payment_capture_default_label_save_card',
                    'order_confirmation_default_p_title',
                    'order_confirmation_default_p_strapline',
                    'order_confirmation_default_confirmation_SMS',
                    'purchasemastercard_form_label_card_details',
                    'order_confirmation_card_tfoot',
                    'empty_top_up_card_later',
                    // 'suspend_card_portlet_suspend_card',
                    'remove_card_confirm'
                ];
                for (var i = 0; i < msg_code.length; i++) {
                    if (__WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i]) && __WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i].response) && __WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i].response.message)) {
                        var mg_item_code = msg_code[i];
                        __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage[mg_item_code] = res[i].response.message;
                    }
                }
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].combineLatest(this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.error.cardCsc-required"), this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.error.cardCsc-less-than-min"), this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.error.cardCsc-invalid-characters"), this.yourCardDetailsApiGateway.getMessageByCode("confirm-removal"), this.yourCardDetailsApiGateway.getMessageByCode("wallet.remove-card.message"), this.yourCardDetailsApiGateway.getMessageByCode("use-fingerprint-not-PIN"), this.yourCardDetailsApiGateway.getMessageByCode("use-same-finger"), this.yourCardDetailsApiGateway.getMessageByCode("changing-PIN"), this.yourCardDetailsApiGateway.getMessageByCode("park-api.enter-userid-password-to-change-pin"), this.yourCardDetailsApiGateway.getMessageByCode("current-email"), this.yourCardDetailsApiGateway.getMessageByCode("basket.form.no-products-basket"), this.yourCardDetailsApiGateway.getMessageByCode("basket.form.checkout-current-product"), this.yourCardDetailsApiGateway.getMessageByCode("basket.form.no-card-available"), this.yourCardDetailsApiGateway.getMessageByCode("add-card.add-new-card"), this.yourCardDetailsApiGateway.getMessageByCode("add-card.use-saved-card"), this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.cardNumber.label"), this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.label.save-card"), this.yourCardDetailsApiGateway.getMessageByCode("order.confirmation.default.p-title"), this.yourCardDetailsApiGateway.getMessageByCode("order.confirmation.default.p-strapline"), this.yourCardDetailsApiGateway.getMessageByCode("order.confirmation.default.confirmation-SMS"), this.yourCardDetailsApiGateway.getMessageByCode("purchasemastercard.form.label.card-details"), this.yourCardDetailsApiGateway.getMessageByCode("order-confirmation.card.tfoot"), this.yourCardDetailsApiGateway.getMessageByCode("empty-top-up-card-later"), 
        // this.yourCardDetailsApiGateway.getMessageByCode("to_usnuspend"),
        // this.yourCardDetailsApiGateway.getMessageByCode("suspend-card-portlet-suspend-card"),
        this.yourCardDetailsApiGateway.getMessageByCode("remove-card-confirm")).subscribe(observer);
    };
    ContentMessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__yourCardDetailsApiGateway__["a" /* YourCardDetailsApiGateway */]])
    ], ContentMessageService);
    return ContentMessageService;
}());

//# sourceMappingURL=contentMessage.service.js.map

/***/ })

});
//# sourceMappingURL=6.js.map