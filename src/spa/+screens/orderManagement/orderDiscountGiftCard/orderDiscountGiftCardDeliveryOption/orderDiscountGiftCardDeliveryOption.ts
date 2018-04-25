import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RouteManagerService} from '../../../../framework/services/routeManager/routeManager.service';
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {Utils} from "../../../../framework/services/utilities/utilities";
import {OrderDiscountGiftCardDeliveryOptionService} from "./orderDiscountGiftCardDeliveryOptionService.service";
import {OrderDiscountGiftCardSharingDataService} from "../orderDiscountGiftCardSharingData.services";

@IonicPage()
@Component({
    selector: 'page-orderDiscountGiftCardDeliveryOption',
    templateUrl: 'orderDiscountGiftCardDeliveryOption.html',
    providers: [
        OrderDiscountGiftCardDeliveryOptionService
    ]
})
export class OrderDiscountGiftCardDeliveryOption {
    dataBeforeGenerateOrder;
    dataAfterGenerateOrder;
    selectedIndex = 0;
    bodyPost;
    backUpdataAfterGenerateOrder;
    newAddressDelivery;

    constructor(public routeManager: RouteManagerService,
                public navCtrl: NavController,
                private orderDiscountGiftCardDeliveryOptionService: OrderDiscountGiftCardDeliveryOptionService,
                public navParams: NavParams,) {
    }


    countryLists= [
        {
            countryId: "UK",
            countryName: "United Kingdom"
        }
    ];

    ionViewWillEnter() {

        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {

            if (this.navParams.get('dataAfterGenerate')) {
                this.dataAfterGenerateOrder = Object.assign({}, this.navParams.get('dataAfterGenerate'));
                this.backUpdataAfterGenerateOrder = Object.assign({}, this.dataAfterGenerateOrder);
            }

            if (this.navParams.get('dataBeforeGenerate')) {
                this.dataBeforeGenerateOrder = this.navParams.get('dataBeforeGenerate');
            }
            let newOrderNumber = OrderDiscountGiftCardSharingDataService.getInstance().getNewOrderNumber();
            if(newOrderNumber.status) {
                this.dataAfterGenerateOrder.orderNumber = newOrderNumber.newOrderNumber;
                this.backUpdataAfterGenerateOrder.orderNumber = newOrderNumber.newOrderNumber;
            };
            this.newAddressDelivery = OrderDiscountGiftCardSharingDataService.getInstance().getUpdateDelivery();

            if (Utils.isNotNull(this.newAddressDelivery) && (Utils.isNotNull(this.newAddressDelivery.addressIsUpdated))) {
                if (this.newAddressDelivery.addressIsUpdated === true) {
                    this.dataAfterGenerateOrder.addressLine1 = this.newAddressDelivery.newAddress.addressLine1;
                    this.dataAfterGenerateOrder.addressLine2 = this.newAddressDelivery.newAddress.addressLine2;
                    this.dataAfterGenerateOrder.town = this.newAddressDelivery.newAddress.town;
                    this.dataAfterGenerateOrder.postcode = this.newAddressDelivery.newAddress.postcode;
                    this.dataAfterGenerateOrder.county = this.newAddressDelivery.newAddress.county;
                    this.dataAfterGenerateOrder.country = this.newAddressDelivery.newAddress.country;
                }
            }

            this.bodyPost = {
                "propositionId": this.dataBeforeGenerateOrder.propositionId,
                "orderNumber": this.dataAfterGenerateOrder.orderNumber,
                "title": this.dataAfterGenerateOrder.title,
                "firstName": this.dataAfterGenerateOrder.firstName,
                "lastName": this.dataAfterGenerateOrder.lastName,
                "addressLine1": this.dataAfterGenerateOrder.addressLine1,
                "addressLine2": this.dataAfterGenerateOrder.addressLine2,
                "town": this.dataAfterGenerateOrder.town,
                "county": this.dataAfterGenerateOrder.county,
                "postcode": this.dataAfterGenerateOrder.postcode,
                "country": this.countryLists[0].countryName,
                "deliveryMethodCode": this.dataAfterGenerateOrder.availableDeliveryMethods[this.selectedIndex].code,
            }
        }
    }

    resetAddress() {
        this.dataAfterGenerateOrder = null;
        OrderDiscountGiftCardSharingDataService.getInstance().resetDelivery();
        this.newAddressDelivery = OrderDiscountGiftCardSharingDataService.getInstance().getUpdateDelivery();
        this.dataAfterGenerateOrder = Object.assign({}, this.backUpdataAfterGenerateOrder);
        this.bodyPost = {
            "propositionId": this.dataBeforeGenerateOrder.propositionId,
            "orderNumber": this.dataAfterGenerateOrder.orderNumber,
            "title": this.dataAfterGenerateOrder.title,
            "firstName": this.dataAfterGenerateOrder.firstName,
            "lastName": this.dataAfterGenerateOrder.lastName,
            "addressLine1": this.dataAfterGenerateOrder.addressLine1,
            "addressLine2": this.dataAfterGenerateOrder.addressLine2,
            "town": this.dataAfterGenerateOrder.town,
            "county": this.dataAfterGenerateOrder.county,
            "postcode": this.dataAfterGenerateOrder.postcode,
            "country": this.dataAfterGenerateOrder.country,
            "deliveryMethodCode": this.dataAfterGenerateOrder.availableDeliveryMethods[this.selectedIndex].code,
        }

    }

    selectDeliveryMethod(index) {
        this.selectedIndex = index;
        this.bodyPost = {
            "propositionId": this.dataBeforeGenerateOrder.propositionId,
            "orderNumber": this.dataAfterGenerateOrder.orderNumber,
            "title": this.dataAfterGenerateOrder.title,
            "firstName": this.dataAfterGenerateOrder.firstName,
            "lastName": this.dataAfterGenerateOrder.lastName,
            "addressLine1": this.dataAfterGenerateOrder.addressLine1,
            "addressLine2": this.dataAfterGenerateOrder.addressLine2,
            "town": this.dataAfterGenerateOrder.town,
            "county": this.dataAfterGenerateOrder.county,
            "postcode": this.dataAfterGenerateOrder.postcode,
            "country": this.dataAfterGenerateOrder.country,
            "deliveryMethodCode": this.dataAfterGenerateOrder.availableDeliveryMethods[this.selectedIndex].code,
        }
    }

    alternateAddress() {
        this.navCtrl.push('OrderDiscountGiftCardUpdateDeliveryOptionPage', {deliveryInformation: this.bodyPost})
    }

    updateOrderDeliveryDetail() {

        LoadingIndicatorService.getInstance().showLoadingIndicator();
        const observer = {
            next: (res) => {
                if (!res.ok) {
                    return;
                }
                this.navCtrl.push('OrderDiscountGiftCardPaymentCardPage',
                    {
                        dataBeforeGenerateOrder: this.backUpdataAfterGenerateOrder,
                        dataAfterGenerateOrder: this.dataAfterGenerateOrder,
                        deliveryMethod: this.dataAfterGenerateOrder.availableDeliveryMethods[this.selectedIndex]
                    })
            },
            error: (error) => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            },
            complete: () => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            }
        };
        this.orderDiscountGiftCardDeliveryOptionService
            .updateDeliveryOption(this.bodyPost)
            .subscribe(observer);
    }
}
