import {NgModule} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import { MatSliderModule } from "@angular/material/slider";
import {BrowserModule} from '@angular/platform-browser';
import {sharedEnvironment} from 'shared';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(sharedEnvironment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
