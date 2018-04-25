import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MakeTopUp3DSPage} from "./makeTopUp3DS";

@NgModule({
  declarations: [
    MakeTopUp3DSPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeTopUp3DSPage),
  ],
  exports: [
    MakeTopUp3DSPage
  ]
})
export class MakeTopUptPage3DSModule {}
