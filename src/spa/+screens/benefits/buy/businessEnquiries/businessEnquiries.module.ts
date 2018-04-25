import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessEnquiriesPage } from './businessEnquiries';

@NgModule({
  declarations: [BusinessEnquiriesPage],
  imports: [IonicPageModule.forChild(BusinessEnquiriesPage)],
  exports: [BusinessEnquiriesPage]
})
export class BusinessEnquiriesPageModule { }
