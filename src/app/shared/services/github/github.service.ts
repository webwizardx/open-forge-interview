import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GithubUser, GithubUserSearch } from './github.model';

@Injectable({ providedIn: 'root' })
export class GithubService {
  BASE_URL = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  /**
   * Retrieves a list of GitHub users.
   *
   * @param {GithubUserSearch} options - The options for the user search.
   * @param {number} options.per_page - The number of users to retrieve per page. Default is 25.
   * @param {number} options.since - The ID of the user to start retrieving from. Default is 0.
   *
   * @returns {Observable<GithubUser[]>} - An observable that emits an array of GitHub users.
   *
   * @author Daniel Martinez
   */
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

  /**
   * Retrieves information about a GitHub user.
   *
   * @param username - The username of the GitHub user.
   * @returns An observable that emits a `GithubUser` object containing the user's information.
   *
   * @author Daniel Martinez
   */
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
