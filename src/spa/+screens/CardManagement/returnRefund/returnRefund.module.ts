import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReturnRefundPage } from './returnRefund';

@NgModule({
  declarations: [ReturnRefundPage],
  imports: [IonicPageModule.forChild(ReturnRefundPage)],
  exports: [ReturnRefundPage]
})
export class ReturnRefundPageModule { }
