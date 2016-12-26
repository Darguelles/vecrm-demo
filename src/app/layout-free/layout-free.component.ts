import { Component, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppConfig } from '../app.config';

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

  constructor(config: AppConfig,
              el: ElementRef,
              router: Router) {
    // Raphael.prototype.safari = function(): any { return; };
    this.el = el;
    this.config = config.getConfig();
    this.configFn = config;
    this.router = router;
  }
     }