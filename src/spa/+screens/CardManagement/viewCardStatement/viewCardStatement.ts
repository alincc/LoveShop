import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { ViewCardStatementService } from './viewCardStatement.service';
import { LoadingIndicatorService } from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { Utils } from "../../../framework/services/utilities/utilities";
import { ToastMessageService } from "../../../framework/services/toastMessageService/toastMessage.service";
import format from 'date-fns/format';
import groupBy from 'lodash.groupby';
import { RouteManagerService } from "../../../framework/services/routeManager/routeManager.service";
import { AppConfig as app } from "../../../framework/appConfig";

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;

@IonicPage()
@Component({
  selector: 'page-viewCardStatement',
  templateUrl: 'viewCardStatement.html',
  providers: [
    ViewCardStatementService
  ]
})

export class ViewCardStatementPage {
  transaction = {
    "currencyCode": "GBP",
    "availableBalance": 0,
    "transactions": []
  };
  cardCurrent: any;
  make_first_transaction_with_card_MSG;

  constructor(public routerManager: RouteManagerService,
    public navParams: NavParams,
    public navCtrl: NavController,
    private viewCardStatementService: ViewCardStatementService) {
  }

  ionViewWillEnter() {
    this.getContentHardCode();
    if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.navParams.get('cardCurrent')) {
        this.cardCurrent = this.navParams.get('cardCurrent');
      }

      if (this.navParams.get('data')) {
        const data = this.navParams.get('data');
        let dataCooked = this.convertTransactionList(data.transactions);
        this.transaction.transactions = dataCooked;
        this.transaction.availableBalance = data.availableBalance;
      }
    }
  }

  public convertDate(date) {
    let a = date.split(/[^0-9]/);
    const jsDate = new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
    if (this.isToday(jsDate)) {
      return 'today ' + format(jsDate, 'Do MMM YYYY');
    } else if (this.isYesterday(jsDate)) {
      return 'yesterday ' + format(jsDate, 'Do MMM YYYY');
    } else {
      return format(jsDate, 'dddd Do MMM YYYY');
    }
  };

  isYesterday(date: Date): boolean {
    const today = new Date();
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    return (date &&
      yesterday.getDate() == date.getDate() &&
      yesterday.getMonth() == date.getMonth() &&
      yesterday.getFullYear() == date.getFullYear());
  }

  isToday(date: Date): boolean {
    const today = (new Date());
    return (date &&
      today.getDate() == date.getDate() &&
      today.getMonth() == date.getMonth() &&
      today.getFullYear() == date.getFullYear());
  }

  public convertHour(date) {
    let a = date.split(/[^0-9]/);
    let hourAfterConvert = format(
      new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]),
      'HH:mm'
    )
    return hourAfterConvert;
  };

  public statusOfAmount(amount) {
    let statusOfAmount = false;

    if (amount >= 0) {
      statusOfAmount = true;
    }

    return statusOfAmount;
  };

  public convertTransactionList(listTransaction) {
    let arr = [];
    let arrFinish = [];
    for (let transaction of listTransaction) {
      let dateAfterConvert = this.convertDate(transaction.date);
      let hourAfterConvert = this.convertHour(transaction.date);
      let statusOfAmount = this.statusOfAmount(transaction.amount);
      let transactionAfterConvert = {
        type: transaction.type,
        amount: transaction.amount,
        date: transaction.date,
        description: transaction.description,
        dateAfterConvert: dateAfterConvert,
        hourAfterConvert: hourAfterConvert,
        statusOfAmount: statusOfAmount
      }
      arr.push(transactionAfterConvert);
    }

    arr = arr.reverse();
    let arrayTransaction = groupBy(arr, function (item) {
      return item.dateAfterConvert;
    });

    const keys = Object.keys(arrayTransaction).sort((key1, key2) => {
      const tran1: any = arrayTransaction[key1];
      const tran2: any = arrayTransaction[key2];
      const date1 = new Date(tran1[0].date);
      const date2 = new Date(tran2[0].date);

      if (date1 > date2) {
        return -1;
      }

      if (date1 < date2) {
        return 1;
      }

      return 0;
    });

    for (let key of keys) {
      arrFinish.push((arrayTransaction[key]));
    }
    return arrFinish;
  }

  public getListCardStatement(cardData) {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this.viewCardStatementService.getStatementList(cardData)
      .subscribe((res) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if (!res.ok) {
          return;
        }

        let body = res.response;
        let dataCooked = this.convertTransactionList(body.transactions);
        this.transaction.transactions = dataCooked;
        this.transaction.availableBalance = body.availableBalance;
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  private _showError(message) {
    ToastMessageService.getInstance().showToastMessage(message);
  }

  private _handleError(res) {
    LoadingIndicatorService.getInstance().hideLoadingIndicator();
    let msg = DEFAULT_ERROR_MSG;
    try {
      let body = JSON.parse(res._body);
      msg = body.errors[0].message;
    } catch (e) {
      msg = DEFAULT_ERROR_MSG;
    }
    this._showError(msg);
  }


  public getContentHardCode() {
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.make_first_transaction_with_card_MSG = body.message;
      },
      error: (error) => {
      },
      complete: () => {
      }
    };
    this.viewCardStatementService
      .getContentFromRetreiveContent('make-first-transaction-with-card')
      .subscribe(observer);
  }
}
