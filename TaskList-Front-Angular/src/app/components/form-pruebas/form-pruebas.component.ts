import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-pruebas',
  templateUrl: './form-pruebas.component.html',
  styleUrls: ['./form-pruebas.component.css'],
})
export class FormPruebasComponent {
  form: any;
  contactForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(2)]],
  });

  CompVista: any = 4;
  VIstaComp: any;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('start ngOnInit function');
  }

  onSubmit() {
    console.log('Form ->', this.contactForm.value);
  }

  /*initForm(): FormGroup {
    console.log('start initForm function');
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(2)]],
    });
    console.log('form value' + this.form.value);
    return this.fb.group({
      email: ['', [Validators.required, Validators.minLength(2)]],
    });
  }*/
}
