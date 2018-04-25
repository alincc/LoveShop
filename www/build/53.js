webpackJsonp([53],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangePageModule", function() { return ExchangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchange__ = __webpack_require__(909);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExchangePageModule = (function () {
    function ExchangePageModule() {
    }
    ExchangePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__exchange__["a" /* ExchangePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exchange__["a" /* ExchangePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__exchange__["a" /* ExchangePage */]]
        })
    ], ExchangePageModule);
    return ExchangePageModule;
}());

//# sourceMappingURL=exchange.module.js.map

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

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CatalogueTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MAP_BENEFIT_EXCHANGE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MAP_BENEFIT_BUY_PAGE; });
/* unused harmony export MAP_BENEFIT_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenefitsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__ = __webpack_require__(161);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PRODUCT = 'P';
var PERSONALISATION = 'S';
var FULFILMENT = 'F';
var CatalogueTypes = {
    PRODUCT: PRODUCT,
    PERSONALISATION: PERSONALISATION,
    FULFILMENT: FULFILMENT
};
var MAP_BENEFIT_EXCHANGE_PAGE = {
    'exchange to spend online': 'Exchang4SpendOnlinePage',
    'exchange for e-codes': 'Exchange4ECodePage',
    'exchange for dining e-codes': 'Exchange4DiningECodePage',
    'exchange for other gift cards': 'Exchange4OtherGiftCardsPage',
    'holidays': 'HolidaysPage',
};
var MAP_BENEFIT_BUY_PAGE = {
    'discounted gift cards': 'BuyDiscountedGiftCardPage',
    'discounted supermarket cards': 'BuyDiscountedSupperGiftCardPage',
    'default': 'BuySpecSaversPage'
};
var MAP_BENEFIT_PAGE = __assign({}, MAP_BENEFIT_BUY_PAGE, MAP_BENEFIT_EXCHANGE_PAGE);
var BenefitsService = (function () {
    function BenefitsService(http) {
        this.http = http;
    }
    BenefitsService.prototype.getRetrieveCardsInfo = function () {
        return this.http.get("card");
    };
    BenefitsService.prototype.getGenericsOffers = function () {
        return this.http.post("card/offers", {});
    };
    BenefitsService.prototype.getOffersByCard = function (body, backgroud) {
        if (backgroud) {
            return this.http.postInBackground("card/offers", body);
        }
        else {
            return this.http.post("card/offers", body);
        }
    };
    BenefitsService.prototype.getSpecialOffers = function () {
        return this.http.post("card/offers", {});
    };
    BenefitsService.prototype.buildCatalogueRequestFromCard = function (card, url, catalogueType) {
        if (catalogueType === void 0) { catalogueType = PRODUCT; }
        var req = {
            propositionId: card.propositionId,
            productCode: card.productCode,
            series: card.series,
            scheme: card.scheme,
            url: url,
            catalogueType: catalogueType
        };
        return req;
    };
    BenefitsService.prototype.getRetrieveCatalogue = function (body) {
        return this.http.post("card/catalogue", body);
    };
    BenefitsService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    BenefitsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], BenefitsService);
    return BenefitsService;
}());

//# sourceMappingURL=benefits.service.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__benefits_service__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__benefits_service__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__benefitsData_service__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ExchangePage = (function () {
    function ExchangePage(benefitsService, routeManager, alertCtrl, navParams, navCtrl, iab) {
        this.benefitsService = benefitsService;
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.categoryName = 'Exchange';
        this.showLoading = false;
        this.listCards = [];
        this.listOffers = [];
        this.productsOnBasket = 0;
        this.baseImgUrl = __WEBPACK_IMPORTED_MODULE_11__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_11__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    ExchangePage.prototype.getCardsData = function () {
        var _this = this;
        var cards = __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().getCardsList();
        if (!cards || cards.length <= 0) {
            this.gotoAddCard();
            return;
        }
        cards = this._filterShowCardList(cards);
        if (!cards || cards.length <= 0) {
            this.disableBuyTab = true;
            this.alertNoBenefit();
            return;
        }
        this.listCards = cards.map(function (card) {
            card.last4DigitCardNumber = _this._get4LastDigitsCardNumber(card);
            card.schemeNumber = card.scheme;
            return card;
        });
        this.lastIndex = this.listCards.length - 1;
        this.selectDefaultCard();
        this.updateOfferList();
    };
    ExchangePage.prototype.selectDefaultCard = function () {
        var _this = this;
        if (!Array.isArray(this.listCards)) {
            this.currentCard = 0;
            return;
        }
        var cardInforActive = __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().getCardInforActive;
        if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive)) {
            if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive) && Array.isArray(this.listCards)) {
                var cardIndex = void 0;
                var breakCheckIndex = false;
                if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive.cardID) && cardInforActive.cardID !== '') {
                    if (cardInforActive.cardID.indexOf('-') > 0) {
                        cardIndex = this.listCards.findIndex(function (x) { return x.cardId === cardInforActive.cardID; });
                    }
                    else {
                        for (var i = 0; i < this.listCards.length; i++) {
                            if (this.listCards[i].cardId && this.listCards[i].cardId.indexOf('-') > 0) {
                                if (this.listCards[i].cardId.replace(/-/g, "") === cardInforActive.cardID) {
                                    cardIndex = i;
                                }
                            }
                            else if (this.listCards[i].cardId === cardInforActive.cardID) {
                                cardIndex = i;
                            }
                        }
                    }
                    breakCheckIndex = true;
                }
                if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive.cardNumber) && breakCheckIndex !== true && cardInforActive.cardNumber !== '') {
                    cardIndex = this.listCards.findIndex(function (x) { return x.cardNumber === cardInforActive.cardNumber; });
                }
                if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardIndex) && cardIndex !== -1) {
                    this.currentCard = cardIndex;
                    if (this.slidesCard) {
                        this.slidesCard.update();
                    }
                    if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.slidesCard)) {
                        setTimeout(function () {
                            return _this.slidesCard && _this.slidesCard.slideTo(_this.currentCard, 0);
                        }, 200);
                    }
                }
                else {
                    var currentIndex = 0;
                    this.currentCard = 0;
                    var card = {
                        cardNumber: this.listCards[currentIndex].cardNumber,
                        cardID: this.listCards[currentIndex].cardId,
                    };
                    if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.slidesCard)) {
                        this.slidesCard.slideTo(0, 0);
                    }
                    __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = card;
                }
            }
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.slidesCard)) {
                var currentIndex = 0;
                this.currentCard = 0;
                var card = {
                    cardNumber: this.listCards[currentIndex].cardNumber,
                    cardID: this.listCards[currentIndex].cardId,
                };
                this.slidesCard.slideTo(0, 0);
                __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = card;
            }
        }
    };
    ExchangePage.prototype.onSlideDidChange = function (event) {
        var currentIndex = this.slidesCard.getActiveIndex();
        if (currentIndex >= 0 && currentIndex < this.listCards.length) {
            this.slideDirection = (this.currentCard <= currentIndex) ? 1 : -1;
            this.currentCard = currentIndex;
            this.currentCardNumber = this.listCards[currentIndex].cardNumber;
            var card = {
                cardNumber: this.listCards[currentIndex].cardNumber,
                cardID: this.listCards[currentIndex].cardId,
            };
            __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = card;
            __WEBPACK_IMPORTED_MODULE_13__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardCurrent = card;
            __WEBPACK_IMPORTED_MODULE_9__benefitsData_service__["a" /* BenefitsDataService */].getInstance().currentCardNumber = this.currentCardNumber;
            this.updateOfferList();
        }
    };
    ExchangePage.prototype.slideTo = function (index) {
        this.slidesCard.slideTo(index);
    };
    ExchangePage.prototype.gotoAddCard = function () {
        this.navCtrl.push('AddCardNumberPage');
    };
    ExchangePage.prototype.updateOfferList = function () {
        var _this = this;
        if (this._getOfferSub) {
            this._getOfferSub.unsubscribe();
        }
        this.listOffers = [];
        var card = this.listCards[this.currentCard];
        var body = this._buildCardRequest(card);
        this.showLoading = true;
        this.benefitsService.getOffersByCard(body).subscribe(function (res) {
            if (!res.ok) {
                return;
            }
            var cats = res.response.categories;
            var offfers = _this._filterOffersList(cats);
            var otherOffers = _this._filterOffersList(cats, 'buy');
            if (offfers && offfers.length > 0) {
                _this.listOffers = offfers.map(_this._buildOffer.bind(_this));
            }
            if (!otherOffers || otherOffers.length <= 0) {
                _this.disableBuyTab = true;
            }
            else {
                _this.disableBuyTab = false;
            }
        }, function (error) {
            _this.showLoading = false;
        }, function () {
            _this.showLoading = false;
        });
    };
    ExchangePage.prototype.onBenefitClick = function (benefit) {
        var _this = this;
        var card = this.listCards[this.currentCard];
        var key = benefit.name.toLowerCase();
        var screenTarget = __WEBPACK_IMPORTED_MODULE_2__benefits_service__["c" /* MAP_BENEFIT_EXCHANGE_PAGE */][key];
        if (screenTarget) {
            var urlKey = benefit.url;
            __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var catalogueReq = this.benefitsService.buildCatalogueRequestFromCard(card, urlKey);
            this.benefitsService.getRetrieveCatalogue(catalogueReq).subscribe(function (res) {
                if (res && res.response && res.response.catalogues) {
                    if (!res || !res.response || !Array.isArray(res.response.catalogues) || res.response.catalogues.length <= 0) {
                        return;
                    }
                    var catalogues = res.response.catalogues;
                    _this.navCtrl.push(screenTarget, { card: card, benefit: benefit, catalogues: catalogues, 'cardIndex': _this.currentCard });
                }
                else {
                }
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }, function () {
                __WEBPACK_IMPORTED_MODULE_8__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            });
        }
        else {
            if (!benefit || !benefit.url) {
                return;
            }
            var browser = this.iab.create('' + benefit.url, "_system", "location=true");
        }
    };
    ExchangePage.prototype.goCardDetails = function () {
        this.navCtrl.push("YourCardDetailsPage", { 'cardNumber': this.currentCardNumber });
    };
    ExchangePage.prototype.gotoBuyPage = function () {
        this.navCtrl.setRoot('BuyPage', { 'cardNumber': this.currentCardNumber }).then(function () {
        });
    };
    ExchangePage.prototype.ionViewWillEnter = function () {
        this.getContentHardCode();
    };
    ExchangePage.prototype.ionViewDidEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.app-root').removeClass('not-show-tab');
            this.showLoading = false;
            this.slideDirection = 1;
            this.listCards = [];
            this.listOffers = [];
            this.getCardsData();
        }
        this.calculateProductOnbasket();
    };
    ExchangePage.prototype.calculateProductOnbasket = function () {
        this.productsOnBasket = 0;
        var dataBasket = __WEBPACK_IMPORTED_MODULE_7__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        for (var i = 0; i < dataBasket.productsOnBasket.length; i++) {
            this.productsOnBasket += parseInt(dataBasket.productsOnBasket[i].quantity);
        }
    };
    ExchangePage.prototype.ionViewDidLeave = function () {
        this._unsubscribe();
    };
    ExchangePage.prototype._get4LastDigitsCardNumber = function (card) {
        if (!card.cardId) {
            return null;
        }
        var cardId = card.cardNumber;
        if (card.cardType === 'FLEXECODE_2.0' && cardId.indexOf('-') > 0) {
            cardId = cardId.replace(/-/g, "");
        }
        return cardId.substr(cardId.length - 4);
    };
    ExchangePage.prototype._checkNocardHasBenefit = function () {
        var _this = this;
        var requests = this.listCards
            .map(function (card) { return _this._buildCardRequest(card); })
            .map(function (body) { return _this.benefitsService.getOffersByCard(body); })
            .map(function (request) { return request.do(function (res) {
            var cats = res.response.categories;
            var buyOffers = _this._filterOffersList(cats, 'buy');
            var exhangeOffers = _this._filterOffersList(cats, 'exchange');
            if (buyOffers && exhangeOffers && buyOffers.length + exhangeOffers.length !== 0) {
                throw new Error(_this.atLeastOneCardMSG);
            }
        }); });
        var noCardHasBenefit$ = __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].forkJoin.apply(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"], requests);
        noCardHasBenefit$.subscribe(function () {
            _this.alertNoBenefit();
        }, function (error) { });
    };
    ExchangePage.prototype.getContentHardCode = function () {
        var _this = this;
        var observer = {
            next: function (res) {
                if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0]) && __WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response) && __WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response.message)) {
                    _this.atLeastOneCardMSG = res[0].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1]) && __WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response) && __WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_11__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.enter_csc = res[1].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2]) && __WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response) && __WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_11__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.ecodes_mailed_to = res[2].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3]) && __WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3].response) && __WEBPACK_IMPORTED_MODULE_12__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_11__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.add_card_important_card_info = res[3].response.message;
                }
            },
            error: function (error) {
            },
            complete: function () {
            }
        };
        __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].combineLatest(this.benefitsService.getContentFromRetreiveContent("at-least-one-card"), this.benefitsService.getContentFromRetreiveContent("enter-csc"), this.benefitsService.getContentFromRetreiveContent("ecodes-mailed-to"), this.benefitsService.getContentFromRetreiveContent("add-card.important-card-info")).subscribe(observer);
    };
    ExchangePage.prototype.alertNoBenefit = function () {
        var alert = this.alertCtrl.create({
            title: '',
            message: 'There are no benefits available.',
            cssClass: 'l2s-alert--default l2s-alert--flat  l2s-alert--centered',
            buttons: [{
                    text: 'Ok',
                    handler: function (data) { }
                }, {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }]
        });
        alert.present();
    };
    ExchangePage.prototype._unsubscribe = function () {
        if (this._getCardDataSub) {
            this._getCardDataSub.unsubscribe();
        }
        if (this._getOfferSub) {
            this._getOfferSub.unsubscribe();
        }
    };
    ExchangePage.prototype._getCardOffers = function () {
        return this.benefitsService.getGenericsOffers();
    };
    ExchangePage.prototype._buildCardRequest = function (card) {
        var body = {
            propositionId: card.propositionId,
            productCode: card.productCode,
            scheme: card.scheme,
            series: card.series
        };
        return body;
    };
    ExchangePage.prototype._filterShowCardList = function (cards) {
        if (!Array.isArray(cards)) {
            return [];
        }
        return cards.filter(function (card) { return card.showBenefits == true; });
    };
    ExchangePage.prototype._buildOffer = function (offer) {
        offer.image = this._selectOfferImage(offer);
        return offer;
    };
    ExchangePage.prototype._filterOffersList = function (offers, category) {
        if (!category) {
            category = this.categoryName.toLocaleLowerCase();
        }
        if (offers && Array.isArray(offers)) {
            var cat = offers.find(function (offer) {
                return (offer.name.toLowerCase() == category);
            });
            if (cat && Array.isArray(cat.subCategories)) {
                return cat.subCategories;
            }
        }
        return [];
    };
    ExchangePage.prototype._selectOfferImage = function (offer) {
        return offer.images && Array.isArray(offer.images) && offer.images[0];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* Slides */])
    ], ExchangePage.prototype, "slidesCard", void 0);
    ExchangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-exchange',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\exchange\exchange.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title center>\n      Your Benefits\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="navCtrl.push(\'MyShoppingBasketPage\')">\n        <ion-icon name="ios-basket-outline">\n          <ion-badge *ngIf="this.productsOnBasket > 0" class="cart-badge" color="danger">{{this.productsOnBasket}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class="slide-row p-t-20 background-white">\n    <ion-col>\n      <ion-slides (ionSlideDidChange)="onSlideDidChange()" [attr.data-active-index]="currentCard" [attr.data-last-active]="currentCard >= lastIndex"\n        class="card-slides">\n        <ion-slide *ngFor="let cardItem of listCards; let cardIndex = index;">\n          <ion-card class="card-background-page">\n            <ion-card-header no-padding>\n              <div *ngIf="cardItem.nickname" class="card-title montserrat-regular">{{ cardItem.nickname }}</div>\n              <div *ngIf="!cardItem.nickname" class="card-title montserrat-regular">&nbsp;</div>\n            </ion-card-header>\n            <img class="card-img" src="{{baseResourceUrl}}{{cardItem.cardLogoPath}}" alt="card logo">\n            <ion-card-content no-padding>\n              <ion-row>\n                <ion-col>\n                  <div class="card-info" inset>\n                    <div *ngIf="cardItem.balance" class="balance montserrat-regular m-t-5">Balance: {{ cardItem.balance | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</div>\n                    <div *ngIf="!cardItem.balance" class="balance montserrat-regular m-t-5">Balance: {{0 | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <ion-row text-center class="background-white">\n    <ion-col class="padding-8">\n      <div class="bullets">\n        <span *ngFor="let cardItem of listCards; let cardIndex = index;" [ngClass]="{\'active\' : currentCard === cardIndex}" class="bullet"\n          (click)="slideTo(cardIndex)"></span>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-segment color="primary" class="tab-title">\n      <ion-segment-button class="btn-title btn-exchange">\n        <p class="btn-offer montserrat-bold text-16 title">EXCHANGE</p>\n        <p class="subtitle montserrat-regular text-10">USING LOVE2SHOP CARD</p>\n      </ion-segment-button>\n      <ion-segment-button class="btn-title background-white" [disabled]="disableBuyTab" (click)="gotoBuyPage()">\n        <p class="btn-offer montserrat-bold text-16 title">BUY</p>\n        <p class="subtitle montserrat-regular text-10">USING CREDIT/DEBIT CARD</p>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-row>\n  <ion-row *ngIf="showLoading" class="list-spinner">\n    <ion-spinner name="crescent"></ion-spinner>\n  </ion-row>\n  <ion-row class="card-offers">\n    <ion-list>\n      <ion-card *ngFor="let exchangeCardItem of listOffers">\n        <ion-grid>\n          <ion-row class="card-item" (click)="onBenefitClick(exchangeCardItem)">\n            <div class="card-icon">\n              <img [src]="baseImgUrl + exchangeCardItem.image" />\n            </div>\n            <div class="list-item"  align-self-center>\n              <h3 class="title text-14">{{ exchangeCardItem.name }}</h3>\n              <p class="desc text-12">{{ exchangeCardItem.shortDescription }}</p>\n            </div>\n              <ion-icon class="icon-md" name="ios-arrow-forward"></ion-icon>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-list>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\exchange\exchange.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__benefits_service__["a" /* BenefitsService */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__benefits_service__["a" /* BenefitsService */],
            __WEBPACK_IMPORTED_MODULE_6__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ExchangePage);
    return ExchangePage;
}());

//# sourceMappingURL=exchange.js.map

/***/ })

});
//# sourceMappingURL=53.js.map