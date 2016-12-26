import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { UserInfo } from './user-info';
import { Application } from './application';

@Injectable()
export class UserInfoService {

    private headers = new Headers({'Content-Type': 'application/json'});
    //private url_UserInfo = 'Account/GetUserInfo';  
    private url_UserInfo = 'https://sdp-uat.terremark.net/Oss.ResourceManager/Account/GetUserInfo';  
    //private url_Applications = 'Account/Applications';  
    private url_Applications = 'https://sdp-uat.terremark.net/Oss.ResourceManager/Account/Applications';  

    constructor(private http: Http) { }

    getUserInfo(): Promise<UserInfo> {
            return this.http.post(this.url_UserInfo,null)
               .toPromise()
               .then(response => response.json() as UserInfo)
               .catch(this.handleError);
    }

    getApplications(): Promise<Application[]> {
            return this.http.post(this.url_Applications,null)
               .toPromise()
               .then(response => response.json() as Application[])
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}