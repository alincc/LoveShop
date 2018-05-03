webpackJsonp([20],{

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkConnectionNetwork_service__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__httpCheckNetwork_service__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_pinCodeService_pinCode_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_login_authenticationDataSharing_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AccountManagement_verifyPIN_verifyPIN_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__whereToSpend_where2SpendSharingData_services__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__welcome_service__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__framework_services_utilities_utilities__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var WelcomePage = (function () {
    function WelcomePage(routeManager, checkConnectionNetworkService, welcomeService, authGuardService, navCtrl) {
        this.routeManager = routeManager;
        this.checkConnectionNetworkService = checkConnectionNetworkService;
        this.welcomeService = welcomeService;
        this.authGuardService = authGuardService;
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.ionViewWillEnter = function () {
        var passwordPolicy = localStorage.getItem('password-policy');
        if (this.authGuardService.invalidTokenState$.getValue() &&
            !__WEBPACK_IMPORTED_MODULE_8__AccountManagement_verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().VisibleScreen) {
            this.authGuardService.invalidTokenState$.next(false);
        }
        if (!this.authGuardService.isAuthenticated() || !passwordPolicy) {
            this.getContentMSG();
            this.checkConnectionNetworkService
                .getPasswordValidationRules()
                .subscribe(function (res) {
                localStorage.setItem('password-policy', JSON.stringify(res.response));
            });
        }
        else {
            this.OnNavigate();
        }
    };
    WelcomePage.prototype.getContentMSG = function () {
        __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                var msg_code = [
                    'cardCsc_required',
                    'cardCsc_less_than_min',
                    'cardCsc_invalid_characters',
                    'reset_fingerprint',
                    'use_of_fingerprint',
                    'use_fingerprint_not_PIN',
                    'use_same_finger',
                    'five_digit_pin',
                    'confirm_pin',
                    'PIN_5_digit',
                    'PIN_and_confirm_do_not_match',
                    'create_print_ID',
                    'skip_id_setup',
                    'wrong_touch_ID',
                    'too_many_attempts',
                    'setup_PIN',
                    'token_expired',
                    'fail_attempts',
                    'wrong_PIN',
                    'required',
                    'quantity_invalid',
                    'park_catalogue_product_out_of_stock',
                    'invalid_phone_format',
                    'gps_unavailable',
                    'park_api_unexpected_error',
                    'park_api_email_already_exists',
                    'park_api_touch_ID_not_available',
                    'park_api_user_id_no_match',
                    'park_api_minimum_age',
                    'park_api_date_of_birth',
                    'park_api_card_number_no_match',
                    'firstName_invalid_characters',
                    'lastName_invalid_characters',
                    'park_api_invalid_postcode',
                    'email_invalid_email',
                    'confirmEmail_equal_to',
                    'PIN_4_digits',
                    'park_api_invalid_number',
                    'park_api_10_digits',
                    'password_invalid_characters',
                    'park_api_password_no_match',
                    'park_api_serial_number_no_match',
                    'enter_postcode_or_search_for_an_address',
                    'enter_address_manually',
                    'account_management_to_add_card_register',
                    'account_management_register_addcard',
                    'account_management_already_have_account',
                    // 'ForgotPassword_en_properties',
                    'enter_account_password_to_view_card',
                    'account_management_refund_full_value',
                    'account_management_full_refund_being_processed',
                    'account_management_click_to_refund_balance',
                    'account_management_no_cards_available',
                    'account_management_set_default_card',
                    'use_current_location',
                    'account_management_logout',
                    'PIN_enter_5_digit',
                ];
                for (var i = 0; i < msg_code.length; i++) {
                    if (__WEBPACK_IMPORTED_MODULE_14__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i]) && __WEBPACK_IMPORTED_MODULE_14__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i].response) && __WEBPACK_IMPORTED_MODULE_14__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i].response.message)) {
                        var mg_item_code = msg_code[i];
                        __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage[mg_item_code] = res[i].response.message;
                    }
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().resetState();
            }
        };
        __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].combineLatest(this.welcomeService.getContentFromRetreiveContent("order.datacash-payment.capture.default.error.cardCsc-required"), this.welcomeService.getContentFromRetreiveContent("order.datacash-payment.capture.default.error.cardCsc-less-than-min"), this.welcomeService.getContentFromRetreiveContent("order.datacash-payment.capture.default.error.cardCsc-invalid-characters"), this.welcomeService.getContentFromRetreiveContent("reset-fingerprint"), this.welcomeService.getContentFromRetreiveContent("use-of-fingerprint"), this.welcomeService.getContentFromRetreiveContent("use-fingerprint-not-PIN"), this.welcomeService.getContentFromRetreiveContent("use-same-finger"), this.welcomeService.getContentFromRetreiveContent("5-digit-pin"), this.welcomeService.getContentFromRetreiveContent("confirm-pin"), this.welcomeService.getContentFromRetreiveContent("PIN-5-digits"), this.welcomeService.getContentFromRetreiveContent("PIN-and-confirm-do-not-match"), this.welcomeService.getContentFromRetreiveContent("create-print-ID"), this.welcomeService.getContentFromRetreiveContent("skip-id-setup"), this.welcomeService.getContentFromRetreiveContent("wrong-touch-ID"), this.welcomeService.getContentFromRetreiveContent("too-many-attempts"), this.welcomeService.getContentFromRetreiveContent("setup-PIN"), this.welcomeService.getContentFromRetreiveContent("token-expired"), this.welcomeService.getContentFromRetreiveContent("fail-attempts"), this.welcomeService.getContentFromRetreiveContent("wrong-PIN"), this.welcomeService.getContentFromRetreiveContent("required"), this.welcomeService.getContentFromRetreiveContent("quantity-invalid"), this.welcomeService.getContentFromRetreiveContent("park-catalogue.product.out-of-stock"), this.welcomeService.getContentFromRetreiveContent("invalid-phone-format"), this.welcomeService.getContentFromRetreiveContent("gps-unavailable"), this.welcomeService.getContentFromRetreiveContent("park-api.unexpected-error"), this.welcomeService.getContentFromRetreiveContent("park-api-email-already-exists"), this.welcomeService.getContentFromRetreiveContent("park-api-touch-ID-not-available"), this.welcomeService.getContentFromRetreiveContent("park-api.user-id-no-match"), this.welcomeService.getContentFromRetreiveContent("park-api.minimum-age"), this.welcomeService.getContentFromRetreiveContent("park-api.date-of-birth"), this.welcomeService.getContentFromRetreiveContent("park-api.card-number-no-match"), this.welcomeService.getContentFromRetreiveContent("firstName-invalid-characters"), this.welcomeService.getContentFromRetreiveContent("lastName-invalid-characters"), this.welcomeService.getContentFromRetreiveContent("park-api.invalid-postcode"), this.welcomeService.getContentFromRetreiveContent("email-invalid-email"), this.welcomeService.getContentFromRetreiveContent("confirmEmail-equal-to"), this.welcomeService.getContentFromRetreiveContent("PIN-4-digits"), this.welcomeService.getContentFromRetreiveContent("park-api.invalid-number"), this.welcomeService.getContentFromRetreiveContent("park-api.10-digits"), this.welcomeService.getContentFromRetreiveContent("password-invalid-characters"), this.welcomeService.getContentFromRetreiveContent("park-api.password-no-match"), this.welcomeService.getContentFromRetreiveContent("park-api.serial-number-no-match"), this.welcomeService.getContentFromRetreiveContent("enter-postcode-or-search-for-an-address"), this.welcomeService.getContentFromRetreiveContent("enter-address-manually"), this.welcomeService.getContentFromRetreiveContent("account-management.to-add-card-register"), this.welcomeService.getContentFromRetreiveContent("account-management.register-addcard"), this.welcomeService.getContentFromRetreiveContent("account-management.already-have-account"), 
        // this.welcomeService.getContentFromRetreiveContent("ForgotPassword_en.properties"),
        this.welcomeService.getContentFromRetreiveContent("enter-account-password-to-view-card"), this.welcomeService.getContentFromRetreiveContent("account-management.refund-full-value"), this.welcomeService.getContentFromRetreiveContent("account-management.full-refund-being-processed"), this.welcomeService.getContentFromRetreiveContent("account-management.click-to-refund-balance"), this.welcomeService.getContentFromRetreiveContent("account-management.no-cards-available"), this.welcomeService.getContentFromRetreiveContent("account-management.set-default-card"), this.welcomeService.getContentFromRetreiveContent("use-current-location"), this.welcomeService.getContentFromRetreiveContent("account-management.logout"), this.welcomeService.getContentFromRetreiveContent("PIN-enter-5-digit")).subscribe(observer);
    };
    WelcomePage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_10__whereToSpend_where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().resetState();
    };
    WelcomePage.prototype.goToW2S = function () {
        this.navCtrl.push('Where2SpendInStoreMapPage');
    };
    WelcomePage.prototype.OnNavigate = function () {
        if (__WEBPACK_IMPORTED_MODULE_6__framework_services_pinCodeService_pinCode_service__["a" /* PinCodeService */]
            .getInstance()
            .needSetupPinCode(__WEBPACK_IMPORTED_MODULE_7__framework_login_authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail) === true) {
            this.navCtrl.setRoot('SetupPINPage', { nextPage: 'TouchIDSettingFirstTimePage' });
        }
        else {
            this.navCtrl.setRoot('TabsPage', { showVerifyPIN: true });
        }
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\welcome\welcome.html"*/'<ion-content >\n  <ion-grid class="full-h-flex content-wrapper">\n    <ng-container *ngIf="!authGuardService.isAuthenticated(); else loading;">\n      <ion-row>\n        <ion-col text-center class="p-t-30 clearfix">\n          <img class="l2s-logo" src="assets/images/l2s-logo.png"/>\n\n        </ion-col>\n      </ion-row>\n      <ion-row >\n        <ion-col class="clearfix">\n          <div class="p-b-20">\n            <button (click)="navCtrl.push(\'LoginPage\')" ion-button large block\n                    class="l2s-btn l2s-btn--default">Login\n            </button>\n          </div>\n          <div>\n            <button (click)="navCtrl.push(\'RegisterStep1Page\')" ion-button large block\n                    class="l2s-btn l2s-btn--primary">Register\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!--<ion-row>-->\n        <!--<div pinch-zoom>-->\n          <!--<img src="https://static.pexels.com/photos/160699/girl-dandelion-yellow-flowers-160699.jpeg" style="max-width: 100%" />-->\n        <!--</div>-->\n      <!--</ion-row>-->\n\n      <ion-row>\n        <ion-col>\n          <ion-row padding-bottom>\n            <button (click)="navCtrl.push(\'AddMyCardPage\')" ion-button large block outline\n                    class="l2s-btn l2s-btn--outline">Add my card\n            </button>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class="p-r-6">\n              <button (click)="navCtrl.setRoot(\'CheckBalanceStep1Page\')" ion-button large block outline\n                      class="l2s-btn l2s-btn--outline">Check my balance\n              </button>\n            </ion-col>\n            <ion-col class="p-l-6">\n              <button (click)="goToW2S()" ion-button large block outline\n                      class="l2s-btn l2s-btn--outline">Where to spend\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n\n      <ng-template #loading>\n        <h3>Loading...</h3>\n      </ng-template>\n    </ng-container>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\welcome\welcome.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__checkConnectionNetwork_service__["a" /* CheckConnectionNetworkService */],
                __WEBPACK_IMPORTED_MODULE_4__httpCheckNetwork_service__["a" /* HttpCheckNetworkService */],
                __WEBPACK_IMPORTED_MODULE_11__welcome_service__["a" /* WelcomeService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_3__checkConnectionNetwork_service__["a" /* CheckConnectionNetworkService */],
            __WEBPACK_IMPORTED_MODULE_11__welcome_service__["a" /* WelcomeService */],
            __WEBPACK_IMPORTED_MODULE_5__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckConnectionNetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpCheckNetwork_service__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckConnectionNetworkService = (function () {
    function CheckConnectionNetworkService(httpCheckNetwork) {
        this.httpCheckNetwork = httpCheckNetwork;
    }
    CheckConnectionNetworkService.prototype.getPasswordValidationRules = function () {
        return this.httpCheckNetwork.get("account/password-policy");
    };
    CheckConnectionNetworkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpCheckNetwork_service__["a" /* HttpCheckNetworkService */]])
    ], CheckConnectionNetworkService);
    return CheckConnectionNetworkService;
}());

//# sourceMappingURL=checkConnectionNetwork.service.js.map

/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeService; });
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


var WelcomeService = (function () {
    function WelcomeService(http) {
        this.http = http;
    }
    WelcomeService.prototype.getPasswordPolicy = function () {
        return this.http.get("/account/password-policy");
    };
    WelcomeService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    WelcomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], WelcomeService);
    return WelcomeService;
}());

//# sourceMappingURL=welcome.service.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpCheckNetwork_service__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { PinchZoomModule } from '../../../libs/pinch-zoom/pinch-zoom.module';


var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__httpCheckNetwork_service__["a" /* HttpCheckNetworkService */]],
            imports: [
                // PinchZoomModule,
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Where2SpendSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var Where2SpendSharingDataService = (function () {
    function Where2SpendSharingDataService() {
        this.needBackToYOurCardDetail = false;
        this.updateEvent$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(Where2SpendSharingDataService.prototype, "needBackToYOurCard", {
        get: function () {
            return this.needBackToYOurCardDetail;
        },
        set: function (status) {
            this.needBackToYOurCardDetail = status;
        },
        enumerable: true,
        configurable: true
    });
    Where2SpendSharingDataService.prototype.resetState = function () {
        this.categories = null;
        this.selectedCard = null;
        this.useMyLocation = true;
        this.currenrLocation = false;
        this.keepLocation = false;
        this.keepData = false;
        this.refreshCategory = false;
        this.gpsStatus = false;
        this.needBackToYOurCardDetail = false;
    };
    Where2SpendSharingDataService.getInstance = function () {
        if (!Where2SpendSharingDataService._instance) {
            Where2SpendSharingDataService._instance = new Where2SpendSharingDataService();
        }
        return Where2SpendSharingDataService._instance;
    };
    return Where2SpendSharingDataService;
}());

//# sourceMappingURL=where2SpendSharingData.services.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCheckNetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_delay__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_services_mobileDeviceService_mobileDeviceService_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var API_Authentication = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.API_Authentication;
var NO_CONNECTION_MSG = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.NO_CONNECTION_MSG;
var TOKEN_INVALID = __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.TOKEN_INVALID;
var HttpCheckNetworkService = (function () {
    function HttpCheckNetworkService(authenticationService, http) {
        this.authenticationService = authenticationService;
        this.http = http;
        this.callCount = 0;
        this.receiveTimeout = 12000;
        this.callCount = 0;
    }
    HttpCheckNetworkService.prototype.extractData = function (res) {
        if (res.status <= 4) {
            __WEBPACK_IMPORTED_MODULE_1__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(NO_CONNECTION_MSG);
        }
        else if (res.status === 401) {
            var errors = res.json().errors;
            var message = '';
            if (__WEBPACK_IMPORTED_MODULE_0__framework_services_utilities_utilities__["a" /* Utils */].lengthGreaterThan0(errors)) {
                if (errors[0].code === "token.invalid" || errors[0].code === "park-api.token.expired") {
                    this.authenticationService.invalidToken$.next({
                        message: "Token is invalid."
                    });
                }
                message = errors[0].message;
            }
            else {
                message = DEFAULT_ERROR_MSG;
            }
            __WEBPACK_IMPORTED_MODULE_1__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message, __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.time2ShowToast);
            return;
        }
        else if (res.status !== 200) {
            var message = DEFAULT_ERROR_MSG;
            var result_1 = {};
            try {
                result_1 = res.json();
            }
            catch (error) {
            }
            if (__WEBPACK_IMPORTED_MODULE_0__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(result_1) && __WEBPACK_IMPORTED_MODULE_0__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(result_1.errors) && result_1.errors.length > 0) {
                if (__WEBPACK_IMPORTED_MODULE_0__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(result_1.errors[0].message)) {
                    message = result_1.errors[0].message;
                }
                else {
                    var code = result_1.errors[0].code;
                    if (__WEBPACK_IMPORTED_MODULE_0__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(code)) {
                        this.getMessage('cms/message/code=' + code);
                    }
                    else {
                        message = DEFAULT_ERROR_MSG;
                    }
                }
            }
            else {
                message = DEFAULT_ERROR_MSG;
            }
            __WEBPACK_IMPORTED_MODULE_1__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
        }
        var result;
        if (res.ok === true) {
            result = res.json() || {};
        }
        else {
            result = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].of(res);
        }
        result.ok = res.ok;
        result.status = res.status;
        return result;
    };
    HttpCheckNetworkService.prototype.extractDataMessage = function (res) {
        var message = '';
        if (res.status <= 4) {
            __WEBPACK_IMPORTED_MODULE_1__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(NO_CONNECTION_MSG);
        }
        else if (res.status === 401) {
            var errors = res.json().errors;
            if (__WEBPACK_IMPORTED_MODULE_0__framework_services_utilities_utilities__["a" /* Utils */].lengthGreaterThan0(errors)) {
                if (errors[0].code === "token.invalid") {
                    this.authenticationService.userLogout$.emit({
                        message: TOKEN_INVALID
                    });
                }
            }
        }
        else if (res.status !== 200) {
            message = DEFAULT_ERROR_MSG;
        }
        else {
            var result = void 0;
            if (res.ok === true) {
                result = res.json() || {};
            }
            else {
                result = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].of(res);
            }
            message = result.message;
        }
        __WEBPACK_IMPORTED_MODULE_1__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    HttpCheckNetworkService.prototype.getMessage = function (api) {
        return this.http
            .get(this.getFullApiUrl(api), this.headerOptionsGetContent()).subscribe(function (res) {
            var message = DEFAULT_ERROR_MSG;
            try {
                var body = res.json();
                if (body && body.response && body.response.message) {
                    message = body.response.message;
                }
                else if (body && Array.isArray(body.errors) && body.errors.length > 0) {
                    message = body.errors[0];
                }
                else {
                    message = DEFAULT_ERROR_MSG;
                }
            }
            catch (error) {
                message = DEFAULT_ERROR_MSG;
            }
            __WEBPACK_IMPORTED_MODULE_1__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_1__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(DEFAULT_ERROR_MSG);
        });
    };
    HttpCheckNetworkService.prototype.headerOptionsGetContent = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'API_Authentication': API_Authentication,
            'Device_Name': __WEBPACK_IMPORTED_MODULE_11__framework_services_mobileDeviceService_mobileDeviceService_service__["a" /* MobileDeviceService */].getInstance().getDeviceType(),
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    // Fetch data by get method from backend API service
    // tslint:disable-next-line:member-ordering
    HttpCheckNetworkService.prototype.get = function (api) {
        var _this = this;
        // if don't need to refresh token then directly call API
        // ...using get request
        return this.http
            .get(this.getFullApiUrl(api), this.headerOptions())
            .retry(5)
            .timeout(this.receiveTimeout)
            .map(function (response) {
            return _this.extractData(response);
        })
            .catch(function (err) {
            return _this.extractData(err);
        });
    };
    // private instance variable to hold base url
    HttpCheckNetworkService.prototype.getFullApiUrl = function (api) {
        return api.indexOf("http") === -1
            ? __WEBPACK_IMPORTED_MODULE_12__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseApiUrl + api
            : api;
    };
    HttpCheckNetworkService.prototype.headerOptions = function () {
        // ... Set content type to JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'API_Authentication': API_Authentication,
            'Authorization': this.authenticationService.getToken(),
            'Device_Name': __WEBPACK_IMPORTED_MODULE_11__framework_services_mobileDeviceService_mobileDeviceService_service__["a" /* MobileDeviceService */].getInstance().getDeviceType()
        });
        // Create a request option
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    HttpCheckNetworkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], HttpCheckNetworkService);
    return HttpCheckNetworkService;
}());

//# sourceMappingURL=httpCheckNetwork.service.js.map

/***/ })

});
//# sourceMappingURL=20.js.map