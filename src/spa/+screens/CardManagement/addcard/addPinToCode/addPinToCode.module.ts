import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AddPinToCodePage } from './addPinToCode';
import { HttpAddCardService } from "../httpAddCard.service";

@NgModule({
  declarations: [AddPinToCodePage],
  imports: [IonicPageModule.forChild(AddPinToCodePage)],
  exports: [AddPinToCodePage],
  providers: [
    Camera,
    HttpAddCardService
  ]
})

export class AddPinToCodePageModule { }
