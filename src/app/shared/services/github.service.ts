import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GithubService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<any>> {
    return of([{ name: 'test' }, { name: 'test2' }]);
  }
}
