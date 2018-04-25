import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterStep2Page } from './registerStep2';
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
  declarations: [RegisterStep2Page],
  imports: [IonicPageModule.forChild(RegisterStep2Page), SharedModule],
  exports: [RegisterStep2Page]
})
export class RegisterStep2PageModule { }
