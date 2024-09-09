import { createActionGroup, props } from '@ngrx/store';
import { GithubUser } from '../shared/services/github/github.model';

/**
 * @fileoverview
 * This file contains the definition of the GithubApiActions module.
 * It exports a constant named GithubApiActions which is a createActionGroup.
 * The createActionGroup function is used to create a group of actions related to the Github API.
 * The GithubApiActions constant has two events:
 * - 'Retrieved Github Users List': An event that is triggered when the Github users list is retrieved.
 *   It takes a single parameter 'users' which is an array of Github user objects.
 * - 'Search Github User': An event that is triggered when a Github user is searched.
 *   It takes a single parameter 'user' which is an array of Github user objects.
 *
 * @module GithubApiActions
 * @author Daniel Martinez
 */
export const GithubApiActions = createActionGroup({
  source: 'Github API',
  events: {
    'Retrieved Github Users List': props<{ users: ReadonlyArray<GithubUser> }>(),
    'Search Github User': props<{ user: ReadonlyArray<any> }>(),
  },
});
