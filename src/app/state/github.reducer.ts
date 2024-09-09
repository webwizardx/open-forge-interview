import { createReducer, on } from '@ngrx/store';

import { GithubApiActions } from './github.actions';

export const initialState: ReadonlyArray<any> = [];

export const githubReducer = createReducer(
  initialState,
  on(GithubApiActions.retrievedGithubUsersList, (_state, { users }): any => users)
);
