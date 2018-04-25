import { RequireValidatorDirective } from './validator-required.directive';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    RequireValidatorDirective
  ],
  exports: [
    RequireValidatorDirective
  ]
})

export class ValidationsModule {}
