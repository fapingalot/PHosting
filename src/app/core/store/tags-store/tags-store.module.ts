import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { TagsStoreEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature('tags', featureReducer),
    EffectsModule.forFeature([TagsStoreEffects])
  ]
})
export class TagsStoreModule {}
