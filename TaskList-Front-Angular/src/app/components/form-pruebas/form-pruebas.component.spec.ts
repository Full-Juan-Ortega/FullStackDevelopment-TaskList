import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPruebasComponent } from './form-pruebas.component';

describe('FormPruebasComponent', () => {
  let component: FormPruebasComponent;
  let fixture: ComponentFixture<FormPruebasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPruebasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
