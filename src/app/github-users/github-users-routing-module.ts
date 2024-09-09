import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUsersPage } from './github-users.page';

const routes: Routes = [
  {
    path: '',
    component: GithubUsersPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubUsersPageRoutingModule {}
