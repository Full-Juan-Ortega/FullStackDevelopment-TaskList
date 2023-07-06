import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbandoBindingsComponent } from './probando-bindings.component';

describe('ProbandoBindingsComponent', () => {
  let component: ProbandoBindingsComponent;
  let fixture: ComponentFixture<ProbandoBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbandoBindingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbandoBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
