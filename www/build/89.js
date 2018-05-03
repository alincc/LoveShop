webpackJsonp([89],{

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderECodeStep2Module", function() { return orderECodeStep2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderECodeStep2__ = __webpack_require__(995);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var orderECodeStep2Module = (function () {
    function orderECodeStep2Module() {
    }
    orderECodeStep2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderECodeStep2__["a" /* OrderEcodeStep2 */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderECodeStep2__["a" /* OrderEcodeStep2 */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderECodeStep2__["a" /* OrderEcodeStep2 */]]
        })
    ], orderECodeStep2Module);
    return orderECodeStep2Module;
}());

//# sourceMappingURL=orderECodeStep2.module.js.map

/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderEcodeStep2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_appConfig__ = __webpack_require__(43);
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







var OrderEcodeStep2 = (function () {
    function OrderEcodeStep2(routeManager, navCtrl) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.ecodes_mailed_to = __WEBPACK_IMPORTED_MODULE_4__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.ecodes_mailed_to;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_4__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    OrderEcodeStep2.prototype.ionViewWillEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            this.primaryCard = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getPrimaryCard();
            this.orderGenerateEcode = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataAfterGenerateOrder();
        }
        var dataBasket = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        this.allProductsOnBasket = dataBasket.productsOnBasket;
    };
    OrderEcodeStep2.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().resetState();
    };
    OrderEcodeStep2.prototype.ionViewDidLeave = function () {
        __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().resetState();
    };
    OrderEcodeStep2.prototype.gotoBenefit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery___default()('.app-root').removeClass('not-show-tab');
        __WEBPACK_IMPORTED_MODULE_6__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().updateListCard$.next('update');
        __WEBPACK_IMPORTED_MODULE_6__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().updateListCard$.asObservable().take(1).subscribe(function () {
            _this.navCtrl.popToRoot();
        });
    };
    OrderEcodeStep2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderEcodeStep2',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderECode\orderECodeStep2\orderECodeStep2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      order complete\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n\n    <ion-card class="card-item--wrapper order-num" padding margin-bottom>\n      <p text-center>\n        Order #{{orderGenerateEcode?.orderNumber}}\n      </p>\n    </ion-card>\n\n    <ion-row class="p-t-15">\n      <ion-col>\n        <h6 class="order-list-title" padding-left>Your order:</h6>\n      </ion-col>\n    </ion-row>\n    <ion-card class="card-item--wrapper">\n      <ion-row padding-horizontal class="product-item"  *ngFor="let product of orderGenerateEcode?.orderlines">\n        <ion-col col-9  padding-right align-self-center *ngIf="product?.imgUrl" class="card-left-panel">\n          <img *ngIf="product?.imgUrl"\n               [src]="baseResourceUrl + product?.imgUrl"/>\n          <div class="product-info"  padding-left>\n            <p class="text-font-13">{{product?.productDescription}}</p>\n            <p class="text-font-13">Quantity:<span>&nbsp;{{product?.quantity}}</span></p>\n          </div>\n        </ion-col>\n        <ion-col col-3 align-self-top class="text-font-13 card-right-panel" *ngIf="product?.imgUrl">\n          {{(product?.paymentAmount) | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-row padding-horizontal *ngFor="let product of orderGenerateEcode?.orderlines">\n      <ion-col col-9 class="text-font-13" *ngIf="!product?.imgUrl">\n        {{product?.productDescription}}\n      </ion-col>\n      <ion-col col-3 align-self-top class="text-font-13" *ngIf="!product?.imgUrl">\n        {{(product?.paymentAmount) | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row padding-horizontal class="p-t-5">\n      <ion-col col-9 class="text-font-13">\n        <p no-margin>Total</p>\n      </ion-col>\n      <ion-col col-3 class="text-font-13">\n        {{orderGenerateEcode?.totalPaymentAmount | currency:\'GBP\':\'symbol\':\'1.2-2\'}}\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class="p-t-25" *ngIf="this.orderGenerateEcode?.deliveryEmailAddress">\n      <ion-col>\n        <h6 class="order-list-title" padding-left>Delivery Type:</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-card class="card-item--wrapper delivery-type--wrapper padding-20"  *ngIf="this.orderGenerateEcode?.deliveryEmailAddress">\n      <p no-margin class="title" >{{ecodes_mailed_to}}</p>\n      <p no-margin>{{this.orderGenerateEcode?.deliveryEmailAddress}}</p>\n      <ion-icon name="checkmark" class="checkmark"></ion-icon>\n    </ion-card>\n\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button block large color="primary" (click)="gotoBenefit()">Back to Benefits Menu</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderECode\orderECodeStep2\orderECodeStep2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], OrderEcodeStep2);
    return OrderEcodeStep2;
}());

//# sourceMappingURL=orderECodeStep2.js.map

/***/ })

});
//# sourceMappingURL=89.js.map