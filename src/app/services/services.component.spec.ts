/*
============================================
; Title: services.component.spec.ts
; Author: Professor Krasso
; Date: 11 March 2022
; Modified By: Keith Hall
; Description: Test file for the Services.Component.
;===========================================
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
