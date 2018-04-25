import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeCardPage } from './changeCard';

@NgModule({
  declarations: [ChangeCardPage],
  imports: [IonicPageModule.forChild(ChangeCardPage)],
  exports: [ChangeCardPage]
})
export class ChangeCardPageModule { }
