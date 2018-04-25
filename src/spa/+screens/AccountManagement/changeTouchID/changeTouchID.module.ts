import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { IonicPageModule } from 'ionic-angular';
import { ChangeTouchIDPage } from './changeTouchID';

@NgModule({
  declarations: [ChangeTouchIDPage],
  imports: [
    IonicPageModule.forChild(ChangeTouchIDPage),
    FormsModule
  ],
  exports: [ChangeTouchIDPage]
})
export class ChangeTouchIDPageModule { }
