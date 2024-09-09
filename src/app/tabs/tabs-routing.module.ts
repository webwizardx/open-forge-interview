import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'github-users',
        loadChildren: () => import('../github-users/github-users.module').then(m => m.GithubUsersPageModule)
      },
      {
        path: 'github-search', // Add the login parameter to the route
        loadChildren: () => import('../github-search/github-search.module').then(m => m.GithubSearchPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/github-users',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/github-users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
