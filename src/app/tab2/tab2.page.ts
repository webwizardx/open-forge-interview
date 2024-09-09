import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../shared/services/github/github.service';
import { GithubUser } from '../shared/services/github/github.model';
import { Subscription } from 'rxjs';
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnDestroy {
  user: GithubUser | null = null;
  subscriptions: Subscription[] = [];

  constructor(private githubService: GithubService, private route: ActivatedRoute) {
    addIcons({ personCircleOutline })
    this.route.queryParams.subscribe(query => {
      if (query['login']) {
        this.getUser(query['login']);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
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

  search(event: any) {
    const value = event?.detail?.value;

    if (!value) {
      return;
    }

    this.getUser(value);
  }


}
