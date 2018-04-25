import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangePasswordPage } from './changePassword';
import {OrderDiscountGiftCardUpdateDeliveryOptionPage} from "./orderDiscountGiftCardUpdateDeliveryOption";

@NgModule({
  declarations: [OrderDiscountGiftCardUpdateDeliveryOptionPage],
  imports: [IonicPageModule.forChild(OrderDiscountGiftCardUpdateDeliveryOptionPage)],
  exports: [OrderDiscountGiftCardUpdateDeliveryOptionPage]
})
export class ChangePasswordPageModule { }
