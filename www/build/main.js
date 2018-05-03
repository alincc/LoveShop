webpackJsonp([103],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retry__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_delay__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mobileDeviceService_mobileDeviceService_service__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DEFAULT_ERROR_MSG = __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.HttpService.DEFAULT_ERROR_MSG;
var API_Authentication = __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.HttpService.API_Authentication;
var NO_CONNECTION_MSG = __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.HttpService.NO_CONNECTION_MSG;
var TOKEN_INVALID = __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.HttpService.TOKEN_INVALID;
var INVALID_PAYMENT_MSG = __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.HttpService.INVALID_PAYMENT_MSG;
var INVALID_PAYMENT_FEE_MSG = __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.HttpService.INVALID_PAYMENT_FEE_MSG;
var INVALID_TOPUP_2192 = __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.HttpService.INVALID_TOPUP_2192;
var HttpService = (function () {
    function HttpService(authenticationService, http) {
        this.authenticationService = authenticationService;
        this.http = http;
        this.callCount = 0;
        this.receiveTimeout = 120000;
        this.callCount = 0;
    }
    HttpService.prototype.extractData = function (res, rawError) {
        if (rawError === void 0) { rawError = false; }
        if (res instanceof Error) {
            return;
        }
        if (res.status <= 4) {
            __WEBPACK_IMPORTED_MODULE_1__toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(NO_CONNECTION_MSG);
            return;
        }
        else if (res.status === 401) {
            var errors = void 0;
            try {
                errors = res.json().errors;
            }
            catch (e) {
            }
            var message = '';
            if (__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].lengthGreaterThan0(errors)) {
                if (errors[0].code === "token.invalid" || errors[0].code === "park-api.token.expired") {
                    this.authenticationService.invalidToken$.next({
                        message: TOKEN_INVALID
                    });
                }
                message = errors[0].message;
            }
            else {
                message = DEFAULT_ERROR_MSG;
            }
            __WEBPACK_IMPORTED_MODULE_1__toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message, __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.HttpService.time2ShowToast);
            throw errors;
        }
        else if (res.status !== 200) {
            var message = '';
            var result_1 = {};
            try {
                result_1 = res.json();
            }
            catch (e) {
            }
            if (__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].isNotNull(result_1) && __WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].isNotNull(result_1.errors) && result_1.errors.length > 0) {
                if (__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].isNotNull(result_1.errors[0].code) && rawError && (result_1.errors[0].code === INVALID_PAYMENT_FEE_MSG || result_1.errors[0].code === INVALID_TOPUP_2192)) {
                    throw result_1.errors[0];
                }
                else if (__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].isNotNull(result_1.errors[0].code) && result_1.errors[0].code === INVALID_PAYMENT_MSG) {
                    var error = new Error(message);
                    error['data'] = result_1;
                    throw error;
                }
                else if (__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].isNotNull(result_1.errors[0].message)) {
                    message = result_1.errors[0].message;
                    if (__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].isNotNull(message)) {
                        var elem = document.createElement('div');
                        elem.innerHTML = message;
                        message = __WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].getTextContent(elem);
                    }
                }
                else {
                    var code = result_1.errors[0].code;
                    if (__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].isNotNull(code)) {
                        this.getMessage('cms/message/code=' + code);
                    }
                    else {
                        message = DEFAULT_ERROR_MSG;
                    }
                }
            }
            else {
                message = DEFAULT_ERROR_MSG;
            }
            __WEBPACK_IMPORTED_MODULE_1__toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
            if (__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].isNotNull(result_1.response)) {
                var error = new Error(message);
                error['data'] = result_1;
                throw error;
            }
            throw new Error(message);
        }
        var result;
        if (res.ok === true) {
            result = {};
            try {
                result = res.json();
            }
            catch (e) {
            }
        }
        else {
            result = __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].of(res);
        }
        result.ok = res.ok;
        result.status = res.status;
        return result;
    };
    HttpService.prototype.getMessage = function (api) {
        return this.http
            .get(this.getFullApiUrl(api), this.headerOptionsGetContent())
            .subscribe(function (res) {
            var message = DEFAULT_ERROR_MSG;
            try {
                var body = res.json();
                if (body && body.response && body.response.message) {
                    message = body.response.message;
                }
                else if (body && Array.isArray(body.errors) && body.errors.length > 0) {
                    message = body.errors[0];
                }
                else {
                    message = DEFAULT_ERROR_MSG;
                }
            }
            catch (error) {
                message = DEFAULT_ERROR_MSG;
            }
            __WEBPACK_IMPORTED_MODULE_1__toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(message);
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_1__toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance().showToastMessage(DEFAULT_ERROR_MSG);
        });
    };
    HttpService.prototype.headerOptionsGetContent = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'API_Authentication': API_Authentication,
            'Device_Name': __WEBPACK_IMPORTED_MODULE_12__mobileDeviceService_mobileDeviceService_service__["a" /* MobileDeviceService */].getInstance().getDeviceType(),
        });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    // Fetch data by get method from backend API service
    // tslint:disable-next-line:member-ordering
    HttpService.prototype.get = function (api, rawError) {
        var _this = this;
        if (rawError === void 0) { rawError = false; }
        return this.http
            .get(this.getFullApiUrl(api), this.headerOptions())
            .timeout(this.receiveTimeout)
            .map(function (response) {
            return _this.extractData(response);
        })
            .catch(function (err) {
            return _this.extractData(err, rawError);
        });
    };
    // post method
    HttpService.prototype.post = function (api, body, rawError) {
        var _this = this;
        if (rawError === void 0) { rawError = false; }
        // Stringify payload
        var bodyString = JSON.stringify(body);
        // ...using post request
        return this.http
            .post(this.getFullApiUrl(api), bodyString, this.headerOptions())
            .timeout(this.receiveTimeout)
            .map(this.extractData.bind(this))
            .catch(function (error) {
            return _this.extractData(error, rawError);
        });
    };
    HttpService.prototype.postInBackground = function (api, body) {
        // Stringify payload
        var bodyString = JSON.stringify(body);
        // ...using post request
        return this.http
            .post(this.getFullApiUrl(api), bodyString, this.headerOptions())
            .timeout(this.receiveTimeout);
    };
    HttpService.prototype.postwithoutAuthorWithoutRequestType = function (api, body) {
        var _this = this;
        // Stringify payload
        var bodyString = JSON.stringify(body);
        // ...using post request
        return this.http
            .post(this.getFullApiUrl(api), bodyString, this.headerOptionsNoAuthorization())
            .timeout(this.receiveTimeout)
            .map(this.extractData.bind(this))
            .catch(function (error) {
            return _this.extractData(error);
        });
    };
    HttpService.prototype.postwithoutAuthorization = function (api, body) {
        var _this = this;
        // Stringify payload
        var bodyString = JSON.stringify(body);
        // ...using post request
        return this.http
            .post(this.getFullApiUrl(api), bodyString, this.headerOptionsNoAuthorizationBalance())
            .timeout(this.receiveTimeout)
            .map(this.extractData.bind(this))
            .catch(function (error) {
            return _this.extractData(error);
        });
    };
    // put method
    HttpService.prototype.put = function (api, body, rawError) {
        var _this = this;
        if (rawError === void 0) { rawError = false; }
        var bodyString = JSON.stringify(body);
        return this.http
            .put(this.getFullApiUrl(api), bodyString, this.headerOptions())
            .timeout(this.receiveTimeout)
            .map(this.extractData.bind(this))
            .catch(function (error) {
            return _this.extractData(error, rawError);
        });
    };
    // Delete method
    HttpService.prototype.delete = function (api, body, rawError) {
        var _this = this;
        if (rawError === void 0) { rawError = false; }
        var headerOptions = this.headerOptions();
        headerOptions.body = body;
        return this.http
            .delete(this.getFullApiUrl(api), headerOptions)
            .timeout(this.receiveTimeout)
            .map(this.extractData.bind(this))
            .catch(function (error) {
            return _this.extractData(error, rawError);
        });
    };
    HttpService.prototype.deleteWithoutBody = function (api) {
        var _this = this;
        var headerOptions = this.headerOptions();
        return this.http
            .delete(this.getFullApiUrl(api), headerOptions)
            .timeout(this.receiveTimeout)
            .map(this.extractData.bind(this))
            .catch(function (error) {
            return _this.extractData(error);
        });
    };
    // private instance variable to hold base url
    HttpService.prototype.getFullApiUrl = function (api) {
        return api.indexOf("http") === -1
            ? __WEBPACK_IMPORTED_MODULE_3__appConfig__["a" /* AppConfig */].Configuration.HttpService.baseApiUrl + api
            : api;
    };
    HttpService.prototype.headerOptions = function () {
        // ... Set content type to JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'API_Authentication': API_Authentication,
            'Authorization': this.authenticationService.getToken(),
            'Device_Name': __WEBPACK_IMPORTED_MODULE_12__mobileDeviceService_mobileDeviceService_service__["a" /* MobileDeviceService */].getInstance().getDeviceType()
        });
        // Create a request option
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    HttpService.prototype.headerOptionsNoAuthorizationBalance = function () {
        // ... Set content type to JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'API_Authentication': API_Authentication,
            'Device_Name': __WEBPACK_IMPORTED_MODULE_12__mobileDeviceService_mobileDeviceService_service__["a" /* MobileDeviceService */].getInstance().getDeviceType(),
            'Request_Type': 'BALANCE'
        });
        // Create a request option
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    HttpService.prototype.headerOptionsNoAuthorization = function () {
        // ... Set content type to JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'API_Authentication': API_Authentication,
            'Device_Name': __WEBPACK_IMPORTED_MODULE_12__mobileDeviceService_mobileDeviceService_service__["a" /* MobileDeviceService */].getInstance().getDeviceType(),
        });
        // Create a request option
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    // Fetch data by get method from backend API service
    // tslint:disable-next-line:member-ordering
    HttpService.prototype.getExternal = function (api) {
        var _this = this;
        return this.http
            .get(api)
            .timeout(this.receiveTimeout)
            .map(function (response) {
            return _this.extractData(response);
        })
            .catch(function (err) {
            return _this.extractData(err);
        });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastMessageService; });
var ToastMessageService = (function () {
    function ToastMessageService() {
        if (ToastMessageService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use ToastMessageService.getInstance() instead of new.');
        }
        this.lastShow = new Date().getTime();
        ToastMessageService._instance = this;
    }
    ToastMessageService.prototype.showToastMessage = function (message, duration) {
        if (duration === void 0) { duration = 5000; }
        if (this.canShowToastMessage(message)) {
            // update time of last show
            this.lastShow = new Date().getTime();
            this.lastMessage = message;
            var toast = this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'top',
                dismissOnPageChange: false
            });
            toast.onDidDismiss(function () {
            });
            toast.present();
        }
    };
    // tslint:disable-next-line:no-unused-variable
    ToastMessageService.prototype.canShowToastMessage = function (message) {
        if (message !== this.lastMessage) {
            return true;
        }
        var now = new Date().getTime();
        var timeDiff = now - this.lastShow;
        var diffSeconds = Math.ceil(timeDiff / 1000);
        // greater than 5 seconds
        // isGreaterThan5Seconds = diffSeconds > 5
        // return true else return false
        return diffSeconds > 5;
    };
    ToastMessageService.prototype.initializeToastMessage = function (toastCtrl) {
        if ((this.toastCtrl === undefined)
            || (this.toastCtrl === null)) {
            this.toastCtrl = toastCtrl;
        }
    };
    ToastMessageService.getInstance = function () {
        return ToastMessageService._instance;
    };
    // tslint:disable-next-line:member-ordering
    ToastMessageService._instance = new ToastMessageService();
    return ToastMessageService;
}());

//# sourceMappingURL=toastMessage.service.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileDeviceService; });
var MobileDeviceService = (function () {
    function MobileDeviceService() {
        this.deviceType = '';
        if (MobileDeviceService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use MobileDeviceService.getInstance() instead of new.');
        }
        MobileDeviceService._instance = this;
    }
    MobileDeviceService.prototype.saveDeviceType = function (platform) {
        this.devicePlatform = platform;
        if (this.devicePlatform.is('iphone')) {
            this.deviceType = 'Running on an iPhone device';
            return;
        }
        if (this.devicePlatform.is('ipad')) {
            this.deviceType = 'Running on an iPad device';
            return;
        }
        if (this.devicePlatform.is('android')) {
            this.deviceType = 'Running on an Android device';
            return;
        }
        this.deviceType = 'Running on an Unknown device';
    };
    MobileDeviceService.prototype.isAndroidPlatformEqualsTrue = function () {
        if (this.devicePlatform.is('android')) {
            return true;
        }
        return false;
    };
    MobileDeviceService.prototype.isIosPlatformEqualsTrue = function () {
        if (this.devicePlatform.is('iphone')) {
            return true;
        }
        if (this.devicePlatform.is('ipad')) {
            return true;
        }
        return false;
    };
    MobileDeviceService.prototype.getDeviceType = function () {
        return this.deviceType;
    };
    MobileDeviceService.getInstance = function () {
        return MobileDeviceService._instance;
    };
    // tslint:disable-next-line:member-ordering
    MobileDeviceService._instance = new MobileDeviceService();
    return MobileDeviceService;
}());

//# sourceMappingURL=mobileDeviceService.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinCodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_utilities__ = __webpack_require__(44);

var PinCodeService = (function () {
    function PinCodeService() {
        if (PinCodeService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use PinCodeService.getInstance() instead of new.');
        }
        PinCodeService._instance = this;
    }
    PinCodeService.prototype.savePinCode = function (email, value) {
        window.localStorage.setItem(email.toLowerCase(), JSON.stringify(value));
    };
    PinCodeService.prototype.getPinCode = function (email) {
        return JSON.parse(window.localStorage.getItem(email.toLowerCase()) || null);
    };
    PinCodeService.prototype.needSetupPinCode = function (loginEmail) {
        var pinCode = this.getPinCode(loginEmail);
        if (__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].isNotNull(pinCode)) {
            if (__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* Utils */].isNotNull(pinCode.pin1)) {
                return false;
            }
        }
        return true;
    };
    PinCodeService.getInstance = function () {
        return PinCodeService._instance;
    };
    // tslint:disable-next-line:member-ordering
    PinCodeService._instance = new PinCodeService();
    return PinCodeService;
}());

//# sourceMappingURL=pinCode.service.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../spa/+screens/AccountManagement/accountDetails/accountDetails.module": [
		704,
		86
	],
	"../spa/+screens/AccountManagement/changeEmail/changeEmail.module": [
		705,
		18
	],
	"../spa/+screens/AccountManagement/changePIN/changePIN.module": [
		707,
		25
	],
	"../spa/+screens/AccountManagement/changePassword/changePassword.module": [
		706,
		42
	],
	"../spa/+screens/AccountManagement/changeTouchID/changeTouchID.module": [
		708,
		102
	],
	"../spa/+screens/AccountManagement/editAccount/editAccount.module": [
		709,
		13
	],
	"../spa/+screens/AccountManagement/forgotPassword/forgotPassword.module": [
		710,
		24
	],
	"../spa/+screens/AccountManagement/forgotPassword/forgotPasswordSuccess/forgotPasswordSuccess.module": [
		711,
		101
	],
	"../spa/+screens/AccountManagement/register/registerStep1/registerStep1.module": [
		712,
		4
	],
	"../spa/+screens/AccountManagement/register/registerStep2/registerStep2.module": [
		713,
		3
	],
	"../spa/+screens/AccountManagement/register/registerStep3/registerStep3.module": [
		714,
		12
	],
	"../spa/+screens/AccountManagement/register/registerStep4/registerStep4.module": [
		715,
		41
	],
	"../spa/+screens/AccountManagement/register/registerStep5/registerStep5.module": [
		716,
		100
	],
	"../spa/+screens/AccountManagement/register/registerStep6/registerStep6.module": [
		717,
		99
	],
	"../spa/+screens/AccountManagement/register/registerStep7/registerStep7.module": [
		718,
		98
	],
	"../spa/+screens/AccountManagement/setupPIN/setupPIN.module": [
		719,
		58
	],
	"../spa/+screens/AccountManagement/touchIDSettingFirstTime/touchIDSettingFirstTime.module": [
		720,
		97
	],
	"../spa/+screens/AccountManagement/updatePIN/updatePIN.module": [
		721,
		57
	],
	"../spa/+screens/AccountManagement/verifyPIN/verifyPIN.module": [
		321
	],
	"../spa/+screens/AccountManagement/verifyTouchId/verifyTouchId.module": [
		322
	],
	"../spa/+screens/AppInforManagement/about/about.module": [
		722,
		85
	],
	"../spa/+screens/AppInforManagement/contact/contact.module": [
		723,
		96
	],
	"../spa/+screens/AppInforManagement/contactUs/contactUs.module": [
		724,
		84
	],
	"../spa/+screens/AppInforManagement/cookie/cookie.module": [
		725,
		83
	],
	"../spa/+screens/AppInforManagement/deliveryInformation/deliveryInformation.module": [
		726,
		82
	],
	"../spa/+screens/AppInforManagement/eMoneyTrust/eMoneyTrust.module": [
		727,
		81
	],
	"../spa/+screens/AppInforManagement/faq/faq.module": [
		728,
		80
	],
	"../spa/+screens/AppInforManagement/moreInformation/moreInformation.module": [
		729,
		79
	],
	"../spa/+screens/AppInforManagement/privacyPolicy/privacyPolicy.module": [
		730,
		78
	],
	"../spa/+screens/AppInforManagement/termsConditions/termsConditions.module": [
		731,
		77
	],
	"../spa/+screens/CardManagement/addMyCard/addMyCard.module": [
		756,
		23
	],
	"../spa/+screens/CardManagement/addcard/addCardNumber/addCardNumber.module": [
		748,
		5
	],
	"../spa/+screens/CardManagement/addcard/addCardPhysicalMasterCard/addCardPhysicalMasterCard.module": [
		749,
		11
	],
	"../spa/+screens/CardManagement/addcard/addCardSainsburys/addCardSainsburys.module": [
		750,
		17
	],
	"../spa/+screens/CardManagement/addcard/addCardTesco/addCardTesco.module": [
		751,
		15
	],
	"../spa/+screens/CardManagement/addcard/addFlexCash/addFlexCash.module": [
		752,
		10
	],
	"../spa/+screens/CardManagement/addcard/addFlexECode/addFlexECode.module": [
		753,
		16
	],
	"../spa/+screens/CardManagement/addcard/addPinToCard/addPinToCard.module": [
		754,
		9
	],
	"../spa/+screens/CardManagement/addcard/addPinToCode/addPinToCode.module": [
		755,
		8
	],
	"../spa/+screens/CardManagement/cardDetails/amountTopUp/amountTopUp.module": [
		757,
		40
	],
	"../spa/+screens/CardManagement/cardDetails/makeTopUp/makeTopUp.module": [
		758,
		22
	],
	"../spa/+screens/CardManagement/cardDetails/makeTopUp3DS/makeTopUp3DS.module": [
		759,
		55
	],
	"../spa/+screens/CardManagement/cardDetails/makeTopUpSuccessfull/makeTopUpSuccessfull.module": [
		760,
		39
	],
	"../spa/+screens/CardManagement/cardDetails/viewAlertSettings/viewAlertSettings.module": [
		761,
		76
	],
	"../spa/+screens/CardManagement/cardDetails/yourCardDetails/TopUpInformationPage/topupInfo.module": [
		763,
		74
	],
	"../spa/+screens/CardManagement/cardDetails/yourCardDetails/cardFaq/cardfaq.module": [
		762,
		73
	],
	"../spa/+screens/CardManagement/cardDetails/yourCardDetails/yourCardDetails.module": [
		764,
		1
	],
	"../spa/+screens/CardManagement/changePaymentMethods/changePaymentMethods.module": [
		765,
		72
	],
	"../spa/+screens/CardManagement/checkBalance/checkBalanceStep1/checkBalanceStep1.module": [
		766,
		27
	],
	"../spa/+screens/CardManagement/checkBalance/checkBalanceStep2/checkBalanceStep2.module": [
		767,
		14
	],
	"../spa/+screens/CardManagement/checkBalance/checkBalanceStep3/checkBalanceStep3.module": [
		768,
		38
	],
	"../spa/+screens/CardManagement/refundValue/refundValue.module": [
		769,
		56
	],
	"../spa/+screens/CardManagement/returnRefund/returnRefund.module": [
		770,
		71
	],
	"../spa/+screens/CardManagement/viewCardStatement/viewCardStatement.module": [
		771,
		0
	],
	"../spa/+screens/Others/more/more.module": [
		794,
		95
	],
	"../spa/+screens/Others/settings/settings.module": [
		795,
		70
	],
	"../spa/+screens/Others/tabs/tabs.module": [
		796,
		94
	],
	"../spa/+screens/benefits/buy/businessEnquiries/businessEnquiries.module": [
		732,
		93
	],
	"../spa/+screens/benefits/buy/buy.module": [
		733,
		54
	],
	"../spa/+screens/benefits/buy/buyDiscountedGiftCard/buyADiscountedGiftCard/buyADiscountedGiftCard.module": [
		734,
		52
	],
	"../spa/+screens/benefits/buy/buyDiscountedGiftCard/buyDiscountedGiftCard.module": [
		735,
		51
	],
	"../spa/+screens/benefits/buy/buyDiscountedSupperGiftCard/buyDiscountedSupperGiftCard.module": [
		736,
		50
	],
	"../spa/+screens/benefits/buy/buySpecSavers/buySpecSavers.module": [
		737,
		92
	],
	"../spa/+screens/benefits/exchange/exchang4SpendOnline/exchang4SpendOnline.module": [
		738,
		69
	],
	"../spa/+screens/benefits/exchange/exchang4SpendOnline/masterCardExchange/masterCardExchange.module": [
		739,
		68
	],
	"../spa/+screens/benefits/exchange/exchange.module": [
		740,
		53
	],
	"../spa/+screens/benefits/exchange/exchange4DiningECode/exchange4DiningECode.module": [
		741,
		36
	],
	"../spa/+screens/benefits/exchange/exchange4ECode/exchange4ECode.module": [
		742,
		35
	],
	"../spa/+screens/benefits/exchange/exchange4OtherGiftCards/exchange4OtherGiftCards.module": [
		743,
		34
	],
	"../spa/+screens/benefits/exchange/exchange4OtherGiftCards/giftCardExchange/giftCardExchange.module": [
		744,
		33
	],
	"../spa/+screens/benefits/exchange/exchangeEcodeAllBarOneEcode/exchangeEcodeAllBarOneEcode.module": [
		746,
		32
	],
	"../spa/+screens/benefits/exchange/holidays/holidays.module": [
		745,
		91
	],
	"../spa/+screens/benefits/exchange/masterCardInfo/masterCardInfo.module": [
		747,
		90
	],
	"../spa/+screens/myShoppingBasket/myShoppingBasket.module": [
		772,
		49
	],
	"../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCard3DS/orderDiscountGiftCard3DS.module": [
		773,
		48
	],
	"../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardAddPersonalMessage/orderDiscountGiftCardAddPersonalMessage.module": [
		774,
		67
	],
	"../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardChooseCardDesign/orderDiscountGiftCardChooseCardDesign.module": [
		775,
		66
	],
	"../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardComplete/orderDiscountGiftCardComplete.module": [
		776,
		65
	],
	"../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardDeliveryOption/orderDiscountGiftCardDeliveryOption.module": [
		777,
		47
	],
	"../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardExtraGiftWallets/orderDiscountGiftCardExtraGiftWallets.module": [
		778,
		46
	],
	"../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardPaymentCard/orderDiscountGiftCardPaymentCard.module": [
		779,
		21
	],
	"../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardReviewYourOrder/orderDiscountGiftCardReviewYourOrder.module": [
		780,
		45
	],
	"../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardUpdateDeliveryOption/orderDiscountGiftCardUpdateDeliveryOption.module": [
		781,
		6
	],
	"../spa/+screens/orderManagement/orderECode/orderECodeStep1/orderECodeStep1.module": [
		782,
		31
	],
	"../spa/+screens/orderManagement/orderECode/orderECodeStep2/orderECodeStep2.module": [
		783,
		89
	],
	"../spa/+screens/orderManagement/orderExchangeGiftCard/orderExchangeGiftCardStep1/orderExchangeGiftCardStep1.module": [
		784,
		64
	],
	"../spa/+screens/orderManagement/orderExchangeGiftCard/orderExchangeGiftCardStep2/orderExchangeGiftCardStep2.module": [
		785,
		30
	],
	"../spa/+screens/orderManagement/orderExchangeGiftCard/orderExchangeGiftCardStep3/orderExchangeGiftCardStep3.module": [
		786,
		88
	],
	"../spa/+screens/orderManagement/orderMasterCardExchange/orderMasterCardExchangeStep1/orderMasterCardExchangeStep1.module": [
		787,
		29
	],
	"../spa/+screens/orderManagement/orderMasterCardExchange/orderMasterCardExchangeStep2/orderMasterCardExchangeStep2.module": [
		788,
		75
	],
	"../spa/+screens/orderManagement/orderMixBasket/orderMixBasketStep1/orderMixBasketStep1.module": [
		789,
		62
	],
	"../spa/+screens/orderManagement/orderMixBasket/orderMixBasketStep2/orderMixBasketStep2.module": [
		790,
		28
	],
	"../spa/+screens/orderManagement/orderMixBasket/orderMixBasketStep3/orderMixBasketStep3.module": [
		791,
		87
	],
	"../spa/+screens/orderManagement/orderSupermarket/orderSupermarketStep1/orderSupermarketStep1.module": [
		792,
		44
	],
	"../spa/+screens/orderManagement/orderSupermarket/orderSupermarketStep2/orderSupermarketStep2.module": [
		793,
		63
	],
	"../spa/+screens/welcome/welcome.module": [
		797,
		20
	],
	"../spa/+screens/whereToSpend/where2SpendInStore/alertStoreDetails/alertStoreDetails.module": [
		798,
		61
	],
	"../spa/+screens/whereToSpend/where2SpendInStore/categoryStores/categoryStores.module": [
		799,
		60
	],
	"../spa/+screens/whereToSpend/where2SpendInStore/changeCard/changeCard.module": [
		800,
		37
	],
	"../spa/+screens/whereToSpend/where2SpendInStore/changeCard/openPdf/openPdf.module": [
		801,
		59
	],
	"../spa/+screens/whereToSpend/where2SpendInStore/locationStores/locationStores.module": [
		802,
		2
	],
	"../spa/+screens/whereToSpend/where2SpendInStore/where2SpendInStoreList/where2SpendInStoreList.module": [
		803,
		26
	],
	"../spa/+screens/whereToSpend/where2SpendInStore/where2SpendInStoreMap/where2SpendInStoreMap.module": [
		805,
		19
	],
	"../spa/+screens/whereToSpend/where2SpendOnline/where2SpendOnline.module": [
		804,
		43
	],
	"../spa/framework/login/login.module": [
		806,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 319;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPINPageModule", function() { return VerifyPINPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verifyPIN__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_ptt_pin_ptt_pin_module__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VerifyPINPageModule = (function () {
    function VerifyPINPageModule() {
    }
    VerifyPINPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__verifyPIN__["a" /* VerifyPINPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verifyPIN__["a" /* VerifyPINPage */]),
                __WEBPACK_IMPORTED_MODULE_3__libs_ptt_pin_ptt_pin_module__["a" /* PttPinModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__verifyPIN__["a" /* VerifyPINPage */]]
        })
    ], VerifyPINPageModule);
    return VerifyPINPageModule;
}());

//# sourceMappingURL=verifyPIN.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyTouchIdPageModule", function() { return VerifyTouchIdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verifyTouchId__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifyTouchIdPageModule = (function () {
    function VerifyTouchIdPageModule() {
    }
    VerifyTouchIdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__verifyTouchId__["a" /* VerifyTouchIdPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verifyTouchId__["a" /* VerifyTouchIdPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__verifyTouchId__["a" /* VerifyTouchIdPage */]]
        })
    ], VerifyTouchIdPageModule);
    return VerifyTouchIdPageModule;
}());

//# sourceMappingURL=verifyTouchId.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyTouchIdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__verifyPIN_verifyPIN_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__verifyPIN_verifyPIN__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var VerifyTouchIdPage = (function () {
    function VerifyTouchIdPage(platform, formBuilder, alertCtrl, routeManager, modalCtrl, renderer, viewCtrl, touchId) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.routeManager = routeManager;
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.viewCtrl = viewCtrl;
        this.wrong_PIN = __WEBPACK_IMPORTED_MODULE_7__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.wrong_PIN;
        this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
        this.touchId = touchId;
    }
    VerifyTouchIdPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var service = __WEBPACK_IMPORTED_MODULE_5__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance();
        var touchIDState = service.touchIDState;
        if (touchIDState) {
            this.touchId.isAvailable()
                .then(function (res) {
                return _this.touchId.show({
                    clientId: 'Touch ID for Love2Shop',
                    clientSecret: 'myPassword',
                    disableBackup: true,
                });
            })
                .then(function (res) {
                __WEBPACK_IMPORTED_MODULE_5__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().VisibleScreen = false;
                _this.viewCtrl.dismiss();
            })
                .catch(function (err) {
                if (err === '-1' || err === '-8') {
                    _this.showAlertTouchIdFail(err);
                }
                else {
                    _this.showPinCodeModal();
                }
            });
        }
        else {
            this.showPinCodeModal();
        }
    };
    VerifyTouchIdPage.prototype.showPinCodeModal = function () {
        this.viewCtrl.dismiss();
        var verifyScreenModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__verifyPIN_verifyPIN__["a" /* VerifyPINPage */], {}, {
            cssClass: 'touchable-page'
        });
        verifyScreenModal.onDidDismiss(function () {
            __WEBPACK_IMPORTED_MODULE_5__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().VisibleScreen = false;
        });
        __WEBPACK_IMPORTED_MODULE_5__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().VisibleScreen = true;
        verifyScreenModal.present();
    };
    VerifyTouchIdPage.prototype.okForDismiss = function () {
        __WEBPACK_IMPORTED_MODULE_5__verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance().VisibleScreen = false;
        this.viewCtrl.dismiss();
    };
    VerifyTouchIdPage.prototype.showAlertTouchIdFail = function (errorCode) {
        var _this = this;
        var message = 'Fail attempts Touch ID 3 times.';
        if (errorCode === '-8') {
            message = 'Fail attempts Touch ID 2 times.';
        }
        var alert = this.alertCtrl.create({
            title: this.wrong_PIN,
            message: message,
            buttons: [{
                    text: 'OK',
                    handler: function (data) {
                        _this.showPinCodeModal();
                    }
                }]
        });
        alert.present();
    };
    VerifyTouchIdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verifyTouchId',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AccountManagement\verifyTouchId\verifyTouchId.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>verify TouchId</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content-container">\n  <ion-scroll class="main-content" scrollY="true">\n    <ion-grid>\n      This screen for verify TouchId\n    </ion-grid>\n  </ion-scroll>\n\n  <ion-row class="button--bottom">\n    <ion-col>\n      <button ion-button large (click)="showPinCodeModal()">Unlock by PIN Code</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AccountManagement\verifyTouchId\verifyTouchId.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], VerifyTouchIdPage);
    return VerifyTouchIdPage;
}());

//# sourceMappingURL=verifyTouchId.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicatorService; });
// pillow time between call hide and show
// any call whithin this time the old instance of loading will be kept and no new instance be created.
var PILLOW_TIME_MS = 500;
var LoadingIndicatorService = (function () {
    function LoadingIndicatorService() {
        if (LoadingIndicatorService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use LoadingIndicatorService.getInstance() instead of new.');
        }
        LoadingIndicatorService._instance = this;
    }
    LoadingIndicatorService.prototype.showLoadingIndicator = function () {
        if (!this.loading && !this.hiddingTimeoutId) {
            this.loading = this.loadingCtrl.create({
                spinner: 'crescent',
                content: "Please wait...",
                dismissOnPageChange: false
            });
            this.hiddingTimeoutId = null;
            this.loading.present();
        }
        else {
            clearTimeout(this.hiddingTimeoutId);
            this.hiddingTimeoutId = null;
        }
        ;
    };
    LoadingIndicatorService.prototype.hideLoadingIndicator = function () {
        var _this = this;
        if (this.hiddingTimeoutId) {
            clearTimeout(this.hiddingTimeoutId);
        }
        this.hiddingTimeoutId = setTimeout(function () {
            if (_this.loading) {
                _this.loading.dismiss();
                _this.loading = null;
                _this.hiddingTimeoutId = null;
            }
        }, PILLOW_TIME_MS);
    };
    LoadingIndicatorService.prototype.initializeLoadingIndicator = function (loadingCtrl) {
        if ((this.loadingCtrl === undefined)
            || (this.loadingCtrl === null)) {
            this.loadingCtrl = loadingCtrl;
            this.hiddingTimeoutId = null;
        }
    };
    LoadingIndicatorService.prototype.resetState = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
        if (this.hiddingTimeoutId) {
            clearTimeout(this.hiddingTimeoutId);
        }
        this.loading = null;
        this.hiddingTimeoutId = null;
    };
    LoadingIndicatorService.getInstance = function () {
        return LoadingIndicatorService._instance;
    };
    // tslint:disable-next-line:member-ordering
    LoadingIndicatorService._instance = new LoadingIndicatorService();
    return LoadingIndicatorService;
}());

//# sourceMappingURL=loadingIndicator.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourCardDetailsSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__ = __webpack_require__(44);



var YourCardDetailsSharingDataService = (function () {
    function YourCardDetailsSharingDataService() {
        this.defaultMasterData = {};
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](this.currentMasterData);
        this.isOpenedAddCardScreen = false;
        this.isActiveYourCardDetailsPage = false;
        this.callFromRegister = false;
        this.numberOfCards = 0;
        this.updateListCard$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.refreshListCards$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        if (YourCardDetailsSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use YourCardDetailsSharingDataService.getInstance() instead of new.');
        }
        YourCardDetailsSharingDataService._instance = this;
    }
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "state$", {
        get: function () {
            return this._state$;
        },
        enumerable: true,
        configurable: true
    });
    YourCardDetailsSharingDataService.prototype.resetState = function () {
        this.currentMasterData = Object.assign({}, this.defaultMasterData);
        this._state$.next(this.currentMasterData);
    };
    YourCardDetailsSharingDataService.prototype.saveCardsData = function (cards) {
        this.currentMasterData.cards = cards;
        this.updateListCard$.next('updated');
    };
    YourCardDetailsSharingDataService.prototype.getLatestCardInfoFromHomeSharing = function (currentCard) {
        var cardList = this.currentMasterData.cards || [];
        if (__WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(currentCard) && Array.isArray(cardList)) {
            var cardIndex = void 0;
            var breakCheckIndex = false;
            if (__WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(currentCard.cardID) && currentCard.cardID !== '') {
                if (currentCard.cardID.indexOf('-') > 0) {
                    cardIndex = cardList.findIndex(function (x) { return x.cardId === currentCard.cardID; });
                }
                else {
                    for (var i = 0; i < cardList.length; i++) {
                        if (cardList[i].cardId && cardList[i].cardId.indexOf('-') > 0) {
                            if (cardList[i].cardId.replace(/-/g, "") === currentCard.cardID) {
                                cardIndex = i;
                            }
                        }
                    }
                }
                breakCheckIndex = true;
            }
            if (__WEBPACK_IMPORTED_MODULE_2__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(currentCard.cardNumber) && breakCheckIndex !== true && currentCard.cardNumber !== '') {
                cardIndex = cardList.findIndex(function (x) { return x.cardNumber === currentCard.cardNumber; });
            }
            return cardList[cardIndex];
        }
        return null;
    };
    YourCardDetailsSharingDataService.prototype.getCardsList = function () {
        return this.currentMasterData.cards || [];
    };
    YourCardDetailsSharingDataService.getInstance = function () {
        return YourCardDetailsSharingDataService._instance;
    };
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "IsOpenedAddCardScreen", {
        get: function () {
            return this.isOpenedAddCardScreen;
        },
        set: function (state) {
            this.isOpenedAddCardScreen = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "IsActiveYourCardDetailsPage", {
        get: function () {
            return this.isActiveYourCardDetailsPage;
        },
        set: function (state) {
            this.isActiveYourCardDetailsPage = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "CallFromRegister", {
        get: function () {
            return this.callFromRegister;
        },
        set: function (state) {
            this.callFromRegister = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "NumberOfCards", {
        get: function () {
            return this.numberOfCards;
        },
        set: function (value) {
            this.numberOfCards = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "PauseSub", {
        get: function () {
            return this.pauseSub;
        },
        set: function (value) {
            this.pauseSub = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "needBackToYourCard", {
        get: function () {
            return this.backToYourCard;
        },
        set: function (value) {
            this.backToYourCard = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "goToFromRemove", {
        get: function () {
            return this.fromRemoveCard;
        },
        set: function (value) {
            this.fromRemoveCard = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "goToFromLogin", {
        get: function () {
            return this.fromLogin;
        },
        set: function (value) {
            this.fromLogin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "goToFromAddCard", {
        get: function () {
            return this.fromAddCard;
        },
        set: function (value) {
            this.fromAddCard = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "saveCardCurrent", {
        set: function (card) {
            this.currentCard = card;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "getCardCurrent", {
        get: function () {
            return this.currentCard;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "saveCardInforActive", {
        set: function (card) {
            this.cardInfoActive = card;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourCardDetailsSharingDataService.prototype, "getCardInforActive", {
        get: function () {
            return this.cardInfoActive;
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:member-ordering
    YourCardDetailsSharingDataService._instance = new YourCardDetailsSharingDataService();
    return YourCardDetailsSharingDataService;
}());

//# sourceMappingURL=yourCardDetailsSharingData.services.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = requireValidator;
/* unused harmony export RequireValidatorDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function requireValidator(fieldName) {
    return function (control) {
        var input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.trim() !== '')
                ? null
                : { required: errorMessage(fieldName) };
        }
        return null;
    };
}
function errorMessage(fieldName) {
    if (fieldName === 'cvv' || fieldName === 'csc') {
        return __WEBPACK_IMPORTED_MODULE_1__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.cardCsc_required;
    }
    else {
        return __WEBPACK_IMPORTED_MODULE_1__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
    }
}
var RequireValidatorDirective = (function () {
    function RequireValidatorDirective() {
        this.valFn = __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator;
        this.valFn = requireValidator();
    }
    RequireValidatorDirective_1 = RequireValidatorDirective;
    RequireValidatorDirective.prototype.ngOnChanges = function (changes) {
        var change = changes['customRequired'];
        if (change) {
            var val = change.currentValue;
            this.valFn = requireValidator(val);
        }
        else {
            this.valFn = __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator;
        }
    };
    RequireValidatorDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], RequireValidatorDirective.prototype, "customRequired", void 0);
    RequireValidatorDirective = RequireValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[customRequired]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: RequireValidatorDirective_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RequireValidatorDirective);
    return RequireValidatorDirective;
    var RequireValidatorDirective_1;
}());

//# sourceMappingURL=validator-required.directive.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyShoppingBasketSharingDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__ = __webpack_require__(44);


var MyShoppingBasketSharingDataService = (function () {
    function MyShoppingBasketSharingDataService() {
        this.basketData = {
            cardInformation: null,
            needCaculateFee: false,
            productsOnBasket: [],
            feeObject: null,
        };
        this.isNotItemNew = false;
        this.isDifferentCatalog = false;
        this.isDifferentCard = false;
        this._state$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](this.basketData);
        if (MyShoppingBasketSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use YourCardDetailsSharingDataService.getInstance() instead of new.');
        }
        MyShoppingBasketSharingDataService._instance = this;
    }
    Object.defineProperty(MyShoppingBasketSharingDataService.prototype, "state$", {
        get: function () {
            return this._state$;
        },
        enumerable: true,
        configurable: true
    });
    MyShoppingBasketSharingDataService.prototype.resetState = function () {
        this.basketData = {
            cardInformation: null,
            needCaculateFee: false,
            productsOnBasket: [],
            feeObject: []
        };
        this.isNotItemNew = false;
        this.isDifferentCatalog = false;
        this.isDifferentCard = false;
        this.dataAfterGenerateOrder = null;
        this.defaultMasterData = null;
    };
    MyShoppingBasketSharingDataService.prototype.getDataBasket = function () {
        return this.basketData;
    };
    MyShoppingBasketSharingDataService.prototype.setFeeObject = function (feeObject) {
        this.basketData.feeObject = feeObject;
    };
    MyShoppingBasketSharingDataService.prototype.pushDatatoBasket = function (cardInfor, productSelected, productFee, quantity) {
        this.isNotItemNew = false;
        this.isDifferentCatalog = false;
        this.isDifferentCard = false;
        if (__WEBPACK_IMPORTED_MODULE_1__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(this.basketData.cardInformation) && (this.basketData.productsOnBasket.length > 0)) {
            var cardSelectedInfor = this.basketData.cardInformation;
            if ((cardSelectedInfor.cardNumber === cardInfor.cardNumber) &&
                (cardSelectedInfor.propositionId === cardInfor.propositionId)) {
                var productBasket = this.basketData.productsOnBasket;
                for (var i = 0; i < productBasket.length; i++) {
                    if ((productBasket[i].category.categoryId) === (productSelected.category.categoryId)) {
                        if (productBasket[i].productCode === productSelected.productCode
                            && productBasket[i].productId === productSelected.productId &&
                            productBasket[i].price === productSelected.price) {
                            productBasket[i].quantity = parseInt(productBasket[i].quantity) + parseInt(quantity);
                            this.basketData.feeObject = null;
                            this.basketData.feeObject = productFee;
                            this.isNotItemNew = true;
                        }
                    }
                    else {
                        this.isDifferentCatalog = true;
                        return;
                    }
                }
                if (!this.isNotItemNew) {
                    var quantityOfitem = {
                        'quantity': parseInt(quantity),
                        'value': productSelected.price,
                    };
                    var objectCombinedNew = Object.assign({}, productSelected, quantityOfitem);
                    this.basketData.productsOnBasket.push(objectCombinedNew);
                    this.basketData.feeObject = null;
                    this.basketData.feeObject = productFee;
                }
            }
            else {
                this.isDifferentCard = true;
            }
        }
        else {
            var quantityOfitem = {
                'quantity': parseInt(quantity),
                'value': productSelected.price,
            };
            var objectCombined = Object.assign({}, productSelected, quantityOfitem);
            this.basketData.productsOnBasket.push(objectCombined);
            this.basketData.cardInformation = cardInfor;
            this.basketData.feeObject = null;
            this.basketData.feeObject = productFee;
        }
    };
    MyShoppingBasketSharingDataService.prototype.removeItemFromBasket = function (index) {
        if (index !== -1) {
            var basketOrderLines = this.basketData.feeObject.orderlines;
            for (var i = 0; i < basketOrderLines.length; i++) {
                if ((this.basketData.productsOnBasket[index].productCode === basketOrderLines[i].productCode)
                    && (parseFloat(this.basketData.productsOnBasket[index].price) === parseFloat(basketOrderLines[i].unitPrice))) {
                    this.basketData.feeObject.orderlines.splice(i, 1);
                }
            }
            this.basketData.productsOnBasket.splice(index, 1);
        }
    };
    //Data After Generate Discount Gift Card
    MyShoppingBasketSharingDataService.prototype.getDataToGenerateOrderBuy = function () {
        var data = this.basketData;
        var bodyForGenerateOrder = {
            "propositionId": data.cardInformation.propositionId,
            "cardProductCode": data.cardInformation.productCode,
            "validateOnly": true,
            "orderJourney": data.productsOnBasket[0].benefit.orderJourney,
            "orderlines": []
        };
        for (var i = 0; i < data.productsOnBasket.length; i++) {
            var orderLineProductSelected = {
                "productCode": data.productsOnBasket[i].productCode,
                "quantity": data.productsOnBasket[i].quantity,
                "loadAmount": parseFloat(data.productsOnBasket[i].price),
            };
            bodyForGenerateOrder.orderlines.push(orderLineProductSelected);
        }
        return bodyForGenerateOrder;
    };
    MyShoppingBasketSharingDataService.prototype.getDataToGenerateOrderExchange = function () {
        var data = this.basketData;
        var bodyForGenerateOrder = {
            "propositionId": data.cardInformation.propositionId,
            "paymentCardNumber": data.cardInformation.cardNumber,
            "orderJourney": data.productsOnBasket[0].benefit.orderJourney,
            "orderlines": []
        };
        for (var i = 0; i < data.productsOnBasket.length; i++) {
            var orderLineProductSelected = {
                "productCode": data.productsOnBasket[i].productCode,
                "quantity": data.productsOnBasket[i].quantity,
                "loadAmount": parseFloat(data.productsOnBasket[i].price),
            };
            bodyForGenerateOrder.orderlines.push(orderLineProductSelected);
        }
        return bodyForGenerateOrder;
    };
    //Data After Generate Order
    MyShoppingBasketSharingDataService.prototype.getDataAfterGenerateOrder = function () {
        return this.dataAfterGenerateOrder;
    };
    MyShoppingBasketSharingDataService.prototype.saveDataAfterGenerateOrder = function (data) {
        this.dataAfterGenerateOrder = data;
    };
    MyShoppingBasketSharingDataService.prototype.resetDataAfterGenerateOrder = function () {
        this.dataAfterGenerateOrder = Object.assign({}, this.defaultMasterData);
    };
    MyShoppingBasketSharingDataService.prototype.savePrimaryCard = function (primaryCard) {
        this.primaryCard = primaryCard;
    };
    MyShoppingBasketSharingDataService.prototype.getPrimaryCard = function () {
        return this.primaryCard;
    };
    MyShoppingBasketSharingDataService.prototype.resetPrimaryCard = function () {
        this.primaryCard = Object.assign({}, this.defaultMasterData);
    };
    MyShoppingBasketSharingDataService.prototype.getIsDifferentCard = function () {
        return this.isDifferentCard;
    };
    MyShoppingBasketSharingDataService.prototype.getIsDifferentCategory = function () {
        return this.isDifferentCatalog;
    };
    MyShoppingBasketSharingDataService.getInstance = function () {
        return MyShoppingBasketSharingDataService._instance;
    };
    MyShoppingBasketSharingDataService._instance = new MyShoppingBasketSharingDataService();
    return MyShoppingBasketSharingDataService;
}());

//# sourceMappingURL=myShoppingBasketSharingData.services.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavService = (function () {
    function NavService(app) {
        this.app = app;
        if (!app) {
            throw 'This service must used inside App';
        }
    }
    NavService.prototype.getRootNav = function (id) {
        var navs = this.app.getRootNavs();
        var activeNavs = this.app.getActiveNavs(id);
        if (navs && Array.isArray(navs) && navs.length > 0) {
            return navs[0];
        }
        else if (activeNavs && Array.isArray(activeNavs) && activeNavs.length > 0) {
            var nav = activeNavs[0];
            while (nav.parent) {
                nav = nav.parent;
            }
            return nav;
        }
        return null;
    };
    NavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], NavService);
    return NavService;
}());

//# sourceMappingURL=nav.service.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = numericValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = numericValidatorCSC;
/* harmony export (immutable) */ __webpack_exports__["d"] = numericValidatorSerial;
/* harmony export (immutable) */ __webpack_exports__["c"] = numericValidatorPIN;
/* unused harmony export NumericValidatorDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function isNumber(txtNum) {
    var ok = false;
    if (txtNum.match(/^-{0,1}\d+$/)) {
        //valid integer (positive or negative)
        ok = true;
    }
    else if (txtNum.match(/^\d+\.\d+$/)) {
        //valid float
        ok = true;
    }
    else {
        //not valid number
        ok = false;
    }
    var num = parseFloat(txtNum);
    // that is a number, now check num > 0
    return (ok === true) && (num >= 0);
}
function numericValidator() {
    return function (control) {
        var input = control.value;
        if (isNumber(input) === false) {
            return { numericInvalid: __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.account_management_card_added_to_wallet };
        }
        return null;
    };
}
function numericValidatorCSC(key) {
    if (key === void 0) { key = 'numericInvalid'; }
    return function (control) {
        var input = control.value;
        if (input && (!isNumber(input))) {
            return { key: __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.cardCsc_invalid_characters };
        }
        if (input && isNumber(input) && input.length !== 3) {
            return { key: __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.cardCsc_less_than_min };
        }
        return null;
    };
}
function numericValidatorSerial(key) {
    if (key === void 0) { key = 'numericInvalid'; }
    return function (control) {
        var input = control.value;
        if (input && (!isNumber(input) || input.length !== 10)) {
            return { key: __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.park_api_10_digits };
        }
        return null;
    };
}
function numericValidatorPIN(key) {
    if (key === void 0) { key = 'numericInvalid'; }
    return function (control) {
        var input = control.value;
        if (input && (!isNumber(input) || input.length !== 4)) {
            return { key: __WEBPACK_IMPORTED_MODULE_2__appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_4_digits };
        }
        return null;
    };
}
var NumericValidatorDirective = (function () {
    function NumericValidatorDirective() {
        this.validatorFn = numericValidator();
    }
    NumericValidatorDirective_1 = NumericValidatorDirective;
    NumericValidatorDirective.prototype.validate = function (control) {
        return this.validatorFn(control);
    };
    NumericValidatorDirective = NumericValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[isNumeric]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: NumericValidatorDirective_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], NumericValidatorDirective);
    return NumericValidatorDirective;
    var NumericValidatorDirective_1;
}());

//# sourceMappingURL=validator-numeric.directive.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_key_string_pipe__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_directives_directive_deny_copy__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__onlyInteger_directive__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__nav_service__["a" /* NavService */]
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__get_key_string_pipe__["a" /* GetKeyStringPipe */],
                __WEBPACK_IMPORTED_MODULE_3__framework_directives_directive_deny_copy__["a" /* DenyCopyDirective */],
                __WEBPACK_IMPORTED_MODULE_4__onlyInteger_directive__["a" /* OnlyInteger */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__get_key_string_pipe__["a" /* GetKeyStringPipe */],
                __WEBPACK_IMPORTED_MODULE_3__framework_directives_directive_deny_copy__["a" /* DenyCopyDirective */],
                __WEBPACK_IMPORTED_MODULE_4__onlyInteger_directive__["a" /* OnlyInteger */]
            ],
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutDataService = (function () {
    function LogoutDataService(http) {
        this.http = http;
    }
    LogoutDataService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.app-root').removeClass('not-show-tab');
        return this.http.deleteWithoutBody('account/authenticate');
    };
    LogoutDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_httpService_http_service__["a" /* HttpService */]])
    ], LogoutDataService);
    return LogoutDataService;
}());

//# sourceMappingURL=logoutData.service.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PttPinModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ptt_pin_component__ = __webpack_require__(685);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PttPinModule = (function () {
    function PttPinModule() {
    }
    PttPinModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ptt_pin_component__["a" /* PttPinComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ptt_pin_component__["a" /* PttPinComponent */]
            ]
        })
    ], PttPinModule);
    return PttPinModule;
}());

//# sourceMappingURL=ptt-pin.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetKeyStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetKeyStringPipe = (function () {
    function GetKeyStringPipe() {
    }
    GetKeyStringPipe.prototype.transform = function (obj, key) {
        return (obj && obj[key]) ? obj[key] : '';
    };
    GetKeyStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'getKeyString'
        })
    ], GetKeyStringPipe);
    return GetKeyStringPipe;
}());

//# sourceMappingURL=get-key-string.pipe.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(383);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spa_framework_services_httpService_http_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spa_framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spa_framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__spa_shared_shared_module__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__spa_screens_AccountManagement_verifyPIN_verifyPIN_module__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__spa_screens_AccountManagement_verifyTouchId_verifyTouchId_module__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__spa_screens_AccountManagement_verifyPIN_verifyPIN__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__spa_screens_AccountManagement_verifyTouchId_verifyTouchId__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__spa_screens_AccountManagement_verifyPIN_verifyPIN_module__["VerifyPINPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__spa_screens_AccountManagement_verifyTouchId_verifyTouchId_module__["VerifyTouchIdPageModule"],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonIcon: 'ios-arrow-back',
                    backButtonText: '',
                    scrollAssist: false,
                    scrollPadding: false,
                    autoFocusAssist: false,
                    iconMode: 'ios',
                    swipeBackEnabled: false,
                    platforms: {
                        ios: {
                            statusbarPadding: true
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../spa/+screens/AccountManagement/accountDetails/accountDetails.module#AccountDetailsPageModule', name: 'AccountDetailsPage', segment: 'accountDetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/changeEmail/changeEmail.module#ChangeEmailPageModule', name: 'ChangeEmailPage', segment: 'changeEmail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/changePassword/changePassword.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'changePassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/changePIN/changePIN.module#ChangePINPageModule', name: 'ChangePINPage', segment: 'changePIN', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/changeTouchID/changeTouchID.module#ChangeTouchIDPageModule', name: 'ChangeTouchIDPage', segment: 'changeTouchID', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/editAccount/editAccount.module#EditAccountPageModule', name: 'EditAccountPage', segment: 'editAccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/forgotPassword/forgotPassword.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgotPassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/forgotPassword/forgotPasswordSuccess/forgotPasswordSuccess.module#ForgotPasswordSuccessModule', name: 'ForgotPasswordSuccess', segment: 'forgotPasswordSuccess', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/register/registerStep1/registerStep1.module#RegisterStep1PageModule', name: 'RegisterStep1Page', segment: 'registerStep1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/register/registerStep2/registerStep2.module#RegisterStep2PageModule', name: 'RegisterStep2Page', segment: 'registerStep2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/register/registerStep3/registerStep3.module#RegisterStep3PageModule', name: 'RegisterStep3Page', segment: 'registerStep3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/register/registerStep4/registerStep4.module#RegisterStep4PageModule', name: 'RegisterStep4Page', segment: 'registerStep4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/register/registerStep5/registerStep5.module#RegisterStep5PageModule', name: 'RegisterStep5Page', segment: 'registerStep5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/register/registerStep6/registerStep6.module#RegisterStep6PageModule', name: 'RegisterStep6Page', segment: 'registerStep6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/register/registerStep7/registerStep7.module#RegisterStep7PageModule', name: 'RegisterStep7Page', segment: 'registerStep7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/setupPIN/setupPIN.module#SetupPINPageModule', name: 'SetupPINPage', segment: 'setupPIN', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/touchIDSettingFirstTime/touchIDSettingFirstTime.module#RegisterStep5PageModule', name: 'TouchIDSettingFirstTimePage', segment: 'touchIDSettingFirstTime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/updatePIN/updatePIN.module#UpdatePINPageModule', name: 'UpdatePINPage', segment: 'updatePIN', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/verifyPIN/verifyPIN.module#VerifyPINPageModule', name: 'VerifyPINPage', segment: 'verifyPIN', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AccountManagement/verifyTouchId/verifyTouchId.module#VerifyTouchIdPageModule', name: 'VerifyTouchIdPage', segment: 'verifyTouchId', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AppInforManagement/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AppInforManagement/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AppInforManagement/contactUs/contactUs.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contactUs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AppInforManagement/cookie/cookie.module#CookiePagePageModule', name: 'CookiePage', segment: 'cookie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AppInforManagement/deliveryInformation/deliveryInformation.module#DeliveryInformationPageModule', name: 'DeliveryInformationPage', segment: 'deliveryInformation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AppInforManagement/eMoneyTrust/eMoneyTrust.module#EMoneyTrustPageModule', name: 'EMoneyTrustPage', segment: 'eMoneyTrust', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AppInforManagement/faq/faq.module#FAQPageModule', name: 'FAQPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AppInforManagement/moreInformation/moreInformation.module#MoreInfoPageModule', name: 'MoreInfoPage', segment: 'moreInformation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AppInforManagement/privacyPolicy/privacyPolicy.module#PrivacyPolicyPageModule', name: 'PrivacyPolicyPage', segment: 'privacyPolicy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/AppInforManagement/termsConditions/termsConditions.module#TermsConditionsPageModule', name: 'TermsConditionsPage', segment: 'termsConditions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/buy/businessEnquiries/businessEnquiries.module#BusinessEnquiriesPageModule', name: 'BusinessEnquiriesPage', segment: 'businessEnquiries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/buy/buy.module#BuyPageModule', name: 'BuyPage', segment: 'buy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/buy/buyDiscountedGiftCard/buyADiscountedGiftCard/buyADiscountedGiftCard.module#BuyADiscountedGiftCardPageModule', name: 'BuyADiscountedGiftCardPage', segment: 'buyADiscountedGiftCard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/buy/buyDiscountedGiftCard/buyDiscountedGiftCard.module#BuyDiscountedGiftCardPageModule', name: 'BuyDiscountedGiftCardPage', segment: 'buyDiscountedGiftCard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/buy/buyDiscountedSupperGiftCard/buyDiscountedSupperGiftCard.module#BuyDiscountedSupperGiftCardPageModule', name: 'BuyDiscountedSupperGiftCardPage', segment: 'buyDiscountedSupperGiftCard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/buy/buySpecSavers/buySpecSavers.module#BuySpecSaversPageModule', name: 'BuySpecSaversPage', segment: 'buySpecSavers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/exchange/exchang4SpendOnline/exchang4SpendOnline.module#Exchang4SpendOnlinePageModule', name: 'Exchang4SpendOnlinePage', segment: 'exchang4SpendOnline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/exchange/exchang4SpendOnline/masterCardExchange/masterCardExchange.module#MasterCardExchangePageModule', name: 'MasterCardExchangePage', segment: 'masterCardExchange', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/exchange/exchange.module#ExchangePageModule', name: 'ExchangePage', segment: 'exchange', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/exchange/exchange4DiningECode/exchange4DiningECode.module#Exchange4DiningECodePageModule', name: 'Exchange4DiningECodePage', segment: 'exchange4DiningECode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/exchange/exchange4ECode/exchange4ECode.module#Exchange4ECodePageModule', name: 'Exchange4ECodePage', segment: 'exchange4ECode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/exchange/exchange4OtherGiftCards/exchange4OtherGiftCards.module#Exchange4OtherGiftCardsModule', name: 'Exchange4OtherGiftCardsPage', segment: 'exchange4OtherGiftCards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/exchange/exchange4OtherGiftCards/giftCardExchange/giftCardExchange.module#GiftCardExchangePageModule', name: 'GiftCardExchangePage', segment: 'giftCardExchange', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/exchange/holidays/holidays.module#HolidaysPageModule', name: 'HolidaysPage', segment: 'holidays', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/exchange/exchangeEcodeAllBarOneEcode/exchangeEcodeAllBarOneEcode.module#ExchangeEcodeAllBarOneEcodePageModule', name: 'ExchangeEcodeAllBarOneEcodePage', segment: 'exchangeEcodeAllBarOneEcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/benefits/exchange/masterCardInfo/masterCardInfo.module#MasterCardInfoPageModule', name: 'MasterCardInfoPage', segment: 'masterCardInfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/addcard/addCardNumber/addCardNumber.module#AddCardNumberPageModule', name: 'AddCardNumberPage', segment: 'addCardNumber', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/addcard/addCardPhysicalMasterCard/addCardPhysicalMasterCard.module#AddCardPhysicalMasterCardPageModule', name: 'AddCardPhysicalMasterCardPage', segment: 'addCardPhysicalMasterCard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/addcard/addCardSainsburys/addCardSainsburys.module#AddCardSainsburysPageModule', name: 'AddCardSainsburysPage', segment: 'addCardSainsburys', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/addcard/addCardTesco/addCardTesco.module#AddCardTescoPageModule', name: 'AddCardTescoPage', segment: 'addCardTesco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/addcard/addFlexCash/addFlexCash.module#AddFlexCashPageModule', name: 'AddFlexCashPage', segment: 'addFlexCash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/addcard/addFlexECode/addFlexECode.module#AddFlexECodePageModule', name: 'AddFlexECodePage', segment: 'addFlexECode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/addcard/addPinToCard/addPinToCard.module#AddPinToCardPageModule', name: 'AddPinToCardPage', segment: 'addPinToCard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/addcard/addPinToCode/addPinToCode.module#AddPinToCodePageModule', name: 'AddPinToCodePage', segment: 'addPinToCode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/addMyCard/addMyCard.module#AddMyCardPageModule', name: 'AddMyCardPage', segment: 'addMyCard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/cardDetails/amountTopUp/amountTopUp.module#AmountTopUpPageModule', name: 'AmountTopUpPage', segment: 'amountTopUp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/cardDetails/makeTopUp/makeTopUp.module#MakeTopUptPageModule', name: 'MakeTopUptPage', segment: 'makeTopUp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/cardDetails/makeTopUp3DS/makeTopUp3DS.module#MakeTopUptPage3DSModule', name: 'MakeTopUp3DSPage', segment: 'makeTopUp3DS', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/cardDetails/makeTopUpSuccessfull/makeTopUpSuccessfull.module#MakeTopUpSuccessFullPageModule', name: 'MakeTopUpSuccessFullPage', segment: 'makeTopUpSuccessfull', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/cardDetails/viewAlertSettings/viewAlertSettings.module#viewAlertSettingsPageModule', name: 'viewAlertSettingsPage', segment: 'viewAlertSettings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/cardDetails/yourCardDetails/cardFaq/cardfaq.module#CardFAQPageModule', name: 'CardFAQPage', segment: 'cardfaq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/cardDetails/yourCardDetails/TopUpInformationPage/topupInfo.module#TopUpInfoPageModule', name: 'TopUpInfoPage', segment: 'topupInfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/cardDetails/yourCardDetails/yourCardDetails.module#YourCardDetailsPageModule', name: 'YourCardDetailsPage', segment: 'yourCardDetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/changePaymentMethods/changePaymentMethods.module#ChangePaymentMethodsPageModule', name: 'ChangePaymentMethodsPage', segment: 'changePaymentMethods', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/checkBalance/checkBalanceStep1/checkBalanceStep1.module#CheckBalanceStep1PageModule', name: 'CheckBalanceStep1Page', segment: 'checkBalanceStep1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/checkBalance/checkBalanceStep2/checkBalanceStep2.module#CheckBalanceStep2PageModule', name: 'CheckBalanceStep2Page', segment: 'checkBalanceStep2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/checkBalance/checkBalanceStep3/checkBalanceStep3.module#CheckBalanceStep3PageModule', name: 'CheckBalanceStep3Page', segment: 'checkBalanceStep3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/refundValue/refundValue.module#RefundValuePageModule', name: 'RefundValuePage', segment: 'refundValue', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/returnRefund/returnRefund.module#ReturnRefundPageModule', name: 'ReturnRefundPage', segment: 'returnRefund', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/CardManagement/viewCardStatement/viewCardStatement.module#ViewCardStatementPageModule', name: 'ViewCardStatementPage', segment: 'viewCardStatement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/myShoppingBasket/myShoppingBasket.module#MyShoppingBasketPageModule', name: 'MyShoppingBasketPage', segment: 'myShoppingBasket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCard3DS/orderDiscountGiftCard3DS.module#OrderDiscountGiftCard3DSModule', name: 'OrderDiscountGiftCard3DSPage', segment: 'orderDiscountGiftCard3DS', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardAddPersonalMessage/orderDiscountGiftCardAddPersonalMessage.module#OrderDiscountGiftCardAddPersonalMessageModule', name: 'OrderDiscountGiftCardAddPersonalMessage', segment: 'orderDiscountGiftCardAddPersonalMessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardChooseCardDesign/orderDiscountGiftCardChooseCardDesign.module#OrderDiscountGiftCardChooseCardDesignModule', name: 'OrderDiscountGiftCardChooseCardDesign', segment: 'orderDiscountGiftCardChooseCardDesign', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardComplete/orderDiscountGiftCardComplete.module#orderDiscountGiftCardCompleteModule', name: 'OrderDiscountGiftCardComplete', segment: 'orderDiscountGiftCardComplete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardDeliveryOption/orderDiscountGiftCardDeliveryOption.module#OrderDiscountGiftCardDeliveryOptionModule', name: 'OrderDiscountGiftCardDeliveryOption', segment: 'orderDiscountGiftCardDeliveryOption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardExtraGiftWallets/orderDiscountGiftCardExtraGiftWallets.module#OrderDiscountGiftCardExtraGiftWalletsModule', name: 'OrderDiscountGiftCardExtraGiftWallets', segment: 'orderDiscountGiftCardExtraGiftWallets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardPaymentCard/orderDiscountGiftCardPaymentCard.module#OrderDiscountGiftCardPaymentCardModule', name: 'OrderDiscountGiftCardPaymentCardPage', segment: 'orderDiscountGiftCardPaymentCard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardReviewYourOrder/orderDiscountGiftCardReviewYourOrder.module#OrderDiscountGiftCardReviewYourOrderModule', name: 'OrderDiscountGiftCardReviewYourOrder', segment: 'orderDiscountGiftCardReviewYourOrder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderDiscountGiftCard/orderDiscountGiftCardUpdateDeliveryOption/orderDiscountGiftCardUpdateDeliveryOption.module#ChangePasswordPageModule', name: 'OrderDiscountGiftCardUpdateDeliveryOptionPage', segment: 'orderDiscountGiftCardUpdateDeliveryOption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderECode/orderECodeStep1/orderECodeStep1.module#orderEcodeStep1Module', name: 'OrderEcodeStep1', segment: 'orderECodeStep1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderECode/orderECodeStep2/orderECodeStep2.module#orderECodeStep2Module', name: 'OrderEcodeStep2', segment: 'orderECodeStep2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderExchangeGiftCard/orderExchangeGiftCardStep1/orderExchangeGiftCardStep1.module#OrderExchangeGiftCardStep1Module', name: 'OrderExchangeGiftCardStep1', segment: 'orderExchangeGiftCardStep1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderExchangeGiftCard/orderExchangeGiftCardStep2/orderExchangeGiftCardStep2.module#OrderExchangeGiftCardStep2Module', name: 'OrderExchangeGiftCardStep2', segment: 'orderExchangeGiftCardStep2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderExchangeGiftCard/orderExchangeGiftCardStep3/orderExchangeGiftCardStep3.module#OrderExchangeGiftCardStep3Module', name: 'OrderExchangeGiftCardStep3', segment: 'orderExchangeGiftCardStep3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderMasterCardExchange/orderMasterCardExchangeStep1/orderMasterCardExchangeStep1.module#orderMasterCardExchangeStep1Module', name: 'OrderMasterCardExchangeStep1', segment: 'orderMasterCardExchangeStep1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderMasterCardExchange/orderMasterCardExchangeStep2/orderMasterCardExchangeStep2.module#orderMasterCardExchangeStep2Module', name: 'OrderMasterCardExchangeStep2', segment: 'orderMasterCardExchangeStep2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderMixBasket/orderMixBasketStep1/orderMixBasketStep1.module#OrderMixBasketStep1Module', name: 'OrderMixBasketStep1', segment: 'orderMixBasketStep1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderMixBasket/orderMixBasketStep2/orderMixBasketStep2.module#OrderMixBasketStep2Module', name: 'OrderMixBasketStep2', segment: 'orderMixBasketStep2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderMixBasket/orderMixBasketStep3/orderMixBasketStep3.module#OrderMixBasketStep3Module', name: 'OrderMixBasketStep3', segment: 'orderMixBasketStep3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderSupermarket/orderSupermarketStep1/orderSupermarketStep1.module#OrderSupermarketStep1Module', name: 'OrderSupermarketStep1', segment: 'orderSupermarketStep1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/orderManagement/orderSupermarket/orderSupermarketStep2/orderSupermarketStep2.module#OrderSupermarketStep2Module', name: 'OrderSupermarketStep2', segment: 'orderSupermarketStep2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/Others/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/Others/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/Others/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/whereToSpend/where2SpendInStore/alertStoreDetails/alertStoreDetails.module#AlertStoreDetailsPageModule', name: 'AlertStoreDetailsPage', segment: 'alertStoreDetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/whereToSpend/where2SpendInStore/categoryStores/categoryStores.module#CategoryStoresPageModule', name: 'CategoryStoresPage', segment: 'categoryStores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/whereToSpend/where2SpendInStore/changeCard/changeCard.module#ChangeCardPageModule', name: 'ChangeCardPage', segment: 'changeCard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/whereToSpend/where2SpendInStore/changeCard/openPdf/openPdf.module#OpenPdfPageModule', name: 'OpenPdfPage', segment: 'openPdf', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/whereToSpend/where2SpendInStore/locationStores/locationStores.module#LocationStoresPageModule', name: 'LocationStoresPage', segment: 'locationStores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/whereToSpend/where2SpendInStore/where2SpendInStoreList/where2SpendInStoreList.module#Where2SpendInStoreListPageModule', name: 'Where2SpendInStoreListPage', segment: 'where2SpendInStoreList', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/whereToSpend/where2SpendOnline/where2SpendOnline.module#Where2SpendOnlinePageModule', name: 'Where2SpendOnlinePage', segment: 'where2SpendOnline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/+screens/whereToSpend/where2SpendInStore/where2SpendInStoreMap/where2SpendInStoreMap.module#Where2SpendInStoreMapPageModule', name: 'Where2SpendInStoreMapPage', segment: 'where2SpendInStoreMap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../spa/framework/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__spa_shared_shared_module__["a" /* SharedModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__spa_screens_AccountManagement_verifyPIN_verifyPIN__["a" /* VerifyPINPage */],
                __WEBPACK_IMPORTED_MODULE_16__spa_screens_AccountManagement_verifyTouchId_verifyTouchId__["a" /* VerifyTouchIdPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* IonicErrorHandler */]
                },
                __WEBPACK_IMPORTED_MODULE_1__spa_framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
                __WEBPACK_IMPORTED_MODULE_2__spa_framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
                __WEBPACK_IMPORTED_MODULE_0__spa_framework_services_httpService_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
    }
    // Reference example
    // import { AppConfig as app } from "../../../../framework/appConfig";
    // How to use:
    // location: any = app.Configuration.Where2SpendInStoreMap.defaultLocation;
    AppConfig.Configuration = {
        RegisterStep2Page: {
            AlertPasswordTitle: "Creating your password"
        },
        ChangeTouchIDPage: {
            messageTouchNotAvailable: ""
        },
        ChangePINPage: {
            pinNotMatch: ""
        },
        MakeTopUp3DS: {
            submitIframe3D: 1000,
            autoSubmitPaResponse: 5000
        },
        OrderDiscountGiftCard3DS: {
            submitIframe3D: 1000,
            autoSubmitPaResponse: 2500,
            checkPaymentResume: 2000
        },
        HttpService: {
            baseApiUrl: "https://uat.api.parkgroup.co.uk/park-api-portlet/api/v1/",
            API_Authentication: "049ad506-a3cc-4db1-bfdb-8c68a2997f8d:D/TX;KTRW=PEY=yd1cG5VHx~B",
            baseResourceUrl: "https://uat.api.parkgroup.co.uk",
            DEFAULT_ERROR_MSG: "An unexpected error has occurred, please try again later.",
            NO_CONNECTION_MSG: "Right now you do not have a connection.",
            TOKEN_INVALID: "Token is invalid.",
            INVALID_PAYMENT_FEE_MSG: "feeAmount-invalid",
            INVALID_PAYMENT_MSG: "park.api.datacash-payment.failed",
            time2ShowToast: 3000,
            INVALID_TOPUP_2192: "2192"
        },
        LocationService: {
            PCA_KEY: "cu91-uz76-uz46-ar47"
        },
        Where2SpendInStoreMap: {
            // London, UK
            defaultLocation: {
                "lat": 53.3530,
                "lng": -3.0075
            },
            GPS_ERROR_MSG: "Please enable GPS to use this function.",
            youAreHere: "You are here.",
            checkGPSOnResume: 1000
        },
        masterCardInfo: {
            urlSelectMasterCard: 'mycard/choose/mastercard/select',
            urlSelectAnyWhereMasterCard: 'mycard/choose/mastercard/anywhere'
        },
        ContentMessage: {
            cardCsc_required: "",
            cardCsc_less_than_min: "",
            cardCsc_invalid_characters: "",
            enter_all_digits: "",
            must_read_ts_cs: "",
            confirm_removal: "",
            wallet_remove_card_message: "",
            confirm_top_up_amount: "",
            applied_to_this_amount: "",
            applied_to_card_load: "",
            ecodes_mailed_to: "",
            enter_csc: "",
            reset_fingerprint: "",
            use_of_fingerprint: "",
            use_fingerprint_not_PIN: "",
            use_same_finger: "",
            changing_PIN: "",
            forgot_password_success_email_sent: "",
            forgot_password_enter_email_address_below: "",
            order_gwp_default_section4_need_free_wallet_info: "",
            order_gwp_default_section4_need_free_wallet: "",
            order_gwp_default_section4_need_free_wallet_button: "",
            order_gwp_default_section4_choice_h4_1: "",
            order_gwp_default_section4_buying_multiple_vouchers_info: "",
            order_gwp_default_section4_buying_multiple_vouchers_button: "",
            order_gwp_default_section4_choice_h4_2: "",
            order_gwp_default_section1_action_h2: "",
            order_gwp_default_section1_choice_p: "",
            order_gwp_default_section3_action_p: "",
            order_gwp_default_section6_action_p: "",
            personal_details: "",
            account_login_details: "",
            please_enter_your_email_and_password_below_which_will_be_used_to_login_to_your_account_in_the_future: "",
            marketing_opt_out: "",
            account_created: "",
            five_digit_pin: "",
            registration_successful: "",
            registered_successful: "",
            next_to_add_card: "",
            confirm_pin: "",
            PIN_5_digit: "",
            PIN_and_confirm_do_not_match: "",
            create_print_ID: "",
            skip_id_setup: "",
            wrong_touch_ID: "",
            too_many_attempts: "",
            setup_PIN: "",
            token_expired: "",
            fail_attempts: "",
            wrong_PIN: "",
            required: "",
            quantity_invalid: "",
            park_catalogue_product_out_of_stock: "",
            invalid_phone_format: "",
            gps_unavailable: "",
            park_api_unexpected_error: "",
            park_api_email_already_exists: "",
            park_api_touch_ID_not_available: "",
            park_api_user_id_no_match: "",
            park_api_minimum_age: "",
            park_api_date_of_birth: "",
            park_api_card_number_no_match: "",
            firstName_invalid_characters: "",
            lastName_invalid_characters: "",
            park_api_invalid_postcode: "",
            email_invalid_email: "",
            confirmEmail_equal_to: "",
            PIN_4_digits: "",
            park_api_invalid_number: "",
            park_api_10_digits: "",
            password_invalid_characters: "",
            park_api_password_no_match: "",
            park_api_serial_number_no_match: "",
            park_api_enter_userid_password_to_change_pin: "",
            current_email: "",
            enter_postcode_or_search_for_an_address: "",
            enter_address_manually: "",
            add_card_important_card_info: "",
            basket_form_checkout_current_product: "",
            basket_form_no_products_basket: "",
            basket_form_no_card_available: "",
            account_management_confirm_user_of_card: "",
            account_management_confirm_user: "",
            account_management_new_ecode: "",
            account_management_card_added_to_wallet: "",
            account_management_to_add_card_register: "",
            account_management_register_addcard: "",
            account_management_already_have_account: "",
            ForgotPassword_en_properties: "Forgotten Password?",
            add_card_add_new_card: "",
            add_card_use_saved_card: "",
            order_datacash_payment_capture_default_cardNumber_label: "",
            order_datacash_payment_capture_default_label_save_card: "",
            order_confirmation_default_p_title: "",
            order_confirmation_default_p_strapline: "",
            order_confirmation_default_confirmation_SMS: "",
            enter_account_password_to_view_card: "",
            account_management_refund_full_value: "",
            account_management_full_refund_being_processed: "",
            account_management_click_to_refund_balance: "",
            account_management_no_cards_available: "",
            account_management_set_default_card: "",
            purchasemastercard_form_label_card_details: "",
            order_confirmation_card_tfoot: "",
            empty_top_up_card_later: "",
            use_current_location: "",
            account_management_logout: "",
            PIN_enter_5_digit: "",
            suspend_card_portlet_suspend_card: "",
            remove_card_confirm: ""
        },
    };
    return AppConfig;
}());

//# sourceMappingURL=appConfig.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tagNameList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var tagNameList = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'article', 'aside', 'details', 'figcaption', 'figure',
    'footer', 'header', 'hgroup', 'menu', 'nav', 'section'];
var Utils = (function () {
    function Utils() {
        throw new Error('Error: Instantiation failed: '
            + 'Use Utils.methodName(...) instead of new.');
    }
    Utils.isNotNull = function (obj) {
        return (obj !== undefined)
            && (obj !== null);
    };
    Utils.isNull = function (obj) {
        return !this.isNotNull(obj);
    };
    Utils.lengthGreaterThan0 = function (obj) {
        return (obj !== undefined)
            && (obj !== null)
            && (obj.length > 0);
    };
    Utils.convertCurrency = function (obj) {
        var currency_symbols = {
            'USD': '$',
            'EUR': '€',
            'CRC': '₡',
            'GBP': '£',
            'ILS': '₪',
            'INR': '₹',
            'JPY': '¥',
            'KRW': '₩',
            'NGN': '₦',
            'PHP': '₱',
            'PLN': 'zł',
            'PYG': '₲',
            'THB': '฿',
            'UAH': '₴',
            'VND': '₫',
        };
        if (this.isNotNull(currency_symbols[obj])) {
            return currency_symbols[obj];
        }
    };
    Utils.normalizeUrl = function (url) {
        if (this.isNotNull(url)) {
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                if (url.startsWith('/')) {
                    return 'https://www.love2shop.co.uk' + url;
                }
                return 'http://' + url;
            }
        }
        return url;
    };
    Utils.getTextContent = function (n) {
        var rv = '';
        if (n.nodeType == 3) {
            rv = n.nodeValue;
        }
        else {
            for (var i = 0; i < n.childNodes.length; i++) {
                rv += Utils.getTextContent(n.childNodes[i]);
            }
            var d = getComputedStyle(n).getPropertyValue('display');
            if (d == '') {
                if (tagNameList.indexOf(n.tagName.toLowerCase()) !== -1) {
                    rv += "\n";
                }
            }
            else if (d.match(/^block/) || d.match(/list/) || n.tagName == 'BR') {
                rv += "\n";
            }
        }
        return rv;
    };
    ;
    return Utils;
}());

//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuththenticationGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authenticationDataSharing_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__screens_myShoppingBasket_myShoppingBasketSharingData_services__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appConfig__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__screens_CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuththenticationGuardService = (function () {
    function AuththenticationGuardService() {
        var _this = this;
        this.shouldRedirectTo$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.invalidTokenState$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.invalidToken$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.authToken = "";
        this.isLoggedin = false;
        this.userLogout$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // second page (listen for the user created event)
        this.userLogout$.subscribe(function (userEventData) {
            // userEventData is an array of parameters, so grab our first and only arg
            _this.Logout();
        });
        this.invalidToken$.take(1).subscribe(function (data) {
            _this.Logout(false);
            _this.invalidTokenState$.next(true);
            _this.shouldRedirectTo$.next({
                page: 'WelcomePage',
                root: true
            });
            setTimeout(function () {
                location.reload();
            }, __WEBPACK_IMPORTED_MODULE_6__appConfig__["a" /* AppConfig */].Configuration.HttpService.time2ShowToast);
        });
        this.initialize();
    }
    AuththenticationGuardService.prototype.initialize = function () {
        this.authToken = window.localStorage.getItem('token') || null;
        if (this.authToken == null) {
            this.isLoggedin = false;
        }
        else {
            this.isLoggedin = true;
            this.tokenCreatedTime = +window.localStorage.getItem('tokenCreatedTime');
            __WEBPACK_IMPORTED_MODULE_1__authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail = window.localStorage.getItem('lastLoggedIn');
        }
    };
    AuththenticationGuardService.prototype.getToken = function () {
        return 'Bearer ' + this.authToken;
    };
    AuththenticationGuardService.prototype.storeUserCredentials = function (response) {
        this.authToken = response.token;
        __WEBPACK_IMPORTED_MODULE_1__authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail = response.emailAddress;
        this.tokenCreatedTime = new Date().getTime();
        window.localStorage.setItem('token', this.authToken);
        window.localStorage.setItem('tokenCreatedTime', JSON.stringify(this.tokenCreatedTime));
        window.localStorage.setItem('lastLoggedIn', response.emailAddress);
        this.isLoggedin = true;
        this.invalidTokenState$.next(false);
    };
    AuththenticationGuardService.prototype.destroyUserCredentials = function () {
        this.destroyUserData();
        __WEBPACK_IMPORTED_MODULE_1__authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail = null;
    };
    AuththenticationGuardService.prototype.isTokenRefresh = function () {
        // always refresh token
        //return true;
        var now = new Date().getTime();
        var timeDiff = now - this.tokenCreatedTime;
        // diff minutes =  timeDiff / (1000 * 60)
        var diffMins = Math.ceil(timeDiff / 60000);
        // greater than 5 minutes = diffMins > 5 * 60 = 300
        var isGreaterThan5Minutes = diffMins > 300;
        // less than 30 minutes = diffMins < 30 * 60 = 1800
        var isLessThan30Minutes = diffMins <= 1800;
        return isGreaterThan5Minutes && isLessThan30Minutes;
    };
    AuththenticationGuardService.prototype.authenticated = function (response) {
        if (response.token !== null) {
            this.storeUserCredentials(response);
            return {
                login: true
            };
        }
        else {
            this.destroyUserCredentials();
            return {
                login: false,
                errorMessage: "User logout!"
            };
        }
    };
    AuththenticationGuardService.prototype.isAuthenticated = function () {
        return this.isLoggedin;
    };
    AuththenticationGuardService.prototype.Logout = function (cleanAll) {
        if (cleanAll === void 0) { cleanAll = true; }
        __WEBPACK_IMPORTED_MODULE_5_jquery___default()('.app-root').removeClass('not-show-tab');
        __WEBPACK_IMPORTED_MODULE_4__screens_myShoppingBasket_myShoppingBasketSharingData_services__["a" /* MyShoppingBasketSharingDataService */].getInstance().resetState();
        __WEBPACK_IMPORTED_MODULE_7__screens_CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().IsActiveYourCardDetailsPage = false;
        __WEBPACK_IMPORTED_MODULE_7__screens_CardManagement_cardDetails_yourCardDetails_yourCardDetailsSharingData_services__["a" /* YourCardDetailsSharingDataService */].getInstance().resetState();
        if (cleanAll) {
            this.destroyUserCredentials();
        }
        else {
            this.destroyUserData();
        }
    };
    AuththenticationGuardService.prototype.destroyUserData = function () {
        this.authToken = null;
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('tokenCreatedTime');
        this.isLoggedin = false;
        this.tokenCreatedTime = null;
    };
    AuththenticationGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuththenticationGuardService);
    return AuththenticationGuardService;
}());

//# sourceMappingURL=authenticationGuard.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationDataSharingService; });
var AuthenticationDataSharingService = (function () {
    function AuthenticationDataSharingService() {
        this.loginEmail = '';
        if (AuthenticationDataSharingService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use AuthenticationDataSharingService.getInstance() instead of new.');
        }
        AuthenticationDataSharingService._instance = this;
    }
    AuthenticationDataSharingService.getInstance = function () {
        return AuthenticationDataSharingService._instance;
    };
    // tslint:disable-next-line:member-ordering
    AuthenticationDataSharingService._instance = new AuthenticationDataSharingService();
    return AuthenticationDataSharingService;
}());

//# sourceMappingURL=authenticationDataSharing.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPINPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verifyPIN_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_services_pinCodeService_pinCode_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__framework_login_authenticationDataSharing_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_login_logoutData_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_numeric_directive__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MAX_TIME_ATTEMPT = 3;
var VerifyPINPage = (function () {
    function VerifyPINPage(platform, formBuilder, alertCtrl, routeManager, navCtrl, params, renderer, viewCtrl, logoutDataService, authService, touchId) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.routeManager = routeManager;
        this.navCtrl = navCtrl;
        this.params = params;
        this.renderer = renderer;
        this.viewCtrl = viewCtrl;
        this.logoutDataService = logoutDataService;
        this.authService = authService;
        this.touchId = touchId;
        this.model = {};
        this.VerifyPINActive = true;
        this.VerifyTouchActive = false;
        this.wrongPinMessage = 'PIN is not correct.';
        this.focusInInput = false;
        this.five_digit_pin = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.five_digit_pin;
        this.wrong_touch_ID = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.wrong_touch_ID;
        this.too_many_attempts = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.too_many_attempts;
        this.token_expired = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.token_expired;
        this.fail_attempts = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.fail_attempts;
        this.wrong_PIN = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.wrong_PIN;
        this.PIN_enter_5_digit = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.PIN_enter_5_digit;
        this.formErrors = {
            'pin1': '',
            'pin2': '',
            'pin3': '',
            'pin4': '',
            'pin5': ''
        };
        this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
        this.buildForm();
        this.error = false;
        this.timeAttemp = 0;
        this.showPinWhenValidToken$ = authService.invalidTokenState$
            .map(function (value) { return !value; });
        this.callFrom = this.params.get('callFrom');
    }
    VerifyPINPage.prototype.closeModal = function () {
        this.authService.invalidTokenState$.next(false);
        this.dismiss();
    };
    VerifyPINPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var vPinSvc = __WEBPACK_IMPORTED_MODULE_4__verifyPIN_service__["a" /* VerifyPINService */].getInstance();
        var touchIDState = vPinSvc.touchIDState;
        this.five_digit_pin = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.five_digit_pin;
        if (touchIDState === true && (!this.callFrom || this.callFrom !== 'ChangeTouchID')) {
            this.touchId.isAvailable().then(function (res) {
                _this.VerifyTouchActive = true;
                return _this.touchId.show({
                    clientId: 'Touch ID for Love2Shop',
                    clientSecret: 'myPassword',
                    disableBackup: true,
                });
            })
                .then(function (res) {
                _this.pauseSubVerifyPIN.unsubscribe();
                _this.pauseSubVerifyPIN = undefined;
                __WEBPACK_IMPORTED_MODULE_4__verifyPIN_service__["a" /* VerifyPINService */].getInstance().VisibleScreen = false;
                _this.viewCtrl.dismiss();
            })
                .catch(function (err) {
                _this.VerifyTouchActive = false;
                if (err === '-1' || err === '-8') {
                    _this.showAlertTouchIdFail();
                }
            });
        }
        else {
            this.VerifyPINActive = true;
        }
        if (!this.pauseSubVerifyPIN) {
            this.pauseSubVerifyPIN = this.platform.pause.subscribe(function (res) {
                if (_this.callFrom && _this.callFrom === 'ChangeTouchID') {
                    return;
                }
                _this.dismiss();
            });
        }
    };
    VerifyPINPage.prototype.dismiss = function () {
        if (this.VerifyPINActive === true && this.VerifyTouchActive === false) {
            __WEBPACK_IMPORTED_MODULE_4__verifyPIN_service__["a" /* VerifyPINService */].getInstance().VisibleScreen = false;
            this.viewCtrl.dismiss();
            this.VerifyPINActive = false;
            if (this.alertPinWrong) {
                this.alertPinWrong.dismiss();
            }
            if (this.alertTouchWrong) {
                this.alertTouchWrong.dismiss();
            }
        }
    };
    VerifyPINPage.prototype.verifyPINCode = function () {
        if (this.verifyPINForm.valid) {
            var inputPin = this.verifyPINForm.value;
            var currentPin = __WEBPACK_IMPORTED_MODULE_6__framework_services_pinCodeService_pinCode_service__["a" /* PinCodeService */].getInstance()
                .getPinCode(__WEBPACK_IMPORTED_MODULE_7__framework_login_authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance()
                .loginEmail);
            var isOK = __WEBPACK_IMPORTED_MODULE_8__framework_services_utilities_utilities__["a" /* Utils */].isNotNull(currentPin);
            if (isOK === true) {
                isOK = currentPin.pin1 === inputPin.pin1;
            }
            if (isOK === true) {
                isOK = currentPin.pin2 === inputPin.pin2;
            }
            if (isOK === true) {
                isOK = currentPin.pin3 === inputPin.pin3;
            }
            if (isOK === true) {
                isOK = currentPin.pin4 === inputPin.pin4;
            }
            if (isOK === true) {
                isOK = currentPin.pin5 === inputPin.pin5;
            }
            if (isOK === true) {
                this.pauseSubVerifyPIN.unsubscribe();
                this.pauseSubVerifyPIN = undefined;
                __WEBPACK_IMPORTED_MODULE_4__verifyPIN_service__["a" /* VerifyPINService */].getInstance().VisibleScreen = false;
                this.viewCtrl.dismiss();
                if (!this.callFrom || this.callFrom !== 'ChangeTouchID') {
                    if (__WEBPACK_IMPORTED_MODULE_4__verifyPIN_service__["a" /* VerifyPINService */].getInstance().IsChangeTouchScreen === true) {
                        this.touchId.isAvailable().then(function (res) {
                            // Have touch available then still stay in Change Touch page
                        })
                            .catch(function (err) {
                            // No touch available then redirect to setting page.
                            __WEBPACK_IMPORTED_MODULE_4__verifyPIN_service__["a" /* VerifyPINService */].getInstance().verifyPINClosedInChangeTouch.emit(true);
                        });
                    }
                }
            }
            else {
                this.timeAttemp++;
                if (this.timeAttemp >= MAX_TIME_ATTEMPT) {
                    this.error = true;
                    this.wrongPinMessage = this.fail_attempts;
                }
                this.showWrongPinAlert();
            }
        }
    };
    VerifyPINPage.prototype.showWrongPinAlert = function () {
        var _this = this;
        this.alertPinWrong = this.alertCtrl.create({
            title: this.wrong_PIN,
            message: this.wrongPinMessage,
            cssClass: 'wrong-pin l2s-alert--flat l2s-alert--default',
            buttons: [{
                    text: 'OK',
                    cssClass: 'main-button',
                    handler: function (data) {
                        _this.buildForm();
                    }
                }]
        });
        this.alertPinWrong.present();
    };
    VerifyPINPage.prototype.redirectLogin = function () {
        this.logoutDataService.logout()
            .subscribe(function (res) {
        });
        this.authService.Logout();
        this.pauseSubVerifyPIN.unsubscribe();
        this.pauseSubVerifyPIN = undefined;
        __WEBPACK_IMPORTED_MODULE_4__verifyPIN_service__["a" /* VerifyPINService */].getInstance().VisibleScreen = false;
        this.viewCtrl.dismiss();
        __WEBPACK_IMPORTED_MODULE_4__verifyPIN_service__["a" /* VerifyPINService */].getInstance().verifyPINClosed.emit(true);
        location.reload();
    };
    VerifyPINPage.prototype.updateInputOnKey = function (event, target) {
        if (event.key !== 'Backspace' && target && typeof target.setFocus === 'function') {
            if (typeof event.stopImmediatePropagation === 'function') {
                event.stopPropagation();
            }
            target.setFocus();
        }
    };
    VerifyPINPage.prototype.buildForm = function () {
        var _this = this;
        this.verifyPINForm = this.formBuilder.group({
            'pin1': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin1'),
                    Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()
                ]],
            'pin2': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin2'),
                    Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()
                ]],
            'pin3': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin3'),
                    Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()
                ]],
            'pin4': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin4'),
                    Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()
                ]],
            'pin5': ['', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__framework_validations_validator_required_directive__["a" /* requireValidator */])('pin5'),
                    Object(__WEBPACK_IMPORTED_MODULE_11__framework_validations_validator_numeric_directive__["a" /* numericValidator */])()
                ]]
        }, {
            validator: {
                updateOn: 'blur'
            }
        });
        this.verifyPINForm.statusChanges.subscribe(function () {
            if (_this.textInputs) {
                _this.textInputs.forEach(function (input) { return input && input._inputUpdated && input._inputUpdated(); });
            }
        });
    };
    VerifyPINPage.prototype.errorMessage = function (path) {
        var control = this.verifyPINForm.get(path);
        var requiredMsg = __WEBPACK_IMPORTED_MODULE_13__framework_appConfig__["a" /* AppConfig */].Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }
        if (path === 'pin1' || path === 'pin2' || path === 'pin3' || path === 'pin4' || path === 'pin5') {
            if (control.hasError('required')) {
                return control.getError('required');
            }
            else {
                if (control.hasError('key')) {
                    return control.getError('key');
                }
            }
        }
    };
    VerifyPINPage.prototype.showAlertTouchIdFail = function () {
        this.alertTouchWrong = this.alertCtrl.create({
            title: this.wrong_touch_ID,
            message: this.too_many_attempts,
            cssClass: 'wrong-pin',
            buttons: [{
                    text: 'OK'
                }]
        });
        this.alertTouchWrong.present();
    };
    VerifyPINPage.prototype.patchValue = function (controlName, value, updateState) {
        if (updateState === void 0) { updateState = false; }
        var control = this.verifyPINForm.get(controlName);
        control.patchValue(value);
        if (updateState) {
            control.markAsTouched();
            control.markAsDirty();
        }
    };
    VerifyPINPage.prototype.onPinChange = function (pin) {
        var pin1 = pin.substr(0, 1);
        var pin2 = pin.substr(1, 1);
        var pin3 = pin.substr(2, 1);
        var pin4 = pin.substr(3, 1);
        var pin5 = pin.substr(4, 1);
        this.patchValue('pin1', pin1, true);
        if (pin.length > 1) {
            this.patchValue('pin2', pin2, true);
        }
        else {
            this.patchValue('pin2', pin2);
        }
        if (pin.length > 2) {
            this.patchValue('pin3', pin3, true);
        }
        else {
            this.patchValue('pin3', pin3);
        }
        if (pin.length > 3) {
            this.patchValue('pin4', pin4, true);
        }
        else {
            this.patchValue('pin4', pin4);
        }
        if (pin.length > 4) {
            this.patchValue('pin5', pin5, true);
        }
        else {
            this.patchValue('pin5', pin5);
        }
    };
    VerifyPINPage.prototype.onFocusInput = function (event) {
        this.focusInInput = true;
    };
    VerifyPINPage.prototype.focusoutInput = function (event) {
        this.focusInInput = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* TextInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], VerifyPINPage.prototype, "textInputs", void 0);
    VerifyPINPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verifyPIN',template:/*ion-inline-start:"D:\L2S-New2310\src\spa\+screens\AccountManagement\verifyPIN\verifyPIN.html"*/'<ion-content padding class="content-container verify--container"  [ngClass]="{\'inputFocusIn\': focusInInput }">\n  <ng-container *ngIf="(showPinWhenValidToken$ | async); else showDismiss">\n    <ion-grid class="main-content content-wrapper">\n      <ion-row>\n        <ion-col text-center class="p-t-30">\n          <img class="l2s-logo" src="assets/images/l2s-logo.png" />\n        </ion-col>\n      </ion-row>\n      <form [formGroup]="verifyPINForm" autocomplete="off">\n        <ion-row>\n          <p text-center class="text-14">{{PIN_enter_5_digit}}</p>\n        </ion-row>\n        <ion-row class="m-b-15">\n          <ptt-pin (pinChange)="onPinChange($event)" (focusIntoInput)="onFocusInput($event)" (focusOutInput)="focusoutInput($event)"></ptt-pin>\n        </ion-row>\n        <ion-item-divider ion-item light no-lines class="error"\n                          *ngIf="(verifyPINForm.get(\'pin1\').dirty && !verifyPINForm.get(\'pin1\').valid) ||\n                               (verifyPINForm.get(\'pin2\').dirty && !verifyPINForm.get(\'pin2\').valid) ||\n                               (verifyPINForm.get(\'pin3\').dirty && !verifyPINForm.get(\'pin3\').valid) ||\n                               (verifyPINForm.get(\'pin4\').dirty && !verifyPINForm.get(\'pin4\').valid) ||\n                               (verifyPINForm.get(\'pin5\').dirty && !verifyPINForm.get(\'pin5\').valid)\n                        ">\n          <p>{{PIN_5_digit}}</p>\n        </ion-item-divider>\n      </form>\n      <ion-row *ngIf=\'timeAttemp>=1\'>\n        <ion-col text-center>\n          <p text-center class="gray text-14">\n            Can\'t remember your PIN\n          </p>\n          <p class="text-link-item" text-center>\n            <a class="text-link-item"  (click)="redirectLogin()">Enter username / password</a></p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-row class="footer-content footer-wrapper">\n      <ion-col>\n        <button ion-button large *ngIf=\'timeAttemp<3\' [disabled]="!verifyPINForm.valid" (click)="verifyPINCode()">Next</button>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  <ng-template #showDismiss>\n    <ion-grid class="tp-flex-container align-between tp-flex-columns tp-full-height">\n      <ion-row class="tp-flex-center-col">\n        <ion-col text-center class="text-14">\n          {{token_expired}}\n        </ion-col>\n      </ion-row>\n      <ion-row class=" ">\n        <ion-col>\n          <button ion-button large (click)="closeModal()">Close</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-template>\n</ion-content>'/*ion-inline-end:"D:\L2S-New2310\src\spa\+screens\AccountManagement\verifyPIN\verifyPIN.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__framework_login_logoutData_service__["a" /* LogoutDataService */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__framework_services_routeManager_routeManager_service__["a" /* RouteManagerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_9__framework_login_logoutData_service__["a" /* LogoutDataService */],
            __WEBPACK_IMPORTED_MODULE_10__framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], VerifyPINPage);
    return VerifyPINPage;
}());

//# sourceMappingURL=verifyPIN.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenyCopyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DenyCopyDirective = (function () {
    function DenyCopyDirective() {
    }
    DenyCopyDirective.prototype.preventDefault = function (e) {
        e.preventDefault();
    };
    DenyCopyDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[deny-copy]',
            host: {
                '(cut)': 'preventDefault($event)',
                '(paste)': 'preventDefault($event)',
                '(copy)': 'preventDefault($event)',
            }
        })
    ], DenyCopyDirective);
    return DenyCopyDirective;
}());

//# sourceMappingURL=directive-deny-copy.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyInteger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlyInteger = (function () {
    function OnlyInteger(el) {
        this.el = el;
    }
    OnlyInteger.prototype.eventHandler = function (e) {
        if (e && e.triggerByOnlyInteger) {
            return;
        }
        var input = (event.target);
        this.restrict(input);
    };
    OnlyInteger.prototype.restrict = function (input) {
        if (input && input.value) {
            var value = parseInt(input.value, 10);
            if (isNaN(value)) {
                value = 0;
            }
            input.value = value;
            this.fireEvent(input, 'input');
        }
    };
    OnlyInteger.prototype.fireEvent = function (element, event) {
        if (document.createEventObject) {
            // dispatch for IE
            var evt = document.createEventObject();
            evt['triggerByOnlyInteger'] = true;
            return element.fireEvent('on' + event, evt);
        }
        else {
            // dispatch for firefox + others
            var evt = document.createEvent("HTMLEvents");
            evt['triggerByOnlyInteger'] = true;
            evt.initEvent(event, true, true); // event type,bubbling,cancelable
            return !element.dispatchEvent(evt);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('keypress', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('keyup', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('change', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('focus', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('focus', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('focusout', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyInteger.prototype, "eventHandler", null);
    OnlyInteger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[OnlyInteger]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], OnlyInteger);
    return OnlyInteger;
}());

//# sourceMappingURL=onlyInteger.directive.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocalStorageServiceKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var LocalStorageServiceKey;
(function (LocalStorageServiceKey) {
    LocalStorageServiceKey[LocalStorageServiceKey["UserSettingShowPinCode4UnlockApp"] = 0] = "UserSettingShowPinCode4UnlockApp";
    LocalStorageServiceKey[LocalStorageServiceKey["ApplicationPinCode"] = 1] = "ApplicationPinCode";
    LocalStorageServiceKey[LocalStorageServiceKey["TestingLocalStorageServiceKey"] = 2] = "TestingLocalStorageServiceKey";
    LocalStorageServiceKey[LocalStorageServiceKey["TouchIDConfig"] = 3] = "TouchIDConfig";
})(LocalStorageServiceKey || (LocalStorageServiceKey = {}));
var LocalStorageService = (function () {
    function LocalStorageService() {
        if (LocalStorageService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use LocalStorageService.getInstance() instead of new.');
        }
        LocalStorageService._instance = this;
    }
    LocalStorageService.prototype.set = function (key, value) {
        window.localStorage.setItem(key + '', JSON.stringify(value));
    };
    LocalStorageService.prototype.get = function (key) {
        return JSON.parse(window.localStorage.getItem(key + '') || null);
    };
    LocalStorageService.prototype.remove = function (key) {
        window.localStorage.removeItem(key + '');
    };
    LocalStorageService.getInstance = function () {
        return LocalStorageService._instance;
    };
    // tslint:disable-next-line:member-ordering
    LocalStorageService._instance = new LocalStorageService();
    return LocalStorageService;
}());

//# sourceMappingURL=localStorage.service.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PttPinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var id = 1;
var PttPinComponent = (function () {
    function PttPinComponent() {
        this.type = 'tel';
        this.pinChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.focusIntoInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.focusOutInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.compId = 'ptt-pin-' + id++;
        this.pinValue = '';
    }
    Object.defineProperty(PttPinComponent.prototype, "value", {
        get: function () {
            return this.pinValue;
        },
        set: function (v) {
            this.pinValue = v.toString().substr(0, 5);
            this.calcPIN();
        },
        enumerable: true,
        configurable: true
    });
    PttPinComponent.prototype.calcPIN = function () {
        this.pin1 = this.pinValue.substr(0, 1);
        this.pin2 = this.pinValue.substr(1, 1);
        this.pin3 = this.pinValue.substr(2, 1);
        this.pin4 = this.pinValue.substr(3, 1);
        this.pin5 = this.pinValue.substr(4, 1);
    };
    PttPinComponent.prototype.setFocus = function () {
        if (this.input) {
            this.input.nativeElement.focus();
        }
    };
    PttPinComponent.prototype.updatePIN = function (event) {
        event.preventDefault();
        this.value = event.target.value;
        this.pinChange.emit(this.value);
    };
    PttPinComponent.prototype.focusInput = function (event) {
        this.focusIntoInput.emit(this.value);
    };
    PttPinComponent.prototype.focusoutInput = function (event) {
        this.focusOutInput.emit(this.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PttPinComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], PttPinComponent.prototype, "value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], PttPinComponent.prototype, "pinChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], PttPinComponent.prototype, "focusIntoInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], PttPinComponent.prototype, "focusOutInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('inp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PttPinComponent.prototype, "input", void 0);
    PttPinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ptt-pin',template:/*ion-inline-start:"D:\L2S-New2310\src\libs\ptt-pin\ptt-pin.component.html"*/'<div class="ptt-pin-input">\n\n  <label class="ptt-pin-input-wrapper" [for]="compId">\n\n    <ion-row>\n\n      <ion-col col-20>\n\n        <span class="ptt-pin-input-value password only-password">{{ pin1 }}</span>\n\n      </ion-col>\n\n      <ion-col col-20>\n\n        <span class="ptt-pin-input-value password only-password">{{ pin2 }}</span>\n\n      </ion-col>\n\n      <ion-col col-20>\n\n        <span class="ptt-pin-input-value password only-password">{{ pin3 }}</span>\n\n      </ion-col>\n\n      <ion-col col-20>\n\n        <span class="ptt-pin-input-value password only-password">{{ pin4 }}</span>\n\n      </ion-col>\n\n      <ion-col col-20>\n\n        <span class="ptt-pin-input-value password only-password">{{ pin5 }}</span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </label>\n\n  <input type="tel" class="ptt-pin" maxlength="5" [id]="compId" (input)="updatePIN($event)" (focusin)="focusInput($event)"  (focusout)="focusoutInput($event)"\n\n         #inp>\n\n</div>'/*ion-inline-end:"D:\L2S-New2310\src\libs\ptt-pin\ptt-pin.component.html"*/,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        })
    ], PttPinComponent);
    return PttPinComponent;
}());

//# sourceMappingURL=ptt-pin.component.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spa_framework_services_loadingIndicatorService_loadingIndicator_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spa_framework_services_mobileDeviceService_mobileDeviceService_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spa_framework_services_toastMessageService_toastMessage_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fingerprint_aio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__spa_screens_AccountManagement_verifyPIN_verifyPIN_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__spa_screens_AccountManagement_verifyPIN_verifyPIN__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__spa_framework_services_pinCodeService_pinCode_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__spa_framework_login_authenticationDataSharing_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__spa_framework_login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__spa_framework_services_utilities_utilities__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var BASE_URL = 'https://www.love2shop.co.uk';
var BUTTON_DEBOUCE_TIME_MS = '800';
var BUTTON_DISABLE_CLASS_TAG_NAMES = ['button', 'li'];
var BUTTON_DISABLE_CLASS = 'l2s-click-disabled';
var BUTTON_DISABLE_EXCEPT_CLASS = 'l2s-no-debouce';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app, iab, loadingCtrl, keyboard, modalCtrl, 
        // private screenOrientation: ScreenOrientation,
        toastCtrl, authService, touchId, renderer) {
        var _this = this;
        this.app = app;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.keyboard = keyboard;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.renderer = renderer;
        this.rootPage = 'WelcomePage';
        this.touchId = touchId;
        var vPinSvc = __WEBPACK_IMPORTED_MODULE_9__spa_screens_AccountManagement_verifyPIN_verifyPIN_service__["a" /* VerifyPINService */].getInstance();
        platform.pause.subscribe(function () {
        });
        platform.resume.subscribe(function () {
            var auth = _this.authService.isAuthenticated();
            var needToUpdatePIN = __WEBPACK_IMPORTED_MODULE_11__spa_framework_services_pinCodeService_pinCode_service__["a" /* PinCodeService */].getInstance().needSetupPinCode(__WEBPACK_IMPORTED_MODULE_12__spa_framework_login_authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail);
            var touchIDState = vPinSvc.touchIDState;
            if (auth && vPinSvc.VisibleScreen === false && vPinSvc.byPassVerifyPin === false && needToUpdatePIN === false && touchIDState !== undefined) {
                var verifyScreenModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__spa_screens_AccountManagement_verifyPIN_verifyPIN__["a" /* VerifyPINPage */], {}, {
                    cssClass: 'touchable-page'
                });
                verifyScreenModal.onDidDismiss(function () {
                    vPinSvc.VisibleScreen = false;
                });
                vPinSvc.VisibleScreen = true;
                verifyScreenModal.present();
            }
            vPinSvc.byPassVerifyPin = false;
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        platform.registerBackButtonAction(function (event) {
            try {
                if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()("ion-alert").length === 1)
                    return;
                if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()("ion-loading").length === 1)
                    return;
                var screenAllowBackButton = "Where2SpendInStoreMapPage,CheckBalanceStep1Page,AddMyCardPage,";
                screenAllowBackButton += "RegisterStep1Page,RegisterStep2Page,RegisterStep3Page,";
                screenAllowBackButton += "LoginPage,Where2SpendOnlinePage,Exchang4SpendOnlinePage,";
                screenAllowBackButton += "MasterCardExchangePage,OrderMasterCardExchangeStep1,";
                screenAllowBackButton += "ViewCardStatementPage,Where2SpendInStoreListPage,";
                screenAllowBackButton += "LocationStoresPage,MoreInfoPage,RefundValuePage,";
                screenAllowBackButton += "AddCardNumberPage,HolidaysPage,Exchange4ECodePage,";
                screenAllowBackButton += "SettingsPage,ExchangeEcodeAllBarOneEcodePage,";
                screenAllowBackButton += "MyShoppingBasketPage,CategoryStoresPage,";
                screenAllowBackButton += "OrderEcodeStep1,Exchange4DiningECodePage,";
                screenAllowBackButton += "Exchange4OtherGiftCardsPage,BuyADiscountedGiftCardPage,";
                screenAllowBackButton += "BuyDiscountedSupperGiftCardPage,BuySpecSaversPage,";
                screenAllowBackButton += "AboutPage,DeliveryInformationPage,FAQPage,ReturnRefundPage,";
                screenAllowBackButton += "BusinessEnquiriesPage,ContactUsPage,EMoneyTrustPage,";
                screenAllowBackButton += "PrivacyPolicyPage,TermsConditionsPage,AccountDetailsPage,";
                screenAllowBackButton += "ChangeEmailPage,ChangePasswordPage,ChangePINPage,ChangeTouchIDPage,";
                screenAllowBackButton += "EditAccountPage,ChangePaymentMethodsPage,OrderSupermarketStep1,";
                screenAllowBackButton += "OrderDiscountGiftCardReviewYourOrder,OrderDiscountGiftCardDeliveryOption,";
                screenAllowBackButton += "OrderDiscountGiftCardPaymentCardPage,OrderDiscountGiftCardChooseCardDesign,";
                screenAllowBackButton += "OrderDiscountGiftCardExtraGiftWallets,MasterCardInfoPage,";
                screenAllowBackButton += "BuyDiscountedGiftCardPage,OrderDiscountGiftCard3DSPage,";
                screenAllowBackButton += "AddCardPhysicalMasterCardPage,AddCardSainsburysPage,";
                screenAllowBackButton += "AddCardTescoPage,AddFlexCashPage,AddFlexECodePage,";
                screenAllowBackButton += "AddPinToCardPage,AddPinToCodePage,GiftCardExchangePage,";
                screenAllowBackButton += "OrderDiscountGiftCardAddPersonalMessage,";
                screenAllowBackButton += "OrderExchangeGiftCardStep2,OrderDiscountGiftCardUpdateDeliveryOptionPage,";
                screenAllowBackButton += "OrderExchangeGiftCardStep1,UpdatePINPage,ForgotPasswordPage,";
                screenAllowBackButton += "AmountTopUpPage,viewAlertSettingsPage,MakeTopUptPage,";
                screenAllowBackButton += "CookiePage,";
                var nav = _this.app.getActiveNavs();
                var activeViewName = "";
                if (__WEBPACK_IMPORTED_MODULE_15__spa_framework_services_utilities_utilities__["a" /* Utils */].isNotNull(nav)) {
                    activeViewName = nav[0].getActive().id;
                }
                if (screenAllowBackButton.indexOf(activeViewName + ",") > -1) {
                    // example selector: '#Where2SpendInStoreMapPage-back-button'
                    __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#" + activeViewName + "-back-button").click();
                    return;
                }
                if (event && event.preventDefault)
                    event.preventDefault();
            }
            catch (error) {
                console.log("android back button error");
                console.log(error);
            }
        }, 999);
        __WEBPACK_IMPORTED_MODULE_4__spa_framework_services_loadingIndicatorService_loadingIndicator_service__["a" /* LoadingIndicatorService */].getInstance()
            .initializeLoadingIndicator(this.loadingCtrl);
        __WEBPACK_IMPORTED_MODULE_6__spa_framework_services_toastMessageService_toastMessage_service__["a" /* ToastMessageService */].getInstance()
            .initializeToastMessage(this.toastCtrl);
        __WEBPACK_IMPORTED_MODULE_5__spa_framework_services_mobileDeviceService_mobileDeviceService_service__["a" /* MobileDeviceService */].getInstance()
            .saveDeviceType(platform);
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.shouldRedirectTo$.subscribe(function (res) {
            _this.navCtrl ? (res.root ? _this.navCtrl.setRoot(res.page, res.params) :
                _this.navCtrl.push(res.page, res.params)) : false;
        });
    };
    MyApp.prototype.handleAnchorClick = function (event) {
        event.stopPropagation();
        var target = !!event && event.target;
        if (!target) {
            return;
        }
        if (this._isAnchorElement(target) && !this._isIonicElement(target)) {
            event.preventDefault();
            var href = target.getAttribute('href');
            var url = this._normalizeUrl(href);
            if (url) {
                var browser = this.iab.create(url, "_system", "location=true");
            }
        }
    };
    /**
     * apply debouce time for all element listed in BUTTON_DISABLE_CLASS_TAG_NAMES
     * and classes not contains BUTTON_DISABLE_EXCEPT_CLASS
     *
     * the debouce time value can be set up by const BUTTON_DEBOUCE_TIME_MS
     */
    //   @HostListener('document:click', ['$event'])
    //   onClickListener(event) {
    //
    //     const target = <HTMLElement>event.target;
    //     if (this.canApplyDebouceClick(target)) {
    //       if (!target.classList.contains(BUTTON_DISABLE_CLASS)) {
    //         this.renderer.addClass(target, BUTTON_DISABLE_CLASS);
    //         setTimeout(() => {
    //           this.renderer.removeClass(target, BUTTON_DISABLE_CLASS);
    //         }, BUTTON_DEBOUCE_TIME_MS);
    //       }
    //     }
    //   }
    MyApp.prototype.canApplyDebouceClick = function (target) {
        var tagName = target.tagName.toLowerCase();
        var disabled = target.hasAttribute('disabled') || target.classList.contains(BUTTON_DISABLE_CLASS);
        var validTagName = BUTTON_DISABLE_CLASS_TAG_NAMES.indexOf(tagName) > -1;
        var validClass = !target.classList.contains(BUTTON_DISABLE_EXCEPT_CLASS);
        return target && validTagName && validClass && !disabled;
    };
    MyApp.prototype.keyEvent = function (e) {
        var _this = this;
        var key = e.key || e.keyIdentifier;
        var keyCode = e.keyCode || e.which;
        if (key === 'Enter' || keyCode === 13) {
            if (e.target.tagName === 'INPUT') {
                e.preventDefault();
                this.keyboard.close();
                setTimeout(function () {
                    _this.keyboard.close();
                    if (e.target.blur) {
                        e.target.blur();
                    }
                    else {
                        document.body.click();
                    }
                }, 300);
            }
        }
    };
    MyApp.prototype._isIonicElement = function (element) {
        return element && element.className.includes('ion');
    };
    MyApp.prototype._isAnchorElement = function (element) {
        if (!element || !element.hasAttribute('href')) {
            return;
        }
        var href = element.getAttribute('href');
        var tagName = element.tagName;
        return tagName.toLowerCase() === 'a' && element.hasAttribute('href') && !href.startsWith('mailto') && !href.startsWith('tel');
    };
    MyApp.prototype._normalizeUrl = function (url) {
        if (url.startsWith('#') || url.startsWith('/#')) {
            return;
        }
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            if (url.startsWith('/')) {
                return BASE_URL + url;
            }
            return 'http://' + url;
        }
        return url;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], MyApp.prototype, "handleAnchorClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MyApp.prototype, "keyEvent", null);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\L2S-New2310\src\app\app.html"*/'<ion-nav #nav [root]="rootPage" [swipeBackEnabled]="true"></ion-nav>\n'/*ion-inline-end:"D:\L2S-New2310\src\app\app.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_13__spa_framework_login_authenticationGuard_service__["a" /* AuththenticationGuardService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_authenticationGuard_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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



var RouteManagerService = (function () {
    function RouteManagerService(app, authService) {
        this.app = app;
        this.authService = authService;
        this.navCtrl = this.app.getRootNav();
    }
    RouteManagerService.prototype.gotoScreen = function (screenName, params, options) {
        this.navCtrl.push(screenName, params, options);
    };
    RouteManagerService.prototype.gotoAuthenticatedScreen = function (screenName, params) {
        if (this.authService.isAuthenticated()) {
            this.navCtrl.push(screenName, params);
        }
        else {
            this.navCtrl.push('LoginPage');
        }
    };
    RouteManagerService.prototype.ifNotLoggedInThenGoBackToLoginScreen = function () {
        if (!this.authService.isAuthenticated()) {
            this.navCtrl.push('LoginPage');
            return true;
        }
        return false;
    };
    RouteManagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__login_authenticationGuard_service__["a" /* AuththenticationGuardService */]])
    ], RouteManagerService);
    return RouteManagerService;
}());

//# sourceMappingURL=routeManager.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPINService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_login_authenticationDataSharing_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_services_localStorageService_localStorage_service__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);



var VerifyPINService = (function () {
    function VerifyPINService() {
        this.byPassVerifyPin = false;
        this.visibleScreen = false;
        this.isChangeTouchScreen = false;
        this.storage = __WEBPACK_IMPORTED_MODULE_1__framework_services_localStorageService_localStorage_service__["a" /* LocalStorageService */].getInstance();
        this.touchIDAvailable = false;
        this.verifyPINClosed = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.verifyPINClosedInChangeTouch = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        if (VerifyPINService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use VerifyPINService.getInstance() instead of new.');
        }
        VerifyPINService._instance = this;
    }
    Object.defineProperty(VerifyPINService.prototype, "touchIDState", {
        // true: on / false: off setting
        get: function () {
            return this.getTouchIDConfig('touchIDState');
        },
        set: function (state) {
            state = !!state;
            this.setTouchIDConfig('touchIDState', state);
        },
        enumerable: true,
        configurable: true
    });
    VerifyPINService.prototype.getTouchIDConfig = function (key) {
        var emailLogin = __WEBPACK_IMPORTED_MODULE_0__framework_login_authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail || '0';
        emailLogin = (emailLogin + '').toLowerCase();
        var touchIDCfg = this.storage.get(__WEBPACK_IMPORTED_MODULE_1__framework_services_localStorageService_localStorage_service__["b" /* LocalStorageServiceKey */].TouchIDConfig) || {};
        var userConfig = touchIDCfg[emailLogin] || {};
        return userConfig[key];
    };
    VerifyPINService.prototype.setTouchIDConfig = function (key, value) {
        var emailLogin = __WEBPACK_IMPORTED_MODULE_0__framework_login_authenticationDataSharing_service__["a" /* AuthenticationDataSharingService */].getInstance().loginEmail || '0';
        emailLogin = (emailLogin + '').toLowerCase();
        var touchIDCfg = this.storage.get(__WEBPACK_IMPORTED_MODULE_1__framework_services_localStorageService_localStorage_service__["b" /* LocalStorageServiceKey */].TouchIDConfig) || {};
        var userConfig = touchIDCfg[emailLogin] || {};
        userConfig[key] = value;
        touchIDCfg[emailLogin] = userConfig;
        this.storage.set(__WEBPACK_IMPORTED_MODULE_1__framework_services_localStorageService_localStorage_service__["b" /* LocalStorageServiceKey */].TouchIDConfig, touchIDCfg);
    };
    Object.defineProperty(VerifyPINService.prototype, "VisibleScreen", {
        get: function () {
            return this.visibleScreen;
        },
        set: function (state) {
            this.visibleScreen = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VerifyPINService.prototype, "IsChangeTouchScreen", {
        get: function () {
            return this.isChangeTouchScreen;
        },
        set: function (state) {
            this.isChangeTouchScreen = state;
        },
        enumerable: true,
        configurable: true
    });
    VerifyPINService.getInstance = function () {
        return VerifyPINService._instance;
    };
    // tslint:disable-next-line:member-ordering
    VerifyPINService._instance = new VerifyPINService();
    return VerifyPINService;
}());

//# sourceMappingURL=verifyPIN.service.js.map

/***/ })

},[378]);
//# sourceMappingURL=main.js.map