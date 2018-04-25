webpackJsonp([66],{

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDiscountGiftCardChooseCardDesignModule", function() { return OrderDiscountGiftCardChooseCardDesignModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardChooseCardDesign__ = __webpack_require__(981);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderDiscountGiftCardChooseCardDesignModule = (function () {
    function OrderDiscountGiftCardChooseCardDesignModule() {
    }
    OrderDiscountGiftCardChooseCardDesignModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardChooseCardDesign__["a" /* OrderDiscountGiftCardChooseCardDesign */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardChooseCardDesign__["a" /* OrderDiscountGiftCardChooseCardDesign */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardChooseCardDesign__["a" /* OrderDiscountGiftCardChooseCardDesign */]]
        })
    ], OrderDiscountGiftCardChooseCardDesignModule);
    return OrderDiscountGiftCardChooseCardDesignModule;
}());

//# sourceMappingURL=orderDiscountGiftCardChooseCardDesign.module.js.map

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

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDiscountGiftCardChooseCardDesign; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderDiscountGiftCardSharingData_services__ = __webpack_require__(809);
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





var OrderDiscountGiftCardChooseCardDesign = (function () {
    function OrderDiscountGiftCardChooseCardDesign(routeManager, navParams, navCtrl) {
        this.routeManager = routeManager;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.selectedIndex = 0;
        this.order_gwp_default_section1_action_h2 = __WEBPACK_IMPORTED_MODULE_4__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section1_action_h2;
        this.order_gwp_default_section1_choice_p = __WEBPACK_IMPORTED_MODULE_4__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section1_choice_p;
        this.baseImageUrl = __WEBPACK_IMPORTED_MODULE_4__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
    }
    OrderDiscountGiftCardChooseCardDesign.prototype.ionViewWillEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('productToChooseDesign')) {
                this.productToChooseDesign = this.navParams.get('productToChooseDesign');
            }
            if (this.navParams.get('cardDesignIndex')) {
                this.selectedIndex = parseInt(this.navParams.get('cardDesignIndex'));
            }
        }
    };
    OrderDiscountGiftCardChooseCardDesign.prototype.selectDeliveryMethod = function (index) {
        this.selectedIndex = index;
    };
    OrderDiscountGiftCardChooseCardDesign.prototype.addSaveGreetingCard = function () {
        __WEBPACK_IMPORTED_MODULE_3__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().saveSelectedFreeGreetingCard(this.selectedIndex, this.productToChooseDesign[this.selectedIndex]);
        this.navCtrl.pop();
    };
    OrderDiscountGiftCardChooseCardDesign = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderDiscountGiftCardChooseCardDesign',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCardChooseCardDesign\orderDiscountGiftCardChooseCardDesign.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            choose a free greetings card\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class="top-alert">\n        <p>\n            To make your gift extra special add one of our FREE personalised greetings cards.\n        </p>\n    </ion-row>\n    <ion-grid class="content-wrapper">\n        <!-- <ion-row padding-vertical>\n            <ion-col col-10 offset-1 text-center>\n                <p>{{order_gwp_default_section1_action_h2}}</p> \n                <p>(This keeps your card or voucher safe)</p>\n            </ion-col>\n        </ion-row>\n        <ion-row padding-vertical margin-bottom>\n            <ion-col col-10 offset-1 text-center>\n                <p>{{order_gwp_default_section1_choice_p}}</p>\n            </ion-col>\n        </ion-row> -->\n\n        <!--<ion-row class="select-row">-->\n            <!--<label>-->\n                <!--Category-->\n            <!--</label>-->\n            <!--<select>-->\n                <!--<option>- Most Popular</option>-->\n                <!--<option>Birthday</option>-->\n                <!--<option>Wedding</option>-->\n            <!--</select>-->\n        <!--</ion-row>-->\n\n        <ion-row class="card-greeting--wrapper m-b-130">\n            <ion-col>\n                <ion-row>\n                    <ion-col col-6 (click)="selectDeliveryMethod(idx)"\n                             *ngFor="let product of productToChooseDesign; let idx = index"\n                             class="greeting-card--wrapper">\n                        <div class="img--wrapper"\n                             [ngClass]="{\'active\': selectedIndex === idx}">\n                            <img class="greeting-card--wrapper" src="{{baseImageUrl}}{{product.smallImages[0]}}" alt="product image">\n                            <ion-icon *ngIf="selectedIndex === idx" name="checkmark"></ion-icon>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-row class="save-banner">\n        <div class="decs">\n            <span>\n                <img src="data:image/png;base64,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" />    \n            </span>Your chosen greeting card will be sent with a FREE envelope\n        </div>\n        <div class="button-form">\n            <button class="button button-md button-default" (click)="addSaveGreetingCard()">Save &amp; Continue</button>\n            <button class="button cancel" (click)="navCtrl.pop()">Cancel</button>\n        </div>\n    </ion-row>\n</ion-content>\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="OrderDiscountGiftCardChooseCardDesign-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCardChooseCardDesign\orderDiscountGiftCardChooseCardDesign.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], OrderDiscountGiftCardChooseCardDesign);
    return OrderDiscountGiftCardChooseCardDesign;
}());

//# sourceMappingURL=orderDiscountGiftCardChooseCardDesign.js.map

/***/ })

});
//# sourceMappingURL=66.js.map