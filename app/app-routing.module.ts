import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  { path: '', component: DashboardLayoutComponent },
  { path: 'home', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'home', loadChildren: () => import('./dashboard-pages/dashboard-pages.module').then(m => m.DashboardPagesModule) }, // default route of the module
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
