import { TestBed, inject } from '@angular/core/testing';

import { DatapointService } from './datapoint.service';

describe('DatapointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatapointService]
    });
  });

  it('should be created', inject([DatapointService], (service: DatapointService) => {
    expect(service).toBeTruthy();
  }));
});
