import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OnClickNavbarCollapseService } from 'src/app/service/on-click-navbar-collapse.service';
import { RegistrarseServiceService } from 'src/app/service/registrarse-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  x: any;
  logIn$: Observable<boolean>;

  constructor(
    private registrarseService: RegistrarseServiceService,
    private onClickNavbarCollapseService: OnClickNavbarCollapseService
  ) {
    this.logIn$ = this.registrarseService.getRegisterComplete();
  }

  logOut() {
    this.registrarseService.logOut();
  }

  collapseNavbar() {
    this.onClickNavbarCollapseService.collapseNavbar();
  }
}
