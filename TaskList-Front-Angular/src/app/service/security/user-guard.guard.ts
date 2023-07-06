import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrarseServiceService } from '../registrarse-service.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserGuardGuard implements CanActivate {
  constructor(
    private registrarseService: RegistrarseServiceService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //este retorno true deja pasar , false no deja
    return this.checkUserLogin();
  }

  checkUserLogin() {
    if (this.cookieService.check('token')) {
      return true;
    }
    //redireccionar al login
    alert('Debes loguearte primero');
    this.router.navigate([['/login']]);
    return false;
  }
}
