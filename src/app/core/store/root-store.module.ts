import { NgModule } from '@angular/core';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';

import { TagsStoreModule } from './tags-store';
import { environment } from '@env/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    /* Root Store */
    StoreModule.forRoot(
      {},
      { metaReducers: environment.production ? [] : [storeFreeze] }
    ),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),

    /* Feature Stores */
    TagsStoreModule
  ]
})
export class RootStoreModule {}
