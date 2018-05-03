webpackJsonp([50],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyDiscountedSupperGiftCardPageModule", function() { return BuyDiscountedSupperGiftCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyDiscountedSupperGiftCard__ = __webpack_require__(902);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyDiscountedSupperGiftCardPageModule = (function () {
    function BuyDiscountedSupperGiftCardPageModule() {
    }
    BuyDiscountedSupperGiftCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__buyDiscountedSupperGiftCard__["a" /* BuyDiscountedSupperGiftCardPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buyDiscountedSupperGiftCard__["a" /* BuyDiscountedSupperGiftCardPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__buyDiscountedSupperGiftCard__["a" /* BuyDiscountedSupperGiftCardPage */]]
        })
    ], BuyDiscountedSupperGiftCardPageModule);
    return BuyDiscountedSupperGiftCardPageModule;
}());

//# sourceMappingURL=buyDiscountedSupperGiftCard.module.js.map

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

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyDiscountedSupperGiftCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyDiscountedSupperGiftCard_service__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orderManagement_orderManagementSharingData_services__ = __webpack_require__(827);
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







var BuyDiscountedSupperGiftCardPage = (function () {
    function BuyDiscountedSupperGiftCardPage(routeManager, alertCtrl, navParams, navCtrl, buyDiscountedSupperGiftCardService) {
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.buyDiscountedSupperGiftCardService = buyDiscountedSupperGiftCardService;
        this.categoryName = 'discounted supermarket cards';
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
        this.basket_form_no_card_available = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.basket_form_no_card_available;
    }
    BuyDiscountedSupperGiftCardPage.prototype.ionViewWillEnter = function () {
        this._resetData();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('benefit')) {
                this.benefit = this.navParams.get('benefit');
            }
            if (this.navParams.get('card')) {
                this.card = this.navParams.get('card');
            }
            if (this.navParams.get('catalogues')) {
                var catalogues = this.navParams.get('catalogues');
                this.products = this._extractsCardFromCatalogues(catalogues);
            }
        }
    };
    BuyDiscountedSupperGiftCardPage.prototype.ionViewDidLeave = function () {
        this._unsubscribe();
    };
    BuyDiscountedSupperGiftCardPage.prototype.gotoOrder = function (product) {
        var _this = this;
        if (this._generateOrder) {
            this._generateOrder.unsubscribe();
        }
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var body = this._buildGenerateOrderRequest(product);
        this.buyDiscountedSupperGiftCardService.generateOrder(body)
            .subscribe(function (res) {
            if (!res.ok) {
                return;
            }
            var body = res.response;
            __WEBPACK_IMPORTED_MODULE_5__orderManagement_orderManagementSharingData_services__["a" /* OrderManagementSharingDataService */].getInstance().savePrimaryCard((_this.card));
            __WEBPACK_IMPORTED_MODULE_5__orderManagement_orderManagementSharingData_services__["a" /* OrderManagementSharingDataService */].getInstance().saveOrderGenerateOrderSupermarket(body);
            _this.navCtrl.push("OrderSupermarketStep1");
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    BuyDiscountedSupperGiftCardPage.prototype._buildGenerateOrderRequest = function (product) {
        var body = {
            "propositionId": this.card.propositionId,
            "orderJourney": "ORDER_STORE_CARD",
            "orderlines": []
        };
        var orderLineProductSelected = {
            "productCode": product.productCode,
            "quantity": 1,
        };
        body.orderlines.push(orderLineProductSelected);
        return body;
    };
    BuyDiscountedSupperGiftCardPage.prototype._buildCatalogueRequest = function () {
        var catalogueType = __WEBPACK_IMPORTED_MODULE_2__buyDiscountedSupperGiftCard_service__["b" /* CatalogueTypes */].PRODUCT;
        var body = {
            propositionId: this.card.propositionId,
            productCode: this.card.productCode,
            series: this.card.series,
            scheme: this.card.scheme,
            url: this.benefit.url,
            catalogueType: catalogueType
        };
        return body;
    };
    BuyDiscountedSupperGiftCardPage.prototype._extractsCardFromCatalogues = function (catalogues) {
        var products = [];
        if (Array.isArray(catalogues)) {
            for (var i = 0; i < catalogues.length; i++) {
                var catalogue = catalogues[i];
                if (Array.isArray(catalogue.categories)) {
                    for (var j = 0; j < catalogue.categories.length; j++) {
                        var category = catalogue.categories[j];
                        category.image = this._selectCategoryImage(category);
                        if (category.name.toLowerCase() == this.categoryName.toLowerCase()) {
                            this.catalogue = catalogue;
                            this.category = category;
                            var str = this.category.longDescription;
                            if (this.category.longDescription.indexOf(this.baseResourceUrl) < 1) {
                                this.category.longDescription = str.replace('src="', 'src="' + this.baseResourceUrl);
                            }
                            if (Array.isArray(category.subCategories)) {
                                for (var k = 0; k < category.subCategories.length; k++) {
                                    var subCategory = category.subCategories[k];
                                    subCategory.image = this._selectCategoryImage(subCategory);
                                    if (Array.isArray(subCategory.products)) {
                                        for (var l = 0; l < subCategory.products.length; l++) {
                                            subCategory.products[l].benefit = this.benefit;
                                            subCategory.products[l].subCategory = subCategory;
                                            subCategory.products[l].category = category;
                                            subCategory.products[l].catalogue = catalogue;
                                        }
                                    }
                                }
                                products = category.subCategories;
                            }
                            else if (Array.isArray(category.products)) {
                                products = category.products;
                            }
                        }
                    }
                }
            }
        }
        return products;
    };
    BuyDiscountedSupperGiftCardPage.prototype._selectCategoryImage = function (cat) {
        if (cat.smallImages && Array.isArray(cat.smallImages) && cat.smallImages[0]) {
            return cat.smallImages[0];
        }
        return null;
    };
    BuyDiscountedSupperGiftCardPage.prototype._resetData = function () {
        this.products = [];
        this.benefit = null;
        this.catalogue = null;
        this.catalogue = null;
        this.noContent = false;
    };
    BuyDiscountedSupperGiftCardPage.prototype._unsubscribe = function () {
        if (this._getCardsSub) {
            this._getCardsSub.unsubscribe();
        }
    };
    BuyDiscountedSupperGiftCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buyDiscountedSupperGiftCard',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\benefits\buy\buyDiscountedSupperGiftCard\buyDiscountedSupperGiftCard.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title center>\n      SuperMarket Discount Cards\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <div class="sub-desc" [innerHTML]="category?.longDescription"></div>\n    </ion-row>\n  </ion-grid>\n  <ion-row class="mastercard-exchange-main" [class.centered]="products && products.length && products.length < 3">\n    <ion-list class="mastercard-exchange__list">\n      <ion-card class="mastercard-exchange__item m-b-15" *ngFor="let product of products" (click)="gotoOrder(product)">\n        <ion-grid class="list-item">\n          <ion-row>\n            <ion-col class="list-item-content" col-4>\n              <div class="card-icon">\n                <img [src]="baseResourceUrl + product?.smallImages[0]" />\n              </div>\n            </ion-col>\n            <ion-col col-8 class="title-center">\n              <h3>{{product?.name}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-list>\n  </ion-row>\n  <ion-grid *ngIf="noContent">\n    <ion-row>\n      <ion-col center-text>\n        <p>{{basket_form_no_card_available}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="BuyDiscountedSupperGiftCardPage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\benefits\buy\buyDiscountedSupperGiftCard\buyDiscountedSupperGiftCard.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__buyDiscountedSupperGiftCard_service__["a" /* BuyDiscountedSupperGiftCardService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__buyDiscountedSupperGiftCard_service__["a" /* BuyDiscountedSupperGiftCardService */]])
    ], BuyDiscountedSupperGiftCardPage);
    return BuyDiscountedSupperGiftCardPage;
}());

//# sourceMappingURL=buyDiscountedSupperGiftCard.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CatalogueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyDiscountedSupperGiftCardService; });
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


var CatalogueTypes = {
    PRODUCT: 'P',
    PERSONALISATION: 'S',
    FULFILMENT: 'F'
};
var BuyDiscountedSupperGiftCardService = (function () {
    function BuyDiscountedSupperGiftCardService(http) {
        this.http = http;
    }
    BuyDiscountedSupperGiftCardService.prototype.getRetrieveCatalogue = function (body) {
        return this.http.post("card/catalogue", body);
    };
    BuyDiscountedSupperGiftCardService.prototype.generateOrder = function (orderInfor) {
        return this.http.post("order", orderInfor);
    };
    BuyDiscountedSupperGiftCardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], BuyDiscountedSupperGiftCardService);
    return BuyDiscountedSupperGiftCardService;
}());

//# sourceMappingURL=buyDiscountedSupperGiftCard.service.js.map

/***/ })

});
//# sourceMappingURL=50.js.map