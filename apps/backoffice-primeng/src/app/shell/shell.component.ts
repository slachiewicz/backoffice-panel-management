import {Component} from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
      }
    `,
  ],
})
export class ShellComponent {
  constructor() {}
}
