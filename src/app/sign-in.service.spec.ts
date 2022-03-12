 /*
============================================
; Title: sign-in.servic.spec.ts
; Author: Professor Krasso
; Date: 11 March 2022
; Modified By: Keith Hall
; Description: Test file for the sign-in service.
;===========================================
*/
import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
