webpackJsonp([32],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeEcodeAllBarOneEcodePageModule", function() { return ExchangeEcodeAllBarOneEcodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchangeEcodeAllBarOneEcode__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExchangeEcodeAllBarOneEcodePageModule = (function () {
    function ExchangeEcodeAllBarOneEcodePageModule() {
    }
    ExchangeEcodeAllBarOneEcodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__exchangeEcodeAllBarOneEcode__["a" /* ExchangeEcodeAllBarOneEcodePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exchangeEcodeAllBarOneEcode__["a" /* ExchangeEcodeAllBarOneEcodePage */]), __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__exchangeEcodeAllBarOneEcode__["a" /* ExchangeEcodeAllBarOneEcodePage */]]
        })
    ], ExchangeEcodeAllBarOneEcodePageModule);
    return ExchangeEcodeAllBarOneEcodePageModule;
}());

//# sourceMappingURL=exchangeEcodeAllBarOneEcode.module.js.map

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

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeEcodeAllBarOneEcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exchangeEcodeAllBarOneEcode_service__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_card_type__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__benefitsData_service__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__ = __webpack_require__(44);
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












var MAX_CONST = 5000;
var ExchangeEcodeAllBarOneEcodePage = (function () {
    function ExchangeEcodeAllBarOneEcodePage(routeManager, alertCtrl, navController, navCtrl, events, exchangeEcodeAllBarOneEcodeService, navParams, zone) {
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.navCtrl = navCtrl;
        this.events = events;
        this.exchangeEcodeAllBarOneEcodeService = exchangeEcodeAllBarOneEcodeService;
        this.navParams = navParams;
        this.zone = zone;
        this.cardValues = [];
        this.cardQuantities = [];
        this.dirtyCardValueButton = false;
        this.dirtyCardQuantityButton = false;
        this.productsOnBasket = 0;
        this.productFee = 0;
        this.mesageConfirm = '';
        this.cardIndex = 0;
        this.basket_form_checkout_current_product = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.basket_form_checkout_current_product;
        this.required = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        this.quantity_invalid = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.quantity_invalid;
        this.park_catalogue_product_out_of_stock = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_catalogue_product_out_of_stock;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    ExchangeEcodeAllBarOneEcodePage.prototype.showPopupNeedRemove = function (cardInfor, productSelected, productFee, quantity) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: this.basket_form_checkout_current_product,
            cssClass: 'l2s-alert--flat l2s-alert--twobutton',
            buttons: [
                {
                    text: 'Clear Basket',
                    cssClass: "main-button",
                    handler: function () {
                        __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().resetState();
                        var quantityOfitem = {
                            'quantity': parseInt(quantity),
                            'value': productSelected.price,
                        };
                        var objectCombined = Object.assign(productSelected, productFee, quantityOfitem);
                        __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().productsOnBasket.push(objectCombined);
                        __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().cardInformation = cardInfor;
                        __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().feeObject = null;
                        __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().feeObject = productFee;
                        __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().needCaculateFee = true;
                        _this.navController.push("MyShoppingBasketPage", { needRemovePageWhenContinueShopping: true }).then(function () {
                        });
                    }
                },
                {
                    text: 'Cancel',
                    cssClass: 'cancel-button',
                    handler: function () {
                    }
                },
                {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }
            ]
        });
        this.alertRef = alert;
        alert.present();
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.ionViewWillEnter = function () {
        if (!this.navParams.get('primaryCard') || !this.navParams.get('ecode')) {
            return;
        }
        this.getContentMSG();
        this._resetData();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.app-root').removeClass('not-show-tab');
            if (this.navParams.get('primaryCard')) {
                this.primaryCard = __WEBPACK_IMPORTED_MODULE_11__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance()
                    .getLatestCardInfoFromHomeSharing(this.navParams.get('primaryCard'));
                __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().savePrimaryCard(this.primaryCard);
            }
            if (this.navParams.get('ecode')) {
                this.ecode = this.navParams.get('ecode');
            }
            if (this.navParams.get('catalogue')) {
                this.catalogue = this.navParams.get('catalogue');
            }
            if (this.navParams.get('cardIndex')) {
                this.cardIndex = this.navParams.get('cardIndex');
            }
            this.anyType = this._isAnyValueType();
            if (!this.anyType) {
                this.isMixType = this._isMixType();
            }
            this.selectedProduct = this._selectDefaultProduct();
            if (this.selectedProduct) {
                this.selectedProductId = this.selectedProduct.productId;
            }
            this._buildOptions();
            this.isValidated = this.validateForm();
        }
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.getContentMSG = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.mesageConfirm = body.message;
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.exchangeEcodeAllBarOneEcodeService
            .getContentFromRetreiveContent('park-api.basket.mixed-clear-basket')
            .subscribe(observer);
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.ionViewDidEnter = function () {
        this.calculateProductOnbasket();
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.calculateProductOnbasket = function () {
        this.productsOnBasket = 0;
        var dataBasket = __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        for (var i = 0; i < dataBasket.productsOnBasket.length; i++) {
            this.productsOnBasket += parseInt(dataBasket.productsOnBasket[i].quantity);
        }
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.get4LastDigitsCardNumber = function (card) {
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
    ExchangeEcodeAllBarOneEcodePage.prototype.gotoTopUp = function () {
        this.navCtrl.push("AmountTopUpPage", {
            cardSelected: this.primaryCard,
            cardIndex: this.cardIndex
        });
        var currentIndexStack = this.navCtrl.getActive().index;
        __WEBPACK_IMPORTED_MODULE_9__benefitsData_service__["a" /* BenefitsDataService */].getInstance().setNeedBackToExchange(true, currentIndexStack);
    };
    Object.defineProperty(ExchangeEcodeAllBarOneEcodePage.prototype, "allOutOfStock", {
        get: function () {
            return !(this.ecode && this.ecode.products && this.ecode.products.find(function (p) { return p.stockAvailable; }));
        },
        enumerable: true,
        configurable: true
    });
    ExchangeEcodeAllBarOneEcodePage.prototype.pickCardValue = function (value) {
        this.dirtyCardValueButton = true;
        this.value = value;
        this.clickedValue = value;
        this.otherValue = null;
        this.isValidated = this.validateForm();
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.selectCardValue = function (productId) {
        this.selectedProduct = this.ecode.products.find(function (p) { return p.productId == productId; });
        if (this.selectedProduct) {
            this.selectedProductId = this.selectedProduct.productId;
        }
        this.otherQuantity = null;
        for (var i = 0; i < this.cardQuantities.length; i++) {
            if (this.cardQuantities[i].default) {
                this.quantity = this.clickedQuantity = this.cardQuantities[i].value;
            }
        }
        this.dirtyCardQuantityButton = true;
        this.otherValue = null;
        for (var i = 0; i < this.anyValues.length; i++) {
            if (this.anyValues[i].default) {
                this.value = this.clickedValue = this.anyValues[i].value;
            }
        }
        this.dirtyCardValueButton = true;
        this.isValidated = this.validateForm();
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.pickCardQuantity = function (value) {
        this.dirtyCardQuantityButton = true;
        this.clickedQuantity = value;
        this.quantity = this.clickedQuantity;
        this.otherQuantity = null;
        this.isValidated = this.validateForm();
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.recheckValue = function () {
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.otherValueChange = function (value) {
        this.dirtyCardValueButton = true;
        this.otherValue = value;
        this.clickedValue = null;
        this.value = this.otherValue;
        this.isValidated = this.validateForm();
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.otherQuantityChange = function (value) {
        this.dirtyCardQuantityButton = true;
        this.otherQuantity = value;
        this.quantity = this.otherQuantity;
        this.clickedQuantity = null;
        this.isValidated = this.validateForm();
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.validateForm = function () {
        if (this.selectedProduct && this.selectedProduct.type == 'any-value') {
            var value = parseFloat(this.value);
            this.invalidValue = !/^[0-9]*\.?[0-9]+$/.test(this.value);
            var maxValue = parseFloat(this.selectedProduct.customAttributes.UPPER_VALUE);
            var minvalue = parseFloat(this.selectedProduct.customAttributes.LOWER_VALUE);
            this.maxValueErr = value > maxValue;
            this.minValueErr = value < minvalue;
            this.otherValueError = this.invalidValue || (this.maxValueErr || this.minValueErr);
        }
        else {
            this.otherValueError = !this.selectedProduct;
        }
        var quantity = parseInt(this.quantity);
        var invalidQuantityValue = isNaN(this.quantity) || !/^\d+$/.test(this.quantity);
        this.minQuartryError = !quantity || quantity <= 0;
        this.maxQuantityError = !quantity || quantity > 99999;
        this.otherQuantityError = invalidQuantityValue || (this.minQuartryError || this.maxQuantityError);
        return !this.otherValueError && this.quantity && !this.otherQuantityError;
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.getCurrentPrice = function () {
        if (!this.selectedProduct) {
            return 0;
        }
        if (this.selectedProduct.type == 'any-value') {
            return parseFloat(this.value);
        }
        else {
            return parseFloat(this.selectedProduct.price);
        }
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.getCurrentQuantity = function () {
        if (!this.selectedProduct) {
            return 0;
        }
        return parseFloat(this.quantity);
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.valueGreatherThanBalance = function (fee) {
        if (!this.selectedProduct) {
            return false;
        }
        if (!fee) {
            fee = 0;
        }
        var balance = parseFloat(this.primaryCard.balance);
        var cost = this.getCurrentPrice() * this.getCurrentQuantity() + fee;
        return balance < cost;
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.valueGreatherThanMax = function () {
        if (!this.selectedProduct) {
            return false;
        }
        var price = this.getCurrentPrice();
        var quantity = this.getCurrentQuantity();
        var cost = price * quantity;
        return cost > MAX_CONST;
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.showPopupToBasket = function () {
        var _this = this;
        var message = this.quantity + " x " + this.selectedProduct.name;
        if (this.selectedProduct && this.selectedProduct.type == 'any-value') {
            message = this.quantity + " x &pound;" + this.value + " " + this.selectedProduct.name;
        }
        var alert = this.alertCtrl.create({
            title: 'Item added to basket',
            message: message,
            cssClass: 'l2s-alert--flat l2s-alert--twobutton',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Go to basket',
                    cssClass: "main-button",
                    handler: function () {
                        _this.navController.push("MyShoppingBasketPage", { needRemovePageWhenContinueShopping: true }).then(function () {
                        });
                    }
                },
                {
                    text: 'Continue shopping',
                    cssClass: 'cancel-button',
                    handler: function () {
                        _this.navController.pop();
                    }
                },
                {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }
            ]
        });
        this.alertRef = alert;
        alert.present();
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.delay = function (fn, time) {
        if (time === void 0) { time = 500; }
        if (typeof fn === 'function') {
            setTimeout(fn, time);
        }
    };
    ExchangeEcodeAllBarOneEcodePage.prototype._resetData = function () {
        this.isQuatityInputMode = false;
        this.selectedProduct = false;
        this.exchangeValue = '£0.00';
        this.quantity = null;
        this.value = null;
        this.primaryCard = null;
        this.ecode = null;
        this.cardValues = [];
        this.cardQuantities = [];
        this.anyValues = [];
        this.dirtyCardValueButton = false;
        this.dirtyCardQuantityButton = false;
        this.productsOnBasket = 0;
        this.productFee = 0;
        this.selectedProductId = -1;
        this.otherQuantity = null;
        this.otherValue = null;
    };
    ExchangeEcodeAllBarOneEcodePage.prototype._isAnyValueType = function () {
        return this.ecode && Array.isArray(this.ecode.products) && this.ecode.products.length == 1 && this.ecode.products[0].type == 'any-value';
    };
    ExchangeEcodeAllBarOneEcodePage.prototype._isMixType = function () {
        return this.ecode && Array.isArray(this.ecode.products) && this.ecode.products.length > 1;
    };
    ExchangeEcodeAllBarOneEcodePage.prototype._buildOptions = function () {
        this._buildValueOption();
        this._buildQuantityOption();
    };
    ExchangeEcodeAllBarOneEcodePage.prototype._buildValueOption = function () {
        if (this.ecode) {
            this.anyValues = this._buildDefautValueOption();
            for (var i = 0; i < this.anyValues.length; i++) {
                if (this.anyValues[i].default) {
                    this.value = this.clickedValue = this.anyValues[i].value;
                }
            }
            this.dirtyCardValueButton = true;
            if (Array.isArray(this.ecode.products)) {
                this.cardValues = this._buildProductsValueOption();
            }
        }
    };
    ExchangeEcodeAllBarOneEcodePage.prototype._buildDefautValueOption = function () {
        var domain = [];
        if (this.catalogue && this.catalogue.defaultSelectorOptions && Array.isArray(this.catalogue.defaultSelectorOptions.AMOUNT)) {
            domain = this.catalogue.defaultSelectorOptions.AMOUNT;
        }
        else if (this.ecode && this.ecode.categorySelectorOptions && Array.isArray(this.ecode.categorySelectorOptions.AMOUNT)) {
            domain = this.ecode.categorySelectorOptions.AMOUNT;
        }
        else if (this.ecode && this.ecode.category && this.ecode.category.categorySelectorOptions && Array.isArray(this.ecode.category.categorySelectorOptions.AMOUNT)) {
            domain = this.ecode.category.categorySelectorOptions.AMOUNT;
        }
        return domain.map(function (amount, index) {
            return {
                id: index,
                text: "\u00A3" + amount.value,
                value: amount.value,
                default: amount.default
            };
        });
    };
    ExchangeEcodeAllBarOneEcodePage.prototype._buildProductsValueOption = function () {
        return this.ecode.products.map(function (product, index) {
            return {
                id: index,
                text: product.name,
                value: product.productCode,
                product: product
            };
        });
    };
    ExchangeEcodeAllBarOneEcodePage.prototype._buildQuantityOption = function () {
        if (this.catalogue && this.catalogue.defaultSelectorOptions) {
            if (Array.isArray(this.catalogue.defaultSelectorOptions.QUANTITY)) {
                this.cardQuantities = this.catalogue.defaultSelectorOptions.QUANTITY;
                this.quantity = this.clickedQuantity;
                for (var i = 0; i < this.cardQuantities.length; i++) {
                    if (this.cardQuantities[i].default) {
                        this.quantity = this.clickedQuantity = this.cardQuantities[i].value;
                    }
                }
                this.dirtyCardQuantityButton = true;
            }
        }
    };
    ExchangeEcodeAllBarOneEcodePage.prototype._selectDefaultProduct = function () {
        if (this.anyType) {
            return this.ecode && this.ecode.products && this.ecode.products[0];
        }
        else {
            return this.ecode && this.ecode.products && this.ecode.products.find(function (p) { return p.default; });
        }
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.addToBasket = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var body = this._buildProductFeeRequest();
        this.exchangeEcodeAllBarOneEcodeService.calculateFee(body)
            .subscribe(function (res) {
            if (!res.ok) {
                return;
            }
            _this.productFee = null;
            _this.productFee = res.response;
            __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().pushDatatoBasket(_this.primaryCard, _this.selectedProduct, _this.productFee, _this.quantity);
            var IsDifferentCategory = __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getIsDifferentCategory();
            var isDifferentCard = __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getIsDifferentCard();
            if (isDifferentCard) {
                _this.showPopupNeedRemove(_this.primaryCard, _this.selectedProduct, _this.productFee, _this.quantity);
            }
            else if (IsDifferentCategory) {
                _this.showPopupNeedCheckOut();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().needCaculateFee = true;
                _this.calculateProductOnbasket();
                _this.showPopupToBasket();
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.showPopupNeedCheckOut = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: this.mesageConfirm,
            cssClass: 'l2s-alert--flat l2s-alert--default',
            buttons: [
                {
                    text: 'Close',
                    cssClass: "main-button",
                    handler: function () {
                    }
                }, {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        this.alertRef = alert;
        alert.present();
    };
    ExchangeEcodeAllBarOneEcodePage.prototype._buildProductFeeRequest = function () {
        var body = {
            "propositionId": this.primaryCard.propositionId,
            "cardNumber": this.primaryCard.cardNumber,
            "orderlines": []
        };
        var orderLineProductSelected = {
            "productCode": this.selectedProduct.productCode,
            "quantity": parseInt(this.quantity)
        };
        if (this.selectedProduct.type == 'any-value') {
            orderLineProductSelected['loadAmount'] = parseFloat(this.value);
            this.selectedProduct.price = this.value;
        }
        var products = __WEBPACK_IMPORTED_MODULE_5__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        if (__WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(products) && __WEBPACK_IMPORTED_MODULE_10__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(products.cardInformation)) {
            var cardSelectedInfor = products.cardInformation;
            if ((cardSelectedInfor.cardNumber === this.primaryCard.cardNumber) &&
                (cardSelectedInfor.propositionId === this.primaryCard.propositionId)) {
                if (products && products.feeObject && products.feeObject.orderlines) {
                    for (var i = 0; i < products.feeObject.orderlines.length; i++) {
                        var orderlineItem = {
                            "productCode": products.feeObject.orderlines[i].productCode,
                            "quantity": parseInt(products.feeObject.orderlines[i].quantity),
                            "loadAmount": parseInt(products.feeObject.orderlines[i].unitPrice)
                        };
                        body.orderlines.push(orderlineItem);
                    }
                    body.orderlines.push(orderLineProductSelected);
                }
                else {
                    body.orderlines.push(orderLineProductSelected);
                }
            }
            else {
                body.orderlines.push(orderLineProductSelected);
            }
        }
        else {
            body.orderlines.push(orderLineProductSelected);
        }
        return body;
    };
    ExchangeEcodeAllBarOneEcodePage.prototype.gotoBasket = function () {
        this.navController.push("MyShoppingBasketPage", { needRemovePageWhenContinueShopping: true }).then(function () {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ExchangeEcodeAllBarOneEcodePage.prototype, "content", void 0);
    ExchangeEcodeAllBarOneEcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exchangeEcodeAllBarOneEcode',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\benefits\exchange\exchangeEcodeAllBarOneEcode\exchangeEcodeAllBarOneEcode.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title center>\n            {{ ecode?.name }}\n        </ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="gotoBasket()">\n        <ion-icon name="ios-basket-outline">\n          <ion-badge *ngIf="this.productsOnBasket > 0" class="cart-badge" color="danger">{{this.productsOnBasket}}</ion-badge>\n        </ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content #content>\n    <ion-grid class="content-wrapper">\n        <ion-row class="card-details card-can-topup" *ngIf="primaryCard?.canTopUp">\n                <ion-col col-3 text-center>\n                    <div class="card-icon-wrapper">\n                        <ion-icon *ngIf="!primaryCard?.cardLogoPath" ios="ios-card" md="md-card"></ion-icon>\n                        <img *ngIf="primaryCard?.cardLogoPath" [src]="baseResourceUrl + primaryCard?.cardLogoPath"/>\n                    </div>\n                </ion-col>\n                <ion-col col-6 class="card-details--info">\n                    <h3 *ngIf="primaryCard?.nickname">{{ primaryCard?.nickname }}</h3>\n                    <h3 *ngIf="primaryCard">Ends in {{ get4LastDigitsCardNumber(primaryCard) }}</h3>\n                    <p class="openSans-bold">Balance: {{ primaryCard?.balance | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n                </ion-col>\n                <ion-col col-3>\n                    <button align-self-center class="button button-ios button-default button-default-ios button-block button-block-ios button-small button-small-ios l2s-btn--primary"\n                            (click)="gotoTopUp()">Top Up\n                    </button>\n                </ion-col>\n        </ion-row>\n\n        <ion-row [ngClass]="{\'m-t-61\': primaryCard?.canTopUp}">\n            <div class="icon-wrapper">\n                <div class="img-ratio-1-1">\n                    <ion-icon *ngIf="!ecode?.image" name="ios-basket-outline"></ion-icon>\n                    <img *ngIf="ecode?.image" [src]="baseResourceUrl + ecode?.image" />\n                </div>\n            </div>\n\n        </ion-row>\n        <ion-row padding-vertical *ngIf="!anyType" class="card-select">\n            <h3 class="no-wrap">Choose value</h3>\n            <label class="wrap">\n                <select \n                    class="select-choose-value"\n                    [ngModel]="selectedProductId" \n                    (ngModelChange)="selectCardValue($event)"\n                    >\n                    <option [value]="-1">Choose Value</option>\n                    <option *ngFor="let cardItem of ecode?.products; index as i" [value]="cardItem.productId">{{ cardItem.name }}</option>\n                </select>\n            </label>\n        </ion-row>\n\n        <ion-row #valueRef *ngIf="selectedProduct && selectedProduct.type == \'any-value\'" class="card-values border-top" padding-vertical>\n            <h3 class="no-wrap">Choose value <span>(&#163;{{ selectedProduct?.customAttributes?.LOWER_VALUE }} - &#163;{{ selectedProduct?.customAttributes?.UPPER_VALUE }})</span></h3>\n            <ion-list class="full-w">\n                <ion-grid>\n                    <ion-row class="m-b-18">\n                        <ion-col>\n                            <ion-buttons>\n                                <button ion-button outline *ngFor="let valueItem of anyValues" (click)="pickCardValue(valueItem.value);" [class.highlight]="!otherValue && valueItem.value == clickedValue"> {{  valueItem.text }}</button>\n                                <button ion-button outline class="other-button" [class.highlight]="otherValue && otherValue == value" [class.has-error]="dirtyCardValueButton && (!value || otherValueError)">\n                                    <input type="number" #inputValue inputmode="numeric" min="0" class="other-input" placeholder="Other" (blur)="otherValueChange(inputValue.value)"  [ngModel]="otherValue">\n                                </button>\n                                </ion-buttons>\n                            <div *ngIf="selectedProduct && !maxValueErr && !minValueErr" class="abs-label">Max &#163;{{ selectedProduct?.customAttributes?.UPPER_VALUE }}</div>\n                            <div *ngIf="selectedProduct && value && dirtyCardValueButton && maxValueErr" class="abs-label has-error">Max &#163;{{ selectedProduct?.customAttributes?.UPPER_VALUE }}</div>\n                            <div *ngIf="selectedProduct && value && dirtyCardValueButton && minValueErr"  class="abs-label has-error">Min &#163;{{ selectedProduct?.customAttributes?.LOWER_VALUE }}</div>\n\n                        </ion-col>\n                    </ion-row>\n                    <div class="error other-error" *ngIf="(selectedProduct && dirtyCardValueButton && value && invalidValue) || (selectedProduct && dirtyCardValueButton && !value)">\n                        <p *ngIf="value && invalidValue">Invalid value</p>\n                        <p *ngIf="!value">{{required}}</p>\n                    </div>\n                </ion-grid>\n            </ion-list>\n        </ion-row>\n\n        <ion-row #quantityRef class="card-quantities" padding-vertical>\n            <h3>Choose quantity</h3>\n            <ion-list class="full-w">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            <ion-buttons>\n                                <button outline ion-button *ngFor="let quantityItem of cardQuantities" (click)="pickCardQuantity(quantityItem.value);" [class.highlight]="!otherQuantity && quantityItem.value === clickedQuantity"> {{  quantityItem.value }}</button>\n                                <button outline ion-button class="other-button" [class.highlight]="otherQuantity && otherQuantity  == quantity" [class.has-error]="dirtyCardQuantityButton && (!quantity || otherQuantityError)"> \n                                    <input maxlength="5" max="99999" #inputOther min="1" type="tel" inputmode="numeric" class="other-input" placeholder="Other" [ngModel]="otherQuantity" (blur)="otherQuantityChange(inputOther.value)"  (focusout)="recheckValue()" />\n                                </button>\n                            </ion-buttons>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <div class="other-error error" *ngIf="(dirtyCardQuantityButton && !quantity) || (dirtyCardQuantityButton && quantity && otherQuantityError)">\n                            <p *ngIf="!quantity">{{required}}</p>\n                            <p *ngIf="quantity  && otherQuantityError">{{quantity_invalid}}</p>\n                        </div>\n                    </ion-row>\n                </ion-grid>\n            </ion-list>\n        </ion-row>\n        <ion-row>\n            <ng-container *ngIf="!allOutOfStock && (!selectedProduct || (selectedProduct && selectedProduct?.stockAvailable)); else elseTemplate">\n                <button ion-button block large [disabled]="!isValidated" (click)="addToBasket()">Add to basket</button>\n            </ng-container>\n            <ng-template #elseTemplate>\n                <button ion-button block large [disabled]="true">{{park_catalogue_product_out_of_stock}}</button>\n            </ng-template>\n        </ion-row>\n        <ion-row padding-vertical>\n            <div class="desc" [innerHTML]="ecode?.shortDescription"></div>\n            <div class="desc" [innerHTML]="ecode?.longDescription"></div>\n        </ion-row>\n    </ion-grid>\n\n\n    <ion-row style="display: none;" \n    (click)="navCtrl.pop()"\n    id="ExchangeEcodeAllBarOneEcodePage-back-button">\n    </ion-row>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\benefits\exchange\exchangeEcodeAllBarOneEcode\exchangeEcodeAllBarOneEcode.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__exchangeEcodeAllBarOneEcode_service__["a" /* ExchangeEcodeAllBarOneEcodeService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__exchangeEcodeAllBarOneEcode_service__["a" /* ExchangeEcodeAllBarOneEcodeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], ExchangeEcodeAllBarOneEcodePage);
    return ExchangeEcodeAllBarOneEcodePage;
}());

//# sourceMappingURL=exchangeEcodeAllBarOneEcode.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CatalogueTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeEcodeAllBarOneEcodeService; });
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
var ExchangeEcodeAllBarOneEcodeService = (function () {
    function ExchangeEcodeAllBarOneEcodeService(http) {
        this.http = http;
    }
    ExchangeEcodeAllBarOneEcodeService.prototype.getRetrieveCatalogue = function (body) {
        return this.http.post("card/catalogue", body);
    };
    ExchangeEcodeAllBarOneEcodeService.prototype.calculateFee = function (body) {
        return this.http.post("order/fees", body);
    };
    ExchangeEcodeAllBarOneEcodeService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    ExchangeEcodeAllBarOneEcodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], ExchangeEcodeAllBarOneEcodeService);
    return ExchangeEcodeAllBarOneEcodeService;
}());

//# sourceMappingURL=exchangeEcodeAllBarOneEcode.service.js.map

/***/ })

});
//# sourceMappingURL=32.js.map