import { Component } from '@angular/core';

@Component({
  selector: 'init-component',
  template: `<app-menu></app-menu>
              <router-outlet></router-outlet>`
})
export class InitComponent {
}
