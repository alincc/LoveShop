import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { viewAlertSettingsPage } from './viewAlertSettings';

@NgModule({
  declarations: [viewAlertSettingsPage],
  imports: [IonicPageModule.forChild(viewAlertSettingsPage)],
  exports: [viewAlertSettingsPage]

})

export class viewAlertSettingsPageModule { }
