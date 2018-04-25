import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {OrderDiscountGiftCardPaymentCardPage} from "./orderDiscountGiftCardPaymentCard";

@NgModule({
  declarations: [OrderDiscountGiftCardPaymentCardPage],
  imports: [IonicPageModule.forChild(OrderDiscountGiftCardPaymentCardPage)],
  exports: [OrderDiscountGiftCardPaymentCardPage]
})
export class OrderDiscountGiftCardPaymentCardModule { }
