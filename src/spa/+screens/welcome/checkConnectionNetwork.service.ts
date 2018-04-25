import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpCheckNetworkService } from "./httpCheckNetwork.service";

@Injectable()
export class CheckConnectionNetworkService {
  constructor(
    private httpCheckNetwork: HttpCheckNetworkService
  ) {
  }

  getPasswordValidationRules(): Observable<any> {
    return this.httpCheckNetwork.get("account/password-policy");
  }
}
