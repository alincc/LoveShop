import { BehaviorSubject } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";
import { Utils } from "../../../../framework/services/utilities/utilities";

export class YourCardDetailsSharingDataService {
  private defaultMasterData: any = {};
  private currentMasterData: any = Object.assign({}, this.defaultMasterData);
  private _state$ = new BehaviorSubject<any>(this.currentMasterData);
  private isOpenedAddCardScreen: boolean = false;
  private isActiveYourCardDetailsPage: boolean = false;
  private callFromRegister: boolean = false;
  private numberOfCards: any = 0;
  private pauseSub: any;
  private backToYourCard: any;
  private fromRemoveCard: any;
  private fromLogin: any;
  private fromAddCard: any;
  private currentCard: any;
  public tabs: any;
  public updateListCard$: Subject<any> = new Subject();
  public refreshListCards$: Subject<any> = new Subject();
  private cardInfoActive;
  
  get state$() {
    return this._state$;
  }

  resetState() {
    this.currentMasterData = Object.assign({}, this.defaultMasterData);
    this._state$.next(this.currentMasterData);
  }

  saveCardsData(cards: any) {
    this.currentMasterData.cards = cards;
    this.updateListCard$.next('updated');
  }

  getLatestCardInfoFromHomeSharing(currentCard) {
    let cardList = this.currentMasterData.cards || [];
    if (Utils.isNotNull(currentCard) && Array.isArray(cardList)) {
        let cardIndex;
        let breakCheckIndex = false;
        if (Utils.isNotNull(currentCard.cardID) && currentCard.cardID !== '') {
          if (currentCard.cardID.indexOf('-') > 0) {
            cardIndex = cardList.findIndex(x => x.cardId === currentCard.cardID);
          } else {
            for (let i = 0; i < cardList.length; i++) {
              if (cardList[i].cardId && cardList[i].cardId.indexOf('-') > 0) {
                if (cardList[i].cardId.replace(/-/g, "") === currentCard.cardID) {
                  cardIndex = i;
                }
              }
            }
          }
          breakCheckIndex = true;
        }

        if (Utils.isNotNull(currentCard.cardNumber) && breakCheckIndex !== true && currentCard.cardNumber !== '') {
          cardIndex = cardList.findIndex(x => x.cardNumber === currentCard.cardNumber);
        }

        return cardList[cardIndex];
    }

    return null;
}
  
  getCardsList() {
    return this.currentMasterData.cards || [];
  }

  // tslint:disable-next-line:member-ordering
  private static _instance: YourCardDetailsSharingDataService = new YourCardDetailsSharingDataService();
  public static getInstance(): YourCardDetailsSharingDataService {
    return YourCardDetailsSharingDataService._instance;
  }
  constructor() {
    if (YourCardDetailsSharingDataService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use YourCardDetailsSharingDataService.getInstance() instead of new.');
    }

    YourCardDetailsSharingDataService._instance = this;
  }

  public get IsOpenedAddCardScreen(){
    return this.isOpenedAddCardScreen;
  }

  public set IsOpenedAddCardScreen(state){
    this.isOpenedAddCardScreen = state;
  }

  public get IsActiveYourCardDetailsPage(){
    return this.isActiveYourCardDetailsPage;
  }

  public set IsActiveYourCardDetailsPage(state){
    this.isActiveYourCardDetailsPage = state;
  }

  public get CallFromRegister(){
    return this.callFromRegister;
  }

  public set CallFromRegister(state){
    this.callFromRegister = state;
  }

  public get NumberOfCards(){
    return this.numberOfCards;
  }

  public set NumberOfCards(value){
    this.numberOfCards = value;
  }

  public get PauseSub(){
    return this.pauseSub;
  }

  public set PauseSub(value){
    this.pauseSub = value;
  }

  public set needBackToYourCard(value){
    this.backToYourCard = value;
  }

  public get needBackToYourCard(){
    return this.backToYourCard;
  }

  public set goToFromRemove(value){
    this.fromRemoveCard = value;
  }

  public get goToFromRemove(){
    return this.fromRemoveCard;
  }

  public set goToFromLogin(value){
    this.fromLogin = value;
  }

  public get goToFromLogin(){
    return this.fromLogin;
  }


  public set goToFromAddCard(value){
    this.fromAddCard = value;
  }

  public get goToFromAddCard(){
    return this.fromAddCard;
  }

  public set saveCardCurrent(card){
    this.currentCard = card;
  }

  public get getCardCurrent(){
    return this.currentCard;
  }

    public set saveCardInforActive(card){
        this.cardInfoActive = card;
    }

    public get getCardInforActive(){
        return this.cardInfoActive;
    }

}
