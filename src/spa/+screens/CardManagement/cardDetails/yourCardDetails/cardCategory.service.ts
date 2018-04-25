import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Utils } from '../../../../framework/services/utilities/utilities';
import { CardType } from '../../../../models/card-type';
import { CardInfoService } from './cardInfo.service';

@Injectable()
export class CardCategoryService {

  constructor(
    private cardInfoService: CardInfoService
  ) {

  }

  buildCardItemBaseOnCategory(card) {
    let cardItem = card;
    let canNotOpenExternalLink;
    if (Utils.isNotNull(cardItem.externalTransactionLink)) {
      canNotOpenExternalLink = false;
    } else {
      canNotOpenExternalLink = true;
    }
    cardItem.last4DigitCardNumber = this.cardInfoService.get4LastDigitsCardNumber(cardItem);
    if (cardItem.cardType === CardType.FLEXECASH) {
      cardItem = this.buildCardItem4Flexecash(cardItem);
    } else if (cardItem.cardType === CardType.FLEXECODE) {
      cardItem = this.buildCardItem4Flexecode(cardItem);
    } else if (cardItem.cardType === CardType.PMASTERCARD) {
      cardItem = this.buildCardItem4PmasterCard(cardItem);
    } else if (cardItem.cardType === CardType.MASTERCARD) {
      cardItem = this.buildCardItem4MasterCard(cardItem);
    } else if (cardItem.walletType === 'SUPERMARKET') {
      cardItem = this.buildCardItem4SuperMarket(
        cardItem,
        canNotOpenExternalLink
      );
    }

    return cardItem;
  }

  buildCardItem4Flexecash(cardItem) {
    let flexecash: any = {};
    flexecash.buttons = [
      {
        cardBtnId: "1",
        canTopUp: cardItem.canTopUp,
        cardBtnName: "Top Up",
        cardBtnLink: "AmountTopUpPage"
      },
      {
        cardBtnId: "2",
        showBenefits: cardItem.showBenefits,
        cardBtnName: "YOUR BENEFITS",
        cardBtnLink: "ExchangePage"
      },
      {
        cardBtnId: "3",
        cardBtnName: "TRANSACTIONS/BALANCE",
        cardBtnLink: "ViewCardStatementPage"
      },
      {
        cardBtnId: "4",
        cardBtnName: "WHERE TO SPEND",
        cardBtnLink: "Where2SpendInStoreMapPage"
      }
    ];
    flexecash.options = [
      {
        cardOptId: "1",
        cardOptName: "Alerts",
        cssClass: "l2s-btn l2s-btn--outline",
        cardOptLink: "viewAlertSettingsPage",
        canRegisterSms: cardItem.canRegisterSms
      },
      {
        cardOptId: "2",
        cardOptName: "REPORT LOST OR STOLEN",
        cssClass: "l2s-btn l2s-btn--outline",
        cardOptLink: ""
      },
      {
        cardOptId: "3",
        cardOptName: "TERMS & CONDITIONS",
        cssClass: "l2s-btn l2s-btn--outline",
        cardOptLink: "TANDC"
      },
      {
        cardOptId: "4",
        cardOptName: "REMOVE",
        cssClass: "l2s-btn l2s-btn--outline",
        cardOptLink: "",
      },
      {
        cardOptId: "5",
        cardOptName: "Help",
        cssClass: "l2s-btn l2s-btn--outline",
        cardOptLink: "CardFAQPage"
      }
    ];

    return flexecash;
  }

  buildCardItem4Flexecode(cardItem) {
    let flexecode: any = {};
    flexecode.buttons = [
      {
        cardBtnId: "1",
        canTopUp: cardItem.canTopUp,
        cardBtnName: "Top Up",
        cardBtnLink: "AmountTopUpPage"
      },
      {
        cardBtnId: "2",
        showBenefits: cardItem.showBenefits,
        cardBtnName: "YOUR BENEFITS",
        cardBtnLink: "ExchangePage"
      },
      {
        cardBtnId: "3",
        cardBtnName: "TRANSACTIONS/BALANCE",
        cardBtnLink: "ViewCardStatementPage"
      },
      {
        cardBtnId: "4",
        cardBtnName: "WHERE TO SPEND",
        cardBtnLink: "Where2SpendInStoreMapPage"
      }
    ];
    flexecode.options = [
      {
        cardOptId: "1",
        cardOptName: "REPORT LOST OR STOLEN",
        cardOptLink: ""
      },
      {
        cardOptId: "2",
        cardOptName: "TERMS & CONDITIONS",
        cardOptLink: "TANDC"
      },
      {
        cardOptId: "3",
        cardOptName: "REMOVE",
        cardOptLink: "",
      },
      {
        cardOptId: "4",
        cardOptName: "Help",
        cardOptLink: "CardFAQPage"
      }
    ];

    return flexecode;
  }

  buildCardItem4PmasterCard(cardItem) {
    let pmasterCard: any = {};
    pmasterCard.buttons = [
      {
        cardBtnId: "2",
        cardBtnName: "TRANSACTIONS/BALANCE",
        cardBtnLink: "ViewCardStatementPage"
      },
      {
        cardBtnId: "3",
        cardBtnName: "WHERE TO SPEND",
        cardBtnLink: "Where2SpendInStoreMapPage"
      }
    ];

    pmasterCard.options = [
      {
        cardOptId: "3",
        cardOptName: "TERMS & CONDITIONS",
        cardOptLink: "TANDC"
      },
      {
        cardOptId: "4",
        cardOptName: "Help",
        cardOptLink: "CardFAQPage"
      }
    ];

    if (cardItem.issuer !== "") {
      pmasterCard.options.unshift({
          cardOptId: "2",
          cardOptName: "Suspend",
          cssClass: "l2s-btn l2s-btn--outline",
          cardOptLink: ""
        }
      );
    }

    return pmasterCard;
  }

  buildCardItem4MasterCard(cardItem) {
    let masterCard: any = {};
    masterCard.buttons = [
      {
        cardBtnId: "2",
        cardBtnName: "TRANSACTIONS/BALANCE",
        cardBtnLink: "ViewCardStatementPage"
      },
      {
        cardBtnId: "3",
        cardBtnName: "WHERE TO SPEND",
        cardBtnLink: "Where2SpendInStoreMapPage"
      }
    ];

    masterCard.options = [
      {
        cardOptId: "3",
        cardOptName: "TERMS & CONDITIONS",
        cardOptLink: "TANDC"
      },
      {
        cardOptId: "4",
        cardOptName: "Help",
        cardOptLink: "CardFAQPage"
      }
    ];

    if (cardItem.issuer !== "") {
      masterCard.buttons.unshift(
        {
          cardBtnId: "1",
          issuer: "FIS",
          cssClass: "l2s-btn l2s-btn--outline",
          cardBtnName: "Retrieve Card Details",
        }
      );

      masterCard.options.unshift(
        {
          cardOptId: "1",
          cardOptName: "Refund value",
          cssClass: "l2s-btn l2s-btn--outline",
          cardOptLink: "RefundValuePage"
        }
      );
    }
    return masterCard;
  }

  buildCardItem4SuperMarket(
    cardItem,
    canNotOpenExternalLink
  ) {
    let superMarket: any = {};
    superMarket.buttons = [
      {
        cardBtnId: "1",
        canTopUp: cardItem.canTopUp,
        cardBtnName: "Top Up",
        cardBtnLink: "AmountTopUpPage"
      },
      {
        cardBtnId: "2",
        cardBtnName: "Top Up Information",
        cardBtnLink: "TopUpInfoPage"
      },
      {
        cardBtnId: "3",
        canNotOpenLink: canNotOpenExternalLink,
        cardBtnName: "TRANSACTIONS/BALANCE",
        cardBtnLink: "ViewSCardStatementPage"
      },
      {
        cardBtnId: "4",
        cardBtnName: "FAQS",
        cardSecondaryBtnLink: 'SCardFAQPage',
        cardBtnLink: "SCardFAQPage"
      }
    ];

    superMarket.options = [
      {
        cardOptId: "1",
        cardOptName: "Remove",
        cssClass: "l2s-btn l2s-btn--outline",
        cardOptLink: ""
      }
    ];
    return superMarket;
  }


}
