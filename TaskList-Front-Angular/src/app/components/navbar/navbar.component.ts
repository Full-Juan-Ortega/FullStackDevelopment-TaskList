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
  logIn$: Observable<any>;

  emailStatus: any;

  constructor(
    private registrarseService: RegistrarseServiceService,
    private onClickNavbarCollapseService: OnClickNavbarCollapseService
  ) {
    this.logIn$ = this.registrarseService.getRegisterComplete();
  }

  ngOnInit() {
    {
      this.logIn$.subscribe((response) => {
        console.log('ver', response);
        if (response)
          this.emailStatus =
            this.registrarseService.getUsuarioInfo('nombreUsuario');
      });
    }
  }

  logOut() {
    this.registrarseService.logOut();
  }

  collapseNavbar() {
    this.onClickNavbarCollapseService.collapseNavbar();
  }
}
