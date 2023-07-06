import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService, private router: Router) {}

  /**El interceptor agrega a la cabecera de la peticion una propiedad : Autorization , que va a llevar el token a la api */

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token: string = this.cookieService.get('token');
    let tokenx = token.replace('"', '');
    //clona la request y le agrega el set header authorizacion
    let req = request;
    if (token) {
      request = req.clone({
        setHeaders: {
          Authorization: 'Bearer : ' + tokenx,
        },
      });
    }

    return next.handle(request);
  }
}
