webpackJsonp([73],{

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFAQPageModule", function() { return CardFAQPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cardfaq__ = __webpack_require__(943);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardFAQPageModule = (function () {
    function CardFAQPageModule() {
    }
    CardFAQPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__cardfaq__["a" /* CardFAQPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cardfaq__["a" /* CardFAQPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__cardfaq__["a" /* CardFAQPage */]]
        })
    ], CardFAQPageModule);
    return CardFAQPageModule;
}());

//# sourceMappingURL=cardfaq.module.js.map

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

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardFAQPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_card_type__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_httpService_http_service__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardFAQPage = (function () {
    function CardFAQPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
    }
    CardFAQPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.navParams.get('cardType')) {
            var code = '';
            var type = this.navParams.get('cardType');
            if (type == __WEBPACK_IMPORTED_MODULE_2__models_card_type__["a" /* CardType */].SAINSBURYS) {
                code = 'sainsburys-faqs-content';
            }
            else if (type == __WEBPACK_IMPORTED_MODULE_2__models_card_type__["a" /* CardType */].TESCO) {
                code = 'tesco-faqs-content';
            }
            __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
            this.http.get("cms/content/urlTitle=" + code).subscribe(function (res) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
                if (res && res.response && res.response.content) {
                    _this.textContent = res.response.content;
                }
            });
        }
    };
    CardFAQPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cardfaq',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\yourCardDetails\cardFaq\cardfaq.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      FAQ\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div [innerHTML]="textContent"></div>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\CardManagement\cardDetails\yourCardDetails\cardFaq\cardfaq.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__framework_services_httpService_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CardFAQPage);
    return CardFAQPage;
}());

//# sourceMappingURL=cardfaq.js.map

/***/ })

});
//# sourceMappingURL=73.js.map