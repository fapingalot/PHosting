import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootStoreModule } from './store';

@NgModule({
  imports: [
    /* Angular Stuff */
    CommonModule,

    /* 3rd Party */

    /* My Stuff */
    RootStoreModule
  ],
  declarations: [],
  providers: [],
  exports: []
})
export class CoreModule {
  /* Make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
