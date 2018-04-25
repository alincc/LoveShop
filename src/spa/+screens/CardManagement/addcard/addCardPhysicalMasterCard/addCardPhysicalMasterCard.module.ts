import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AddCardPhysicalMasterCardPage } from './addCardPhysicalMasterCard';
import { HttpAddCardService } from "../httpAddCard.service";

@NgModule({
  declarations: [AddCardPhysicalMasterCardPage],
  imports: [IonicPageModule.forChild(AddCardPhysicalMasterCardPage)],
  exports: [AddCardPhysicalMasterCardPage],
  providers: [
    Camera,
    HttpAddCardService
  ]
})

export class AddCardPhysicalMasterCardPageModule { }
