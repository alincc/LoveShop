import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpService} from "../../framework/services/httpService/http.service";

@Injectable()
export class WelcomeService {

    constructor(private http: HttpService) {
    }

    getPasswordPolicy(): Observable<any> {
        return this.http.get("/account/password-policy");
    }

    getContentFromRetreiveContent(code): Observable<any> {
        return this.http.get('cms/message/code=' + code);
    }
}
