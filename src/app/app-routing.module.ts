import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnterpriseDashboardComponent } from './enterprise-dashboard/enterprise-dashboard.component';
import { SapRequestComponent } from './sap-request/sap-request.component';
import { SapResultsComponent } from './sap-results/sap-results.component';
import { TalentlabSummaryComponent } from './talentlab-summary/talentlab-summary.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: EnterpriseDashboardComponent },
  { path: 'sap-request', component: SapRequestComponent },
  { path: 'talentlab-summary', component: TalentlabSummaryComponent },
  { path: 'sap-results', component: SapResultsComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
