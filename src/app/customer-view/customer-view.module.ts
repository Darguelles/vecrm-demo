import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CustomerViewComponent }   from './customer-view.component';
import { RouterModule }  from '@angular/router';
import { CustomerViewRoutes }   from './customer-view.routes';
import { CustomerViewService }   from './services/customer-view.service';
import { Grid }   from '../grid/grid';


@NgModule({
    imports: [BrowserModule, RouterModule, CustomerViewRoutes],
    exports: [],
    declarations: [CustomerViewComponent,Grid],
    providers: [CustomerViewService],
})
export class CustomerViewModule { }