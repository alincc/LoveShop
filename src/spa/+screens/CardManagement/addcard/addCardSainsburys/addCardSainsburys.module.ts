import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AddCardSainsburysPage } from './addCardSainsburys';
import { HttpAddCardService } from "../httpAddCard.service";

@NgModule({
  declarations: [AddCardSainsburysPage],
  imports: [IonicPageModule.forChild(AddCardSainsburysPage)],
  exports: [AddCardSainsburysPage],
  providers: [
    Camera,
    HttpAddCardService
  ]
})

export class AddCardSainsburysPageModule { }
