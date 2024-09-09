import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubSearchPage } from './github-search.page';

import { GithubSearchPageRoutingModule } from './github-search-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GithubSearchPageRoutingModule
  ],
  declarations: [GithubSearchPage]
})
export class GithubSearchPageModule {}
