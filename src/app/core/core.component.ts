import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div class="container mat-typography">
      <router-outlet></router-outlet>
    </div>
  `
})
export class CoreComponent {
}
