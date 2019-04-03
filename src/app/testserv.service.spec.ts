import { TestBed, inject } from '@angular/core/testing';

import { TestservService } from './testserv.service';

describe('TestservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestservService]
    });
  });

  it('should be created', inject([TestservService], (service: TestservService) => {
    expect(service).toBeTruthy();
  }));
});
