import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeEmailPage } from './changeEmail';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [ChangeEmailPage],
  imports: [IonicPageModule.forChild(ChangeEmailPage), SharedModule],
  exports: [ChangeEmailPage]
})
export class ChangeEmailPageModule { }
