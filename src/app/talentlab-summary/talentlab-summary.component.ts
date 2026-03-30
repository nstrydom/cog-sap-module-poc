import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DemoStateService } from '../demo-state.service';

@Component({
  selector: 'app-talentlab-summary',
  templateUrl: './talentlab-summary.component.html',
  styleUrl: './talentlab-summary.component.scss',
  standalone: false
})
export class TalentlabSummaryComponent {
  constructor(public demo: DemoStateService, private router: Router) {}

  async submit(): Promise<void> {
    await this.demo.submitToSap();
    this.router.navigate(['/sap-results']);
  }
}
