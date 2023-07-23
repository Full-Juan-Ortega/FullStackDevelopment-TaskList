import { Component } from '@angular/core';

@Component({
  selector: 'app-probando-bindings',
  templateUrl: './probando-bindings.component.html',
  styleUrls: ['./probando-bindings.component.css'],
})
export class ProbandoBindingsComponent {
  myModal = document.getElementById('myModal');
  myInput = document.getElementById('myInput');

  constructor() {}

  showAlerts() {
    alert('que carajo');
  }
}
