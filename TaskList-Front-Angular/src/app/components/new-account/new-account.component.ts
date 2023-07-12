import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    email: ['', [Validators.required, Validators.email]],
    password: [
      false,
      [Validators.required, Validators.maxLength(10), Validators.minLength(4)],
    ],
    rol: ['USUARIO_RESTRINGIDO'],
  });

  ngOnInit() {}

  register() {
    if (this.form.valid) {
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
          alert('Registro exitoso');
          this.router.navigate(['/login']);
        },
      });
    }
  }

  test() {
    console.log('tira');
    if (this.form.valid) {
      alert('success');
    } else {
      alert('invalid');
    }
  }
}
