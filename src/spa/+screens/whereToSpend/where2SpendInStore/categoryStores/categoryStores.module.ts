import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryStoresPage } from './categoryStores';

@NgModule({
  declarations: [CategoryStoresPage],
  imports: [IonicPageModule.forChild(CategoryStoresPage)],
  exports: [CategoryStoresPage]
})
export class CategoryStoresPageModule { }
