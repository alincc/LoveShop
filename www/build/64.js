webpackJsonp([64],{

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderExchangeGiftCardStep1Module", function() { return OrderExchangeGiftCardStep1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderExchangeGiftCardStep1__ = __webpack_require__(996);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderExchangeGiftCardStep1Module = (function () {
    function OrderExchangeGiftCardStep1Module() {
    }
    OrderExchangeGiftCardStep1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderExchangeGiftCardStep1__["a" /* OrderExchangeGiftCardStep1 */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderExchangeGiftCardStep1__["a" /* OrderExchangeGiftCardStep1 */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderExchangeGiftCardStep1__["a" /* OrderExchangeGiftCardStep1 */]]
        })
    ], OrderExchangeGiftCardStep1Module);
    return OrderExchangeGiftCardStep1Module;
}());

//# sourceMappingURL=orderExchangeGiftCardStep1.module.js.map

/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderExchangeGiftCardStep1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orderExchangeGiftCardStep1_service__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var OrderExchangeGiftCardStep1 = (function () {
    function OrderExchangeGiftCardStep1(routeManager, navCtrl, orderExchangeGiftCardStep1Service) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.orderExchangeGiftCardStep1Service = orderExchangeGiftCardStep1Service;
        this.totalFee = 0;
        this.totalFeeDelivery = 0;
        this.totalPrice = 0;
        this.totalPotentialFee = 0;
        this.currentIndexDelivery = 0;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    OrderExchangeGiftCardStep1.prototype.ionViewWillEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            this.primaryCard = __WEBPACK_IMPORTED_MODULE_4__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getPrimaryCard();
            this.orderAfterGenerate = __WEBPACK_IMPORTED_MODULE_4__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataAfterGenerateOrder();
            var dataBasket = __WEBPACK_IMPORTED_MODULE_4__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
            this.allProductsOnBasket = dataBasket.productsOnBasket;
            if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.primaryCard)) {
                this.currency = __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].convertCurrency(this.primaryCard.currency);
            }
            if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.orderAfterGenerate)) {
                this.calculateTotal(this.orderAfterGenerate.orderlines, 0);
            }
        }
    };
    OrderExchangeGiftCardStep1.prototype.calculateTotal = function (products, index) {
        this.totalFee = 0;
        this.totalPrice = 0;
        this.totalFeeDelivery = 0;
        this.totalPotentialFee = 0;
        if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(products) && products.length > 0) {
            for (var i = 0; i < products.length; i++) {
                this.totalFee += products[i].feeAmount;
            }
            this.totalFeeDelivery = this.orderAfterGenerate.availableDeliveryMethods[index].cost;
            this.totalPotentialFee = this.totalFee + this.totalFeeDelivery;
            this.totalPrice = this.orderAfterGenerate.totalPaymentAmount + this.totalPotentialFee;
        }
    };
    OrderExchangeGiftCardStep1.prototype.setActiveIndex = function (index) {
        this.currentIndexDelivery = index;
        this.calculateTotal(this.orderAfterGenerate.orderlines, index);
    };
    OrderExchangeGiftCardStep1.prototype.updateDelivery = function () {
        var _this = this;
        if (this._updateDeliveryMethod) {
            this._updateDeliveryMethod.unsubscribe();
        }
        var orderData = this._buildUpdateDeliveryMethodRequest();
        __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this._updateDeliveryMethod = this.orderExchangeGiftCardStep1Service.updateDeliveryMethod(orderData)
            .subscribe(function (res) {
            if (!res.ok) {
                return;
            }
            _this.navCtrl.push('OrderExchangeGiftCardStep2', { deliveryIndex: _this.currentIndexDelivery });
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    OrderExchangeGiftCardStep1.prototype._buildUpdateDeliveryMethodRequest = function () {
        var orderSummary = {
            "propositionId": this.primaryCard.propositionId,
            "orderNumber": this.orderAfterGenerate.orderNumber,
            "title": this.orderAfterGenerate.title,
            "firstName": this.orderAfterGenerate.firstName,
            "lastName": this.orderAfterGenerate.lastName,
            "addressLine1": this.orderAfterGenerate.addressLine1,
            "addressLine2": this.orderAfterGenerate.addressLine2,
            "town": this.orderAfterGenerate.town,
            "county": this.orderAfterGenerate.county,
            "postcode": this.orderAfterGenerate.postcode,
            "country": this.orderAfterGenerate.country,
            "deliveryMethodCode": this.orderAfterGenerate.availableDeliveryMethods[this.currentIndexDelivery].code,
        };
        return orderSummary;
    };
    OrderExchangeGiftCardStep1.prototype._showError = function (message) {
        __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    OrderExchangeGiftCardStep1.prototype._handleError = function (res) {
        __WEBPACK_IMPORTED_MODULE_7__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        var msg = DEFAULT_ERROR_MSG;
        try {
            var body = JSON.parse(res._body);
            msg = body.errors[0].message;
        }
        catch (e) {
            msg = DEFAULT_ERROR_MSG;
        }
        this._showError(msg);
    };
    OrderExchangeGiftCardStep1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderExchangeGiftCardStep1',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderExchangeGiftCard\orderExchangeGiftCardStep1\orderExchangeGiftCardStep1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      delivery options\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper m-b-10">\n\n  <ion-row padding-horizontal class="p-b-5 p-t-10">\n    <ion-col col-9>\n      <span class="order-form-title">\n           Order details\n        </span>\n    </ion-col>\n    <ion-col col-3>\n      <span class="text-font-12">\n        Price\n        </span>\n    </ion-col>\n  </ion-row>\n\n\n    <ion-card class="card-item--wrapper">\n      <ion-row padding-horizontal class="product-item"  *ngFor="let product of orderAfterGenerate?.orderlines">\n        <ion-col col-9  padding-right align-self-center *ngIf="product?.imgUrl" class="card-left-panel">\n          <img *ngIf="product?.imgUrl"\n               [src]="baseResourceUrl + product?.imgUrl"/>\n          <div class="product-info"  padding-left>\n            <p class="text-font-13">{{product?.productDescription}}</p>\n            <p class="text-font-13">Quantity:<span>&nbsp;{{product?.quantity}}</span></p>\n          </div>\n        </ion-col>\n        <ion-col col-3 align-self-top class="text-font-13" *ngIf="product?.imgUrl" class="card-right-panel">\n          {{(product?.paymentAmount) | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-row padding-horizontal *ngFor="let product of orderAfterGenerate?.orderlines">\n      <ion-col col-9 class="text-font-13" *ngIf="!product?.imgUrl">\n        {{product?.productDescription}}\n      </ion-col>\n      <ion-col col-3 align-self-top class="text-font-13" *ngIf="!product?.imgUrl">\n        {{(product?.paymentAmount) | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n      </ion-col>\n    </ion-row>\n\n\n\n  <ion-row padding>\n    <ion-col col-9>\n      <p no-margin class="text-font-13">Total</p>\n    </ion-col>\n    <ion-col col-3 class="text-font-14">\n      {{orderAfterGenerate?.totalPaymentAmount | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding-top>\n    <ion-col>\n      <div class="border-divider">\n      </div>\n    </ion-col>\n  </ion-row>\n\n\n\n    <ion-row>\n      <ion-col>\n        <p class="text-font-16 step"><b>Step 1 </b>Select Delivery Type</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor="let product of orderAfterGenerate?.availableDeliveryMethods; let index= index">\n      <ion-col>\n        <ion-card [ngClass]="{\'delivery-type--wrapper\': index === currentIndexDelivery}"\n                  class="card-item--wrapper padding-20  m-b-12 select-delivery" (click)="setActiveIndex(index)">\n          <p class="title" no-margin>{{product.title}} - {{product.cost | currency:\'GBP\':\'symbol\':\'1.2-2\'}} </p>\n          <p no-margin>{{product.description}} </p>\n          <ion-icon *ngIf="index === currentIndexDelivery" name="checkmark" class="checkmark"></ion-icon>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <p class="text-font-16 step"><b>Step 2 </b>Select Delivery Address</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-card class="card-item--wrapper delivery-type--wrapper">\n      <div class="padding-10">\n        <p no-margin class="text-font-14 title">Deliver to billing address</p>\n      </div>\n      <div class="address__detail p-l-5" padding-vertical>\n        <p class="value">{{orderAfterGenerate?.title}} {{orderAfterGenerate?.firstName}}\n          {{orderAfterGenerate?.lastName}}</p>\n        <p class="value" *ngIf="orderAfterGenerate?.addressLine1">{{orderAfterGenerate?.addressLine1}}</p>\n        <p class="value" *ngIf="orderAfterGenerate?.addressLine2">{{orderAfterGenerate?.addressLine2}}</p>\n        <p class="value" *ngIf="orderAfterGenerate?.town">{{orderAfterGenerate?.town}}</p>\n        <p class="value" *ngIf="orderAfterGenerate?.county">{{orderAfterGenerate?.county}}</p>\n        <p class="value" *ngIf="orderAfterGenerate?.postcode">{{orderAfterGenerate?.postcode}}</p>\n        <p class="value" *ngIf="orderAfterGenerate?.country">{{orderAfterGenerate?.country}}</p>\n      </div>\n      <ion-icon name="checkmark" class="checkmark"></ion-icon>\n    </ion-card>\n\n\n\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <button ion-button block large="" color="primary" (click)="updateDelivery()">Continue to Payment</button>\n  </ion-row>\n</ion-content>\n\n\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="OrderExchangeGiftCardStep1-back-button">\n</ion-row>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderExchangeGiftCard\orderExchangeGiftCardStep1\orderExchangeGiftCardStep1.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__orderExchangeGiftCardStep1_service__["a" /* OrderExchangeGiftCardStep1Service */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__orderExchangeGiftCardStep1_service__["a" /* OrderExchangeGiftCardStep1Service */]])
    ], OrderExchangeGiftCardStep1);
    return OrderExchangeGiftCardStep1;
}());

//# sourceMappingURL=orderExchangeGiftCardStep1.js.map

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderExchangeGiftCardStep1Service; });
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


var OrderExchangeGiftCardStep1Service = (function () {
    function OrderExchangeGiftCardStep1Service(http) {
        this.http = http;
    }
    OrderExchangeGiftCardStep1Service.prototype.confirmOrder = function (orderInfor) {
        return this.http.post("order/payment/flexecash", orderInfor);
    };
    OrderExchangeGiftCardStep1Service.prototype.updateDeliveryMethod = function (orderInforToUpdateDelivery) {
        return this.http.put("order/delivery", orderInforToUpdateDelivery);
    };
    OrderExchangeGiftCardStep1Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], OrderExchangeGiftCardStep1Service);
    return OrderExchangeGiftCardStep1Service;
}());

//# sourceMappingURL=orderExchangeGiftCardStep1.service.js.map

/***/ })

});
//# sourceMappingURL=64.js.map