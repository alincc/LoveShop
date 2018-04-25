import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationStoresPage } from './locationStores';
import { GooglePlaceModule } from "../../../../../libs/ng2-google-place-autocomplete/index";

@NgModule({
  declarations: [LocationStoresPage],
  imports: [IonicPageModule.forChild(LocationStoresPage), GooglePlaceModule],
  exports: [LocationStoresPage]
})
export class LocationStoresPageModule { }
