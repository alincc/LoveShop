import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourCardDetailsPage } from './yourCardDetails';
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
  declarations: [YourCardDetailsPage],
  imports: [IonicPageModule.forChild(YourCardDetailsPage)],
  exports: [YourCardDetailsPage]
})
export class YourCardDetailsPageModule { }
