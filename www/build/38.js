webpackJsonp([38],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBalanceStep3PageModule", function() { return CheckBalanceStep3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkBalanceStep3__ = __webpack_require__(956);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckBalanceStep3PageModule = (function () {
    function CheckBalanceStep3PageModule() {
    }
    CheckBalanceStep3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__checkBalanceStep3__["a" /* CheckBalanceStep3Page */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkBalanceStep3__["a" /* CheckBalanceStep3Page */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__checkBalanceStep3__["a" /* CheckBalanceStep3Page */]]
        })
    ], CheckBalanceStep3PageModule);
    return CheckBalanceStep3PageModule;
}());

//# sourceMappingURL=checkBalanceStep3.module.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardBalanceSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__ = __webpack_require__(44);


var CardBalanceSharingDataService = (function () {
    function CardBalanceSharingDataService() {
        this.defaultMasterData = {};
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](this.currentMasterData);
        if (CardBalanceSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use CardBalanceSharingDataService.getInstance() instead of new.');
        }
        CardBalanceSharingDataService._instance = this;
    }
    Object.defineProperty(CardBalanceSharingDataService.prototype, "state$", {
        get: function () {
            return this._state$;
        },
        enumerable: true,
        configurable: true
    });
    CardBalanceSharingDataService.prototype.resetState = function () {
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$.next(this.currentMasterData);
    };
    CardBalanceSharingDataService.prototype.saveStep1Screen = function (step1Model) {
        this.currentMasterData.step1Model = step1Model;
    };
    CardBalanceSharingDataService.prototype.saveStep2Screen = function (step2Model) {
        this.currentMasterData.step2Model = step2Model;
    };
    CardBalanceSharingDataService.prototype.getCardNumberAtStep1 = function () {
        return this.currentMasterData.step1Model.cardNumber;
    };
    CardBalanceSharingDataService.prototype.getCardData = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.currentMasterData.step2Model)) {
            var cardModel = {
                // step 1
                cardID: this.currentMasterData.step1Model.cardNumber,
                // step 2
                csc: this.currentMasterData.step2Model.securityCode
            };
            return cardModel;
        }
        else {
            var cardModel = {
                cardID: this.currentMasterData.step1Model.cardNumber,
            };
            return cardModel;
        }
    };
    CardBalanceSharingDataService.prototype.getCardDataOnlyCardNumber = function () {
        var cardModel = {
            // step 1
            cardNumber: this.currentMasterData.step1Model.cardNumber,
        };
        return cardModel;
    };
    CardBalanceSharingDataService.getInstance = function () {
        return CardBalanceSharingDataService._instance;
    };
    // tslint:disable-next-line:member-ordering
    CardBalanceSharingDataService._instance = new CardBalanceSharingDataService();
    return CardBalanceSharingDataService;
}());

//# sourceMappingURL=cardBalanceSharingData.service.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardBalanceDataService; });
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


var CardBalanceDataService = (function () {
    function CardBalanceDataService(http) {
        this.http = http;
    }
    CardBalanceDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], CardBalanceDataService);
    return CardBalanceDataService;
}());

//# sourceMappingURL=cardBalanceData.service.js.map

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBalanceStep3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cardBalanceSharingData_service__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cardBalanceData_service__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkBalanceStep3_service__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CheckBalanceStep3Page = (function () {
    function CheckBalanceStep3Page(routeManager, navParams, navCtrl, checkBalanceService) {
        this.routeManager = routeManager;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.checkBalanceService = checkBalanceService;
    }
    CheckBalanceStep3Page.prototype.getBalanceDataInit = function () {
        if (this.navParams.get('balanceValue')) {
            this.balanceValue = this.navParams.get('balanceValue') || '';
        }
        if (this.navParams.get('cardNumber')) {
            this.cardnumber = this.navParams.get('cardNumber') || '';
        }
    };
    CheckBalanceStep3Page.prototype.ionViewWillEnter = function () {
        this.getBalanceDataInit();
        this.getContentMSG();
    };
    CheckBalanceStep3Page.prototype.getContentMSG = function () {
        var _this = this;
        var observer = {
            next: function (res) {
                if (__WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0]) && __WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response) && __WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response.message)) {
                    _this.register_or_login_MSG = res[0].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1]) && __WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response) && __WEBPACK_IMPORTED_MODULE_7__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response.message)) {
                    _this.view_transactions_MSG = res[1].response.message;
                }
            },
            error: function (error) {
            },
            complete: function () {
            }
        };
        __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].combineLatest(this.checkBalanceService.getContentFromRetreiveContent("register-or-login"), this.checkBalanceService.getContentFromRetreiveContent("view-transactions")).subscribe(observer);
    };
    CheckBalanceStep3Page.prototype.gotoStep1 = function () {
        this.navCtrl.setRoot('CheckBalanceStep1Page');
    };
    CheckBalanceStep3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkBalanceStep3',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\CardManagement\checkBalance\checkBalanceStep3\checkBalanceStep3.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Check my Balance\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=" content-wrapper">\n\n    <ion-row text-center class="m-b-30 p-t-40">\n      <ion-col col-8 push-2>\n        <div class="current-balance">\n          <h3>Current balance</h3>\n          <h1 class="openSans-bold">{{balanceValue?.balance | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</h1>\n          <p>{{cardnumber}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row text-center class="more-information">\n      <ion-col>\n        <h3 class="m-t-0 m-b-20">{{register_or_login_MSG}}</h3>\n        <p class="text-12">{{view_transactions_MSG}}</p>\n        <!--<p class="text-12">- View your transactions</p>-->\n        <!--<p class="text-12">- Get exclusive offers and deals for your card</p>-->\n        <!--<p class="text-12">- See where to spend</p>-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="footer-wrapper">\n    <ion-row padding>\n      <ion-col col-12 margin-bottom>\n        <button ion-button block large (click)="navCtrl.push(\'RegisterStep1Page\')">Register</button>\n      </ion-col>\n      <ion-col col-12>\n        <button ion-button block large (click)="navCtrl.push(\'LoginPage\')">Login</button>\n      </ion-col>\n      <ion-col col-12 text-center class="m-t-20">\n        <p class="text-link-item" (click)="navCtrl.setRoot(\'WelcomePage\', null, { animate: true, direction: \'back\' })">Return to home screen</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\CardManagement\checkBalance\checkBalanceStep3\checkBalanceStep3.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__cardBalanceData_service__["a" /* CardBalanceDataService */],
                __WEBPACK_IMPORTED_MODULE_2__cardBalanceSharingData_service__["a" /* CardBalanceSharingDataService */],
                __WEBPACK_IMPORTED_MODULE_4__checkBalanceStep3_service__["a" /* ChangeBalanceStep3Service */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__checkBalanceStep3_service__["a" /* ChangeBalanceStep3Service */]])
    ], CheckBalanceStep3Page);
    return CheckBalanceStep3Page;
}());

//# sourceMappingURL=checkBalanceStep3.js.map

/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeBalanceStep3Service; });
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


var ChangeBalanceStep3Service = (function () {
    function ChangeBalanceStep3Service(http) {
        this.http = http;
    }
    ChangeBalanceStep3Service.prototype.getBalanceCard = function (cardInformation) {
        return this.http.postwithoutAuthorWithoutRequestType("card/balance-status", cardInformation);
    };
    ChangeBalanceStep3Service.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    ChangeBalanceStep3Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], ChangeBalanceStep3Service);
    return ChangeBalanceStep3Service;
}());

//# sourceMappingURL=checkBalanceStep3.service.js.map

/***/ })

});
//# sourceMappingURL=38.js.map