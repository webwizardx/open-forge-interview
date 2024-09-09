import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { GithubService } from '../shared/services/github/github.service';
import { GithubApiActions } from '../state/github.actions';
import { selectGithub } from '../state/github.selector';
import { Subscription } from 'rxjs';
import { GithubUser, GithubUserSearch } from '../shared/services/github/github.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-users',
  templateUrl: 'github-users.page.html',
  styleUrls: ['github-users.page.scss'],
})
export class GithubUsersPage implements OnInit, OnDestroy {
  users = signal<GithubUser[]>([])
  users$ = this.store.select(selectGithub);
  private lastId = 0;
  private subscriptions: Subscription[] = []

  constructor(private githubService: GithubService, private router: Router, private store: Store) { }

  navigateToUserSearchTab(login: string) {
    this.router.navigate(['/tabs/github-search'], { queryParams: { login } });
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

  /**
   * Retrieves GitHub users based on the provided parameters.
   *
   * @param onComplete - Optional callback function to be executed when the retrieval is complete.
   * @param params - Optional parameters for the GitHub user search.
   * @returns A subscription to the GitHub users retrieval.
   *
   * @author Daniel Martinez
   */
  getUsers({ onComplete, params }: { onComplete?: () => void, params?: GithubUserSearch }) {
    return this.githubService.getUsers(params)
      .subscribe((users) => {
        this.store.dispatch(GithubApiActions.retrievedGithubUsersList({ users }));
        onComplete?.();
      }
      );
  }

  /**
   * Event handler for the "ionInfinite" event.
   *
   * @param ev - The event object.
   *
   * @remarks
   * This method is called when the "ionInfinite" event is triggered. It checks if the lastId property is truthy and calls the getUsers method with the appropriate parameters.
   *
   * @author Daniel Martinez
   */
  onIonInfinite(ev: any) {
    if (!this.lastId) {
      return
    }
    this.getUsers({ onComplete: () => ev.target.complete(), params: { since: this.lastId } });
  }
}
