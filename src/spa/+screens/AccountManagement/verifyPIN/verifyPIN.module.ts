import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifyPINPage } from './verifyPIN';
import { PttPinModule } from '../../../../libs/ptt-pin/ptt-pin.module';

@NgModule({
  declarations: [VerifyPINPage],
  imports: [
    IonicPageModule.forChild(VerifyPINPage),
    PttPinModule
  ],
  exports: [VerifyPINPage]
})
export class VerifyPINPageModule { }
