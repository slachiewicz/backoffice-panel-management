import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {sharedEnvironment} from 'shared';
import {appRoutes} from './app.routes';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(sharedEnvironment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
