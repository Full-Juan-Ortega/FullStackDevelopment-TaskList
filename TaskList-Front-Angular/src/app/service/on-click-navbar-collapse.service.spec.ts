import { TestBed } from '@angular/core/testing';

import { OnClickNavbarCollapseService } from './on-click-navbar-collapse.service';

describe('OnClickNavbarCollapseService', () => {
  let service: OnClickNavbarCollapseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnClickNavbarCollapseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
