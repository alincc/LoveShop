import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterStep1Page } from './registerStep1';

@NgModule({
  declarations: [RegisterStep1Page],
  imports: [IonicPageModule.forChild(RegisterStep1Page)],
  exports: [RegisterStep1Page]
})
export class RegisterStep1PageModule { }
