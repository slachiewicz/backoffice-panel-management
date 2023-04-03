import {NgModule} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {BrowserModule} from '@angular/platform-browser';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzTagModule} from 'ng-zorro-antd/tag';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ShellComponent} from './shell/shell.component';
import {ClientsComponent} from './clients/clients.component';
import {sharedEnvironment} from 'shared';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShellComponent,
    ClientsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'}),
    provideFirebaseApp(() => initializeApp(sharedEnvironment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzInputModule,
    NzDividerModule,
    NzCheckboxModule,
    NzButtonModule,
    NzTagModule,
    NzAvatarModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzDatePickerModule,
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent],
})
export class AppModule {}
