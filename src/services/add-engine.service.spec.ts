/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddEngineService } from './add-engine.service';

describe('Service: AddEngine', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddEngineService]
    });
  });

  it('should ...', inject([AddEngineService], (service: AddEngineService) => {
    expect(service).toBeTruthy();
  }));
});
