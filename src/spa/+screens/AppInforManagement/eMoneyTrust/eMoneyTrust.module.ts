import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EMoneyTrustPage } from './eMoneyTrust';

@NgModule({
  declarations: [EMoneyTrustPage],
  imports: [IonicPageModule.forChild(EMoneyTrustPage)],
  exports: [EMoneyTrustPage]
})
export class EMoneyTrustPageModule { }
