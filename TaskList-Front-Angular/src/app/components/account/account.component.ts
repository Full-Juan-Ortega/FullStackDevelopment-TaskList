import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario, UsuarioLoginDTO } from 'src/app/service/mock';
import { RegistrarseServiceService } from 'src/app/service/registrarse-service.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login error , did you finish the register?!',
          confirmButtonColor: '#0dcaf0',
        });
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
