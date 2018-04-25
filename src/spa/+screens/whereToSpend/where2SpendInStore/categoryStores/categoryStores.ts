import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Where2SpendSharingDataService } from "../../where2SpendSharingData.services";
import {NavService} from "../../../../shared/nav.service";
import $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-categoryStores',
  templateUrl: 'categoryStores.html'
})
export class CategoryStoresPage {

  categories: any [];
  valid = false;

  constructor(public navCtrl: NavController,    private navSvc: NavService) {  }

  ionViewWillEnter() {
    Where2SpendSharingDataService.getInstance().keepLocation = true;
    $('.app-root').addClass('not-show-tab');
    const categories = Where2SpendSharingDataService.getInstance().categories;
    this.categories =  JSON.parse(JSON.stringify(categories));
    this.runValidate();
  }

  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }


  ionViewDidLeave() {
  }

  toggleCategory(index, event: MouseEvent) {
    event.stopPropagation();
    const cat = this.categories[index];
    if(!cat){ 
      return;
    }
    cat.selected = !cat.selected;
    this.runValidate();
  }

  validate() {
    if(Array.isArray(this.categories)){
      for(let i = 0; i < this.categories.length; i++){
        if(this.categories[i].selected){
          return true;
        }
      }
    }
    return false;
  }

  runValidate() { 
    this.valid = this.validate();
  }

  applySelect() {
    Where2SpendSharingDataService.getInstance().categories = this.categories;
  }

  filterByCategory() {
    if(!this.validate()){
      return;
    }

    Where2SpendSharingDataService.getInstance().keepLocation = true;
    this.applySelect();
    this.navCtrl.pop().then(() => {
    });
  }

}
