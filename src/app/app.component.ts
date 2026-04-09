import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  title = 'Cognadev SAP Prediction Engine';

  constructor(private router: Router) {}

  navigate(path: string): void {
    void this.router.navigate([path]);
  }
}
