import { Component, OnInit } from '@angular/core';

import { UserInfo } from './user-info';
import { Application } from './application';

import { UserInfoService } from './user-info.service';

@Component({
  selector: '[navbar]',
  templateUrl: './navbar.html',
  providers: [UserInfoService]
})
export class NavbarComponent implements OnInit {

  userInfo: UserInfo;
  applications: Application[];

  fullName: string;
  userName: string;

  constructor(private userInfoService: UserInfoService) {
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(): void {

   
  }

  public logout() {

  }
}
