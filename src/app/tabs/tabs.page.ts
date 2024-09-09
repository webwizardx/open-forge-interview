import { Component, EnvironmentInjector, inject } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, logoGithub, searchCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private router: Router) {
    addIcons({ logoGithub, searchCircleOutline });
  }

  navigateToGithubSearch() {
    this.router.navigate(['/tabs/github-search']);
  }
}
