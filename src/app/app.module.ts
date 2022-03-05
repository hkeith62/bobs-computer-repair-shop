import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InvoiceDetailsDialogComponent } from './invoice-details-dialog/invoice-details-dialog.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { CookieService } from 'ngx-cookie-service';
import { BaseNavComponent } from './base-nav/base-nav.component';
import { InvoicingLayoutComponent } from './invoicing-layout/invoicing-layout.component';
import { ServicesComponent } from './services/services.component';
import { GradeSummaryComponent } from './grade-summary/grade-summary.component';
import { MatSelectModule } from '@angular/material/select';
import { GpaComponent } from './gpa/gpa.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SignInComponent,
    RegisterComponent,
    SidenavListComponent,
    InvoiceDetailsDialogComponent,
    InvoicingComponent,
    NotFoundComponent,
    AuthLayoutComponent,
    BaseNavComponent,
    InvoicingLayoutComponent,
    ServicesComponent,
    GradeSummaryComponent,
    GpaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
