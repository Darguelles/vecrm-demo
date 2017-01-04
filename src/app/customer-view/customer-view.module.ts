import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {CustomerViewComponent}   from './customer-view.component';
import {RouterModule}  from '@angular/router';
import {CustomerViewRoutes}   from './customer-view.routes';
import {CustomerViewService}   from './services/customer-view.service';
import {Grid}   from '../grid/grid';
import {CardComponent} from '../components/card.component.ts'
import {OrderContainerComponent} from '../components/order.container.component.ts'
import {SearchBarComponent} from '../components/search.bar.component'
import {CircleReportComponent} from '../report/circle.report.component'
import {BarChartComponent} from '../report/bar.chart.component'
import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  imports: [BrowserModule, RouterModule, CustomerViewRoutes, ChartsModule],
  exports: [],
  declarations: [CustomerViewComponent, Grid, CardComponent, OrderContainerComponent, SearchBarComponent, CircleReportComponent, BarChartComponent],
  providers: [CustomerViewService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CustomerViewModule {
}
