import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountDetailsPage } from './accountDetails';

@NgModule({
  declarations: [AccountDetailsPage],
  imports: [IonicPageModule.forChild(AccountDetailsPage)],
  exports: [AccountDetailsPage]
})
export class AccountDetailsPageModule { }
