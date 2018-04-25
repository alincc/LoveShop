webpackJsonp([58],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupPINPageModule", function() { return SetupPINPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setupPIN__ = __webpack_require__(872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_ptt_pin_ptt_pin_module__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SetupPINPageModule = (function () {
    function SetupPINPageModule() {
    }
    SetupPINPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__setupPIN__["a" /* SetupPINPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setupPIN__["a" /* SetupPINPage */]),
                __WEBPACK_IMPORTED_MODULE_3__libs_ptt_pin_ptt_pin_module__["a" /* PttPinModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__setupPIN__["a" /* SetupPINPage */]]
        })
    ], SetupPINPageModule);
    return SetupPINPageModule;
}());

//# sourceMappingURL=setupPIN.module.js.map

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

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupPINPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setupPIN_service__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_pinCodeMatch_directive__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_pinCodeService_pinCode_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_login_authenticationDataSharing_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__verifyPIN_verifyPIN_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_jquery__);
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















var SetupPINPage = (function () {
    function SetupPINPage(formBuilder, alertCtrl, routeManager, setupPINService, navParams, navCtrl, touchId) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.routeManager = routeManager;
        this.setupPINService = setupPINService;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.touchId = touchId;
        this.model = {};
        this.finalPage = '';
        this.confirm_pin = __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.confirm_pin;
        this.PIN_5_digit = __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_5_digit;
        this.PIN_enter_5_digit = __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_enter_5_digit;
        this.PIN_and_confirm_do_not_match = __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_and_confirm_do_not_match;
        this.setup_PIN = __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.setup_PIN;
        this.five_digit_pin = __WEBPACK_IMPORTED_MODULE_14__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.five_digit_pin;
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
        this.nextPage = navParams.get('nextPage');
        this.buildForm();
    }
    SetupPINPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_13_jquery___default()('.app-root').addClass('not-show-tab');
    };
    SetupPINPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_13_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    SetupPINPage.prototype.setupPINCode = function () {
        var _this = this;
        if (this.setupPINForm.valid) {
            __WEBPACK_IMPORTED_MODULE_7__framework_services_pinCodeService_pinCode_service__["a" /* PinCodeService */].getInstance()
                .savePinCode(__WEBPACK_IMPORTED_MODULE_8__framework_login_authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail, this.setupPINForm.value);
            if (__WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__["a" /* Utils */].lengthGreaterThan0(this.nextPage)) {
                this.finalPage = this.navParams.get('finalPage');
                if (!this.finalPage || this.finalPage === '') {
                    this.finalPage = 'TabsPage';
                }
                if (this.nextPage === 'TouchIDSettingFirstTimePage') {
                    this.touchId.isAvailable()
                        .then(function (res) {
                        _this.navCtrl.setRoot(_this.nextPage, { nextPage: _this.finalPage });
                    }).catch(function (err) {
                        __WEBPACK_IMPORTED_MODULE_12__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().touchIDState = false;
                        _this.navCtrl.setRoot(_this.finalPage);
                    });
                }
                else {
                    this.navCtrl.setRoot(this.nextPage);
                }
            }
        }
    };
    SetupPINPage.prototype.patchValue = function (controlName, value, updateState) {
        if (updateState === void 0) { updateState = false; }
        var control = this.setupPINForm.get(controlName);
        control.patchValue(value);
        if (updateState) {
            control.markAsTouched();
            control.markAsDirty();
        }
    };
    SetupPINPage.prototype.onPinChange = function (pin) {
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
    SetupPINPage.prototype.onConfirmPinChange = function (pin) {
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
    SetupPINPage.prototype.updateInputOnKey = function (event, target) {
        if (event.key !== 'Backspace' && target && typeof target.setFocus === 'function') {
            if (typeof event.stopImmediatePropagation === 'function') {
                event.stopPropagation();
            }
            target.setFocus();
        }
    };
    SetupPINPage.prototype.buildForm = function () {
        var _this = this;
        this.setupPINForm = this.formBuilder.group({
            'pin1': ['',
                [Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin1'),
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin2': ['',
                [Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin2'),
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin3': ['',
                [Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin3'),
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin4': ['',
                [Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin4'),
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin5': ['',
                [Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin5'),
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pinConfirm1': [''],
            'pinConfirm2': [''],
            'pinConfirm3': [''],
            'pinConfirm4': [''],
            'pinConfirm5': ['']
        }, {
            validator: {
                validators: Object(__WEBPACK_IMPORTED_MODULE_6__framework_validations_validator_pinCodeMatch_directive__["a" /* checkMatchWith */])([{ Field: 'pin1', ConfirmField: 'pinConfirm1' },
                    { Field: 'pin2', ConfirmField: 'pinConfirm2' },
                    { Field: 'pin3', ConfirmField: 'pinConfirm3' },
                    { Field: 'pin4', ConfirmField: 'pinConfirm4' },
                    { Field: 'pin5', ConfirmField: 'pinConfirm5' }]),
                updateOn: 'blur'
            }
        });
        this.setupPINForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    SetupPINPage.prototype.errorMessage = function (path) {
        var control = this.setupPINForm.get(path);
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
    SetupPINPage.prototype.onFocusInput = function (event) {
    };
    SetupPINPage.prototype.focusoutInput = function (event) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], SetupPINPage.prototype, "textInputs", void 0);
    SetupPINPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setupPIN',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\setupPIN\setupPIN.html"*/'\n\n<ion-content>\n\n    <ion-grid class="padding-15 content-wrapper">\n\n      <ion-row>\n\n        <ion-col text-center class="p-t-15">\n\n          <img class="l2s-logo" src="assets/images/l2s-logo.png"/>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="text-14 margin-0 p-t-20 p-b-10"><b>{{setup_PIN}}</b></p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p class="text-14">{{PIN_enter_5_digit}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <form [formGroup]="setupPINForm" autocomplete="off">\n\n        <ion-row class="p-b-10">\n\n          <ptt-pin (pinChange)="onPinChange($event)"></ptt-pin>\n\n        </ion-row>\n\n\n\n        <p class="text-14">{{confirm_pin}}</p>\n\n        <ion-row class="m-b-15">\n\n          <ptt-pin (pinChange)="onConfirmPinChange($event)"></ptt-pin>\n\n        </ion-row>\n\n        <ion-item-divider ion-item light no-lines class="error"\n\n                          *ngIf="(setupPINForm.get(\'pin1\').dirty && !setupPINForm.get(\'pin1\').valid) ||\n\n                               (setupPINForm.get(\'pin2\').dirty && !setupPINForm.get(\'pin2\').valid) ||\n\n                               (setupPINForm.get(\'pin3\').dirty && !setupPINForm.get(\'pin3\').valid) ||\n\n                               (setupPINForm.get(\'pin4\').dirty && !setupPINForm.get(\'pin4\').valid) ||\n\n                               (setupPINForm.get(\'pin5\').dirty && !setupPINForm.get(\'pin5\').valid)\n\n                        ">\n\n\n\n          <p>{{PIN_5_digit}}</p>\n\n        </ion-item-divider>\n\n\n\n        <ion-item-divider ion-item light no-lines class="error"\n\n                          *ngIf="(setupPINForm.get(\'pin1\').dirty &&\n\n                                setupPINForm.get(\'pin2\').dirty &&\n\n                                setupPINForm.get(\'pin3\').dirty &&\n\n                                setupPINForm.get(\'pin4\').dirty &&\n\n                                setupPINForm.get(\'pin5\').dirty &&\n\n                                setupPINForm.get(\'pinConfirm1\').dirty &&\n\n                                setupPINForm.get(\'pinConfirm2\').dirty &&\n\n                                setupPINForm.get(\'pinConfirm3\').dirty &&\n\n                                setupPINForm.get(\'pinConfirm4\').dirty &&\n\n                                setupPINForm.get(\'pinConfirm5\').dirty) &&\n\n\n\n                               (!setupPINForm.get(\'pinConfirm1\').valid ||\n\n                               !setupPINForm.get(\'pinConfirm2\').valid ||\n\n                               !setupPINForm.get(\'pinConfirm3\').valid ||\n\n                               !setupPINForm.get(\'pinConfirm4\').valid ||\n\n                               !setupPINForm.get(\'pinConfirm5\').valid)\n\n                        ">\n\n           <p>{{PIN_and_confirm_do_not_match}}</p>\n\n        </ion-item-divider>\n\n        <ion-row class="p-t-10">\n\n          <ion-col>\n\n            <p class="text-14 margin-0" text-wrap text-center no-margin>{{five_digit_pin}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </form>\n\n    </ion-grid>\n\n    <ion-row class="footer-wrapper">\n\n      <ion-col>\n\n        <button ion-button large block [disabled]="!setupPINForm.valid" (click)="setupPINCode()">Next</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\setupPIN\setupPIN.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__setupPIN_service__["a" /* SetupPINService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_5__setupPIN_service__["a" /* SetupPINService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], SetupPINPage);
    return SetupPINPage;
}());

//# sourceMappingURL=setupPIN.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupPINService; });
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


var SetupPINService = (function () {
    function SetupPINService(http) {
        this.http = http;
    }
    SetupPINService.prototype.updatePIN = function () {
        return this.http.get("account/password-policy");
    };
    SetupPINService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], SetupPINService);
    return SetupPINService;
}());

//# sourceMappingURL=setupPIN.service.js.map

/***/ })

});
//# sourceMappingURL=58.js.map