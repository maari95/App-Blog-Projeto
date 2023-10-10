import { TestBed } from '@angular/core/testing';

import { PubliService } from './publi.service';

describe('PubliService', () => {
  let service: PubliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
