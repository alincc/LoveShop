import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenPdfPage } from "./openPdf";

@NgModule({
  declarations: [OpenPdfPage],
  imports: [IonicPageModule.forChild(OpenPdfPage)],
  exports: [OpenPdfPage]
})
export class OpenPdfPageModule { }
