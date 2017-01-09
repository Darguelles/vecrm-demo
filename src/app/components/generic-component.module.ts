import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {CardComponent} from "./card/card.component";
import {OrderContainerComponent} from "./order/order.container.component";
import {SearchBarComponent} from "./search-bar/search.bar.component";
import {ButtonContainerComponent} from "./button-container/button.container.component";
import {CommonModule}        from '@angular/common';
import {Grid} from "../grid/grid";

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, OrderContainerComponent, SearchBarComponent,ButtonContainerComponent, Grid],
  exports: [CardComponent, OrderContainerComponent, SearchBarComponent,ButtonContainerComponent, Grid],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GenericComponentModule {

}
