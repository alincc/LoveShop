webpackJsonp([82],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryInformationPageModule", function() { return DeliveryInformationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deliveryInformation__ = __webpack_require__(884);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeliveryInformationPageModule = (function () {
    function DeliveryInformationPageModule() {
    }
    DeliveryInformationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__deliveryInformation__["a" /* DeliveryInformationPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__deliveryInformation__["a" /* DeliveryInformationPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__deliveryInformation__["a" /* DeliveryInformationPage */]]
        })
    ], DeliveryInformationPageModule);
    return DeliveryInformationPageModule;
}());

//# sourceMappingURL=deliveryInformation.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deliveryInformation_service__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeliveryInformationPage = (function () {
    function DeliveryInformationPage(routerManager, navCtrl, deliveryInfomationService) {
        this.routerManager = routerManager;
        this.navCtrl = navCtrl;
        this.deliveryInfomationService = deliveryInfomationService;
    }
    DeliveryInformationPage.prototype.ionViewWillEnter = function () {
        if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            this.getDeliveryInformationContent();
        }
    };
    DeliveryInformationPage.prototype.getDeliveryInformationContent = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var observer = {
            next: function (res) {
                if (!res.ok) {
                    return;
                }
                var body = res.response;
                _this.deliveryInformationContent = body.content;
            },
            error: function (error) {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_3__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            }
        };
        this.deliveryInfomationService
            .getDeliveryInfomationService()
            .subscribe(observer);
    };
    DeliveryInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deliveryInformation',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AppInforManagement\deliveryInformation\deliveryInformation.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Delivery Information\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="text-14" [innerHTML]="deliveryInformationContent">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n          \n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="DeliveryInformationPage-back-button">\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AppInforManagement\deliveryInformation\deliveryInformation.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__deliveryInformation_service__["a" /* DeliveryInfomationService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__deliveryInformation_service__["a" /* DeliveryInfomationService */]])
    ], DeliveryInformationPage);
    return DeliveryInformationPage;
}());

//# sourceMappingURL=deliveryInformation.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryInfomationService; });
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


var DeliveryInfomationService = (function () {
    function DeliveryInfomationService(http) {
        this.http = http;
    }
    DeliveryInfomationService.prototype.getDeliveryInfomationService = function () {
        return this.http.get("cms/content/urlTitle=footer-delivery-information");
    };
    DeliveryInfomationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__framework_services_httpService_http_service__["a" /* HttpService */]])
    ], DeliveryInfomationService);
    return DeliveryInfomationService;
}());

//# sourceMappingURL=deliveryInformation.service.js.map

/***/ })

});
//# sourceMappingURL=82.js.map