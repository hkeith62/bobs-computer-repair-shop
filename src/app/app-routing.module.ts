import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { InvoicingLayoutComponent } from './invoicing-layout/invoicing-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInGuard} from './sign-in.guard';
import { BaseNavComponent } from './base-nav/base-nav.component';

const routes: Routes = [
  {
    path: '',
    component: BaseNavComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ]
  },
  {
     path: 'invoicing-layout',
     component: InvoicingLayoutComponent,
     children: [
     {
        path: 'invoicing',
        component: InvoicingComponent,
      }
      ],
      canActivate: [SignInGuard]
    },

      {
        path: '**',
        redirectTo: 'session/not-found'
      },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
