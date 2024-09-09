import { createReducer, on } from '@ngrx/store';

import { GithubApiActions } from './github.actions';
import { GithubUser } from '../shared/services/github/github.model';

export const initialState: ReadonlyArray<GithubUser> = [];

/**
 * Retrieves the list of GitHub users from the API and updates the state with the new users.
 *
 * @param _state - The current state of the GitHub reducer.
 * @param users - The list of GitHub users retrieved from the API.
 * @returns The updated state with the new users.
 *
 * @author Daniel Martinez
 */
export const githubReducer = createReducer(
  initialState,
  on(GithubApiActions.retrievedGithubUsersList, (_state, { users }): any => users)
);
