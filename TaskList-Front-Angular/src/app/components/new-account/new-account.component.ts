import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
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
    private router: Router,
    private cookieService: CookieService
  ) {}

  form: FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
        Validators.minLength(6),
      ],
    ],
    password: [
      false,
      [Validators.required, Validators.maxLength(50), Validators.minLength(6)],
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
          let usuarioLoginDTO: any = response;
          this.registrarseService.setRegisterComplete(true);
          localStorage.setItem(
            'usuarioLoginDTO',
            JSON.stringify(usuarioLoginDTO)
          );
          this.cookieService.set(
            'usuarioLoginDTO',
            JSON.stringify(usuarioLoginDTO)
          );
        },
        error: (err) => {
          console.log(
            'Register error , your email is already registered : ',
            err
          );
          Swal.fire({
            icon: 'question',
            title: 'Oops...',
            text: 'Register error , your email is already registered!',
            confirmButtonColor: '#0dcaf0',
          });
        },
        complete: () => {
          Swal.fire({
            icon: 'success',
            title: 'Register sucessful',
            text: ' Great , now you can login!',
          });
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
