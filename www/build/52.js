webpackJsonp([52],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyADiscountedGiftCardPageModule", function() { return BuyADiscountedGiftCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyADiscountedGiftCard__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BuyADiscountedGiftCardPageModule = (function () {
    function BuyADiscountedGiftCardPageModule() {
    }
    BuyADiscountedGiftCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__buyADiscountedGiftCard__["a" /* BuyADiscountedGiftCardPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buyADiscountedGiftCard__["a" /* BuyADiscountedGiftCardPage */]), __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__buyADiscountedGiftCard__["a" /* BuyADiscountedGiftCardPage */]]
        })
    ], BuyADiscountedGiftCardPageModule);
    return BuyADiscountedGiftCardPageModule;
}());

//# sourceMappingURL=buyADiscountedGiftCard.module.js.map

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

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyADiscountedGiftCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buyADiscountedGiftCard_service__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_card_type__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__ = __webpack_require__(44);
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
var BuyADiscountedGiftCardPage = (function () {
    function BuyADiscountedGiftCardPage(routeManager, alertCtrl, navController, navCtrl, buyADiscountedGiftCardService, navParams) {
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.navCtrl = navCtrl;
        this.buyADiscountedGiftCardService = buyADiscountedGiftCardService;
        this.navParams = navParams;
        this.cardValues = [];
        this.anyValues = [];
        this.cardQuantities = [];
        this.productsOnBasket = 0;
        this.productFee = {
            orderlines: []
        };
        this.mesageConfirm = '';
        this.basket_form_checkout_current_product = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.basket_form_checkout_current_product;
        this.required = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        this.quantity_invalid = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.quantity_invalid;
        this.park_catalogue_product_out_of_stock = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_catalogue_product_out_of_stock;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    BuyADiscountedGiftCardPage.prototype.ionViewWillEnter = function () {
        if (!this.navParams.get('primaryCard') || !this.navParams.get('offer')) {
            return;
        }
        this.getContentMSG();
        this._resetData();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('.app-root').removeClass('not-show-tab');
            if (this.navParams.get('primaryCard')) {
                this.primaryCard = this.navParams.get('primaryCard');
            }
            if (this.navParams.get('offer')) {
                this.offer = this.navParams.get('offer');
            }
            if (this.navParams.get('catalogue')) {
                this.catalogue = this.navParams.get('catalogue');
            }
            if (this.navParams.get('category')) {
                this.category = this.navParams.get('category');
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
    BuyADiscountedGiftCardPage.prototype.get4LastDigitsCardNumber = function (card) {
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
    Object.defineProperty(BuyADiscountedGiftCardPage.prototype, "allOutOfStock", {
        get: function () {
            return !(this.offer && this.offer.products && this.offer.products.find(function (p) { return p.stockAvailable; }));
        },
        enumerable: true,
        configurable: true
    });
    BuyADiscountedGiftCardPage.prototype.ionViewDidEnter = function () {
        this.calculateProductOnbasket();
    };
    BuyADiscountedGiftCardPage.prototype.calculateProductOnbasket = function () {
        this.productsOnBasket = 0;
        var dataBasket = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        for (var i = 0; i < dataBasket.productsOnBasket.length; i++) {
            this.productsOnBasket += parseInt(dataBasket.productsOnBasket[i].quantity);
        }
    };
    BuyADiscountedGiftCardPage.prototype.pickCardValue = function (value) {
        this.dirtyCardValueButton = true;
        this.value = value;
        this.clickedValue = value;
        this.otherValue = null;
        this.isValidated = this.validateForm();
    };
    BuyADiscountedGiftCardPage.prototype.selectCardValue = function (productId) {
        this.selectedProduct = this.offer.products.find(function (p) { return p.productId == productId; });
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
    BuyADiscountedGiftCardPage.prototype.pickCardQuantity = function (value) {
        this.dirtyCardQuantityButton = true;
        this.clickedQuantity = value;
        this.quantity = this.clickedQuantity;
        this.otherQuantity = null;
        this.isValidated = this.validateForm();
    };
    BuyADiscountedGiftCardPage.prototype.otherValueChange = function (value) {
        this.dirtyCardValueButton = true;
        this.otherValue = value;
        this.clickedValue = null;
        this.value = this.otherValue;
        this.isValidated = this.validateForm();
    };
    BuyADiscountedGiftCardPage.prototype.otherQuantityChange = function (value) {
        this.dirtyCardQuantityButton = true;
        this.otherQuantity = value;
        this.quantity = this.otherQuantity;
        this.clickedQuantity = null;
        this.isValidated = this.validateForm();
    };
    BuyADiscountedGiftCardPage.prototype.validateForm = function () {
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
    BuyADiscountedGiftCardPage.prototype.recheckValue = function () {
        if (!this.otherValue) {
            this.otherValue = '';
        }
        if (!this.otherQuantity) {
            this.otherQuantity = '';
        }
        this.isValidated = this.validateForm();
    };
    BuyADiscountedGiftCardPage.prototype.getCurrentPrice = function () {
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
    BuyADiscountedGiftCardPage.prototype.getCurrentQuantity = function () {
        if (!this.selectedProduct) {
            return 0;
        }
        return parseFloat(this.quantity);
    };
    BuyADiscountedGiftCardPage.prototype.valueGreatherThanBalance = function (fee) {
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
    BuyADiscountedGiftCardPage.prototype.valueGreatherThanMax = function () {
        if (!this.selectedProduct) {
            return false;
        }
        var price = this.getCurrentPrice();
        var quantity = this.getCurrentQuantity();
        var cost = price * quantity;
        return cost > MAX_CONST;
    };
    BuyADiscountedGiftCardPage.prototype.addToBasket = function () {
        var body = null;
        body = this._buildProductFeeRequest();
        this.productFee.orderlines = [];
        this.productFee.orderlines = body.orderlines;
        __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().pushDatatoBasket(this.primaryCard, this.selectedProduct, this.productFee, this.quantity);
        var IsDifferentCategory = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getIsDifferentCategory();
        var isDifferentCard = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getIsDifferentCard();
        if (isDifferentCard) {
            this.showPopupNeedRemove(this.primaryCard, this.selectedProduct, this.productFee, this.quantity);
        }
        else if (IsDifferentCategory) {
            this.showPopupNeedCheckOut();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().needCaculateFee = false;
            this.calculateProductOnbasket();
            this.showPopupToBasket();
        }
    };
    BuyADiscountedGiftCardPage.prototype.gotoBasket = function () {
        this.navController.push("MyShoppingBasketPage", { needRemovePageWhenContinueShopping: true }).then(function () {
        });
    };
    BuyADiscountedGiftCardPage.prototype.getContentMSG = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.mesageConfirm = body.message;
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.buyADiscountedGiftCardService
            .getContentFromRetreiveContent('park-api.basket.mixed-clear-basket')
            .subscribe(observer);
    };
    BuyADiscountedGiftCardPage.prototype.showPopupNeedRemove = function (cardInfor, productSelected, productFee, quantity) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: this.basket_form_checkout_current_product,
            cssClass: 'l2s-alert--flat  l2s-alert--twobutton',
            buttons: [
                {
                    text: 'Clear Basket',
                    cssClass: "main-button",
                    handler: function () {
                        __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().resetState();
                        var quantityOfitem = {
                            'quantity': parseInt(quantity),
                            'value': productSelected.price,
                        };
                        var objectCombined = Object.assign({}, productSelected, productFee, quantityOfitem);
                        __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().productsOnBasket.push(objectCombined);
                        __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().cardInformation = cardInfor;
                        __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().feeObject = null;
                        __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().feeObject = productFee;
                        __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().needCaculateFee = false;
                        _this.navController.push("MyShoppingBasketPage", { needRemovePageWhenContinueShopping: true }).then(function () {
                        });
                    }
                },
                {
                    text: 'Cancel',
                    cssClass: 'cancel-button',
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
    BuyADiscountedGiftCardPage.prototype.showPopupNeedCheckOut = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: this.mesageConfirm,
            cssClass: 'l2s-alert--flat  l2s-alert--default',
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
    BuyADiscountedGiftCardPage.prototype._buildProductFeeRequest = function () {
        var body = {
            "propositionId": this.primaryCard.propositionId,
            "cardNumber": this.primaryCard.cardNumber,
            "orderlines": []
        };
        var orderLineProductSelected = {
            "productCode": this.selectedProduct.productCode,
            "quantity": parseInt(this.quantity),
            "unitPrice": parseFloat(this.selectedProduct.price),
        };
        if (this.selectedProduct.type == 'any-value') {
            orderLineProductSelected['unitPrice'] = parseFloat(this.value);
            this.selectedProduct.price = parseFloat(this.value);
        }
        var products = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        if (__WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(products) && __WEBPACK_IMPORTED_MODULE_9__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(products.cardInformation)) {
            var cardSelectedInfor = products.cardInformation;
            if ((cardSelectedInfor.cardNumber === this.primaryCard.cardNumber) &&
                (cardSelectedInfor.propositionId === this.primaryCard.propositionId)) {
                if (products && products.feeObject && products.feeObject.orderlines && products.feeObject.orderlines.length > 0) {
                    var detectNewProduct = false;
                    for (var i = 0; i < products.feeObject.orderlines.length; i++) {
                        var orderlineItem = {
                            "productCode": products.feeObject.orderlines[i].productCode,
                            "quantity": parseInt(products.feeObject.orderlines[i].quantity),
                            "unitPrice": parseFloat(products.feeObject.orderlines[i].unitPrice)
                        };
                        if (orderlineItem.productCode === orderLineProductSelected.productCode &&
                            orderlineItem.unitPrice === orderLineProductSelected.unitPrice) {
                            detectNewProduct = true;
                            orderlineItem.quantity += orderLineProductSelected.quantity;
                        }
                        body.orderlines.push(orderlineItem);
                    }
                    if (!detectNewProduct) {
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
        }
        else {
            body.orderlines.push(orderLineProductSelected);
        }
        return body;
    };
    BuyADiscountedGiftCardPage.prototype.showPopupToBasket = function () {
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
                        __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().savePrimaryCard((_this.primaryCard));
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
    BuyADiscountedGiftCardPage.prototype.scrollToBottom = function (delay) {
    };
    BuyADiscountedGiftCardPage.prototype.gotoTopUp = function () {
        this.navCtrl.push("AmountTopUpPage", { cardSelected: this.primaryCard });
    };
    BuyADiscountedGiftCardPage.prototype._resetData = function () {
        this.isQuatityInputMode = false;
        this.exchangeValue = '£0.00';
        this.primaryCard = null;
        this.category = null;
        this.offer = null;
        this.quantity = null;
        this.value = null;
        this.cardValues = [];
        this.cardQuantities = [];
        this.anyValues = [];
        this.dirtyCardValueButton = false;
        this.dirtyCardQuantityButton = false;
        this.productsOnBasket = 0;
        this.selectedProductId = -1;
        this.otherQuantity = null;
        this.otherValue = null;
    };
    BuyADiscountedGiftCardPage.prototype._isAnyValueType = function () {
        return this.offer && Array.isArray(this.offer.products) && this.offer.products.length == 1 && this.offer.products[0].type == 'any-value';
    };
    BuyADiscountedGiftCardPage.prototype._isMixType = function () {
        return this.offer && Array.isArray(this.offer.products) && this.offer.products.length > 1;
    };
    BuyADiscountedGiftCardPage.prototype._buildOptions = function () {
        this._buildValueOption();
        this._buildQuantityOprion();
    };
    BuyADiscountedGiftCardPage.prototype._buildValueOption = function () {
        if (this.offer) {
            this.anyValues = this._buildDefautValueOption();
            for (var i = 0; i < this.anyValues.length; i++) {
                if (this.anyValues[i].default) {
                    this.value = this.clickedValue = this.anyValues[i].value;
                }
            }
            this.dirtyCardValueButton = true;
            if (Array.isArray(this.offer.products)) {
                this.cardValues = this._buildProductsValueOption();
            }
        }
    };
    BuyADiscountedGiftCardPage.prototype._buildDefautValueOption = function () {
        var domain = [];
        if (this.catalogue && this.catalogue.defaultSelectorOptions && Array.isArray(this.catalogue.defaultSelectorOptions.AMOUNT)) {
            domain = this.catalogue.defaultSelectorOptions.AMOUNT;
        }
        else if (this.offer && this.offer.categorySelectorOptions && Array.isArray(this.offer.categorySelectorOptions.AMOUNT)) {
            domain = this.offer.categorySelectorOptions.AMOUNT;
        }
        else if (this.offer && this.offer.category && this.offer.category.categorySelectorOptions && Array.isArray(this.offer.category.categorySelectorOptions.AMOUNT)) {
            domain = this.offer.category.categorySelectorOptions.AMOUNT;
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
    BuyADiscountedGiftCardPage.prototype._buildProductsValueOption = function () {
        return this.offer.products.map(function (product, index) {
            return {
                id: index,
                text: product.name,
                value: product.productCode,
                product: product
            };
        });
    };
    BuyADiscountedGiftCardPage.prototype._buildQuantityOprion = function () {
        if (this.catalogue && this.catalogue.defaultSelectorOptions) {
            if (Array.isArray(this.catalogue.defaultSelectorOptions.QUANTITY)) {
                this.cardQuantities = this.catalogue.defaultSelectorOptions.QUANTITY;
                for (var i = 0; i < this.cardQuantities.length; i++) {
                    if (this.cardQuantities[i].default) {
                        this.quantity = this.clickedQuantity = this.cardQuantities[i].value;
                    }
                }
                this.dirtyCardQuantityButton = true;
            }
        }
    };
    BuyADiscountedGiftCardPage.prototype._selectDefaultProduct = function () {
        if (this.anyType) {
            return this.offer && this.offer.products && this.offer.products[0];
        }
        else {
            return this.offer && this.offer.products && this.offer.products.find(function (p) { return p.default; });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], BuyADiscountedGiftCardPage.prototype, "content", void 0);
    BuyADiscountedGiftCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buyADiscountedGiftCard',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\buy\buyDiscountedGiftCard\buyADiscountedGiftCard\buyADiscountedGiftCard.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title center>\n\n            {{ offer?.name }}\n\n        </ion-title>\n\n\n\n        <ion-buttons right>\n\n            <button ion-button icon-only (click)="gotoBasket()">\n\n                <ion-icon name="ios-basket-outline">\n\n                    <ion-badge *ngIf="this.productsOnBasket > 0" class="cart-badge" color="danger">{{this.productsOnBasket}}</ion-badge>\n\n                </ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content #content>\n\n    <ion-grid class="content-wrapper">\n\n        <ion-row>\n\n            <div class="icon-wrapper">\n\n\n\n                <div class="img-ratio-1-1">\n\n                    <ion-icon *ngIf="!offer?.image" name="ios-basket-outline"></ion-icon>\n\n                    <img *ngIf="offer?.image" [src]="baseResourceUrl + offer?.image" />\n\n                </div>\n\n                </div>\n\n        </ion-row>\n\n\n\n        <ion-row padding-vertical *ngIf="!anyType" class="card-select">\n\n            <h3 class="no-wrap">Choose value</h3>\n\n            <label class="wrap">\n\n                <select \n\n                    class="select-choose-value"\n\n                    [ngModel]="selectedProductId" \n\n                    (ngModelChange)="selectCardValue($event)"\n\n                    >\n\n                    <option [value]="-1">Choose Value</option>\n\n                    <option *ngFor="let cardItem of offer?.products; index as i" [value]="cardItem.productId">{{ cardItem.name }}</option>\n\n                </select>\n\n            </label>\n\n        </ion-row>\n\n\n\n        <ion-row #valueRef *ngIf="selectedProduct && selectedProduct.type == \'any-value\'" class="card-values border-top" padding-vertical>\n\n            <h3 class="no-wrap">Choose value\n\n                <span>(&#163;{{ selectedProduct?.customAttributes?.LOWER_VALUE }} - &#163;{{ selectedProduct?.customAttributes?.UPPER_VALUE\n\n                    }})</span>\n\n            </h3>\n\n            <ion-list class="full-w">\n\n                <ion-grid>\n\n                    <ion-row class="m-b-18">\n\n                        <ion-col>\n\n                            <ion-buttons class="tb-cell">\n\n                                <button ion-button outline *ngFor="let valueItem of anyValues" (click)="pickCardValue(valueItem.value);" [class.highlight]="!otherValue && valueItem.value == clickedValue">\n\n                                {{ valueItem.text }}</button>\n\n                                <button ion-button outline class="other-button m-l-n3" [class.highlight]="otherValue && otherValue == value" [class.has-error]="dirtyCardValueButton && (!value || otherValueError)">\n\n                                    <input type="number" inputmode="numeric" min="0" class="other-input" placeholder="Other" #inputValue (blur)="otherValueChange(inputValue.value)"\n\n                                        [ngModel]="otherValue" >\n\n                                </button>\n\n                            </ion-buttons>\n\n                            <div *ngIf="selectedProduct && !maxValueErr && !minValueErr" class="abs-label">Max &#163;{{ selectedProduct?.customAttributes?.UPPER_VALUE }}</div>\n\n                            <div *ngIf="selectedProduct && value && dirtyCardValueButton && maxValueErr" class="abs-label has-error">Max &#163;{{ selectedProduct?.customAttributes?.UPPER_VALUE }}</div>\n\n                            <div *ngIf="selectedProduct && value && dirtyCardValueButton && minValueErr" class="abs-label has-error">Min &#163;{{ selectedProduct?.customAttributes?.LOWER_VALUE }}</div>\n\n\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <div class="error other-error" *ngIf="(selectedProduct && dirtyCardValueButton && value && invalidValue) || (selectedProduct && dirtyCardValueButton && !value)">\n\n                        <p *ngIf="value && invalidValue">Invalid value</p>\n\n                        <p *ngIf="!value">{{required}}</p>\n\n                    </div>\n\n                </ion-grid>\n\n            </ion-list>\n\n        </ion-row>\n\n\n\n        <ion-row #quantityRef class="card-quantities" padding-vertical>\n\n            <h3>Choose quantity</h3>\n\n            <ion-list class="full-w">\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            <ion-buttons>\n\n                                <button outline ion-button *ngFor="let quantityItem of cardQuantities" (click)="pickCardQuantity(quantityItem.value);" [class.highlight]="!otherQuantity && quantityItem.value === clickedQuantity">\n\n                                {{ quantityItem.value }}</button>\n\n                                <button outline ion-button class="other-button" [class.highlight]="otherQuantity && otherQuantity  == quantity" [class.has-error]="dirtyCardQuantityButton && (!quantity || otherQuantityError)">\n\n                                    <input maxlength="5" max="99999" min="1" type="tel" inputmode="numeric" class="other-input" placeholder="Other" [ngModel]="otherQuantity"\n\n                                        #inputOther (blur)="otherQuantityChange(inputOther.value)"\n\n                                        (focusout)="recheckValue()" />\n\n                                </button>\n\n                            </ion-buttons>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <div class="other-error error" *ngIf="(dirtyCardQuantityButton && !quantity) || (dirtyCardQuantityButton && quantity && otherQuantityError)">\n\n                            <p *ngIf="!quantity">{{required}}</p>\n\n                            <p *ngIf="quantity  && otherQuantityError">{{quantity_invalid}}</p>\n\n                        </div>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-list>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ng-container *ngIf="!allOutOfStock && (!selectedProduct || (selectedProduct && selectedProduct?.stockAvailable)); else elseTemplate">\n\n                <button ion-button block large [disabled]="!isValidated" (click)="addToBasket()">Add to basket</button>\n\n            </ng-container>\n\n            <ng-template #elseTemplate>\n\n                <button ion-button block large [disabled]="true">{{park_catalogue_product_out_of_stock}}</button>\n\n            </ng-template>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <div class="desc" [innerHTML]="offer?.shortDescription"></div>\n\n            <div class="desc" [innerHTML]="offer?.longDescription"></div>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n\n\n    <ion-row style="display: none;" \n\n    (click)="navCtrl.pop()"\n\n    id="BuyADiscountedGiftCardPage-back-button">\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\buy\buyDiscountedGiftCard\buyADiscountedGiftCard\buyADiscountedGiftCard.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__buyADiscountedGiftCard_service__["a" /* BuyADiscountedGiftCardService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__buyADiscountedGiftCard_service__["a" /* BuyADiscountedGiftCardService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], BuyADiscountedGiftCardPage);
    return BuyADiscountedGiftCardPage;
}());

//# sourceMappingURL=buyADiscountedGiftCard.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyADiscountedGiftCardService; });
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


var BuyADiscountedGiftCardService = (function () {
    function BuyADiscountedGiftCardService(http) {
        this.http = http;
    }
    BuyADiscountedGiftCardService.prototype.calculateFee = function (body) {
        return this.http.post("order/fees", body);
    };
    BuyADiscountedGiftCardService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    BuyADiscountedGiftCardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], BuyADiscountedGiftCardService);
    return BuyADiscountedGiftCardService;
}());

//# sourceMappingURL=buyADiscountedGiftCard.service.js.map

/***/ })

});
//# sourceMappingURL=52.js.map