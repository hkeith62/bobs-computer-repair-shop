import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicingLayoutComponent } from './invoicing-layout.component';

describe('InvoicingLayoutComponent', () => {
  let component: InvoicingLayoutComponent;
  let fixture: ComponentFixture<InvoicingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicingLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
