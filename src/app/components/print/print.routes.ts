import { Routes } from "@angular/router";
import { ConducesReportComponent } from "./conduces-report/conduces-report.component";
import { RelacionConduceReportComponent } from "./relacion-conduce-report/relacion-conduce-report.component";

export const PrintRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'conduces',
        component: ConducesReportComponent,
      },
      {
        path: 'relacion',
        component: RelacionConduceReportComponent,
      },
    ],
  },
];
