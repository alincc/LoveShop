webpackJsonp([45],{

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDiscountGiftCardReviewYourOrderModule", function() { return OrderDiscountGiftCardReviewYourOrderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardReviewYourOrder__ = __webpack_require__(989);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderDiscountGiftCardReviewYourOrderModule = (function () {
    function OrderDiscountGiftCardReviewYourOrderModule() {
    }
    OrderDiscountGiftCardReviewYourOrderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardReviewYourOrder__["a" /* OrderDiscountGiftCardReviewYourOrder */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardReviewYourOrder__["a" /* OrderDiscountGiftCardReviewYourOrder */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardReviewYourOrder__["a" /* OrderDiscountGiftCardReviewYourOrder */]]
        })
    ], OrderDiscountGiftCardReviewYourOrderModule);
    return OrderDiscountGiftCardReviewYourOrderModule;
}());

//# sourceMappingURL=orderDiscountGiftCardReviewYourOrder.module.js.map

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

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDiscountGiftCardReviewYourOrder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orderDiscountGiftCardReviewYourOrder_service__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__orderDiscountGiftCardSharingData_services__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OrderDiscountGiftCardReviewYourOrder = (function () {
    function OrderDiscountGiftCardReviewYourOrder(routeManager, navParams, navCtrl, orderDiscountGiftCardReviewYourOrderService) {
        this.routeManager = routeManager;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.orderDiscountGiftCardReviewYourOrderService = orderDiscountGiftCardReviewYourOrderService;
        this.indexSelectedGreetingCard = 0;
        this.indexExtraSelectedGreetingCard = 0;
        this.productToChooseDesign = [];
        this.extraGCToChooseDesign = [];
        this.baseImageUrl = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
        this.total = 0;
        this.needGotoExtraPage = false;
        this.order_gwp_default_section4_need_free_wallet_info = '';
        this.order_gwp_default_section4_need_free_wallet = '';
        this.order_gwp_default_section4_need_free_wallet_button = '';
        this.order_gwp_default_section4_choice_h4_1 = '';
        this.order_gwp_default_section4_buying_multiple_vouchers_info = '';
        this.order_gwp_default_section4_buying_multiple_vouchers_button = '';
        this.order_gwp_default_section4_choice_h4_2 = '';
    }
    OrderDiscountGiftCardReviewYourOrder.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_7__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().resetNewOrderNumber();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            var dataBasket = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getDataBasket();
            this.products = dataBasket.productsOnBasket;
            this.primaryCard = __WEBPACK_IMPORTED_MODULE_3__myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().getPrimaryCard();
            if (this.navParams.get('bodyOrder')) {
                this._generateOrder = this.navParams.get('bodyOrder');
            }
            if (this.navParams.get('needGotoFreeGC') === true) {
                this.addFreeGreetingCard();
            }
        }
        this.needGotoExtraPage = false;
        this.buildGenerateOrder();
        this.getContentMSG();
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.ionViewDidEnter = function () {
        this.buildGenerateOrder();
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.ionViewDidLeave = function () {
        this.needGotoExtraPage = false;
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.buildGenerateOrder = function () {
        var greetingCard = __WEBPACK_IMPORTED_MODULE_7__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().getSelectedFreeGreetingCard();
        this.freeGreetingCard = __WEBPACK_IMPORTED_MODULE_7__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().getSelectedFreeGreetingCard();
        var greetingCardExtra = __WEBPACK_IMPORTED_MODULE_7__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().getExtraGreetingCard();
        this.exTraGreetingCard = __WEBPACK_IMPORTED_MODULE_7__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().getExtraGreetingCard();
        var greetingCardMsg = __WEBPACK_IMPORTED_MODULE_7__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().getMessagePersonal();
        if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(greetingCard) && (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(greetingCard.greetingCardSelected))) {
            if (greetingCard.selectedGreetingCard === true) {
                this.indexSelectedGreetingCard = greetingCard.greetingCardIndex;
                this.tempGreetingCard = {
                    'productCode': greetingCard.greetingCardSelected.productCode || '',
                    'quantity': 1,
                };
            }
        }
        if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(greetingCardExtra) && (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(greetingCardExtra.extraGreetingCardSelected))) {
            if (greetingCardExtra.selectedExtraGreetingCard === true) {
                this.indexExtraSelectedGreetingCard = greetingCardExtra.extraGreetingCardIndex;
                this.tempExtraGreetingCard = {
                    'productCode': greetingCardExtra.extraGreetingCardSelected.productCode || '',
                    'quantity': greetingCardExtra.quantity,
                };
            }
        }
        if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(greetingCardMsg) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(greetingCardMsg.contentMessage)) {
            this.tempGreetingCardMSG = {
                'giftWalletMessageLine1': greetingCardMsg.contentMessage.to || '',
                'giftWalletMessageLine2': greetingCardMsg.contentMessage.message || '',
                'giftWalletMessageLine3': greetingCardMsg.contentMessage.from || '',
            };
        }
        if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.tempGreetingCard)) {
            this.orderGreetingCard = Object.assign({}, this.tempGreetingCard, this.tempGreetingCardMSG);
        }
        this.total = 0;
        if (Array.isArray(this.products) && this.products.length > 0) {
            for (var i = 0; i < this.products.length; i++) {
                this.total += parseInt(this.products[i].quantity) * parseFloat(this.products[i].price);
            }
            if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.exTraGreetingCard) && this.exTraGreetingCard.selectedExtraGreetingCard) {
                this.total += parseInt(this.exTraGreetingCard.quantity) * parseFloat(this.exTraGreetingCard.extraGreetingCardSelected.price);
            }
        }
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.arrangeDelivery = function () {
        var _this = this;
        this.buildGenerateOrder();
        if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this._generateOrder)) {
            delete this._generateOrder.validateOnly;
            if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.orderGreetingCard)) {
                var tempCardObject = {
                    'productCode': this.orderGreetingCard.productCode || '',
                    'quantity': 1,
                    'giftWalletMessageLine1': this.orderGreetingCard.giftWalletMessageLine1,
                    'giftWalletMessageLine2': this.orderGreetingCard.giftWalletMessageLine2,
                    'giftWalletMessageLine3': this.orderGreetingCard.giftWalletMessageLine3,
                };
                if (this.freeGreetingCard.selectedGreetingCard) {
                    var indexFreeGreetingCardInOrder = this.checkExistFreeGreetingCard(this.freeGreetingCard);
                    if (indexFreeGreetingCardInOrder !== (-1)) {
                        this._generateOrder.orderlines.splice(indexFreeGreetingCardInOrder, 1);
                        this._generateOrder.orderlines.push(tempCardObject);
                    }
                    else {
                        this._generateOrder.orderlines.push(tempCardObject);
                    }
                }
            }
            if (this.exTraGreetingCard.selectedExtraGreetingCard) {
                var indexExtraGreetingCardInOrder = this.checkExistExtraGreetingCard(this.exTraGreetingCard);
                if (indexExtraGreetingCardInOrder !== (-1) && this.exTraGreetingCard.selectedExtraGreetingCard) {
                    this._generateOrder.orderlines.splice(indexExtraGreetingCardInOrder, 1);
                    this._generateOrder.orderlines.push(this.tempExtraGreetingCard);
                }
                else {
                    this._generateOrder.orderlines.push(this.tempExtraGreetingCard);
                }
            }
            __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    if (!res.ok) {
                        return;
                    }
                    var dataAfterGenerateOrder = res.response;
                    _this.navCtrl.push('OrderDiscountGiftCardDeliveryOption', { dataBeforeGenerate: _this._generateOrder, dataAfterGenerate: dataAfterGenerateOrder });
                },
                error: function (error) {
                    __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                },
                complete: function () {
                    __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                }
            };
            this.orderDiscountGiftCardReviewYourOrderService
                .generateOrder(this._generateOrder)
                .subscribe(observer);
        }
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.checkExistExtraGreetingCard = function (typeGreetingCard) {
        var existCardIndex = -1;
        if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(typeGreetingCard) && typeGreetingCard.selectedExtraGreetingCard) {
            var orderline = this._generateOrder.orderlines;
            for (var i = 0; i < orderline.length; i++) {
                if (orderline[i].productCode === this.exTraGreetingCard.extraGreetingCardSelected.productCode) {
                    existCardIndex = i;
                }
            }
        }
        return existCardIndex;
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.checkExistFreeGreetingCard = function (typeGreetingCard) {
        var existCardIndex = -1;
        if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(typeGreetingCard) && typeGreetingCard.selectedGreetingCard) {
            var orderline = this._generateOrder.orderlines;
            for (var i = 0; i < orderline.length; i++) {
                if (orderline[i].productCode === this.freeGreetingCard.greetingCardSelected.productCode) {
                    existCardIndex = i;
                }
            }
        }
        return existCardIndex;
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.updatePersonalMessage = function () {
        this.navCtrl.push('OrderDiscountGiftCardAddPersonalMessage');
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.updateDesignCard = function () {
        this.navCtrl.push('OrderDiscountGiftCardChooseCardDesign', { productToChooseDesign: this.productToChooseDesign, cardDesignIndex: this.indexSelectedGreetingCard });
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.updateExtraDesignCard = function () {
        this.navCtrl.push('OrderDiscountGiftCardExtraGiftWallets', {
            productToChooseDesign: this.extraGCToChooseDesign,
            cardDesignIndex: this.indexExtraSelectedGreetingCard,
            quantity: this.exTraGreetingCard.quantity
        });
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.removeFreeGCReload = function () {
        var _this = this;
        var indexFreeGreetingCardInOrder = this.checkExistFreeGreetingCard(this.freeGreetingCard);
        if (indexFreeGreetingCardInOrder !== (-1)) {
            this._generateOrder.orderlines.splice(indexFreeGreetingCardInOrder, 1);
        }
        __WEBPACK_IMPORTED_MODULE_7__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().resetFreeCardDesign();
        setTimeout(function () {
            _this.buildGenerateOrder();
        }, 200);
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.removeExtraGCReload = function () {
        var _this = this;
        var indexExtraGreetingCardInOrder = this.checkExistExtraGreetingCard(this.exTraGreetingCard);
        if (indexExtraGreetingCardInOrder !== (-1)) {
            this._generateOrder.orderlines.splice(indexExtraGreetingCardInOrder, 1);
        }
        __WEBPACK_IMPORTED_MODULE_7__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().resetExtraCardDesign();
        setTimeout(function () {
            _this.buildGenerateOrder();
        }, 200);
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.getFreeGreetingCard = function () {
        var _this = this;
        var bodyToGetRetreiveCatalogue = {
            'propositionId': this.primaryCard.propositionId,
            'scheme': this.primaryCard.scheme,
            'series': this.primaryCard.series,
            'productCode': this.primaryCard.productCode,
            'catalogueType': 'S'
        };
        __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res.response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res.response.catalogues[0])) {
                    _this.productToChooseDesign = res.response.catalogues[0].products;
                    __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                    if (!_this.needGotoExtraPage) {
                        _this.navCtrl.push('OrderDiscountGiftCardChooseCardDesign', {
                            productToChooseDesign: _this.productToChooseDesign,
                            cardDesignIndex: _this.indexSelectedGreetingCard
                        });
                    }
                    else {
                        _this.navigateToExtraPage();
                    }
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.orderDiscountGiftCardReviewYourOrderService
            .getRetrieveCatalogue(bodyToGetRetreiveCatalogue)
            .subscribe(observer);
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.addFreeGreetingCard = function () {
        this.getFreeGreetingCard();
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.getExtraGreetingCard = function () {
        var _this = this;
        var bodyToGetRetreiveCatalogue = {
            'propositionId': this.primaryCard.propositionId,
            'scheme': this.primaryCard.scheme,
            'series': this.primaryCard.series,
            'productCode': this.primaryCard.productCode,
            'catalogueType': 'F'
        };
        __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res.response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res.response.catalogues[0])) {
                    _this.extraGCToChooseDesign = res.response.catalogues[0].products;
                }
                setTimeout(function () {
                    _this.getFreeGreetingCard();
                }, 200);
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.orderDiscountGiftCardReviewYourOrderService
            .getRetrieveCatalogue(bodyToGetRetreiveCatalogue)
            .subscribe(observer);
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.addExtraGreetingCard = function () {
        this.needGotoExtraPage = true;
        this.getExtraGreetingCard();
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.navigateToExtraPage = function () {
        var freeGreetingCardObject = {
            'productToChooseDesign': this.productToChooseDesign,
            'cardDesignIndex': this.indexSelectedGreetingCard
        };
        this.navCtrl.push('OrderDiscountGiftCardExtraGiftWallets', {
            productToChooseDesign: this.extraGCToChooseDesign,
            cardDesignIndex: this.indexExtraSelectedGreetingCard,
            freeGreetingCardObject: freeGreetingCardObject
        });
    };
    OrderDiscountGiftCardReviewYourOrder.prototype.getContentMSG = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet_info = res[0].response.message;
                    _this.order_gwp_default_section4_need_free_wallet_info = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet_info;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet = res[1].response.message;
                    _this.order_gwp_default_section4_need_free_wallet = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet_button = res[2].response.message;
                    _this.order_gwp_default_section4_need_free_wallet_button = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_need_free_wallet_button;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[3].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_choice_h4_1 = res[3].response.message;
                    _this.order_gwp_default_section4_choice_h4_1 = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_choice_h4_1;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[4]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[4].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[4].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_buying_multiple_vouchers_info = res[4].response.message;
                    _this.order_gwp_default_section4_buying_multiple_vouchers_info = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_buying_multiple_vouchers_info;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[5]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[5].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[5].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_buying_multiple_vouchers_button = res[5].response.message;
                    _this.order_gwp_default_section4_buying_multiple_vouchers_button = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_buying_multiple_vouchers_button;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[6]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[6].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[6].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_choice_h4_2 = res[6].response.message;
                    _this.order_gwp_default_section4_choice_h4_2 = __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section4_choice_h4_2;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[7]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[7].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[7].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section1_action_h2 = res[7].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[8]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[8].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[8].response.message)) {
                    // app.Configuration.ContentMessage.cardCsc_less_than_min = res[8].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[9]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[9].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[9].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section1_choice_p = res[9].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[10]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[10].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[10].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section3_action_p = res[10].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[11]) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[11].response) && __WEBPACK_IMPORTED_MODULE_6__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[11].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_8__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section6_action_p = res[11].response.message;
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_4__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].combineLatest(this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.need-free-wallet-info"), this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.need-free-wallet"), this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.need-free-wallet-button"), this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.choice.h4-1"), this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.buying-multiple-vouchers-info"), this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.buying-multiple-vouchers-button"), this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section4.choice.h4-2"), this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section1.action.h2"), this.orderDiscountGiftCardReviewYourOrderService.getContentFromRetreiveContent("order.gwp.default.section1.action.h2")).subscribe(observer);
    };
    OrderDiscountGiftCardReviewYourOrder = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderDiscountGiftCardReviewYourOrder',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCardReviewYourOrder\orderDiscountGiftCardReviewYourOrder.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      personalise\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row class="m-t-20">\n      <ion-col>\n          <p class="label">Order Summary</p>\n          <table>\n            <thead>\n              <th>\n                  Product\n              </th>\n              <th>\n                Quantity\n              </th>\n              <th>\n                Total\n              </th>\n            </thead>\n            <tbody>\n              <tr>\n                <td> \n                  <p class="content" *ngFor="let product of  products">{{product?.name}}</p>\n\n                </td>\n                <td>\n                    <p class="content" *ngFor="let product of  products">{{product?.quantity}}</p>\n                </td>\n                <td>\n                    <p class="content" *ngFor="let product of  products">{{product?.price*product?.quantity | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n                </td>\n              </tr>\n              <tr *ngIf="freeGreetingCard?.selectedGreetingCard">\n                  <td>\n                    <p class="content" >\n                      {{freeGreetingCard?.greetingCardSelected?.name}}</p>\n                  </td>\n                  <td>\n                      1\n                  </td>\n                  <td class="position-relative">\n                    <ion-icon class=\'link--bottom\' (click)="removeFreeGCReload()">\n                        <i class="fa fa-trash" aria-hidden="true"></i>\n                        <span>Remove\n                        </span>\n                    </ion-icon>\n                  </td>\n                </tr>\n            \n            <tr  *ngIf="exTraGreetingCard?.selectedExtraGreetingCard">\n              <td>\n                  <p class="content"> {{exTraGreetingCard?.extraGreetingCardSelected?.name}}</p>\n              </td>\n              <td>{{exTraGreetingCard?.quantity}}</td>\n              <td class="position-relative">\n                   <p>{{exTraGreetingCard?.extraGreetingCardSelected?.price*exTraGreetingCard?.quantity | currency:\'GBP\':\'symbol\':\'1.2-2\' }}</p>\n                                               \n                  <ion-icon class=\'link--bottom\' (click)="removeExtraGCReload()">\n                    <i class="fa fa-trash" aria-hidden="true"></i>\n                    <span>Remove\n                    </span>\n                  </ion-icon>\n\n              </td>\n            </tr>\n\n            \n            </tbody>\n            <tfoot>\n              <td colspan="2">\n                Sub Total:\n              </td>\n              <td>\n                <p class="content">{{ total | currency:\'GBP\':\'symbol\':\'1.2-2\'}}</p>\n              </td>\n            </tfoot>\n          </table>\n        \n        \n        \n       \n      </ion-col>\n    </ion-row>\n\n    <!--<ion-row class="m-t-10 m-b-10" *ngIf="freeGreetingCard?.selectedGreetingCard || exTraGreetingCard?.selectedExtraGreetingCard">-->\n   \n    <ion-row>\n      <ion-col>\n        <button ion-button large block (click)="arrangeDelivery()">\n          Arrange Delivery\n        </button>\n      </ion-col>\n    </ion-row>\n\n   <!--<button class="m-t-20" ion-button block large (click)="arrangeDelivery()"\n            *ngIf="!freeGreetingCard?.selectedGreetingCard && !exTraGreetingCard?.selectedExtraGreetingCard">\n      Arrange Delivery\n    </button>-->\n\n    <ion-row class="p-t-20">\n      <ion-col>\n        <p class="label">Optional extras</p>\n        \n        <ion-card class="card-list-item" padding margin-bottom *ngIf="!freeGreetingCard?.selectedGreetingCard">\n          <p class="text-bold" no-padding no-margin>{{order_gwp_default_section4_need_free_wallet}}</p>\n          <p padding-vertical>{{order_gwp_default_section4_need_free_wallet_info}}</p>\n          <div text-center>\n            <ion-card class="card-item--wrapper" padding margin-bottom (click)="addFreeGreetingCard()">\n              <p text-center no-padding class="tr-btn text-12">\n                {{order_gwp_default_section4_need_free_wallet_button}}\n              </p>\n            </ion-card>\n          </div>\n        </ion-card>\n\n        <ion-row *ngIf="freeGreetingCard?.selectedGreetingCard">\n            <ion-col>\n              <p class="text-label" no-padding no-margin>{{order_gwp_default_section4_choice_h4_1}}</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="card-greeting--wrapper" *ngIf="freeGreetingCard?.selectedGreetingCard">\n          <ion-col>\n           \n            <ion-row class="">\n              <ion-col text-right>\n                <div class="img--wrapper" padding>\n                  <p text-left class="text-font-12">\n                    Design/Front\n                  </p>\n                  <div class="blank-card" (click)="updateDesignCard()">\n                    <img src="{{baseImageUrl}}{{freeGreetingCard?.greetingCardSelected?.smallImages}}" alt="product image">\n                  </div>\n                  <p text-left class="p-t-10">\n                    <span class="edit" (click)="updateDesignCard()">Edit</span>\n                  </p>\n                </div>\n              </ion-col>\n              <ion-col text-left>\n                <div padding>\n                  <p text-left class="text-font-12">\n                    Message/Inside\n                  </p>\n                  <div class="blank-card" (click)="updatePersonalMessage()">\n\n                    <p class="to-msg">{{this.tempGreetingCardMSG?.giftWalletMessageLine1}}\n                    </p>\n                    <p class="content-msg">{{this.tempGreetingCardMSG?.giftWalletMessageLine2}}\n                    </p>\n                    <p class="from-msg">{{this.tempGreetingCardMSG?.giftWalletMessageLine3}}\n                    </p>\n                    <p *ngIf="!this.tempGreetingCardMSG?.giftWalletMessageLine1" class="text-link-item">\n                      Add a personal message\n                    </p>\n\n                  </div>\n                  <p text-left class="p-t-10">\n                    <span class="edit" (click)="updatePersonalMessage()">Edit</span>\n                  </p>\n                </div>\n              </ion-col>\n            </ion-row>\n\n          </ion-col>\n        </ion-row>\n\n\n        <ion-card class="card-list-item" padding margin-bottom *ngIf="!exTraGreetingCard?.selectedExtraGreetingCard">\n          <p class="text-bold">Need extra greetings cards?</p>\n          <p>{{order_gwp_default_section4_buying_multiple_vouchers_info}}</p>\n          <div text-center>\n            <ion-card class="card-item--wrapper" padding margin-bottom (click)="addExtraGreetingCard()">\n              <p text-center no-padding class="tr-btn">\n                {{order_gwp_default_section4_buying_multiple_vouchers_button}}\n              </p>\n            </ion-card>\n          </div>\n        </ion-card>\n\n        <ion-row class="card-extra-greeting--wrapper" *ngIf="exTraGreetingCard?.selectedExtraGreetingCard">\n          <ion-col>\n            <p class="content text-label" >Additional wallets <span>Charges may apply</span><!--{{order_gwp_default_section4_choice_h4_2}}--></p>\n            <div col-8 class="extra-selected">\n              <div class="img-ratio-16-9" (click)="updateExtraDesignCard()">\n                <img src="{{baseImageUrl}}{{exTraGreetingCard?.extraGreetingCardSelected?.smallImages}}" alt="greeting card">\n              </div>\n            </div>\n            <!--<p text-left class="p-t-10">\n              <span  (click)="updateExtraDesignCard()">Edit</span>\n            </p>-->\n          </ion-col>\n        </ion-row>\n\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-row  class="footer-wrapper">\n    <ion-col>\n      <button ion-button large block (click)="arrangeDelivery()">\n        Arrange Delivery\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="OrderDiscountGiftCardReviewYourOrder-back-button">\n</ion-row>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCardReviewYourOrder\orderDiscountGiftCardReviewYourOrder.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__orderDiscountGiftCardReviewYourOrder_service__["a" /* OrderDiscountGiftCardReviewYourOrderService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__orderDiscountGiftCardReviewYourOrder_service__["a" /* OrderDiscountGiftCardReviewYourOrderService */]])
    ], OrderDiscountGiftCardReviewYourOrder);
    return OrderDiscountGiftCardReviewYourOrder;
}());

//# sourceMappingURL=orderDiscountGiftCardReviewYourOrder.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDiscountGiftCardReviewYourOrderService; });
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


var OrderDiscountGiftCardReviewYourOrderService = (function () {
    function OrderDiscountGiftCardReviewYourOrderService(http) {
        this.http = http;
    }
    OrderDiscountGiftCardReviewYourOrderService.prototype.getRetrieveCatalogue = function (body) {
        return this.http.post('card/catalogue', body);
    };
    OrderDiscountGiftCardReviewYourOrderService.prototype.generateOrder = function (orderInfor) {
        return this.http.post("order", orderInfor);
    };
    OrderDiscountGiftCardReviewYourOrderService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    OrderDiscountGiftCardReviewYourOrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], OrderDiscountGiftCardReviewYourOrderService);
    return OrderDiscountGiftCardReviewYourOrderService;
}());

//# sourceMappingURL=orderDiscountGiftCardReviewYourOrder.service.js.map

/***/ })

});
//# sourceMappingURL=45.js.map