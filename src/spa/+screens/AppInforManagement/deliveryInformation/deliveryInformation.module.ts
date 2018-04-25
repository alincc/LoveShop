import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliveryInformationPage } from './deliveryInformation';

@NgModule({
  declarations: [DeliveryInformationPage],
  imports: [IonicPageModule.forChild(DeliveryInformationPage)],
  exports: [DeliveryInformationPage]
})
export class DeliveryInformationPageModule { }
