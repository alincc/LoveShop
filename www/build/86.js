webpackJsonp([86],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsPageModule", function() { return AccountDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accountDetails__ = __webpack_require__(848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountDetailsPageModule = (function () {
    function AccountDetailsPageModule() {
    }
    AccountDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__accountDetails__["a" /* AccountDetailsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accountDetails__["a" /* AccountDetailsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__accountDetails__["a" /* AccountDetailsPage */]]
        })
    ], AccountDetailsPageModule);
    return AccountDetailsPageModule;
}());

//# sourceMappingURL=accountDetails.module.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accountDetails_service__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountDetailsPage = (function () {
    function AccountDetailsPage(routeManager, navCtrl, accountDetailsService) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.accountDetailsService = accountDetailsService;
        this.model = {};
        this.showContent = false;
        this.model = {};
    }
    AccountDetailsPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.app-root').addClass('not-show-tab');
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            // place code load data for this page here
            this.getUserDataDetails();
        }
    };
    AccountDetailsPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    AccountDetailsPage.prototype.formatDateStandard = function (date) {
        var arrStrDate = date.split('/');
        return arrStrDate[2] + '-' + arrStrDate[1] + '-' + arrStrDate[0];
    };
    AccountDetailsPage.prototype.getUserDataDetails = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.showContent = true;
                var formatPhoneNumber = body.telephoneNumbers;
                formatPhoneNumber = formatPhoneNumber.substr(formatPhoneNumber.indexOf(':') + 1, formatPhoneNumber.length);
                _this.dob = body.dob;
                var formatDOB = _this.formatDateStandard(body.dob);
                var datePipeEn = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]('en-GB');
                formatDOB = datePipeEn.transform(formatDOB, 'dd MMMM yyyy');
                _this.model = {
                    name: body.title + ' ' + body.firstName + ' ' + body.lastName,
                    addressLine1: body.addressLine1,
                    addressLine2: body.addressLine2,
                    dob: formatDOB,
                    county: body.county,
                    postcode: body.postcode,
                    town: body.town,
                    country: body.country,
                    phone: formatPhoneNumber
                };
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.accountDetailsService
            .getUserDetails()
            .subscribe(observer);
    };
    AccountDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accountDetails',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\accountDetails\accountDetails.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Account Details\n        </ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="navCtrl.push(\'EditAccountPage\')">\n                <ion-icon name="md-create"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid  *ngIf="showContent">\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label floating class="label-float-big">Name</ion-label>\n                    <ion-input class="text-16" name="dob" type="text" disabled="true" value={{model.name}}></ion-input>\n                    <ion-item-divider ion-item light no-lines>\n                        {{model.name}}\n                    </ion-item-divider>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label floating class="label-float-big">Date of Birth</ion-label>\n                    <ion-input class="text-16" name="dob" type="text" disabled="true" value={{model.dob}}></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label floating class="label-float-big">Address</ion-label>\n                    <ion-input class="text-16" type="text" disabled="true" value={{model.addressLine1}}></ion-input>\n                    <ion-input class="text-16" type="text" disabled="true" *ngIf="model.addressLine2 != \'\'" value={{model.addressLine2}}></ion-input>\n                    <ion-input class="text-16" type="text" disabled="true" value={{model.town}}></ion-input>\n                    <ion-input class="text-16" type="text" disabled="true" value={{model.county}}\n                               *ngIf="model.county != \'\'"></ion-input>\n                    <ion-input class="text-16" type="text" disabled="true" value={{model.postcode}}></ion-input>\n                    <ion-input class="text-16" type="text" disabled="true" value={{model.country}}></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label floating class="label-float-big">Telephone</ion-label>\n                    <ion-input class="montserrat-regular text-16" name="phone" type="text" disabled="true" value={{model.phone}}></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="AccountDetailsPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\AccountManagement\accountDetails\accountDetails.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__accountDetails_service__["a" /* AccountDetailsService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__accountDetails_service__["a" /* AccountDetailsService */]])
    ], AccountDetailsPage);
    return AccountDetailsPage;
}());

//# sourceMappingURL=accountDetails.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDetailsService; });
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


var AccountDetailsService = (function () {
    function AccountDetailsService(http) {
        this.http = http;
    }
    AccountDetailsService.prototype.getUserDetails = function () {
        return this.http.get("account");
    };
    AccountDetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], AccountDetailsService);
    return AccountDetailsService;
}());

//# sourceMappingURL=accountDetails.service.js.map

/***/ })

});
//# sourceMappingURL=86.js.map