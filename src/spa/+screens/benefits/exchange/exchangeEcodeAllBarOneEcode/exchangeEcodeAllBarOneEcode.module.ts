import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeEcodeAllBarOneEcodePage } from './exchangeEcodeAllBarOneEcode';
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
  declarations: [ExchangeEcodeAllBarOneEcodePage],
  imports: [IonicPageModule.forChild(ExchangeEcodeAllBarOneEcodePage), SharedModule],
  exports: [ExchangeEcodeAllBarOneEcodePage]
})
export class ExchangeEcodeAllBarOneEcodePageModule { }
