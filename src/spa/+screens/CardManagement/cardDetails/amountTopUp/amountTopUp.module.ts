import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmountTopUpPage } from './amountTopUp';

@NgModule({
  declarations: [
    AmountTopUpPage,
  ],
  imports: [
    IonicPageModule.forChild(AmountTopUpPage),
  ],
  exports: [
    AmountTopUpPage
  ]
})
export class AmountTopUpPageModule {}
