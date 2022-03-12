 /**
 * Title: invoice-dialog.component.ts
 * Author: Professor Krasso
 * Date: 11 Mar 2021
 * Modified By:  Keith Hall
 * Description: Logic for the invoice-dialog component.
 ***/


import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IService } from './../service.interface';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss'],
})
export class InvoiceDialogComponent implements OnInit {
  services: Array<IService>;
  part: number;
  hour: number;
  total: number;
  laborServiceTotal: number;

  constructor(
    private dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
	  
    const { services, part, hour, total, laborServiceTotal } = data;
    this.services = services;
    this.part = parseFloat(part);
    this.hour = parseFloat(hour);
    this.total = parseFloat(total);
    this.laborServiceTotal = parseFloat(laborServiceTotal);
  }

  ngOnInit(): void {}
}
