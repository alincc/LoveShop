import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderDiscountGiftCardExtraGiftWallets } from './orderDiscountGiftCardExtraGiftWallets';
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
  declarations: [OrderDiscountGiftCardExtraGiftWallets],
  imports: [IonicPageModule.forChild(OrderDiscountGiftCardExtraGiftWallets), SharedModule],
  exports: [OrderDiscountGiftCardExtraGiftWallets]
})
export class OrderDiscountGiftCardExtraGiftWalletsModule { }
