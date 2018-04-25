import { Component, ViewChildren, QueryList } from '@angular/core';
import {NavController, IonicPage, TextInput} from 'ionic-angular';
import {RouteManagerService} from '../../../../framework/services/routeManager/routeManager.service';
import {FormBuilder, FormGroup} from "@angular/forms";
import {OrderDiscountGiftCardSharingDataService} from "../orderDiscountGiftCardSharingData.services";
import {Utils} from "../../../../framework/services/utilities/utilities";

@IonicPage()
@Component({
  selector: 'page-orderDiscountGiftCardAddPersonalMessage',
  templateUrl: 'orderDiscountGiftCardAddPersonalMessage.html'
})
export class OrderDiscountGiftCardAddPersonalMessage {
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;    
  
  constructor(public routeManager: RouteManagerService,
              private formBuilder: FormBuilder,
              public navCtrl: NavController) {
    this.buildForm();
  }


  updatePersonalMsg: FormGroup;
  formErrors = {
    'to': '',
    'message': '',
    'from': '',
  };

  buildForm() {
    this.updatePersonalMsg = this.formBuilder.group({
      'to': [''],
      'message': [''],
      'from': [''],
    });

    this.updatePersonalMsg.valueChanges.subscribe(data => this.onValueChanges(data));
    this.onValueChanges();
  }

  ionViewWillEnter() {

    let msgPersonal = OrderDiscountGiftCardSharingDataService.getInstance().getMessagePersonal();

    if(msgPersonal && msgPersonal.haveMessagePersonal === true) {
      if(Utils.isNotNull(msgPersonal.contentMessage) && Utils.isNotNull(msgPersonal.contentMessage.to)) {
        this.updatePersonalMsg.patchValue({'to': msgPersonal.contentMessage.to +''});
      }

      if(Utils.isNotNull(msgPersonal.contentMessage) && Utils.isNotNull(msgPersonal.contentMessage.message)) {
        this.updatePersonalMsg.patchValue({'message':  msgPersonal.contentMessage.message +''});
      }

      if(Utils.isNotNull(msgPersonal.contentMessage) && Utils.isNotNull(msgPersonal.contentMessage.from)) {
        this.updatePersonalMsg.patchValue({'from':  msgPersonal.contentMessage.from + ''});
      }
    }

  }

  onValueChanges(data?: any) {
    if (!this.updatePersonalMsg) {
      return;
    }
    const form = this.updatePersonalMsg;
    for (let fieldError in this.formErrors) {
      this.formErrors[fieldError] = '';
      let control = form.get(fieldError);
      if (control && control.dirty && !control.valid) {
        this.formErrors[fieldError] = control.errors[Object.keys(control.errors)[0]];
      }
    }
    if (this.textInputs) {
      this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
    }
  }


  addPersonalMessage() {
    OrderDiscountGiftCardSharingDataService.getInstance().saveMessagePersonal(this.updatePersonalMsg.value);
    this.navCtrl.pop();
  }

}
