import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, from, fromEvent } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BindingsServiceService {
  logIn: string = this.cookieService.get('token');
  private personaInfoObs$: BehaviorSubject<string> =
    new BehaviorSubject<string>(this.logIn);

  constructor(private cookieService: CookieService) {}

  getPersonaInfoObs() {
    return this.personaInfoObs$.asObservable();
  }
  setPersonaInfoObs(data: any) {
    return this.personaInfoObs$.next(data);
  }

  //Retorna true or false dependiendo de si esta logueado

  logOrNot() {
    if (this.logIn) return true;
    else return false;
  }
}
