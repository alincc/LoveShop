webpackJsonp([99],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep6PageModule", function() { return RegisterStep6PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerStep6__ = __webpack_require__(870);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterStep6PageModule = (function () {
    function RegisterStep6PageModule() {
    }
    RegisterStep6PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__registerStep6__["a" /* RegisterStep6Page */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registerStep6__["a" /* RegisterStep6Page */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__registerStep6__["a" /* RegisterStep6Page */]]
        })
    ], RegisterStep6PageModule);
    return RegisterStep6PageModule;
}());

//# sourceMappingURL=registerStep6.module.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterStep6Page; });
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




var RegisterStep6Page = (function () {
    function RegisterStep6Page(routeManager, navCtrl) {
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.use_of_fingerprint = __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.use_of_fingerprint;
        this.reset_fingerprint = __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.reset_fingerprint;
        this.create_print_ID = __WEBPACK_IMPORTED_MODULE_3__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.create_print_ID;
    }
    RegisterStep6Page.prototype.submitRegisterData = function () {
        this.navCtrl.push("RegisterStep7Page");
    };
    RegisterStep6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registerStep6',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep6\registerStep6.html"*/'<!--<ion-header>-->\n  <!--<ion-navbar>-->\n    <!--<ion-title></ion-title>-->\n  <!--</ion-navbar>-->\n<!--</ion-header>-->\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row>\n      <ion-col text-center>\n        <img class="l2s-logo" src="assets/images/l2s-logo.png"/>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <p text-center class="p-b-50 p-t-50 text-14">{{create_print_ID}}</p>\n              <p text-center class="p-b-35 text-14">{{reset_fingerprint}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-center>\n              <img src="assets/images/finger-thumb.png" width="80" height="110">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-center>\n              <p class="text-14">\n                Scan complete!\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <p text-center class="text-14">\n              {{use_of_fingerprint}}\n            </p>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>    \n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n      <button ion-button large block (click)="submitRegisterData()">Next</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AccountManagement\register\registerStep6\registerStep6.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], RegisterStep6Page);
    return RegisterStep6Page;
}());

//# sourceMappingURL=registerStep6.js.map

/***/ })

});
//# sourceMappingURL=99.js.map