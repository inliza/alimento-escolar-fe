import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';
import { SchoolsComponent } from '../schools/schools.component';
import { ConducesComponent } from '../conduces/conduces.component';
import { MenuComponent } from '../menu/menu.component';
import { BreakfastItemsComponent } from '../breakfast-items/breakfast-items.component';
import { ConducesHistoryComponent } from '../conduces-history/conduces-history.component';
import { ConducesReportComponent } from '../conduces-report/conduces-report.component';
import { ConducesRecoverComponent } from '../conduces-recover/conduces-recover.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: AppBadgeComponent,
      },
      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'tables',
        component: AppTablesComponent,
      },
      {
        path: 'schools',
        component: SchoolsComponent,
      },
      {
        path: 'conduces',
        component: ConducesComponent,
      },
      {
        path: 'school-menu',
        component: MenuComponent,
      },
      {
        path: 'breakfast-items',
        component: BreakfastItemsComponent,
      },
      {
        path: 'conduces-history',
        component: ConducesHistoryComponent
      },
      {
        path: 'conduces-report',
        component: ConducesReportComponent
      },
       {
        path: 'conduces-recover',
        component: ConducesRecoverComponent
      }
    ],
  },
];
