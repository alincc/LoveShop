import { LoadingController, Loading } from 'ionic-angular';

// pillow time between call hide and show
// any call whithin this time the old instance of loading will be kept and no new instance be created.
const PILLOW_TIME_MS = 500;

export class LoadingIndicatorService {
  private hiddingTimeoutId: number;
  private loading: Loading;
  private loadingCtrl: LoadingController;

  showLoadingIndicator() {
    if(!this.loading && !this.hiddingTimeoutId){
      this.loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: "Please wait...",
        dismissOnPageChange: false
      });
      this.hiddingTimeoutId = null;
      this.loading.present();
    } else {
      clearTimeout(this.hiddingTimeoutId);
      this.hiddingTimeoutId = null;
    };

  }

  hideLoadingIndicator() {
    if(this.hiddingTimeoutId){
      clearTimeout(this.hiddingTimeoutId);
    }
    this.hiddingTimeoutId = setTimeout(() => {
      if(this.loading) {
        this.loading.dismiss();
        this.loading = null;
        this.hiddingTimeoutId = null;
      }
    }, PILLOW_TIME_MS);
  }

  initializeLoadingIndicator(loadingCtrl: any) {
    if (
      (this.loadingCtrl === undefined)
      || (this.loadingCtrl === null)
    ) {
      this.loadingCtrl = loadingCtrl;
      this.hiddingTimeoutId = null;
    }
  }

  resetState() {
    if(this.loading) {
      this.loading.dismiss();
    }
    if(this.hiddingTimeoutId) {
      clearTimeout(this.hiddingTimeoutId);
    }
    this.loading = null;
    this.hiddingTimeoutId = null;
  }

  // tslint:disable-next-line:member-ordering
  private static _instance: LoadingIndicatorService = new LoadingIndicatorService();
  public static getInstance(): LoadingIndicatorService {
    return LoadingIndicatorService._instance;


  }

  constructor() {
    if (LoadingIndicatorService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use LoadingIndicatorService.getInstance() instead of new.');
    }

    LoadingIndicatorService._instance = this;
  }

}
