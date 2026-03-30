import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DemoStateService } from '../demo-state.service';

@Component({
  selector: 'app-sap-request',
  templateUrl: './sap-request.component.html',
  styleUrl: './sap-request.component.scss',
  standalone: false
})
export class SapRequestComponent {
  constructor(public demo: DemoStateService, private router: Router) {}

  launchWorkflow(): void {
    this.router.navigate(['/talentlab-summary']);
  }
}
