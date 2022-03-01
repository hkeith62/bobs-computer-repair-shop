import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  title = 'bobs-computer-repair-shop';
  isDarkTheme: boolean = true;

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {

    this.signinForm = this.fb.group({
      userId: ''
    })
  }
  onSubmit() {
    const formValues = this.signinForm.value;
    const userId = parseInt(formValues.userId);

    if (this.signinService.validate(userId)) {
      this.cookieService.set('session_user', userId.toString(), 1)
      this.router.navigate(['/invoicing-layout/invoicing']) // When user signs in they are routed to the invoicing page.
    } else {
      this.errorMessage = `The employee ID you entered is invalid, please try again.`;
    }
  }

}
