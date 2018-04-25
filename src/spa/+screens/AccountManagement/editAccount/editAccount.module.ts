import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAccountPage } from './editAccount';

@NgModule({
  declarations: [EditAccountPage],
  imports: [IonicPageModule.forChild(EditAccountPage)],
  exports: [EditAccountPage]
})
export class EditAccountPageModule { }
