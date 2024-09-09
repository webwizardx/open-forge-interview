import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubSearchPage } from './github-search.page';

const routes: Routes = [
  {
    path: '',
    component: GithubSearchPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubSearchPageRoutingModule {}
