import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiftCardExchangePage } from './giftCardExchange';
import { SharedModule } from "../../../../../shared/shared.module";

@NgModule({
  declarations: [GiftCardExchangePage],
  imports: [IonicPageModule.forChild(GiftCardExchangePage), SharedModule],
  exports: [GiftCardExchangePage]
})
export class GiftCardExchangePageModule { }
