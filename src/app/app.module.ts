// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { CommonModule } from '@angular/common';
// AWS
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AmplifyService } from 'aws-amplify-angular';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
// Store
import { StoreModule } from '@ngrx/store';
import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
// Notifications
import { ToastrModule } from 'ngx-toastr';
// Components
import { AppComponent } from './app.component';

Amplify.configure(aws_exports);

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    AmplifyUIAngularModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        // we are using the @ngrx/store runtime checks in order to avoid mistakes
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot(effects),
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
