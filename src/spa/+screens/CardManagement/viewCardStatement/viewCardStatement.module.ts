import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ViewCardStatementPage} from './viewCardStatement';

@NgModule({
  declarations: [
    ViewCardStatementPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewCardStatementPage),
  ],
  exports: [
    ViewCardStatementPage
  ]
})
export class ViewCardStatementPageModule {
}
