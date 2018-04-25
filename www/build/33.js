webpackJsonp([33],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftCardExchangePageModule", function() { return GiftCardExchangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__giftCardExchange__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GiftCardExchangePageModule = (function () {
    function GiftCardExchangePageModule() {
    }
    GiftCardExchangePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__giftCardExchange__["a" /* GiftCardExchangePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__giftCardExchange__["a" /* GiftCardExchangePage */]), __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__giftCardExchange__["a" /* GiftCardExchangePage */]]
        })
    ], GiftCardExchangePageModule);
    return GiftCardExchangePageModule;
}());

//# sourceMappingURL=giftCardExchange.module.js.map

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

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftCardExchangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__giftCardExchange_service__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_card_type__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__benefitsData_service__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
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
var MAX_CONST = 5000;
var GiftCardExchangePage = (function () {
    function GiftCardExchangePage(routeManager, alertCtrl, navController, navCtrl, events, giftCardExchangeService, navParams) {
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.navCtrl = navCtrl;
        this.events = events;
        this.giftCardExchangeService = giftCardExchangeService;
        this.navParams = navParams;
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
    GiftCardExchangePage.prototype.ionViewDidLeave = function () {
        this.dirtyCardValueButton = false;
        this.dirtyCardQuantityButton = false;
        this.selectedProduct = null;
        this.quantity = null;
    };
    GiftCardExchangePage.prototype.ionViewWillEnter = function () {
        if (!this.navParams.get('primaryCard') || !this.navParams.get('offer')) {
            return;
        }
        this.getContentMSG();
        this._resetData();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.app-root').removeClass('not-show-tab');
            if (this.navParams.get('primaryCard')) {
                this.primaryCard = __WEBPACK_IMPORTED_MODULE_12__CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance()
                    .getLatestCardInfoFromHomeSharing(this.navParams.get('primaryCard'));
                __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().savePrimaryCard(this.primaryCard);
            }
            if (this.navParams.get('offer')) {
                this.offer = this.navParams.get('offer');
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
    GiftCardExchangePage.prototype.ionViewDidEnter = function () {
        this.calculateProductOnbasket();
    };
    GiftCardExchangePage.prototype.get4LastDigitsCardNumber = function (card) {
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
    GiftCardExchangePage.prototype.calculateProductOnbasket = function () {
        this.productsOnBasket = 0;
        var dataBasket = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        for (var i = 0; i < dataBasket.productsOnBasket.length; i++) {
            this.productsOnBasket += parseInt(dataBasket.productsOnBasket[i].quantity);
        }
    };
    GiftCardExchangePage.prototype.getContentMSG = function () {
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
        this.giftCardExchangeService
            .getContentFromRetreiveContent('park-api.basket.mixed-clear-basket')
            .subscribe(observer);
    };
    GiftCardExchangePage.prototype.showPopupNeedRemove = function (cardInfor, productSelected, productFee, quantity) {
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
                        __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().resetState();
                        var quantityOfitem = {
                            'quantity': parseInt(quantity),
                            'value': productSelected.price,
                        };
                        var objectCombined = Object.assign(productSelected, productFee, quantityOfitem);
                        __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().productsOnBasket.push(objectCombined);
                        __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().cardInformation = cardInfor;
                        __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().feeObject = null;
                        __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().feeObject = productFee;
                        __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().needCaculateFee = true;
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
            ]
        });
        this.alertRef = alert;
        alert.present();
    };
    GiftCardExchangePage.prototype.gotoBasket = function () {
        this.navController.push("MyShoppingBasketPage", { needRemovePageWhenContinueShopping: true }).then(function () {
        });
    };
    GiftCardExchangePage.prototype.pickCardValue = function (value) {
        this.dirtyCardValueButton = true;
        this.value = value;
        this.clickedValue = value;
        this.otherValue = null;
        this.isValidated = this.validateForm();
    };
    GiftCardExchangePage.prototype.selectCardValue = function (productId) {
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
    GiftCardExchangePage.prototype.pickCardQuantity = function (value) {
        this.dirtyCardQuantityButton = true;
        this.clickedQuantity = value;
        this.quantity = this.clickedQuantity;
        this.otherQuantity = null;
        this.isValidated = this.validateForm();
    };
    GiftCardExchangePage.prototype.canShowChooseValue = function () {
        return this.selectedProduct && this.selectedProduct.type === 'any-value';
    };
    Object.defineProperty(GiftCardExchangePage.prototype, "allOutOfStock", {
        get: function () {
            return !(this.offer && this.offer.products && this.offer.products.find(function (p) { return p.stockAvailable; }));
        },
        enumerable: true,
        configurable: true
    });
    GiftCardExchangePage.prototype.otherValueChange = function (value) {
        this.dirtyCardValueButton = true;
        this.otherValue = value;
        this.clickedValue = null;
        this.value = this.otherValue;
        this.isValidated = this.validateForm();
    };
    GiftCardExchangePage.prototype.otherQuantityChange = function (value) {
        this.dirtyCardQuantityButton = true;
        this.otherQuantity = value;
        this.quantity = this.otherQuantity;
        this.clickedQuantity = null;
        this.isValidated = this.validateForm();
    };
    GiftCardExchangePage.prototype.validateForm = function () {
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
    GiftCardExchangePage.prototype.recheckValue = function () {
        if (!this.otherValue) {
            this.otherValue = '';
        }
        if (!this.otherQuantity) {
            this.otherQuantity = '';
        }
        this.isValidated = this.validateForm();
    };
    GiftCardExchangePage.prototype.scrollToBottom = function (delay) {
        // if (this.content) {
        //     Observable.interval(200).take(10).subscribe(() => {
        //         this.content.scrollToBottom();
        //     });
        // }
    };
    GiftCardExchangePage.prototype.showPopupToBasket = function () {
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
    GiftCardExchangePage.prototype.addToBasket = function () {
        var _this = this;
        this._unsubscribe();
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var body = this._buildProductFeeRequest();
        this.productFee = 0;
        this.feeProduct = this.giftCardExchangeService.calculateFee(body)
            .subscribe(function (res) {
            if (!res.ok) {
                return;
            }
            _this.productFee = res.response;
            __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().pushDatatoBasket(_this.primaryCard, _this.selectedProduct, _this.productFee, _this.quantity);
            var IsDifferentCategory = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getIsDifferentCategory();
            var isDifferentCard = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getIsDifferentCard();
            if (isDifferentCard) {
                _this.showPopupNeedRemove(_this.primaryCard, _this.selectedProduct, _this.productFee, _this.quantity);
            }
            else if (IsDifferentCategory) {
                _this.showPopupNeedCheckOut();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().needCaculateFee = true;
                _this.calculateProductOnbasket();
                _this.showPopupToBasket();
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    GiftCardExchangePage.prototype.showPopupNeedCheckOut = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: this.mesageConfirm,
            cssClass: 'l2s-alert--default l2s-alert--flat  l2s-alert--centered',
            buttons: [
                {
                    text: 'Close',
                    cssClass: "btn-basket",
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
    GiftCardExchangePage.prototype._buildProductFeeRequest = function () {
        var body = {
            "propositionId": this.primaryCard.propositionId,
            "cardNumber": this.primaryCard.cardNumber,
            "orderlines": []
        };
        var orderLineProductSelected = {
            "productCode": this.selectedProduct.productCode,
            "quantity": this.quantity,
        };
        if (this.selectedProduct.type === 'any-value') {
            orderLineProductSelected['loadAmount'] = parseFloat(this.value);
            this.selectedProduct.price = this.value;
        }
        var products = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        if (__WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(products) && __WEBPACK_IMPORTED_MODULE_11__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(products.cardInformation)) {
            var cardSelectedInfor = products.cardInformation;
            if ((cardSelectedInfor.cardNumber === this.primaryCard.cardNumber) &&
                (cardSelectedInfor.propositionId === this.primaryCard.propositionId)) {
                if (products && products.feeObject && products.feeObject.orderlines && products.feeObject.orderlines.length > 0) {
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
    GiftCardExchangePage.prototype._showError = function (message) {
        __WEBPACK_IMPORTED_MODULE_4__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    GiftCardExchangePage.prototype._unsubscribe = function () {
        if (this.feeProduct) {
            this.feeProduct.unsubscribe();
        }
    };
    GiftCardExchangePage.prototype._handleError = function (res) {
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
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
    GiftCardExchangePage.prototype.gotoTopUp = function () {
        this.navCtrl.push("AmountTopUpPage", {
            cardSelected: this.primaryCard,
            cardIndex: this.cardIndex
        });
        var currentIndexStack = this.navCtrl.getActive();
        __WEBPACK_IMPORTED_MODULE_10__benefitsData_service__["a" /* BenefitsDataService */].getInstance().setNeedBackToExchange(true, currentIndexStack);
    };
    GiftCardExchangePage.prototype.getCurrentPrice = function () {
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
    GiftCardExchangePage.prototype.getCurrentQuantity = function () {
        if (!this.selectedProduct) {
            return 0;
        }
        return parseFloat(this.quantity);
    };
    GiftCardExchangePage.prototype.valueGreatherThanBalance = function (fee) {
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
    GiftCardExchangePage.prototype.valueGreatherThanMax = function () {
        if (!this.selectedProduct) {
            return false;
        }
        var price = this.getCurrentPrice();
        var quantity = this.getCurrentQuantity();
        var cost = price * quantity;
        return cost > MAX_CONST;
    };
    GiftCardExchangePage.prototype.delay = function (fn, time) {
        if (time === void 0) { time = 500; }
        if (typeof fn === 'function') {
            setTimeout(fn, time);
        }
    };
    GiftCardExchangePage.prototype._resetData = function () {
        this.value = null;
        this.otherValue = null;
        this.quantity = null;
        this.value = null;
        this.selectedProduct = null;
        this.exchangeValue = '£0.00';
        this.primaryCard = null;
        this.offer = null;
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
    GiftCardExchangePage.prototype._isAnyValueType = function () {
        return this.offer && Array.isArray(this.offer.products) && this.offer.products.length == 1 && this.offer.products[0].type == 'any-value';
    };
    GiftCardExchangePage.prototype._isMixType = function () {
        return this.offer && Array.isArray(this.offer.products) && this.offer.products.length > 1;
    };
    GiftCardExchangePage.prototype._buildOptions = function () {
        this._buildValueOption();
        this._buildQuantityOprion();
        this.dirtyCardValueButton = true;
        this.dirtyCardQuantityButton = true;
    };
    GiftCardExchangePage.prototype._buildValueOption = function () {
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
    GiftCardExchangePage.prototype._buildDefautValueOption = function () {
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
    GiftCardExchangePage.prototype._buildProductsValueOption = function () {
        return this.offer.products.map(function (product, index) {
            return {
                id: index,
                text: product.name,
                value: product.productCode,
                product: product
            };
        });
    };
    GiftCardExchangePage.prototype._buildQuantityOprion = function () {
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
    GiftCardExchangePage.prototype._selectDefaultProduct = function () {
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
    ], GiftCardExchangePage.prototype, "content", void 0);
    GiftCardExchangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-giftCardExchange',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\exchange\exchange4OtherGiftCards\giftCardExchange\giftCardExchange.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title center>\n            {{ offer?.name }}\n        </ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="gotoBasket()">\n              <ion-icon name="ios-basket-outline">\n                <ion-badge *ngIf="this.productsOnBasket > 0" class="cart-badge" color="danger">{{this.productsOnBasket}}</ion-badge>\n              </ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content #content>\n    <ion-grid class="content-wrapper">\n\n        <ion-row class="card-details card-can-topup" *ngIf="primaryCard?.canTopUp" >\n            <ion-col col-3 text-center>\n                <div class="card-icon-wrapper">\n                    <ion-icon *ngIf="!primaryCard?.cardLogoPath" ios="ios-card" md="md-card"></ion-icon>\n                    <img *ngIf="primaryCard?.cardLogoPath" [src]="baseResourceUrl + primaryCard?.cardLogoPath"/>\n                </div>\n            </ion-col>\n            <ion-col col-6 class="card-details--info">\n                <h3 *ngIf="primaryCard?.nickname">{{ primaryCard?.nickname }}</h3>\n                <h3 *ngIf="primaryCard">Ends in {{ get4LastDigitsCardNumber(primaryCard) }}</h3>\n                <p class="openSans-bold">Balance: {{ primaryCard?.balance | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n            </ion-col>\n            <ion-col col-3>\n                <button align-self-center class="button button-ios button-default button-default-ios button-block button-block-ios button-small button-small-ios l2s-btn--primary"\n                        (click)="gotoTopUp()">Top Up\n                </button>\n            </ion-col>\n        </ion-row>\n\n        <ion-row [ngClass]="{\'m-t-61\': primaryCard?.canTopUp}">\n            <div class="icon-wrapper">\n                <div class="img-ratio-1-1">\n                    <ion-icon *ngIf="!offer?.image" name="ios-basket-outline"></ion-icon>\n                    <img *ngIf="offer?.image" [src]="baseResourceUrl + offer?.image" />\n                </div>\n            </div>\n        </ion-row>\n\n\n\n        <ion-row padding-vertical *ngIf="!anyType" class="card-select">\n            <h3 class="no-wrap">Choose value</h3>\n            <label class="wrap">\n                <select \n                    class="select-choose-value"\n                    [ngModel]="selectedProductId" \n                    (ngModelChange)="selectCardValue($event)"\n                    >\n                    <option [value]="-1">Choose Value</option>\n                    <option *ngFor="let cardItem of offer?.products; index as i" [value]="cardItem.productId">{{ cardItem.name }}</option>\n                </select>\n            </label>\n        </ion-row>\n\n        <ion-row #valueRef *ngIf="selectedProduct && selectedProduct.type == \'any-value\'" class="card-values border-top" padding-vertical>\n            <h3 class="no-wrap">Choose value <span>(&#163;{{ selectedProduct?.customAttributes?.LOWER_VALUE }} - &#163;{{ selectedProduct?.customAttributes?.UPPER_VALUE }})</span></h3>\n            <ion-list class="full-w">\n                <ion-grid>\n                    <ion-row class="m-b-18">\n                        <ion-col>\n                            <ion-buttons class="tb-cell">\n                                <button ion-button outline *ngFor="let valueItem of anyValues" (click)="pickCardValue(valueItem.value);" [class.highlight]="!otherValue && valueItem.value == clickedValue"> {{  valueItem.text }}</button>\n                                <button ion-button outline class="other-button m-l-n3" [class.highlight]="otherValue && otherValue == value" [class.has-error]="dirtyCardValueButton && (!value || otherValueError)">\n                                    <input type="number" inputmode="numeric" min="0" class="other-input" placeholder="Other" #inputValue (blur)="otherValueChange(inputValue.value)"  [ngModel]="otherValue" >\n                                </button>\n                          </ion-buttons>\n                            <div *ngIf="selectedProduct && !maxValueErr && !minValueErr" class="abs-label">Max &#163;{{ selectedProduct?.customAttributes?.UPPER_VALUE }}</div>\n                            <div *ngIf="selectedProduct && value && dirtyCardValueButton && maxValueErr" class="abs-label has-error">Max &#163;{{ selectedProduct?.customAttributes?.UPPER_VALUE }}</div>\n                            <div *ngIf="selectedProduct && value && dirtyCardValueButton && minValueErr"  class="abs-label has-error">Min &#163;{{ selectedProduct?.customAttributes?.LOWER_VALUE }}</div>\n\n                        </ion-col>\n                    </ion-row>\n                    <div class="error other-error" *ngIf="(selectedProduct && dirtyCardValueButton && value && invalidValue) || (selectedProduct && dirtyCardValueButton && !value)">\n                        <p *ngIf="value && invalidValue">Invalid value</p>\n                        <p *ngIf="!value">{{required}}</p>\n                    </div>\n                </ion-grid>\n            </ion-list>\n        </ion-row>\n\n        <ion-row #quantityRef class="card-quantities" padding-vertical>\n            <h3>Choose quantity</h3>\n            <ion-list class="full-w">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            <ion-buttons>\n                                <button outline ion-button *ngFor="let quantityItem of cardQuantities" (click)="pickCardQuantity(quantityItem.value);" [class.highlight]="!otherQuantity && quantityItem.value === clickedQuantity"> {{  quantityItem.value }}</button>\n                                <button outline ion-button class="other-button" [class.highlight]="otherQuantity && otherQuantity  == quantity" [class.has-error]="dirtyCardQuantityButton && (!quantity || otherQuantityError)"> \n                                    <input maxlength="5" max="99999" min="1" type="tel" inputmode="numeric" class="other-input" placeholder="Other" [ngModel]="otherQuantity" #inputOtherQuantity (blur)="otherQuantityChange(inputOtherQuantity.value)"  (focusout)="recheckValue()" />\n                                </button>\n                            </ion-buttons>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <div class="other-error error" *ngIf="(dirtyCardQuantityButton && !quantity) || (dirtyCardQuantityButton && quantity  && otherQuantityError)">\n                            <p *ngIf="!quantity">{{required}}</p>\n                            <p *ngIf="quantity  && otherQuantityError">{{quantity_invalid}}</p>\n                        </div>\n                    </ion-row>\n                </ion-grid>\n            </ion-list>\n        </ion-row>\n\n        <ion-row>\n            <ng-container *ngIf="!allOutOfStock && (!selectedProduct || (selectedProduct && selectedProduct?.stockAvailable)); else elseTemplate">\n                <button ion-button block large [disabled]="!isValidated" (click)="addToBasket()">Add to basket</button>\n            </ng-container>\n            <ng-template #elseTemplate>\n                <button ion-button block large [disabled]="true">{{park_catalogue_product_out_of_stock}}</button>\n            </ng-template>\n        </ion-row>\n\n\n        <ion-row padding-vertical>\n            <div class="desc" [innerHTML]="offer?.shortDescription"></div>\n            <div class="desc" [innerHTML]="offer?.longDescription"></div>\n        </ion-row>\n    \n    </ion-grid>\n\n    <ion-grid class="footer-wrapper">\n        \n    </ion-grid>\n</ion-content>\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="GiftCardExchangePage-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\benefits\exchange\exchange4OtherGiftCards\giftCardExchange\giftCardExchange.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__giftCardExchange_service__["a" /* GiftCardExchangeService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__giftCardExchange_service__["a" /* GiftCardExchangeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], GiftCardExchangePage);
    return GiftCardExchangePage;
}());

//# sourceMappingURL=giftCardExchange.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftCardExchangeService; });
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


var GiftCardExchangeService = (function () {
    function GiftCardExchangeService(http) {
        this.http = http;
    }
    GiftCardExchangeService.prototype.calculateFee = function (body) {
        return this.http.post("order/fees", body);
    };
    GiftCardExchangeService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    GiftCardExchangeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], GiftCardExchangeService);
    return GiftCardExchangeService;
}());

//# sourceMappingURL=giftCardExchange.service.js.map

/***/ })

});
//# sourceMappingURL=33.js.map