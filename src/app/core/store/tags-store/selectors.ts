import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureAdapter, State } from './state';

// Helper functions
export const getError = (state: State): any => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;

// Feature selector
export const selectTagsState = createFeatureSelector<State>('tags');

// Selectors
export const {
  selectAll: selectAllTags,
  selectEntities: selectTagEntities,
  selectIds: selectTagById,
  selectTotal: selectTagsTotal
} = featureAdapter.getSelectors(selectTagsState);

export const selectError = createSelector(
  selectTagsState,
  getError
);
export const selectIsLoading = createSelector(
  selectTagsState,
  getIsLoading
);
