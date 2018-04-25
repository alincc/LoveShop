import { BehaviorSubject } from "rxjs/Rx";

export class OrderManagementSharingDataService {
  private defaultMasterData: any = {};
  private orderGenerateEcode: any;
  private orderGenerateSupermarket: any;
  private orderGenerate: any;

  private primaryCard: any;

  private currentMasterData: any = Object.assign({}, this.defaultMasterData);
  private _state$ = new BehaviorSubject<any>(this.currentMasterData);

  get state$() {
    return this._state$;
  }

  resetState() {
    this.currentMasterData = Object.assign({}, this.defaultMasterData);
    this._state$.next(this.currentMasterData);
  }


  saveOrderGenerateOrderSupermarket(data: any) {
    this.orderGenerateSupermarket = data;
  }

  getOrderGenerateOrderSupermaket() {
    return this.orderGenerateSupermarket;
  }

  resetOrderGenerateOrderSuperMarket() {
    this.orderGenerateSupermarket = Object.assign({}, this.defaultMasterData);
  }


  savePrimaryCard(data: any) {
    this.primaryCard = data;
  }

  getPrimaryCard() {
    return this.primaryCard;
  }

  resetPrimaryCard() {
    this.primaryCard = Object.assign({}, this.defaultMasterData);
  }

  private static _instance: OrderManagementSharingDataService = new OrderManagementSharingDataService();
  public static getInstance(): OrderManagementSharingDataService {
    return OrderManagementSharingDataService._instance;
  }
  constructor() {
    if (OrderManagementSharingDataService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use YourCardDetailsSharingDataService.getInstance() instead of new.');
    }

    OrderManagementSharingDataService._instance = this;
  }

}
