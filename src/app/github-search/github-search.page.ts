import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../shared/services/github/github.service';
import { GithubUser } from '../shared/services/github/github.model';
import { Subscription } from 'rxjs';
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-github-search',
  templateUrl: 'github-search.page.html',
  styleUrls: ['github-search.page.scss'],
})
export class GithubSearchPage implements OnDestroy {
  user: GithubUser | null = null;
  search = '';
  subscriptions: Subscription[] = [];

  constructor(private githubService: GithubService, private route: ActivatedRoute) {
    addIcons({ personCircleOutline })
    this.route.queryParams.subscribe(query => {
      if (query['login']) {
        this.getUser(query['login']);
        this.search = query['login'];
      }
    })
  }

  ionViewWillLeave() {
    this.user = null;
    this.search = '';
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }

  ngOnDestroy(): void {
    this.user = null;
    this.search = '';
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }

  getUser(login: string) {
    const getUserSubscription = this.githubService.getUser(login).subscribe(user => {
      this.user = user;
    })
    this.subscriptions.push(getUserSubscription);
  }

  async openWebsiteOrBlog(url?: string) {
    if (!url) {
      return;
    }
    await Browser.open({ url });
  };

  onSearch(event: any) {
    const value = event?.detail?.value;

    if (!value) {
      return;
    }

    this.getUser(value);
  }


}
