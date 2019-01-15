import {
  Actions,
  ActionTypes,
  LoadFailureAction,
  LoadSuccessAction,
  LoadRequestAction
} from './actions';
import { featureAdapter, initialState, State } from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST: {
      action = action as LoadRequestAction;
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_SUCCESS: {
      action = action as LoadSuccessAction;
      return featureAdapter.addAll(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.LOAD_FAILURE: {
      action = action as LoadFailureAction;
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
  }
  return state;
}
