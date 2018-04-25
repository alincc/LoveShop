import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouchIDSettingFirstTimePage } from './touchIDSettingFirstTime';

@NgModule({
  declarations: [TouchIDSettingFirstTimePage],
  imports: [IonicPageModule.forChild(TouchIDSettingFirstTimePage)],
  exports: [TouchIDSettingFirstTimePage]
})
export class RegisterStep5PageModule { }
