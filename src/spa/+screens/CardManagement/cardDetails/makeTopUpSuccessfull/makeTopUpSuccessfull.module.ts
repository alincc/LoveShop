import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MakeTopUpSuccessFullPage} from "./makeTopUpSuccessfull";

@NgModule({
  declarations: [
    MakeTopUpSuccessFullPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeTopUpSuccessFullPage),
  ],
  exports: [
    MakeTopUpSuccessFullPage
  ]
})
export class MakeTopUpSuccessFullPageModule {}
