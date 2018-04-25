webpackJsonp([49],{

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShoppingBasketPageModule", function() { return MyShoppingBasketPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myShoppingBasket__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyShoppingBasketPageModule = (function () {
    function MyShoppingBasketPageModule() {
    }
    MyShoppingBasketPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__myShoppingBasket__["a" /* MyShoppingBasketPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myShoppingBasket__["a" /* MyShoppingBasketPage */]), __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__myShoppingBasket__["a" /* MyShoppingBasketPage */]]
        })
    ], MyShoppingBasketPageModule);
    return MyShoppingBasketPageModule;
}());

//# sourceMappingURL=myShoppingBasket.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDiscountGiftCardSharingDataService; });
var OrderDiscountGiftCardSharingDataService = (function () {
    function OrderDiscountGiftCardSharingDataService() {
        this.addressDelivery = {
            addressIsUpdated: false,
            newAddress: null
        };
        this.needUpdateOrderNumber = {
            status: false,
            newOrderNumber: null
        };
        this.selectGreetingCard = {
            selectedGreetingCard: false,
            greetingCardSelected: null,
            greetingCardIndex: 0,
        };
        this.selectExtraGreetingCard = {
            selectedExtraGreetingCard: false,
            extraGreetingCardSelected: null,
            extraGreetingCardIndex: 0,
            quantity: 0,
        };
        this.isZeroQuantityExtra = false;
        this.msgPersonal = {
            haveMessagePersonal: false,
            contentMessage: null,
        };
        if (OrderDiscountGiftCardSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use YourCardDetailsSharingDataService.getInstance() instead of new.');
        }
        OrderDiscountGiftCardSharingDataService._instance = this;
    }
    OrderDiscountGiftCardSharingDataService.prototype.resetData = function () {
        this.addressDelivery = {
            addressIsUpdated: false,
            newAddress: null
        };
        this.resetFreeCardDesign();
        this.resetExtraCardDesign();
        this.resetmsgPersonal();
    };
    OrderDiscountGiftCardSharingDataService.prototype.resetFreeCardDesign = function () {
        this.selectGreetingCard = {
            selectedGreetingCard: false,
            greetingCardSelected: null,
            greetingCardIndex: 0,
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.resetExtraCardDesign = function () {
        this.selectExtraGreetingCard = {
            selectedExtraGreetingCard: false,
            extraGreetingCardSelected: null,
            extraGreetingCardIndex: 0,
            quantity: 0,
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.resetmsgPersonal = function () {
        this.msgPersonal = {
            haveMessagePersonal: false,
            contentMessage: null
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.needUpdateDelivery = function (data) {
        this.addressDelivery = {
            addressIsUpdated: true,
            newAddress: data
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.getUpdateDelivery = function () {
        return this.addressDelivery;
    };
    OrderDiscountGiftCardSharingDataService.prototype.resetDelivery = function () {
        this.addressDelivery = {
            addressIsUpdated: false,
            newAddress: null
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.saveSelectedFreeGreetingCard = function (index, card) {
        this.resetFreeCardDesign();
        this.selectGreetingCard = {
            selectedGreetingCard: true,
            greetingCardSelected: card || null,
            greetingCardIndex: index || null,
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.getSelectedFreeGreetingCard = function () {
        return this.selectGreetingCard;
    };
    OrderDiscountGiftCardSharingDataService.prototype.saveExtraGreetingCard = function (card, index, quantity) {
        this.resetExtraCardDesign();
        this.selectExtraGreetingCard = {
            selectedExtraGreetingCard: true,
            extraGreetingCardSelected: card || null,
            extraGreetingCardIndex: index || null,
            quantity: quantity || 0,
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.getExtraGreetingCard = function () {
        return this.selectExtraGreetingCard;
    };
    OrderDiscountGiftCardSharingDataService.prototype.saveMessagePersonal = function (msg) {
        this.msgPersonal = {
            haveMessagePersonal: true,
            contentMessage: msg
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.getMessagePersonal = function () {
        return this.msgPersonal;
    };
    OrderDiscountGiftCardSharingDataService.prototype.setisZeroQuantityExtra = function (msg) {
        this.isZeroQuantityExtra = true;
    };
    OrderDiscountGiftCardSharingDataService.prototype.getIsZeroQuantityExtra = function () {
        return this.isZeroQuantityExtra;
    };
    OrderDiscountGiftCardSharingDataService.prototype.getNewOrderNumber = function () {
        return this.needUpdateOrderNumber;
    };
    OrderDiscountGiftCardSharingDataService.prototype.resetNewOrderNumber = function () {
        this.needUpdateOrderNumber = {
            status: false,
            newOrderNumber: null
        };
    };
    OrderDiscountGiftCardSharingDataService.prototype.setNewOrderNumber = function (newOrderNumber) {
        this.needUpdateOrderNumber = {
            status: true,
            newOrderNumber: newOrderNumber
        };
    };
    OrderDiscountGiftCardSharingDataService.getInstance = function () {
        return OrderDiscountGiftCardSharingDataService._instance;
    };
    OrderDiscountGiftCardSharingDataService._instance = new OrderDiscountGiftCardSharingDataService();
    return OrderDiscountGiftCardSharingDataService;
}());

//# sourceMappingURL=orderDiscountGiftCardSharingData.services.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyShoppingBasketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myShoppingBasket_service__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__orderManagement_orderDiscountGiftCard_orderDiscountGiftCardSharingData_services__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyShoppingBasketPage = (function () {
    function MyShoppingBasketPage(routeManager, alertCtrl, navCtrl, navController, events, myShoppingBasketService, navParams) {
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navController = navController;
        this.events = events;
        this.myShoppingBasketService = myShoppingBasketService;
        this.navParams = navParams;
        this.totalPrice = 0;
        this.totalFee = 0;
        this.products = [];
        this.productEcode = 0;
        this.productVoucher = 0;
        this.productValid = true;
        this.discount_applied_at_checkout = "";
        this.goToFromBuyDC = false;
        this.maxError = false;
        this.minError = false;
        this.priceError = false;
        this.quantityError = false;
        this.needRemoveDuplicateItem = false;
        this.basket_form_no_products_basket = __WEBPACK_IMPORTED_MODULE_9__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.basket_form_no_products_basket;
        this.quantity_invalid = __WEBPACK_IMPORTED_MODULE_9__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.quantity_invalid;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_9__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    MyShoppingBasketPage.prototype.ionViewWillEnter = function () {
        this.goToFromBuyDC = false;
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.app-root').addClass('not-show-tab');
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('needRemovePageWhenContinueShopping')) {
                this.needRemovePageWhenContinueShopping = this.navParams.get('needRemovePageWhenContinueShopping');
            }
            var dataBasket = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
            __WEBPACK_IMPORTED_MODULE_8__orderManagement_orderDiscountGiftCard_orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().resetData();
            this.productsOnBasket = dataBasket.productsOnBasket.length;
            this.products = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().productsOnBasket;
            this.feeObject = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().feeObject;
            if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.products) && this.products.length > 0) {
                this.currency = __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].convertCurrency(this.products[0].currencyCode);
                this.calculateTotal();
            }
        }
    };
    MyShoppingBasketPage.prototype.ionViewWillLeave = function () {
    };
    MyShoppingBasketPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_8__orderManagement_orderDiscountGiftCard_orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().resetData();
        this.getContentHardCode();
    };
    MyShoppingBasketPage.prototype.removeBasket = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: __WEBPACK_IMPORTED_MODULE_9__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.confirm_removal,
            cssClass: 'l2s-alert--flat l2s-alert--twobutton',
            buttons: [
                {
                    text: 'Yes',
                    cssClass: 'main-button',
                    handler: function () {
                        __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().removeItemFromBasket(index);
                        _this.productValid = true;
                        setTimeout(function () {
                            var countInvalidValue = __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#productListid').find('.invalidValue');
                            if (countInvalidValue.length > 0) {
                                _this.productValid = false;
                            }
                        }, 100);
                        _this.reCalculateFee();
                    }
                },
                {
                    text: 'No',
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
    MyShoppingBasketPage.prototype.checkOut = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var defineOrderBasket = this.defineOrderBasket();
        this._generateOrder = this.myShoppingBasketService.generateOrder(defineOrderBasket.body)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            if (!res.ok) {
                return;
            }
            var body = res.response;
            var productOnBasket = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().productsOnBasket;
            if (body && body.orderlines && productOnBasket.length > 0) {
                for (var j = 0; j < body.orderlines.length; j++) {
                    for (var i = 0; i < productOnBasket.length; i++) {
                        if (productOnBasket[i].productCode === body.orderlines[j].productCode) {
                            body.orderlines[j].imgUrl = productOnBasket[i].subCategory.image;
                        }
                    }
                }
            }
            __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().saveDataAfterGenerateOrder(body);
            if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(defineOrderBasket.urlNextScreen === 'OrderDiscountGiftCardReviewYourOrder')) {
                _this.navCtrl.push(defineOrderBasket.urlNextScreen, { bodyOrder: defineOrderBasket.body });
                return;
            }
            _this.navCtrl.push(defineOrderBasket.urlNextScreen);
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    MyShoppingBasketPage.prototype.calculateTotal = function () {
        this.totalPrice = 0;
        this.totalFee = 0;
        this.products = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().productsOnBasket;
        for (var i = 0; i < this.products.length; i++) {
            if (/^\d+$/.test(this.products[i].quantity)) {
                this.totalPrice += (this.products[i].price) * (this.products[i].quantity);
            }
        }
        this.feeObject = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().feeObject;
        if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.feeObject) && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.feeObject.totalFee)) {
            this.totalFee = this.feeObject.totalFee;
            this.totalPrice += this.feeObject.totalFee;
        }
        else {
            this.goToFromBuyDC = true;
        }
    };
    MyShoppingBasketPage.prototype.otherValueChange = function (value, index) {
        var _this = this;
        this.quantityError = false;
        if (!value || (value && value.length && value.length === 0 || parseInt(value) === 0)) {
            this.productValid = false;
            this.quantityError = true;
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).addClass('invalidValue');
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-has-error');
            this.overQuantityOrZero();
        }
        else if (parseInt(value) > 99999 || isNaN(value) || !/^\d+$/.test(value)) {
            this.productValid = false;
            this.quantityError = true;
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).addClass('invalidValue');
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-has-error');
        }
        else {
            this.productValid = true;
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).removeClass('invalidValue');
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).closest('.product-infor--wrapper').removeClass('product-infor--wrapper-has-error');
            this.products[index].quantity = parseInt(value);
            this.feeObject.orderlines[index].quantity = parseInt(value);
            this.reCalculateFee();
        }
        setTimeout(function () {
            var countInvalidValue = __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#productListid').find('.invalidValue');
            if (countInvalidValue.length > 0) {
                _this.productValid = false;
            }
        }, 100);
    };
    MyShoppingBasketPage.prototype.otherValuePriceChange = function (value, index) {
        var _this = this;
        this.priceError = false;
        this.maxError = false;
        this.minError = false;
        var maxValue = parseFloat(this.products[index].customAttributes.UPPER_VALUE);
        var minvalue = parseFloat(this.products[index].customAttributes.LOWER_VALUE);
        var valuePrice = parseFloat(value);
        if (!value || (value && value.length && value.length === 0 || parseFloat(value) === 0)) {
            this.priceError = true;
            this.productValid = false;
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).addClass('invalidValue');
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-price-has-error');
            this.overQuantityOrZero();
        }
        else if (isNaN(value) || !/^[0-9]*\.?[0-9]+$/.test(value)) {
            this.priceError = true;
            this.productValid = false;
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).addClass('invalidValue');
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-price-has-error');
        }
        else if (valuePrice > maxValue) {
            this.productValid = false;
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).addClass('invalidValue');
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-price-has-error');
            this.maxError = true;
        }
        else if (valuePrice < minvalue) {
            this.productValid = false;
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).addClass('invalidValue');
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).closest('.product-infor--wrapper').addClass('product-infor--wrapper-price-has-error');
            this.minError = true;
        }
        else {
            this.productValid = true;
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).removeClass('invalidValue');
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(event.target).closest('.product-infor--wrapper').removeClass('product-infor--wrapper-price-has-error');
            this.products[index].value = value;
            this.products[index].price = value;
            this.feeObject.orderlines[index].unitPrice = parseFloat(value);
            var duplicateProduct = false;
            var productBasket = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().productsOnBasket;
            for (var i = 0; i < productBasket.length; i++) {
                if (!duplicateProduct && (productBasket[i].category.categoryId) === (this.products[index].category.categoryId)) {
                    if (productBasket[i].productCode === this.products[index].productCode
                        && productBasket[i].productId === this.products[index].productId &&
                        productBasket[i].price === this.products[index].price) {
                        if (i !== index) {
                            duplicateProduct = true;
                            this.needRemoveDuplicateItem = true;
                            // this.indexItemNeedRemove = index;
                            this.feeObject.orderlines[index].unitPrice = parseFloat(value);
                            if (i > index) {
                                productBasket[index].quantity = parseInt(productBasket[i].quantity) + parseInt(this.products[index].quantity);
                                this.indexItemNeedRemove = i;
                            }
                            else {
                                productBasket[i].quantity = parseInt(productBasket[i].quantity) + parseInt(this.products[index].quantity);
                                this.indexItemNeedRemove = index;
                            }
                        }
                    }
                }
            }
            this.reCalculateFee();
        }
        setTimeout(function () {
            var countInvalidValue = __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#productListid').find('.invalidValue');
            if (countInvalidValue.length > 0) {
                _this.productValid = false;
            }
        }, 100);
    };
    MyShoppingBasketPage.prototype.overQuantityOrZero = function () {
        var alert = this.alertCtrl.create({
            title: '',
            message: "Quantity cannot be blank or zero",
            cssClass: 'l2s-alert--default l2s-alert--flat',
            buttons: [
                {
                    text: 'OK',
                    cssClass: "btn-basket",
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
    MyShoppingBasketPage.prototype.defineOrderBasket = function () {
        var basketData = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        var bodyOrderBasket = {
            body: null,
            urlNextScreen: ''
        };
        if (__WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(basketData.productsOnBasket[0].benefit.orderJourney)) {
            if ((basketData.productsOnBasket[0].benefit.orderJourney) === 'ECOMMERCE_B2C') {
                bodyOrderBasket.body = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataToGenerateOrderBuy();
                bodyOrderBasket.urlNextScreen = 'OrderDiscountGiftCardReviewYourOrder';
            }
            else {
                for (var i = 0; i < this.products.length; i++) {
                    if (this.products[i].benefit.url === 'mycard/choose/ecodes' ||
                        this.products[i].benefit.url === 'mycard/choose/dining-out') {
                        this.productEcode += 1;
                    }
                    if (this.products[i].benefit.url === 'mycard/choose/spend-online') {
                        this.productVoucher += 1;
                    }
                }
                bodyOrderBasket.body = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataToGenerateOrderExchange();
                if (this.productEcode > 0 && this.productVoucher > 0) {
                    bodyOrderBasket.urlNextScreen = 'OrderMixBasketStep1';
                }
                else if (this.productEcode > 0 && this.productVoucher === 0) {
                    bodyOrderBasket.urlNextScreen = 'OrderEcodeStep1';
                }
                else if (this.productEcode === 0 && this.productVoucher > 0) {
                    bodyOrderBasket.urlNextScreen = 'OrderExchangeGiftCardStep1';
                }
            }
        }
        return bodyOrderBasket;
    };
    MyShoppingBasketPage.prototype.gotoBenefit = function () {
        var _this = this;
        if (this.needRemovePageWhenContinueShopping) {
            var index = this.navCtrl.getActive().index - 1;
            this.navCtrl.remove(index).then(function () {
                _this.navController.pop();
            });
        }
        else {
            this.navController.pop();
        }
    };
    MyShoppingBasketPage.prototype.reCalculateFee = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var body = this._buildProductFeeRequest();
        var needCaculateFee = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().needCaculateFee;
        if (body.orderlines.length > 0 && needCaculateFee) {
            this.myShoppingBasketService.calculateFee(body)
                .subscribe(function (res) {
                if (!res.ok) {
                    return;
                }
                __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().setFeeObject(null);
                __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().setFeeObject(res.response);
                if (_this.needRemoveDuplicateItem && __WEBPACK_IMPORTED_MODULE_3__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(_this.indexItemNeedRemove)) {
                    var productBasketx = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
                    __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().productsOnBasket.splice(_this.indexItemNeedRemove, 1);
                    var productBasketx2_1 = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
                    _this.needRemoveDuplicateItem = false;
                    _this.indexItemNeedRemove = null;
                }
                var productBasketx2 = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
                _this.calculateTotal();
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }, function () {
                __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            });
        }
        else {
            this.calculateTotal();
            __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }
    };
    MyShoppingBasketPage.prototype._buildProductFeeRequest = function () {
        var primaryCard = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket().cardInformation;
        var body = {
            "propositionId": primaryCard.propositionId,
            "cardNumber": primaryCard.cardNumber,
            "orderlines": []
        };
        var products = __WEBPACK_IMPORTED_MODULE_6__myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
        if (products && products.feeObject && products.feeObject.orderlines) {
            for (var i = 0; i < products.feeObject.orderlines.length; i++) {
                var orderlineItem = {
                    "productCode": products.feeObject.orderlines[i].productCode,
                    "quantity": parseInt(products.feeObject.orderlines[i].quantity),
                    "loadAmount": parseFloat(products.feeObject.orderlines[i].unitPrice)
                };
                body.orderlines.push(orderlineItem);
            }
        }
        return body;
    };
    MyShoppingBasketPage.prototype.getContentHardCode = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.discount_applied_at_checkout = body.message;
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_2__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.myShoppingBasketService
            .getContentFromRetreiveContent('park-catalogue.configurable-layout.discount-applied-at-checkout')
            .subscribe(observer);
    };
    MyShoppingBasketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myShoppingBasket',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\myShoppingBasket\myShoppingBasket.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n        <button  ion-button icon-only (click)="navCtrl.pop()">\n            <ion-icon name="ios-arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n        <ion-title>\n            My shopping basket\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid  class="content-wrapper p-b-20">\n        <ion-row *ngIf="(products.length) > 0">\n            <ion-col>\n                <ion-row padding-horizontal class="m-b-5">\n                    <ion-col col-9>\n                        Product\n                    </ion-col>\n                    <ion-col col-3>\n                        Price\n                    </ion-col>\n                </ion-row>\n                <ion-card class="card-item--wrapper" id="productListid">\n                    <ion-row *ngFor="let product of products; let index = index">\n                        <ion-col col-9 align-self-center class="card-left-panel" >\n                            <img *ngIf="product?.subCategory?.image"\n                                 [src]="baseResourceUrl + product?.subCategory?.image"/>\n                            <div  class="product-infor--wrapper p-l-8" padding-right>\n                                <p>{{product.name}}</p>\n                                <div class="input-row">\n                                    <div class="input-quantity">\n                                        <p class="input-label">Quantity</p>    \n                                        <ion-input type="tel"\n                                                primary\n                                                class="input--border"\n                                                inputmode="numeric"\n                                                (focusout)=\'otherValueChange($event.target.value, index)\'\n                                                [ngModel]="feeObject?.orderlines[index]?.quantity">\n                                        </ion-input>\n                                        <span class="error" *ngIf="quantityError">{{quantity_invalid}}</span>\n                                    </div>\n                                    <div class="input-value" *ngIf="product?.type === \'any-value\'">\n                                        <p class="input-label">Value (&pound;)</p>\n                                        <ion-input type="text"\n                                        primary\n                                        class="input--border"\n                                        inputmode="numeric"\n                                        (focusout)=\'otherValuePriceChange($event.target.value, index)\'\n                                        [ngModel]="feeObject?.orderlines[index]?.unitPrice">\n                                        </ion-input>\n                                        <span class="error" *ngIf="priceError">{{quantity_invalid}}</span>\n                                        <span class="error no-wrap" *ngIf="maxError">Max &#163;{{ product?.customAttributes?.UPPER_VALUE }}</span>\n                                        <span class="error no-wrap" *ngIf="minError">Min &#163;{{ product?.customAttributes?.LOWER_VALUE }}</span>\n                                    </div>\n\n                                </div>\n\n                            </div>\n                        </ion-col>\n                        <ion-col col-3 class="remove__wrapper">\n                            <p>{{product?.price*product.quantity  | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n                            <p *ngIf="totalFee> 0">Fees {{feeObject?.orderlines[index]?.feeAmount | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n                            <ion-icon class=\'link--bottom\' (click)="removeBasket(index)">\n                                <i class="fa fa-trash" aria-hidden="true"></i>\n                                <span>Remove\n                                </span>\n                            </ion-icon>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-row padding>\n                    <ion-col col-9 padding-right class="padding-r-30">\n                        <p text-right no-margin *ngIf="totalFee> 0">Total fees</p>\n                        <p class="openSans-bold" text-right no-margin>TOTAL</p>\n                    </ion-col>\n                    <ion-col col-3>\n                        <p no-margin *ngIf="totalFee> 0">{{totalFee | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n                        <p class="openSans-bold" no-margin>{{totalPrice | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n                    </ion-col>\n                </ion-row>\n                <ion-card class="card-item--wrapper" *ngIf="discount_applied_at_checkout.length > 0 && goToFromBuyDC">\n                    <p text-center class="padding-5 discount-note" [innerHTML]="discount_applied_at_checkout"></p>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="(products.length) < 1">\n            <ion-col>\n                <p>{{basket_form_no_products_basket}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-row class="footer-wrapper" *ngIf="(products.length) > 0">\n        <ion-col>\n            <ion-row class="p-b-10">\n                <button ion-button block color="primary" [disabled]="!productValid" (click)="checkOut()">Checkout</button>\n            </ion-row>\n\n            <ion-row>\n                <ion-col >\n                    <button ion-button block [outline]="true" [disabled]="!productValid" (click)="gotoBenefit()">Continue Shopping</button>\n                </ion-col>\n            </ion-row>\n        </ion-col>\n    </ion-row>\n\n\n    <ion-row style="display: none;" \n    (click)="navCtrl.pop()"\n    id="MyShoppingBasketPage-back-button">\n    </ion-row>\n</ion-content>\n\n'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\myShoppingBasket\myShoppingBasket.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__myShoppingBasket_service__["a" /* MyShoppingBasketService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__myShoppingBasket_service__["a" /* MyShoppingBasketService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MyShoppingBasketPage);
    return MyShoppingBasketPage;
}());

//# sourceMappingURL=myShoppingBasket.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyShoppingBasketService; });
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


var MyShoppingBasketService = (function () {
    function MyShoppingBasketService(http) {
        this.http = http;
    }
    MyShoppingBasketService.prototype.getRetrieveCatalogue = function (body) {
        return this.http.post('card/catalogue', body);
    };
    MyShoppingBasketService.prototype.generateOrder = function (orderInfor) {
        return this.http.post("order", orderInfor);
    };
    MyShoppingBasketService.prototype.confirmOrder = function (orderInfor) {
        return this.http.post("order/payment/flexecash", orderInfor);
    };
    MyShoppingBasketService.prototype.calculateFee = function (body) {
        return this.http.post("order/fees", body);
    };
    MyShoppingBasketService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    MyShoppingBasketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], MyShoppingBasketService);
    return MyShoppingBasketService;
}());

//# sourceMappingURL=myShoppingBasket.service.js.map

/***/ })

});
//# sourceMappingURL=49.js.map