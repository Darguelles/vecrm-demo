import {Component, ElementRef, HostListener, Inject} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AppConfig} from '../app.config';
import {DOCUMENT} from '@angular/platform-browser';

declare var jQuery: any;

@Component({
  selector: 'layout-free',
  providers: [],
  templateUrl: './layout-free.html',
  host: {
    '[class.nav-static]': 'config.state["nav-static"]',
    '[class.chat-sidebar-opened]': 'chatOpened',
    '[class.app]': 'true',
    id: 'app'
  }
})
export class LayoutFreeComponent {
  config: any;
  configFn: any;
  $sidebar: any;
  el: ElementRef;
  router: Router;
  chatOpened: boolean = false;

  headerClass:string = 'dashboard-header-top'

  constructor(config: AppConfig,
              el: ElementRef,
              router: Router
    , @Inject(DOCUMENT) private document: Document) {
    // Raphael.prototype.safari = function(): any { return; };
    this.el = el;
    this.config = config.getConfig();
    this.configFn = config;
    this.router = router;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number == 0) {
      console.log('A')
      this.headerClass = 'dashboard-header-top'

    } else {
      console.log('B')
      this.headerClass = 'dashboard-header'
    }
  }


}
