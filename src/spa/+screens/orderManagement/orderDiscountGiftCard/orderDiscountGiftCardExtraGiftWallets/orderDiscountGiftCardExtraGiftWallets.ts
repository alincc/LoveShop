import { Component, QueryList, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';
import { RouteManagerService } from '../../../../framework/services/routeManager/routeManager.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { OrderDiscountGiftCardSharingDataService } from "../orderDiscountGiftCardSharingData.services";
import { AppConfig as app } from "../../../../framework/appConfig";
import { numericValidator } from "../../../../framework/validations/validator-numeric.directive";
import { Utils } from "../../../../framework/services/utilities/utilities";
import $ from 'jquery';
import { maxlengthFieldValidatorExtraCard } from "../../../../framework/validations/validator-maxlengthField.directive";

@IonicPage()
@Component({
    selector: 'page-orderDiscountGiftCardExtraGiftWallets',
    templateUrl: 'orderDiscountGiftCardExtraGiftWallets.html'
})


export class OrderDiscountGiftCardExtraGiftWallets {
    @ViewChildren(TextInput) textInputs: QueryList<TextInput>;
    baseImageUrl;

    constructor(public routeManager: RouteManagerService,
        public navCtrl: NavController,
        private navParams: NavParams,
        private formBuilder: FormBuilder, ) {
        this.baseImageUrl = app.Configuration.HttpService.baseResourceUrl;
        this.buildForm();
    }

    addExtraGCForm: FormGroup;
    productToChooseDesign;
    selectedIndex = 0;
    freeGreetingCardObject;
    formErrors = {
        'quantity': '',
    };
    productValid = true;
  order_gwp_default_section3_action_p = app.Configuration.ContentMessage.order_gwp_default_section3_action_p;
    ionViewWillEnter() {

        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {

            if (this.navParams.get('productToChooseDesign')) {
                this.productToChooseDesign = this.navParams.get('productToChooseDesign');
            }

            if (this.navParams.get('cardDesignIndex')) {
                this.selectedIndex = parseInt(this.navParams.get('cardDesignIndex'));
            }

            if (this.navParams.get('quantity')) {
                let tempQuantity = parseInt(this.navParams.get('quantity'));
                this.addExtraGCForm.patchValue({ 'quantity': tempQuantity + '' });
            }
            if (this.navParams.get('freeGreetingCardObject')) {
                this.freeGreetingCardObject = this.navParams.get('freeGreetingCardObject');
            }


        }
    }

    public buildForm() {
        this.addExtraGCForm = this.formBuilder.group({
            'quantity': ['', [
                requireValidator('Quantity'),
                numericValidator(),
                maxlengthFieldValidatorExtraCard(999)
            ]],
        },
            {
                validator: {
                    updateOn: 'blur'
                }
            });

        this.addExtraGCForm.statusChanges.subscribe(() => {
            if (this.textInputs) {
                this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
            }
        });

    }

    errorMessage(path: string) {
        const control = this.addExtraGCForm.get(path);
        const requiredMsg = app.Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }

        if (path === 'quantity') {
            if (control.hasError('required')) {
                return control.getError('required');
            } else {
                if (control.hasError('maxLengthField')) {
                    return control.getError('maxLengthField')
                }

                if (control.hasError('numericInvalid')) {
                    return control.getError('numericInvalid')
                }
            }
        }
    }

    selectDeliveryMethod(index) {
        this.selectedIndex = index;
    }

    backToReviewOrder() {
        let greetingCard = OrderDiscountGiftCardSharingDataService.getInstance().getSelectedFreeGreetingCard();


        if (this.addExtraGCForm.value.quantity > 0) {
            OrderDiscountGiftCardSharingDataService
                .getInstance()
                .saveExtraGreetingCard(
                this.productToChooseDesign[this.selectedIndex],
                this.selectedIndex,
                this.addExtraGCForm.value.quantity
                );
            this.navCtrl.pop();
        } else {
            OrderDiscountGiftCardSharingDataService.getInstance().resetExtraCardDesign();
            if (Utils.isNotNull(greetingCard) && (Utils.isNotNull(greetingCard.greetingCardSelected))) {
                if (greetingCard.selectedGreetingCard === true) {
                    this.navCtrl.pop();
                }
            } else {
                OrderDiscountGiftCardSharingDataService.getInstance().saveSelectedFreeGreetingCard(
                    this.freeGreetingCardObject.cardDesignIndex,
                    this.freeGreetingCardObject.productToChooseDesign[this.selectedIndex]
                );
                this.navCtrl.pop();
            }
        }
    }
}
