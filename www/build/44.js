webpackJsonp([44],{

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSupermarketStep1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderManagementSharingData_services__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orderSupermarketStep1_service__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderSupermarketStep1 = (function () {
    function OrderSupermarketStep1(routeManager, navCtrl, orderSupermarketStep1Service) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.orderSupermarketStep1Service = orderSupermarketStep1Service;
        this.empty_top_up_card_later = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.empty_top_up_card_later;
    }
    OrderSupermarketStep1.prototype.ionViewWillEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            this.primaryCard = __WEBPACK_IMPORTED_MODULE_3__orderManagementSharingData_services__["a" /* OrderManagementSharingDataService */].getInstance().getPrimaryCard();
            this.orderGenerateSuperMarket = __WEBPACK_IMPORTED_MODULE_3__orderManagementSharingData_services__["a" /* OrderManagementSharingDataService */].getInstance().getOrderGenerateOrderSupermaket();
        }
    };
    OrderSupermarketStep1.prototype.confirmOrder = function () {
        var _this = this;
        this._unsubscribe();
        var orderData = this._buildGenerateOrderEcodeRequest();
        __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this._confirmOrder = this.orderSupermarketStep1Service.confirmOrder(orderData)
            .subscribe(function (res) {
            if (!res.ok) {
                return;
            }
            _this.navCtrl.push('OrderSupermarketStep2');
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    OrderSupermarketStep1.prototype._buildGenerateOrderEcodeRequest = function () {
        var orderSummary = {
            'orderNumber': this.orderGenerateSuperMarket.orderNumber,
        };
        return orderSummary;
    };
    OrderSupermarketStep1.prototype._unsubscribe = function () {
        if (this._confirmOrder) {
            this._confirmOrder.unsubscribe();
        }
    };
    OrderSupermarketStep1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderSupermarketStep1',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderSupermarket\orderSupermarketStep1\orderSupermarketStep1.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      confirm order\n\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n\n    <ion-row margin-bottom>\n      <ion-col>\n        <h3 class="label">Your Supermarket card</h3>\n        <p>\n          {{empty_top_up_card_later}}\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row margin-bottom>\n      <ion-col>\n        <p class="label">Order description</p>\n        <table>\n          <thead>\n            <th>Product</th>\n            <th>Quanlity</th>\n            <th>Value</th>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{orderGenerateSuperMarket?.orderlines[0]?.productDescription}}</td>\n              <td>{{orderGenerateSuperMarket?.orderlines[0]?.quantity}}</td>\n              <td>{{orderGenerateSuperMarket?.orderValue  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <td colspan="2">Sub Total</td>\n            <td>{{orderGenerateSuperMarket?.totalPaymentAmount  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</td>\n          </tfoot>\n        </table>\n      </ion-col>\n    </ion-row>\n\n    <ion-row margin-bottom>\n      <ion-col>\n        <p class="label">Billing & Delivery Address</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.title">{{orderGenerateSuperMarket?.title}} {{orderGenerateSuperMarket?.firstName}} {{orderGenerateSuperMarket?.lastName}} </p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.addressLine1">{{orderGenerateSuperMarket?.addressLine1}}</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.addressLine2">{{orderGenerateSuperMarket?.addressLine2}}</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.town">{{orderGenerateSuperMarket?.town}}</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.county">{{orderGenerateSuperMarket?.county}}</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.postcode">{{orderGenerateSuperMarket?.postcode}}</p>\n        <p class="value" *ngIf="orderGenerateSuperMarket?.country">{{orderGenerateSuperMarket?.country}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row  class="footer-wrapper">\n    <button ion-button block large color="primary" (click)="confirmOrder()">Confirm Order</button>\n  </ion-row>\n\n</ion-content>\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="OrderSupermarketStep1-back-button">\n</ion-row>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderSupermarket\orderSupermarketStep1\orderSupermarketStep1.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__orderSupermarketStep1_service__["a" /* OrderSupermarketStep1Service */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__orderSupermarketStep1_service__["a" /* OrderSupermarketStep1Service */]])
    ], OrderSupermarketStep1);
    return OrderSupermarketStep1;
}());

//# sourceMappingURL=orderSupermarketStep1.js.map

/***/ }),

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSupermarketStep1Service; });
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


var OrderSupermarketStep1Service = (function () {
    function OrderSupermarketStep1Service(http) {
        this.http = http;
    }
    OrderSupermarketStep1Service.prototype.confirmOrder = function (orderInfor) {
        return this.http.post("order/zero-value", orderInfor);
    };
    OrderSupermarketStep1Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], OrderSupermarketStep1Service);
    return OrderSupermarketStep1Service;
}());

//# sourceMappingURL=orderSupermarketStep1.service.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSupermarketStep1Module", function() { return OrderSupermarketStep1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderSupermarketStep1__ = __webpack_require__(1009);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderSupermarketStep1Module = (function () {
    function OrderSupermarketStep1Module() {
    }
    OrderSupermarketStep1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderSupermarketStep1__["a" /* OrderSupermarketStep1 */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderSupermarketStep1__["a" /* OrderSupermarketStep1 */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderSupermarketStep1__["a" /* OrderSupermarketStep1 */]]
        })
    ], OrderSupermarketStep1Module);
    return OrderSupermarketStep1Module;
}());

//# sourceMappingURL=orderSupermarketStep1.module.js.map

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
//# sourceMappingURL=44.js.map