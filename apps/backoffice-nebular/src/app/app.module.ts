import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {BrowserModule} from '@angular/platform-browser';
import {NbAuthModule} from '@nebular/auth';
import {
  NbFirebaseFacebookStrategy,
  NbFirebaseGoogleStrategy,
  NbFirebasePasswordStrategy,
} from '@nebular/firebase-auth';
import {NbThemeModule} from '@nebular/theme';
import {sharedEnvironment} from 'shared';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    NbThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbFirebasePasswordStrategy.setup({name: 'password'}),
        NbFirebaseGoogleStrategy.setup({name: 'google'}),
        NbFirebaseFacebookStrategy.setup({name: 'facebook'}),
      ],
      forms: {},
    }),
    provideFirebaseApp(() => initializeApp(sharedEnvironment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
