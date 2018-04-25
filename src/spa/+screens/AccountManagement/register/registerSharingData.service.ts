import { BehaviorSubject } from "rxjs/Rx";

export class RegisterSharingDataService {
  private defaultMasterData: any = {};
  private currentMasterData: any = Object.assign({}, this.defaultMasterData);
  private _state$ = new BehaviorSubject<any>(this.currentMasterData);

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
  getEmailAddressAtStep3() {
    return this.currentMasterData.step2Model.emailAddress;
  }

  saveStep3Screen(step3Model: any) {
    this.currentMasterData.step3Model = step3Model;
  }

  saveStep4Screen(step4Model: any) {
    this.currentMasterData.step4Model = step4Model;
  }

  getRegisterData() {
    let registerModel = {
      // step 1
      title: this.currentMasterData.step1Model.title,
      firstName: this.currentMasterData.step1Model.firstName,
      lastName: this.currentMasterData.step1Model.lastName,
      dob: this.currentMasterData.step1Model.dob,
      termsAgreed: this.currentMasterData.step1Model.termsAgreed,

      // step 2
      emailAddress: this.currentMasterData.step2Model.emailAddress,
      password: this.currentMasterData.step2Model.password,
      marketingOptOut: this.currentMasterData.step2Model.marketingOptOut,
      // step 3
      addressLine1: this.currentMasterData.step3Model.addressLine1,
      addressLine2: this.currentMasterData.step3Model.addressLine2,
      country: this.currentMasterData.step3Model.country,
      county: this.currentMasterData.step3Model.county,
      postcode: this.currentMasterData.step3Model.postcode,
      telephoneNumber: this.currentMasterData.step3Model.telephoneNumber,
      town: this.currentMasterData.step3Model.town,
      accountType:  "B2C",
      businessName:  ""

    };

    return registerModel;
  }


  // tslint:disable-next-line:member-ordering
  private static _instance: RegisterSharingDataService = new RegisterSharingDataService();
  public static getInstance(): RegisterSharingDataService {
    return RegisterSharingDataService._instance;
  }

  constructor() {
    if (RegisterSharingDataService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use RegisterSharingDataService.getInstance() instead of new.');
    }

    RegisterSharingDataService._instance = this;
  }

}
