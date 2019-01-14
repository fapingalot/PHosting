import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    /* Angular Stuff */
    BrowserModule,

    /* 3rd Party */

    /* Core & Shared */
    CoreModule,
    SharedModule,

    /* My Stuff */
    AppRoutingModule
  ]
})
export class AppModule {}
