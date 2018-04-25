import { AuthenticationDataSharingService } from "../../../framework/login/authenticationDataSharing.service";
import { PinCodeService } from "../../../framework/services/pinCodeService/pinCode.service";
import { LocalStorageService, LocalStorageServiceKey } from "../../../framework/services/localStorageService/localStorage.service";
import {Utils} from "../../../framework/services/utilities/utilities";
import { EventEmitter } from '@angular/core'

export class VerifyPINService {

  public byPassVerifyPin: boolean = false;  
  private visibleScreen: boolean = false;
  private isChangeTouchScreen: boolean = false;
  private readonly storage = LocalStorageService.getInstance();

  touchIDAvailable: boolean = false;
  public verifyPINClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  public verifyPINClosedInChangeTouch: EventEmitter<boolean> = new EventEmitter<boolean>();

  // true: on / false: off setting
  public get touchIDState() {
    return this.getTouchIDConfig('touchIDState');
  }

  public set touchIDState(state) {
    state = !!state;
    this.setTouchIDConfig('touchIDState', state);
  }

  private getTouchIDConfig(key: string) {
    let emailLogin = AuthenticationDataSharingService.getInstance().loginEmail || '0';
    emailLogin = (emailLogin + '').toLowerCase();
    let touchIDCfg = this.storage.get(LocalStorageServiceKey.TouchIDConfig) || {};

    const userConfig = touchIDCfg[emailLogin] || {};
    return userConfig[key];
  }

  private setTouchIDConfig(key: string, value) {
    let emailLogin = AuthenticationDataSharingService.getInstance().loginEmail || '0';
    emailLogin = (emailLogin + '').toLowerCase();
    let touchIDCfg = this.storage.get(LocalStorageServiceKey.TouchIDConfig) || {};
    let userConfig = touchIDCfg[emailLogin] || {};
    userConfig[key] = value;

    touchIDCfg[emailLogin] = userConfig;
    this.storage.set(LocalStorageServiceKey.TouchIDConfig, touchIDCfg);
  }

  public get VisibleScreen(){
    return this.visibleScreen;
  }

  public set VisibleScreen(state){
    this.visibleScreen = state;
  }
  
    public get IsChangeTouchScreen(){
      return this.isChangeTouchScreen;
    }
  
    public set IsChangeTouchScreen(state){
      this.isChangeTouchScreen = state;
    }
    

  // tslint:disable-next-line:member-ordering
  private static _instance: VerifyPINService = new VerifyPINService();
  public static getInstance(): VerifyPINService {
    return VerifyPINService._instance;
  }

  constructor() {
    if (VerifyPINService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use VerifyPINService.getInstance() instead of new.');
    }

    VerifyPINService._instance = this;
  }  
}
