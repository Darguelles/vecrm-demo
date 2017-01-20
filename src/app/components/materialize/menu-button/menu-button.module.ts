import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {CommonModule}        from '@angular/common';
import {MenuButtonComponent} from "./menu-button.component";
import "materialize-css";
import {MaterializeModule} from "angular2-materialize";

@NgModule({
  imports: [CommonModule, MaterializeModule],
  declarations: [MenuButtonComponent],
  exports: [MenuButtonComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GenericComponentModule {

}
