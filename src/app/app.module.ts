import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterpriseDashboardComponent } from './enterprise-dashboard/enterprise-dashboard.component';
import { SapRequestComponent } from './sap-request/sap-request.component';
import { SapResultsComponent } from './sap-results/sap-results.component';
import { TalentlabSummaryComponent } from './talentlab-summary/talentlab-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterpriseDashboardComponent,
    SapRequestComponent,
    TalentlabSummaryComponent,
    SapResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
