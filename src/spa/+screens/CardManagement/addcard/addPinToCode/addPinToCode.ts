import {Component, QueryList, ViewChildren} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {requireValidator} from "../../../../framework/validations/validator-required.directive";
import {AddCardDataService} from "../addCardData.service";
import {numericValidatorPIN} from "../../../../framework/validations/validator-numeric.directive";
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {Utils} from "../../../../framework/services/utilities/utilities";
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {minlengthValidatorPIN} from "../../../../framework/validations/validator-minlength.directive";
import {maxlengthFieldValidatorPIN} from "../../../../framework/validations/validator-maxlengthField.directive";
import { AddCardSharingDataService } from '../addCardSharing.services';
import {AppConfig as app} from "../../../../framework/appConfig";

@IonicPage()
@Component({
    selector: 'page-addPinToCode',
    templateUrl: 'addPinToCode.html',
    providers: [
        AddCardDataService,
        InAppBrowser,
    ]
})

export class AddPinToCodePage {

    model: any = {};
    @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

    constructor(public alertCtrl: AlertController,
                public routeManager: RouteManagerService,
                private formBuilder: FormBuilder,
                public iab: InAppBrowser,
                public navParams: NavParams,
                public navCtrl: NavController,
                private addCardDataService: AddCardDataService) {
        this.buildForm();
    }

    addCardForm: FormGroup;
    formErrors = {
        'pin': '',
        'termCondition': false,
    };
    termsPath;
    cardInfo;
    lastEcode;
    responseCard;
    must_read_ts_cs = app.Configuration.ContentMessage.must_read_ts_cs;
  account_management_new_ecode = app.Configuration.ContentMessage.account_management_new_ecode;
    public buildForm() {
        this.addCardForm = this.formBuilder.group({
            'pin': ['', [
                requireValidator('pin'),
                minlengthValidatorPIN(4, "PIN"),
                maxlengthFieldValidatorPIN(4, 'PIN'),
                numericValidatorPIN(),
            ]],
            'termCondition': [false, [
                Validators.requiredTrue
            ]]
        }, {
            validator: {
                updateOn: 'blur'
            }
        });

        this.addCardForm.statusChanges.subscribe(() => {
            if (this.textInputs) {
                this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
            }
        });
    }


    _get5LastDigitsCardNumber(ecode) {
        if (!ecode) {
            return null;
        }
        return ecode.substr(ecode.length - 5);
    }

    errorMessage(path: string) {
        const control = this.addCardForm.get(path);
        const requiredMsg = app.Configuration.ContentMessage.required;
        if (control.valid) {
            return '';
        }

        if (path === 'pin' || path === 'termCondition') {
            if (control.hasError('required')) {
                return control.getError('required');
            } else {
                if (control.hasError('maxLengthField')) {
                    return control.getError('maxLengthField')
                }

                if (control.hasError('minlength')) {
                    return control.getError('minlength')
                }

                if (control.hasError('key')) {
                    return control.getError('key')
                }
            }
        }
    }

    showAlert(cardId, nickname) {
        const displayCard = AddCardSharingDataService.getInstance().getDisplayCard(cardId);
        let alert = this.alertCtrl.create({
            title: app.Configuration.ContentMessage.account_management_card_added_to_wallet,
            cssClass: 'l2s-alert--flat l2s-alert--default',
            message: "<p>You added: </p><p>" + nickname + "</p><p>" + displayCard + "</p><p class='m-t-10'>To your Card Wallet</p>",
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'main-button',
                    handler: data => {
                        this.addCardDataService.gotoCardDetailAndReload('', cardId);
                    }
                },

                {
                    text: '',
                    cssClass: 'close-button icon icon-ios ion-ios-close',
                    handler: data => {
                        this.addCardDataService.gotoCardDetailAndReload('', cardId);
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    }

    ionViewWillEnter() {

        if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
            if (this.navParams.get('cardInfo')) {
                this.cardInfo = this.navParams.get('cardInfo');
                this.lastEcode = this._get5LastDigitsCardNumber(this.cardInfo.cardID);
            }

            if (this.navParams.get('responseCard')) {
                this.responseCard = this.navParams.get('responseCard');
            }
        }
    }


    getHelpContent(code) {
        LoadingIndicatorService.getInstance().showLoadingIndicator();
        const observer = {
            next: (res) => {
                if (!res.ok) {
                    return;
                }
                if (res && res.response && res.response.message) {
                    this.showAlertHelp(res.response.message);
                }
            },
            error: (error) => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            },
            complete: () => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            }
        };
        this.addCardDataService
            .getHelp(code)
            .subscribe(observer);
    }

    showAlertHelp(message) {
        let alert = this.alertCtrl.create({
            title: '',
            cssClass: 'l2s-alert--flat l2s-alert--default',
            message: message,
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'main-button',
                    handler: data => {
                    }
                },{
                text: '',
                cssClass: 'close-button icon icon-ios ion-ios-close',
                handler: data => {
                }
              }
            ]
        });
        alert.present();
    }

    gotoTermsPage(code) {
        LoadingIndicatorService.getInstance().showLoadingIndicator();
        const observer = {
            next: (res) => {
                if (!res.ok) {
                    return;
                }
                let body = res.response;
                if (res && res.response && res.response.message) {
                    const url = Utils.normalizeUrl(res.response.message);
                    const browser = this.iab.create(url, "_system", "location=true");
                }
            },
            error: (error) => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            },
            complete: () => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            }
        };
        this.addCardDataService
            .getHelp(code)
            .subscribe(observer);
    }

    submitToAddCard() {

        let body = {
            "cardID": this.cardInfo.cardID,
            "csc": '',
            "nickname": this.cardInfo.nickname,
            "pin": this.addCardForm.value.pin,
            "termsAgreed": this.addCardForm.value.termCondition,
        }

        LoadingIndicatorService.getInstance().showLoadingIndicator();
        this.model.pin = this.addCardForm.value.pin;
        const observer = {
            next: (res) => {
                if (!res.ok) {
                    return;
                }
                let body = res.response;
                if (Utils.isNotNull(body) && Utils.isNotNull(body.cardAdded)) {
                    if (body.cardAdded) {
                        this.showAlert(this.cardInfo.cardID, this.cardInfo.nickname);
                    }
                }
            },
            error: (error) => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            },
            complete: () => {
                LoadingIndicatorService.getInstance().hideLoadingIndicator();
            }
        };
        this.addCardDataService
            .addCard(body)
            .subscribe(observer);
    }


    _convertCardId(cardId) {
        if (!cardId) {
            return null;
        }
        let newCard = (cardId.substr(0, 4) + '-') +
            (cardId.substr(4, 4) + '-') +
            (cardId.substr(8, 4) + '-') +
            (cardId.substr(12, 4) + '-') +
            (cardId.substr(16, 3));
        return newCard;
    }

    gotoYourCard() {
        this.navCtrl.setRoot('AddCardNumberPage');
    }

}
