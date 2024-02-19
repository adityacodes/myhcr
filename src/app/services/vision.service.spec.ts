import { TestBed } from '@angular/core/testing';

import { GoogleCloudVisionServiceService } from './vision.service';

describe('GoogleCloudVisionServiceService', () => {
  let service: GoogleCloudVisionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleCloudVisionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
