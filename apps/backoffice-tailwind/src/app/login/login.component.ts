import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable, take} from 'rxjs';
import {AuthService, BaseLoginComponent} from 'shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends BaseLoginComponent {
  constructor(authService: AuthService, router: Router) {
    super(authService, router);
  }
}
