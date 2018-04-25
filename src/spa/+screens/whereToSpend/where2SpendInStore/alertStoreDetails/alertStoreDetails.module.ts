import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertStoreDetailsPage } from './alertStoreDetails';

@NgModule({
  declarations: [AlertStoreDetailsPage],
  imports: [IonicPageModule.forChild(AlertStoreDetailsPage)],
  exports: [AlertStoreDetailsPage]
})
export class AlertStoreDetailsPageModule { }
