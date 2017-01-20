import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule}        from '@angular/common';
import {MenuButtonComponent} from "./menu-button.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MenuButtonComponent],
  exports: [MenuButtonComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MenuButtonComponentModule {

}
