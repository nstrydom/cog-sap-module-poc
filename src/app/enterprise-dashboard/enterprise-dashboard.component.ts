import { Component } from '@angular/core';

import { DemoStateService } from '../demo-state.service';

@Component({
  selector: 'app-enterprise-dashboard',
  templateUrl: './enterprise-dashboard.component.html',
  styleUrl: './enterprise-dashboard.component.scss',
  standalone: false
})
export class EnterpriseDashboardComponent {
  constructor(public demo: DemoStateService) {}
}
