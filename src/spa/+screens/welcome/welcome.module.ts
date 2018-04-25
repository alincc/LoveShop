import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { PinchZoomModule } from '../../../libs/pinch-zoom/pinch-zoom.module';
import { WelcomePage } from './welcome';
import { HttpCheckNetworkService } from "./httpCheckNetwork.service";

@NgModule({
  declarations: [WelcomePage],
  providers: [HttpCheckNetworkService],
  imports: [
    // PinchZoomModule,
    IonicPageModule.forChild(WelcomePage)
  ],
  exports: [WelcomePage]
})
export class WelcomePageModule { }
