import { Component, QueryList, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';
import { RouteManagerService } from '../../../../framework/services/routeManager/routeManager.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { OrderDiscountGiftCardPaymentCardService } from "./orderDiscountGiftCardPaymentCardService.service";
import { requireValidator } from "../../../../framework/validations/validator-required.directive";
import { minlengthValidatorCSC } from "../../../../framework/validations/validator-minlength.directive";
import { numericValidator, numericValidatorCSC } from "../../../../framework/validations/validator-numeric.directive";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { MyShoppingBasketSharingDataService } from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import { OrderDiscountGiftCardSharingDataService } from "../orderDiscountGiftCardSharingData.services";
import {
    maxlengthFieldValidator,
    maxlengthFieldValidatorCSC
} from "../../../../framework/validations/validator-maxlengthField.directive";
import {AppConfig as app} from "../../../../framework/appConfig";

@IonicPage()

@Component({
    selector: 'page-orderDiscountGiftCardPaymentCard',
    templateUrl: 'orderDiscountGiftCardPaymentCard.html',
    providers: [
        OrderDiscountGiftCardPaymentCardService
    ]
})
export class OrderDiscountGiftCardPaymentCardPage {
    dataAfterGenerateOrder;
    dataBeforeGenerateOrder;

    cardPrimary;
    tokenizedCards = [];
    cardTypeSelected = []
    cardSelected;
    feeAmount = 0;
    total;

    showListCard: boolean = false;
    showAddNewCard: boolean = false;
    expireError: boolean = false;
    _makeTopUp;
    methodCardType;
    yearmin = ((new Date()).getFullYear());
    monthmin = ((new Date()).getMonth());
    percentDiscount;
    messageContent;
    cardIndex;
    deliveryMethod;
    subtotal = 0;
    percentDiscountCal = 0;
    dataBasketProducts = [];
    freeGreetingCard;
    exTraGreetingCard;
    invalidFeeAmount = '';
    errorObject;
    feeAmountError = {
        message: '',
        invalid: false
    };
    paymentErrorCode =  app.Configuration.HttpService.INVALID_PAYMENT_MSG;
    paymentFeeErrorCode = app.Configuration.HttpService.INVALID_PAYMENT_FEE_MSG;
  order_gwp_default_section6_action_p = app.Configuration.ContentMessage.order_gwp_default_section6_action_p;

  add_card_add_new_card = app.Configuration.ContentMessage.add_card_add_new_card;
  add_card_use_saved_card = app.Configuration.ContentMessage.add_card_use_saved_card;
  order_datacash_payment_capture_default_cardNumber_label = app.Configuration.ContentMessage.order_datacash_payment_capture_default_cardNumber_label;
  order_datacash_payment_capture_default_label_save_card = app.Configuration.ContentMessage.order_datacash_payment_capture_default_label_save_card;

  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

    constructor(private formBuilder: FormBuilder,
        public routeManager: RouteManagerService,
        public navCtrl: NavController,
        public orderDiscountGiftCardPaymentCardService: OrderDiscountGiftCardPaymentCardService,
        public navParams: NavParams) {
        this.buildForm();
        this.buildFormOnlyCVV();
    }

    topUpForm: FormGroup;

    formErrors = {
        'topUpInput': '',
        'cardnumber': '',
        'monthCard': '',
        'year': '',
        'cvv': '',
        'saveCard': '',
    };

    ionViewDidLeave() {
        this.invalidFeeAmount = '';
    }
    buildForm() {
        this.topUpForm = this.formBuilder.group({
            'topUpInput': ['', []],
            'cardnumber': ['', [
                requireValidator('cardnumber'),
                maxlengthFieldValidator(19, 'Card number'),
                numericValidator(),
            ]],
            'monthCard': ['', [
                requireValidator('monthCard')
            ]],
            'paymentMethodsWithFees': [0, []],
            'yearCard': ['', [
                requireValidator('yearCard')
            ]],
            'cvv': ['', [
                requireValidator('cvv'),
                minlengthValidatorCSC(3, 'CSC'),
                maxlengthFieldValidatorCSC(3, 'CSC'),
                numericValidatorCSC(),
            ]],
            'saveCard': [false, []],
        }, {
                validator: {
                    updateOn: 'blur'
                }
            });

        this.topUpForm.statusChanges.subscribe(() => {
            if (this.textInputs) {
                this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
            }
        });
    }

    errorMessage(path: string) {
        const control = this.topUpForm.get(path);
        const requiredMsg = app.Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }

        if (path === 'cardnumber' || path === 'monthCard' || path === 'yearCard' || path === 'cvv') {
            if (control.hasError('required')) {
                return control.getError('required');
            } else {
                if (control.hasError('minlength')) {
                    return control.getError('minlength')
                }

                if (control.hasError('numericInvalid')) {
                    return control.getError('numericInvalid')
                }


                if (control.hasError('minlengthField')) {
                    return control.getError('minlengthField')
                }

                if (control.hasError('maxLengthField')) {
                    return control.getError('maxLengthField')
                }


              if (control.hasError('key')) {
                return control.getError('key')
              }
            }
        }
    }


    topUpFormOnlyCVV: FormGroup;
    formErrorsOnlyCVV = {
        'cvv': '',
    };

    buildFormOnlyCVV() {
        this.topUpFormOnlyCVV = this.formBuilder.group({
            'cvv': ['', [
                requireValidator('cvv'),
                minlengthValidatorCSC(3, 'CSC'),
                maxlengthFieldValidatorCSC(3, 'CSC'),
                numericValidatorCSC(),
            ]],
        }, {
                validator: {
                    updateOn: 'blur'
                }
            });

        this.topUpFormOnlyCVV.statusChanges.subscribe(() => {
            if (this.textInputs) {
                this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
            }
        });
    }

    errorMessageCVV(path: string) {
        const control = this.topUpFormOnlyCVV.get(path);
        const requiredMsg = app.Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }

        if (path === 'cvv') {
            if (control.hasError('required')) {
                return control.getError('required');
            } else {
                if (control.hasError('minlength')) {
                    return control.getError('minlength')
                }

                if (control.hasError('maxLengthField')) {
                    return control.getError('maxLengthField')
                }

                if (control.hasError('minlengthField')) {
                    return control.getError('minlengthField')
                }

              if (control.hasError('key')) {
                return control.getError('key')
              }
            }
        }
    }


    changeDate() {
        this.expireError = false;
        setTimeout(() => {
            if (Utils.isNotNull(this.topUpForm.value.monthCard)) {
                if (parseInt(this.topUpForm.value.yearCard) === this.yearmin) {
                    if (parseInt(this.topUpForm.value.monthCard.substr(2, 2)) < this.monthmin + 1) {
                        this.expireError = true;
                        return;
                    }
                }
            }
        }, 1000)
    }

    changemonth() {
        this.expireError = false;
        setTimeout(() => {
            if (Utils.isNotNull(this.topUpForm.value.yearCard)) {
                if (parseInt(this.topUpForm.value.yearCard) === this.yearmin) {
                    if (parseInt(this.topUpForm.value.monthCard.substr(2, 2)) < this.monthmin + 1) {
                        this.expireError = true;
                        return;
                    }
                }
            }
        }, 1000)
    }


    selectCardPayment(card) {
        this.cardSelected = card;
        this.feeAmount = parseFloat(this.cardSelected.feeAmount);
        this.total = parseFloat(this.dataAfterGenerateOrder.orderValue) - parseFloat(this.dataAfterGenerateOrder.totalDiscount) + this.feeAmount + this.deliveryMethod.cost;
        this.showListCard = false;
    }

    changeFeeCard() {
        this.feeAmount = parseFloat(this.topUpForm.value.paymentMethodsWithFees);
        this.total = this.dataAfterGenerateOrder.orderValue - this.dataAfterGenerateOrder.totalDiscount + this.feeAmount + this.deliveryMethod.cost;
    }

    updateFeeCardSelected() {
        if (Utils.isNotNull(this.cardSelected)) {
            this.feeAmount = parseFloat(this.cardSelected.feeAmount);
        }
        this.total = parseFloat(this.dataAfterGenerateOrder.orderValue) - parseFloat(this.dataAfterGenerateOrder.totalDiscount) + this.feeAmount + this.deliveryMethod.cost;
    }

  iconClick(target) {
    target.open();
  }
    ionViewWillEnter() {


        this.showAddNewCard = false;
        let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
        this.dataBasketProducts = MyShoppingBasketSharingDataService.getInstance().getDataBasket().productsOnBasket;
        this.cardPrimary = dataBasket.cardInformation;

        this.freeGreetingCard = OrderDiscountGiftCardSharingDataService.getInstance().getSelectedFreeGreetingCard();
        this.exTraGreetingCard = OrderDiscountGiftCardSharingDataService.getInstance().getExtraGreetingCard();


        this.expireError = false;
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if(this.navParams.get('errorObject')) {
                this.errorObject = this.navParams.get('errorObject');
            }

          if(this.navParams.get('dataBeforeGenerateOrder')) {
            this.dataBeforeGenerateOrder = this.navParams.get('dataBeforeGenerateOrder');
          }
            if (this.navParams.get('dataAfterGenerateOrder')) {

                this.dataAfterGenerateOrder = this.navParams.get('dataAfterGenerateOrder');
                let newOrderNumber = OrderDiscountGiftCardSharingDataService.getInstance().getNewOrderNumber();
                if (newOrderNumber.status) {
                    this.dataAfterGenerateOrder.orderNumber = newOrderNumber.newOrderNumber;
                }

                this.deliveryMethod = this.navParams.get('deliveryMethod');
                this.subtotal = parseFloat(this.dataAfterGenerateOrder.totalPaymentAmount) + parseFloat(this.deliveryMethod.cost);

                if (this.dataAfterGenerateOrder && this.dataAfterGenerateOrder.tokenizationEnabled) {
                    this.tokenizedCards = this.dataAfterGenerateOrder.tokenizedCards;



                    if (this.tokenizedCards.length < 1) {
                        this.showAddNewCard = true;
                    }
                    if (Array.isArray(this.tokenizedCards)) {

                        for (let i = 0; i < this.tokenizedCards.length; i++) {
                            if (this.tokenizedCards[i].cardScheme.toLowerCase() === 'mastercard') {

                            }
                        }
                        const index = this.tokenizedCards.findIndex((card) => (card.default === true));
                        if (index >= 0) {
                            this.cardSelected = this.tokenizedCards[index];
                        }
                    }
                } else {
                    this.showAddNewCard = true;
                }

                this.cardTypeSelected = this.dataAfterGenerateOrder.paymentMethodsWithFees;
                this.topUpForm.patchValue({ 'topUpInput': '£' + this.dataAfterGenerateOrder.orderValue + '' });

                if (this.showAddNewCard) {
                    this.feeAmount = this.topUpForm.value.paymentMethodsWithFees;
                    // this.methodCardType = this.cardTypeSelected[0].feeAmount;
                } else {
                    if (Utils.isNotNull(this.cardSelected)) {

                        this.feeAmount = this.cardSelected.feeAmount;
                    }
                }

                this.total = this.dataAfterGenerateOrder.orderValue - this.dataAfterGenerateOrder.totalDiscount + this.feeAmount + this.deliveryMethod.cost;
                this.percentDiscount = this.cardPrimary.discountPercentage;
                this.percentDiscountCal = parseFloat(this.dataAfterGenerateOrder.totalDiscount) * 100 / parseFloat(this.dataAfterGenerateOrder.orderValue);
                this.percentDiscountCal = <any>(this.percentDiscountCal.toFixed(2)) / 1;
            }
        }
    }

    payNow() {

        LoadingIndicatorService.getInstance().showLoadingIndicator();
        let body = this._buildGenerateMakeTopupRequest();
        const observer = {
            next: (res) => {
                if (!res.ok) {
                    return;
                }
                let body = res.response;

                if (Utils.isNotNull(body)) {
                    let feeAmount = {
                        'feeAmount': this.feeAmount,
                    };
                    let objectCombined = Object.assign(this.dataAfterGenerateOrder, feeAmount);
                    this.navCtrl.push('OrderDiscountGiftCard3DSPage', {
                        bankPayment: body,
                        dataAfterGenerateOrder: objectCombined,
                        deliveryMethod: this.deliveryMethod,
                        total: this.total,
                         dataBeforeGenerateOrder: this.dataBeforeGenerateOrder
                    });
                } else {
                    let feeAmount = {
                        'feeAmount': this.feeAmount,
                    };
                    let objectCombined = Object.assign(this.dataAfterGenerateOrder, feeAmount);
                    this.navCtrl.push('OrderDiscountGiftCardComplete', {
                        dataAfterGenerateOrder: objectCombined,
                        cardSelected: this.cardPrimary,
                        deliveryMethod: this.deliveryMethod,
                        total: this.total,
                      dataBeforeGenerateOrder: this.dataBeforeGenerateOrder
                    });
                }
            },
            error: (error) => {
                if (Utils.isNotNull(error) && Utils.isNotNull(error.data) && Utils.isNotNull(error.data.response)) {
                    let orderNumber = error.data.response.orderNumber;
                    this.dataAfterGenerateOrder.orderNumber = orderNumber;
                    OrderDiscountGiftCardSharingDataService.getInstance().setNewOrderNumber(orderNumber);

                    if(Utils.isNotNull(error.data.errors[0])
                        && Array.isArray(error.data.errors)
                        && (error.data.errors[0].code === this.paymentErrorCode)){
                        this.errorObject = error.data.errors[0];
                    }
                }

                if (Utils.isNotNull(error) && (error.code === this.paymentFeeErrorCode)) {
                    this.feeAmountError.message = error.message || error.code;
                    if(Utils.isNotNull(this.feeAmountError.message)) {
                        this.feeAmountError.invalid = true;
                    }
                }

                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            },
            complete: () => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            }
        };
        this.orderDiscountGiftCardPaymentCardService
            .bankPayment(body)
            .subscribe(observer);
    }

    private _buildGenerateMakeTopupRequest() {

        if (this.showAddNewCard) {
            let order = {
                "orderNumber": this.dataAfterGenerateOrder.orderNumber,
                "authenticationMethod": "CARD_NUMBER",
                "authenticationValue": this.topUpForm.value.cardnumber,
                "cv2": this.topUpForm.value.cvv,
                "expiryDate": this.topUpForm.value.monthCard.substr(2) + "/" + this.topUpForm.value.yearCard.substr(2),
                "paymentAmount": parseFloat(this.subtotal.toFixed(2)),
                "paymentMethodFee": parseFloat(this.topUpForm.value.paymentMethodsWithFees),
                "saveCard": this.topUpForm.value.saveCard
            }
            this.feeAmount = parseFloat(this.topUpForm.value.paymentMethodsWithFees);
            return order;

        } else {
            let order = {
                "orderNumber": this.dataAfterGenerateOrder.orderNumber,
                "authenticationMethod": "TOKEN",
                "authenticationValue": this.cardSelected.token,
                "cv2": this.topUpFormOnlyCVV.value.cvv,
                "expiryDate": this.cardSelected.expiryDate,
                "paymentAmount": parseFloat(this.subtotal.toFixed(2)),
                "paymentMethodFee": this.cardSelected.feeAmount,
            }
            this.feeAmount = this.cardSelected.feeAmount;
            return order;
        }
    }


}
