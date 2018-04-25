import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivacyPolicyPage } from './privacyPolicy';

@NgModule({
  declarations: [PrivacyPolicyPage],
  imports: [IonicPageModule.forChild(PrivacyPolicyPage)],
  exports: [PrivacyPolicyPage]
})
export class PrivacyPolicyPageModule { }
