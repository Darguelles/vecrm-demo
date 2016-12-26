import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { DMSComponent }   from './dms.component';
import { RouterModule }  from '@angular/router';
import { DMSRoutes }   from './dms.routes';
import { DMSService }   from './services/dms.service';


@NgModule({
    imports: [BrowserModule, RouterModule, DMSRoutes],
    exports: [],
    declarations: [DMSComponent],
    providers: [DMSService],
})
export class DMSModule { }