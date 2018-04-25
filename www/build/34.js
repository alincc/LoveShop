webpackJsonp([34],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exchange4OtherGiftCardsModule", function() { return Exchange4OtherGiftCardsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchange4OtherGiftCards__ = __webpack_require__(914);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Exchange4OtherGiftCardsModule = (function () {
    function Exchange4OtherGiftCardsModule() {
    }
    Exchange4OtherGiftCardsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__exchange4OtherGiftCards__["a" /* Exchange4OtherGiftCardsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exchange4OtherGiftCards__["a" /* Exchange4OtherGiftCardsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__exchange4OtherGiftCards__["a" /* Exchange4OtherGiftCardsPage */]]
        })
    ], Exchange4OtherGiftCardsModule);
    return Exchange4OtherGiftCardsModule;
}());

//# sourceMappingURL=exchange4OtherGiftCards.module.js.map

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

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenefitsDataService; });
var BenefitsDataService = (function () {
    function BenefitsDataService() {
        this._needBackToExchange = {
            needBackToExchange: false,
            currentIndex: null,
        };
        this.currentCardNumber = null;
    }
    BenefitsDataService.getInstance = function () {
        if (!this._instance) {
            this._instance = this.createInstance();
        }
        return this._instance;
    };
    BenefitsDataService.createInstance = function () {
        return new BenefitsDataService();
    };
    Object.defineProperty(BenefitsDataService.prototype, "currentCardNumber", {
        get: function () {
            return this._currentCardNumber;
        },
        set: function (value) {
            this._currentCardNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    BenefitsDataService.prototype.setNeedBackToExchange = function (status, index) {
        this._needBackToExchange.needBackToExchange = status;
        this._needBackToExchange.currentIndex = index;
    };
    BenefitsDataService.prototype.getNeedBackToExchange = function () {
        return this._needBackToExchange;
    };
    BenefitsDataService.prototype.resetNeedBackToExchange = function () {
        this._needBackToExchange = {
            needBackToExchange: false,
            currentIndex: null,
        };
    };
    return BenefitsDataService;
}());

//# sourceMappingURL=benefitsData.service.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exchange4OtherGiftCardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchange4OtherGiftCards_service__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_card_type__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__benefitsData_service__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Exchange4OtherGiftCardsPage = (function () {
    function Exchange4OtherGiftCardsPage(routeManager, alertCtrl, navParams, exchange4OtherGCService, navCtrl) {
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.exchange4OtherGCService = exchange4OtherGCService;
        this.navCtrl = navCtrl;
        this.categoryName = 'Exchange for other gift cards';
        this.noContent = false;
        this.productsOnBasket = 0;
        this.cardIndex = 0;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    Exchange4OtherGiftCardsPage.prototype.ionViewWillEnter = function () {
        this._resetData();
        this.getContentHardCode();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            __WEBPACK_IMPORTED_MODULE_5_jquery___default()('.app-root').removeClass('not-show-tab');
            if (this.navParams.get('benefit')) {
                this.benefit = this.navParams.get('benefit');
            }
            if (this.navParams.get('card')) {
                this.card = __WEBPACK_IMPORTED_MODULE_10__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance()
                    .getLatestCardInfoFromHomeSharing(this.navParams.get('card'));
            }
            if (this.navParams.get('cardIndex')) {
                this.cardIndex = this.navParams.get('cardIndex');
            }
            if (this.navParams.get('catalogues')) {
                var catalogues = this.navParams.get('catalogues');
                this.products = this._extractsCardFromCatalogues(catalogues);
            }
        }
    };
    Exchange4OtherGiftCardsPage.prototype.getContentHardCode = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.exchange_funds = body.message;
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_9__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.exchange4OtherGCService
            .getContentFromRetreiveContent('exchange-funds')
            .subscribe(observer);
    };
    Exchange4OtherGiftCardsPage.prototype.get4LastDigitsCardNumber = function (card) {
        var cardNumber = null;
        if (card.cardType === __WEBPACK_IMPORTED_MODULE_7__models_card_type__["a" /* CardType */].FLEXECODE) {
            cardNumber = card.cardId;
        }
        else {
            cardNumber = card.cardNumber;
        }
        if (!cardNumber) {
            return null;
        }
        if (card.cardType === __WEBPACK_IMPORTED_MODULE_7__models_card_type__["a" /* CardType */].FLEXECODE && cardNumber.indexOf('-') > 0) {
            cardNumber = cardNumber.replace(/-/g, "");
        }
        return cardNumber.substr(cardNumber.length - 4);
    };
    Exchange4OtherGiftCardsPage.prototype.ionViewDidEnter = function () {
        this.calculateProductOnbasket();
    };
    Exchange4OtherGiftCardsPage.prototype.calculateProductOnbasket = function () {
        this.productsOnBasket = 0;
        var dataBasket = __WEBPACK_IMPORTED_MODULE_4__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        for (var i = 0; i < dataBasket.productsOnBasket.length; i++) {
            this.productsOnBasket += parseInt(dataBasket.productsOnBasket[i].quantity);
        }
    };
    Exchange4OtherGiftCardsPage.prototype.ionViewDidLeave = function () {
        this._unsubscribe();
    };
    Exchange4OtherGiftCardsPage.prototype.goToGiftExchange = function (product) {
        this.navCtrl.push('GiftCardExchangePage', {
            offer: product,
            primaryCard: this.card,
            catalogue: this.catalogue
        });
    };
    Exchange4OtherGiftCardsPage.prototype._resetData = function () {
        this.products = [];
        this.benefit = null;
        this.catalogue = null;
        this.catalogue = null;
        this.noContent = false;
        this.productsOnBasket = 0;
    };
    Exchange4OtherGiftCardsPage.prototype._buildCatalogueRequest = function () {
        var catalogueType = __WEBPACK_IMPORTED_MODULE_2__exchange4OtherGiftCards_service__["a" /* CatalogueTypes */].PRODUCT;
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
    Exchange4OtherGiftCardsPage.prototype._extractsCardFromCatalogues = function (catalogues) {
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
    Exchange4OtherGiftCardsPage.prototype.gotoTopUp = function () {
        this.navCtrl.push("AmountTopUpPage", {
            cardSelected: this.card,
            cardIndex: this.cardIndex
        });
        var currentIndexStack = this.navCtrl.getActive().index;
        __WEBPACK_IMPORTED_MODULE_8__benefitsData_service__["a" /* BenefitsDataService */].getInstance().setNeedBackToExchange(true, currentIndexStack);
    };
    Exchange4OtherGiftCardsPage.prototype._selectCategoryImage = function (cat) {
        if (cat.smallImages && Array.isArray(cat.smallImages) && cat.smallImages[0]) {
            return cat.smallImages[0];
        }
        return null;
    };
    Exchange4OtherGiftCardsPage.prototype._buildCatague = function (catalogue) {
        catalogue.displayFee = this._selectDisplayFee(catalogue);
        return catalogue;
    };
    Exchange4OtherGiftCardsPage.prototype._selectDisplayFee = function (catalogue) {
        if (!catalogue || !catalogue.customAttributes || catalogue.customAttributes.serviceFeeMinimumAmount) {
            return '0';
        }
        return catalogue.customAttributes.serviceFeeMinimumAmount;
    };
    Exchange4OtherGiftCardsPage.prototype._unsubscribe = function () {
        if (this._getCardsSub) {
            this._getCardsSub.unsubscribe();
        }
    };
    Exchange4OtherGiftCardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exchange4OtherGiftCards',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\exchange\exchange4OtherGiftCards\exchange4OtherGiftCards.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Exchange For Other Gift Cards\n    </ion-title>\n    <ion-buttons right>\n        <button ion-button icon-only (click)="navCtrl.push(\'MyShoppingBasketPage\')">\n          <ion-icon name="ios-basket-outline">\n            <ion-badge *ngIf="this.productsOnBasket > 0" class="cart-badge" color="danger">{{this.productsOnBasket}}</ion-badge>\n          </ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!--<ion-row text-center>\n      <ion-col col-12>\n        <p>\n          {{exchange_funds}}\n        </p>\n      </ion-col>\n    </ion-row>-->\n\n\n    <ion-grid class="card-details" *ngIf="card?.canTopUp">\n      <ion-row>\n        <ion-col col-3 text-center>\n          <div class="card-icon-wrapper">\n            <ion-icon *ngIf="!card?.cardLogoPath" ios="ios-card" md="md-card"></ion-icon>\n            <img *ngIf="card?.cardLogoPath" [src]="baseResourceUrl + card?.cardLogoPath"/>\n          </div>\n        </ion-col>\n        <ion-col col-6 class="card-details--info">\n          <h3 *ngIf="card?.nickname">{{ card?.nickname }}</h3>\n          <h3 *ngIf="card">Ends in {{ get4LastDigitsCardNumber(card) }}</h3>\n          <p class="openSans-bold">Balance: {{ card?.balance | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n        </ion-col>\n        <ion-col col-3>\n          <button align-self-center class="button button-ios button-default button-default-ios button-block button-block-ios button-small button-small-ios l2s-btn--primary"\n                  (click)="gotoTopUp()">Top Up\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-row class="card-offers">\n      <ion-list>\n        <ion-card *ngFor="let product of products">\n          <ion-grid>\n            <ion-row class="list-item" (click)="goToGiftExchange(product)">\n              <ion-col class="list-item-content" col-4>\n                <div class="card-icon">\n                  <ion-icon *ngIf="!product?.image" name="ios-basket-outline"></ion-icon>\n                  <img *ngIf="product?.image" [src]="baseResourceUrl + product?.image" />\n                </div>\n              </ion-col>\n              <ion-col col-8 class="title-center">\n                  <h3 class="title montserrat-regular text-uppercase">{{ product?.name }}</h3>\n                  <!--<div class="desc" [innerHTML]="product?.shortDescription"></div>-->\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-list>\n    </ion-row>\n  </ion-grid>\n\n\n      \n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="Exchange4OtherGiftCardsPage-back-button">\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\exchange\exchange4OtherGiftCards\exchange4OtherGiftCards.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__exchange4OtherGiftCards_service__["b" /* Exchange4OtherGiftCardsService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__exchange4OtherGiftCards_service__["b" /* Exchange4OtherGiftCardsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], Exchange4OtherGiftCardsPage);
    return Exchange4OtherGiftCardsPage;
}());

//# sourceMappingURL=exchange4OtherGiftCards.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Exchange4OtherGiftCardsService; });
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
var Exchange4OtherGiftCardsService = (function () {
    function Exchange4OtherGiftCardsService(http) {
        this.http = http;
    }
    Exchange4OtherGiftCardsService.prototype.getRetrieveCatalogue = function (body) {
        return this.http.post("card/catalogue", body);
    };
    Exchange4OtherGiftCardsService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    Exchange4OtherGiftCardsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], Exchange4OtherGiftCardsService);
    return Exchange4OtherGiftCardsService;
}());

//# sourceMappingURL=exchange4OtherGiftCards.service.js.map

/***/ })

});
//# sourceMappingURL=34.js.map