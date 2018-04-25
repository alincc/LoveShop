import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {OrderDiscountGiftCard3DSPage} from "./orderDiscountGiftCard3DS";

@NgModule({
  declarations: [
    OrderDiscountGiftCard3DSPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderDiscountGiftCard3DSPage),
  ],
  exports: [
    OrderDiscountGiftCard3DSPage
  ]
})
export class OrderDiscountGiftCard3DSModule {}
