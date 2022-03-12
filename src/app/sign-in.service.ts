 /*
============================================
; Title: sign-in.service.ts
; Author: Professor Krasso
; Date: 11 March 2022
; Modified By: Keith Hall
; Description: Sign-in service for Bob's Computer Repair App.
;===========================================
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  userIds: Array<number>;

  constructor() {
    this.userIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(userId: number) {
    return this.userIds.some(id => id === userId);

  }
}
