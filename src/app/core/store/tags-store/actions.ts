import { Action } from '@ngrx/store';
import { Tag } from '@app/core/models';

export enum ActionTypes {
  LOAD_REQUEST = '[Tags] Load Tags',
  LOAD_FAILURE = '[Tags] Load Tags Fail',
  LOAD_SUCCESS = '[Tags] Load Tags Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: any) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: Tag[]) {}
}

export type Actions =
  | LoadRequestAction
  | LoadFailureAction
  | LoadSuccessAction;
