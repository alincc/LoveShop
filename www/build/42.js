webpackJsonp([42],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changePassword__ = __webpack_require__(852);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePasswordPageModule = (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__changePassword__["a" /* ChangePasswordPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changePassword__["a" /* ChangePasswordPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__changePassword__["a" /* ChangePasswordPage */]]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=changePassword.module.js.map

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

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__changePassword_service__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_passwordMatch_directive__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_password_directive__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_login_logoutData_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ChangePasswordPage = (function () {
    function ChangePasswordPage(formBuilder, routeManager, alertCtrl, changePasswordService, navCtrl) {
        this.formBuilder = formBuilder;
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.changePasswordService = changePasswordService;
        this.navCtrl = navCtrl;
        this.model = {};
        this.formErrors = {
            'oldPassword': '',
            'newPassword': '',
            'confirmNewPassword': ''
        };
        this.updateSuccessfullMSG = '';
        this.isSendingRequest = false;
        this.model = {
            passwordPolicy: ''
        };
        this.buildForm();
        this.getMessageValidate();
        this.isSendingRequest = false;
    }
    ChangePasswordPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_13_jquery___default()('.app-root').addClass('not-show-tab');
        this.getContentSuccessfull();
    };
    ChangePasswordPage.prototype.buildForm = function () {
        var _this = this;
        this.changePasswordForm = this.formBuilder.group({
            'oldPassword': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('Password'),
                ]],
            'newPassword': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('Password'),
                    Object(__WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_password_directive__["a" /* passwordValidator */])()
                ]],
            'confirmNewPassword': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('Password'),
                ]]
        }, {
            validator: {
                validators: Object(__WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_passwordMatch_directive__["a" /* checkMatchWith */])('newPassword', 'confirmNewPassword'),
                updateOn: 'blur'
            }
        });
        this.changePasswordForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    ChangePasswordPage.prototype.getMessageValidate = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                if (res.response !== null) {
                    _this.model.passwordPolicy = res.response.passwordPolicyFriendlyMessage;
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.changePasswordService
            .getPasswordPolicy()
            .subscribe(observer);
    };
    ChangePasswordPage.prototype.updatePassword = function () {
        var _this = this;
        if (this.changePasswordForm.valid) {
            this.isSendingRequest = true;
            var passwordInfor = {
                "currentPassword": this.changePasswordForm.value.oldPassword,
                "newPassword": this.changePasswordForm.value.newPassword
            };
            __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                    if (!res.ok) {
                        return;
                    }
                    __WEBPACK_IMPORTED_MODULE_8__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(_this.updateSuccessfullMSG);
                    _this.navCtrl.pop();
                },
                error: function (error) {
                    _this.isSendingRequest = false;
                    __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.changePasswordService
                .changePassword(passwordInfor)
                .subscribe(observer);
        }
    };
    ChangePasswordPage.prototype.disableUpdateButton = function () {
        return !this.changePasswordForm.valid || this.isSendingRequest;
    };
    ChangePasswordPage.prototype.getContentSuccessfull = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.updateSuccessfullMSG = body.message;
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.changePasswordService
            .getContentFromRetreiveContent('password-updated')
            .subscribe(observer);
    };
    ChangePasswordPage.prototype.errorMessage = function (path) {
        var control = this.changePasswordForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'oldPassword' || path === 'newPassword' || path === 'confirmNewPassword') {
            if (control.hasError('required')) {
                return control.getError('required');
            }
            else {
                if (control.hasError('passwordInvalid')) {
                    return control.getError('passwordInvalid');
                }
                if (control.hasError('notEquivalent')) {
                    return control.getError('notEquivalent');
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], ChangePasswordPage.prototype, "textInputs", void 0);
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changePassword',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AccountManagement\changePassword\changePassword.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Change Password\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper p-t-20">\n    <ion-row>\n      <ion-col>\n        <form [formGroup]="changePasswordForm">\n          <ion-row class="m-b-15">\n            <ion-item>\n              <ion-label floating>Old Password</ion-label>\n              <ion-input name="oldPassword" type="password" formControlName="oldPassword"></ion-input>\n            </ion-item>\n            <ion-item-divider ion-item light no-lines class="error"\n                              *ngIf="changePasswordForm.get(\'oldPassword\').dirty && !changePasswordForm.get(\'oldPassword\').valid">\n              <p>{{errorMessage(\'oldPassword\')}}</p>\n            </ion-item-divider>\n          </ion-row>\n\n          <ion-row class="m-b-15">\n            <ion-item>\n              <ion-label floating>New Password</ion-label>\n              <ion-input name="newPassword" type="password" formControlName="newPassword"></ion-input>\n            </ion-item>\n\n            <ion-item-divider ion-item light no-lines class="error"\n                              *ngIf="changePasswordForm.get(\'newPassword\').dirty && !changePasswordForm.get(\'newPassword\').valid">\n              <p>{{errorMessage(\'newPassword\')}}</p>\n            </ion-item-divider>\n          </ion-row>\n\n          <ion-row class="m-b-15">\n            <ion-item>\n              <ion-label floating>Confirm New Password</ion-label>\n              <ion-input name="confirmNewPassword" type="password" formControlName="confirmNewPassword"></ion-input>\n            </ion-item>\n            <ion-item-divider ion-item light no-lines class="error"\n                              *ngIf="changePasswordForm.get(\'confirmNewPassword\').dirty && !changePasswordForm.get(\'confirmNewPassword\').valid">\n              <p>{{errorMessage(\'confirmNewPassword\')}}</p>\n            </ion-item-divider>\n          </ion-row>\n\n           <ion-row class="information-panel m-b-35" *ngIf="this.model.passwordPolicy.length > 0">\n            <ion-item class="p-l-0 p-r-0">\n              <div class="text-14"  [innerHTML]="this.model.passwordPolicy">\n              </div>\n            </ion-item>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="footer-wrapper">\n    <ion-row>\n      <ion-col>\n          <button ion-button large block [disabled]="disableUpdateButton()" (click)="updatePassword()">Save</button>          \n      </ion-col>\n    </ion-row> \n  </ion-grid>\n</ion-content>\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="ChangePasswordPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AccountManagement\changePassword\changePassword.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__changePassword_service__["a" /* ChangePasswordService */],
                __WEBPACK_IMPORTED_MODULE_10__framework_login_logoutData_service__["a" /* LogoutDataService */],
                __WEBPACK_IMPORTED_MODULE_11__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__changePassword_service__["a" /* ChangePasswordService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=changePassword.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordService; });
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


var ChangePasswordService = (function () {
    function ChangePasswordService(http) {
        this.http = http;
    }
    ChangePasswordService.prototype.getPasswordPolicy = function () {
        return this.http.get("account/password-policy");
    };
    ChangePasswordService.prototype.changePassword = function (password) {
        return this.http.put("account/password", password);
    };
    ChangePasswordService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    ChangePasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], ChangePasswordService);
    return ChangePasswordService;
}());

//# sourceMappingURL=changePassword.service.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkMatchWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appConfig__ = __webpack_require__(43);

function checkMatchWith(field, confirmField) {
    return function (group) {
        var fieldInput = group.controls[field], confirmationInput = group.controls[confirmField];
        if (fieldInput.value !== confirmationInput.value) {
            return confirmationInput.setErrors({ notEquivalent: errorMessage() });
        }
        else {
            return confirmationInput.setErrors(null);
        }
    };
}
function errorMessage() {
    return __WEBPACK_IMPORTED_MODULE_0__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_api_password_no_match;
}
//# sourceMappingURL=validator-passwordMatch.directive.js.map

/***/ })

});
//# sourceMappingURL=42.js.map