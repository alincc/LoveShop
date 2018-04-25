import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefundValuePage } from './refundValue';

@NgModule({
  declarations: [RefundValuePage],
  imports: [IonicPageModule.forChild(RefundValuePage)],
  exports: [RefundValuePage]
})
export class RefundValuePageModule { }
