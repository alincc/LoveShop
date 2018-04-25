import {Component, QueryList, ViewChildren} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, TextInput, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MakeTopUpService} from "./makeTopUp.service";
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {requireValidator} from "../../../../framework/validations/validator-required.directive";
import {Utils} from "../../../../framework/services/utilities/utilities";
import {minlengthValidatorCSC} from "../../../../framework/validations/validator-minlength.directive";
import {numericValidator, numericValidatorCSC} from "../../../../framework/validations/validator-numeric.directive";
import {
    maxlengthFieldValidator,
    maxlengthFieldValidatorCSC
} from "../../../../framework/validations/validator-maxlengthField.directive";
import {OrderDiscountGiftCardSharingDataService} from "../../../orderManagement/orderDiscountGiftCard/orderDiscountGiftCardSharingData.services";
import {AppConfig as app} from "../../../../framework/appConfig";
import $ from 'jquery';
@IonicPage()
@Component({
    selector: 'page-makeTopUp',
    templateUrl: 'makeTopUp.html',
    providers: [
        MakeTopUpService
    ]
})

export class MakeTopUptPage {
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
    dataAfterGenerateOrder;
    paymentMethodsWithFees;
    methodCardType;
    yearmin = ((new Date()).getFullYear());
    monthmin = ((new Date()).getMonth());
    percentDiscount;
    messageContent;
    cardIndex;
    expireYear ='';
    errorObject;
    paymentErrorCode = app.Configuration.HttpService.INVALID_PAYMENT_MSG;
    paymentFeeErrorCode = app.Configuration.HttpService.INVALID_PAYMENT_FEE_MSG;
    applied_to_card_load = app.Configuration.ContentMessage.applied_to_card_load;
    confirm_top_up_amount = app.Configuration.ContentMessage.confirm_top_up_amount;

  add_card_add_new_card = app.Configuration.ContentMessage.add_card_add_new_card;
  add_card_use_saved_card = app.Configuration.ContentMessage.add_card_use_saved_card;
  order_datacash_payment_capture_default_cardNumber_label = app.Configuration.ContentMessage.order_datacash_payment_capture_default_cardNumber_label;
  order_datacash_payment_capture_default_label_save_card = app.Configuration.ContentMessage.order_datacash_payment_capture_default_label_save_card;
    @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

    constructor(private formBuilder: FormBuilder,
                public alertCtrl: AlertController,
                public routeManager: RouteManagerService,
                public navCtrl: NavController,
                private viewCtrl: ViewController,
                public makeTopUpService: MakeTopUpService,
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
        'paymentMethodsWithFees': '',
        'cvv': '',
        'saveCard': '',
    };

    feeAmountError = {
        message: '',
        invalid: false
    };

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
                return control.getError('required')
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

                if (control.hasError('numericInvalid')) {
                    return control.getError('numericInvalid')
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
                return control.getError('required')
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

    changeYear() {

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
        setTimeout( ()=> {
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
        this.total = parseFloat(this.dataAfterGenerateOrder.orderValue) - parseFloat(this.dataAfterGenerateOrder.totalDiscount) + this.feeAmount;
        this.showListCard = false;
    }

    changeFeeCard() {
        this.feeAmount = parseFloat(this.topUpForm.value.paymentMethodsWithFees);
        this.total = this.dataAfterGenerateOrder.orderValue - this.dataAfterGenerateOrder.totalDiscount + this.feeAmount;
    }

    updateFeeCardSelected() {
        if (Utils.isNotNull(this.cardSelected)) {
            this.feeAmount = parseFloat(this.cardSelected.feeAmount);
        }
        this.total = parseFloat(this.dataAfterGenerateOrder.orderValue) - parseFloat(this.dataAfterGenerateOrder.totalDiscount) + this.feeAmount;
    }

    ionViewDidLeave() {
    }

    ionViewWillEnter() {

        this.errorObject = null;
        this.expireError = false;
        this.feeAmountError.invalid = false;
        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('dataAfterGenerateOrder')) {
                this.dataAfterGenerateOrder = this.navParams.get('dataAfterGenerateOrder');
                this.cardPrimary = this.navParams.get('cardprimary');

                if(this.navParams.get('errorObject')) {
                    this.errorObject = this.navParams.get('errorObject');
                }

                let newOrderNumber = OrderDiscountGiftCardSharingDataService.getInstance().getNewOrderNumber();
                if (newOrderNumber.status) {
                    this.dataAfterGenerateOrder.orderNumber = newOrderNumber.newOrderNumber;
                }

                this.tokenizedCards = this.dataAfterGenerateOrder.tokenizedCards;


                if (this.tokenizedCards.length < 1) {
                    this.showAddNewCard = true;
                }
                if (Array.isArray(this.tokenizedCards)) {
                    const index = this.tokenizedCards.findIndex((card) => (card.default === true));
                    if (index >= 0) {

                        this.cardSelected = this.tokenizedCards[index];
                    }
                }

                this.cardTypeSelected = this.dataAfterGenerateOrder.paymentMethodsWithFees;
                this.topUpForm.patchValue({'topUpInput': '£' + this.dataAfterGenerateOrder.orderValue.toFixed(2) + ''});

                if (this.showAddNewCard) {
                    this.feeAmount = this.topUpForm.value.paymentMethodsWithFees;
                    // this.methodCardType = this.cardTypeSelected[0].feeAmount;
                } else {
                    if (Utils.isNotNull(this.cardSelected)) {

                        this.feeAmount = this.cardSelected.feeAmount;
                    }
                }

                this.total = this.dataAfterGenerateOrder.orderValue - this.dataAfterGenerateOrder.totalDiscount + this.feeAmount;

                if(Utils.isNotNull( this.cardPrimary) && Utils.isNotNull( this.cardPrimary.discountPercentage)) {
                    this.percentDiscount = this.cardPrimary.discountPercentage;
                }
            }
            this.cardIndex = this.navParams.get('cardIndex');
        }
    }

    doTopUp() {
        this.errorObject = null;
        this.feeAmountError.invalid = false;
        this.feeAmountError.message = '';
        const codeMustShow = ['feeAmount', 'feeAmount-invalid'];
        LoadingIndicatorService.getInstance().showLoadingIndicator();
        let body = this._buildGenerateMakeTopupRequest();
        this._makeTopUp = this.makeTopUpService.bankPayment(body)
            .subscribe((res) => {
                if (!res.ok) {
                    return;
                }
                let body = res.response;
                if (Utils.isNotNull(body)) {
                    let feeAmount = {
                        'feeAmount': this.feeAmount,
                    };
                    let objectCombined = Object.assign(this.dataAfterGenerateOrder, feeAmount);

                    this.navCtrl.push('MakeTopUp3DSPage', {
                        bankPayment: body,
                        dataAfterGenerateOrder: objectCombined,
                        cardIndex: this.cardIndex,
                        cardPrimary: this.cardPrimary,
                        animate: false,
                        duration: 0
                    });

                } else {
                    let feeAmount = {
                        'feeAmount': this.feeAmount,
                    };
                    let objectCombined = Object.assign(this.dataAfterGenerateOrder, feeAmount);
                    this.navCtrl.push('MakeTopUpSuccessFullPage', {
                        dataAfterGenerateOrder: objectCombined,
                        cardSelected: this.cardPrimary,
                        cardIndex: this.cardIndex
                    }).then(() => {
                        const startIndex = this.navCtrl.getActive().index - 2;
                        this.navCtrl.remove(startIndex, 2);
                    });
                }
            }, (error) => {


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
            }, () => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            });
    }

    private _buildGenerateMakeTopupRequest() {

        let newOrderNumber = OrderDiscountGiftCardSharingDataService.getInstance().getNewOrderNumber();
        if(newOrderNumber.status) {
            this.dataAfterGenerateOrder.orderNumber = newOrderNumber.newOrderNumber;
        }

        if (this.showAddNewCard) {
            let order = {
                "orderNumber": this.dataAfterGenerateOrder.orderNumber,
                "authenticationMethod": "CARD_NUMBER",
                "authenticationValue": this.topUpForm.value.cardnumber.trim(),
                "cv2": this.topUpForm.value.cvv.trim(),
                "expiryDate": this.topUpForm.value.monthCard.substr(2) + "/" + this.topUpForm.value.yearCard.substr(2),
                "paymentAmount": this.dataAfterGenerateOrder.totalPaymentAmount,
                "paymentMethodFee": this.topUpForm.value.paymentMethodsWithFees,
                "saveCard": this.topUpForm.value.saveCard
            }
            this.feeAmount = this.topUpForm.value.paymentMethodsWithFees;
            return order;

        } else {
            let order = {
                "orderNumber": this.dataAfterGenerateOrder.orderNumber,
                "authenticationMethod": "TOKEN",
                "authenticationValue": this.cardSelected.token,
                "cv2": this.topUpFormOnlyCVV.value.cvv,
                "expiryDate": this.cardSelected.expiryDate,
                "paymentAmount": this.dataAfterGenerateOrder.totalPaymentAmount,
                "paymentMethodFee": this.cardSelected.feeAmount,
            }
            this.feeAmount = this.cardSelected.feeAmount;
            return order;
        }
    }

    getHelpCSC(param) {
        LoadingIndicatorService.getInstance().showLoadingIndicator();
        this.makeTopUpService.getHelpCSC(param)
            .subscribe((res) => {

                if (!res.ok) {

                    return;
                }
                this.messageContent = res.response;
                let alert = this.alertCtrl.create({
                    message: this.messageContent.message,
                    cssClass: "l2s-alert--default",
                    buttons: ['OK']
                });
                alert.present();
            }, (error) => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            }, () => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            });
    }
}
