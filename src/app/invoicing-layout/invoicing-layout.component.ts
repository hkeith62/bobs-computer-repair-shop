import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { IInvoice } from '../employee-invoice.interface';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDetailsDialogComponent } from '../invoice-details-dialog/invoice-details-dialog.component';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-invoicing-layout',
  templateUrl: './invoicing-layout.component.html',
  styleUrls: ['./invoicing-layout.component.scss']
})
export class InvoicingLayoutComponent implements OnInit {

  form: FormGroup;

  title = 'bobs-computer-repair-shop';
  isDarkTheme: boolean = true;
  invoice: IInvoice;
  header: Array<string> = ['description', 'qty', 'unitPrice', 'total', 'delete']

  constructor(private cookieService: CookieService, private router: Router, private dialog: MatDialog, private _fb: FormBuilder) {

    this.form = this._fb.group({
      customerName: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      qty: new FormControl(),
      unitPrice: new FormControl(),
      labor: new FormControl(),
      total: new FormControl(),
      subTotal: new FormControl(),
      invoiceTax: new FormControl(),
    });
  }

  get customerNameErrors(): any {
    return this.form.get('customerName')?.touched && this.form.get('customerName')?.errors
  }
  get descriptionErrors(): any {
    return this.form.get('description')?.touched && this.form.get('description')?.errors
  }

  ngOnInit(): void {

    this.form.valueChanges.subscribe(change => {
      console.log(change);
    });
  }

    signOut() {

      this.cookieService.deleteAll();
      this.router.navigate(['./home']); // Navigates user home when signing out.

    }

  }