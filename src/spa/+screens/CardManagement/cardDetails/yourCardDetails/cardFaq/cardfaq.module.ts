import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardFAQPage } from './cardfaq';

@NgModule({
  declarations: [CardFAQPage],
  imports: [IonicPageModule.forChild(CardFAQPage)],
  exports: [CardFAQPage]
})
export class CardFAQPageModule { }
