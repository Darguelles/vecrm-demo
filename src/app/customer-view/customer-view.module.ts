import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {CustomerViewComponent}   from './customer-view.component';
import {RouterModule}  from '@angular/router';
import {CustomerViewRoutes}   from './customer-view.routes';
import {CustomerViewService}   from './services/customer-view.service';
import {Grid}   from '../grid/grid';
import {CardComponent} from '../components/card.component.ts'


@NgModule({
  imports: [BrowserModule, RouterModule, CustomerViewRoutes],
  exports: [],
  declarations: [CustomerViewComponent, Grid, CardComponent],
  providers: [CustomerViewService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CustomerViewModule {
}
