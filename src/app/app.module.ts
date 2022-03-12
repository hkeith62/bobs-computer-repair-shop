/**
 * Title: app.module.ts
 * Author: Professor Krasso
 * Date: 11 Mar 2022
 * Modified By:  Keith Hall
 * Description: App Module
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { InvoiceDialogComponent } from './invoice-dialog/invoice-dialog.component';
import { ServicesComponent } from './services/services.component';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseNavComponent } from './base-nav/base-nav.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog'
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomerInvoiceComponent } from './customer-invoice/customer-invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SignInComponent,
    SidenavListComponent,
    NotFoundComponent,
    AuthLayoutComponent,
    BaseNavComponent,
    InvoiceDialogComponent,
    ServiceListComponent,
    ServicesComponent,
    CustomerInvoiceComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCheckboxModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
