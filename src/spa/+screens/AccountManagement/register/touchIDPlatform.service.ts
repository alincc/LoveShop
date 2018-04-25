// Todo: Longnt
// remove this file since it not use any more

import { BehaviorSubject } from "rxjs/Rx";

import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
// import { TouchID } from '@ionic-native/touch-id';

export class TouchIDPlatformService  {
  private defaultMasterData: any = {};
  private currentMasterData: any = Object.assign({}, this.defaultMasterData);
  private _state$ = new BehaviorSubject<any>(this.currentMasterData);

  private androidFingerprintAuth: any;
  // private touchId: any;

  get state$() {
    return this._state$;
  }

  resetState() {
    this.currentMasterData = Object.assign({}, this.defaultMasterData);
    this._state$.next(this.currentMasterData);
  }

  // Todo: LongTN re-check
  isAvailableTouchIDAndroid() {
    return this.androidFingerprintAuth.isAvailable()
      .then((result) => {
        if (result.isAvailable) {
          return true;
        } else {
          return false;
        }
      });
  }


  saveTouchIDForAndroid(loginEmail ) {
    this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: loginEmail, password: 'myPassword' })
      .then(result => {
        if (result.withFingerprint) {
          return "RegisterStep6Page";
        } else if (result.withBackup) {
          return "RegisterStep6Page";
        } else {
          return null;
        }
      })
      .catch(error => {
        if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
        }
        return null;
      });
  }

  // Todo: enable when build ios

  saveTouchIDForIOS() {
    // this.touchId.verifyFingerprint('Scan your fingerprint please')
    //   .then(result => {
    //     return 'RegisterStep6Page';
    //   })
    //   .catch(error => {
    //     return null;
    //   }
    // );
  }

  isAvailableTouchIDIOS() {
    // return this.touchId.isAvailable()
    //   .then(
    //   res => {
    //     return true;
    //   },
    //   err => {
    //     return false;
    //   }
    // );
  }


  // tslint:disable-next-line:member-ordering
  private static _instance: TouchIDPlatformService  = new TouchIDPlatformService ();
  public static getInstance(): TouchIDPlatformService  {
    return TouchIDPlatformService ._instance;
  }

  constructor(
  ) {
    if (TouchIDPlatformService ._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use TouchIDPlatformService .getInstance() instead of new.');
    }

    TouchIDPlatformService ._instance = this;

    // this.androidFingerprintAuth = new AndroidFingerprintAuth();
    // this.touchId = new TouchID();
  }

}
