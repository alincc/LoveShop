webpackJsonp([91],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidaysPageModule", function() { return HolidaysPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__holidays__ = __webpack_require__(918);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HolidaysPageModule = (function () {
    function HolidaysPageModule() {
    }
    HolidaysPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__holidays__["a" /* HolidaysPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__holidays__["a" /* HolidaysPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__holidays__["a" /* HolidaysPage */]]
        })
    ], HolidaysPageModule);
    return HolidaysPageModule;
}());

//# sourceMappingURL=holidays.module.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidaysPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HolidaysPage = (function () {
    function HolidaysPage(navCtrl, routeManager, navParams) {
        this.navCtrl = navCtrl;
        this.routeManager = routeManager;
        this.navParams = navParams;
    }
    HolidaysPage.prototype.ionViewWillEnter = function () {
        this.phoneNumber = '';
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            __WEBPACK_IMPORTED_MODULE_3_jquery___default()('.app-root').addClass('not-show-tab');
            if (this.navParams.get('benefit')) {
                var benefit = this.navParams.get('benefit');
                benefit = this._selectBenefitImage(benefit);
                benefit = this._validContentImg(benefit);
                this.benefit = benefit;
            }
        }
    };
    HolidaysPage.prototype._selectBenefitImage = function (benefit) {
        if (benefit && Array.isArray(benefit.images)) {
            benefit.image = benefit.images[0];
        }
        return benefit;
    };
    HolidaysPage.prototype._validContentImg = function (benefit) {
        if (benefit && benefit.longDescription) {
            benefit.longDescription = benefit.longDescription.replace(/src="\//g, 'src="https://www.love2shop.co.uk/');
        }
        return benefit;
    };
    HolidaysPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-holidays',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\benefits\exchange\holidays\holidays.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Holidays\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="holidays" padding>\n  <ion-row>\n    <div class="holidays__desc" [innerHTML]="benefit?.longDescription"></div>\n  </ion-row>\n  <ion-item-divider></ion-item-divider>\n\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="HolidaysPage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\benefits\exchange\holidays\holidays.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], HolidaysPage);
    return HolidaysPage;
}());

//# sourceMappingURL=holidays.js.map

/***/ })

});
//# sourceMappingURL=91.js.map