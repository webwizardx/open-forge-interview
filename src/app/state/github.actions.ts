import { createActionGroup, props } from '@ngrx/store';

export const GithubApiActions = createActionGroup({
  source: 'Github API',
  events: {
    'Retrieved Github Users List': props<{ users: ReadonlyArray<any> }>(),
    'Search Github User': props<{ user: ReadonlyArray<any> }>(),
  },
});
