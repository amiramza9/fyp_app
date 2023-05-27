import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPagesRoutingModule } from './dashboard-pages-routing.module';
import { DashboardPagesComponent } from './dashboard-pages.component';


@NgModule({
  declarations: [
    DashboardPagesComponent
  ],
  imports: [
    CommonModule,
    DashboardPagesRoutingModule
  ]
})
export class DashboardPagesModule { }
