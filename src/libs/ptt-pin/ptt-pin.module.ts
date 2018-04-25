import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { PttPinComponent } from './ptt-pin.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    PttPinComponent
  ],
  exports: [
    PttPinComponent
  ]
})
export class PttPinModule {}