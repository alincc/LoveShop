webpackJsonp([98],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep7PageModule", function() { return RegisterStep7PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerStep7__ = __webpack_require__(871);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterStep7PageModule = (function () {
    function RegisterStep7PageModule() {
    }
    RegisterStep7PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__registerStep7__["a" /* RegisterStep7Page */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registerStep7__["a" /* RegisterStep7Page */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__registerStep7__["a" /* RegisterStep7Page */]]
        })
    ], RegisterStep7PageModule);
    return RegisterStep7PageModule;
}());

//# sourceMappingURL=registerStep7.module.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterStep7Page; });
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




var RegisterStep7Page = (function () {
    function RegisterStep7Page(routeManager, navCtrl) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.registration_successful = __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.registration_successful;
        this.registered_successful = __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.registered_successful;
        this.next_to_add_card = __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.next_to_add_card;
    }
    RegisterStep7Page.prototype.redirectToAddCard = function () {
        this.navCtrl.setRoot('TabsPage');
    };
    RegisterStep7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registerStep7',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep7\registerStep7.html"*/'<!--<ion-header>-->\n  <!--<ion-navbar>-->\n    <!--<ion-title></ion-title>-->\n  <!--</ion-navbar>-->\n<!--</ion-header>-->\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <ion-col text-center class="p-t-20">\n        <img class="l2s-logo" src="assets/images/l2s-logo.png" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="p-b-30 p-t-30">\n      <ion-col>\n        <p text-center class="text-14">{{registration_successful}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p text-center class="text-14 p-b-15">{{registered_successful}}</p>\n        <p text-center class="text-14">{{next_to_add_card}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button large (click)="redirectToAddCard()">Next</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep7\registerStep7.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], RegisterStep7Page);
    return RegisterStep7Page;
}());

//# sourceMappingURL=registerStep7.js.map

/***/ })

});
//# sourceMappingURL=98.js.map