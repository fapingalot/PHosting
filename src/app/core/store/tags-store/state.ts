import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Tag } from '@app/core/models';

export const featureAdapter = createEntityAdapter<Tag>({
  selectId: tag => tag.id,
  sortComparer: (a: Tag, b: Tag): number => b.name.localeCompare(a.name)
});

// State
export interface State extends EntityState<Tag> {
  isLoading: boolean;
  error?: any;
}

// Initial state
export const initialState = featureAdapter.getInitialState({
  isLoading: false,
  error: null
});
