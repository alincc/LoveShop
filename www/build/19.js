webpackJsonp([19],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Where2SpendInStoreMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__where2Spend_services__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_location_accuracy__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_nav_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__AccountManagement_verifyPIN_verifyPIN_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MAX_REQUEST_TIME = 5;
var Where2SpendInStoreMapPage = (function () {
    function Where2SpendInStoreMapPage(routeManager, platform, diagnostic, geolocation, locationAccuracy, geo, navCtrl, iab, alertCtrl, navParams, navController, viewCtrl, authService, navSvc, Where2SpendServices) {
        var _this = this;
        this.routeManager = routeManager;
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.geo = geo;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.navController = navController;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.navSvc = navSvc;
        this.Where2SpendServices = Where2SpendServices;
        this._markers = [];
        this._mapLoadded = false;
        this.location = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.Where2SpendInStoreMap.defaultLocation;
        this.gpsAvailable = true;
        this.keepBackToYourCard = false;
        this.lastRequestLocation = "";
        this.imageBaseUrl = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.HttpService.baseResourceUrl;
        this.resumeSub = this.platform.resume.subscribe(function () {
            setTimeout(function () {
                _this._checkGPSEnabled()
                    .filter(function (status) { return status; })
                    .flatMap(function () { return _this.checkLocationAuthorized(); })
                    .filter(function (granted) { return granted; })
                    .subscribe(function (status) {
                    if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().useMyLocation) {
                        _this.lastRequestLocation = "";
                        _this.getLocation();
                    }
                });
            }, __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.Where2SpendInStoreMap.checkGPSOnResume);
        });
        this.lastRequestLocation = "";
        __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().updateEvent$.asObservable().subscribe(function () {
            _this.ionViewDidEnter();
        });
    }
    Where2SpendInStoreMapPage.prototype.ngAfterViewInit = function () {
        this._caculateMapHeight();
    };
    Where2SpendInStoreMapPage.prototype.ionViewDidLoad = function () {
        this.loadInitialData();
        this.loadMap(__WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.Where2SpendInStoreMap.defaultLocation);
    };
    Where2SpendInStoreMapPage.prototype.gotoPreviousPage = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance()) {
            var needBackToYourCard = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail;
            if (needBackToYourCard) {
                var index = this.viewCtrl.index;
                this.navCtrl.remove(index);
                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail = false;
                this.keepBackToYourCard = false;
                this.navCtrl.parent.select(0);
            }
            else {
                this.navCtrl.pop();
            }
        }
    };
    Where2SpendInStoreMapPage.prototype.ionViewDidLeave = function () {
        if (this._locationSub) {
            this._locationSub.unsubscribe();
        }
    };
    Where2SpendInStoreMapPage.prototype.ionViewWillLeave = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance() && !this.keepBackToYourCard) {
            __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail = false;
            this.keepBackToYourCard = false;
            this.navCtrl.popToRoot();
        }
    };
    Where2SpendInStoreMapPage.prototype.ionViewWillEnter = function () {
    };
    Where2SpendInStoreMapPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.isLogin = !!localStorage.getItem('token');
        this.card = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().selectedCard;
        this.categoryAvailable = true;
        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepData) {
            __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepData = false;
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepLocation) {
            __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().keepLocation = false;
            this._updateData();
            return;
        }
        this._resetData();
        if (this._locationSub) {
            this._locationSub.unsubscribe();
        }
        this.requestTime = 0;
        __WEBPACK_IMPORTED_MODULE_14__AccountManagement_verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().byPassVerifyPin = true;
        this.checkAuthorization();
        // update map after enter
        setTimeout(function () {
            if (_this.map) {
                google.maps.event.trigger(_this.map, 'resize');
            }
        }, 1500);
        this.resumeSub = this.platform.resume.subscribe(function () {
            setTimeout(function () {
                _this._checkGPSEnabled()
                    .filter(function (status) { return status; })
                    .flatMap(function () { return _this.checkLocationAuthorized(); })
                    .filter(function (granted) { return granted; })
                    .subscribe(function (status) {
                    if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().useMyLocation) {
                        _this.getLocation();
                    }
                });
            }, __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.Where2SpendInStoreMap.checkGPSOnResume);
        });
    };
    Where2SpendInStoreMapPage.prototype.checkIsLogin = function () {
        return !!localStorage.getItem('token');
    };
    Where2SpendInStoreMapPage.prototype.onError = function (error) {
        __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus = false;
    };
    Where2SpendInStoreMapPage.prototype.checkAuthorization = function () {
        var _this = this;
        this.diagnostic.isLocationAuthorized().then(function (authorized) {
            if (!authorized) {
                _this.diagnostic.requestLocationAuthorization().then(function (status) {
                    switch (status) {
                        case _this.diagnostic.permissionStatus.GRANTED: {
                            _this.checkLocationMode();
                            break;
                        }
                        case _this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE: {
                            _this.checkLocationMode();
                            break;
                        }
                        case _this.diagnostic.permissionStatus.DENIED:
                            break;
                        case _this.diagnostic.permissionStatus.DENIED_ALWAYS: {
                            break;
                        }
                        default: {
                        }
                    }
                }).catch(function (error) { return _this.onError(error); });
            }
            else {
                _this.checkLocationMode();
            }
        }).catch(function (error) { return _this.onError(error); });
    };
    Where2SpendInStoreMapPage.prototype.checkLocationMode = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().useMyLocation = true;
        if (this.platform.is('ios')) {
            this.getLocation();
        }
        else {
            this.diagnostic.getLocationMode().then(function (locationMode) {
                if (locationMode === _this.diagnostic.locationMode.HIGH_ACCURACY) {
                    _this.getLocation();
                }
                else {
                    _this.requestLocationAccuracy();
                }
            }).catch(function (error) { return _this.onError(error); });
        }
    };
    Where2SpendInStoreMapPage.prototype.requestLocationAccuracy = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                    _this.checkLocationMode(); //recheck mode
                }).catch(function (error) { return _this.onError(error); });
            }
        }).catch(function (error) { return _this.onError(error); });
    };
    Where2SpendInStoreMapPage.prototype.getLocation = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_12__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this._locationSub = this._getGpsLocation()
            .subscribe(function (location) {
            var isNotMultipleRequest = !_this.isManyRequestAtTheSameTime();
            __WEBPACK_IMPORTED_MODULE_12__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            if (isNotMultipleRequest === true) {
                __WEBPACK_IMPORTED_MODULE_14__AccountManagement_verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().byPassVerifyPin = false;
                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().currenrLocation = location;
                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories = null;
                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus = true;
                if (document.getElementById("map") === null)
                    return;
                _this.location = location;
                _this.updateMap(_this.location);
                _this._resetData();
                _this._updateData();
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus = false;
            __WEBPACK_IMPORTED_MODULE_12__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    Where2SpendInStoreMapPage.prototype.requestLocation = function () {
        var _this = this;
        if (this.requestTime > MAX_REQUEST_TIME) {
            return;
        }
        this.requestTime++;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function (result) {
                    __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus = true;
                    _this.getLocation();
                }, function (error) {
                    __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus = false;
                    _this.gotoListPage();
                });
            }
        });
    };
    Where2SpendInStoreMapPage.prototype.onResize = function (event) {
        this._caculateMapHeight();
    };
    Where2SpendInStoreMapPage.prototype.gotoChangeCard = function () {
        __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().needBackToYOurCardDetail = false;
        this.navCtrl.parent.select(1);
    };
    Where2SpendInStoreMapPage.prototype.gotoVirtalMsCard = function () {
        var _this = this;
        this.keepBackToYourCard = true;
        if (this.opemMsCardSub) {
            this.opemMsCardSub.unsubscribe();
        }
        var body = { requestType: __WEBPACK_IMPORTED_MODULE_5__where2Spend_services__["c" /* VIRTUAL_MASTERCARD */] };
        this.opemMsCardSub = this.Where2SpendServices.retriveRetailerLocation(body).subscribe(function (res) {
            if (res && res.response && res.response.link) {
                var url = res.response.link;
                var browser = _this.iab.create(url, "_system", "location=true");
            }
        }, function (err) {
        });
    };
    Where2SpendInStoreMapPage.prototype.gotoListPage = function () {
        var _this = this;
        this.keepBackToYourCard = true;
        this.navCtrl
            .push('Where2SpendInStoreListPage')
            .then(function () {
            var index = _this.navCtrl.getActive().index - 1;
            _this.navCtrl.remove(index);
        });
    };
    Where2SpendInStoreMapPage.prototype.gotoOnlinePage = function () {
        var _this = this;
        this.keepBackToYourCard = true;
        this.navCtrl
            .push('Where2SpendOnlinePage')
            .then(function () {
            var index = _this.navCtrl.getActive().index - 1;
            _this.navCtrl.remove(index);
        });
    };
    Where2SpendInStoreMapPage.prototype.gotoCategoty = function () {
        this.keepBackToYourCard = true;
        if (this.categoryAvailable) {
            this.navCtrl.push('CategoryStoresPage');
        }
    };
    Where2SpendInStoreMapPage.prototype.loadInitialData = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories) {
            this.categories = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories;
            return;
        }
    };
    Where2SpendInStoreMapPage.prototype.updateCategory = function () {
        var _this = this;
        this.categoryAvailable = false;
        var body = this._buildCategoryRequest();
        __WEBPACK_IMPORTED_MODULE_12__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        this.retailerSub = this.Where2SpendServices.retriveRetailerLocation(body).subscribe(function (res) {
            var service = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance();
            if (res && res.response && res.response.categories) {
                if (Array.isArray(res.response.categories)) {
                    for (var i = 0; i < res.response.categories.length; i++) {
                        res.response.categories[i].selected = true;
                    }
                }
                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories = res.response.categories.sort(_this.categorySortFn.bind(_this));
                _this.categories = service.categories;
                _this.categoryAvailable = true;
            }
            else {
                _this.categoryAvailable = true;
                __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories = [];
            }
        }, function (error) {
            _this.categoryAvailable = true;
            __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories = [];
        });
    };
    Where2SpendInStoreMapPage.prototype.loadMap = function (myLoc) {
        var _this = this;
        this._mapLoadded = true;
        // create a new map by passing HTMLElement
        var mapEle = this.mapElRef.nativeElement;
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.Where2SpendInStoreMap.defaultLocation,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            mapEle.classList.add('show-map');
        });
        google.maps.event.addListener(this.map, 'idle', function () {
            if (_this.map) {
                google.maps.event.trigger(_this.map, 'resize');
            }
        });
        google.maps.event.addListener(this.map, "click", function () {
            if (_this.infowindow) {
                _this._closeInfoWindow();
            }
        });
    };
    Where2SpendInStoreMapPage.prototype.alertCurrentStore = function () {
        this.keepBackToYourCard = true;
        if (this.infowindow) {
            this.navCtrl.push('AlertStoreDetailsPage', { 'store': this.infowindow.store });
        }
    };
    Where2SpendInStoreMapPage.prototype.updateMap = function (loc) {
        loc.lat = parseFloat(loc.lat);
        loc.lng = parseFloat(loc.lng);
        this.map.setCenter(loc);
    };
    Where2SpendInStoreMapPage.prototype.updateYouAreHere = function (loc) {
        var location = {
            lat: loc.coords.latitude,
            lng: loc.coords.longitude
        };
        this.updateMap(location);
        if (this.youAreHere)
            this.youAreHere.setMap(null);
        if ((isNaN(location.lat) !== true)
            && (isNaN(location.lng) !== true)) {
            var content = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().pickupAddress;
            if ((__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().useMyLocation)
                || (__WEBPACK_IMPORTED_MODULE_15__framework_services_utilities_utilities__["a" /* Utils */].lengthGreaterThan0(content) === false)) {
                content = __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.Where2SpendInStoreMap.youAreHere;
            }
            this.youAreHere = new google.maps.InfoWindow({
                content: content
            });
            var marker = new google.maps.Marker({
                position: {
                    lat: location.lat,
                    lng: location.lng
                },
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                map: this.map
            });
            this._markers.push(marker);
            this.youAreHere.open(this.map, marker);
            __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].interval(__WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.Where2SpendInStoreMap.checkGPSOnResume).skip(1).filter(function (n) { return n % 2 === 1; }).take(2).subscribe(function () {
                var infowindowEl = document.querySelector('.gm-style-iw');
                if (infowindowEl) {
                    infowindowEl.setAttribute('class', '');
                    infowindowEl.setAttribute('style', 'top: 9px; position: absolute; left: 15px;');
                }
            });
        }
    };
    Where2SpendInStoreMapPage.prototype.isManyRequestAtTheSameTime = function () {
        var now = new Date();
        if (__WEBPACK_IMPORTED_MODULE_15__framework_services_utilities_utilities__["a" /* Utils */].isNull(this.lastRequestLocationTime)) {
            this.lastRequestLocationTime = new Date(1900, 1, 1, 1, 1, 1, 1);
        }
        var seconds = (now.getTime() - this.lastRequestLocationTime.getTime()) / 1000;
        this.lastRequestLocationTime = now;
        return seconds < 2;
    };
    Where2SpendInStoreMapPage.prototype.isTheSameWithLastRequest = function (currentRequest) {
        var isNotMultipleRequest = !this.isManyRequestAtTheSameTime();
        if (isNotMultipleRequest === true)
            return false;
        var request2String = JSON.stringify(currentRequest);
        if (request2String === this.lastRequestLocation) {
            return true;
        }
        if (__WEBPACK_IMPORTED_MODULE_15__framework_services_utilities_utilities__["a" /* Utils */].lengthGreaterThan0(this.lastRequestLocation)) {
            var lastLoc = JSON.parse(this.lastRequestLocation);
            var lastLong = parseFloat(lastLoc.longitude).toFixed(3);
            var lastLat = parseFloat(lastLoc.latitude).toFixed(3);
            var currentLong = parseFloat(currentRequest.longitude).toFixed(3);
            var currentLat = parseFloat(currentRequest.latitude).toFixed(3);
            if ((lastLong === currentLong)
                && (lastLat === currentLat)) {
                return true;
            }
        }
        this.lastRequestLocation = request2String;
        return false;
    };
    Where2SpendInStoreMapPage.prototype.updateRetailer = function () {
        var _this = this;
        var body = this._buildRetailerRequest();
        if (this.isTheSameWithLastRequest(body) === true)
            return;
        this._clearMarkers();
        __WEBPACK_IMPORTED_MODULE_12__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().showLoadingIndicator();
        var service = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance();
        this.retailerSub = this.Where2SpendServices.retriveRetailerLocation(body).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_12__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
            if (res && res.response && res.response.retailers) {
                _this.retailers = res.response.retailers;
                _this.stores = _this.retailers.reduce(function (allStores, retailer) {
                    var stores = retailer.stores;
                    for (var i = 0; i < stores.length; i++) {
                        stores[i].retailer = retailer;
                        stores[i].addressLine = _this._buildAdressLine(stores[i]);
                    }
                    return allStores.concat(stores);
                }, []);
                if (__WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories == null) {
                    _this.updateCategory();
                }
                _this.updateStoreToMap();
                _this.updateYouAreHere(_this.location);
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_12__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        }, function () {
            __WEBPACK_IMPORTED_MODULE_12__framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance().hideLoadingIndicator();
        });
    };
    Where2SpendInStoreMapPage.prototype.updateStoreToMap = function () {
        for (var _i = 0, _a = this.stores; _i < _a.length; _i++) {
            var store = _a[_i];
            var marker = this._buildMarkerFromStore(store);
            this._buildMarkerEvent(marker);
            this._markers.push(marker);
            marker.setMap(this.map);
        }
    };
    Where2SpendInStoreMapPage.prototype._caculateMapHeight = function () {
        // let mapEl: HTMLElement = document.getElementById('map');
        // if(mapEl) {
        //   mapEl.setAttribute('style', `height: ${window.innerHeight - mapEl.offsetTop}px`);
        //   if(this.map){
        //     google.maps.event.trigger(this.map, 'resize');
        //   }
        // }
    };
    Where2SpendInStoreMapPage.prototype._buildMarkerFromStore = function (store) {
        var option = {
            position: {
                lat: store.latitude,
                lng: store.longitude
            },
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
            title: '',
            label: '',
            draggable: false
        };
        var marker = new google.maps.Marker(option);
        marker.store = store;
        return marker;
    };
    Where2SpendInStoreMapPage.prototype._buildMarkerEvent = function (marker) {
        var _this = this;
        google.maps.event.addListener(marker, 'click', function () {
            _this._closeInfoWindow();
            _this._showMarkerInfoWindow(marker);
        });
    };
    Where2SpendInStoreMapPage.prototype.checkLocationAuthorized = function () {
        var _this = this;
        if (this.platform.is('ios')) {
            return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].of(true);
        }
        var promise = this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.ACCESS_FINE_LOCATION).then(function (status) {
            if (status === _this.diagnostic.permissionStatus.GRANTED ||
                status === _this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE ||
                status === _this.diagnostic.permissionStatus.NOT_REQUESTED) {
                return true;
            }
            return false;
        });
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    Where2SpendInStoreMapPage.prototype._showMarkerInfoWindow = function (marker) {
        var content = this._buildInfoWindowContent(marker);
        var infowindow = new google.maps.InfoWindow({
            content: content
        });
        infowindow.store = marker.store;
        this._buildInfoWindowEvent(infowindow);
        this.infowindow = infowindow;
        this.infowindow.open(this.map, marker);
    };
    Where2SpendInStoreMapPage.prototype._buildInfoWindowEvent = function (infowindow) {
        var _this = this;
        google.maps.event.addListener(infowindow, 'domready', function () {
            var infowindowEl = document.querySelector('.gm-style-iw');
            if (infowindowEl && infowindowEl.nextElementSibling) {
                var nextDiv = infowindowEl.nextElementSibling.setAttribute('style', 'display: none;');
                var img = infowindowEl.nextElementSibling.querySelector('img');
                if (img) {
                    img.setAttribute('style', 'display: none');
                }
            }
            if (infowindowEl && infowindowEl.parentElement) {
                infowindowEl.parentElement.addEventListener('click', function () {
                    _this.alertCurrentStore();
                }, false);
            }
        });
    };
    Where2SpendInStoreMapPage.prototype._closeInfoWindow = function () {
        if (!this.infowindow) {
            return;
        }
        this.infowindow.close();
    };
    Where2SpendInStoreMapPage.prototype._buildInfoWindowContent = function (marker) {
        var label = '';
        if (marker && marker.store && marker.store.retailer && marker.store.retailer.name) {
            label = marker.store.retailer.name;
        }
        return "<div class=\"l2s-alert-store l2s-map-infowindow-label\">\n              <span class=\"label\">\n                " + label + "\n              </span>\n              <span class=\"icon\">\n                <img class=\"icon\" src=\"assets/icon/info.png\"/>\n              </span>\n            </div>";
    };
    Where2SpendInStoreMapPage.prototype._clearMarkers = function () {
        for (var _i = 0, _a = this._markers; _i < _a.length; _i++) {
            var marker = _a[_i];
            marker.setMap(null);
        }
        this._markers = [];
    };
    Where2SpendInStoreMapPage.prototype._gotoListPage = function () {
        this.keepBackToYourCard = true;
        this.navSvc.getRootNav().push("Where2SpendInStoreListPage");
    };
    Where2SpendInStoreMapPage.prototype._showError = function (message) {
        __WEBPACK_IMPORTED_MODULE_7__framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
    };
    Where2SpendInStoreMapPage.prototype._buildAdressLine = function (store) {
        return store.addressLine1;
    };
    Where2SpendInStoreMapPage.prototype.gotoLocationStoresPage = function () {
        this.keepBackToYourCard = true;
        this.navCtrl.push('LocationStoresPage');
    };
    Where2SpendInStoreMapPage.prototype._buildCategoryRequest = function () {
        var loc = this._selectLatLng(this.location);
        var scheme = (this.card && this.card.scheme) ? this.card.scheme : undefined;
        var type = __WEBPACK_IMPORTED_MODULE_5__where2Spend_services__["a" /* CARD_INSTORE */];
        var req = {
            requestType: type,
            scheme: scheme,
            latitude: '' + loc.lat,
            longitude: '' + loc.lng
        };
        return req;
    };
    Where2SpendInStoreMapPage.prototype._buildRetailerRequest = function () {
        var loc = this._selectLatLng(this.location);
        var cat = this._buildCategoryOpt();
        var scheme = (this.card && this.card.scheme) ? this.card.scheme : undefined;
        var type = __WEBPACK_IMPORTED_MODULE_5__where2Spend_services__["a" /* CARD_INSTORE */];
        var req = {
            requestType: type,
            scheme: scheme,
            latitude: '' + loc.lat,
            longitude: '' + loc.lng,
            categories: cat
        };
        return req;
    };
    Where2SpendInStoreMapPage.prototype._buildCategoryOpt = function () {
        if (!Array.isArray(this.categories)) {
            return;
        }
        var cats = this.categories.filter(function (cat) { return cat.selected; });
        if (cats.length === 0) {
            return;
        }
        else {
            cats = cats.map(function (cat) { return ({ key: cat.key }); });
        }
        return cats;
    };
    Where2SpendInStoreMapPage.prototype._resetData = function () {
        this.stores = [];
        this._clearMarkers();
    };
    Where2SpendInStoreMapPage.prototype._updateData = function () {
        this.location = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().currenrLocation;
        this.categories = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().categories;
        this.gpsAvailable = __WEBPACK_IMPORTED_MODULE_4__where2SpendSharingData_services__["a" /* Where2SpendSharingDataService */].getInstance().gpsStatus;
        this.stores = [];
        if (this.location) {
            var loc = this._selectLatLng(this.location);
            if (this._mapLoadded) {
                this._clearMarkers();
                this.updateMap(loc);
                this.updateRetailer();
            }
            else {
                this.loadMap(loc);
            }
        }
    };
    Where2SpendInStoreMapPage.prototype._selectLatLng = function (location) {
        if (!location || !location.coords) {
            return __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.Where2SpendInStoreMap.defaultLocation;
        }
        return {
            lat: location.coords.latitude,
            lng: location.coords.longitude
        };
    };
    Where2SpendInStoreMapPage.prototype._handleGeoError = function (error) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'GPS NOT AVAILABLE',
            message: __WEBPACK_IMPORTED_MODULE_16__framework_appConfig__["a" /* AppConfig */].Configuration.Where2SpendInStoreMap.GPS_ERROR_MSG,
            cssClass: 'l2s-alert--flat l2s-alert--twobutton',
            buttons: [
                {
                    text: 'Cancel',
                    cssClass: 'cancel-button',
                    handler: function () {
                        _this._gotoListPage();
                    }
                },
                {
                    text: 'Go To Setting',
                    cssClass: 'main-button',
                    handler: function () {
                        _this.gotoListPage();
                        _this._gotoLocationSetting();
                    }
                }, {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    Where2SpendInStoreMapPage.prototype.storeSortFn = function (store1, store2) {
        return this._alphabetSortFn(store1, store2, function (store) { return store.retailer.name; });
    };
    Where2SpendInStoreMapPage.prototype.categorySortFn = function (category1, category2) {
        return this._alphabetSortFn(category1, category2, function (cat) { return cat.name; });
    };
    Where2SpendInStoreMapPage.prototype._alphabetSortFn = function (store1, store2, selector) {
        if (typeof selector !== 'function') {
            selector = function (param) { return param; };
        }
        if (selector(store1) < selector(store2))
            return -1;
        if (selector(store1) > selector(store2))
            return 1;
        return 0;
    };
    Where2SpendInStoreMapPage.prototype._checkGPSEnabled = function () {
        if (this.viewCtrl.component.name !== "Where2SpendInStoreMapPage")
            return;
        if (this._isMobilePlatform()) {
            if (this.platform.is('ios')) {
                return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].of(true);
            }
            return this._checkDeviceGPSEnabled();
        }
        return this._checkHtmlGeoEnabled();
    };
    Where2SpendInStoreMapPage.prototype._checkHtmlGeoEnabled = function () {
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].of(true);
    };
    Where2SpendInStoreMapPage.prototype._checkDeviceGPSEnabled = function () {
        var promise = this.diagnostic.isGpsLocationEnabled().then(function (state) {
            return state;
        });
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    Where2SpendInStoreMapPage.prototype._getHtmlLocation = function () {
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].create(function (observer) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (state) {
                    observer.next(state);
                }, function (error) {
                    observer.error(error);
                });
            }
            else {
                // HTML Geo API not supported
                var error = new Error("HTML Geo API not supported.");
                observer.error(error);
            }
        });
    };
    Where2SpendInStoreMapPage.prototype._isMobilePlatform = function () {
        return !!window && !!window.hasOwnProperty('cordova');
    };
    Where2SpendInStoreMapPage.prototype._getGpsLocation = function () {
        if (this._isMobilePlatform()) {
            return this._getDeviceGpsLocation();
        }
        return this._getHtmlLocation();
    };
    Where2SpendInStoreMapPage.prototype._getDeviceGpsLocation = function () {
        var promise = this.geolocation.getCurrentPosition().then(function (state) {
            return state;
        });
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    Where2SpendInStoreMapPage.prototype._gotoLocationSetting = function () {
        if (this._isMobilePlatform()) {
            if (this.platform.is('ios')) {
                this.diagnostic.switchToSettings();
            }
            else {
                this.diagnostic.switchToLocationSettings();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Where2SpendInStoreMapPage.prototype, "mapElRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
    ], Where2SpendInStoreMapPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Where2SpendInStoreMapPage.prototype, "onResize", null);
    Where2SpendInStoreMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-where2SpendInStoreMap',template:/*ion-inline-start:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\where2SpendInStoreMap\where2SpendInStoreMap.html"*/'<ion-header *ngIf="checkIsLogin()" class="store-map-logged">\n  <ion-navbar>\n    <ion-buttons left >\n      <button  ion-button icon-only (click)="gotoPreviousPage()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title >\n        WHERE TO SPEND\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-header *ngIf="!checkIsLogin()">\n  <ion-navbar>\n    <ion-title >\n      STORES\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-scroll [class.l2s-content-login]="isLogin">\n  <ion-grid>\n    <ion-row class="header-row">\n      <ion-col>\n        <ion-row *ngIf="checkIsLogin()" class="card-info">\n          <ion-item>\n            <ion-row>\n              <ion-col col-2>\n                <img [src]="imageBaseUrl + card?.cardLogoPath" alt=\'card logo\' />\n              </ion-col>\n              <ion-col class="card-content" padding col-7>\n                <div>\n                  <h2 class="card-title">{{ card?.nickname }}&nbsp;</h2>\n                  <h3>{{ card?.propositionName }}</h3>\n                </div>\n              </ion-col>\n              <ion-col class="card-action" col-3>\n                <span class="link" (click)="gotoChangeCard()">\n                  Change card\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-row>\n        <ion-row *ngIf="!checkIsLogin()" class="card-stores three-em">\n          <ion-col col-4 no-padding>\n            <button ion-button full no-margin no-padding class="active left">Love2shop<br>In-store</button>\n          </ion-col>\n          <ion-col col-4 no-padding>\n            <button ion-button full no-margin no-padding (click)="gotoOnlinePage()" class="mid">Love2shop<br>Online</button>\n          </ion-col>\n          <ion-col col-4 no-padding>\n            <button ion-button full no-margin no-padding (click)="gotoVirtalMsCard()" class="right">Virtual<br>Mastercard</button>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="checkIsLogin()" class="card-stores">\n          <ion-col col-6 no-padding>\n            <button ion-button full no-margin no-padding class="active eight">IN-STORE</button>\n          </ion-col>\n          <ion-col col-6 no-padding>\n            <button ion-button full no-margin no-padding (click)="gotoOnlinePage()" class="right">ONLINE</button>\n          </ion-col>\n        </ion-row>\n        <ion-row class="stores-category">\n          <ion-item no-padding no-margin>\n            <span item-start (click)="gotoCategoty()">\n                    <ion-icon name="md-create"></ion-icon>\n                    <p>Category</p>\n                  </span>\n            <span item-centered>\n                    <ion-buttons>\n                      <button no-margin no-padding class="btn-map active">MAP</button><button no-margin no-padding class="btn-list" (click)="gotoListPage(\'Where2SpendInStoreListPage\')">LIST</button>\n                    </ion-buttons>\n                  </span>\n            <span item-end (click)="gotoLocationStoresPage()">\n                    <ion-icon name="ios-navigate-outline"></ion-icon>\n                    <p>Location</p>\n                  </span>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class="content-row" id="map" #map>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row style="display: none;" \n  (click)="gotoPreviousPage()"\n  id="Where2SpendInStoreMapPage-back-button">\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Love2Shop\Development\Branches\L2S-New2310\src\spa\+screens\whereToSpend\where2SpendInStore\where2SpendInStoreMap\where2SpendInStoreMap.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__where2Spend_services__["d" /* Where2SpendServices */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_5__where2Spend_services__["d" /* Where2SpendServices */]])
    ], Where2SpendInStoreMapPage);
    return Where2SpendInStoreMapPage;
}());

//# sourceMappingURL=where2SpendInStoreMap.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Where2SpendInStoreMapPageModule", function() { return Where2SpendInStoreMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__where2SpendInStoreMap__ = __webpack_require__(1027);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Where2SpendInStoreMapPageModule = (function () {
    function Where2SpendInStoreMapPageModule() {
    }
    Where2SpendInStoreMapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__where2SpendInStoreMap__["a" /* Where2SpendInStoreMapPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__where2SpendInStoreMap__["a" /* Where2SpendInStoreMapPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__where2SpendInStoreMap__["a" /* Where2SpendInStoreMapPage */]]
        })
    ], Where2SpendInStoreMapPageModule);
    return Where2SpendInStoreMapPageModule;
}());

//# sourceMappingURL=where2SpendInStoreMap.module.js.map

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

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagnostic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 *
 * @usage
 * ```typescript
 * import { Diagnostic } from '@ionic-native/diagnostic';
 *
 * constructor(private diagnostic: Diagnostic) { }
 *
 * ...
 *
 * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
 * let errorCallback = (e) => console.error(e);
 *
 * this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
 *
 * this.diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);
 *
 *
 * this.diagnostic.getBluetoothState()
 *   .then((state) => {
 *     if (state == this.diagnostic.bluetoothState.POWERED_ON){
 *       // do something
 *     } else {
 *       // do something else
 *     }
 *   }).catch(e => console.error(e));
 *
 * ```
 *
 */
var Diagnostic = (function (_super) {
    __extends(Diagnostic, _super);
    function Diagnostic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.permission = {
            READ_CALENDAR: 'READ_CALENDAR',
            WRITE_CALENDAR: 'WRITE_CALENDAR',
            CAMERA: 'CAMERA',
            READ_CONTACTS: 'READ_CONTACTS',
            WRITE_CONTACTS: 'WRITE_CONTACTS',
            GET_ACCOUNTS: 'GET_ACCOUNTS',
            ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
            ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
            RECORD_AUDIO: 'RECORD_AUDIO',
            READ_PHONE_STATE: 'READ_PHONE_STATE',
            CALL_PHONE: 'CALL_PHONE',
            ADD_VOICEMAIL: 'ADD_VOICEMAIL',
            USE_SIP: 'USE_SIP',
            PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
            READ_CALL_LOG: 'READ_CALL_LOG',
            WRITE_CALL_LOG: 'WRITE_CALL_LOG',
            SEND_SMS: 'SEND_SMS',
            RECEIVE_SMS: 'RECEIVE_SMS',
            READ_SMS: 'READ_SMS',
            RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
            RECEIVE_MMS: 'RECEIVE_MMS',
            WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
            READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
            BODY_SENSORS: 'BODY_SENSORS'
        };
        _this.locationAuthorizationMode = {
            ALWAYS: 'always',
            WHEN_IN_USE: 'when_in_use'
        };
        _this.permissionGroups = {
            CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
            CAMERA: ['CAMERA'],
            CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
            LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
            MICROPHONE: ['RECORD_AUDIO'],
            PHONE: ['READ_PHONE_STATE', 'CALL_PHONE', 'ADD_VOICEMAIL', 'USE_SIP', 'PROCESS_OUTGOING_CALLS', 'READ_CALL_LOG', 'WRITE_CALL_LOG'],
            SENSORS: ['BODY_SENSORS'],
            SMS: ['SEND_SMS', 'RECEIVE_SMS', 'READ_SMS', 'RECEIVE_WAP_PUSH', 'RECEIVE_MMS'],
            STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE']
        };
        _this.locationMode = {
            HIGH_ACCURACY: 'high_accuracy',
            DEVICE_ONLY: 'device_only',
            BATTERY_SAVING: 'battery_saving',
            LOCATION_OFF: 'location_off'
        };
        _this.bluetoothState = {
            UNKNOWN: 'unknown',
            RESETTING: 'resetting',
            UNSUPPORTED: 'unsupported',
            UNAUTHORIZED: 'unauthorized',
            POWERED_OFF: 'powered_off',
            POWERED_ON: 'powered_on',
            POWERING_OFF: 'powering_off',
            POWERING_ON: 'powering_on'
        };
        return _this;
    }
    /**
     * Checks if app is able to access device location.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isLocationAvailable = function () { return; };
    /**
     * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
     * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isWifiAvailable = function () { return; };
    /**
     * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
     * application is authorized to use it.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isCameraAvailable = function (externalStorage) { return; };
    /**
     * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
     * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isBluetoothAvailable = function () { return; };
    /**
     * Displays the device location settings to allow user to enable location services/change location mode.
     */
    Diagnostic.prototype.switchToLocationSettings = function () { };
    /**
     * Displays mobile settings to allow user to enable mobile data.
     */
    Diagnostic.prototype.switchToMobileDataSettings = function () { };
    /**
     * Displays Bluetooth settings to allow user to enable Bluetooth.
     */
    Diagnostic.prototype.switchToBluetoothSettings = function () { };
    /**
     * Displays WiFi settings to allow user to enable WiFi.
     */
    Diagnostic.prototype.switchToWifiSettings = function () { };
    /**
     * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isWifiEnabled = function () { return; };
    /**
     * Enables/disables WiFi on the device.
     * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
     * @param state {boolean}
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.setWifiState = function (state) { return; };
    /**
     * Enables/disables Bluetooth on the device.
     * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
     * @param state {boolean}
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.setBluetoothState = function (state) { return; };
    // ANDROID AND IOS ONLY
    /**
     * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isLocationEnabled = function () { return; };
    /**
     * Checks if the application is authorized to use location.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isLocationAuthorized = function () { return; };
    /**
     * Returns the location authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getLocationAuthorizationStatus = function () { return; };
    /**
     * Returns the location authorization status for the application.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     *
     * @param {string} [mode] iOS only: location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestLocationAuthorization = function (mode) { return; };
    /**
     * Checks if camera hardware is present on device.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isCameraPresent = function () { return; };
    /**
     * Checks if the application is authorized to use the camera.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isCameraAuthorized = function (externalStorage) { return; };
    /**
     * Returns the camera authorization status for the application.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getCameraAuthorizationStatus = function (externalStorage) { return; };
    /**
     * Requests camera authorization for the application.
     * @param {boolean} [externalStorage] Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestCameraAuthorization = function (externalStorage) { return; };
    /**
     * Checks if the application is authorized to use the microphone.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isMicrophoneAuthorized = function () { return; };
    /**
     * Returns the microphone authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getMicrophoneAuthorizationStatus = function () { return; };
    /**
     * Requests microphone authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestMicrophoneAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use contacts (address book).
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isContactsAuthorized = function () { return; };
    /**
     * Returns the contacts authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getContactsAuthorizationStatus = function () { return; };
    /**
     * Requests contacts authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestContactsAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use the calendar.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isCalendarAuthorized = function () { return; };
    /**
     * Returns the calendar authorization status for the application.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getCalendarAuthorizationStatus = function () { return; };
    /**
     * Requests calendar authorization for the application.
     *
     * Notes for iOS:
     *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     *   - This requests permission for `READ_CALENDAR` run-time permission
     *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
     *
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestCalendarAuthorization = function () { return; };
    /**
     * Opens settings page for this app.
     * On Android, this opens the "App Info" page in the Settings app.
     * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.switchToSettings = function () { return; };
    /**
     * Returns the state of Bluetooth on the device.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getBluetoothState = function () { return; };
    /**
     * Registers a function to be called when a change in Bluetooth state occurs.
     * @param handler
     */
    Diagnostic.prototype.registerBluetoothStateChangeHandler = function (handler) { };
    /**
     * Registers a function to be called when a change in Location state occurs.
     * @param handler
     */
    Diagnostic.prototype.registerLocationStateChangeHandler = function (handler) { };
    // ANDROID ONLY
    /**
     * Checks if high-accuracy locations are available to the app from GPS hardware.
     * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isGpsLocationAvailable = function () { return; };
    /**
     * Checks if location mode is set to return high-accuracy locations from GPS hardware.
     *   Returns true if Location mode is enabled and is set to either:
     *   - Device only = GPS hardware only (high accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isGpsLocationEnabled = function () { return; };
    /**
     * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isNetworkLocationAvailable = function () { return; };
    /**
     * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to either:
     *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isNetworkLocationEnabled = function () { return; };
    /**
     * Returns the current location mode setting for the device.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getLocationMode = function () { return; };
    /**
     * Returns the current authorisation status for a given permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getPermissionAuthorizationStatus = function (permission) { return; };
    /**
     * Returns the current authorisation status for multiple permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getPermissionsAuthorizationStatus = function (permissions) { return; };
    /**
     * Requests app to be granted authorisation for a runtime permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestRuntimePermission = function (permission) { return; };
    /**
     * Requests app to be granted authorisation for multiple runtime permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestRuntimePermissions = function (permissions) { return; };
    /**
     * Indicates if the plugin is currently requesting a runtime permission via the native API.
     * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
     * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
     * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
     * @returns {boolean}
     */
    Diagnostic.prototype.isRequestingPermission = function () { return; };
    /**
     * Registers a function to be called when a runtime permission request has completed.
     * Pass in a falsey value to de-register the currently registered function.
     * @param handler {Function}
     */
    Diagnostic.prototype.registerPermissionRequestCompleteHandler = function (handler) { return; };
    /**
     * Checks if the device setting for Bluetooth is switched on.
     * This requires `BLUETOOTH` permission on Android
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isBluetoothEnabled = function () { return; };
    /**
     * Checks if the device has Bluetooth capabilities.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.hasBluetoothSupport = function () { return; };
    /**
     * Checks if the device has Bluetooth Low Energy (LE) capabilities.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.hasBluetoothLESupport = function () { return; };
    /**
     * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.hasBluetoothLEPeripheralSupport = function () { return; };
    /**
     * Checks if the application is authorized to use external storage.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isExternalStorageAuthorized = function () { return; };
    /**
     * CReturns the external storage authorization status for the application.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.getExternalStorageAuthorizationStatus = function () { return; };
    /**
     * Requests external storage authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestExternalStorageAuthorization = function () { return; };
    /**
     * Returns details of external SD card(s): absolute path, is writable, free space.
     *
     * The intention of this method is to return the location and details of removable external SD cards.
     * This differs from the "external directories" returned by cordova-plugin-file which return mount points relating to non-removable (internal) storage.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getexternalsdcarddetails)
     *
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getExternalSdCardDetails = function () { return; };
    /**
     * Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.
     */
    Diagnostic.prototype.switchToWirelessSettings = function () { };
    /**
     * Displays NFC settings to allow user to enable NFC.
     */
    Diagnostic.prototype.switchToNFCSettings = function () { };
    /**
     * Checks if NFC hardware is present on device.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isNFCPresent = function () { return; };
    /**
     * Checks if the device setting for NFC is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isNFCEnabled = function () { return; };
    /**
     * Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.isNFCAvailable = function () { return; };
    /**
     * Registers a function to be called when a change in NFC state occurs. Pass in a falsey value to de-register the currently registered function.
     * @param hander {Function} callback function to be called when NFC state changes
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.registerNFCStateChangeHandler = function (handler) { };
    // IOS ONLY
    /**
     * Checks if the application is authorized to use the Camera Roll in Photos app.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isCameraRollAuthorized = function () { return; };
    /**
     * Returns the authorization status for the application to use the Camera Roll in Photos app.
     * @returns {Promise<string>}
     */
    Diagnostic.prototype.getCameraRollAuthorizationStatus = function () { return; };
    /**
     * Requests camera roll authorization for the application.
     * Should only be called if authorization status is NOT_REQUESTED.
     * Calling it when in any other state will have no effect.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestCameraRollAuthorization = function () { return; };
    /**
     * Checks if remote (push) notifications are enabled.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isRemoteNotificationsEnabled = function () { return; };
    /**
     * Indicates if the app is registered for remote (push) notifications on the device.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isRegisteredForRemoteNotifications = function () { return; };
    /**
     * Indicates the current setting of notification types for the app in the Settings app.
     * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getRemoteNotificationTypes = function () { return; };
    /**
     * Checks if the application is authorized to use reminders.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isRemindersAuthorized = function () { return; };
    /**
     * Returns the reminders authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getRemindersAuthorizationStatus = function () { return; };
    /**
     * Requests reminders authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.requestRemindersAuthorization = function () { return; };
    /**
     * Checks if the application is authorized for background refresh.
     * @returns {Promise<boolean>}
     */
    Diagnostic.prototype.isBackgroundRefreshAuthorized = function () { return; };
    /**
     * Returns the background refresh authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.prototype.getBackgroundRefreshStatus = function () { return; };
    /**
     * Requests Bluetooth authorization for the application.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)
     * @return {Promise<any>}
     */
    Diagnostic.prototype.requestBluetoothAuthorization = function () { return; };
    /**
     * Checks if motion tracking is available on the current device.
     * @return {Promise<boolean>}
     */
    Diagnostic.prototype.isMotionAvailable = function () { return; };
    /**
     * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
     * There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
     * therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.
     *
     * @return {Promise<boolean>}
     */
    Diagnostic.prototype.isMotionRequestOutcomeAvailable = function () { return; };
    /**
     * Requests and checks motion authorization for the application: there is no way to independently request only or check only, so both must be done in one operation.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestandcheckmotionauthorization)
     *
     * @return {Promise<any>}
     */
    Diagnostic.prototype.requestAndCheckMotionAuthorization = function () { return; };
    return Diagnostic;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));
Diagnostic.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
Diagnostic.ctorParameters = function () { return []; };
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaProperty */],
    __metadata("design:type", Object)
], Diagnostic.prototype, "permissionStatus", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaProperty */],
    __metadata("design:type", Object)
], Diagnostic.prototype, "NFCState", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isLocationAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isWifiAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isBluetoothAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToLocationSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToMobileDataSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToBluetoothSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToWifiSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isWifiEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "setWifiState", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "setBluetoothState", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isLocationEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isLocationAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getLocationAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestLocationAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraPresent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getCameraAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestCameraAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isMicrophoneAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getMicrophoneAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestMicrophoneAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isContactsAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getContactsAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestContactsAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCalendarAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getCalendarAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestCalendarAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "switchToSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getBluetoothState", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerBluetoothStateChangeHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerLocationStateChangeHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isGpsLocationAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isGpsLocationEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNetworkLocationAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNetworkLocationEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getLocationMode", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getPermissionAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getPermissionsAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestRuntimePermission", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestRuntimePermissions", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Diagnostic.prototype, "isRequestingPermission", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerPermissionRequestCompleteHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isBluetoothEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "hasBluetoothSupport", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "hasBluetoothLESupport", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "hasBluetoothLEPeripheralSupport", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isExternalStorageAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getExternalStorageAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestExternalStorageAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getExternalSdCardDetails", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToWirelessSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "switchToNFCSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNFCPresent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNFCEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isNFCAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Diagnostic.prototype, "registerNFCStateChangeHandler", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isCameraRollAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getCameraRollAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestCameraRollAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isRemoteNotificationsEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isRegisteredForRemoteNotifications", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getRemoteNotificationTypes", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isRemindersAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getRemindersAuthorizationStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestRemindersAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isBackgroundRefreshAuthorized", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "getBackgroundRefreshStatus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestBluetoothAuthorization", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isMotionAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "isMotionRequestOutcomeAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Diagnostic.prototype, "requestAndCheckMotionAuthorization", null);
Diagnostic = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
        pluginName: 'Diagnostic',
        plugin: 'cordova.plugins.diagnostic',
        pluginRef: 'cordova.plugins.diagnostic',
        repo: 'https://github.com/dpa99c/cordova-diagnostic-plugin',
        platforms: ['Android', 'iOS', 'Windows']
    })
], Diagnostic);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Geolocation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name Geolocation
 * @description
 * This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.
 *
 *  This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.
 *
 * @usage
 *
 * ```typescript
 * import { Geolocation } from '@ionic-native/geolocation';
 *
 * ...
 *
 * constructor(private geolocation: Geolocation) {}
 *
 * ...
 *
 * this.geolocation.getCurrentPosition().then((resp) => {
 *  // resp.coords.latitude
 *  // resp.coords.longitude
 * }).catch((error) => {
 *   console.log('Error getting location', error);
 * });
 *
 * let watch = this.geolocation.watchPosition();
 * watch.subscribe((data) => {
 *  // data can be a set of coordinates, or an error (if an error occurred).
 *  // data.coords.latitude
 *  // data.coords.longitude
 * });
 * ```
 * @interfaces
 * Coordinates
 * Geoposition
 * PositionError
 * GeolocationOptions
 */
var Geolocation = (function (_super) {
    __extends(Geolocation, _super);
    function Geolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the device's current position.
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Promise<Geoposition>} Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
     */
    Geolocation.prototype.getCurrentPosition = function (options) { return; };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.prototype.watchPosition = function (options) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    return Geolocation;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));
Geolocation.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
Geolocation.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Geolocation.prototype, "getCurrentPosition", null);
Geolocation = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
        pluginName: 'Geolocation',
        plugin: 'cordova-plugin-geolocation',
        pluginRef: 'navigator.geolocation',
        repo: 'https://github.com/apache/cordova-plugin-geolocation',
        install: 'ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"',
        installVariables: ['GEOLOCATION_USAGE_DESCRIPTION'],
        platforms: ['Amazon Fire OS', 'Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], Geolocation);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationAccuracy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Location Accuracy
 * @description
 * This Cordova/Phonegap plugin for Android and iOS to request enabling/changing of Location Services by triggering a native dialog from within the app, avoiding the need for the user to leave your app to change location settings manually.
 *
 * @usage
 * ```typescript
 * import { LocationAccuracy } from '@ionic-native/location-accuracy';
 *
 * constructor(private locationAccuracy: LocationAccuracy) { }
 *
 * ...
 *
 * this.locationAccuracy.canRequest().then((canRequest: boolean) => {
 *
 *   if(canRequest) {
 *     // the accuracy option will be ignored by iOS
 *     this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
 *       () => console.log('Request successful'),
 *       error => console.log('Error requesting location permissions', error)
 *     );
 *   }
 *
 * });
 *
 * ```
 */
var LocationAccuracy = (function (_super) {
    __extends(LocationAccuracy, _super);
    function LocationAccuracy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_NO_POWER = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_LOW_POWER = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_SETTINGS_SATISFIED = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_USER_AGREED = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_ALREADY_REQUESTING = -1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACTION = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACCURACY = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_EXCEPTION = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_CANNOT_CHANGE_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_USER_DISAGREED = 4;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
        return _this;
    }
    /**
     * Indicates if you can request accurate location
     * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
     */
    LocationAccuracy.prototype.canRequest = function () { return; };
    /**
     * Indicates if a request is currently in progress
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
     */
    LocationAccuracy.prototype.isRequesting = function () { return; };
    /**
     * Requests accurate location
     * @param accuracy {number} Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
     */
    LocationAccuracy.prototype.request = function (accuracy) { return; };
    return LocationAccuracy;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));
LocationAccuracy.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
LocationAccuracy.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationAccuracy.prototype, "canRequest", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationAccuracy.prototype, "isRequesting", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocationAccuracy.prototype, "request", null);
LocationAccuracy = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
        pluginName: 'LocationAccuracy',
        plugin: 'cordova-plugin-request-location-accuracy',
        pluginRef: 'cordova.plugins.locationAccuracy',
        repo: 'https://github.com/dpa99c/cordova-plugin-request-location-accuracy',
        platforms: ['Android', 'iOS']
    })
], LocationAccuracy);

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=19.js.map