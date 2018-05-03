webpackJsonp([60],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryStoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__where2SpendSharingData_services__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_nav_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryStoresPage = (function () {
    function CategoryStoresPage(navCtrl, navSvc) {
        this.navCtrl = navCtrl;
        this.navSvc = navSvc;
        this.valid = false;
    }
    CategoryStoresPage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_2__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepLocation = true;
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.app-root').addClass('not-show-tab');
        var categories = __WEBPACK_IMPORTED_MODULE_2__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories;
        this.categories = JSON.parse(JSON.stringify(categories));
        this.runValidate();
    };
    CategoryStoresPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.app-root').removeClass('not-show-tab');
    };
    CategoryStoresPage.prototype.ionViewDidLeave = function () {
    };
    CategoryStoresPage.prototype.toggleCategory = function (index, event) {
        event.stopPropagation();
        var cat = this.categories[index];
        if (!cat) {
            return;
        }
        cat.selected = !cat.selected;
        this.runValidate();
    };
    CategoryStoresPage.prototype.validate = function () {
        if (Array.isArray(this.categories)) {
            for (var i = 0; i < this.categories.length; i++) {
                if (this.categories[i].selected) {
                    return true;
                }
            }
        }
        return false;
    };
    CategoryStoresPage.prototype.runValidate = function () {
        this.valid = this.validate();
    };
    CategoryStoresPage.prototype.applySelect = function () {
        __WEBPACK_IMPORTED_MODULE_2__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories = this.categories;
    };
    CategoryStoresPage.prototype.filterByCategory = function () {
        if (!this.validate()) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_2__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepLocation = true;
        this.applySelect();
        this.navCtrl.pop().then(function () {
        });
    };
    CategoryStoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categoryStores',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\categoryStores\categoryStores.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Filters\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="content-wrapper">\n    <ion-row class="main-content">\n      <ion-list>\n        <ion-item [ngClass]="{\'active\': cat.selected}" *ngFor="let cat of categories; let i = index" (click)="toggleCategory(i, $event)">\n          <ion-label item-center>{{ cat.displayName }}</ion-label>\n          <ion-icon item-end *ngIf="cat.selected" name="ios-checkmark"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n  </ion-grid>\n  <ion-row class="footer-wrapper">\n    <ion-col>\n        <button [disabled]="!valid" ion-button full large (click)="filterByCategory()">Apply</button>    \n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row style="display: none;" \n  (click)="navCtrl.pop()"\n  id="CategoryStoresPage-back-button">\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\categoryStores\categoryStores.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__shared_nav_service__["a" /* NavService */]])
    ], CategoryStoresPage);
    return CategoryStoresPage;
}());

//# sourceMappingURL=categoryStores.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryStoresPageModule", function() { return CategoryStoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoryStores__ = __webpack_require__(1019);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoryStoresPageModule = (function () {
    function CategoryStoresPageModule() {
    }
    CategoryStoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__categoryStores__["a" /* CategoryStoresPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categoryStores__["a" /* CategoryStoresPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__categoryStores__["a" /* CategoryStoresPage */]]
        })
    ], CategoryStoresPageModule);
    return CategoryStoresPageModule;
}());

//# sourceMappingURL=categoryStores.module.js.map

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

/***/ })

});
//# sourceMappingURL=60.js.map