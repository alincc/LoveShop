import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { CardDetailSharingDataService } from "../cardDetailsSharing.services";
import { BenefitsDataService } from "../../../benefits/benefitsData.service";
import $ from 'jquery';
import { OrderDiscountGiftCardSharingDataService } from "../../../orderManagement/orderDiscountGiftCard/orderDiscountGiftCardSharingData.services";
import {AppConfig as app} from "../../../../framework/appConfig";
import {YourCardDetailsSharingDataService} from "../yourCardDetails/yourCardDetailsSharingData.services";
@IonicPage()
@Component({
    selector: 'page-makeTopUpSuccessfull',
    templateUrl: 'makeTopUpSuccessfull.html',
})

export class MakeTopUpSuccessFullPage {
    dataAfterGenerateOrder;
    feeAmount;
    total;
    cardIndex;
    needBackToExchangeObject;
  order_confirmation_default_p_title = app.Configuration.ContentMessage.order_confirmation_default_p_title;
  order_confirmation_default_p_strapline = app.Configuration.ContentMessage.order_confirmation_default_p_strapline;
    constructor(public routeManager: RouteManagerService,
        public navCtrl: NavController,
        public navParams: NavParams) {
    }

    ionViewWillEnter() {
        YourCardDetailsSharingDataService.getInstance()
            .refreshListCards$
            .next('update-list-cards-after-topup-successfully');
        OrderDiscountGiftCardSharingDataService.getInstance().resetNewOrderNumber();
        this.needBackToExchangeObject = BenefitsDataService.getInstance().getNeedBackToExchange();
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('dataAfterGenerateOrder')) {

                this.dataAfterGenerateOrder = this.navParams.get('dataAfterGenerateOrder');
                this.total = parseFloat(this.dataAfterGenerateOrder.orderValue) - parseFloat(this.dataAfterGenerateOrder.totalDiscount) + parseFloat(this.dataAfterGenerateOrder.feeAmount);
            }

            this.cardIndex = this.navParams.get('cardIndex');
        }
    }

    ionViewDidLeave() {
        BenefitsDataService.getInstance().resetNeedBackToExchange();
    }

    returnToyourCard() {
        let cardCurrent = YourCardDetailsSharingDataService.getInstance().getCardCurrent;

        let card = {
            reloadData: true,
            cardNumber: cardCurrent.cardNumber,
            cardId: cardCurrent.cardID
        }

        CardDetailSharingDataService.getInstance().gotoCardDataReload = card;

        if (this.needBackToExchangeObject.needBackToExchange) {
            this.navCtrl.pop();
        } else {
            $('.app-root').removeClass('not-show-tab');
            this.navCtrl.popToRoot();
            this.navCtrl.parent.select(0);
        }
    }
}
