export class BenefitsDataService {
    static _instance: BenefitsDataService;

    static getInstance(): BenefitsDataService {
        if (!this._instance) {
            this._instance = this.createInstance();
        }
        return this._instance;
    }

    static createInstance(): BenefitsDataService {
        return new BenefitsDataService();
    }

    private _currentCardNumber: string;
    ignoreCheckBenefits: boolean;

    constructor() {
        this.currentCardNumber = null;
    }

    get currentCardNumber(): string {
        return this._currentCardNumber;
    }

    set currentCardNumber(value: string) {
        this._currentCardNumber = value;
    }

    private _needBackToExchange = {
        needBackToExchange: false,
        currentIndex: null,
    };

    setNeedBackToExchange(status, index) {
        this._needBackToExchange.needBackToExchange = status;
        this._needBackToExchange.currentIndex = index;
    }

    getNeedBackToExchange() {
        return this._needBackToExchange;
    }

    resetNeedBackToExchange() {
        this._needBackToExchange = {
            needBackToExchange: false,
            currentIndex: null,
        };
    }


}