import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLoginDTO } from './mock';
import { BehaviorSubject, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegistrarseServiceService {
  private logInObs$: BehaviorSubject<any> = new BehaviorSubject<any>(
    localStorage.getItem('usuarioLoginDTO')
  );

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  storageTest() {
    const txt = '{"name":"John", "age":30, "city":"New York"}';

    let storageData = localStorage.getItem('userSession');

    if (storageData) {
      let obj = JSON.parse(storageData);
      console.log('localStorage parseado', obj);
    }
  }

  testFunctionService() {
    console.log('testFunction ejecuted');
    return this.http.get('http://localhost:8080/usuario/test');
  }

  login(userLogin: UsuarioLoginDTO) {
    console.log('se enviara al Back : ', userLogin);
    return this.http.post('http://localhost:8080/usuario/login', userLogin);
  }

  UsuarioDelBack(usuarioDelBack: UsuarioLoginDTO) {
    return usuarioDelBack;
  }

  register(userRegistro: UsuarioLoginDTO) {
    console.log('se enviara al Back : ', userRegistro);
    return this.http.post('http://localhost:8080/usuario/crear', userRegistro);
  }

  setRegisterComplete(logIn: boolean) {
    return this.logInObs$.next(logIn);
  }

  getRegisterComplete() {
    return this.logInObs$.asObservable();
  }

  logOut() {
    console.log('logout function');
    localStorage.clear();
    this.cookieService.deleteAll();
    this.setRegisterComplete(false);
    this.router.navigate(['home']);
  }
}
