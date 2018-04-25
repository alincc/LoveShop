export class ToastMessageService {
  private lastShow: number;
  private lastMessage: string;
  private toastCtrl: any;

  showToastMessage(message, duration = 5000) {
    if (this.canShowToastMessage(message)) {
      // update time of last show
      this.lastShow = new Date().getTime();
      this.lastMessage = message;
      let toast = this.toastCtrl.create({
        message: message,
        duration: duration,
        position: 'top',
        dismissOnPageChange: false
      });

      toast.onDidDismiss(() => {
      });

      toast.present();
    }
  }

  // tslint:disable-next-line:no-unused-variable
  private canShowToastMessage(message) {
    if (message !== this.lastMessage) {
      return true;
    }
    
    let now = new Date().getTime();
    let timeDiff = now - this.lastShow;
    let diffSeconds = Math.ceil(timeDiff / 1000);

    // greater than 5 seconds
    // isGreaterThan5Seconds = diffSeconds > 5
    // return true else return false
    return diffSeconds > 5;

  }

  initializeToastMessage(toastCtrl: any) {
    if (
      (this.toastCtrl === undefined)
      || (this.toastCtrl === null)
    ) {
      this.toastCtrl = toastCtrl;
    }
  }

  // tslint:disable-next-line:member-ordering
  private static _instance: ToastMessageService = new ToastMessageService();
  public static getInstance(): ToastMessageService {
    return ToastMessageService._instance;
  }

  constructor() {
    if (ToastMessageService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use ToastMessageService.getInstance() instead of new.');
    }

    this.lastShow = new Date().getTime();
    ToastMessageService._instance = this;
  }

}
