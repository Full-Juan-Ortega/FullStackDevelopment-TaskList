import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario, UsuarioLoginDTO } from 'src/app/service/mock';
import { RegistrarseServiceService } from 'src/app/service/registrarse-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  constructor(
    private registrarseService: RegistrarseServiceService,
    private fb: FormBuilder,
    private cookiesService: CookieService,
    private router: Router
  ) {}

  form: FormGroup = this.fb.group({
    email: [],
    password: [false],
  });

  ngOnInit() {}

  login() {
    let userLoginDTO = new UsuarioLoginDTO(
      '',
      this.form.value.password,
      this.form.value.email
    );

    this.registrarseService.login(userLoginDTO).subscribe({
      next: (response) => {
        let usuarioLoginDTO: any = response;
        console.log('usuario del back : ', usuarioLoginDTO);
        localStorage.setItem(
          'usuarioLoginDTO',
          JSON.stringify(usuarioLoginDTO)
        );
        this.cookiesService.set('token', JSON.stringify(usuarioLoginDTO.token));
      },
      error: (err) => {
        console.log('Error en el Login : ', err);
      },
      complete: () => {
        this.registrarseService.setRegisterComplete(true);
        console.log(
          'Valor del register : ',
          this.registrarseService.getRegisterComplete()
        );
        console.log('Login exitoso');
        this.router.navigate(['/task']);
      },
    });
  }

  test() {
    console.log('tira');
    this.registrarseService.testFunctionService().subscribe({
      next: (response) => {
        console.log('respuesta del back ', response);
      },
    });
  }
}
