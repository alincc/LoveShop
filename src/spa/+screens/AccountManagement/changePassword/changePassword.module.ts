import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangePasswordPage } from './changePassword';

@NgModule({
  declarations: [ChangePasswordPage],
  imports: [IonicPageModule.forChild(ChangePasswordPage)],
  exports: [ChangePasswordPage]
})
export class ChangePasswordPageModule { }
