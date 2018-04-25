import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { RouteManagerService } from "../../../framework/services/routeManager/routeManager.service";
import { Subscription } from "rxjs/Subscription";
import { ONLINE, RetriveRetailerRequest, VIRTUAL_MASTERCARD, Where2SpendServices } from "../where2Spend.services";
import { Where2SpendSharingDataService } from "../where2SpendSharingData.services";
import { AuththenticationGuardService } from "../../../framework/login/authenticationGuard.service";
import { ToastMessageService } from "../../../framework/services/toastMessageService/toastMessage.service";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { LoadingIndicatorService } from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { AppConfig as app } from "../../../framework/appConfig";
import { MobileDeviceService } from '../../../framework/services/mobileDeviceService/mobileDeviceService.service';

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;

@IonicPage()
@Component({
    selector: 'page-where2SpendOnline',
    templateUrl: 'where2SpendOnline.html',
    providers: [
        Where2SpendServices,
        InAppBrowser
    ]
})
export class Where2SpendOnlinePage {
    opemMsCardSub: Subscription;
    retailers: any[];
    gpsAvailable: any = true;
    isLogin: boolean;
    retailerSub: Subscription;
    categories: any;
    location: any;
    card: any;
    gotoStore: any = false;
    imageBaseUrl = 'https://www.love2shop.co.uk';

    constructor(public routeManager: RouteManagerService,
        public navCtrl: NavController,
        private viewCtrl: ViewController,
        private iab: InAppBrowser,
        private authService: AuththenticationGuardService,
        private where2SpendServices: Where2SpendServices) {
    }

    ionViewDidLoad() {
        this.loadInitialData();
    }

    gotoPreviousPage() {
        if (Where2SpendSharingDataService.getInstance()) {
            let needBackToYourCard = Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail;
            if (needBackToYourCard) {
                const index = this.viewCtrl.index;
                this.navCtrl.remove(index);
                Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail = false;
                this.gotoStore = false;
                this.navCtrl.parent.select(0);
            } else {
                this.navCtrl.pop();
            }
        }
    }

    ionViewWillEnter() {
        this._resetData();
        this.card = Where2SpendSharingDataService.getInstance().selectedCard;
        this.location = Where2SpendSharingDataService.getInstance().currenrLocation;
        this.categories = Where2SpendSharingDataService.getInstance().categories;
        this.gpsAvailable = Where2SpendSharingDataService.getInstance().gpsStatus;
        this.isLogin = !!localStorage.getItem('token');
        this._updateData();
    }

    checkIsLogin() {
        return !!localStorage.getItem('token');
    }

    gotoVirtalMsCard() {
        this.gotoStore = true;
        if (this.opemMsCardSub) {
            this.opemMsCardSub.unsubscribe();
        }
        const body: RetriveRetailerRequest = { requestType: VIRTUAL_MASTERCARD };
        this.opemMsCardSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe(res => {
            if (res && res.response && res.response.link) {
                let url = res.response.link;
                const browser = this.iab.create(url, "_system", "location=true");
            } else {
            }
        }, (err) => {
        })
    }

    ionViewDidLeave() {
        if (this.retailerSub) {
            this.retailerSub.unsubscribe();
        }
        if (Where2SpendSharingDataService.getInstance() && !this.gotoStore) {
            Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail = false;
            this.gotoStore = false;
            this.navCtrl.popToRoot();
        }
    }

    gotoChangeCard() {
        Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail = false;
        this.navCtrl.parent.select(1);
    }

    gotoInStorePage() {
        this.gotoStore = true;
        Where2SpendSharingDataService.getInstance().keepLocation = true;
        this.navCtrl
            .push('Where2SpendInStoreMapPage')
            .then(() => {
                const index = this.navCtrl.getActive().index - 1;
                this.navCtrl.remove(index);
            });
    }

    loadInitialData() {
        this.updateRetailer();
    }

    private _alphabetSortFn(store1, store2) {
        if (store1.name < store2.name) return -1;
        if (store1.name > store2.name) return 1;
        return 0;
    }

    private _updateData() {
        if (this.card) {
            this.updateRetailer();
        }
    }

    onStoreClick(store) {
        if (store && store.websiteURL) {
            const url = this._normalizeUtl(store.websiteURL);
            const browser = this.iab.create(url, "_system", "location=true");
        }
    }

    private _normalizeUtl(url) {
        if (!url || !url.startsWith('http://') || !url.startsWith('https://')) {
            return 'http://' + url;
        }

        return url;
    }

    updateRetailer() {
        LoadingIndicatorService.getInstance().showLoadingIndicator();
        const body = this._buildRetailerRequest();
        this.retailerSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe((res) => {
            if (res && res.response && res.response.retailers) {
                if (Array.isArray(res.response.retailers)) {
                    this.retailers = res.response.retailers.sort(this._alphabetSortFn.bind(this));
                }
            }
        }, (error) => {
            LoadingIndicatorService.getInstance().hideLoadingIndicator();
        }, () => {
            LoadingIndicatorService.getInstance().hideLoadingIndicator();
        })
    }

    private _buildAdressLine(store) {
        return store.addressLine1;
    }

    private _handleError(res) {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        let msg = DEFAULT_ERROR_MSG;
        try {
            let body = JSON.parse(res._body);
            msg = body.errors[0].message;
        } catch (e) {
            msg = DEFAULT_ERROR_MSG;
        }
        this._showError(msg);
    }

    private _showError(message) {
        ToastMessageService.getInstance().showToastMessage(message);
    }

    private _buildRetailerRequest(): RetriveRetailerRequest {
        const scheme = (this.card && this.card.scheme) ? this.card.scheme : undefined;
        const req: RetriveRetailerRequest = {
            requestType: ONLINE,
            scheme: scheme
        }

        return req;
    }

    private _resetData() {
    }

    private _buildCategoryOpt() {
        return undefined;
    }

}
