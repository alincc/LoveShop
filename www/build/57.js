webpackJsonp([57],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePINPageModule", function() { return UpdatePINPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updatePIN__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_ptt_pin_ptt_pin_module__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UpdatePINPageModule = (function () {
    function UpdatePINPageModule() {
    }
    UpdatePINPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__updatePIN__["a" /* UpdatePINPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__updatePIN__["a" /* UpdatePINPage */]),
                __WEBPACK_IMPORTED_MODULE_3__libs_ptt_pin_ptt_pin_module__["a" /* PttPinModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__updatePIN__["a" /* UpdatePINPage */]]
        })
    ], UpdatePINPageModule);
    return UpdatePINPageModule;
}());

//# sourceMappingURL=updatePIN.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkMatchWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appConfig__ = __webpack_require__(43);

var PIN_and_confirm_do_not_match = __WEBPACK_IMPORTED_MODULE_0__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_and_confirm_do_not_match;
function checkMatchWith(fields) {
    return function (group) {
        fields.forEach(function (item) {
            var fieldInput = group.controls[item.Field], confirmationInput = group.controls[item.ConfirmField];
            if (fieldInput.value !== confirmationInput.value) {
                return confirmationInput.setErrors({ notEquivalent: errorMessage() });
            }
            else {
                if (fieldInput.value === '' && confirmationInput.value === '') {
                    return fieldInput.setErrors({ notEquivalent: 'error' });
                }
                return confirmationInput.setErrors(null);
            }
        });
    };
}
function errorMessage() {
    return PIN_and_confirm_do_not_match;
}
//# sourceMappingURL=validator-pinCodeMatch.directive.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePINPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__updatePIN_service__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_pinCodeMatch_directive__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_pinCodeService_pinCode_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_login_authenticationDataSharing_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var UpdatePINPage = (function () {
    function UpdatePINPage(formBuilder, alertCtrl, routeManager, updatePINService, navCtrl, touchId) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.routeManager = routeManager;
        this.updatePINService = updatePINService;
        this.navCtrl = navCtrl;
        this.touchId = touchId;
        this.model = {};
        this.confirm_pin = __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.confirm_pin;
        this.PIN_5_digit = __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_5_digit;
        this.PIN_enter_5_digit = __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_enter_5_digit;
        this.PIN_and_confirm_do_not_match = __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_and_confirm_do_not_match;
        this.updateSuccessfullMSG = '';
        this.formErrors = {
            'pin1': '',
            'pin2': '',
            'pin3': '',
            'pin4': '',
            'pin5': '',
            'pinConfirm1': '',
            'pinConfirm2': '',
            'pinConfirm3': '',
            'pinConfirm4': '',
            'pinConfirm5': ''
        };
        this.buildForm();
    }
    UpdatePINPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_12_jquery___default()('.app-root').addClass('not-show-tab');
        this.getContentSuccessfull();
    };
    UpdatePINPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_12_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    UpdatePINPage.prototype.updatePINCode = function () {
        if (this.updatePINForm.valid) {
            __WEBPACK_IMPORTED_MODULE_6__framework_services_pinCodeService_pinCode_service__["a" /* PinCodeService */].getInstance()
                .savePinCode(__WEBPACK_IMPORTED_MODULE_7__framework_login_authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail, this.updatePINForm.value);
            __WEBPACK_IMPORTED_MODULE_10__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(this.updateSuccessfullMSG);
            this.navCtrl.setRoot('SettingsPage');
        }
    };
    UpdatePINPage.prototype.getContentSuccessfull = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_13__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.updateSuccessfullMSG = body.message;
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_13__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_13__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.updatePINService
            .getContentFromRetreiveContent('pin-updated')
            .subscribe(observer);
    };
    UpdatePINPage.prototype.updateInputOnKey = function (event, target) {
        if (event.key !== 'Backspace' && target && typeof target.setFocus === 'function') {
            if (typeof event.stopImmediatePropagation === 'function') {
                event.stopPropagation();
            }
            target.setFocus();
        }
    };
    UpdatePINPage.prototype.buildForm = function () {
        var _this = this;
        this.updatePINForm = this.formBuilder.group({
            'pin1': ['',
                [Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin1'),
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin2': ['',
                [Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin2'),
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin3': ['',
                [Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin3'),
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin4': ['',
                [Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin4'),
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin5': ['',
                [Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin5'),
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pinConfirm1': [''],
            'pinConfirm2': [''],
            'pinConfirm3': [''],
            'pinConfirm4': [''],
            'pinConfirm5': ['']
        }, {
            validator: {
                validators: Object(__WEBPACK_IMPORTED_MODULE_5__framework_validations_validator_pinCodeMatch_directive__["a" /* checkMatchWith */])([{ Field: 'pin1', ConfirmField: 'pinConfirm1' },
                    { Field: 'pin2', ConfirmField: 'pinConfirm2' },
                    { Field: 'pin3', ConfirmField: 'pinConfirm3' },
                    { Field: 'pin4', ConfirmField: 'pinConfirm4' },
                    { Field: 'pin5', ConfirmField: 'pinConfirm5' }]),
                updateOn: 'blur'
            }
        });
        this.updatePINForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    UpdatePINPage.prototype.patchValue = function (controlName, value, updateState) {
        if (updateState === void 0) { updateState = false; }
        var control = this.updatePINForm.get(controlName);
        control.patchValue(value);
        if (updateState) {
            control.markAsTouched();
            control.markAsDirty();
        }
    };
    UpdatePINPage.prototype.onPinChange = function (pin) {
        var pin1 = pin.substr(0, 1);
        var pin2 = pin.substr(1, 1);
        var pin3 = pin.substr(2, 1);
        var pin4 = pin.substr(3, 1);
        var pin5 = pin.substr(4, 1);
        this.patchValue('pin1', pin1, true);
        if (pin.length > 1) {
            this.patchValue('pin2', pin2, true);
        }
        else {
            this.patchValue('pin2', pin2);
        }
        if (pin.length > 2) {
            this.patchValue('pin3', pin3, true);
        }
        else {
            this.patchValue('pin3', pin3);
        }
        if (pin.length > 3) {
            this.patchValue('pin4', pin4, true);
        }
        else {
            this.patchValue('pin4', pin4);
        }
        if (pin.length > 4) {
            this.patchValue('pin5', pin5, true);
        }
        else {
            this.patchValue('pin5', pin5);
        }
    };
    UpdatePINPage.prototype.onConfirmPinChange = function (pin) {
        var pin1 = pin.substr(0, 1);
        var pin2 = pin.substr(1, 1);
        var pin3 = pin.substr(2, 1);
        var pin4 = pin.substr(3, 1);
        var pin5 = pin.substr(4, 1);
        this.patchValue('pinConfirm1', pin1, true);
        if (pin.length > 1) {
            this.patchValue('pinConfirm2', pin2, true);
        }
        else {
            this.patchValue('pinConfirm2', pin2);
        }
        if (pin.length > 2) {
            this.patchValue('pinConfirm3', pin3, true);
        }
        else {
            this.patchValue('pinConfirm3', pin3);
        }
        if (pin.length > 3) {
            this.patchValue('pinConfirm4', pin4, true);
        }
        else {
            this.patchValue('pinConfirm4', pin4);
        }
        if (pin.length > 4) {
            this.patchValue('pinConfirm5', pin5, true);
        }
        else {
            this.patchValue('pinConfirm5', pin5);
        }
    };
    UpdatePINPage.prototype.errorMessage = function (path) {
        var control = this.updatePINForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'pin1' || path === 'pin2' || path === 'pin3' || path === 'pin4' || path === 'pin5' || path === 'pinConfirm1') {
            if (control.hasError('required')) {
                return control.getError('required');
            }
            else {
                if (control.hasError('minlengthField')) {
                    return control.getError('minlengthField');
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
    ], UpdatePINPage.prototype, "textInputs", void 0);
    UpdatePINPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-updatePIN',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AccountManagement\updatePIN\updatePIN.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Change PIN</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class="content-wrapper">\n        <form [formGroup]="updatePINForm" class="padding-20" autocomplete="off">\n            <ion-row class="p-t-40 p-b-30">\n                <p class="text-16" text-center>{{PIN_enter_5_digit}}</p>\n            </ion-row>\n            <ion-row class="p-b-40">\n                <ptt-pin (pinChange)="onPinChange($event)"></ptt-pin>\n            </ion-row>\n            <p text-left class="m-b-5 text-16">{{confirm_pin}}</p>\n            <ion-row class="m-b-15">\n                <ptt-pin (pinChange)="onConfirmPinChange($event)"></ptt-pin>\n            </ion-row>\n    \n            <ion-item-divider ion-item light no-lines class="error"\n                              *ngIf="(updatePINForm.get(\'pin1\').dirty && !updatePINForm.get(\'pin1\').valid) ||\n                               (updatePINForm.get(\'pin2\').dirty && !updatePINForm.get(\'pin2\').valid) ||\n                               (updatePINForm.get(\'pin3\').dirty && !updatePINForm.get(\'pin3\').valid) ||\n                               (updatePINForm.get(\'pin4\').dirty && !updatePINForm.get(\'pin4\').valid) ||\n                               (updatePINForm.get(\'pin5\').dirty && !updatePINForm.get(\'pin5\').valid)\n                        ">\n               <p>{{PIN_5_digit}}</p>\n            </ion-item-divider>\n            <ion-item-divider ion-item light no-lines class="error"\n                              *ngIf="(updatePINForm.get(\'pin1\').dirty &&\n                                updatePINForm.get(\'pin2\').dirty &&\n                                updatePINForm.get(\'pin3\').dirty &&\n                                updatePINForm.get(\'pin4\').dirty &&\n                                updatePINForm.get(\'pin5\').dirty &&\n                                updatePINForm.get(\'pinConfirm1\').dirty &&\n                                updatePINForm.get(\'pinConfirm2\').dirty &&\n                                updatePINForm.get(\'pinConfirm3\').dirty &&\n                                updatePINForm.get(\'pinConfirm4\').dirty &&\n                                updatePINForm.get(\'pinConfirm5\').dirty) &&\n\n                               (!updatePINForm.get(\'pinConfirm1\').valid ||\n                               !updatePINForm.get(\'pinConfirm2\').valid ||\n                               !updatePINForm.get(\'pinConfirm3\').valid ||\n                               !updatePINForm.get(\'pinConfirm4\').valid ||\n                               !updatePINForm.get(\'pinConfirm5\').valid)\n                        ">\n                <p>{{PIN_and_confirm_do_not_match}}</p>\n            </ion-item-divider>\n            \n        </form>\n    </ion-grid>\n    <ion-row class="footer-wrapper">\n        <ion-col>\n            <button ion-button large block [disabled]="!updatePINForm.valid" (click)="updatePINCode()">UPDATE</button>\n        </ion-col>\n    </ion-row>\n</ion-content>\n\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="UpdatePINPage-back-button">\n</ion-row>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AccountManagement\updatePIN\updatePIN.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__updatePIN_service__["a" /* UpdatePINService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_4__updatePIN_service__["a" /* UpdatePINService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], UpdatePINPage);
    return UpdatePINPage;
}());

//# sourceMappingURL=updatePIN.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePINService; });
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


var UpdatePINService = (function () {
    function UpdatePINService(http) {
        this.http = http;
    }
    UpdatePINService.prototype.updatePIN = function () {
        return this.http.get("account/password-policy");
    };
    UpdatePINService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    UpdatePINService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], UpdatePINService);
    return UpdatePINService;
}());

//# sourceMappingURL=updatePIN.service.js.map

/***/ })

});
//# sourceMappingURL=57.js.map