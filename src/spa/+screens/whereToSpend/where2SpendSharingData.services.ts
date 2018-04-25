import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from 'rxjs/Subject';

export class Where2SpendSharingDataService {

    private static _instance: Where2SpendSharingDataService;
    
    categories: any;
    selectedCard: any;
    useMyLocation: any;
    currenrLocation: any;
    keepLocation: any;
    keepData: any;
    refreshCategory: any;
    gpsStatus: any;
    needBackToYOurCardDetail: boolean = false;
    pickupAddress: string;

    updateEvent$: Subject<any> = new Subject();

    set needBackToYOurCard(status) {
        this.needBackToYOurCardDetail =  status;
    }

    get needBackToYOurCard() {
        return this.needBackToYOurCardDetail;
    }

    resetState() {
        this.categories = null;
        this.selectedCard = null;
        this.useMyLocation = true;
        this.currenrLocation = false;
        this.keepLocation = false;
        this.keepData = false;
        this.refreshCategory = false;
        this.gpsStatus = false;
        this.needBackToYOurCardDetail = false;
    }

    static getInstance(): Where2SpendSharingDataService {
        if(!Where2SpendSharingDataService._instance){
            Where2SpendSharingDataService._instance = new Where2SpendSharingDataService();
        }
        return Where2SpendSharingDataService._instance ;
    }

    constructor(
    ) {
    }


}
