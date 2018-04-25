import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "../../../framework/services/httpService/http.service";

@Injectable()
export class EditAccountService {
    constructor(private http: HttpService) {
    }

    getUserData(): Observable<any> {
        return this.http.get("account");
    }

    updateAccount(userData): Observable<any> {
        return this.http.put("account", userData);
    }

    getContentFromRetreiveContent(code): Observable<any> {
        return this.http.get('cms/message/code=' + code);
    }
    searchPostcodeAutoComplete(url: string): Observable<any> {
        return this.http.getExternal(url);
    }

    lookUpAddress(url: string): Observable<any> {
        return this.http.getExternal(url);
    }
}
