import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardType } from '../../../../models/card-type';
import { Utils } from '../../../../framework/services/utilities/utilities';
import { YourCardDetailsSharingDataService } from './yourCardDetailsSharingData.services';
import { CardDetailSharingDataService } from '../cardDetailsSharing.services';

@Injectable()
export class CardActiveService {

  constructor() {

  }

  getCardActiveIndex(cardList) {
    let cardActiveIndex: number = 0;
    let cardInforActive = YourCardDetailsSharingDataService.getInstance().getCardInforActive;

    if (Utils.isNotNull(cardInforActive)) {
      cardActiveIndex = this.findCardActiveIndex(
        cardInforActive,
        cardList
      );
    } else {
      cardActiveIndex = this.getDefaultCardActiveIndex(cardList);
    }

    return cardActiveIndex;
  }

  private findCardActiveIndex(cardInforActive, cardList) {
    let cardActiveIndex: number = 0;
    if (Utils.isNotNull(cardInforActive) && Array.isArray(cardList)) {
      let cardIndex;
      let breakCheckIndex = false;
      if (Utils.isNotNull(cardInforActive.cardID) && cardInforActive.cardID !== '') {
        if (cardInforActive.cardID.indexOf('-') > 0) {
          cardIndex = cardList.findIndex(x => x.cardId === cardInforActive.cardID);
        } else {
          for (let i = 0; i < cardList.length; i++) {
            if (cardList[i].cardId && cardList[i].cardId.indexOf('-') > 0) {
              if (cardList[i].cardId.replace(/-/g, "") === cardInforActive.cardID) {
                cardIndex = i;
              }
            } else if (cardList[i].cardId === cardInforActive.cardID) {
              cardIndex = i;
            }
          }
        }
        breakCheckIndex = true;
      }

      if (Utils.isNotNull(cardInforActive.cardNumber) && breakCheckIndex !== true && cardInforActive.cardNumber !== '') {
        cardIndex = cardList.findIndex(x => x.cardNumber === cardInforActive.cardNumber);
      }

      if (Utils.isNotNull(cardIndex) && cardIndex !== -1) {
        cardActiveIndex = cardIndex;

        let card = {
          cardNumber: cardList[cardIndex].cardNumber,
          cardID: cardList[cardIndex].cardId,
        }
        YourCardDetailsSharingDataService.getInstance().saveCardCurrent = card;
        YourCardDetailsSharingDataService.getInstance().saveCardInforActive = card;

      } else {
        const currentIndex = 0;
        cardActiveIndex = 0;
        let card = {
          cardNumber: cardList[currentIndex].cardNumber,
          cardID: cardList[currentIndex].cardId,
        }
        YourCardDetailsSharingDataService.getInstance().saveCardCurrent = card;
        YourCardDetailsSharingDataService.getInstance().saveCardInforActive = card;
      }
    }

    return cardActiveIndex;

  }

  private getDefaultCardActiveIndex(cardList) {
    let cardActiveIndex: number = 0;
    const currentIndex = 0;
    cardActiveIndex = 0;
    let card = {
      cardNumber: cardList[currentIndex].cardNumber,
      cardID: cardList[currentIndex].cardId,
    }
    YourCardDetailsSharingDataService.getInstance().saveCardCurrent = card;
    YourCardDetailsSharingDataService.getInstance().saveCardInforActive = card;

    return cardActiveIndex;
  }


  getActiveCardIndex4Slide2(cardList) {
    let cardActiveIndex: number = -1;
    let cardInforActive = YourCardDetailsSharingDataService.getInstance().getCardInforActive;
    if (Utils.isNotNull(cardInforActive)) {

      if (Utils.isNotNull(cardInforActive) && Array.isArray(cardList)) {
        let cardIndex;
        let breakCheckIndex = false;
        if (Utils.isNotNull(cardInforActive.cardID) && cardInforActive.cardID !== '') {
          if (cardInforActive.cardID.indexOf('-') > 0) {
            cardIndex = cardList.findIndex(x => x.cardId === cardInforActive.cardID);
          } else {
            for (let i = 0; i < cardList.length; i++) {
              if (cardList[i].cardId && cardList[i].cardId.indexOf('-') > 0) {
                if (cardList[i].cardId.replace(/-/g, "") === cardInforActive.cardID) {
                  cardIndex = i;
                }
              } else if (cardList[i].cardId === cardInforActive.cardID) {
                cardIndex = i;
              }
            }
          }
          breakCheckIndex = true;
        }

        if (Utils.isNotNull(cardInforActive.cardNumber) && breakCheckIndex !== true && cardInforActive.cardNumber !== '') {
          cardIndex = cardList.findIndex(x => x.cardNumber === cardInforActive.cardNumber);
        }

        if (Utils.isNotNull(cardIndex) && cardIndex !== -1) {
          cardActiveIndex = cardIndex;
        } else {
          const currentIndex = 0;
          cardActiveIndex = 0;
          let card = {
            cardNumber: cardList[currentIndex].cardNumber,
            cardID: cardList[currentIndex].cardId,
          }
          YourCardDetailsSharingDataService.getInstance().saveCardCurrent = card;
          YourCardDetailsSharingDataService.getInstance().saveCardInforActive = card;
        }
      }

    } else {
      const currentIndex = 0;
      cardActiveIndex = 0;
      let card = {
        cardNumber: cardList[currentIndex].cardNumber,
        cardID: cardList[currentIndex].cardId,
      }
      YourCardDetailsSharingDataService.getInstance().saveCardCurrent = card;
      YourCardDetailsSharingDataService.getInstance().saveCardInforActive = card;
    }

    return cardActiveIndex;
  }



  getActiveIndex4CardDataReload(cardList) {
    let cardActiveIndex: number = -1;
    let defaultCardId: string = '';
    const gotoCardDataReload = CardDetailSharingDataService.getInstance().gotoCardDataReload;
    if (Utils.isNotNull(gotoCardDataReload) && Array.isArray(cardList)) {
      let cardIndex = -1;
      let breakCheckIndex = false;
      if (Utils.isNotNull(gotoCardDataReload.cardId) && gotoCardDataReload.cardId !== '') {
        if (gotoCardDataReload.cardId.indexOf('-') > 0) {
          cardIndex = cardList.findIndex(x => x.cardId === gotoCardDataReload.cardId);
        } else {
          for (let i = 0; i < cardList.length; i++) {
            let cardId = cardList[i].cardId;
            if (cardId) {
              if (cardId.indexOf('-') > 0) {
                cardId = cardId.replace(/-/g, "");
              }

              if (cardId === gotoCardDataReload.cardId) {
                cardIndex = i;
                break;
              }
            }
          }
        }

        if (cardIndex !== -1) breakCheckIndex = true;
      }

      if (Utils.isNotNull(gotoCardDataReload.cardNumber) && breakCheckIndex !== true && gotoCardDataReload.cardNumber !== '') {
        cardIndex = cardList.findIndex(x => x.cardNumber === gotoCardDataReload.cardNumber);
      }

      if (Utils.isNotNull(cardIndex) && cardIndex !== -1) {
        cardActiveIndex = cardIndex;
        defaultCardId = gotoCardDataReload.cardId;
      }
      CardDetailSharingDataService.getInstance().gotoCardDataReload = {};
    }

    return {
      cardActiveIndex: cardActiveIndex,
      defaultCardId: defaultCardId
    };
  }
}
