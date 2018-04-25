import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetupPINPage } from './setupPIN';
import { PttPinModule } from '../../../../libs/ptt-pin/ptt-pin.module';

@NgModule({
  declarations: [SetupPINPage],
  imports: [
    IonicPageModule.forChild(SetupPINPage),
    PttPinModule
  ],
  exports: [SetupPINPage]
})
export class SetupPINPageModule { }
