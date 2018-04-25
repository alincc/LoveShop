webpackJsonp([63],{

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSupermarketStep2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderManagementSharingData_services__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderSupermarketStep2 = (function () {
    function OrderSupermarketStep2(routeManager, navCtrl) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
    }
    OrderSupermarketStep2.prototype.ionViewWillEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            this.primaryCard = __WEBPACK_IMPORTED_MODULE_3__orderManagementSharingData_services__["a" /* OrderManagementSharingDataService */].getInstance().getPrimaryCard();
            this.orderGenerateSuperMarket = __WEBPACK_IMPORTED_MODULE_3__orderManagementSharingData_services__["a" /* OrderManagementSharingDataService */].getInstance().getOrderGenerateOrderSupermaket();
            if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.primaryCard)) {
                this.currency = __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].convertCurrency(this.primaryCard.currency);
            }
        }
    };
    OrderSupermarketStep2.prototype.gotoBenefit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery___default()('.app-root').removeClass('not-show-tab');
        __WEBPACK_IMPORTED_MODULE_6__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().updateListCard$.next('update');
        __WEBPACK_IMPORTED_MODULE_6__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().updateListCard$.asObservable().take(1).subscribe(function () {
            _this.navCtrl.popToRoot();
        });
    };
    OrderSupermarketStep2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-oderSupermarketStep2',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderSupermarket\orderSupermarketStep2\orderSupermarketStep2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Thank you For Your Order\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-card class="card-item--wrapper order-num" padding margin-bottom>\n      <p text-center>\n        Order #{{orderGenerateSuperMarket?.orderNumber}}\n      </p>\n    </ion-card>\n\n    <ion-row margin-bottom>\n      <ion-col>\n        <p class="label">Order description</p>\n        <table>\n            <thead>\n              <th> Product</th>\n              <th>Quanlity</th>\n              <th>Value</th>\n            </thead>\n            <tbody>\n              <tr>\n                <td>{{orderGenerateSuperMarket?.orderlines[0]?.productDescription}}</td>\n                <td>{{orderGenerateSuperMarket?.orderlines[0]?.quantity}}</td>\n                <td>{{orderGenerateSuperMarket?.orderValue  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <td colspan="2">Sub Total</td>\n              <td>{{orderGenerateSuperMarket?.totalPaymentAmount  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</td>\n            </tfoot>\n          </table>\n      </ion-col>\n    </ion-row>\n\n    <ion-row margin-bottom>\n      <ion-col>\n        <p class="label">Billing & Delivery Address</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.addressLine1">{{orderGenerateSuperMarket?.title}} {{orderGenerateSuperMarket?.firstName}} {{orderGenerateSuperMarket?.lastName}} </p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.addressLine1">{{orderGenerateSuperMarket?.addressLine1}}</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.addressLine2">{{orderGenerateSuperMarket?.addressLine2}}</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.town">{{orderGenerateSuperMarket?.town}}</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.county">{{orderGenerateSuperMarket?.county}}</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.postcode">{{orderGenerateSuperMarket?.postcode}}</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.country">{{orderGenerateSuperMarket?.country}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row class="footer-wrapper">\n    <button ion-button block large color="primary" (click)="gotoBenefit()">Back to Benefits Menu</button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderSupermarket\orderSupermarketStep2\orderSupermarketStep2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], OrderSupermarketStep2);
    return OrderSupermarketStep2;
}());

//# sourceMappingURL=orderSupermarketStep2.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSupermarketStep2Module", function() { return OrderSupermarketStep2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderSupermarketStep2__ = __webpack_require__(1010);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderSupermarketStep2Module = (function () {
    function OrderSupermarketStep2Module() {
    }
    OrderSupermarketStep2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderSupermarketStep2__["a" /* OrderSupermarketStep2 */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderSupermarketStep2__["a" /* OrderSupermarketStep2 */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderSupermarketStep2__["a" /* OrderSupermarketStep2 */]]
        })
    ], OrderSupermarketStep2Module);
    return OrderSupermarketStep2Module;
}());

//# sourceMappingURL=orderSupermarketStep2.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderManagementSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);

var OrderManagementSharingDataService = (function () {
    function OrderManagementSharingDataService() {
        this.defaultMasterData = {};
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](this.currentMasterData);
        if (OrderManagementSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use YourCardDetailsSharingDataService.getInstance() instead of new.');
        }
        OrderManagementSharingDataService._instance = this;
    }
    Object.defineProperty(OrderManagementSharingDataService.prototype, "state$", {
        get: function () {
            return this._state$;
        },
        enumerable: true,
        configurable: true
    });
    OrderManagementSharingDataService.prototype.resetState = function () {
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$.next(this.currentMasterData);
    };
    OrderManagementSharingDataService.prototype.saveOrderGenerateOrderSupermarket = function (data) {
        this.orderGenerateSupermarket = data;
    };
    OrderManagementSharingDataService.prototype.getOrderGenerateOrderSupermaket = function () {
        return this.orderGenerateSupermarket;
    };
    OrderManagementSharingDataService.prototype.resetOrderGenerateOrderSuperMarket = function () {
        this.orderGenerateSupermarket = Object.assign({}, this.defaultMasterData);
    };
    OrderManagementSharingDataService.prototype.savePrimaryCard = function (data) {
        this.primaryCard = data;
    };
    OrderManagementSharingDataService.prototype.getPrimaryCard = function () {
        return this.primaryCard;
    };
    OrderManagementSharingDataService.prototype.resetPrimaryCard = function () {
        this.primaryCard = Object.assign({}, this.defaultMasterData);
    };
    OrderManagementSharingDataService.getInstance = function () {
        return OrderManagementSharingDataService._instance;
    };
    OrderManagementSharingDataService._instance = new OrderManagementSharingDataService();
    return OrderManagementSharingDataService;
}());

//# sourceMappingURL=orderManagementSharingData.services.js.map

/***/ })

});
//# sourceMappingURL=63.js.map