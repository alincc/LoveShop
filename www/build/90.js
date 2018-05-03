webpackJsonp([90],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterCardInfoPageModule", function() { return MasterCardInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masterCardInfo__ = __webpack_require__(921);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MasterCardInfoPageModule = (function () {
    function MasterCardInfoPageModule() {
    }
    MasterCardInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__masterCardInfo__["a" /* MasterCardInfoPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__masterCardInfo__["a" /* MasterCardInfoPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__masterCardInfo__["a" /* MasterCardInfoPage */]]
        })
    ], MasterCardInfoPageModule);
    return MasterCardInfoPageModule;
}());

//# sourceMappingURL=masterCardInfo.module.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterCardInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MasterCardInfoPage = (function () {
    function MasterCardInfoPage(routeManager, navCtrl, navParams) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MasterCardInfoPage.prototype.ionViewWillEnter = function () {
        this.baseResourceUrl = __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
        this.urlKeyMastercard = __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.masterCardInfo.urlSelectMasterCard;
        this.urlKeyAnywhereMastercard = __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.masterCardInfo.urlSelectAnyWhereMasterCard;
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('card')) {
                this.card = this.navParams.get('card');
                this.content = this._validContentUrl(this.card.longDescription);
            }
            if (this.navParams.get('products')) {
                this.products = this.navParams.get('products');
            }
            if (this.navParams.get('masterCardTypeSelected')) {
                this.masterCardTypeSelected = this.navParams.get('masterCardTypeSelected');
            }
            if (this.navParams.get('primaryCard')) {
                this.primaryCard = this.navParams.get('primaryCard');
            }
            if (this.navParams.get('idx')) {
                this.indexOfTypeCard = this.navParams.get('idx');
            }
        }
    };
    MasterCardInfoPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    MasterCardInfoPage.prototype.ionViewDidLeave = function () {
    };
    MasterCardInfoPage.prototype._validContentUrl = function (content) {
        if (content) {
            content = content.replace(/src="\//g, 'src="https://www.love2shop.co.uk/')
                .replace(/href="\//g, 'href="https://www.love2shop.co.uk/');
        }
        return content;
    };
    MasterCardInfoPage.prototype.showCardExchange = function () {
        var _this = this;
        var product = (this.card && Array.isArray(this.card.products)) ? this.card.products[0] : this.card;
        this.extracMsgFee(this.card);
        var indexCardInStack = this.navCtrl.getActive().index;
        this.navCtrl.push("MasterCardExchangePage", {
            targetCard: product,
            masterCardTypeSelected: this.masterCardTypeSelected,
            primaryCard: this.primaryCard,
            feeMsg: this.feeMsg
        }).then(function () {
            _this.navCtrl.remove(indexCardInStack, 1, { animate: false, duration: 0 }).then(function () {
            });
        });
    };
    MasterCardInfoPage.prototype.extracMsgFee = function (contentMsg) {
        this.feeMsg = '';
        var indexString = contentMsg.shortDescription.indexOf('Please Note:');
        if (indexString > -1) {
            this.feeMsg = contentMsg.shortDescription.substr(indexString).replace(/<[^>]*>/g, "").replace("Please Note:", "").trim();
        }
    };
    MasterCardInfoPage.prototype.gotoFAQ = function () {
        this.navCtrl.push('FAQPage');
    };
    MasterCardInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-masterCardInfo',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\benefits\exchange\masterCardInfo\masterCardInfo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title start>\n      {{card?.name}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="card-img">\n    <img  class="card-select m-b-15" src="{{baseResourceUrl}}{{card?.mediumImages[0]}}"/>\n    <div class="additional">\n      <p class="circle" *ngIf="card?.urlKey === this.urlKeyMastercard">\n        <span>No</span> additional charge\n      </p>\n      <p class="circle" *ngIf="card?.urlKey === this.urlKeyAnywhereMastercard">\n        <span>10%</span> charge applies\n      </p>\n    </div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="desc" [innerHTML]="content">\n          masterCardInfo\n        </div>\n        <div class="align-center">\n            <button class="button button-default button-md">\n              <span class="button-inner">\n                <span *ngIf="card?.urlKey === this.urlKeyMastercard" (click)="showCardExchange()">Choose The Select Mastercard</span>\n                <span *ngIf="card?.urlKey === this.urlKeyAnywhereMastercard" (click)="showCardExchange()">Choose The Anywhere Mastercard</span>\n              </span>\n            </button>\n          </div>\n          <p class="decs-title" *ngIf="card?.urlKey === this.urlKeyMastercard">The Select Mastercard</p>\n          <p class="decs-title" *ngIf="card?.urlKey === this.urlKeyAnywhereMastercard">The anywhere Mastercard</p>\n          <p class="align-center p-b-10" *ngIf="card?.urlKey === this.urlKeyMastercard">\n            Spend online at selected retailer websites. Exchange some or all of your Love2shop flexecash Card value (a virtual Mastercard will be added to your account automatically)\n          </p>\n        <p class="align-center p-b-10"  *ngIf="card?.urlKey === this.urlKeyAnywhereMastercard">\n          Use this option anywhere online that accepts Mastercard as a payment option.* Exchange some or all of your Love2shop flexecash Card value (a virtual Mastercard will be added to your account automatically).\n\n        </p>\n        <p class="text-center decs-note">\n          <span>Please note:</span>A 10% fee will be applied at payment</p>\n          <div>\n            <p class="benefit__heading uppercase">How it Works</p>\n          </div>\n          <ul class="function-list">\n            <li>\n              <div class="img">\n                <div class="wrapper">\n                  <img src="https://www.love2shop.co.uk/COMMON/l2s/virtual-mastercard/icon-transfer.svg">\n                </div>\n              </div>\n              <div class="list-decs">\n                <p class="list-title">\n                  Tranfer Funds\n                </p>\n                <p>\n                  Existing Love2shop -flexecash funds can be easily transfered to a Select Mastercard. Be sure to add any delivery charge etc to your transfer amount.\n                </p>\n              </div>\n            </li>\n            <li>\n                <div class="img">\n                  <div class="wrapper">\n                    <img src="https://www.love2shop.co.uk/COMMON/l2s/virtual-mastercard/icon-desktop.svg">\n                </div>\n                </div>\n                <div class="list-decs">\n                  <p class="list-title">\n                    Receive payment credentials\n                  </p>\n                  <p>\n                    Once purchased your Select Mastercard details will be shown in your account including 16 digit card number, three digit sercurity number and expiry date.\n                  </p>\n                </div>\n              </li>\n              <li>\n                  <div class="img">\n                    <div class="wrapper">\n                      <img src="https://www.love2shop.co.uk/COMMON/l2s/virtual-mastercard/icon-master-card.svg">\n                  </div>\n                  </div>\n                  <div class="list-decs">\n                    <p class="list-title">\n                      Shop Online\n                    </p>\n                    <p>\n                      The logos of some of participating websites are shown above. For the full list please click here.\n                    </p>\n                  </div>\n                </li>\n          </ul>\n          <div class="decs-label">\n            More info\n          </div>\n          <p>\n            If you can\'t remember the card details, simply log back into your account...\n          </p>\n          <div class="decs-label">\n            Key points\n          </div>\n          <ul class="point-list">\n            <li>Instantly available for use online</li>\n            <li>Minimum load is 29 and maximum is 400</li>\n            <li>This virtual card cannot topped up</li>\n          </ul>\n          <div class="decs-label">\n            Virtual Masstercard Contact Details\n          </div>\n          <p>Card Services: <a href="tel:0330 123 2112">0330 123 2112</a></p>\n          <p>Email: cardservices@love2shop.co.uk</p>\n          <div class="decs-label">\n              Frequently asked questions\n          </div>\n          <p>Still got a question? <a href="#" (click)="gotoFAQ()">Click here</a> for your FAQ</p>\n          <div class="align-center footer-button">\n            <button class="button button-default button-md">\n              <span class="button-inner">\n                         <span *ngIf="card?.urlKey === this.urlKeyMastercard" (click)="showCardExchange()">Choose The Select Mastercard</span>\n                <span *ngIf="card?.urlKey === this.urlKeyAnywhereMastercard" (click)="showCardExchange()">Choose The Anywhere Mastercard</span>\n              </span>\n            </button>\n          </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n          \n<ion-row style="display: none;" \n(click)="navCtrl.pop()"\nid="MasterCardInfoPage-back-button">\n</ion-row>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\benefits\exchange\masterCardInfo\masterCardInfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MasterCardInfoPage);
    return MasterCardInfoPage;
}());

//# sourceMappingURL=masterCardInfo.js.map

/***/ })

});
//# sourceMappingURL=90.js.map