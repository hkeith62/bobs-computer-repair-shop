 /**
 * Title: service-list.service.spec.ts
 * Author: Professor Krasso
 * Date: 1 Mar 2021
 * Modified By: Keith Hall
 * Description: Test file for the list service.
 */
import { TestBed } from '@angular/core/testing';

import { ServiceListService } from './service-list.service';

describe('ServiceListService', () => {
  let service: ServiceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
