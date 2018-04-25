import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdatePINPage } from './updatePIN';
import { PttPinModule } from '../../../../libs/ptt-pin/ptt-pin.module';

@NgModule({
  declarations: [UpdatePINPage],
  imports: [
    IonicPageModule.forChild(UpdatePINPage),
    PttPinModule
  ],
  exports: [UpdatePINPage]
})
export class UpdatePINPageModule { }
