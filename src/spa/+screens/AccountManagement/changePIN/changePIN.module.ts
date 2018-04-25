import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangePINPage } from './changePIN';

@NgModule({
  declarations: [ChangePINPage],
  imports: [IonicPageModule.forChild(ChangePINPage)],
  exports: [ChangePINPage]
})
export class ChangePINPageModule { }
