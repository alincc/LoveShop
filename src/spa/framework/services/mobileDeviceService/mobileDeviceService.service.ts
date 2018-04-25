export class MobileDeviceService {
  private deviceType: string = '';
  private devicePlatform: any;
  saveDeviceType(platform) {
    this.devicePlatform = platform;
    if (this.devicePlatform.is('iphone')) {
      this.deviceType = 'Running on an iPhone device';
      return;
    }

    if (this.devicePlatform.is('ipad')) {
      this.deviceType = 'Running on an iPad device';
      return;
    }

    if (this.devicePlatform.is('android')) {
      this.deviceType = 'Running on an Android device';
      return;
    }

    this.deviceType = 'Running on an Unknown device';
  }

  isAndroidPlatformEqualsTrue() {
    if (this.devicePlatform.is('android')) {
      return true;
    }

    return false;
  }
  isIosPlatformEqualsTrue() {
    if (this.devicePlatform.is('iphone')) {
      return true;
    }

    if (this.devicePlatform.is('ipad')) {
      return true;
    }

    return false;
  }

  getDeviceType() {
    return this.deviceType;
  }

  // tslint:disable-next-line:member-ordering
  private static _instance: MobileDeviceService = new MobileDeviceService();
  public static getInstance(): MobileDeviceService {
    return MobileDeviceService._instance;
  }

  constructor() {
    if (MobileDeviceService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use MobileDeviceService.getInstance() instead of new.');
    }

    MobileDeviceService._instance = this;
  }

}
