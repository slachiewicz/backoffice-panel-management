import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule, NbIconModule,
  NbInputModule, NbLayoutModule,
  NbThemeModule
} from "@nebular/theme";
import {sharedEnvironment} from 'shared';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: "enabledBlocking" }),
    ReactiveFormsModule,
    FormsModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: "default" }),
    NbAlertModule,
    NbLayoutModule,
    NbIconModule,
    NbCheckboxModule,
    NbButtonModule,
    NbInputModule,
    provideFirebaseApp(() => initializeApp(sharedEnvironment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
