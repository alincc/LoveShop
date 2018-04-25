webpackJsonp([87],{

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderMixBasketStep3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderMixBasketStep3 = (function () {
    function OrderMixBasketStep3(routeManager, navCtrl) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_4__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    OrderMixBasketStep3.prototype.ionViewWillEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            this.primaryCard = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getPrimaryCard();
            this.orderAfterGenerate = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataAfterGenerateOrder();
            var dataBasket = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
            this.allProductsOnBasket = dataBasket.productsOnBasket;
        }
    };
    OrderMixBasketStep3.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().resetState();
    };
    OrderMixBasketStep3.prototype.gotoBenefit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().updateListCard$.next('update');
        __WEBPACK_IMPORTED_MODULE_5__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().updateListCard$.asObservable().take(1).subscribe(function () {
            _this.navCtrl.parent.select(2);
        });
    };
    OrderMixBasketStep3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderMixBasketStep3',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderMixBasket\orderMixBasketStep3\orderMixBasketStep3.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      order complete\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <ion-card class="card-item--wrapper" padding margin-bottom>\n      <p text-center>\n        Order #{{orderGenerateEcode?.orderNumber}}\n      </p>\n    </ion-card>\n\n    <ion-card class="card-item--wrapper">\n      <ion-row padding class="card-item--wrapper product-item item-border" *ngFor="let product of allProductsOnBasket">\n        <ion-col col-9  padding-right align-self-center class="card-left-panel">\n          <img *ngIf="product?.subCategory?.image"\n               [src]=" baseResourceUrl + product?.subCategory?.image"/>\n          <div class="product-info"  padding-left>\n            <p class="text-font-13">{{product?.name}}</p>\n            <p class="text-font-13">Quantity:<span>&nbsp;{{product?.quantity}}</span></p>\n          </div>\n        </ion-col>\n        <ion-col col-3 align-self-top >\n          <div>\n            <p class="text-font-13">{{(product?.price)*(product?.quantity) | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-row class="p-t-25">\n      <ion-col>\n        <h6 class="text-font-14" padding-left>Delivery Type</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor="let product of orderAfterGenerate?.availableDeliveryMethods; let index= index">\n      <ion-col>\n        <ion-card class="card-item--wrapper  delivery-type--wrapper padding-20">\n          <p no-margin>{{product.title}} {{product.cost}} </p>\n          <p no-margin>{{product.description}} </p>\n          <ion-icon name="checkmark" class="checkmark"></ion-icon>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n\n<ion-footer no-shadow  padding>\n  <ion-toolbar position="bottom" padding-horizontal>\n    <button ion-button block color="primary" (click)="gotoBenefit()">Back to Benefits Menu</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderMixBasket\orderMixBasketStep3\orderMixBasketStep3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], OrderMixBasketStep3);
    return OrderMixBasketStep3;
}());

//# sourceMappingURL=orderMixBasketStep3.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderMixBasketStep3Module", function() { return OrderMixBasketStep3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderMixBasketStep3__ = __webpack_require__(1007);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderMixBasketStep3Module = (function () {
    function OrderMixBasketStep3Module() {
    }
    OrderMixBasketStep3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderMixBasketStep3__["a" /* OrderMixBasketStep3 */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderMixBasketStep3__["a" /* OrderMixBasketStep3 */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderMixBasketStep3__["a" /* OrderMixBasketStep3 */]]
        })
    ], OrderMixBasketStep3Module);
    return OrderMixBasketStep3Module;
}());

//# sourceMappingURL=orderMixBasketStep3.module.js.map

/***/ })

});
//# sourceMappingURL=87.js.map