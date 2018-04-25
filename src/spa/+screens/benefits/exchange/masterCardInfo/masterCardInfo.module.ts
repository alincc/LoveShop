import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterCardInfoPage } from './masterCardInfo';

@NgModule({
  declarations: [MasterCardInfoPage],
  imports: [IonicPageModule.forChild(MasterCardInfoPage)],
  exports: [MasterCardInfoPage]
})
export class MasterCardInfoPageModule { }
