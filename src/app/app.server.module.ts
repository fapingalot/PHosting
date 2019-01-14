import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { environment } from '@env/environment';

import { AppModule } from './app.module';
import { AppComponent } from './components/app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    // Server Only Modules
    BrowserModule.withServerTransition({ appId: environment.appId }),

    // App Module
    AppModule,

    // Extra
    ServerModule,

    NoopAnimationsModule, // <-- Disable animations on the server

    ModuleMapLoaderModule, // <-- *Important* to have lazy-loaded routes work
    ServerTransferStateModule // <-- *Important* to have transfer state work
    // TODO Service worker
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent]
})
export class AppServerModule {}
