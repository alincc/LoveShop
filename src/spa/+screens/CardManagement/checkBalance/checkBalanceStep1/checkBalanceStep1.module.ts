import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckBalanceStep1Page } from './checkBalanceStep1';

@NgModule({
  declarations: [CheckBalanceStep1Page],
  imports: [IonicPageModule.forChild(CheckBalanceStep1Page)],
  exports: [CheckBalanceStep1Page]
})
export class CheckBalanceStep1PageModule { }
