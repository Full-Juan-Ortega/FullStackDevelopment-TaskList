import { Component } from '@angular/core';
import { OnClickNavbarCollapseService } from './service/on-click-navbar-collapse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taskList';

  constructor(private navbarCollapse: OnClickNavbarCollapseService) {}

  collapseNavbar() {
    this.navbarCollapse.collapseNavbar();
  }
}
