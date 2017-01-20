import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'menu-button',
  templateUrl: 'menu-button.component.html',
})
export class MenuButtonComponent {

  showStyle: Boolean = false;

  getStyle() {
    if(this.showStyle) {
      return "inline";
    } else {
      return "none";
    }
  }

  getHamburger() {
    if(this.showStyle) {
      return "open";
    } else {
      return "";
    }
  }

}
