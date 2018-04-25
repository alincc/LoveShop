import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuySpecSaversPage } from './buySpecSavers';

@NgModule({
  declarations: [BuySpecSaversPage],
  imports: [IonicPageModule.forChild(BuySpecSaversPage)],
  exports: [BuySpecSaversPage]
})
export class BuySpecSaversPageModule { }
