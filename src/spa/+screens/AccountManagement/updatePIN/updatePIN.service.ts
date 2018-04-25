import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class UpdatePINService {
    constructor(private http: HttpService) {
    }

    updatePIN(): Observable<any> {
        return this.http.get("account/password-policy");
    }

    getContentFromRetreiveContent(code): Observable<any> {
        return this.http.get('cms/message/code=' + code);
    }

}
