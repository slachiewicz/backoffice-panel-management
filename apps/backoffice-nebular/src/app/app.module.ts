import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {
  NbAlertModule,
  NbButtonModule, NbCalendarModule,
  NbCardModule,
  NbCheckboxModule, NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
  NbTagModule,
  NbThemeModule,
  NbTreeGridModule,
  NbUserModule
} from '@nebular/theme';
import {sharedEnvironment} from 'shared';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {ClientsComponent} from './clients/clients.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ShellComponent} from './shell/shell.component';
import {AddTicketDialogComponent} from './add-ticket-dialog/add-ticket-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ShellComponent,
    ClientsComponent,
    AddTicketDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: "enabledBlocking" }),
    ReactiveFormsModule,
    FormsModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: "default" }),
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule.forRoot(),
    NbUserModule,
    NbAlertModule,
    NbIconModule,
    NbCheckboxModule,
    NbButtonModule,
    NbInputModule,
    provideFirebaseApp(() => initializeApp(sharedEnvironment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    NbFormFieldModule,
    NbCardModule,
    NbTagModule,
    NbListModule,
    NbTreeGridModule,
    NbCalendarModule,
    NbDialogModule.forRoot(),
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
