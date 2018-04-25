export enum LocalStorageServiceKey {
  UserSettingShowPinCode4UnlockApp,
  ApplicationPinCode,
  TestingLocalStorageServiceKey,
  TouchIDConfig
}

export class LocalStorageService {

  set(key: LocalStorageServiceKey, value: any) {
    window.localStorage.setItem(key + '', JSON.stringify(value));
  }

  get(key: LocalStorageServiceKey) {
    return JSON.parse(window.localStorage.getItem(key + '') || null);
  }

  remove(key: LocalStorageServiceKey) {
    window.localStorage.removeItem(key + '');
  }

  // tslint:disable-next-line:member-ordering
  private static _instance: LocalStorageService = new LocalStorageService();
  public static getInstance(): LocalStorageService {
    return LocalStorageService._instance;
  }

  constructor() {
    if (LocalStorageService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use LocalStorageService.getInstance() instead of new.');
    }

    LocalStorageService._instance = this;
  }

}
