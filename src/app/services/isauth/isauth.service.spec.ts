/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IsauthService } from './isauth.service';

describe('IsauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsauthService]
    });
  });

  it('should ...', inject([IsauthService], (service: IsauthService) => {
    expect(service).toBeTruthy();
  }));
});
