import { TestBed } from '@angular/core/testing';

import { BindingsServiceService } from './bindings-service.service';

describe('BindingsServiceService', () => {
  let service: BindingsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BindingsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
