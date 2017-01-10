import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {BrowserModule}  from '@angular/platform-browser';
import {RouterModule}  from '@angular/router';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {WatchListViewComponent} from "./watchlist-view.component";
import {WatchlistViewRoutes} from "./watchlist-view.routes";
import {WatchListService} from "./services/watchlist-service";
import {GenericComponentModule} from "../components/generic-component.module";
import {ActionBarComponent} from "../components/action-bar/action-bar.component";
import {MorrisChartModule} from "../report/morris-chart/morris.module";

@NgModule({
  imports: [BrowserModule, RouterModule, WatchlistViewRoutes, ChartsModule, GenericComponentModule, MorrisChartModule],
  exports: [],
  declarations: [WatchListViewComponent, ActionBarComponent],
  providers: [WatchListService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WatchListViewModule {

}
