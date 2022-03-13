/*
============================================
; Title:  cutomer-invoice.component.spec.ts
; Author: Professor Krasso
; Date: 12 March 2022
; Modified By: K. Hall
; Description: Test file for the customer-invoice dialog component.
;===========================================
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInvoiceComponent } from './customer-invoice.component';

describe('CustomerInvoiceComponent', () => {
  let component: CustomerInvoiceComponent;
  let fixture: ComponentFixture<CustomerInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
