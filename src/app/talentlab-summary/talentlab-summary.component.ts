import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CandidateProfile, DemoStateService, FinalRecommendation } from '../demo-state.service';

@Component({
  selector: 'app-talentlab-summary',
  templateUrl: './talentlab-summary.component.html',
  styleUrl: './talentlab-summary.component.scss',
  standalone: false
})
export class TalentlabSummaryComponent {
  selectedLens: 'role' | 'hiring' | 'performance' = 'role';

  constructor(public demo: DemoStateService, private router: Router) {}

  get profile(): CandidateProfile {
    return this.demo.activeCandidate;
  }

  get recommendation(): FinalRecommendation {
    return this.demo.finalRecommendation;
  }

  get primaryCapabilityScore(): number {
    return this.demo.capabilities[0]?.score ?? 0;
  }

  getRiskClass(risk: string): string {
    const normalised = risk.toLowerCase();

    if (normalised.includes('low')) {
      return 'status-good';
    }

    if (normalised.includes('moderate') || normalised.includes('develop')) {
      return 'status-watch';
    }

    return 'status-alert';
  }

  selectLens(lens: 'role' | 'hiring' | 'performance'): void {
    this.selectedLens = lens;
  }

  async submit(): Promise<void> {
    await this.demo.submitToSap();
    this.router.navigate(['/sap-results']);
  }
}
