import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookiePage } from './cookie';

@NgModule({
  declarations: [CookiePage],
  imports: [IonicPageModule.forChild(CookiePage)],
  exports: [CookiePage]
})
export class CookiePagePageModule { }
