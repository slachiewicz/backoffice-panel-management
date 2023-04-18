import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarService,
  NbThemeModule
} from '@nebular/theme';
import {AppComponent} from './app.component';
import {sharedEnvironment} from 'shared';
import {appRoutes} from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    NbThemeModule.forRoot({name: 'default'}),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    provideFirebaseApp(() => initializeApp(sharedEnvironment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
