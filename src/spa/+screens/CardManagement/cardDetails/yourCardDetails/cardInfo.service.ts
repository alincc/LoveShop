import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardType } from '../../../../models/card-type';

@Injectable()
export class CardInfoService {

  constructor() {

  }

  get4LastDigitsCardNumber(card) {
    let cardNumber = null;
    if (card.cardType === CardType.FLEXECODE) {
      cardNumber = card.cardId;
    } else {
      cardNumber = card.cardNumber;
    }

    if (!cardNumber) {
      return null;
    }

    if (card.cardType === CardType.FLEXECODE && cardNumber.indexOf('-') > 0) {
      cardNumber = cardNumber.replace(/-/g, "");
    }
    return cardNumber.substr(cardNumber.length - 4);
  }


}
