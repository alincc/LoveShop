import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterCardExchangePage } from './masterCardExchange';

@NgModule({
  declarations: [MasterCardExchangePage],
  imports: [IonicPageModule.forChild(MasterCardExchangePage)],
  exports: [MasterCardExchangePage]
})
export class MasterCardExchangePageModule { }
