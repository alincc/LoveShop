import { BehaviorSubject } from "rxjs/Rx";

export class OrderMasterCardExchangeSharingDataService {
  private defaultMasterData: any = {};
  private totalValue: any;
  private orderValue: any;
  private primaryCard: any;
  private orderComplete: any;

  private currentMasterData: any = Object.assign({}, this.defaultMasterData);
  private _state$ = new BehaviorSubject<any>(this.currentMasterData);

  get state$() {
    return this._state$;
  }

  resetState() {
    this.currentMasterData = Object.assign({}, this.defaultMasterData);
    this._state$.next(this.currentMasterData);
  }

  saveOrderValue(totalValue: any) {
    this.orderValue = totalValue;
  }

  getorderValue() {
    return this.orderValue;
  }

  saveExchangeValue(totalValue: any) {
    this.totalValue = totalValue;
  }

  getExchangeValue() {
    return this.totalValue;
  }

  saveExchangeCompleteValue(orderComplete: any) {
    this.orderComplete = orderComplete;
  }

  getExchangeCompleteValue() {
    return this.orderComplete;
  }


  savePrimaryCard(primaryCard: any) {
    this.primaryCard = primaryCard;
  }

  getPrimaryCard() {
    return this.primaryCard;
  }



  // tslint:disable-next-line:member-ordering
  private static _instance: OrderMasterCardExchangeSharingDataService = new OrderMasterCardExchangeSharingDataService();
  public static getInstance(): OrderMasterCardExchangeSharingDataService {
    return OrderMasterCardExchangeSharingDataService._instance;
  }
  constructor() {
    if (OrderMasterCardExchangeSharingDataService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use YourCardDetailsSharingDataService.getInstance() instead of new.');
    }

    OrderMasterCardExchangeSharingDataService._instance = this;
  }

}
