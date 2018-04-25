import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangePaymentMethodsPage } from './changePaymentMethods';

@NgModule({
  declarations: [ChangePaymentMethodsPage],
  imports: [IonicPageModule.forChild(ChangePaymentMethodsPage)],
  exports: [ChangePaymentMethodsPage]
})
export class ChangePaymentMethodsPageModule { }
