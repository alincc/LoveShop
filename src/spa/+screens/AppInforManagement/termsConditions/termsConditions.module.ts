import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsConditionsPage } from './termsConditions';

@NgModule({
  declarations: [TermsConditionsPage],
  imports: [IonicPageModule.forChild(TermsConditionsPage)],
  exports: [TermsConditionsPage]
})
export class TermsConditionsPageModule { }
