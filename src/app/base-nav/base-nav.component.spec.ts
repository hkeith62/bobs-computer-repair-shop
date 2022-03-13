/*
============================================
; Title:  base-nav.component.spec.ts
; Author: Professor Krasso
; Date: 12 March 2022
; Modified By: K. Hall
; Description: Test file for the base-nav component.   
;===========================================
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNavComponent } from './base-nav.component';

describe('BaseNavComponent', () => {
  let component: BaseNavComponent;
  let fixture: ComponentFixture<BaseNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
