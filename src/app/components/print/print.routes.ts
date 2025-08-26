import { Routes } from "@angular/router";
import { ConducesReportComponent } from "./conduces-report/conduces-report.component";

export const PrintRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'conduces',
        component: ConducesReportComponent,
      },
    ],
  },
];
