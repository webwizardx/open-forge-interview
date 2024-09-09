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

  /**
   * Retrieves user information based on the provided login.
   * @param login - The login of the user to retrieve information for.
   * @returns An Observable that emits the user information.
   * @author Daniel Martinez
   */
  getUser(login: string) {
    const getUserSubscription = this.githubService.getUser(login).subscribe(user => {
      this.user = user;
    })
    this.subscriptions.push(getUserSubscription);
  }

  /**
   * Opens a website or blog using the provided URL.
   *
   * @param url - The URL of the website or blog to open.
   * @returns A promise that resolves when the website or blog is opened.
   *
   * @author Daniel Martinez
   */
  async openWebsiteOrBlog(url?: string) {
    if (!url) {
      return;
    }
    await Browser.open({ url });
  };

  /**
   * Performs a search based on the provided event.
   * @param event - The event object containing the search details.
   * @returns void
   * @author Daniel Martinez
   */
  onSearch(event: any) {
    const value = event?.detail?.value;

    if (!value) {
      return;
    }

    this.getUser(value);
  }
}
