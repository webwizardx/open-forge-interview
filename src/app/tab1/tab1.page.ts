import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GithubService } from '../shared/services/github.service';
import { GithubApiActions } from '../state/github.actions';
import { selectGithub } from '../state/github.selector';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  users$ = this.store.select(selectGithub);

  constructor(private githubService: GithubService, private store: Store) {}

  ngOnInit() {
    this.githubService.getUsers()
      .subscribe((users) =>
        this.store.dispatch(GithubApiActions.retrievedGithubUsersList({ users }))
      );
  }
}
