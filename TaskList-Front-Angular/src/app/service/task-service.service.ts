import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Objx, UsuarioLoginDTO } from './mock';
import { TaskMock } from './task-mock';
import { CookieService } from 'ngx-cookie-service';
import { RegistrarseServiceService } from './registrarse-service.service';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  objx = new Objx('hola', 'asd');
  arrayX: Objx[] = [new Objx('a', 'b'), new Objx('c', 'd')];

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private registrarseService: RegistrarseServiceService
  ) {}

  getAll() {
    return this.http.get(
      'http://localhost:8080/task/all2/' + this.getUsuarioInfo('id')
    );
  }

  create(task: any) {
    console.log('al back va: ', task);
    return this.http.post('http://localhost:8080/task/save', task);
  }

  update(task: any) {
    return this.http.put(
      'http://localhost:8080/task/update/' + task.id_task,
      task
    );
  }

  delete(id: any) {
    return this.http.delete('http://localhost:8080/task/delete/' + id);
  }

  getUsuarioInfo(propiedad: any) {
    let x = localStorage.getItem('usuarioLoginDTO');

    if (x) x = JSON.parse(x);
    let x2: any = x;
    console.log('obj : ', x2);
    console.log('Retorno de GetUsuario : ', x2[propiedad.valueOf()]);
    return x2[propiedad.valueOf()];
  }
}
