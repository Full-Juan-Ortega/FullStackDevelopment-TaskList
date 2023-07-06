import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioLoginDTO } from 'src/app/service/mock';
import { RegistrarseServiceService } from 'src/app/service/registrarse-service.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(
    private registrarseService: RegistrarseServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  form: FormGroup = this.fb.group({
    email: [],
    password: [false],
    rol: 'USUARIO_RESTRINGIDO',
  });

  ngOnInit() {}

  register() {
    let userLoginDTO: UsuarioLoginDTO = new UsuarioLoginDTO();
    userLoginDTO.nombreUsuario = this.form.value.email;
    userLoginDTO.clave = this.form.value.password;
    userLoginDTO.rol = this.form.value.rol;

    this.registrarseService.register(userLoginDTO).subscribe({
      next: (response) => {
        console.log('usuario del back : ', userLoginDTO);
        console.log('RESPUESTA del back : ', response);
      },
      error: (err) => {
        console.log('Error en el Registro : ', err);
      },
      complete: () => {
        this.router.navigate(['/login']);
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
