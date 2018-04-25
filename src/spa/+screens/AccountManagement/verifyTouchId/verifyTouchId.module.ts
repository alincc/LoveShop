import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifyTouchIdPage } from './verifyTouchId';

@NgModule({
  declarations: [VerifyTouchIdPage],
  imports: [IonicPageModule.forChild(VerifyTouchIdPage)],
  exports: [VerifyTouchIdPage]
})
export class VerifyTouchIdPageModule { }
