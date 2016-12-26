import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DMSComponent } from './dms.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [{
    path: 'portal',
    component: LayoutComponent,
    children: [
        { path: 'dms', component: DMSComponent }
    ]
}];


export const appRoutingProviders: any[] = [];

export const DMSRoutes: ModuleWithProviders = RouterModule.forChild(routes);
