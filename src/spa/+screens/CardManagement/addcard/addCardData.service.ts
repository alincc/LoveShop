import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpAddCardService } from "./httpAddCard.service";
import {HttpService} from "../../../framework/services/httpService/http.service";
import {NavController, ViewController} from 'ionic-angular';
import {CardDetailSharingDataService} from "../cardDetails/cardDetailsSharing.services";
import {NavService} from "../../../shared/nav.service";
import {YourCardDetailsSharingDataService} from "../cardDetails/yourCardDetails/yourCardDetailsSharingData.services";

@Injectable()
export class AddCardDataService {
  constructor(
    private http: HttpService,
    private httpAddCard: HttpAddCardService,
    public navCtrl: NavController,
    private navSvc: NavService,
    private viewCtrl: ViewController,
  ) {
  }

  linkPage;

  checkCardTypeToAddCard(cardID): Observable<any> {
    return this.httpAddCard.post("card/type", 'ADD_CARD', cardID);
  }

  checkCardTypeBalance(cardID): Observable<any> {
    return this.httpAddCard.post("card/type", 'BALANCE', cardID);
  }

  addCard(cardModel): Observable<any> {
    return this.httpAddCard.post("card", "",cardModel);
  }

  getHelp(code): Observable<any> {
    return this.http.get("cms/message/code="+code);
  }

  getRetrieveCardsInfo(): Observable<any> {
    return this.http.get("card");
  }

  gotoCardDetailAndReload(cardId , cardNumber) {

    YourCardDetailsSharingDataService.getInstance().goToFromAddCard = true;
    //variable is not make sense but cardId:CardNumber is correct
    let needBackToYourCard =  YourCardDetailsSharingDataService.getInstance().needBackToYourCard;
    if(needBackToYourCard === true) {
      YourCardDetailsSharingDataService.getInstance().needBackToYourCard = false;
      let card = {
        reloadData: true,
        cardId:cardNumber ,
        cardNumber: cardId,
      }
      CardDetailSharingDataService.getInstance().gotoCardDataReload = card;
      this.navCtrl.popToRoot();
    } else {
      this.navCtrl.setRoot('TabsPage');
    }
  }



  saveNavigationState(linkPage) {
    this.linkPage = linkPage;
  }

  resetNavigationState() {
    this.linkPage = null;
  }


  navigationPage(body, cardID) {

    if(body.cardType === 'FLEXECASH') {

      const index = this.viewCtrl.index;
      if(index > 1) {
        this.navCtrl.remove(index , 1, {animate: false, duration: 0});
      }
      this.navCtrl.push('AddFlexCashPage', {'cardNumber': cardID, 'termsPath': body.termsPath, animate: false, duration: 0});

    } else if(body.cardType === 'FLEXECODE_2.0') {
      const index = this.viewCtrl.index;
      if(index > 1) {
        this.navCtrl.remove(index , 1, {animate: false, duration: 0});
      }
      this.navCtrl.push('AddFlexECodePage', {'cardNumber': cardID,  animate: false, duration: 0});

    } else if(body.cardType === 'MASTERCARD') {
      const index = this.viewCtrl.index;
      if(index > 1) {
        this.navCtrl.remove(index , 1, {animate: false, duration: 0});
      }
      this.navCtrl.push('AddCardPhysicalMasterCardPage',
        {
          'cardNumber': cardID,
          'termsPath': body.termsPath,
          'bodyCardType': body ,
          animate: false,
          duration: 0
        });

    } else if(body.cardType === 'STORECARD' && body.doubleEnterFields === 'CARD_NUMBER') {
      const index = this.viewCtrl.index;
      if(index > 1) {
        this.navCtrl.remove(index , 1, {animate: false, duration: 0});
      }
      this.navCtrl.push('AddCardTescoPage', {'cardNumber': cardID, animate: false, duration: 0});

    } else if(body.cardType === 'STORECARD' && body.doubleEnterFields === 'SERIAL_NUMBER') {
      const index = this.viewCtrl.index;
      if(index > 1) {
        this.navCtrl.remove(index , 1, {animate: false, duration: 0});
      }
      this.navCtrl.push('AddCardSainsburysPage', {'cardNumber': cardID, animate: false, duration: 0});
    }
  }

}
