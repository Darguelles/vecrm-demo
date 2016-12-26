import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { DashboardComponent }   from './dashboard.component';
import { RouterModule }  from '@angular/router';
import { DashboardRoutes }   from './dashboard.routes';
import { DashboardService }   from './services/dashboard.service';
@NgModule({
    imports: [BrowserModule, RouterModule, DashboardRoutes],
    exports: [],
    declarations: [DashboardComponent],
    providers: [DashboardService],
})
export class DashboardModule { }
