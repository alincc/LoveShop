import {BehaviorSubject} from "rxjs/Rx";
import {Utils} from "../../framework/services/utilities/utilities";

export class MyShoppingBasketSharingDataService {

  private defaultMasterData: any;
  private basketData = {
    cardInformation: null,
    needCaculateFee: false,
    productsOnBasket: [],
    feeObject: null,
  };
  private isNotItemNew = false;
  private isDifferentCatalog = false;
  private isDifferentCard = false;
  private dataAfterGenerateOrder;
  private primaryCard;
  alertRef: any;

  private _state$ = new BehaviorSubject<any>(this.basketData);

  get state$() {
    return this._state$;
  }

  resetState() {

    this.basketData = {
      cardInformation: null,
      needCaculateFee: false,
      productsOnBasket: [],
      feeObject: []
    };
    this.isNotItemNew = false;
    this.isDifferentCatalog = false;
    this.isDifferentCard = false;
    this.dataAfterGenerateOrder = null;
    this.defaultMasterData = null;
  }

  getDataBasket() {
    return this.basketData;
  }

  setFeeObject(feeObject) {
    this.basketData.feeObject = feeObject;
  }

  pushDatatoBasket(cardInfor, productSelected: any, productFee, quantity) {
    this.isNotItemNew = false;
    this.isDifferentCatalog = false;
    this.isDifferentCard = false;


    if (Utils.isNotNull(this.basketData.cardInformation) && (this.basketData.productsOnBasket.length > 0)) {
      let cardSelectedInfor = this.basketData.cardInformation;
      if ((cardSelectedInfor.cardNumber === cardInfor.cardNumber) &&
        (cardSelectedInfor.propositionId === cardInfor.propositionId)) {

        let productBasket = this.basketData.productsOnBasket;
        for (let i = 0; i < productBasket.length; i++) {
          if ((productBasket[i].category.categoryId) === (productSelected.category.categoryId)) {
            if (productBasket[i].productCode === productSelected.productCode
              && productBasket[i].productId === productSelected.productId &&
              productBasket[i].price === productSelected.price) {
              productBasket[i].quantity = parseInt(productBasket[i].quantity) + parseInt(quantity);
              this.basketData.feeObject = null;
              this.basketData.feeObject = productFee;
              this.isNotItemNew = true;
            }
          } else {
            this.isDifferentCatalog = true;
            return;
          }
        }

        if (!this.isNotItemNew) {
          let quantityOfitem = {
            'quantity': parseInt(quantity),
            'value': productSelected.price,
          };
          const objectCombinedNew = Object.assign({}, productSelected, quantityOfitem);
          this.basketData.productsOnBasket.push(objectCombinedNew);
          this.basketData.feeObject = null;
          this.basketData.feeObject = productFee;
        }

      } else {
        this.isDifferentCard = true;

      }
    } else {
      let quantityOfitem = {
        'quantity': parseInt(quantity),
        'value': productSelected.price,
      };
      const objectCombined = Object.assign({}, productSelected, quantityOfitem);
      this.basketData.productsOnBasket.push(objectCombined);
      this.basketData.cardInformation = cardInfor;
      this.basketData.feeObject = null;
      this.basketData.feeObject = productFee;
    }
  }


  removeItemFromBasket(index: any) {

    if (index !== -1) {
      let basketOrderLines = this.basketData.feeObject.orderlines;
      for (let i = 0; i < basketOrderLines.length; i++) {
        if ((this.basketData.productsOnBasket[index].productCode === basketOrderLines[i].productCode)
          && (parseFloat(this.basketData.productsOnBasket[index].price) === parseFloat(basketOrderLines[i].unitPrice))) {
          this.basketData.feeObject.orderlines.splice(i, 1)
        }
      }
      this.basketData.productsOnBasket.splice(index, 1);

    }
  }

  //Data After Generate Discount Gift Card
  getDataToGenerateOrderBuy() {

    let data = this.basketData;
    let bodyForGenerateOrder = {
      "propositionId": data.cardInformation.propositionId,
      "cardProductCode": data.cardInformation.productCode,
      "validateOnly": true,
      "orderJourney": data.productsOnBasket[0].benefit.orderJourney,
      "orderlines": []
    }
    for (let i = 0; i < data.productsOnBasket.length; i++) {
      let orderLineProductSelected = {
        "productCode": data.productsOnBasket[i].productCode,
        "quantity": data.productsOnBasket[i].quantity,
        "loadAmount": parseFloat(data.productsOnBasket[i].price),
      }
      bodyForGenerateOrder.orderlines.push(orderLineProductSelected);
    }
    return bodyForGenerateOrder;
  }


  getDataToGenerateOrderExchange() {

    let data = this.basketData;
    let bodyForGenerateOrder = {
      "propositionId": data.cardInformation.propositionId,
      "paymentCardNumber": data.cardInformation.cardNumber,
      "orderJourney": data.productsOnBasket[0].benefit.orderJourney,
      "orderlines": []
    }
    for (let i = 0; i < data.productsOnBasket.length; i++) {
      let orderLineProductSelected = {
        "productCode": data.productsOnBasket[i].productCode,
        "quantity": data.productsOnBasket[i].quantity,
        "loadAmount": parseFloat(data.productsOnBasket[i].price),
      }
      bodyForGenerateOrder.orderlines.push(orderLineProductSelected);
    }
    return bodyForGenerateOrder;
  }

  //Data After Generate Order
  getDataAfterGenerateOrder() {
    return this.dataAfterGenerateOrder;
  }

  saveDataAfterGenerateOrder(data) {
    this.dataAfterGenerateOrder = data;
  }

  resetDataAfterGenerateOrder() {
    this.dataAfterGenerateOrder = Object.assign({}, this.defaultMasterData);
  }

  savePrimaryCard(primaryCard) {
    this.primaryCard = primaryCard;
  }

  getPrimaryCard() {
    return this.primaryCard;
  }

  resetPrimaryCard() {
    this.primaryCard = Object.assign({}, this.defaultMasterData);
  }

  getIsDifferentCard() {
    return this.isDifferentCard;
  }

  getIsDifferentCategory() {
    return this.isDifferentCatalog;
  }


  private static _instance: MyShoppingBasketSharingDataService = new MyShoppingBasketSharingDataService();

  public static getInstance(): MyShoppingBasketSharingDataService {
    return MyShoppingBasketSharingDataService._instance;
  }

  constructor() {
    if (MyShoppingBasketSharingDataService._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use YourCardDetailsSharingDataService.getInstance() instead of new.');
    }

    MyShoppingBasketSharingDataService._instance = this;
  }

}
