
/**
 * Title: service-list.component.ts
 * Author: Professor Krasso
 * Date: 11 March 2022
 * Modified By: Keith Hall
 * Description: Logic for the service-list component.
 */

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { IService } from '../service.interface';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ServiceListService } from './../service-list.service';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  form: FormGroup;

  title = 'bobs-computer-repair-shop';
  isDarkTheme: boolean = true;
  services: Array<IService>;
  part: number;
  hour: number;
  total: number = 0;
  laborServiceTotal: number = 0;


  constructor(
    private serviceListService: ServiceListService,
    private dialog: MatDialog,
    private _fb: FormBuilder,
    private cookieService: CookieService,
    private router: Router

  ) {

    this.services = serviceListService.getServices();

   }

  ngOnInit(): void {
  }

  signOut() {

    this.cookieService.deleteAll();
    this.router.navigate(['./home']); // Navigates user home when signing out.

  }

  calculateResults() {
    const { part, hour } = this;
    let total = 0;

    if (!!hour) {
      total = this.laborServiceTotal = hour * 50;
    }

    if (!!part) {
      total = +part + total;
    }

    this.services.forEach((el) => {
      if (el.checked) {
        total = total + el.price;
      }

    });

    if (!!total) {
      this.total = total;
      this.loadInvoices();
    }
  }

  reset() {
    this.part = null;
    this.hour = null;
    this.resetCalculatedValues();

    this.services = this.serviceListService.reset();
  }

  resetCalculatedValues() {
    this.total = this.laborServiceTotal = 0;
  }

  loadInvoices() {
    const { services, part, hour, total, laborServiceTotal } = this;

    // Launch Modal
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      data: {
        services: services.filter((el) => el.checked),
        part,
        hour,
        total,
        laborServiceTotal,
      },

      disableClose: true,
      width: '800px',

    });

  dialogRef.afterClosed().subscribe((result) => {
    if (result === 'confirm') {
      this.reset();
    }
    if (result === 'cancel') {
      this.resetCalculatedValues();
    }
  }

  )}
}

