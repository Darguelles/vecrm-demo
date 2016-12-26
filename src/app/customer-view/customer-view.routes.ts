import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerViewComponent } from './customer-view.component';
import { LayoutFreeComponent } from '../layout-free/layout-free.component';

const routes: Routes = [{
    path: 'portal',
    component: LayoutFreeComponent,
    children: [
        { path: 'view', component: CustomerViewComponent }
    ]
}];


export const appRoutingProviders: any[] = [];

export const CustomerViewRoutes: ModuleWithProviders = RouterModule.forChild(routes);
