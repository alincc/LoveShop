import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeTopUptPage } from './makeTopUp';

@NgModule({
  declarations: [
    MakeTopUptPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeTopUptPage),
  ],
  exports: [
    MakeTopUptPage
  ]
})
export class MakeTopUptPageModule {}
