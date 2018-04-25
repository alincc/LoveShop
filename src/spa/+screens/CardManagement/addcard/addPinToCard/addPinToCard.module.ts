import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AddPinToCardPage } from './addPinToCard';
import { HttpAddCardService } from "../httpAddCard.service";

@NgModule({
  declarations: [AddPinToCardPage],
  imports: [IonicPageModule.forChild(AddPinToCardPage)],
  exports: [AddPinToCardPage],
  providers: [
    Camera,
    HttpAddCardService
  ]
})

export class AddPinToCardPageModule { }
