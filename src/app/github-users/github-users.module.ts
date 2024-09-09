import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubUsersPage } from './github-users.page';

import { GithubUsersPageRoutingModule } from './github-users-routing-module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GithubUsersPageRoutingModule
  ],
  declarations: [GithubUsersPage],
})
export class GithubUsersPageModule {
}
