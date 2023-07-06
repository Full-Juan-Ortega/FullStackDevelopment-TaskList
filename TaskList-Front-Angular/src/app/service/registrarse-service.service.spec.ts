import { TestBed } from '@angular/core/testing';

import { RegistrarseServiceService } from './registrarse-service.service';

describe('RegistrarseServiceService', () => {
  let service: RegistrarseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
