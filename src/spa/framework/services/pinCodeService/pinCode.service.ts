import { Utils } from "../utilities/utilities";

export class PinCodeService {
  savePinCode(email: string, value: any) {
    window.localStorage.setItem(email.toLowerCase(), JSON.stringify(value));
  }

  getPinCode(email) {
    return JSON.parse(window.localStorage.getItem(email.toLowerCase()) || null);
  }

  needSetupPinCode(loginEmail) {
    var pinCode = this.getPinCode(loginEmail);
    if (Utils.isNotNull(pinCode)) {
      if (Utils.isNotNull(pinCode.pin1)) {
        return false;
      }
    }

    return true;
  }

  // tslint:disable-next-line:member-ordering
  private static _instance: PinCodeService = new PinCodeService();
  public static getInstance(): PinCodeService {
    return PinCodeService._instance;
  }

  constructor() {
    if (PinCodeService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use PinCodeService.getInstance() instead of new.');
    }

    PinCodeService._instance = this;
  }

}
