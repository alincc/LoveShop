import { BehaviorSubject } from "rxjs/Rx";

export class AddCardSharingDataService {
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
  getStep1Model() {
    return Object.assign({}, this.currentMasterData.step1Model);
  }
  getCardNumberAtStep1() {
    return this.currentMasterData.step1Model.cardID;
  }

  getTopUpData() {
    let cardModel = {
      // step 1
      amountTopUp: this.currentMasterData.step1Model.cardID,


    };

    return cardModel;
  }

  getDisplayCard(cardID) {
    let displayCard = cardID.toString().replace(/-/g, '');
    displayCard = displayCard.substring(0, displayCard.length - 4).replace(/./g, '*') +
      displayCard.substring(displayCard.length - 4);
    return displayCard;
  }

  // tslint:disable-next-line:member-ordering
  private static _instance: AddCardSharingDataService = new AddCardSharingDataService();
  public static getInstance(): AddCardSharingDataService {
    return AddCardSharingDataService._instance;
  }
  constructor() {
    if (AddCardSharingDataService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use AddCardSharingDataService.getInstance() instead of new.');
    }

    AddCardSharingDataService._instance = this;
  }

}
