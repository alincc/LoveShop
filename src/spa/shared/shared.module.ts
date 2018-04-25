import { ModuleWithProviders, NgModule } from "@angular/core";
import { GetKeyStringPipe } from "./get-key-string.pipe";
import { NavService } from './nav.service';
import {DenyCopyDirective} from "../framework/directives/directive-deny-copy";
import { OnlyInteger } from "./onlyInteger.directive";

@NgModule({
  declarations: [
    GetKeyStringPipe,
    DenyCopyDirective,
    OnlyInteger
  ],
  exports: [
    GetKeyStringPipe,
    DenyCopyDirective,
    OnlyInteger
  ],

})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        NavService
      ]
    }
  }
}
