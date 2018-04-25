import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardType } from '../../../../models/card-type';
import { YourCardDetailsSharingDataService } from './yourCardDetailsSharingData.services';
import { Platform, NavController } from 'ionic-angular';

@Injectable()
export class AddCardEventService {

  constructor(
    private platform: Platform,
    private navCtrl: NavController
  ) {

  }

  raiseAddCardEvent() {
    let isGotoFromLogin = YourCardDetailsSharingDataService.getInstance().goToFromLogin;
    if (isGotoFromLogin === true) {
      YourCardDetailsSharingDataService.getInstance().goToFromLogin = false;
      this.navigateAddCard();
      return;
    }

    let isFromRegisterPage = YourCardDetailsSharingDataService.getInstance().CallFromRegister;
    if (isFromRegisterPage && isFromRegisterPage === true) {
      YourCardDetailsSharingDataService.getInstance().CallFromRegister = false;
      return;
    }

    if (!YourCardDetailsSharingDataService.getInstance().PauseSub) {
      YourCardDetailsSharingDataService.getInstance().PauseSub = this.platform.pause.subscribe((res) => {
        if (YourCardDetailsSharingDataService.getInstance().NumberOfCards > 0) {
          return;
        }

        let IsActiveYourCardDetailsPage = YourCardDetailsSharingDataService.getInstance().IsActiveYourCardDetailsPage;
        if (IsActiveYourCardDetailsPage && IsActiveYourCardDetailsPage === true) {
          this.navigateAddCard();
        }
      });
    }

    let goToFromRemove = YourCardDetailsSharingDataService.getInstance().goToFromRemove;
    if (goToFromRemove === true) {
      YourCardDetailsSharingDataService.getInstance().goToFromRemove = false;
      YourCardDetailsSharingDataService.getInstance().needBackToYourCard = true;
    }

    this.navCtrl.push('AddCardNumberPage');
  }

  private navigateAddCard() {
    let isOpenedAddCardScreen = YourCardDetailsSharingDataService.getInstance().IsOpenedAddCardScreen;
    if (!isOpenedAddCardScreen) {
      this.navCtrl.push('AddCardNumberPage');
    }
  }


}
