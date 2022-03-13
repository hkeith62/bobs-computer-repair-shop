 /**
 * Title: invoice-dialog.component.spec.ts
 * Author: Professor Krasso
 * Date: 11 Mar 2021
 * Modified By:  Keith Hall
 * Description: Test file for the invoice-dialog component.
 ***/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceDialogComponent } from './invoice-dialog.component';

describe('InvoiceDialogComponent', () => {
  let component: InvoiceDialogComponent;
  let fixture: ComponentFixture<InvoiceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
