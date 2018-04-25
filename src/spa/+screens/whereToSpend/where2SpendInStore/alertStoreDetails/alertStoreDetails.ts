import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Where2SpendSharingDataService } from "../../where2SpendSharingData.services";
@IonicPage()
@Component({
  selector: 'page-alertStoreDetails',
  templateUrl: 'alertStoreDetails.html',
  providers: [
    InAppBrowser
  ]
})
export class AlertStoreDetailsPage {

  store: any;
  storeItemDetails: string;

  constructor(
    public routeManager: RouteManagerService,
    public navCrtl: NavController,    
    private iab: InAppBrowser,
    private navParams: NavParams
  ) {
    this.storeItemDetails = navParams.get('storeItem');
  }

  ionViewWillEnter() {
    if (this.navParams.get('store')) {
      const store  = this.navParams.get('store');
      this.store = this._buildStore(store);
    }
  }

  close() {
    Where2SpendSharingDataService.getInstance().keepData = true;
    this.navCrtl.pop();
  };

  onStoreLinkClick(store) {
    if(store && store.retailer && store.retailer.websiteURL) {
      const url = this._normalizeUtl(store.retailer.websiteURL);
      const browser = this.iab.create(url,  "_system", "location=true" );  
    }  
  }

  private _normalizeUtl( url ) {
    if(!url || !url.startsWith('http://') || !url.startsWith('https://')){
      return 'http://' + url;
    }

    return url;
  }

  private _buildStore(store ) {
    store.prettyDistance = this._prettyDistance(store.distance);
    return store;
  }

  private _prettyDistance( dis ) {
    return parseFloat(dis).toFixed(2);
  }
}
