import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';

import { environment } from '@env/environment';

import { AppModule } from './app.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    // Browser Only Modules
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: environment.appId }),

    // App Module
    AppModule,

    // Extra
    // TODO Service worker
    HttpClientModule,
    BrowserTransferStateModule
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
