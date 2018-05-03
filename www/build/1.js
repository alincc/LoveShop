webpackJsonp([1],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourCardDetailsPageModule", function() { return YourCardDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yourCardDetails__ = __webpack_require__(945);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var YourCardDetailsPageModule = (function () {
    function YourCardDetailsPageModule() {
    }
    YourCardDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__yourCardDetails__["a" /* YourCardDetailsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__yourCardDetails__["a" /* YourCardDetailsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__yourCardDetails__["a" /* YourCardDetailsPage */]]
        })
    ], YourCardDetailsPageModule);
    return YourCardDetailsPageModule;
}());

//# sourceMappingURL=yourCardDetails.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);

var CardDetailSharingDataService = (function () {
    function CardDetailSharingDataService() {
        this.defaultMasterData = {};
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](this.currentMasterData);
        if (CardDetailSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use CardDetailSharingDataService.getInstance() instead of new.');
        }
        CardDetailSharingDataService._instance = this;
    }
    Object.defineProperty(CardDetailSharingDataService.prototype, "state$", {
        get: function () {
            return this._state$;
        },
        enumerable: true,
        configurable: true
    });
    CardDetailSharingDataService.prototype.resetState = function () {
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$.next(this.currentMasterData);
    };
    CardDetailSharingDataService.prototype.saveStep1Screen = function (step1Model) {
        this.currentMasterData.step1Model = step1Model;
    };
    CardDetailSharingDataService.prototype.saveStep2Screen = function (step2Model) {
        this.currentMasterData.step2Model = step2Model;
    };
    CardDetailSharingDataService.prototype.getAmountTopupAtStep1 = function () {
        return this.currentMasterData.step1Model.topUpInput;
    };
    CardDetailSharingDataService.prototype.savePrimaryCard = function (primaryCard) {
        this.primaryCard = primaryCard;
    };
    CardDetailSharingDataService.prototype.getPrimaryCard = function () {
        return this.primaryCard;
    };
    CardDetailSharingDataService.prototype.resetPrimaryCard = function () {
        this.primaryCard = null;
    };
    CardDetailSharingDataService.prototype.saveCurrentCard = function (currentCard) {
        this.currentCard = currentCard;
    };
    CardDetailSharingDataService.prototype.getCurrentCard = function () {
        return this.currentCard;
    };
    CardDetailSharingDataService.prototype.resetCurrentCard = function () {
        this.currentCard = null;
    };
    Object.defineProperty(CardDetailSharingDataService.prototype, "gotoCardData", {
        get: function () {
            return this._gotoCardData;
        },
        set: function (card) {
            this._gotoCardData = card;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardDetailSharingDataService.prototype, "gotoCardDataReload", {
        get: function () {
            return this._gotoCardDataReload;
        },
        set: function (card) {
            this._gotoCardDataReload = card;
        },
        enumerable: true,
        configurable: true
    });
    CardDetailSharingDataService.getInstance = function () {
        return CardDetailSharingDataService._instance;
    };
    // tslint:disable-next-line:member-ordering
    CardDetailSharingDataService._instance = new CardDetailSharingDataService();
    return CardDetailSharingDataService;
}());

//# sourceMappingURL=cardDetailsSharing.services.js.map

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

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Where2SpendSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var Where2SpendSharingDataService = (function () {
    function Where2SpendSharingDataService() {
        this.needBackToYOurCardDetail = false;
        this.updateEvent$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(Where2SpendSharingDataService.prototype, "needBackToYOurCard", {
        get: function () {
            return this.needBackToYOurCardDetail;
        },
        set: function (status) {
            this.needBackToYOurCardDetail = status;
        },
        enumerable: true,
        configurable: true
    });
    Where2SpendSharingDataService.prototype.resetState = function () {
        this.categories = null;
        this.selectedCard = null;
        this.useMyLocation = true;
        this.currenrLocation = false;
        this.keepLocation = false;
        this.keepData = false;
        this.refreshCategory = false;
        this.gpsStatus = false;
        this.needBackToYOurCardDetail = false;
    };
    Where2SpendSharingDataService.getInstance = function () {
        if (!Where2SpendSharingDataService._instance) {
            Where2SpendSharingDataService._instance = new Where2SpendSharingDataService();
        }
        return Where2SpendSharingDataService._instance;
    };
    return Where2SpendSharingDataService;
}());

//# sourceMappingURL=where2SpendSharingData.services.js.map

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

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARD_INSTORE; });
/* unused harmony export VOUCHER_INSTORE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ONLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VIRTUAL_MASTERCARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Where2SpendServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CARD_INSTORE = 'CARD_INSTORE';
var VOUCHER_INSTORE = 'VOUCHER_INSTORE';
var ONLINE = 'ONLINE';
var VIRTUAL_MASTERCARD = 'VIRTUAL_MASTERCARD';
var Where2SpendServices = (function () {
    function Where2SpendServices(http) {
        this.http = http;
    }
    Where2SpendServices.prototype.retriveRetailerLocation = function (body) {
        return this.http.post('card/where', body).share();
    };
    Where2SpendServices.prototype.searchPostcodeAutoComplete = function (url) {
        return this.http.getExternal(url);
    };
    Where2SpendServices.prototype.lookUpAddress = function (url) {
        return this.http.getExternal(url);
    };
    Where2SpendServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], Where2SpendServices);
    return Where2SpendServices;
}());

//# sourceMappingURL=where2Spend.services.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailsDataService; });
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


var CardDetailsDataService = (function () {
    function CardDetailsDataService(http) {
        this.http = http;
    }
    CardDetailsDataService.prototype.getUserDetails = function () {
        return this.http.get("account");
    };
    CardDetailsDataService.prototype.removeCard = function (card) {
        return this.http.delete("card", card);
    };
    CardDetailsDataService.prototype.updateCardNickName = function (modelNickName) {
        return this.http.put("card/nickname", modelNickName);
    };
    CardDetailsDataService.prototype.suspendCard = function (cardModel) {
        return this.http.post("card/suspend", cardModel);
    };
    CardDetailsDataService.prototype.generateOrder = function (topUpmodel) {
        return this.http.post("order", topUpmodel);
    };
    CardDetailsDataService.prototype.getSMSAlertSetting = function (cardNumber) {
        return this.http.post("card/sms", cardNumber);
    };
    CardDetailsDataService.prototype.updateSMSAlertSetting = function (model) {
        return this.http.put("card/sms", model);
    };
    CardDetailsDataService.prototype.retrieveMasterCardInfo = function (body) {
        return this.http.post("card/mastercard", body);
    };
    CardDetailsDataService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    CardDetailsDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], CardDetailsDataService);
    return CardDetailsDataService;
}());

//# sourceMappingURL=cardDetailsData.service.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourCardDetailsApiGateway; });
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


var YourCardDetailsApiGateway = (function () {
    function YourCardDetailsApiGateway(http) {
        this.http = http;
    }
    YourCardDetailsApiGateway.prototype.getListCards = function () {
        return this.http.get("card");
    };
    YourCardDetailsApiGateway.prototype.getMessageByCode = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    YourCardDetailsApiGateway = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], YourCardDetailsApiGateway);
    return YourCardDetailsApiGateway;
}());

//# sourceMappingURL=yourCardDetailsApiGateway.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundValueService; });
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


var RefundValueService = (function () {
    function RefundValueService(http) {
        this.http = http;
    }
    RefundValueService.prototype.postValidateVirtualMasterCard = function (cardId) {
        return this.http.post("card/mastercard/validate-refund", cardId);
    };
    RefundValueService.prototype.postPerformVirtualMasterCard = function (cardId) {
        return this.http.post("card/mastercard/refund", cardId);
    };
    RefundValueService.prototype.getContentFromRetreiveContent = function (cardUrl) {
        return this.http.get('cms/content/urlTitle=' + cardUrl);
    };
    RefundValueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], RefundValueService);
    return RefundValueService;
}());

//# sourceMappingURL=refundValue.service.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCardStatementService; });
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


var ViewCardStatementService = (function () {
    function ViewCardStatementService(http) {
        this.http = http;
    }
    ViewCardStatementService.prototype.getStatementList = function (cardData) {
        return this.http.post("card/statement", cardData);
    };
    ViewCardStatementService.prototype.getContentFromRetreiveContent = function (code) {
        return this.http.get('cms/message/code=' + code);
    };
    ViewCardStatementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], ViewCardStatementService);
    return ViewCardStatementService;
}());

//# sourceMappingURL=viewCardStatement.service.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentMessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__yourCardDetailsApiGateway__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContentMessageService = (function () {
    function ContentMessageService(yourCardDetailsApiGateway) {
        this.yourCardDetailsApiGateway = yourCardDetailsApiGateway;
    }
    ContentMessageService.prototype.getContentMessage = function () {
        __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                var msg_code = [
                    'cardCsc_required',
                    'cardCsc_less_than_min',
                    'cardCsc_invalid_characters',
                    'confirm_removal',
                    'wallet_remove_card_message',
                    'use_fingerprint_not_PIN',
                    'use_same_finger',
                    'changing_PIN',
                    'park_api_enter_userid_password_to_change_pin',
                    'current_email',
                    'basket_form_no_products_basket',
                    'basket_form_checkout_current_product',
                    'basket_form_no_card_available',
                    'add_card_add_new_card',
                    'add_card_use_saved_card',
                    'order_datacash_payment_capture_default_cardNumber_label',
                    'order_datacash_payment_capture_default_label_save_card',
                    'order_confirmation_default_p_title',
                    'order_confirmation_default_p_strapline',
                    'order_confirmation_default_confirmation_SMS',
                    'purchasemastercard_form_label_card_details',
                    'order_confirmation_card_tfoot',
                    'empty_top_up_card_later',
                    // 'suspend_card_portlet_suspend_card',
                    'remove_card_confirm'
                ];
                for (var i = 0; i < msg_code.length; i++) {
                    if (__WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i]) && __WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i].response) && __WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[i].response.message)) {
                        var mg_item_code = msg_code[i];
                        __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage[mg_item_code] = res[i].response.message;
                    }
                }
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_5__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].combineLatest(this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.error.cardCsc-required"), this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.error.cardCsc-less-than-min"), this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.error.cardCsc-invalid-characters"), this.yourCardDetailsApiGateway.getMessageByCode("confirm-removal"), this.yourCardDetailsApiGateway.getMessageByCode("wallet.remove-card.message"), this.yourCardDetailsApiGateway.getMessageByCode("use-fingerprint-not-PIN"), this.yourCardDetailsApiGateway.getMessageByCode("use-same-finger"), this.yourCardDetailsApiGateway.getMessageByCode("changing-PIN"), this.yourCardDetailsApiGateway.getMessageByCode("park-api.enter-userid-password-to-change-pin"), this.yourCardDetailsApiGateway.getMessageByCode("current-email"), this.yourCardDetailsApiGateway.getMessageByCode("basket.form.no-products-basket"), this.yourCardDetailsApiGateway.getMessageByCode("basket.form.checkout-current-product"), this.yourCardDetailsApiGateway.getMessageByCode("basket.form.no-card-available"), this.yourCardDetailsApiGateway.getMessageByCode("add-card.add-new-card"), this.yourCardDetailsApiGateway.getMessageByCode("add-card.use-saved-card"), this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.cardNumber.label"), this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.label.save-card"), this.yourCardDetailsApiGateway.getMessageByCode("order.confirmation.default.p-title"), this.yourCardDetailsApiGateway.getMessageByCode("order.confirmation.default.p-strapline"), this.yourCardDetailsApiGateway.getMessageByCode("order.confirmation.default.confirmation-SMS"), this.yourCardDetailsApiGateway.getMessageByCode("purchasemastercard.form.label.card-details"), this.yourCardDetailsApiGateway.getMessageByCode("order-confirmation.card.tfoot"), this.yourCardDetailsApiGateway.getMessageByCode("empty-top-up-card-later"), 
        // this.yourCardDetailsApiGateway.getMessageByCode("to_usnuspend"),
        // this.yourCardDetailsApiGateway.getMessageByCode("suspend-card-portlet-suspend-card"),
        this.yourCardDetailsApiGateway.getMessageByCode("remove-card-confirm")).subscribe(observer);
    };
    ContentMessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__yourCardDetailsApiGateway__["a" /* YourCardDetailsApiGateway */]])
    ], ContentMessageService);
    return ContentMessageService;
}());

//# sourceMappingURL=contentMessage.service.js.map

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_card_type__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardInfoService = (function () {
    function CardInfoService() {
    }
    CardInfoService.prototype.get4LastDigitsCardNumber = function (card) {
        var cardNumber = null;
        if (card.cardType === __WEBPACK_IMPORTED_MODULE_1__models_card_type__["a" /* CardType */].FLEXECODE) {
            cardNumber = card.cardId;
        }
        else {
            cardNumber = card.cardNumber;
        }
        if (!cardNumber) {
            return null;
        }
        if (card.cardType === __WEBPACK_IMPORTED_MODULE_1__models_card_type__["a" /* CardType */].FLEXECODE && cardNumber.indexOf('-') > 0) {
            cardNumber = cardNumber.replace(/-/g, "");
        }
        return cardNumber.substr(cardNumber.length - 4);
    };
    CardInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CardInfoService);
    return CardInfoService;
}());

//# sourceMappingURL=cardInfo.service.js.map

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourCardDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cardDetailsData_service__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cardDetailsSharing_services__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_card_type__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__whereToSpend_where2SpendSharingData_services__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__whereToSpend_where2Spend_services__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__refundValue_refundValue_service__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__viewCardStatement_viewCardStatement_service__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__benefits_benefitsData_service__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_nav_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__yourCardDetailsApiGateway__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contentMessage_service__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__cardCategory_service__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cardActive_service__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__addCardEvent_service__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__cardInfo_service__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__yourCardDetailsEvents__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var YourCardDetailsPage = (function () {
    function YourCardDetailsPage(navParams, navCtrl, routeManager, alertCtrl, where2SpendServices, viewCardStatementService, iab, http, returnService, cardDetailsDataService, navSvc, platform, yourCardDetailsApiGateway, contentMessageService, cardCategoryService, cardActiveService, addCardEventService) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.routeManager = routeManager;
        this.alertCtrl = alertCtrl;
        this.where2SpendServices = where2SpendServices;
        this.viewCardStatementService = viewCardStatementService;
        this.iab = iab;
        this.http = http;
        this.returnService = returnService;
        this.cardDetailsDataService = cardDetailsDataService;
        this.navSvc = navSvc;
        this.platform = platform;
        this.yourCardDetailsApiGateway = yourCardDetailsApiGateway;
        this.contentMessageService = contentMessageService;
        this.cardCategoryService = cardCategoryService;
        this.cardActiveService = cardActiveService;
        this.addCardEventService = addCardEventService;
        this.initialSlide = 0;
        this.isEditCardTitle = false;
        this.showMasterCardDetail = false;
        this.currentMasterCard = {};
        this.masterCardInfor = {};
        this.canShowMoreButton = false;
        this.tempNickname = '';
        this.defaultCardId = '';
        this.currentSlide = 0;
        this.cardButtons = [];
        this.cardOptions = [];
        this.cardList = [];
        this.showMoreCardOptions = false;
        this.enter_account_password_to_view_card = __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.enter_account_password_to_view_card;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
        // setting up your card details events
        __WEBPACK_IMPORTED_MODULE_25__yourCardDetailsEvents__["a" /* YourCardDetailsEvents */].getInstance().setupYourCardDetailsEvents(this.routeManager, this.platform, this.navCtrl, this.yourCardDetailsApiGateway, this.contentMessageService, this.cardCategoryService, this.cardActiveService, this.addCardEventService);
        __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().updateListCard$.asObservable().subscribe(function (action) {
            if (action == 'update') {
                _this.retrieveCardsInfo();
            }
        });
        // refresh list cards after top up successfully.
        __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().refreshListCards$.asObservable().subscribe(function (action) {
            if (action == 'update-list-cards-after-topup-successfully') {
                _this.retrieveCardsInfo();
            }
        });
    }
    YourCardDetailsPage.prototype.getCardNickname = function (card) {
        return (card && card.nickname) ? card.nickname : '';
    };
    YourCardDetailsPage.prototype.gotoAddCardNumber = function () {
        __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().needBackToYourCard = true;
        this.navCtrl.push('AddCardNumberPage');
    };
    YourCardDetailsPage.prototype.ionViewDidLeave = function () {
        __WEBPACK_IMPORTED_MODULE_25__yourCardDetailsEvents__["a" /* YourCardDetailsEvents */].getInstance().yourCardDetailsEventsOnLeave();
        __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().goToFromAddCard = false;
        if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.cardSlides) && __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.cardSlides.getActiveIndex())) {
            var index = this.cardSlides.getActiveIndex();
            __WEBPACK_IMPORTED_MODULE_6__cardDetailsSharing_services__["a" /* CardDetailSharingDataService */].getInstance().gotoCardData = this.cardList[index];
        }
    };
    YourCardDetailsPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_27_jquery___default()('.app-root').removeClass('not-show-tab');
        if (localStorage.getItem('no-reload-home-data')) {
            localStorage.removeItem('no-reload-home-data');
            return;
        }
        __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().resetState();
        this.initialSlide = 0;
        this.showMoreCardOptions = false;
        this.currentSlide = 0;
        this.canShowMoreButton = true;
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            this.retrieveCardsInfo();
        }
    };
    YourCardDetailsPage.prototype.goToActiveCard = function () {
        var _this = this;
        this.currentSlide = this.cardActiveService.getActiveCardIndex4Slide2(this.cardList);
        if (this.cardSlides) {
            this.cardSlides.update();
        }
        if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.cardSlides)) {
            setTimeout(function () {
                return _this.cardSlides && _this.cardSlides.slideTo(_this.currentSlide, 0);
            }, 200);
        }
    };
    YourCardDetailsPage.prototype.canEditCardTitle = function (card) {
        return !!(card && (card.cardType === __WEBPACK_IMPORTED_MODULE_8__models_card_type__["a" /* CardType */].FLEXECASH) || (card.cardType === __WEBPACK_IMPORTED_MODULE_8__models_card_type__["a" /* CardType */].FLEXECODE));
    };
    YourCardDetailsPage.prototype.showButtonCardItem = function (cardItem) {
        if (cardItem.cardBtnName === 'YOUR BENEFITS' && !cardItem.showBenefits) {
            return false;
        }
        if (cardItem.cardBtnName === 'Top Up' && !cardItem.canTopUp) {
            return false;
        }
        if (cardItem.cardBtnName === 'TRANSACTIONS/BALANCE' && cardItem.canNotOpenLink) {
            return false;
        }
        return true;
    };
    YourCardDetailsPage.prototype.slideChanged = function () {
        this.masterCardInfor = {};
        this.showMoreCardOptions = false;
        var currentSlide = this.cardSlides.getActiveIndex();
        var length = this.cardSlides.length();
        if (currentSlide < length && length > 0 && currentSlide >= 0
            && Array.isArray(this.cardList) && this.cardList.length > 0) {
            this.isEditCardTitle = false;
            this.currentSlide = currentSlide;
            var currentCard = this.cardList[currentSlide];
            this.tempNickname = currentCard.nickname || '';
            this.cardButtons = currentCard.buttons;
            this.cardOptions = currentCard.options;
            this.showMasterCardDetail = false;
            this.showMoreCardOptions = false;
            this.currentMasterCard = {};
            this.canShowMoreButton = this.checkCanShowMoreButton(currentCard);
            __WEBPACK_IMPORTED_MODULE_6__cardDetailsSharing_services__["a" /* CardDetailSharingDataService */].getInstance().gotoCardData = this.cardList[this.currentSlide];
            var card = {
                cardNumber: this.cardList[currentSlide].cardNumber,
                cardID: this.cardList[currentSlide].cardId,
            };
            __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardCurrent = card;
            __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = card;
        }
        if (currentSlide >= length) {
            this.cardSlides && this.cardSlides.slideTo(length - 1, 0);
        }
    };
    YourCardDetailsPage.prototype.checkCanShowMoreButton = function (cardItem) {
        return !!cardItem && cardItem.walletType !== 'SUPERMARKET';
    };
    YourCardDetailsPage.prototype.updateCardNickName = function (cardIndex) {
        var _this = this;
        this.isEditCardTitle = false;
        __WEBPACK_IMPORTED_MODULE_25__yourCardDetailsEvents__["a" /* YourCardDetailsEvents */].getInstance().handleUpdateCardNickNameEvent(this.cardList, cardIndex, this.currentSlide, this.tempNickname, this.cardDetailsDataService).then(function (commitedName) {
            _this.cardList[cardIndex].nickname = commitedName;
        }, function (rollbackName) {
            _this.cardList[cardIndex].nickname = rollbackName;
        });
    };
    YourCardDetailsPage.prototype.get4LastDigitsCardNumber = function (card) {
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
    YourCardDetailsPage.prototype.retrieveCardsInfo = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                var body = res.response;
                if (body.cards.length > 0) {
                    var listCardInWallet = [];
                    for (var _i = 0, _a = body.cards; _i < _a.length; _i++) {
                        var card = _a[_i];
                        var cardItem = card;
                        var cardCategory = _this.cardCategoryService.buildCardItemBaseOnCategory(card);
                        cardItem.buttons = cardCategory.buttons;
                        cardItem.options = cardCategory.options;
                        listCardInWallet.push(cardItem);
                    }
                    _this.cardList = listCardInWallet;
                    _this.lastIndex = _this.cardList.length - 1;
                    __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardsData(listCardInWallet);
                    if (reset && _this.cardSlides) {
                        _this.cardSlides.slideTo(0, 0);
                    }
                    if (!Array.isArray(_this.cardList) || _this.cardList.length <= 0) {
                        _this.navCtrl.setRoot('TabsPage', { noVerify: true, keepData: true });
                    }
                    _this.goToActiveCard();
                    var cardIndexDataReload = _this.cardActiveService.getActiveIndex4CardDataReload(_this.cardList);
                    if (cardIndexDataReload.cardActiveIndex !== -1) {
                        _this.currentSlide = cardIndexDataReload.cardActiveIndex;
                        _this.defaultCardId = cardIndexDataReload.defaultCardId;
                        if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(_this.cardSlides)) {
                            _this.cardSlides.update();
                            setTimeout(function () {
                                return _this.cardSlides && _this.cardSlides.slideTo(_this.currentSlide, 0);
                            }, 200);
                        }
                    }
                    else {
                        _this.cardSlides && _this.cardSlides.slideTo(0, 0);
                    }
                    if (Array.isArray(_this.cardList) && _this.cardList.length > _this.currentSlide) {
                        _this.cardButtons = _this.cardList[_this.currentSlide].buttons;
                        _this.cardOptions = _this.cardList[_this.currentSlide].options;
                    }
                    else {
                        _this.cardButtons = [];
                        _this.cardOptions = [];
                    }
                    if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(_this.cardSlides) && __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(_this.cardSlides.getActiveIndex())) {
                        var currentIndex = 0;
                        var card = {
                            cardNumber: _this.cardList[currentIndex].cardNumber,
                            cardID: _this.cardList[currentIndex].cardId,
                        };
                        __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardCurrent = card;
                    }
                }
                else {
                    _this.cardList = [];
                    _this.addCardEventService.raiseAddCardEvent();
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.yourCardDetailsApiGateway
            .getListCards()
            .subscribe(observer);
    };
    YourCardDetailsPage.prototype.openEditCardName = function () {
        var index = this.cardSlides.getActiveIndex();
        var card = this.cardList[index];
        this.isEditCardTitle = true;
        this.tempNickname = card.nickname;
    };
    YourCardDetailsPage.prototype.getCardButtonClass = function (item) {
        var className;
        if (item && item.cardBtnName && item.cardBtnName == 'Top Up') {
            className = 'l2s-btn l2s-btn--default btn-uppercase card-btn m-b-10';
        }
        else if (item && item.cardBtnName && item.cardBtnName == 'YOUR BENEFITS') {
            className = 'l2s-btn l2s-btn--primary btn-uppercase card-btn';
        }
        else {
            className = 'l2s-btn l2s-btn--outline l2s-btn--outline-other btn-uppercase card-btn m-t-10';
        }
        return className;
    };
    YourCardDetailsPage.prototype.getCardOptionClass = function (item) {
        return 'l2s-btn l2s-btn--outline btn-uppercase card-btn';
    };
    YourCardDetailsPage.prototype.slideTo = function (index) {
        this.cardSlides.slideTo(index, 0);
    };
    YourCardDetailsPage.prototype.handleSuppendCard = function () {
        var _this = this;
        var currentCard = this.cardList[this.currentSlide];
        var status = currentCard && currentCard.status;
        var alertReportLostOrStolen;
        if (status && status.toUpperCase() === 'SUSPENDED') {
            alertReportLostOrStolen = this.alertCtrl.create({
                title: 'Card/e-code suspended',
                message: "<p>\n        To unsuspend your card or arrange for a replacement card/e-code* please call\n        <a href=\"tel:03443750739\">0344 375 0739</a> between 9am and 5pm, Monday to Friday, excluding UK Bank Holidays.</p><p><small>\n*A fee will be applied to cover administration and delivery costs - please see card/e-code\nterms &amp; conditions for further details.\n<br>\nAllow 10 working days for delivery.\n</small></p>\n        ",
                cssClass: 'l2s-alert--default l2s-alert--flat l2s-alert--centered',
                buttons: [
                    {
                        text: 'Return to your cards',
                        cssClass: ''
                    },
                    {
                        text: '',
                        cssClass: 'close-button icon icon-ios ion-ios-close',
                        handler: function (data) {
                        }
                    }
                ]
            });
        }
        else {
            alertReportLostOrStolen = this.alertCtrl.create({
                title: 'Lost or Stolen',
                message: this.suspend_card_portlet_suspend_card,
                cssClass: 'l2s-alert--flat l2s-alert--twobutton',
                buttons: [
                    {
                        text: 'Suspend card/ e-code',
                        cssClass: 'main-button',
                        handler: function (data) {
                            var cardModel = {
                                "cardID": currentCard.cardNumber,
                                "cardType": currentCard.cardType
                            };
                            if (currentCard.cardType === __WEBPACK_IMPORTED_MODULE_8__models_card_type__["a" /* CardType */].PMASTERCARD) {
                                cardModel.cardID = currentCard.cardId;
                            }
                            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
                            _this.cardDetailsDataService
                                .suspendCard(cardModel)
                                .subscribe(function (res) {
                                var alertSuppendSuccess = _this.alertCtrl.create({
                                    cssClass: 'l2s-alert--default l2s-alert--centered l2s-alert--flat',
                                    title: 'Card/ e-code suspended',
                                    message: "To unsuspend your card or arrange for a replacement card/e-code* please call <a href=\"tel:03443750739\">0344 375 0739</a> between 9am and 5pm, Monday to Friday, excluding UK Bank Holidays. <br> <small>*A fee will be applied to cover administration and delivery cost - please see card/e-code terms & conditions for further details. Allow 10 working days for delivery.</small>",
                                    buttons: [{
                                            text: 'Return to your cards',
                                            handler: function (data) {
                                                _this.retrieveCardsInfo();
                                            }
                                        }, {
                                            text: '',
                                            cssClass: 'close-button icon icon-ios ion-ios-close',
                                            handler: function (data) {
                                            }
                                        }]
                                });
                                alertSuppendSuccess.present();
                            }, function () {
                                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                            }, function () {
                                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        cssClass: 'cancel-button',
                        handler: function (data) {
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
        }
        alertReportLostOrStolen.present();
    };
    YourCardDetailsPage.prototype.getListCardStatement = function (cardData) {
        var _this = this;
        var req;
        if (cardData.cardType === 'MASTERCARD' || cardData.cardType === 'PMASTERCARD') {
            req = {
                "cardID": cardData.cardId,
                "issuer": cardData.issuer
            };
        }
        else {
            req = {
                "cardID": cardData.cardNumber
            };
        }
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this.viewCardStatementService.getStatementList(req)
            .subscribe(function (res) {
            if (!res.ok) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                return;
            }
            var body = res.response;
            _this.navCtrl.push('ViewCardStatementPage', { cardCurrent: cardData, data: body });
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    YourCardDetailsPage.prototype.removeCardConfirm = function () {
        var _this = this;
        var cardItem = this.cardList[this.currentSlide];
        var cardModel = {
            "propositionId": cardItem.propositionId,
            "cardNumber": cardItem.cardNumber
        };
        if (cardItem.cardType === __WEBPACK_IMPORTED_MODULE_8__models_card_type__["a" /* CardType */].SAINSBURYS) {
            cardModel.serialNumber = cardItem.serialNumber;
        }
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var card = {
                    reloadData: true,
                    cardId: '',
                    cardNumber: '',
                };
                __WEBPACK_IMPORTED_MODULE_6__cardDetailsSharing_services__["a" /* CardDetailSharingDataService */].getInstance().gotoCardDataReload = card;
                setTimeout(function () {
                    _this.retrieveCardsInfo();
                }, 100);
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.cardDetailsDataService
            .removeCard(cardModel)
            .subscribe(observer);
    };
    YourCardDetailsPage.prototype.handleRemoveCard = function () {
        var _this = this;
        var promptConfirmRemove = this.alertCtrl.create({
            title: '',
            subTitle: '',
            cssClass: 'l2s-alert--flat l2s-alert--twobutton',
            message: __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.wallet_remove_card_message,
            buttons: [
                {
                    text: 'Cancel',
                    cssClass: 'cancel-button',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Yes, Remove',
                    cssClass: 'main-button',
                    handler: function (data) {
                        _this.removeCardConfirm();
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
        promptConfirmRemove.present();
    };
    YourCardDetailsPage.prototype.handleCardOption = function (cardOpt) {
        var currentCard = this.cardList[this.currentSlide];
        if (cardOpt.cardOptLink != '') {
            if (cardOpt.cardOptName === 'Alerts') {
                if (currentCard.canRegisterSms === true) {
                    this.viewAlertSettingsScreen(currentCard, cardOpt);
                }
                else {
                    this.blockedCardShouldNotBeAble2SetupAlerts();
                }
            }
            else if (cardOpt.cardOptName === 'Refund value') {
                this.validateVirtualMasterCard(this.currentSlide);
            }
            else if (cardOpt.cardOptName == "Help") {
                var code = 'app.l2s.faqs';
                this.retrieveMessage(code);
            }
            else if (cardOpt.cardOptName == 'TERMS & CONDITIONS' && currentCard.termsPath) {
                var url = this._normalizeUrl(currentCard.termsPath);
                var browser = this.iab.create(url, "_system", "location=true");
            }
            else {
                this.navCtrl.setRoot(cardOpt.cardOptLink, { cardId: cardOpt.cardId });
            }
        }
        else if (cardOpt.cardOptName != null && cardOpt.cardOptName != '') {
            var optionName = cardOpt.cardOptName.toUpperCase().trim();
            if (optionName === 'REPORT LOST OR STOLEN' || optionName === 'SUSPEND') {
                this.handleSuppendCard();
            }
            else if (cardOpt.cardOptName.toUpperCase() === 'REMOVE') {
                this.handleRemoveCard();
            }
        }
    };
    YourCardDetailsPage.prototype.viewAlertSettingsScreen = function (currentCard, cardOpt) {
        __WEBPACK_IMPORTED_MODULE_25__yourCardDetailsEvents__["a" /* YourCardDetailsEvents */].getInstance().handleViewAlertSettingsEventClick(currentCard, cardOpt);
    };
    YourCardDetailsPage.prototype.blockedCardShouldNotBeAble2SetupAlerts = function () {
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                if (!res.ok) {
                    return;
                }
                if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res) && __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res.response) && __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res.response.message)) {
                    __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(res.response.message);
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.cardDetailsDataService
            .getContentFromRetreiveContent("flexecash.sms.register.not-available")
            .subscribe(observer);
    };
    YourCardDetailsPage.prototype.validateVirtualMasterCard = function (indexCard) {
        var _this = this;
        var cardCurrent = this.cardList[indexCard];
        var cardID = {
            'cardID': cardCurrent.cardId
        };
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                    return;
                }
                var body = res.response;
                if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body)) {
                    _this.navCtrl.push('RefundValuePage', {
                        'cardIndex': _this.currentSlide,
                        'totalRefund': body.totalRefund
                    });
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.returnService
            .postValidateVirtualMasterCard(cardID)
            .subscribe(observer);
    };
    YourCardDetailsPage.prototype.canPrintCardDetail = function (cardButtons) {
        return this.showMasterCardDetail && cardButtons.cardBtnName &&
            cardButtons.cardBtnName.toUpperCase().trim() === 'Retrieve Card Details'.toUpperCase();
    };
    YourCardDetailsPage.prototype.hidePrintCardDetail = function () {
        this.showMasterCardDetail = false;
        this.masterCardInfor = false;
    };
    YourCardDetailsPage.prototype.handleCardButton = function (cardButtons) {
        if (cardButtons.cardBtnName &&
            cardButtons.cardBtnName.toUpperCase().trim() === 'Retrieve Card Details'.toUpperCase()) {
            var currentCard = this.cardList[this.currentSlide];
            if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNull(this.masterCardInfor.cvv)) {
                this.presentPrompt(currentCard.cardId);
            }
            this.currentMasterCard = {
                cardID: this.masterCardInfor.cardId || '',
                cardNumber: this.masterCardInfor.cardNumber || '',
                cvv: this.masterCardInfor.cvv || '',
                expiryDate: currentCard.expiryDate || '',
                nickname: this.masterCardInfor.nickname || ''
            };
        }
        else {
            var currentCard = this.cardList[this.cardSlides.getActiveIndex()];
            if (cardButtons.cardBtnLink == "SCardFAQPage" && cardButtons.cardSecondaryBtnLink == 'SCardFAQPage') {
                this.navCtrl.push('CardFAQPage', { cardType: currentCard.cardType });
                return;
            }
            if (cardButtons.cardBtnLink == 'ExchangePage') {
                __WEBPACK_IMPORTED_MODULE_15__benefits_benefitsData_service__["a" /* BenefitsDataService */].getInstance().currentCardNumber = currentCard.cardNumber;
                this.navCtrl.parent.select(2);
                return;
            }
            if (cardButtons.cardBtnLink == "AmountTopUpPage") {
                var currentSlide = this.cardSlides.getActiveIndex();
                var card = {
                    cardNumber: this.cardList[currentSlide].cardNumber,
                    cardID: this.cardList[currentSlide].cardId,
                };
                __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardCurrent = card;
                this.navCtrl.push(cardButtons.cardBtnLink, {
                    cardNumber: this.currentMasterCard.cardNumber,
                    cardType: currentCard.cardType,
                    cardSelected: this.cardList[this.cardSlides.getActiveIndex()],
                    cardIndex: this.cardSlides.getActiveIndex(),
                    rootPage: true
                });
                return;
            }
            if (cardButtons.cardBtnLink == "ViewCardStatementPage") {
                this.getListCardStatement(this.cardList[this.cardSlides.getActiveIndex()]);
                return;
            }
            if (cardButtons.cardBtnLink == 'ViewSCardStatementPage') {
                var rawUrl = this.cardList[this.cardSlides.getActiveIndex()].externalTransactionLink;
                if (rawUrl) {
                    var url = this._normalizeUrl(rawUrl);
                    var browser = this.iab.create(url, "_system", "location=true");
                }
                return;
            }
            if (cardButtons.cardBtnName == 'Top Up Information') {
                this.navCtrl.push('TopUpInfoPage', { cardType: currentCard.cardType });
                return;
            }
            if (cardButtons.cardBtnName == 'WHERE TO SPEND') {
                __WEBPACK_IMPORTED_MODULE_9__whereToSpend_where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().selectedCard = currentCard;
                var cardType = (currentCard && typeof currentCard.cardType == 'string') ? currentCard.cardType : '';
                if (cardType == __WEBPACK_IMPORTED_MODULE_8__models_card_type__["a" /* CardType */].MASTERCARD || cardType == __WEBPACK_IMPORTED_MODULE_8__models_card_type__["a" /* CardType */].PMASTERCARD) {
                    this.gotoVirtalMsCard();
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_9__whereToSpend_where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepData = false;
                    __WEBPACK_IMPORTED_MODULE_9__whereToSpend_where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().useMyLocation = true;
                    __WEBPACK_IMPORTED_MODULE_9__whereToSpend_where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepLocation = false;
                    __WEBPACK_IMPORTED_MODULE_9__whereToSpend_where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().currenrLocation = null;
                    __WEBPACK_IMPORTED_MODULE_9__whereToSpend_where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories = null;
                    __WEBPACK_IMPORTED_MODULE_9__whereToSpend_where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail = true;
                    this.navCtrl.parent.select(1);
                }
                return;
            }
            this.navCtrl.push(cardButtons.cardBtnLink, {
                cardNumber: this.currentMasterCard.cardNumber,
                cardType: currentCard.cardType,
                cardSelected: this.cardList[this.cardSlides.getActiveIndex()]
            });
            this.currentMasterCard = {};
            this.showMasterCardDetail = false;
        }
    };
    YourCardDetailsPage.prototype.gotoVirtalMsCard = function () {
        var _this = this;
        if (this.opemMsCardSub) {
            this.opemMsCardSub.unsubscribe();
        }
        var body = { requestType: __WEBPACK_IMPORTED_MODULE_12__whereToSpend_where2Spend_services__["c" /* VIRTUAL_MASTERCARD */] };
        this.opemMsCardSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe(function (res) {
            if (res && res.response && res.response.link) {
                var url = res.response.link;
                var browser = _this.iab.create(url, "_system", "location=true");
            }
            else {
                _this._handleError(res);
            }
        }, function (err) {
            _this._handleError(err);
        });
    };
    YourCardDetailsPage.prototype.presentPrompt = function (cardId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: this.enter_account_password_to_view_card,
            cssClass: 'l2s-alert--flat l2s-alert--default  alert-has-validation validate-password',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Submit',
                    cssClass: 'main-button validate-target validate-field-password',
                    handler: function (data) {
                        var body = {
                            "cardID": cardId,
                            "password": data.password
                        };
                        _this.updateCardToken(body);
                    }
                },
                {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.didEnter.subscribe(function () {
            _this.injectAlertInputStyle();
            _this.initAlertPasswordValidator();
        });
        alert.present();
    };
    YourCardDetailsPage.prototype.injectAlertInputStyle = function () {
        var alert = document.querySelector('.alert-has-validation');
        var passwordInput = alert && alert.querySelectorAll('.alert-input').item(0);
        if (passwordInput) {
            passwordInput.classList.add('l2s-input-md');
        }
    };
    YourCardDetailsPage.prototype.initAlertPasswordValidator = function () {
        var alert = document.querySelector('.alert-has-validation');
        var passwordInput = alert && alert.querySelectorAll('.alert-input').item(0);
        if (!passwordInput) {
            return;
        }
        var button = document.querySelector('.validate-target.validate-field-password');
        button.setAttribute('disabled', 'true');
        passwordInput.addEventListener('input', function (avent) {
            var value = (event.target).value;
            if (!button) {
                return;
            }
            if (value) {
                button.removeAttribute('disabled');
            }
            else {
                button.setAttribute('disabled', 'true');
            }
        });
    };
    YourCardDetailsPage.prototype.retrieveMessage = function (code) {
        var _this = this;
        this.http.get("cms/message/code=" + code).subscribe(function (res) {
            if (res && res.response && res.response.message) {
                var url = res.response.message;
                var browser = _this.iab.create(url, "_system", "location=true");
            }
        });
    };
    YourCardDetailsPage.prototype.retrieveContent = function (urlTitle) {
        var _this = this;
        this.http.get("cms/content/urlTitle=" + urlTitle).subscribe(function (res) {
            if (res && res.response && res.response.content) {
                var url = res.response.content;
                var browser = _this.iab.create(url, "_system", "location=true");
            }
        });
    };
    YourCardDetailsPage.prototype.getContentMSG = function () {
        var _this = this;
        var observer = {
            next: function (res) {
                if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0]) && __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response) && __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[0].response.message)) {
                    __WEBPACK_IMPORTED_MODULE_17__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.cardCsc_required = res[0].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1]) && __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response) && __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[1].response.message)) {
                    _this.suspend_card_portlet_suspend_card = res[1].response.message;
                }
                if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2]) && __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response) && __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(res[2].response.message)) {
                    _this.remove_card_confirm = res[2].response.message;
                }
            },
            error: function (error) {
            },
            complete: function () {
            }
        };
        __WEBPACK_IMPORTED_MODULE_18_rxjs_Observable__["Observable"].combineLatest(this.yourCardDetailsApiGateway.getMessageByCode("to_usnuspend"), this.yourCardDetailsApiGateway.getMessageByCode("suspend-card-portlet-suspend-card"), this.yourCardDetailsApiGateway.getMessageByCode("remove-card-confirm")).subscribe(observer);
    };
    YourCardDetailsPage.prototype._normalizeUrl = function (url) {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            if (url.startsWith('/')) {
                return 'https://www.love2shop.co.uk' + url;
            }
            return 'http://' + url;
        }
        return url;
    };
    YourCardDetailsPage.prototype.updateCardToken = function (body) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this.cardDetailsDataService.retrieveMasterCardInfo(body)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            if (!res.ok) {
                return;
            }
            var body = res.response;
            _this.masterCardInfor = body;
            var currentCard = _this.cardList[_this.currentSlide];
            _this.currentMasterCard = {
                cardID: _this.masterCardInfor.cardId || '',
                cardNumber: _this.masterCardInfor.cardNumber || '',
                cvv: _this.masterCardInfor.cvv || '',
                expiryDate: currentCard.expiryDate || '',
                nickname: _this.masterCardInfor.nickname || ''
            };
            _this.showMasterCardDetail = !_this.showMasterCardDetail;
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    YourCardDetailsPage.prototype._showError = function (message) {
        __WEBPACK_IMPORTED_MODULE_5__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    YourCardDetailsPage.prototype._handleError = function (res) {
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], YourCardDetailsPage.prototype, "cardSlides", void 0);
    YourCardDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-yourCardDetails',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\yourCardDetails\yourCardDetails.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Your Cards</ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="gotoAddCardNumber()">\n                <ion-icon name="ios-add-circle-outline"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="has-header">\n    <ion-grid *ngIf="cardList && cardList.length > 0">\n        <ion-row class="slide-row slide-card--wrapper">\n            <ion-col>\n                <ion-row>\n                    <ion-col>\n\n\n                        <ion-slides (ionSlideDidChange)="slideChanged()"\n                                    [attr.data-active-index]="currentSlide"\n                                    [attr.data-last-active]="currentSlide >= lastIndex"\n                                    effect="slide"\n                                    class="card-slides"\n                                    [initialSlide]="initialSlide">\n                            <ion-slide *ngFor="let cardItem of cardList; let cardIndex = index;">\n                                <ion-card class="card-background-page">\n                                    <ion-card-header no-padding>\n                                        <div class="card-title">\n                                            <span *ngIf="!(isEditCardTitle && canEditCardTitle(cardItem))">{{ cardItem?.nickname }}</span>\n                                            <span *ngIf="!isEditCardTitle && !canEditCardTitle(cardItem)">&nbsp;</span>\n\n                                            <input type="text" *ngIf="isEditCardTitle && canEditCardTitle(cardItem) && cardIndex === currentSlide"\n                                                   [value]="cardItem?.nickname || \'\'"\n                                                   (input)="tempNickname = $event.target.value"\n                                                   class="name-input"/>\n\n                                            <button icon-only *ngIf="!isEditCardTitle && canEditCardTitle(cardItem)  && cardIndex === currentSlide"\n                                                    (click)="openEditCardName()" class="edit-btn">\n                                                <i class="fa fa-pencil" aria-hidden="true"></i>\n                                            </button>\n                                            <button ion-button small\n                                                    *ngIf="isEditCardTitle && canEditCardTitle(cardItem)"\n                                                    (click)="updateCardNickName(cardIndex)"\n                                                    class="done-btn button-xsmall"> Done\n                                            </button>\n                                        </div>\n                                        <div class="card-subtitle"\n                                             *ngIf=\'cardItem.cardType === "FLEXECASH" || cardItem.cardType === "FLEXECODE_2.0"\'>\n                                            {{ cardItem.propositionName }}\n                                            <span>\n                        | Savings <span *ngIf="cardItem.totalSavings">{{ cardItem.totalSavings | currency:\'GBP\':\'symbol\':\'1.2-2\' }}</span>\n                       <span *ngIf="!cardItem.totalSavings">&#163;0.00</span>\n                    </span>\n                                        </div>\n                                        <div class="card-subtitle"\n                                             *ngIf=\'(cardItem.cardType === "MASTERCARD" || cardItem.cardType === "PMASTERCARD")&& cardItem.productName\'>\n                                            {{ cardItem.productName }}\n                                        </div>\n                                        <div class="card-subtitle"\n                                             *ngIf=\'(cardItem.cardType === "MASTERCARD" || cardItem.cardType === "PMASTERCARD") && !cardItem.productName\'>\n                                            &nbsp;\n                                        </div>\n\n                                    </ion-card-header>\n                                    <div class="card-img--wraper">\n                                        <img class="card-img" src="{{baseResourceUrl}}{{cardItem.cardLogoPath}}" alt="card logo">\n                                    </div>\n                                    <ion-card-content no-padding>\n                                        <ion-row>\n                                            <ion-col>\n                                                <div class="card-info" inset text-center>\n                                                    <div *ngIf=\'cardItem.cardType === "FLEXECASH" || cardItem.cardType === "FLEXECODE_2.0"\'\n                                                         class="balance  m-t-5">Balance: <span>{{ cardItem.balance | currency:\'GBP\':\'symbol\':\'1.2-2\' }}</span>\n                                                    </div>\n                                                    <div class="card-infor-detail m-t-5 m-b-5">\n                            <span *ngIf="cardItem.status" [class.text-red]="cardItem && cardItem.status === \'SUSPENDED\'"\n                                  class="text-transform-lowercase">{{ cardItem.status }}</span><span\n                                                            *ngIf="cardItem.status">&nbsp;|</span>\n                                                        <span *ngIf="cardItem.expiryDate">Expires {{ cardItem.expiryDate }} | </span>\n                                                        <div *ngIf="!cardItem.expiryDate">&nbsp;</div>\n                                                        <span *ngIf="true">Ends in {{ get4LastDigitsCardNumber(cardItem) }}</span>\n                                                    </div>\n                                                    <div class="card-infor-detail"\n                                                         *ngIf="cardItem.discountPercentageMessage">\n                                                        Save {{cardItem.discountPercentageMessage}}\n                                                    </div>\n                                                    <div class="card-infor-detail"\n                                                         *ngIf="!cardItem.discountPercentageMessage" class="row-1tem">\n                                                        &nbsp;\n                                                    </div>\n                                                </div>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-card-content>\n                                </ion-card>\n                            </ion-slide>\n                        </ion-slides>\n                    </ion-col>\n                </ion-row>\n                <ion-row text-center>\n                    <ion-col class="padding-8">\n                        <div class="bullets">\n                         <span *ngFor="let cardItem of cardList; let cardIndex = index;" [ngClass]="{\'active\' : currentSlide === cardIndex}"\n                               class="bullet"\n                               (click)="slideTo(cardIndex)"></span>\n                        </div>\n                    </ion-col>\n\n                </ion-row>\n            </ion-col>\n\n        </ion-row>\n        <ion-row padding class="card-options p-t-10">\n            <ion-col>\n                <ion-list class="m-b-0">\n                    <ng-container *ngFor="let cardBtnItem of cardButtons">\n                        <ng-container *ngIf="canPrintCardDetail(cardBtnItem); else elseTpl">\n                            <ion-item block outline (click)="hidePrintCardDetail()" detail-none\n                                      class="retrieve-card--wrapper m-b-10">\n                                <div class="mc-card-detail">\n                                    <h3 class="mc-item-title">Card Details</h3>\n                                    <div class="full-width-center">\n                                        Card Number: <strong class="openSans-bold">{{ currentMasterCard.cardNumber }}</strong>\n                                    </div>\n                                    <div class="full-width-center">\n                                        CVV: <strong class="openSans-bold">{{ currentMasterCard.cvv }}</strong>\n                                    </div>\n                                    <div class="full-width-center">\n                                        Expires: <strong class="openSans-bold">{{ currentMasterCard.expiryDate }}</strong>\n                                    </div>\n                                </div>\n                            </ion-item>\n                        </ng-container>\n                        <ng-template #elseTpl>\n                            <button block ion-button *ngIf="showButtonCardItem(cardBtnItem)"\n                                    [ngClass]="getCardButtonClass(cardBtnItem)" (click)="handleCardButton(cardBtnItem)">\n                                <span>{{ cardBtnItem.cardBtnName }}</span>\n                                <ion-icon name="ios-arrow-forward"></ion-icon>\n                            </button>\n                        </ng-template>\n                    </ng-container>\n                    <button ion-button outline block *ngIf="canShowMoreButton"\n                            ngClass="l2s-btn l2s-btn--outline btn-uppercase card-btn"\n                            (click)="showMoreCardOptions = !showMoreCardOptions">\n                        <span>More</span>\n                        <ion-icon [name]="showMoreCardOptions ? \'ios-arrow-down\' : \'ios-arrow-forward\' "></ion-icon>\n                    </button>\n                </ion-list>\n                <ion-list *ngIf="showMoreCardOptions || !canShowMoreButton">\n                    <ng-container *ngFor="let cardItemOption of cardOptions;">\n                        <button ion-button outline block class="m-b-10" [ngClass]="getCardOptionClass(cardItemOption)"\n                                (click)="handleCardOption(cardItemOption)">\n                            <span>{{ cardItemOption.cardOptName }}</span>\n                            <ion-icon name="ios-arrow-forward"></ion-icon>\n                        </button>\n                    </ng-container>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\yourCardDetails\yourCardDetails.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__cardDetailsData_service__["a" /* CardDetailsDataService */],
                __WEBPACK_IMPORTED_MODULE_12__whereToSpend_where2Spend_services__["d" /* Where2SpendServices */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_14__viewCardStatement_viewCardStatement_service__["a" /* ViewCardStatementService */],
                __WEBPACK_IMPORTED_MODULE_26__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */],
                __WEBPACK_IMPORTED_MODULE_13__refundValue_refundValue_service__["a" /* RefundValueService */],
                __WEBPACK_IMPORTED_MODULE_19__yourCardDetailsApiGateway__["a" /* YourCardDetailsApiGateway */],
                __WEBPACK_IMPORTED_MODULE_20__contentMessage_service__["a" /* ContentMessageService */],
                __WEBPACK_IMPORTED_MODULE_21__cardCategory_service__["a" /* CardCategoryService */],
                __WEBPACK_IMPORTED_MODULE_22__cardActive_service__["a" /* CardActiveService */],
                __WEBPACK_IMPORTED_MODULE_23__addCardEvent_service__["a" /* AddCardEventService */],
                __WEBPACK_IMPORTED_MODULE_24__cardInfo_service__["a" /* CardInfoService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_12__whereToSpend_where2Spend_services__["d" /* Where2SpendServices */],
            __WEBPACK_IMPORTED_MODULE_14__viewCardStatement_viewCardStatement_service__["a" /* ViewCardStatementService */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_11__framework_services_httpService_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_13__refundValue_refundValue_service__["a" /* RefundValueService */],
            __WEBPACK_IMPORTED_MODULE_2__cardDetailsData_service__["a" /* CardDetailsDataService */],
            __WEBPACK_IMPORTED_MODULE_16__shared_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_19__yourCardDetailsApiGateway__["a" /* YourCardDetailsApiGateway */],
            __WEBPACK_IMPORTED_MODULE_20__contentMessage_service__["a" /* ContentMessageService */],
            __WEBPACK_IMPORTED_MODULE_21__cardCategory_service__["a" /* CardCategoryService */],
            __WEBPACK_IMPORTED_MODULE_22__cardActive_service__["a" /* CardActiveService */],
            __WEBPACK_IMPORTED_MODULE_23__addCardEvent_service__["a" /* AddCardEventService */]])
    ], YourCardDetailsPage);
    return YourCardDetailsPage;
}());

//# sourceMappingURL=yourCardDetails.js.map

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardCategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_card_type__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cardInfo_service__ = __webpack_require__(844);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardCategoryService = (function () {
    function CardCategoryService(cardInfoService) {
        this.cardInfoService = cardInfoService;
    }
    CardCategoryService.prototype.buildCardItemBaseOnCategory = function (card) {
        var cardItem = card;
        var canNotOpenExternalLink;
        if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardItem.externalTransactionLink)) {
            canNotOpenExternalLink = false;
        }
        else {
            canNotOpenExternalLink = true;
        }
        cardItem.last4DigitCardNumber = this.cardInfoService.get4LastDigitsCardNumber(cardItem);
        if (cardItem.cardType === __WEBPACK_IMPORTED_MODULE_2__models_card_type__["a" /* CardType */].FLEXECASH) {
            cardItem = this.buildCardItem4Flexecash(cardItem);
        }
        else if (cardItem.cardType === __WEBPACK_IMPORTED_MODULE_2__models_card_type__["a" /* CardType */].FLEXECODE) {
            cardItem = this.buildCardItem4Flexecode(cardItem);
        }
        else if (cardItem.cardType === __WEBPACK_IMPORTED_MODULE_2__models_card_type__["a" /* CardType */].PMASTERCARD) {
            cardItem = this.buildCardItem4PmasterCard(cardItem);
        }
        else if (cardItem.cardType === __WEBPACK_IMPORTED_MODULE_2__models_card_type__["a" /* CardType */].MASTERCARD) {
            cardItem = this.buildCardItem4MasterCard(cardItem);
        }
        else if (cardItem.walletType === 'SUPERMARKET') {
            cardItem = this.buildCardItem4SuperMarket(cardItem, canNotOpenExternalLink);
        }
        return cardItem;
    };
    CardCategoryService.prototype.buildCardItem4Flexecash = function (cardItem) {
        var flexecash = {};
        flexecash.buttons = [
            {
                cardBtnId: "1",
                canTopUp: cardItem.canTopUp,
                cardBtnName: "Top Up",
                cardBtnLink: "AmountTopUpPage"
            },
            {
                cardBtnId: "2",
                showBenefits: cardItem.showBenefits,
                cardBtnName: "YOUR BENEFITS",
                cardBtnLink: "ExchangePage"
            },
            {
                cardBtnId: "3",
                cardBtnName: "TRANSACTIONS/BALANCE",
                cardBtnLink: "ViewCardStatementPage"
            },
            {
                cardBtnId: "4",
                cardBtnName: "WHERE TO SPEND",
                cardBtnLink: "Where2SpendInStoreMapPage"
            }
        ];
        flexecash.options = [
            {
                cardOptId: "1",
                cardOptName: "Alerts",
                cssClass: "l2s-btn l2s-btn--outline",
                cardOptLink: "viewAlertSettingsPage",
                canRegisterSms: cardItem.canRegisterSms
            },
            {
                cardOptId: "2",
                cardOptName: "REPORT LOST OR STOLEN",
                cssClass: "l2s-btn l2s-btn--outline",
                cardOptLink: ""
            },
            {
                cardOptId: "3",
                cardOptName: "TERMS & CONDITIONS",
                cssClass: "l2s-btn l2s-btn--outline",
                cardOptLink: "TANDC"
            },
            {
                cardOptId: "4",
                cardOptName: "REMOVE",
                cssClass: "l2s-btn l2s-btn--outline",
                cardOptLink: "",
            },
            {
                cardOptId: "5",
                cardOptName: "Help",
                cssClass: "l2s-btn l2s-btn--outline",
                cardOptLink: "CardFAQPage"
            }
        ];
        return flexecash;
    };
    CardCategoryService.prototype.buildCardItem4Flexecode = function (cardItem) {
        var flexecode = {};
        flexecode.buttons = [
            {
                cardBtnId: "1",
                canTopUp: cardItem.canTopUp,
                cardBtnName: "Top Up",
                cardBtnLink: "AmountTopUpPage"
            },
            {
                cardBtnId: "2",
                showBenefits: cardItem.showBenefits,
                cardBtnName: "YOUR BENEFITS",
                cardBtnLink: "ExchangePage"
            },
            {
                cardBtnId: "3",
                cardBtnName: "TRANSACTIONS/BALANCE",
                cardBtnLink: "ViewCardStatementPage"
            },
            {
                cardBtnId: "4",
                cardBtnName: "WHERE TO SPEND",
                cardBtnLink: "Where2SpendInStoreMapPage"
            }
        ];
        flexecode.options = [
            {
                cardOptId: "1",
                cardOptName: "REPORT LOST OR STOLEN",
                cardOptLink: ""
            },
            {
                cardOptId: "2",
                cardOptName: "TERMS & CONDITIONS",
                cardOptLink: "TANDC"
            },
            {
                cardOptId: "3",
                cardOptName: "REMOVE",
                cardOptLink: "",
            },
            {
                cardOptId: "4",
                cardOptName: "Help",
                cardOptLink: "CardFAQPage"
            }
        ];
        return flexecode;
    };
    CardCategoryService.prototype.buildCardItem4PmasterCard = function (cardItem) {
        var pmasterCard = {};
        pmasterCard.buttons = [
            {
                cardBtnId: "2",
                cardBtnName: "TRANSACTIONS/BALANCE",
                cardBtnLink: "ViewCardStatementPage"
            },
            {
                cardBtnId: "3",
                cardBtnName: "WHERE TO SPEND",
                cardBtnLink: "Where2SpendInStoreMapPage"
            }
        ];
        pmasterCard.options = [
            {
                cardOptId: "3",
                cardOptName: "TERMS & CONDITIONS",
                cardOptLink: "TANDC"
            },
            {
                cardOptId: "4",
                cardOptName: "Help",
                cardOptLink: "CardFAQPage"
            }
        ];
        if (cardItem.issuer !== "") {
            pmasterCard.options.unshift({
                cardOptId: "2",
                cardOptName: "Suspend",
                cssClass: "l2s-btn l2s-btn--outline",
                cardOptLink: ""
            });
        }
        return pmasterCard;
    };
    CardCategoryService.prototype.buildCardItem4MasterCard = function (cardItem) {
        var masterCard = {};
        masterCard.buttons = [
            {
                cardBtnId: "2",
                cardBtnName: "TRANSACTIONS/BALANCE",
                cardBtnLink: "ViewCardStatementPage"
            },
            {
                cardBtnId: "3",
                cardBtnName: "WHERE TO SPEND",
                cardBtnLink: "Where2SpendInStoreMapPage"
            }
        ];
        masterCard.options = [
            {
                cardOptId: "3",
                cardOptName: "TERMS & CONDITIONS",
                cardOptLink: "TANDC"
            },
            {
                cardOptId: "4",
                cardOptName: "Help",
                cardOptLink: "CardFAQPage"
            }
        ];
        if (cardItem.issuer !== "") {
            masterCard.buttons.unshift({
                cardBtnId: "1",
                issuer: "FIS",
                cssClass: "l2s-btn l2s-btn--outline",
                cardBtnName: "Retrieve Card Details",
            });
            masterCard.options.unshift({
                cardOptId: "1",
                cardOptName: "Refund value",
                cssClass: "l2s-btn l2s-btn--outline",
                cardOptLink: "RefundValuePage"
            });
        }
        return masterCard;
    };
    CardCategoryService.prototype.buildCardItem4SuperMarket = function (cardItem, canNotOpenExternalLink) {
        var superMarket = {};
        superMarket.buttons = [
            {
                cardBtnId: "1",
                canTopUp: cardItem.canTopUp,
                cardBtnName: "Top Up",
                cardBtnLink: "AmountTopUpPage"
            },
            {
                cardBtnId: "2",
                cardBtnName: "Top Up Information",
                cardBtnLink: "TopUpInfoPage"
            },
            {
                cardBtnId: "3",
                canNotOpenLink: canNotOpenExternalLink,
                cardBtnName: "TRANSACTIONS/BALANCE",
                cardBtnLink: "ViewSCardStatementPage"
            },
            {
                cardBtnId: "4",
                cardBtnName: "FAQS",
                cardSecondaryBtnLink: 'SCardFAQPage',
                cardBtnLink: "SCardFAQPage"
            }
        ];
        superMarket.options = [
            {
                cardOptId: "1",
                cardOptName: "Remove",
                cssClass: "l2s-btn l2s-btn--outline",
                cardOptLink: ""
            }
        ];
        return superMarket;
    };
    CardCategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__cardInfo_service__["a" /* CardInfoService */]])
    ], CardCategoryService);
    return CardCategoryService;
}());

//# sourceMappingURL=cardCategory.service.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardActiveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cardDetailsSharing_services__ = __webpack_require__(811);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardActiveService = (function () {
    function CardActiveService() {
    }
    CardActiveService.prototype.getCardActiveIndex = function (cardList) {
        var cardActiveIndex = 0;
        var cardInforActive = __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().getCardInforActive;
        if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive)) {
            cardActiveIndex = this.findCardActiveIndex(cardInforActive, cardList);
        }
        else {
            cardActiveIndex = this.getDefaultCardActiveIndex(cardList);
        }
        return cardActiveIndex;
    };
    CardActiveService.prototype.findCardActiveIndex = function (cardInforActive, cardList) {
        var cardActiveIndex = 0;
        if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive) && Array.isArray(cardList)) {
            var cardIndex = void 0;
            var breakCheckIndex = false;
            if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive.cardID) && cardInforActive.cardID !== '') {
                if (cardInforActive.cardID.indexOf('-') > 0) {
                    cardIndex = cardList.findIndex(function (x) { return x.cardId === cardInforActive.cardID; });
                }
                else {
                    for (var i = 0; i < cardList.length; i++) {
                        if (cardList[i].cardId && cardList[i].cardId.indexOf('-') > 0) {
                            if (cardList[i].cardId.replace(/-/g, "") === cardInforActive.cardID) {
                                cardIndex = i;
                            }
                        }
                        else if (cardList[i].cardId === cardInforActive.cardID) {
                            cardIndex = i;
                        }
                    }
                }
                breakCheckIndex = true;
            }
            if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive.cardNumber) && breakCheckIndex !== true && cardInforActive.cardNumber !== '') {
                cardIndex = cardList.findIndex(function (x) { return x.cardNumber === cardInforActive.cardNumber; });
            }
            if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardIndex) && cardIndex !== -1) {
                cardActiveIndex = cardIndex;
                var card = {
                    cardNumber: cardList[cardIndex].cardNumber,
                    cardID: cardList[cardIndex].cardId,
                };
                __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardCurrent = card;
                __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = card;
            }
            else {
                var currentIndex = 0;
                cardActiveIndex = 0;
                var card = {
                    cardNumber: cardList[currentIndex].cardNumber,
                    cardID: cardList[currentIndex].cardId,
                };
                __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardCurrent = card;
                __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = card;
            }
        }
        return cardActiveIndex;
    };
    CardActiveService.prototype.getDefaultCardActiveIndex = function (cardList) {
        var cardActiveIndex = 0;
        var currentIndex = 0;
        cardActiveIndex = 0;
        var card = {
            cardNumber: cardList[currentIndex].cardNumber,
            cardID: cardList[currentIndex].cardId,
        };
        __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardCurrent = card;
        __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = card;
        return cardActiveIndex;
    };
    CardActiveService.prototype.getActiveCardIndex4Slide2 = function (cardList) {
        var cardActiveIndex = -1;
        var cardInforActive = __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().getCardInforActive;
        if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive)) {
            if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive) && Array.isArray(cardList)) {
                var cardIndex = void 0;
                var breakCheckIndex = false;
                if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive.cardID) && cardInforActive.cardID !== '') {
                    if (cardInforActive.cardID.indexOf('-') > 0) {
                        cardIndex = cardList.findIndex(function (x) { return x.cardId === cardInforActive.cardID; });
                    }
                    else {
                        for (var i = 0; i < cardList.length; i++) {
                            if (cardList[i].cardId && cardList[i].cardId.indexOf('-') > 0) {
                                if (cardList[i].cardId.replace(/-/g, "") === cardInforActive.cardID) {
                                    cardIndex = i;
                                }
                            }
                            else if (cardList[i].cardId === cardInforActive.cardID) {
                                cardIndex = i;
                            }
                        }
                    }
                    breakCheckIndex = true;
                }
                if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardInforActive.cardNumber) && breakCheckIndex !== true && cardInforActive.cardNumber !== '') {
                    cardIndex = cardList.findIndex(function (x) { return x.cardNumber === cardInforActive.cardNumber; });
                }
                if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardIndex) && cardIndex !== -1) {
                    cardActiveIndex = cardIndex;
                }
                else {
                    var currentIndex = 0;
                    cardActiveIndex = 0;
                    var card = {
                        cardNumber: cardList[currentIndex].cardNumber,
                        cardID: cardList[currentIndex].cardId,
                    };
                    __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardCurrent = card;
                    __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = card;
                }
            }
        }
        else {
            var currentIndex = 0;
            cardActiveIndex = 0;
            var card = {
                cardNumber: cardList[currentIndex].cardNumber,
                cardID: cardList[currentIndex].cardId,
            };
            __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardCurrent = card;
            __WEBPACK_IMPORTED_MODULE_2__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardInforActive = card;
        }
        return cardActiveIndex;
    };
    CardActiveService.prototype.getActiveIndex4CardDataReload = function (cardList) {
        var cardActiveIndex = -1;
        var defaultCardId = '';
        var gotoCardDataReload = __WEBPACK_IMPORTED_MODULE_3__cardDetailsSharing_services__["a" /* CardDetailSharingDataService */].getInstance().gotoCardDataReload;
        if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(gotoCardDataReload) && Array.isArray(cardList)) {
            var cardIndex = -1;
            var breakCheckIndex = false;
            if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(gotoCardDataReload.cardId) && gotoCardDataReload.cardId !== '') {
                if (gotoCardDataReload.cardId.indexOf('-') > 0) {
                    cardIndex = cardList.findIndex(function (x) { return x.cardId === gotoCardDataReload.cardId; });
                }
                else {
                    for (var i = 0; i < cardList.length; i++) {
                        var cardId = cardList[i].cardId;
                        if (cardId) {
                            if (cardId.indexOf('-') > 0) {
                                cardId = cardId.replace(/-/g, "");
                            }
                            if (cardId === gotoCardDataReload.cardId) {
                                cardIndex = i;
                                break;
                            }
                        }
                    }
                }
                if (cardIndex !== -1)
                    breakCheckIndex = true;
            }
            if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(gotoCardDataReload.cardNumber) && breakCheckIndex !== true && gotoCardDataReload.cardNumber !== '') {
                cardIndex = cardList.findIndex(function (x) { return x.cardNumber === gotoCardDataReload.cardNumber; });
            }
            if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(cardIndex) && cardIndex !== -1) {
                cardActiveIndex = cardIndex;
                defaultCardId = gotoCardDataReload.cardId;
            }
            __WEBPACK_IMPORTED_MODULE_3__cardDetailsSharing_services__["a" /* CardDetailSharingDataService */].getInstance().gotoCardDataReload = {};
        }
        return {
            cardActiveIndex: cardActiveIndex,
            defaultCardId: defaultCardId
        };
    };
    CardActiveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CardActiveService);
    return CardActiveService;
}());

//# sourceMappingURL=cardActive.service.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardEventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCardEventService = (function () {
    function AddCardEventService(platform, navCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
    }
    AddCardEventService.prototype.raiseAddCardEvent = function () {
        var _this = this;
        var isGotoFromLogin = __WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().goToFromLogin;
        if (isGotoFromLogin === true) {
            __WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().goToFromLogin = false;
            this.navigateAddCard();
            return;
        }
        var isFromRegisterPage = __WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().CallFromRegister;
        if (isFromRegisterPage && isFromRegisterPage === true) {
            __WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().CallFromRegister = false;
            return;
        }
        if (!__WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().PauseSub) {
            __WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().PauseSub = this.platform.pause.subscribe(function (res) {
                if (__WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().NumberOfCards > 0) {
                    return;
                }
                var IsActiveYourCardDetailsPage = __WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().IsActiveYourCardDetailsPage;
                if (IsActiveYourCardDetailsPage && IsActiveYourCardDetailsPage === true) {
                    _this.navigateAddCard();
                }
            });
        }
        var goToFromRemove = __WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().goToFromRemove;
        if (goToFromRemove === true) {
            __WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().goToFromRemove = false;
            __WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().needBackToYourCard = true;
        }
        this.navCtrl.push('AddCardNumberPage');
    };
    AddCardEventService.prototype.navigateAddCard = function () {
        var isOpenedAddCardScreen = __WEBPACK_IMPORTED_MODULE_1__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().IsOpenedAddCardScreen;
        if (!isOpenedAddCardScreen) {
            this.navCtrl.push('AddCardNumberPage');
        }
    };
    AddCardEventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]])
    ], AddCardEventService);
    return AddCardEventService;
}());

//# sourceMappingURL=addCardEvent.service.js.map

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourCardDetailsEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yourCardDetailsSharingData_services__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_card_type__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__ = __webpack_require__(44);






var YourCardDetailsEvents = (function () {
    function YourCardDetailsEvents() {
        this.cardList = [];
        this.currentIndex = 0;
        if (YourCardDetailsEvents._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use YourCardDetailsEvents.getInstance() instead of new.');
        }
        YourCardDetailsEvents._instance = this;
    }
    YourCardDetailsEvents.prototype.setupYourCardDetailsEvents = function (routeManager, platform, navCtrl, yourCardDetailsApiGateway, contentMessageService, cardCategoryService, cardActiveService, addCardEventService) {
        this.routeManager = routeManager;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.yourCardDetailsApiGateway = yourCardDetailsApiGateway;
        this.contentMessageService = contentMessageService;
        this.cardCategoryService = cardCategoryService;
        this.cardActiveService = cardActiveService;
        this.addCardEventService = addCardEventService;
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_2__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
        this.imgBaseUrl = __WEBPACK_IMPORTED_MODULE_2__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
        __WEBPACK_IMPORTED_MODULE_3__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().IsActiveYourCardDetailsPage = true;
        __WEBPACK_IMPORTED_MODULE_3__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().NumberOfCards = 0;
    };
    YourCardDetailsEvents.prototype.handleUpdateCardNickNameEvent = function (cardList, cardIndex, currentSlide, tempNickname, cardDetailsDataService) {
        var promise1 = new Promise(function (resolve, reject) {
            var oldNickname = cardList[cardIndex].nickname;
            var currentCard = cardList[currentSlide];
            var cardNumber = '';
            if (currentCard.cardType === __WEBPACK_IMPORTED_MODULE_4__models_card_type__["a" /* CardType */].FLEXECODE || currentCard.cardType === __WEBPACK_IMPORTED_MODULE_4__models_card_type__["a" /* CardType */].FLEXECASH) {
                cardNumber = currentCard.cardNumber;
            }
            var modelNickName = {
                "propositionId": cardList[currentSlide].propositionId,
                "cardNumber": cardNumber,
                "nickname": tempNickname
            };
            __WEBPACK_IMPORTED_MODULE_0__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            var observer = {
                next: function (res) {
                    if (!res.ok) {
                        return;
                    }
                    cardList[cardIndex].nickname = tempNickname;
                    resolve(tempNickname);
                },
                error: function (error) {
                    reject(oldNickname);
                }
            };
            cardDetailsDataService
                .updateCardNickName(modelNickName)
                .finally(function () { return __WEBPACK_IMPORTED_MODULE_0__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator(); })
                .subscribe(observer);
        });
        return promise1;
    };
    YourCardDetailsEvents.prototype.handleViewAlertSettingsEventClick = function (currentCard, cardOpt) {
        var cardNumber = currentCard.cardNumber;
        var types = [__WEBPACK_IMPORTED_MODULE_4__models_card_type__["a" /* CardType */].PMASTERCARD, __WEBPACK_IMPORTED_MODULE_4__models_card_type__["a" /* CardType */].MASTERCARD];
        if (types.indexOf(currentCard.cardType.toUpperCase().trim()) !== -1) {
            cardNumber = currentCard.cardId;
        }
        this.navCtrl.push(cardOpt.cardOptLink, {
            cardNumber: cardNumber,
            cardId: cardOpt.cardId,
            balance: currentCard.balance
        });
    };
    YourCardDetailsEvents.prototype.yourCardDetailsEventsOnLoad = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.app-root').removeClass('not-show-tab');
        if (localStorage.getItem('no-reload-home-data')) {
            localStorage.removeItem('no-reload-home-data');
            return;
        }
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            __WEBPACK_IMPORTED_MODULE_3__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().resetState();
            this.retrieveCardsInfo();
            this.contentMessageService.getContentMessage();
        }
    };
    YourCardDetailsEvents.prototype.yourCardDetailsEventsOnLeave = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().PauseSub) {
            __WEBPACK_IMPORTED_MODULE_3__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().PauseSub.unsubscribe();
            __WEBPACK_IMPORTED_MODULE_3__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().PauseSub = undefined;
        }
    };
    YourCardDetailsEvents.prototype.retrieveCardsInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                __WEBPACK_IMPORTED_MODULE_0__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                __WEBPACK_IMPORTED_MODULE_0__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                if (__WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body) && __WEBPACK_IMPORTED_MODULE_5__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body.cards)) {
                    __WEBPACK_IMPORTED_MODULE_3__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().NumberOfCards = body.cards.length;
                    _this.retrieveCardsInfoExtractData(body);
                }
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_0__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.yourCardDetailsApiGateway
            .getListCards()
            .subscribe(observer);
    };
    YourCardDetailsEvents.prototype.retrieveCardsInfoExtractData = function (body) {
        if (body.cards.length > 0) {
            var listCardInWallet = [];
            for (var _i = 0, _a = body.cards; _i < _a.length; _i++) {
                var card = _a[_i];
                var cardItem = this.cardCategoryService.buildCardItemBaseOnCategory(card);
                listCardInWallet.push(cardItem);
            }
            this.cardList = listCardInWallet;
            this.lastIndex = this.cardList.length - 1;
            __WEBPACK_IMPORTED_MODULE_3__yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().saveCardsData(listCardInWallet);
            this.currentIndex = this.cardActiveService.getCardActiveIndex(this.cardList);
        }
        else {
            this.cardList = [];
            this.addCardEventService.raiseAddCardEvent();
        }
    };
    YourCardDetailsEvents.getInstance = function () {
        return YourCardDetailsEvents._instance;
    };
    // tslint:disable-next-line:member-ordering
    YourCardDetailsEvents._instance = new YourCardDetailsEvents();
    return YourCardDetailsEvents;
}());

//# sourceMappingURL=yourCardDetailsEvents.js.map

/***/ })

});
//# sourceMappingURL=1.js.map