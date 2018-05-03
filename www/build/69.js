webpackJsonp([69],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exchang4SpendOnlinePageModule", function() { return Exchang4SpendOnlinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchang4SpendOnline__ = __webpack_require__(905);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Exchang4SpendOnlinePageModule = (function () {
    function Exchang4SpendOnlinePageModule() {
    }
    Exchang4SpendOnlinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__exchang4SpendOnline__["a" /* Exchang4SpendOnlinePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exchang4SpendOnline__["a" /* Exchang4SpendOnlinePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__exchang4SpendOnline__["a" /* Exchang4SpendOnlinePage */]]
        })
    ], Exchang4SpendOnlinePageModule);
    return Exchang4SpendOnlinePageModule;
}());

//# sourceMappingURL=exchang4SpendOnline.module.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exchang4SpendOnlinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchang4SpendOnline_service__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Exchang4SpendOnlinePage = (function () {
    function Exchang4SpendOnlinePage(routeManager, alertCtrl, navParams, navCtrl, exchang4SpendOnlineService) {
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.exchang4SpendOnlineService = exchang4SpendOnlineService;
        this.categoryName = 'Exchange to Spend Online';
        this.images = [];
        this.add_card_important_card_info = __WEBPACK_IMPORTED_MODULE_4__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.add_card_important_card_info;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_4__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    Exchang4SpendOnlinePage.prototype.ionViewDidEnter = function () {
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
    Exchang4SpendOnlinePage.prototype.ionViewDidLeave = function () {
        this._unsubscribe();
    };
    Exchang4SpendOnlinePage.prototype.extracMsgFee = function (contentMsg) {
        this.feeMsg = '';
        var indexString = contentMsg.shortDescription.indexOf('Please Note:');
        if (indexString > -1) {
            this.feeMsg = contentMsg.shortDescription.substr(indexString).replace(/<[^>]*>/g, "").replace("Please Note:", "").trim();
        }
    };
    Exchang4SpendOnlinePage.prototype.showCardInformation = function (card, index) {
        this.navCtrl.push("MasterCardInfoPage", { card: card, products: this.products, masterCardTypeSelected: this.products[index], idx: index, primaryCard: this.card });
    };
    Exchang4SpendOnlinePage.prototype.showCardExchange = function (card, index) {
        var product = (card && Array.isArray(card.products)) ? card.products[0] : card;
        this.extracMsgFee(card);
        this.navCtrl.push("MasterCardExchangePage", { targetCard: product, masterCardTypeSelected: this.products[index], primaryCard: this.card, feeMsg: this.feeMsg });
    };
    Exchang4SpendOnlinePage.prototype._buildCatalogueRequest = function () {
        var catalogueType = __WEBPACK_IMPORTED_MODULE_2__exchang4SpendOnline_service__["a" /* CatalogueTypes */].PRODUCT;
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
    Exchang4SpendOnlinePage.prototype._resetData = function () {
        this.products = [];
        this.card = null;
        this.noContent = false;
        this.benefit = null;
    };
    Exchang4SpendOnlinePage.prototype._extractsCardFromCatalogues = function (catalogues) {
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
    Exchang4SpendOnlinePage.prototype._selectCategoryImage = function (cat) {
        if (cat.smallImages && Array.isArray(cat.smallImages) && cat.smallImages[0]) {
            return cat.smallImages[0];
        }
        return null;
    };
    Exchang4SpendOnlinePage.prototype._unsubscribe = function () {
        if (this._getCardsSub) {
            this._getCardsSub.unsubscribe();
        }
    };
    Exchang4SpendOnlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exchang4SpendOnline',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\benefits\exchange\exchang4SpendOnline\exchang4SpendOnline.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Exchange to spend online\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="mastercard-exchange" [class.centered]="products && products.length && products.length < 3" padding>\n  <ion-list class="mastercard-exchange__list">\n    <ion-item class="mastercard-exchange__item" *ngFor="let product of products ; let idx = index">\n      <ion-card (click)="showCardExchange(product, idx)">\n        <img [src]="baseResourceUrl+ product?.mediumImages[0]" alt="{{product?.name}}">\n        <div class="additional">\n          <p class="circle" *ngIf="products.length === 1">\n            <span>No</span> additional charge\n          </p>\n          <p class="circle" *ngIf="products.length > 1 && idx === 1">\n            <span>No</span> additional charge\n          </p>\n          <p class="circle" *ngIf=" products.length > 1 && idx === 0">\n            <span>10%</span> charge applies\n          </p>\n        </div>\n      </ion-card>\n      <ion-row>\n        <button class="select-mastercard" block ion-button (click)="showCardExchange(product, idx)">\n          <span>Choose {{product?.name}}</span>\n        </button>\n      </ion-row>\n      <ion-row>\n        <button ion-button outline block class="card-btn" (click)="showCardInformation(product, idx)">\n          <span title="product?.longDescription">{{add_card_important_card_info}}</span>\n          <ion-icon class="ios-information" name="ios-information"></ion-icon>\n        </button>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="Exchang4SpendOnlinePage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\benefits\exchange\exchang4SpendOnline\exchang4SpendOnline.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__exchang4SpendOnline_service__["b" /* Exchang4SpendOnlineService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__exchang4SpendOnline_service__["b" /* Exchang4SpendOnlineService */]])
    ], Exchang4SpendOnlinePage);
    return Exchang4SpendOnlinePage;
}());

//# sourceMappingURL=exchang4SpendOnline.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Exchang4SpendOnlineService; });
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
var Exchang4SpendOnlineService = (function () {
    function Exchang4SpendOnlineService(http) {
        this.http = http;
    }
    Exchang4SpendOnlineService.prototype.getRetrieveCatalogue = function (body) {
        return this.http.post("card/catalogue", body);
    };
    Exchang4SpendOnlineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], Exchang4SpendOnlineService);
    return Exchang4SpendOnlineService;
}());

//# sourceMappingURL=exchang4SpendOnline.service.js.map

/***/ })

});
//# sourceMappingURL=69.js.map