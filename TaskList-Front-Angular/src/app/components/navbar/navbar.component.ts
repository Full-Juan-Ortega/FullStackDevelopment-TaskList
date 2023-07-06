import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { RegistrarseServiceService } from 'src/app/service/registrarse-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  x: any;
  logIn$: Observable<boolean>;

  constructor(private registrarseService: RegistrarseServiceService) {
    this.logIn$ = this.registrarseService.getRegisterComplete();
  }

  logOut() {
    this.registrarseService.logOut();
  }
}
