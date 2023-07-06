import { Component } from '@angular/core';
import { BindingsServiceService } from './bindings-service.service';
import { Observable, from } from 'rxjs';
import { RegistrarseServiceService } from 'src/app/service/registrarse-service.service';

@Component({
  selector: 'app-probando-bindings',
  templateUrl: './probando-bindings.component.html',
  styleUrls: ['./probando-bindings.component.css'],
})
export class ProbandoBindingsComponent {
  data$: Observable<string>;
  log$: Observable<boolean>;

  constructor(
    private bindingsService: BindingsServiceService,
    private registrarseService: RegistrarseServiceService
  ) {
    this.log$ = registrarseService.getRegisterComplete();
    this.data$ = bindingsService.getPersonaInfoObs();
  }
}
