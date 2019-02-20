import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ECommerceChartsPanelComponent } from './e-commerce/charts-panel/charts-panel.component';
import { NbCalendarComponent } from '@nebular/theme';
import { ECommerceLegendChartComponent } from './e-commerce/legend-chart/legend-chart.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent,
  },
  {
    path: 'charts',
    component: ECommerceChartsPanelComponent,
  },
  {
    path: 'clients',
    component: ECommerceLegendChartComponent,
  },
  {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  },
  {
    path: 'extra-components/calendar',
    component: NbCalendarComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
