import { Component, EnvironmentInjector, inject } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private router: Router) {
    addIcons({ triangle, ellipse, square });
  }

  navigateToTab2() {
    this.router.navigate(['/tabs/tab2']);
  }
}
