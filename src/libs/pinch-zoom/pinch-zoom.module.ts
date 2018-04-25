import { NgModule } from '@angular/core';

import { PinchZoomDirective } from './pinch-zoom.directive';

@NgModule({
  declarations: [PinchZoomDirective],
  exports: [PinchZoomDirective]
})
export class PinchZoomModule { }
