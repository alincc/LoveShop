import { BehaviorSubject } from "rxjs/Rx";
import {Utils} from "../../../framework/services/utilities/utilities";

export class CardBalanceSharingDataService {
  private defaultMasterData: any = {};
  private currentMasterData: any = Object.assign({}, this.defaultMasterData);
  private _state$ = new BehaviorSubject<any>(this.currentMasterData);

  get state$() {
    return this._state$;
  }

  resetState() {
    this.currentMasterData = Object.assign({}, this.defaultMasterData);
    this._state$.next(this.currentMasterData);
  }

  saveStep1Screen(step1Model: any) {
    this.currentMasterData.step1Model = step1Model;
  }

  saveStep2Screen(step2Model: any) {
    this.currentMasterData.step2Model = step2Model;
  }
  getCardNumberAtStep1() {
    return this.currentMasterData.step1Model.cardNumber;
  }

  getCardData() {
    if (Utils.isNotNull(this.currentMasterData.step2Model)) {
      let cardModel = {
        // step 1
        cardID: this.currentMasterData.step1Model.cardNumber,
        // step 2
        csc: this.currentMasterData.step2Model.securityCode
      };
      return cardModel;

    } else {
      let cardModel = {
        cardID: this.currentMasterData.step1Model.cardNumber,
      };
      return cardModel;
    }
  }

  getCardDataOnlyCardNumber() {
    let cardModel = {
      // step 1
      cardNumber: this.currentMasterData.step1Model.cardNumber,

    };

    return cardModel;
  }


  // tslint:disable-next-line:member-ordering
  private static _instance: CardBalanceSharingDataService = new CardBalanceSharingDataService();
  public static getInstance(): CardBalanceSharingDataService {
    return CardBalanceSharingDataService._instance;
  }

  constructor() {
    if (CardBalanceSharingDataService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use CardBalanceSharingDataService.getInstance() instead of new.');
    }

    CardBalanceSharingDataService._instance = this;
  }

}
