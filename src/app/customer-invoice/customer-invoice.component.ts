/*
============================================
; Title:  invoice.component.ts
; Author: Professor Krasso
; Date: 12 March 2022
; Modified By: K. Hall
; Description: Invoice dialog component TS file
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IService } from '../service.interface';

@Component({
  selector: 'app-invoice',
  templateUrl: './customer-invoice.component.html',
  styleUrls: ['./customer-invoice.component.scss'],
})
export class CustomerInvoiceComponent implements OnInit {
  services: Array<IService>;
  today: Date;
  parts: number;
  hours: number;
  total: number;
  totalWithService: number;

  constructor(
    private dialogRef: MatDialogRef<CustomerInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {

    const { services, today, parts, hours, total, totalWithService } = data;
    this.services = services;
    this.today = new Date();
    this.parts = parseFloat(parts);
    this.hours = parseFloat(hours);
    this.total = parseFloat(total);
    this.totalWithService = parseFloat(totalWithService);
  }

  calculateTotalServices(): number {
    let totalServices = 0;
    this.services.forEach((service: IService) => {
      if (service.checked) {
        totalServices += service.price;
      }
    });
    return totalServices;
  }

  ngOnInit(): void {}
}

