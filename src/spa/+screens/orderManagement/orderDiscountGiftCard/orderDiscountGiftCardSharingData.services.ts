import {BehaviorSubject} from "rxjs/Rx";
import {Utils} from "../../framework/services/utilities/utilities";

export class OrderDiscountGiftCardSharingDataService {

  addressDelivery = {
    addressIsUpdated: false,
    newAddress: null
  }

    needUpdateOrderNumber = {
        status: false,
        newOrderNumber: null
    }

  selectGreetingCard = {
    selectedGreetingCard: false,
    greetingCardSelected: null,
    greetingCardIndex: 0,
  }

  selectExtraGreetingCard = {
    selectedExtraGreetingCard: false,
    extraGreetingCardSelected: null,
    extraGreetingCardIndex: 0,
    quantity: 0,
  }

  isZeroQuantityExtra = false;


  msgPersonal = {
    haveMessagePersonal: false,
    contentMessage: null,
  }


  resetData() {
    this.addressDelivery = {
      addressIsUpdated: false,
      newAddress: null
    }

    this.resetFreeCardDesign();
    this.resetExtraCardDesign();
    this.resetmsgPersonal();

  }

  resetFreeCardDesign() {
    this.selectGreetingCard = {
      selectedGreetingCard: false,
      greetingCardSelected: null,
      greetingCardIndex: 0,
    }

  }

  resetExtraCardDesign() {

    this.selectExtraGreetingCard = {
      selectedExtraGreetingCard: false,
      extraGreetingCardSelected: null,
      extraGreetingCardIndex: 0,
      quantity: 0,
    }
  }

  resetmsgPersonal() {
    this.msgPersonal = {
      haveMessagePersonal: false,
      contentMessage: null
    }
  }

  needUpdateDelivery(data) {
    this.addressDelivery = {
      addressIsUpdated: true,
      newAddress: data
    }
  }

  getUpdateDelivery() {
    return this.addressDelivery;
  }

  resetDelivery() {
    this.addressDelivery = {
      addressIsUpdated: false,
      newAddress: null
    }
  }

  saveSelectedFreeGreetingCard(index, card) {
    this.resetFreeCardDesign();
    this.selectGreetingCard = {
      selectedGreetingCard: true,
      greetingCardSelected: card || null,
      greetingCardIndex: index || null,
    }
  }

  getSelectedFreeGreetingCard() {
    return this.selectGreetingCard;
  }


  saveExtraGreetingCard(card, index, quantity) {
    this.resetExtraCardDesign();
    this.selectExtraGreetingCard = {
      selectedExtraGreetingCard: true,
      extraGreetingCardSelected: card || null,
      extraGreetingCardIndex:  index || null,
      quantity:  quantity || 0,
    }
  }

  getExtraGreetingCard() {
    return this.selectExtraGreetingCard;
  }




  saveMessagePersonal(msg) {
    this.msgPersonal = {
      haveMessagePersonal: true,
      contentMessage: msg
    }
  }

  getMessagePersonal() {
    return this.msgPersonal;
  }

  setisZeroQuantityExtra(msg) {
    this.isZeroQuantityExtra = true;
  }

  getIsZeroQuantityExtra() {
    return this.isZeroQuantityExtra;
  }


  getNewOrderNumber() {
      return this.needUpdateOrderNumber;
  }

  resetNewOrderNumber() {
      this.needUpdateOrderNumber = {
          status: false,
          newOrderNumber: null
      }
  }

  setNewOrderNumber(newOrderNumber) {
      this.needUpdateOrderNumber = {
          status: true,
          newOrderNumber: newOrderNumber
      }
  }


  private static _instance: OrderDiscountGiftCardSharingDataService = new OrderDiscountGiftCardSharingDataService();

  public static getInstance(): OrderDiscountGiftCardSharingDataService {
    return OrderDiscountGiftCardSharingDataService._instance;
  }

  constructor() {
    if (OrderDiscountGiftCardSharingDataService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use YourCardDetailsSharingDataService.getInstance() instead of new.');
    }

    OrderDiscountGiftCardSharingDataService._instance = this;
  }

}
