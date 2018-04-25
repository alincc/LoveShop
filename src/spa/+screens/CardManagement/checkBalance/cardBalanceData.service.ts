import { Injectable } from '@angular/core';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class CardBalanceDataService {
  constructor(
    private http: HttpService
  ) {
  }

}
