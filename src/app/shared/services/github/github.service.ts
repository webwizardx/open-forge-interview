import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GithubUser, GithubUserSearch } from './github.model';

@Injectable({ providedIn: 'root' })
export class GithubService {
  BASE_URL = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUsers({ per_page = 25, since = 0 }: GithubUserSearch = {}): Observable<GithubUser[]> {
    return this.http.get<GithubUser[]>(`${this.BASE_URL}/users`, {
      headers: {
        'Accept': 'application/vnd.github+json',
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: `Bearer ${environment.githubToken}`,
      },
      params: {
        per_page,
        since
      }
    });
  }

  getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.BASE_URL}/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github+json',
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: `Bearer ${environment.githubToken}`,
      }
    })
  }
}
