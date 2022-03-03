import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { IInvoice } from '../employee-invoice.interface';

@Component({
  selector: 'app-invoicing-layout',
  templateUrl: './invoicing-layout.component.html',
  styleUrls: ['./invoicing-layout.component.scss']
})
export class InvoicingLayoutComponent implements OnInit {
  title = 'bobs-computer-repair-shop';
  isDarkTheme: boolean = true;
  invoice: IInvoice;
  header: Array<string> = ['description', 'qty', 'unitPrice', 'total', 'delete']

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  signOut() {

    this.cookieService.deleteAll();
    this.router.navigate(['./home']); // Navigates user home when signing out.

  }

}
