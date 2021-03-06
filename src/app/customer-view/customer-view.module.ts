import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {CustomerViewComponent}   from './customer-view.component';
import {RouterModule}  from '@angular/router';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {CustomerViewRoutes}   from './customer-view.routes';
import {CustomerViewService}   from './services/customer-view.service';
import {CircleReportComponent} from '../report/circle-chart/circle.report.component'
import {BarChartComponent} from '../report/bar-chart/bar.chart.component'
import {EventReportComponent} from '../report/event-report/event.report.component';
import {ReqOpenedReportComponent} from '../report/requirement-report/req.opened.report.component';
import {PieChartComponent} from '../report/pie-chart/pie.chart.component';
import {ChatterComponent} from '../components/chatter/chatter.component';
import {PieChart2Component} from '../report/pie-chart/pie.chart2.component';
import {GenericComponentModule} from "../components/generic-component.module";
import {MenuButtonComponentModule} from "../components/materialize/menu-button/menu-button.module";


@NgModule({
  imports: [BrowserModule, RouterModule, CustomerViewRoutes, ChartsModule,
    GenericComponentModule, MenuButtonComponentModule],
  exports: [],
  declarations: [CustomerViewComponent, CircleReportComponent, BarChartComponent, EventReportComponent, ReqOpenedReportComponent, PieChartComponent, ChatterComponent, PieChart2Component],
  providers: [CustomerViewService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CustomerViewModule {
}
