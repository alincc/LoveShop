import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";

export class CardDetailSharingDataService {
    private defaultMasterData: any = {};
    private currentMasterData: any = Object.assign({}, this.defaultMasterData);
    private _state$ = new BehaviorSubject<any>(this.currentMasterData);
    private primaryCard;
    private currentCard;
    private _gotoCardData;
    private _gotoCardDataReload;

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

    getAmountTopupAtStep1() {
        return this.currentMasterData.step1Model.topUpInput;
    }

    savePrimaryCard(primaryCard) {

        this.primaryCard = primaryCard;
    }

    getPrimaryCard() {
        return this.primaryCard;
    }

    resetPrimaryCard() {
        this.primaryCard = null;
    }


    saveCurrentCard(currentCard) {
        this.currentCard = currentCard;
    }

    getCurrentCard() {
        return this.currentCard;
    }

    resetCurrentCard() {
        this.currentCard = null;
    }

    get gotoCardData() {
        return this._gotoCardData;
    }

    set gotoCardData(card) {
        this._gotoCardData = card;
    }

    get gotoCardDataReload() {
        return this._gotoCardDataReload;
    }

    set gotoCardDataReload(card) {
        this._gotoCardDataReload = card;
    }

    // tslint:disable-next-line:member-ordering
    private static _instance: CardDetailSharingDataService = new CardDetailSharingDataService();

    public static getInstance(): CardDetailSharingDataService {
        return CardDetailSharingDataService._instance;
    }

    constructor() {
        if (CardDetailSharingDataService._instance) {
            throw new Error('Error: Instantiation failed: '
                + 'Use CardDetailSharingDataService.getInstance() instead of new.');
        }

        CardDetailSharingDataService._instance = this;
    }

}
