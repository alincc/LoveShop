webpackJsonp([41],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep4PageModule", function() { return RegisterStep4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerStep4__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_ptt_pin_ptt_pin_module__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterStep4PageModule = (function () {
    function RegisterStep4PageModule() {
    }
    RegisterStep4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__registerStep4__["a" /* RegisterStep4Page */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registerStep4__["a" /* RegisterStep4Page */]),
                __WEBPACK_IMPORTED_MODULE_3__libs_ptt_pin_ptt_pin_module__["a" /* PttPinModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__registerStep4__["a" /* RegisterStep4Page */]]
        })
    ], RegisterStep4PageModule);
    return RegisterStep4PageModule;
}());

//# sourceMappingURL=registerStep4.module.js.map

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

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterStep4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registerData_service__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_pinCodeService_pinCode_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registerSharingData_service__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_pinCodeMatch_directive__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_numeric_directive__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__verifyPIN_verifyPIN_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var RegisterStep4Page = (function () {
    function RegisterStep4Page(formBuilder, alertCtrl, routeManager, navCtrl, registerDataService, touchId) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.registerDataService = registerDataService;
        this.model = {};
        this.confirm_pin = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.confirm_pin;
        this.PIN_5_digit = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_5_digit;
        this.PIN_enter_5_digit = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_enter_5_digit;
        this.PIN_and_confirm_do_not_match = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_and_confirm_do_not_match;
        this.account_created = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_created;
        this.five_digit_pin = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.five_digit_pin;
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
        this.touchId = touchId;
    }
    RegisterStep4Page.prototype.submitRegisterData = function () {
        var _this = this;
        if (this.registerUserForm.valid) {
            __WEBPACK_IMPORTED_MODULE_5__registerSharingData_service__["a" /* RegisterSharingDataService */].getInstance().saveStep4Screen(this.registerUserForm.value);
            __WEBPACK_IMPORTED_MODULE_4__framework_services_pinCodeService_pinCode_service__["a" /* PinCodeService */].getInstance()
                .savePinCode(__WEBPACK_IMPORTED_MODULE_5__registerSharingData_service__["a" /* RegisterSharingDataService */].getInstance().getEmailAddressAtStep3(), this.registerUserForm.value);
            var a = __WEBPACK_IMPORTED_MODULE_4__framework_services_pinCodeService_pinCode_service__["a" /* PinCodeService */].getInstance()
                .getPinCode(__WEBPACK_IMPORTED_MODULE_5__registerSharingData_service__["a" /* RegisterSharingDataService */].getInstance().getEmailAddressAtStep3());
            this.touchId.isAvailable().then(function (data) {
                _this.navCtrl.setRoot('RegisterStep5Page');
            })
                .catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_12__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().touchIDState = false;
                _this.navCtrl.setRoot('RegisterStep7Page');
            });
        }
    };
    RegisterStep4Page.prototype.buildForm = function () {
        var _this = this;
        this.registerUserForm = this.formBuilder.group({
            'pin1': ['', [Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin1'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin2': ['', [Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin2'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin3': ['', [Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin3'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin4': ['', [Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin4'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pin5': ['', [Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin5'),
                    Object(__WEBPACK_IMPORTED_MODULE_10__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()]],
            'pinConfirm1': [''],
            'pinConfirm2': [''],
            'pinConfirm3': [''],
            'pinConfirm4': [''],
            'pinConfirm5': ['']
        }, {
            validator: {
                validators: Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_pinCodeMatch_directive__["a" /* checkMatchWith */])([{ Field: 'pin1', ConfirmField: 'pinConfirm1' },
                    { Field: 'pin2', ConfirmField: 'pinConfirm2' },
                    { Field: 'pin3', ConfirmField: 'pinConfirm3' },
                    { Field: 'pin4', ConfirmField: 'pinConfirm4' },
                    { Field: 'pin5', ConfirmField: 'pinConfirm5' }]),
                updateOn: 'blur'
            }
        });
        this.registerUserForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
        __WEBPACK_IMPORTED_MODULE_5__registerSharingData_service__["a" /* RegisterSharingDataService */].getInstance().state$.subscribe(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res.step4Model)) {
                _this.registerUserForm.setValue(res.step4Model);
            }
        });
    };
    RegisterStep4Page.prototype.patchValue = function (controlName, value, updateState) {
        if (updateState === void 0) { updateState = false; }
        var control = this.registerUserForm.get(controlName);
        control.patchValue(value);
        if (updateState) {
            control.markAsTouched();
            control.markAsDirty();
        }
    };
    RegisterStep4Page.prototype.onPinChange = function (pin) {
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
    RegisterStep4Page.prototype.onConfirmPinChange = function (pin) {
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
    RegisterStep4Page.prototype.updateInputOnKey = function (event, target) {
        if (event.key !== 'Backspace' && target && typeof target.setFocus === 'function') {
            target.setFocus();
        }
    };
    RegisterStep4Page.prototype.errorMessage = function (path) {
        var control = this.registerUserForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* QueryList */])
    ], RegisterStep4Page.prototype, "textInputs", void 0);
    RegisterStep4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-registerStep4',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep4\registerStep4.html"*/'<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <ion-col text-center>\n        <img class="l2s-logo" src="assets/images/l2s-logo.png" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class="msg-success margin-0 p-t-15" text-center>\n          <span class="montserrat-bold text-16">{{account_created}}</span>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row class="p-l-15">\n      <ion-col>\n        <p class="text-14">{{PIN_enter_5_digit}}</p>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]="registerUserForm" autocomplete="off" class="p-l-15 p-r-15">\n      <ion-row class="p-b-0">\n        <ptt-pin (pinChange)="onPinChange($event)"></ptt-pin>\n      </ion-row>\n      <p class="text-14">{{confirm_pin}}</p>\n      <ion-row class="m-b-15">\n        <ptt-pin (pinChange)="onConfirmPinChange($event)"></ptt-pin>\n      </ion-row>\n      <ion-item-divider ion-item light no-lines class="error"\n                        *ngIf="(registerUserForm.get(\'pin1\').dirty && !registerUserForm.get(\'pin1\').valid) ||\n                               (registerUserForm.get(\'pin2\').dirty && !registerUserForm.get(\'pin2\').valid) ||\n                               (registerUserForm.get(\'pin3\').dirty && !registerUserForm.get(\'pin3\').valid) ||\n                               (registerUserForm.get(\'pin4\').dirty && !registerUserForm.get(\'pin4\').valid) ||\n                               (registerUserForm.get(\'pin5\').dirty && !registerUserForm.get(\'pin5\').valid)\n                        ">\n         <p>{{PIN_5_digit}}</p>\n      </ion-item-divider>\n\n      <ion-item-divider ion-item light no-lines class="error"\n                        *ngIf="(registerUserForm.get(\'pin1\').dirty &&\n                                registerUserForm.get(\'pin2\').dirty &&\n                                registerUserForm.get(\'pin3\').dirty &&\n                                registerUserForm.get(\'pin4\').dirty &&\n                                registerUserForm.get(\'pin5\').dirty &&\n                                registerUserForm.get(\'pinConfirm1\').dirty &&\n                                registerUserForm.get(\'pinConfirm2\').dirty &&\n                                registerUserForm.get(\'pinConfirm3\').dirty &&\n                                registerUserForm.get(\'pinConfirm4\').dirty &&\n                                registerUserForm.get(\'pinConfirm5\').dirty) &&\n\n                               (!registerUserForm.get(\'pinConfirm1\').valid ||\n                               !registerUserForm.get(\'pinConfirm2\').valid ||\n                               !registerUserForm.get(\'pinConfirm3\').valid ||\n                               !registerUserForm.get(\'pinConfirm4\').valid ||\n                               !registerUserForm.get(\'pinConfirm5\').valid)\n                        ">\n\n        <p>{{PIN_and_confirm_do_not_match}}</p>\n      </ion-item-divider>\n\n      <ion-row class="p-t-0 p-b-20">\n        <ion-col>\n          <p class="text-14 margin-0" text-wrap text-center no-margin class="text-14">\n            {{five_digit_pin}}</p>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button large block [disabled]="!registerUserForm.valid" (click)="submitRegisterData()">Next</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep4\registerStep4.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__registerData_service__["a" /* RegisterDataService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__registerData_service__["a" /* RegisterDataService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], RegisterStep4Page);
    return RegisterStep4Page;
}());

//# sourceMappingURL=registerStep4.js.map

/***/ })

});
//# sourceMappingURL=41.js.map