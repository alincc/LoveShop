import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AddFlexECodePage } from './addFlexECode';
import { HttpAddCardService } from "../httpAddCard.service";

@NgModule({
  declarations: [AddFlexECodePage],
  imports: [IonicPageModule.forChild(AddFlexECodePage)],
  exports: [AddFlexECodePage],
  providers: [
    Camera,
    HttpAddCardService
  ]
})

export class AddFlexECodePageModule { }
