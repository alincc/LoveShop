import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMyCardPage } from './addMyCard';

@NgModule({
  declarations: [AddMyCardPage],
  imports: [IonicPageModule.forChild(AddMyCardPage)],
  exports: [AddMyCardPage]
})
export class AddMyCardPageModule { }
