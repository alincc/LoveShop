import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopUpInfoPage } from "./topupInfo";

@NgModule({
  declarations: [TopUpInfoPage],
  imports: [IonicPageModule.forChild(TopUpInfoPage)],
  exports: [TopUpInfoPage]
})
export class TopUpInfoPageModule { }
