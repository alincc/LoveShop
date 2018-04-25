import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyADiscountedGiftCardPage } from "./buyADiscountedGiftCard";
import { SharedModule } from "../../../../../shared/shared.module";

@NgModule({
  declarations: [BuyADiscountedGiftCardPage],
  imports: [IonicPageModule.forChild(BuyADiscountedGiftCardPage), SharedModule],
  exports: [BuyADiscountedGiftCardPage]
})
export class BuyADiscountedGiftCardPageModule { }
