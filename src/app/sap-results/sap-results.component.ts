import { Component } from '@angular/core';

import { DemoStateService } from '../demo-state.service';

@Component({
  selector: 'app-sap-results',
  templateUrl: './sap-results.component.html',
  styleUrl: './sap-results.component.scss',
  standalone: false
})
export class SapResultsComponent {
  constructor(public demo: DemoStateService) {}
}
