import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterStep4Page } from './registerStep4';
import { PttPinModule } from '../../../../../libs/ptt-pin/ptt-pin.module';

@NgModule({
  declarations: [RegisterStep4Page],
  imports: [
    IonicPageModule.forChild(RegisterStep4Page),
    PttPinModule
  ],
  exports: [RegisterStep4Page]
})
export class RegisterStep4PageModule { }
