import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as featureActions from './actions';
import { startWith, map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsStoreEffects {
  constructor(private actions$: Actions) {}

  @Effect() loadRequestEffect = this.actions$.pipe(
    ofType(featureActions.ActionTypes.LOAD_REQUEST),
    startWith(new featureActions.LoadRequestAction()),

    switchMap(action =>
      of(
        // TODO server call
        new featureActions.LoadSuccessAction([{ id: 'fredfcd', name: 'SFW' }])
      ).pipe(
        // TODO map
        catchError(error => of(new featureActions.LoadFailureAction(error)))
      )
    )
  );
}
