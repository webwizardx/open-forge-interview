import { createFeatureSelector } from '@ngrx/store';

export const selectGithub = createFeatureSelector<ReadonlyArray<any>>('github');
