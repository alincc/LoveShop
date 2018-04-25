export enum DataSharingServiceKey {
  HomeRetrieveCards,
  DashboardEditView,
  TestingDataSharingService
}

/*
how to use
    ngOnInit() {
        let boxes = DataSharingService.getInstance()
                      .get(DataSharingService.DashboardEditView);
    }

    onSave(boxesView) {
        DataSharingService.getInstance()
                      .set(DataSharingService.DashboardEditView, boxesView);
    }
*/

export class DataSharingService {
  _state: any = {};

  // already return a clone of the current state
  get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get(prop?: DataSharingServiceKey) {
    // use our state getter for the clone
    const state = this.state;
    let key = prop + '';
    return state.hasOwnProperty(key) ? state[key] : state;
  }

  set(prop: DataSharingServiceKey, value: any) {
    // internally mutate our state
    return this._state[prop + ''] = value;
  }

  private _clone(object: any) {
    // simple object clone
    return JSON.parse(JSON.stringify(object));
  }

  // tslint:disable-next-line:member-ordering
  private static _instance: DataSharingService = new DataSharingService();
  public static getInstance(): DataSharingService {
    return DataSharingService._instance;
  }
  constructor() {
    if (DataSharingService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use DataSharingService.getInstance() instead of new.');
    }
    DataSharingService._instance = this;
  }

}
