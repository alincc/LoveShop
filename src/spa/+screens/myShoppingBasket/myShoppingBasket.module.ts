import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyShoppingBasketPage } from './myShoppingBasket';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [MyShoppingBasketPage],
  imports: [IonicPageModule.forChild(MyShoppingBasketPage), SharedModule],
  exports: [MyShoppingBasketPage]
})
export class MyShoppingBasketPageModule { }
