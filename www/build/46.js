webpackJsonp([46],{

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDiscountGiftCardExtraGiftWalletsModule", function() { return OrderDiscountGiftCardExtraGiftWalletsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardExtraGiftWallets__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderDiscountGiftCardExtraGiftWalletsModule = (function () {
    function OrderDiscountGiftCardExtraGiftWalletsModule() {
    }
    OrderDiscountGiftCardExtraGiftWalletsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardExtraGiftWallets__["a" /* OrderDiscountGiftCardExtraGiftWallets */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardExtraGiftWallets__["a" /* OrderDiscountGiftCardExtraGiftWallets */]), __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orderDiscountGiftCardExtraGiftWallets__["a" /* OrderDiscountGiftCardExtraGiftWallets */]]
        })
    ], OrderDiscountGiftCardExtraGiftWalletsModule);
    return OrderDiscountGiftCardExtraGiftWalletsModule;
}());

//# sourceMappingURL=orderDiscountGiftCardExtraGiftWallets.module.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = maxlengthFieldValidator;
/* harmony export (immutable) */ __webpack_exports__["e"] = maxlengthFieldValidatorPostcode;
/* harmony export (immutable) */ __webpack_exports__["c"] = maxlengthFieldValidatorExtraCard;
/* harmony export (immutable) */ __webpack_exports__["b"] = maxlengthFieldValidatorCSC;
/* harmony export (immutable) */ __webpack_exports__["d"] = maxlengthFieldValidatorPIN;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appConfig__ = __webpack_require__(43);

function maxlengthFieldValidator(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length > length)
                ? { maxLengthField: errorMessage(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessage(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return fieldName + " can be no more than " + length + " characters in length.";
}
function maxlengthFieldValidatorPostcode(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length > length)
                ? { maxLengthField: errorMessagePostCode(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessagePostCode(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return __WEBPACK_IMPORTED_MODULE_0__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_api_invalid_postcode;
}
function maxlengthFieldValidatorExtraCard(length) {
    return function (control) {
        var input = parseInt(control.value);
        if (input !== null && typeof input !== 'undefined') {
            return (input > length)
                ? { maxLengthField: errorMessageExtraCard(length) }
                : null;
        }
        return null;
    };
}
function errorMessageExtraCard(length) {
    return "Maximum " + length + " extra gift cards.";
}
function maxlengthFieldValidatorCSC(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length > length)
                ? { maxLengthField: errorMessageCSC(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessageCSC(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    // return `The CSC must contain 3 digit numbers.`;
    return __WEBPACK_IMPORTED_MODULE_0__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.cardCsc_less_than_min;
}
function maxlengthFieldValidatorPIN(length, fieldName) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length > length)
                ? { maxLengthField: errorMessagePIN(fieldName, length) }
                : null;
        }
        return null;
    };
}
function errorMessagePIN(fieldName, length) {
    if (fieldName === void 0) { fieldName = 'field'; }
    return __WEBPACK_IMPORTED_MODULE_0__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_4_digits;
}
//# sourceMappingURL=validator-maxlengthField.directive.js.map

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

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDiscountGiftCardExtraGiftWallets; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orderDiscountGiftCardSharingData_services__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_numeric_directive__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_maxlengthField_directive__ = __webpack_require__(807);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OrderDiscountGiftCardExtraGiftWallets = (function () {
    function OrderDiscountGiftCardExtraGiftWallets(routeManager, navCtrl, navParams, formBuilder) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.selectedIndex = 0;
        this.formErrors = {
            'quantity': '',
        };
        this.productValid = true;
        this.order_gwp_default_section3_action_p = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.order_gwp_default_section3_action_p;
        this.baseImageUrl = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
        this.buildForm();
    }
    OrderDiscountGiftCardExtraGiftWallets.prototype.ionViewWillEnter = function () {
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('productToChooseDesign')) {
                this.productToChooseDesign = this.navParams.get('productToChooseDesign');
            }
            if (this.navParams.get('cardDesignIndex')) {
                this.selectedIndex = parseInt(this.navParams.get('cardDesignIndex'));
            }
            if (this.navParams.get('quantity')) {
                var tempQuantity = parseInt(this.navParams.get('quantity'));
                this.addExtraGCForm.patchValue({ 'quantity': tempQuantity + '' });
            }
            if (this.navParams.get('freeGreetingCardObject')) {
                this.freeGreetingCardObject = this.navParams.get('freeGreetingCardObject');
            }
        }
    };
    OrderDiscountGiftCardExtraGiftWallets.prototype.buildForm = function () {
        var _this = this;
        this.addExtraGCForm = this.formBuilder.group({
            'quantity': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__framework_validations_validator_required_directive__["a" /* requireValidator */])('Quantity'),
                    Object(__WEBPACK_IMPORTED_MODULE_7__framework_validations_validator_numeric_directive__["a" /* numericValidator */])(),
                    Object(__WEBPACK_IMPORTED_MODULE_9__framework_validations_validator_maxlengthField_directive__["c" /* maxlengthFieldValidatorExtraCard */])(999)
                ]],
        }, {
            validator: {
                updateOn: 'blur'
            }
        });
        this.addExtraGCForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    OrderDiscountGiftCardExtraGiftWallets.prototype.errorMessage = function (path) {
        var control = this.addExtraGCForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'quantity') {
            if (control.hasError('required')) {
                return control.getError('required');
            }
            else {
                if (control.hasError('maxLengthField')) {
                    return control.getError('maxLengthField');
                }
                if (control.hasError('numericInvalid')) {
                    return control.getError('numericInvalid');
                }
            }
        }
    };
    OrderDiscountGiftCardExtraGiftWallets.prototype.selectDeliveryMethod = function (index) {
        this.selectedIndex = index;
    };
    OrderDiscountGiftCardExtraGiftWallets.prototype.backToReviewOrder = function () {
        var greetingCard = __WEBPACK_IMPORTED_MODULE_5__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().getSelectedFreeGreetingCard();
        if (this.addExtraGCForm.value.quantity > 0) {
            __WEBPACK_IMPORTED_MODULE_5__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */]
                .getInstance()
                .saveExtraGreetingCard(this.productToChooseDesign[this.selectedIndex], this.selectedIndex, this.addExtraGCForm.value.quantity);
            this.navCtrl.pop();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().resetExtraCardDesign();
            if (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(greetingCard) && (__WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(greetingCard.greetingCardSelected))) {
                if (greetingCard.selectedGreetingCard === true) {
                    this.navCtrl.pop();
                }
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5__orderDiscountGiftCardSharingData_services__["a" /* OrderDiscountGiftCardSharingDataService */].getInstance().saveSelectedFreeGreetingCard(this.freeGreetingCardObject.cardDesignIndex, this.freeGreetingCardObject.productToChooseDesign[this.selectedIndex]);
                this.navCtrl.pop();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], OrderDiscountGiftCardExtraGiftWallets.prototype, "textInputs", void 0);
    OrderDiscountGiftCardExtraGiftWallets = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderDiscountGiftCardExtraGiftWallets',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCardExtraGiftWallets\orderDiscountGiftCardExtraGiftWallets.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      extra gift wallets\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row class="card-greeting--wrapper">\n      <ion-col class="text-center">\n        <h3 class="title">Add extra gift wallets to your order</h3>\n        <p class="decs" text-center>\n          Please note these cards are supplied non-personalised, but can be hand-written. A charge will apply for each additional card.\n          <!--{{order_gwp_default_section3_action_p}}-->\n        </p>\n        <div  *ngFor="let product of productToChooseDesign; let idx = index" class="m-b-5">\n          <div class="img-ratio-16-9" (click)="selectDeliveryMethod(idx)"   [ngClass]="{\'active\': selectedIndex === idx}">\n            <img [src]="baseImageUrl + product.smallImages[0]" alt="product image">\n            <ion-icon *ngIf="selectedIndex === idx" name="checkmark"></ion-icon>\n          </div>\n        </div>\n\n        <p class="price" text-center>\n          Price: 20p per gift wallet\n        </p>\n        <form [formGroup]="addExtraGCForm">\n          <ion-input  placeholder="Enter Quantity" type="tel"  formControlName="quantity"></ion-input>\n          <ion-item-divider ion-item light no-lines\n                            class="error"\n                            *ngIf="addExtraGCForm.get(\'quantity\').dirty\n                                && !addExtraGCForm.get(\'quantity\').valid">\n            <p>{{errorMessage(\'quantity\')}}</p>\n          </ion-item-divider>\n        </form>\n      </ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <div>\n      <button ion-button block large [disabled]="!addExtraGCForm.valid || !productValid"\n        (click)="backToReviewOrder()">Save and Continue\n      </button>\n    </div>\n    \n    <div>\n        <button ion-button block [outline]="true" (click)="navCtrl.pop()">Cancel</button>\n    </div>\n  </ion-row>\n</ion-content>\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="OrderDiscountGiftCardExtraGiftWallets-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\orderManagement\orderDiscountGiftCard\orderDiscountGiftCardExtraGiftWallets\orderDiscountGiftCardExtraGiftWallets.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], OrderDiscountGiftCardExtraGiftWallets);
    return OrderDiscountGiftCardExtraGiftWallets;
}());

//# sourceMappingURL=orderDiscountGiftCardExtraGiftWallets.js.map

/***/ })

});
//# sourceMappingURL=46.js.map