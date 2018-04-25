import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AddCardNumberPage } from './addCardNumber';
import { HttpAddCardService } from "../httpAddCard.service";

@NgModule({
  declarations: [AddCardNumberPage],
  imports: [IonicPageModule.forChild(AddCardNumberPage)],
  exports: [AddCardNumberPage],
  providers: [
    Camera,
    HttpAddCardService
  ]
})

export class AddCardNumberPageModule { }
