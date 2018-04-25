import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangePage } from './exchange';

@NgModule({
  declarations: [ExchangePage],
  imports: [IonicPageModule.forChild(ExchangePage)],
  exports: [ExchangePage]
})
export class ExchangePageModule { }
