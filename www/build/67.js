webpackJsonp([67],{

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDiscountGiftCardAddPersonalMessageModule", function() { return OrderDiscountGiftCardAddPersonalMessageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardAddPersonalMessage__ = __webpack_require__(980);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderDiscountGiftCardAddPersonalMessageModule = (function () {
    function OrderDiscountGiftCardAddPersonalMessageModule() {
    }
    OrderDiscountGiftCardAddPersonalMessageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardAddPersonalMessage__["a" /* OrderDiscountGiftCardAddPersonalMessage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardAddPersonalMessage__["a" /* OrderDiscountGiftCardAddPersonalMessage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardAddPersonalMessage__["a" /* OrderDiscountGiftCardAddPersonalMessage */]]
        })
    ], OrderDiscountGiftCardAddPersonalMessageModule);
    return OrderDiscountGiftCardAddPersonalMessageModule;
}());

//# sourceMappingURL=orderDiscountGiftCardAddPersonalMessage.module.js.map

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

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDiscountGiftCardAddPersonalMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orderDiscountGiftCardSharingData_services__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderDiscountGiftCardAddPersonalMessage = (function () {
    function OrderDiscountGiftCardAddPersonalMessage(routeManager, formBuilder, navCtrl) {
        this.routeManager = routeManager;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.formErrors = {
            'to': '',
            'message': '',
            'from': '',
        };
        this.buildForm();
    }
    OrderDiscountGiftCardAddPersonalMessage.prototype.buildForm = function () {
        var _this = this;
        this.updatePersonalMsg = this.formBuilder.group({
            'to': [''],
            'message': [''],
            'from': [''],
        });
        this.updatePersonalMsg.valueChanges.subscribe(function (data) { return _this.onValueChanges(data); });
        this.onValueChanges();
    };
    OrderDiscountGiftCardAddPersonalMessage.prototype.ionViewWillEnter = function () {
        var msgPersonal = __WEBPACK_IMPORTED_MODULE_4__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().getMessagePersonal();
        if (msgPersonal && msgPersonal.haveMessagePersonal === true) {
            if (__WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(msgPersonal.contentMessage) && __WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(msgPersonal.contentMessage.to)) {
                this.updatePersonalMsg.patchValue({ 'to': msgPersonal.contentMessage.to + '' });
            }
            if (__WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(msgPersonal.contentMessage) && __WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(msgPersonal.contentMessage.message)) {
                this.updatePersonalMsg.patchValue({ 'message': msgPersonal.contentMessage.message + '' });
            }
            if (__WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(msgPersonal.contentMessage) && __WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(msgPersonal.contentMessage.from)) {
                this.updatePersonalMsg.patchValue({ 'from': msgPersonal.contentMessage.from + '' });
            }
        }
    };
    OrderDiscountGiftCardAddPersonalMessage.prototype.onValueChanges = function (data) {
        if (!this.updatePersonalMsg) {
            return;
        }
        var form = this.updatePersonalMsg;
        for (var fieldError in this.formErrors) {
            this.formErrors[fieldError] = '';
            var control = form.get(fieldError);
            if (control && control.dirty && !control.valid) {
                this.formErrors[fieldError] = control.errors[Object.keys(control.errors)[0]];
            }
        }
        if (this.textInputs) {
            this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
        }
    };
    OrderDiscountGiftCardAddPersonalMessage.prototype.addPersonalMessage = function () {
        __WEBPACK_IMPORTED_MODULE_4__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().saveMessagePersonal(this.updatePersonalMsg.value);
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], OrderDiscountGiftCardAddPersonalMessage.prototype, "textInputs", void 0);
    OrderDiscountGiftCardAddPersonalMessage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderDiscountGiftCardAddPersonalMessage',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCardAddPersonalMessage\orderDiscountGiftCardAddPersonalMessage.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      add a message\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <ion-col>\n        <form [formGroup]="updatePersonalMsg">\n            <ion-input placeholder="To..." type="text" formControlName="to"></ion-input>\n            <ion-textarea maxlength="80" placeholder="Message..." class="text-area--wrapper" type="text"  formControlName="message"></ion-textarea>\n            <ion-textarea maxlength="40" placeholder="From..." class="text-area--wrapper" type="text"  formControlName="from"></ion-textarea>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row class="footer-wrapper" >\n    <div>\n        <button ion-button block large color="primary" (click)="addPersonalMessage()">Save & Continue</button>\n    </div>\n    <div>\n        <button ion-button block [outline]="true" (click)="navCtrl.pop()">Cancel</button>\n    </div>\n  </ion-row>\n</ion-content>\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="OrderDiscountGiftCardAddPersonalMessage-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCardAddPersonalMessage\orderDiscountGiftCardAddPersonalMessage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], OrderDiscountGiftCardAddPersonalMessage);
    return OrderDiscountGiftCardAddPersonalMessage;
}());

//# sourceMappingURL=orderDiscountGiftCardAddPersonalMessage.js.map

/***/ })

});
//# sourceMappingURL=67.js.map