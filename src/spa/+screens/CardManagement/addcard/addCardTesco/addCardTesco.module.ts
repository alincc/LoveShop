import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AddCardTescoPage } from './addCardTesco';
import { HttpAddCardService } from "../httpAddCard.service";

@NgModule({
  declarations: [AddCardTescoPage],
  imports: [IonicPageModule.forChild(AddCardTescoPage)],
  exports: [AddCardTescoPage],
  providers: [
    Camera,
    HttpAddCardService
  ]
})

export class AddCardTescoPageModule { }
