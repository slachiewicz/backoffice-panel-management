import {
  AuthGuard,
  AuthPipeGenerator,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import {Routes} from '@angular/router';

const redirectUnauthorizedPipeGenerator: AuthPipeGenerator = () =>
  redirectUnauthorizedTo(['/login']);
const redirectLoggedInPipeGenerator: AuthPipeGenerator = () =>
  redirectLoggedInTo(['/']);

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shell/shell.module').then((m) => m.ShellModule),
    canActivate: [AuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedPipeGenerator,
    },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
    canActivate: [AuthGuard],
    data: {
      authGuardPipe: redirectLoggedInPipeGenerator,
    },
  },
  {path: '**', redirectTo: ''},
];
