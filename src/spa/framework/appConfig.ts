export class AppConfig {
  // Reference example
  // import { AppConfig as app } from "../../../../framework/appConfig";
  // How to use:
  // location: any = app.Configuration.Where2SpendInStoreMap.defaultLocation;
  static Configuration: any = {
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
      TOKEN_INVALID: "Token is invalid." ,
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

      required : "",
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
}