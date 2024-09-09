import { createFeatureSelector } from '@ngrx/store';
import { GithubUser } from '../shared/services/github/github.model';

/**
 * Selects the 'github' feature state from the application state.
 *
 * @returns {ReadonlyArray<any>} The selected 'github' feature state.
 *
 * @author Daniel Martinez
 */
export const selectGithub = createFeatureSelector<ReadonlyArray<GithubUser>>('github');
