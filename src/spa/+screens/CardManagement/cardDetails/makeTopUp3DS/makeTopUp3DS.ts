import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {Utils} from "../../../../framework/services/utilities/utilities";
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {MakeTopUp3DSService} from "./makeTopUp3DS.service";
import $ from 'jquery';
import {OrderDiscountGiftCardSharingDataService} from "../../../orderManagement/orderDiscountGiftCard/orderDiscountGiftCardSharingData.services";
import {AppConfig as app} from "../../../../framework/appConfig";
import {BenefitsDataService} from "../../../benefits/benefitsData.service";

@IonicPage()
@Component({
    selector: 'page-makeTopUp3DS',
    templateUrl: 'makeTopUp3DS.html',
    providers: [
        MakeTopUp3DSService
    ]
})

export class MakeTopUp3DSPage {
    bankPayment;
    dataAfterGenerateOrder;
    cardIndex;
    cardPrimary;
    errorObject;
    constructor(public alertCtrl: AlertController,
                public routeManager: RouteManagerService,
                public makeTopUp3DSService: MakeTopUp3DSService,
                public navCtrl: NavController,
                public navParams: NavParams) {

    }

    ionViewWillEnter() {
        this.errorObject = null;

        $('.app-root').addClass('not-show-tab');
        this.submitedParesponse = false;
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('bankPayment')) {
                this.bankPayment = this.navParams.get('bankPayment');
            }
            if (this.navParams.get('cardPrimary')) {
                this.cardPrimary = this.navParams.get('cardPrimary');
            }
            if (this.navParams.get('dataAfterGenerateOrder')) {
                this.dataAfterGenerateOrder = this.navParams.get('dataAfterGenerateOrder');
            }
            this.cardIndex = this.navParams.get('cardIndex');
        }
    }


    ionViewDidLeave() {
        this.errorObject = null;
        this.submitedParesponse = false;
        clearTimeout(this.timerAutoSubmit);
    }

    ionViewDidEnter() {
        this.errorObject = null;
        setTimeout(() => {
            $('#submitIframe3D').click();
        }, app.Configuration.MakeTopUp3DS.submitIframe3D);

        setTimeout(() => {
            this.autoSubmitPaResponse();
        }, app.Configuration.MakeTopUp3DS.autoSubmitPaResponse);
    }

    private timerAutoSubmit: any;
    autoSubmitPaResponse() {
        this.timerAutoSubmit = setTimeout(() => {
            let found: boolean = false;
            let PaRes: any;
            let PaResTextarea: any;

            PaResTextarea = window.localStorage.getItem('PaResponse');
            localStorage.removeItem('PaResponse');
            if (Utils.isNotNull(PaResTextarea) && PaResTextarea !== '') {
                PaRes = PaResTextarea;
                if (PaRes !== '') {
                    found = true;
                    this.paymentResume(PaRes)
                    clearTimeout(this.timerAutoSubmit);
                    return;
                }
            }
            if (!found) {
                this.autoSubmitPaResponse();
            }
        }, app.Configuration.MakeTopUp3DS.submitIframe3D);
    }

    private submitedParesponse: boolean = false;
    paymentResume(Pares) {
        // only submit PaResponse once time;
        if (this.submitedParesponse === true) return;
        this.submitedParesponse = true
        let body = {
            "orderNumber": this.dataAfterGenerateOrder.orderNumber,
            "paRes": Pares
        };
        window.localStorage.removeItem('PaResponse');
        LoadingIndicatorService.getInstance().showLoadingIndicator();
        this.makeTopUp3DSService.paymentResume(body)
            .subscribe((res) => {
                if (!res.ok) {
                    return;
                }
                this.navCtrl.push('MakeTopUpSuccessFullPage', {
                    dataAfterGenerateOrder: this.dataAfterGenerateOrder,
                    cardIndex: this.cardIndex
                }).then(() => {
                    const startIndex = this.navCtrl.getActive().index - 3;
                    this.navCtrl.remove(startIndex, 3);
                });

            }, (error) => {

                LoadingIndicatorService.getInstance().hideLoadingIndicator();
                if (Utils.isNotNull(error) && Utils.isNotNull(error.data) && Utils.isNotNull(error.data.response)) {
                    let orderNumber = error.data.response.orderNumber;
                    OrderDiscountGiftCardSharingDataService.getInstance().setNewOrderNumber(orderNumber);
                }

                if (Utils.isNotNull(error) && Utils.isNotNull(error.data) && Utils.isNotNull(error.data.errors[0])) {
                    this.errorObject = error.data.errors[0];
                }
                this.navCtrl.push('MakeTopUptPage', {
                    cardprimary: this.cardPrimary,
                    dataAfterGenerateOrder: this.dataAfterGenerateOrder,
                    cardIndex: this.cardIndex,
                    errorObject: this.errorObject
                }).then(() => {
                    this.errorObject = null;
                    const startIndex = this.navCtrl.getActive().index - 2;
                    this.navCtrl.remove(startIndex, 2);
                });
            }, () => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            });
    }

    gotoAmount() {
        this.navCtrl.push('MakeTopUptPage', {
            cardprimary: this.cardPrimary,
            dataAfterGenerateOrder: this.dataAfterGenerateOrder,
            cardIndex: this.cardIndex,
            errorObject: null
        }).then(() => {
            this.errorObject = null;
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }
}
