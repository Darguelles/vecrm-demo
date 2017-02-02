import {Component, OnInit, HostListener, Inject} from '@angular/core';

import {UserInfo} from './user-info';
import {Application} from './application';

import {DOCUMENT} from '@angular/platform-browser';

import {UserInfoService} from './user-info.service';

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

  headerClass:string = 'button-hide-top'
  checkboxClass:string = 'checkbox-group-display-top'
  searchBarClass:string = 'search-bar-top'
  iconLogoClass:string = 'icon-logo-top'

  constructor(private userInfoService: UserInfoService, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number == 0) {
      this.headerClass   = 'button-hide-top'
      this.checkboxClass = 'checkbox-group-display-top'
      this.searchBarClass = 'search-bar-top'
      this.iconLogoClass = 'icon-logo-top'

    } else {
      this.checkboxClass = 'checkbox-group-display'
      this.headerClass = 'button-hide'
      this.searchBarClass = 'search-bar'
      this.iconLogoClass = 'icon-logo'
    }
  }

  getUserInfo(): void {


  }

  public logout() {

  }
}
