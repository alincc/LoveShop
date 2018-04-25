import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AddFlexCashPage } from './addFlexCash';
import { HttpAddCardService } from "../httpAddCard.service";

@NgModule({
  declarations: [AddFlexCashPage],
  imports: [IonicPageModule.forChild(AddFlexCashPage)],
  exports: [AddFlexCashPage],
  providers: [
    Camera,
    HttpAddCardService
  ]
})

export class AddFlexCashPageModule { }
