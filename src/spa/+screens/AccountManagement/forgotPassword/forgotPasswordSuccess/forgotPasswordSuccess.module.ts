import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPasswordSuccess } from './forgotPasswordSuccess';

@NgModule({
  declarations: [ForgotPasswordSuccess],
  imports: [IonicPageModule.forChild(ForgotPasswordSuccess)],
  exports: [ForgotPasswordSuccess]
})
export class ForgotPasswordSuccessModule { }
