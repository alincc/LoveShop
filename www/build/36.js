webpackJsonp([36],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exchange4DiningECodePageModule", function() { return Exchange4DiningECodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchange4DiningECode__ = __webpack_require__(910);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Exchange4DiningECodePageModule = (function () {
    function Exchange4DiningECodePageModule() {
    }
    Exchange4DiningECodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__exchange4DiningECode__["a" /* Exchange4DiningECodePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exchange4DiningECode__["a" /* Exchange4DiningECodePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__exchange4DiningECode__["a" /* Exchange4DiningECodePage */]]
        })
    ], Exchange4DiningECodePageModule);
    return Exchange4DiningECodePageModule;
}());

//# sourceMappingURL=exchange4DiningECode.module.js.map

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

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exchange4DiningECodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchange4DiningECode_service__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_card_type__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__benefitsData_service__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
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
var Exchange4DiningECodePage = (function () {
    function Exchange4DiningECodePage(routeManager, alertCtrl, navParams, navCtrl, exchange4DiningECodeService) {
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.exchange4DiningECodeService = exchange4DiningECodeService;
        this.categoryName = 'Exchange for dining e-codes';
        this.noContent = false;
        this.productsOnBasket = 0;
        this.cardIndex = 0;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    Exchange4DiningECodePage.prototype.ionViewWillEnter = function () {
        this._resetData();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.app-root').removeClass('not-show-tab');
            if (this.navParams.get('benefit')) {
                this.benefit = this.navParams.get('benefit');
            }
            if (this.navParams.get('card')) {
                var card = this.navParams.get('card');
                this.card = __WEBPACK_IMPORTED_MODULE_11__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance()
                    .getLatestCardInfoFromHomeSharing(card);
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
    Exchange4DiningECodePage.prototype.get4LastDigitsCardNumber = function (card) {
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
    Exchange4DiningECodePage.prototype.ionViewDidLeave = function () {
        this._unsubscribe();
    };
    Exchange4DiningECodePage.prototype.ionViewDidEnter = function () {
        this.calculateProductOnbasket();
    };
    Exchange4DiningECodePage.prototype.calculateProductOnbasket = function () {
        this.productsOnBasket = 0;
        var dataBasket = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        for (var i = 0; i < dataBasket.productsOnBasket.length; i++) {
            this.productsOnBasket += parseInt(dataBasket.productsOnBasket[i].quantity);
        }
    };
    Exchange4DiningECodePage.prototype.gotoAllBarOneCode = function (product) {
        this.navCtrl.push('ExchangeEcodeAllBarOneEcodePage', {
            ecode: product,
            primaryCard: this.card,
            catalogue: this.catalogue
        });
    };
    Exchange4DiningECodePage.prototype.gotoTopUp = function () {
        this.navCtrl.push("AmountTopUpPage", {
            cardSelected: this.card,
            cardIndex: this.cardIndex
        });
        var currentIndexStack = this.navCtrl.getActive().index;
        __WEBPACK_IMPORTED_MODULE_10__benefitsData_service__["a" /* BenefitsDataService */].getInstance().setNeedBackToExchange(true, currentIndexStack);
    };
    Exchange4DiningECodePage.prototype._resetData = function () {
        this.products = [];
        this.benefit = null;
        this.catalogue = null;
        this.catalogue = null;
        this.noContent = false;
        this.productsOnBasket = 0;
    };
    Exchange4DiningECodePage.prototype._buildCatalogueRequest = function () {
        var catalogueType = __WEBPACK_IMPORTED_MODULE_2__exchange4DiningECode_service__["a" /* CatalogueTypes */].PRODUCT;
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
    Exchange4DiningECodePage.prototype._extractsCardFromCatalogues = function (catalogues) {
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
    Exchange4DiningECodePage.prototype._selectCategoryImage = function (cat) {
        if (cat.smallImages && Array.isArray(cat.smallImages) && cat.smallImages[0]) {
            return cat.smallImages[0];
        }
        return null;
    };
    Exchange4DiningECodePage.prototype._handleError = function (res) {
        __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
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
    Exchange4DiningECodePage.prototype._showError = function (message) {
        __WEBPACK_IMPORTED_MODULE_3__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    Exchange4DiningECodePage.prototype._buildCatague = function (catalogue) {
        catalogue.displayFee = this._selectDisplayFee(catalogue);
        return catalogue;
    };
    Exchange4DiningECodePage.prototype._selectDisplayFee = function (card) {
        if (!card || !card.discountPercentage) {
            return '0';
        }
        return card.discountPercentage;
    };
    Exchange4DiningECodePage.prototype._unsubscribe = function () {
        if (this._getCardsSub) {
            this._getCardsSub.unsubscribe();
        }
    };
    Exchange4DiningECodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exchange4DiningECode',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\benefits\exchange\exchange4DiningECode\exchange4DiningECode.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title center>\n            Exchange For Dining E-Codes\n        </ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="navCtrl.push(\'MyShoppingBasketPage\')">\n                <ion-icon name="ios-basket-outline">\n                    <ion-badge *ngIf="this.productsOnBasket > 0" class="cart-badge" color="danger">\n                        {{this.productsOnBasket}}\n                    </ion-badge>\n                </ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <!--<ion-row *ngIf="card?.discountPercentage">-->\n        <!--<p padding>To purchase dining out e-codes, you will need sufficient funds on your Love2Shop flexecash card-->\n            <!--which you can load at a {{card?.discountPercentage}}% discount</p>-->\n    <!--</ion-row>-->\n\n    <ion-grid class="card-details"  *ngIf="card?.canTopUp" >\n        <ion-row>\n            <ion-col col-3 text-center>\n                <div class="card-icon-wrapper">\n                    <ion-icon *ngIf="!card?.cardLogoPath" ios="ios-card" md="md-card"></ion-icon>\n                    <img *ngIf="card?.cardLogoPath" [src]="baseResourceUrl + card?.cardLogoPath"/>\n                </div>\n            </ion-col>\n            <ion-col col-6 class="card-details--info">\n                <h3 *ngIf="card?.nickname">{{ card?.nickname }}</h3>\n                <h3 *ngIf="card">Ends in {{ get4LastDigitsCardNumber(card) }}</h3>\n                <p class="openSans-bold">Balance: {{ card?.balance | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n            </ion-col>\n            <ion-col col-3>\n                <button align-self-center  class="button button-ios button-default button-default-ios button-block button-block-ios button-small button-small-ios l2s-btn--primary"\n                        (click)="gotoTopUp()">Top Up\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-row class="card-offers">\n        <ion-list>\n            <ion-card *ngFor="let product of products">\n                <ion-grid>\n                    <ion-row class="list-item" (click)="gotoAllBarOneCode(product)">\n                        <ion-col class="list-item-content" col-4>\n                            <div class="card-icon">\n                                <ion-icon *ngIf="!product.image" name="ios-basket-outline"></ion-icon>\n                                <img *ngIf="product?.image" [src]="baseResourceUrl + product?.image"/>\n                            </div>\n                        </ion-col>\n                        <ion-col col-8 class="title-center">\n                            <h3 class="title montserrat-regular text-uppercase">{{ product?.name }}</h3>\n                            <!--<div class="desc" [innerHTML]="product?.shortDescription"></div>-->\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card>\n        </ion-list>\n    </ion-row>\n\n\n        \n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="Exchange4DiningECodePage-back-button">\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\benefits\exchange\exchange4DiningECode\exchange4DiningECode.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__exchange4DiningECode_service__["b" /* Exchange4DiningECodeService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__exchange4DiningECode_service__["b" /* Exchange4DiningECodeService */]])
    ], Exchange4DiningECodePage);
    return Exchange4DiningECodePage;
}());

//# sourceMappingURL=exchange4DiningECode.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Exchange4DiningECodeService; });
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
var Exchange4DiningECodeService = (function () {
    function Exchange4DiningECodeService(http) {
        this.http = http;
    }
    Exchange4DiningECodeService.prototype.getRetrieveCatalogue = function (body) {
        return this.http.post("card/catalogue", body);
    };
    Exchange4DiningECodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], Exchange4DiningECodeService);
    return Exchange4DiningECodeService;
}());

//# sourceMappingURL=exchange4DiningECode.service.js.map

/***/ })

});
//# sourceMappingURL=36.js.map