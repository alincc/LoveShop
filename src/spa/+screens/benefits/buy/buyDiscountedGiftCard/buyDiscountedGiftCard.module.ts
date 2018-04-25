import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyDiscountedGiftCardPage } from './buyDiscountedGiftCard';

@NgModule({
  declarations: [BuyDiscountedGiftCardPage],
  imports: [IonicPageModule.forChild(BuyDiscountedGiftCardPage)],
  exports: [BuyDiscountedGiftCardPage]
})
export class BuyDiscountedGiftCardPageModule { }
