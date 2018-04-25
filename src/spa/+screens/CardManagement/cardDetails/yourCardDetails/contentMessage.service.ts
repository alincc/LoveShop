import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Utils } from '../../../../framework/services/utilities/utilities';
import {AppConfig as app} from "../../../../framework/appConfig";
import { YourCardDetailsApiGateway } from './yourCardDetailsApiGateway';
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";

@Injectable()
export class ContentMessageService {

  constructor(
    private yourCardDetailsApiGateway: YourCardDetailsApiGateway
  ) {

  }

  public getContentMessage() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        let msg_code =
          [
            'cardCsc_required',
            'cardCsc_less_than_min',
            'cardCsc_invalid_characters',
            'confirm_removal',
            'wallet_remove_card_message',
            'use_fingerprint_not_PIN',
            'use_same_finger',
            'changing_PIN',
            'park_api_enter_userid_password_to_change_pin',
            'current_email',
            'basket_form_no_products_basket',
            'basket_form_checkout_current_product',
            'basket_form_no_card_available',

            'add_card_add_new_card',
            'add_card_use_saved_card',
            'order_datacash_payment_capture_default_cardNumber_label',
            'order_datacash_payment_capture_default_label_save_card',
            'order_confirmation_default_p_title',
            'order_confirmation_default_p_strapline',
            'order_confirmation_default_confirmation_SMS',

            'purchasemastercard_form_label_card_details',
            'order_confirmation_card_tfoot',
            'empty_top_up_card_later',
            // 'suspend_card_portlet_suspend_card',
            'remove_card_confirm'

          ];

        for (let i = 0; i < msg_code.length; i++) {
          if (Utils.isNotNull(res[i]) && Utils.isNotNull(res[i].response) && Utils.isNotNull(res[i].response.message)) {
            let mg_item_code = msg_code[i];
            app.Configuration.ContentMessage[mg_item_code] = res[i].response.message;
          }
        }
        LoadingIndicatorService.getInstance().hideLoadingIndicator();

      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };

    Observable.combineLatest(
      this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.error.cardCsc-required"),
      this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.error.cardCsc-less-than-min"),
      this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.error.cardCsc-invalid-characters"),
      this.yourCardDetailsApiGateway.getMessageByCode("confirm-removal"),
      this.yourCardDetailsApiGateway.getMessageByCode("wallet.remove-card.message"),
      this.yourCardDetailsApiGateway.getMessageByCode("use-fingerprint-not-PIN"),
      this.yourCardDetailsApiGateway.getMessageByCode("use-same-finger"),
      this.yourCardDetailsApiGateway.getMessageByCode("changing-PIN"),
      this.yourCardDetailsApiGateway.getMessageByCode("park-api.enter-userid-password-to-change-pin"),
      this.yourCardDetailsApiGateway.getMessageByCode("current-email"),
      this.yourCardDetailsApiGateway.getMessageByCode("basket.form.no-products-basket"),
      this.yourCardDetailsApiGateway.getMessageByCode("basket.form.checkout-current-product"),
      this.yourCardDetailsApiGateway.getMessageByCode("basket.form.no-card-available"),

      this.yourCardDetailsApiGateway.getMessageByCode("add-card.add-new-card"),
      this.yourCardDetailsApiGateway.getMessageByCode("add-card.use-saved-card"),
      this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.cardNumber.label"),
      this.yourCardDetailsApiGateway.getMessageByCode("order.datacash-payment.capture.default.label.save-card"),
      this.yourCardDetailsApiGateway.getMessageByCode("order.confirmation.default.p-title"),
      this.yourCardDetailsApiGateway.getMessageByCode("order.confirmation.default.p-strapline"),
      this.yourCardDetailsApiGateway.getMessageByCode("order.confirmation.default.confirmation-SMS"),

      this.yourCardDetailsApiGateway.getMessageByCode("purchasemastercard.form.label.card-details"),
      this.yourCardDetailsApiGateway.getMessageByCode("order-confirmation.card.tfoot"),
      this.yourCardDetailsApiGateway.getMessageByCode("empty-top-up-card-later"),

      // this.yourCardDetailsApiGateway.getMessageByCode("to_usnuspend"),
      // this.yourCardDetailsApiGateway.getMessageByCode("suspend-card-portlet-suspend-card"),
      this.yourCardDetailsApiGateway.getMessageByCode("remove-card-confirm")


    ).subscribe(observer);
  }

}
