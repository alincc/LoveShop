webpackJsonp([72],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePaymentMethodsPageModule", function() { return ChangePaymentMethodsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changePaymentMethods__ = __webpack_require__(949);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePaymentMethodsPageModule = (function () {
    function ChangePaymentMethodsPageModule() {
    }
    ChangePaymentMethodsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__changePaymentMethods__["a" /* ChangePaymentMethodsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changePaymentMethods__["a" /* ChangePaymentMethodsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__changePaymentMethods__["a" /* ChangePaymentMethodsPage */]]
        })
    ], ChangePaymentMethodsPageModule);
    return ChangePaymentMethodsPageModule;
}());

//# sourceMappingURL=changePaymentMethods.module.js.map

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePaymentMethodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymentMethod_services__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChangePaymentMethodsPage = (function () {
    function ChangePaymentMethodsPage(paymentMethodService, navCtrl, alertCtrl) {
        this.paymentMethodService = paymentMethodService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.listCards = [];
        this.loadingCompleted = false;
        this.account_management_no_cards_available = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_management_no_cards_available;
        this.account_management_set_default_card = __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_management_set_default_card;
    }
    ChangePaymentMethodsPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery___default()('.app-root').addClass('not-show-tab');
        this.resetData();
        this.getPaymentMethods();
    };
    ChangePaymentMethodsPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    ChangePaymentMethodsPage.prototype.resetData = function () {
        this.loadingCompleted = false;
    };
    ChangePaymentMethodsPage.prototype.getPaymentMethods = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this._getListPaymentMethod = this.paymentMethodService.getListPaymentMethod()
            .subscribe(function (res) {
            if (!res.ok) {
                return;
            }
            var body = res.response;
            if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body)) {
                _this.listCards = body.tokenizedCards;
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            _this.loadingCompleted = true;
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    ChangePaymentMethodsPage.prototype.removeCardExecute = function (index) {
        var _this = this;
        var body = {
            'token': this.listCards[index].token,
            'expiryDate': this.listCards[index].expiryDate,
        };
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this._removeCard = this.paymentMethodService.removeTokenizedCard(body)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            if (!res.ok) {
                return;
            }
            var body = res.response;
            if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body)) {
                _this.listCards = body.tokenizedCards;
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    ChangePaymentMethodsPage.prototype.removeCard = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: __WEBPACK_IMPORTED_MODULE_6__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.confirm_removal,
            cssClass: 'l2s-alert--flat l2s-alert--twobutton',
            buttons: [
                {
                    text: 'Yes',
                    cssClass: 'main-button',
                    handler: function () {
                        _this.removeCardExecute(index);
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
    ChangePaymentMethodsPage.prototype.updateCardToken = function (index) {
        var _this = this;
        var body = {
            'token': this.listCards[index].token,
            'expiryDate': this.listCards[index].expiryDate,
        };
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this.loadingCompleted = false;
        this._updateDefaut = this.paymentMethodService.updateTokenizedCard(body)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            if (!res.ok) {
                return;
            }
            var body = res.response;
            if (__WEBPACK_IMPORTED_MODULE_4__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(body)) {
                _this.listCards = body.tokenizedCards;
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            _this.loadingCompleted = true;
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    ChangePaymentMethodsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changePaymentMethods',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\CardManagement\changePaymentMethods\changePaymentMethods.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Payment Methods\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content">\n  <ion-grid padding>\n    <ion-row>\n      <ion-col>\n        <ion-row *ngIf="loadingCompleted && (!listCards || (listCards && listCards.length < 1))" padding>\n          <p class="text-14">{{account_management_no_cards_available}}</p>\n        </ion-row>\n        <ion-row *ngIf="listCards?.length > 0" padding>\n          <p class="text-14">{{account_management_set_default_card}}</p>\n        </ion-row>\n        <ion-list  *ngIf="listCards?.length > 0" class="list-card--wrapper">\n          <ion-item *ngFor="let cardItem of listCards; let index = index">\n            <ion-card [ngClass]="{\'card-active\' : (cardItem?.isDefault || cardItem?.default)}">\n              <ion-card-content>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <ion-row >\n                        <ion-col class="card-details">\n                          <div class="img--wrapper">\n                            <div>\n                              <img src="assets/images/{{cardItem?.cardScheme}}.png" height="31" width="49"/>\n                              <!--<ion-icon name="card" item-start></ion-icon>-->\n                            </div>\n                            <div class="m-t-12 text-12" (click)="removeCard(index)">\n                              <ion-icon><i class="fa fa-trash" aria-hidden="true"></i></ion-icon>\n                              <span>Remove</span>\n                            </div>\n                          </div>\n                          <div class="main--content">\n                            <p class="openSans-bold text-14 text-uppercase">{{cardItem?.cardScheme}}</p>\n                            <p>.... .... .... <span>{{cardItem?.panLast4}}</span></p>\n                            <p class="text-12 text-uppercase">Exp {{cardItem?.expiryDate}}</p>\n                          </div>\n                          <div class="select-card-default">\n                            <input type="checkbox"  (click)="updateCardToken(index)" name="paymentMethod" [checked]="cardItem?.isDefault || cardItem?.default" class="m-b-2">\n                            <label (click)="updateCardToken(index)"></label>\n                            <p *ngIf="cardItem?.isDefault || cardItem?.default">Default</p>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="ChangePaymentMethodsPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\CardManagement\changePaymentMethods\changePaymentMethods.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__paymentMethod_services__["a" /* PaymentMethodService */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__paymentMethod_services__["a" /* PaymentMethodService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChangePaymentMethodsPage);
    return ChangePaymentMethodsPage;
}());

//# sourceMappingURL=changePaymentMethods.js.map

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentMethodService; });
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


var PaymentMethodService = (function () {
    function PaymentMethodService(http) {
        this.http = http;
    }
    PaymentMethodService.prototype.getListPaymentMethod = function () {
        return this.http.get("account/payment-methods");
    };
    PaymentMethodService.prototype.removeTokenizedCard = function (body) {
        return this.http.delete("account/payment-methods", body);
    };
    PaymentMethodService.prototype.updateTokenizedCard = function (body) {
        return this.http.put("account/payment-methods", body);
    };
    PaymentMethodService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], PaymentMethodService);
    return PaymentMethodService;
}());

//# sourceMappingURL=paymentMethod.services.js.map

/***/ })

});
//# sourceMappingURL=72.js.map