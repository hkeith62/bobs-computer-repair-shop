/*
============================================
; Title: services.component.ts
; Author: Professor Krasso
; Date: 11 March 2022
; Modified By: Keith Hall
; Description: Logic for the Services.Component.
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { IService } from '../service.interface';
import { ServiceListService } from '../service-list.service';
import { CustomerInvoiceComponent } from '../customer-invoice/customer-invoice.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: Array<IService>; // services array
  parts: number; // parts tally
  hours: number; // hours tally
  total: number; // total parts & hours
  totalWithService: number; // hourly rate

  // get services from services.service
  constructor(
    private serviceListService: ServiceListService,
    private dialog: MatDialog
  ) {
    this.services = serviceListService.getServices();
  }

  // clear checkboxes
  clearCheckboxes(): void {
    this.services.forEach((service: IService) => {
      service.checked = false;
    });
  }

  // clear inputs
  clearInputs(): void {
    this.parts = 0;
    this.hours = 0;
  }

  // calculate total cost of services
  calculateTotalServices(): number {
    let totalServices = 0;
    this.services.forEach((service: IService) => {
      if (service.checked) {
        totalServices += service.price;
      }
    });
    return totalServices;
  }

  // calculate total parts & hours
  calculatePartsAndHours() {
    const { parts, hours } = this;
    let total = 0;

    if (!!hours) {
      total = this.totalWithService = hours * 50;
    }

    if (!!parts) {
      total = +parts + total;
    }

    this.services.forEach((service) => {
      if (service.checked) {
        total = total + service.price;
      }
    });

    if (!!total) {
      this.total = total;
      this.showInvoice();
    }
  }

  ngOnInit(): void {}

  // display invoice modal
  showInvoice() {
    const { services, parts, hours, total, totalWithService } = this;

    const dialogRef = this.dialog.open(CustomerInvoiceComponent, {
      data: {
        services: services.filter((service) => service.checked),
        parts,
        hours,
        total,
        totalWithService,
      },
      disableClose: true,
      width: '800px',
    });

    // subscribe to dialog state
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.clearInputs();
        this.clearCheckboxes();
      }
    });
  }
}

