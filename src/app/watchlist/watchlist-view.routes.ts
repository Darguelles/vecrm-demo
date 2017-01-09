import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFreeComponent } from '../layout-free/layout-free.component';
import {WatchListViewComponent} from "./watchlist-view.component";

const routes: Routes = [{
  path: 'portal',
  component: LayoutFreeComponent,
  children: [
    { path: 'watchlist', component: WatchListViewComponent },
  ]
}];


export const appRoutingProviders: any[] = [];

export const WatchlistViewRoutes: ModuleWithProviders = RouterModule.forChild(routes);
