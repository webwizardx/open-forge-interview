import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { GithubService } from '../shared/services/github/github.service';
import { GithubApiActions } from '../state/github.actions';
import { selectGithub } from '../state/github.selector';
import { Subscription } from 'rxjs';
import { GithubUser, GithubUserSearch } from '../shared/services/github/github.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  users = signal<GithubUser[]>([])
  users$ = this.store.select(selectGithub);
  private lastId = 0;
  private subscriptions: Subscription[] = []

  constructor(private githubService: GithubService, private router: Router, private store: Store) { }

  navigateToUserSearchTab(login: string) {
    this.router.navigate(['/tabs/tab2'], { queryParams: { login } });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit() {
    const githubServiceSubscription = this.getUsers({})

    const usersSubscription = this.users$.subscribe(users => {
      const newUsers = [...this.users(), ...users];
      this.users.set(newUsers);
      this.lastId = newUsers[newUsers.length - 1]?.id;
    });

    this.subscriptions.push(githubServiceSubscription, usersSubscription);
  }

  getUsers({ onComplete, params }: { onComplete?: () => void, params?: GithubUserSearch }) {
    return this.githubService.getUsers(params)
      .subscribe((users) => {
        this.store.dispatch(GithubApiActions.retrievedGithubUsersList({ users }));
        onComplete?.();
      }
      );
  }

  onIonInfinite(ev: any) {
    if (!this.lastId) {
      return
    }
    this.getUsers({ onComplete: () => ev.target.complete(), params: { since: this.lastId } });
  }
}
