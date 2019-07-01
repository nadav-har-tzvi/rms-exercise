import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonUtilsModule} from './common-utils/common.module';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpAuthInterceptor} from './common-utils/auth/http-auth-interceptor';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonUtilsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
