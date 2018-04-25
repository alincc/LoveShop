webpackJsonp([51],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyDiscountedGiftCardPageModule", function() { return BuyDiscountedGiftCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyDiscountedGiftCard__ = __webpack_require__(900);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyDiscountedGiftCardPageModule = (function () {
    function BuyDiscountedGiftCardPageModule() {
    }
    BuyDiscountedGiftCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__buyDiscountedGiftCard__["a" /* BuyDiscountedGiftCardPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buyDiscountedGiftCard__["a" /* BuyDiscountedGiftCardPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__buyDiscountedGiftCard__["a" /* BuyDiscountedGiftCardPage */]]
        })
    ], BuyDiscountedGiftCardPageModule);
    return BuyDiscountedGiftCardPageModule;
}());

//# sourceMappingURL=buyDiscountedGiftCard.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardType; });
var CardType = (function () {
    function CardType() {
    }
    CardType.FLEXECASH = 'FLEXECASH';
    CardType.FLEXECODE = 'FLEXECODE_2.0';
    CardType.PMASTERCARD = 'PMASTERCARD';
    CardType.TESCO = 'TESCO';
    CardType.SAINSBURYS = 'SAINSBURYS';
    CardType.MASTERCARD = 'MASTERCARD';
    return CardType;
}());

//# sourceMappingURL=card-type.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyDiscountedGiftCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buyDiscountedGiftCard_service__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_card_type__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var BuyDiscountedGiftCardPage = (function () {
    function BuyDiscountedGiftCardPage(routeManager, alertCtrl, navParams, navCtrl, buyDiscountedGiftCardService) {
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.buyDiscountedGiftCardService = buyDiscountedGiftCardService;
        this.categoryName = 'discounted gift cards';
        this.basket_form_checkout_current_product = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.basket_form_checkout_current_product;
        this.basket_form_no_card_available = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.basket_form_no_card_available;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    BuyDiscountedGiftCardPage.prototype.ionViewWillEnter = function () {
        this._resetData();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.app-root').removeClass('not-show-tab');
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
    BuyDiscountedGiftCardPage.prototype.ionViewDidLeave = function () {
        this._unsubscribe();
    };
    BuyDiscountedGiftCardPage.prototype.get4LastDigitsCardNumber = function (card) {
        var cardNumber = null;
        if (card.cardType === __WEBPACK_IMPORTED_MODULE_8__models_card_type__["a" /* CardType */].FLEXECODE) {
            cardNumber = card.cardId;
        }
        else {
            cardNumber = card.cardNumber;
        }
        if (!cardNumber) {
            return null;
        }
        if (card.cardType === __WEBPACK_IMPORTED_MODULE_8__models_card_type__["a" /* CardType */].FLEXECODE && cardNumber.indexOf('-') > 0) {
            cardNumber = cardNumber.replace(/-/g, "");
        }
        return cardNumber.substr(cardNumber.length - 4);
    };
    BuyDiscountedGiftCardPage.prototype.ionViewDidEnter = function () {
        this.calculateProductOnbasket();
    };
    BuyDiscountedGiftCardPage.prototype.calculateProductOnbasket = function () {
        this.productsOnBasket = 0;
        var dataBasket = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        for (var i = 0; i < dataBasket.productsOnBasket.length; i++) {
            this.productsOnBasket += parseInt(dataBasket.productsOnBasket[i].quantity);
        }
    };
    BuyDiscountedGiftCardPage.prototype.gotoBuyADiscountedGiftCard = function (product) {
        this.navCtrl.push('BuyADiscountedGiftCardPage', {
            offer: product,
            primaryCard: this.card,
            catalogue: this.catalogue,
            category: this.category
        });
    };
    BuyDiscountedGiftCardPage.prototype._buildCatalogueRequest = function () {
        var catalogueType = __WEBPACK_IMPORTED_MODULE_4__buyDiscountedGiftCard_service__["b" /* CatalogueTypes */].PRODUCT;
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
    BuyDiscountedGiftCardPage.prototype._handleError = function (res) {
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
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
    BuyDiscountedGiftCardPage.prototype._extractsCardFromCatalogues = function (catalogues) {
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
    BuyDiscountedGiftCardPage.prototype._selectCategoryImage = function (cat) {
        if (cat.smallImages && Array.isArray(cat.smallImages) && cat.smallImages[0]) {
            return cat.smallImages[0];
        }
        return null;
    };
    BuyDiscountedGiftCardPage.prototype._resetData = function () {
        this.products = [];
        this.benefit = null;
        this.catalogue = null;
        this.catalogue = null;
        this.noContent = false;
    };
    BuyDiscountedGiftCardPage.prototype._showError = function (message) {
        __WEBPACK_IMPORTED_MODULE_2__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    BuyDiscountedGiftCardPage.prototype._unsubscribe = function () {
        if (this._getCardsSub) {
            this._getCardsSub.unsubscribe();
        }
    };
    BuyDiscountedGiftCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buyDiscountedGiftCard',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\buy\buyDiscountedGiftCard\buyDiscountedGiftCard.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title center>\n      Discounted Gift Cards\n    </ion-title>\n    <ion-buttons right>\n        <button ion-button icon-only (click)="navCtrl.push(\'MyShoppingBasketPage\')">\n          <ion-icon name="ios-basket-outline">\n            <ion-badge *ngIf="this.productsOnBasket > 0" class="cart-badge" color="danger">{{this.productsOnBasket}}</ion-badge>\n          </ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row paddingtext-center padding>\n    <p class="sub-desc">To purchase gift cards, you will need your Debit or Credit card.</p>\n  </ion-row>  \n  <ion-row class="card-offers">\n    <ion-list>\n      <ion-card *ngFor="let product of products">\n        <ion-grid>\n          <ion-row class="list-item" (click)="gotoBuyADiscountedGiftCard(product)">\n            <ion-col class="list-item-content" col-4>\n                <div class="card-icon">\n                  <ion-icon *ngIf="!product.image" name="ios-basket-outline"></ion-icon>\n                  <img *ngIf="product?.image" [src]="baseResourceUrl + product?.image" />\n                </div>\n            </ion-col>\n            <ion-col col-8 class="title-center">\n                <h3 class="title montserrat-regular text-uppercase">{{ product?.name }}</h3>\n                <!--<div class="desc" [innerHTML]="product?.shortDescription"></div>-->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-list>\n  </ion-row>\n  <ion-grid *ngIf="noContent">\n    <ion-row>\n      <ion-col center-text>\n        <p>{{basket_form_no_card_available}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="BuyDiscountedGiftCardPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\buy\buyDiscountedGiftCard\buyDiscountedGiftCard.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__buyDiscountedGiftCard_service__["a" /* BuyDiscountedGiftCardService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__buyDiscountedGiftCard_service__["a" /* BuyDiscountedGiftCardService */]])
    ], BuyDiscountedGiftCardPage);
    return BuyDiscountedGiftCardPage;
}());

//# sourceMappingURL=buyDiscountedGiftCard.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CatalogueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyDiscountedGiftCardService; });
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
var BuyDiscountedGiftCardService = (function () {
    function BuyDiscountedGiftCardService(http) {
        this.http = http;
    }
    BuyDiscountedGiftCardService.prototype.getRetrieveCatalogue = function (body) {
        return this.http.post("card/catalogue", body);
    };
    BuyDiscountedGiftCardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], BuyDiscountedGiftCardService);
    return BuyDiscountedGiftCardService;
}());

//# sourceMappingURL=buyDiscountedGiftCard.service.js.map

/***/ })

});
//# sourceMappingURL=51.js.map