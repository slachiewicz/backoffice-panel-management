import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {ShellRoutingModule} from './shell-routing.module';
import {ShellComponent} from './shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
  ],
})
export class ShellModule {}
