 /*
============================================
; Title: app.component.ts
; Author: Professor Krasso
; Date: 11 March 2022
; Modified By: Keith Hall
; Description: main app component.ts file.
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'bobs-computer-repair-shop';
  isDarkTheme: boolean = true;

  constructor() {}
  ngOnInit() {}

 }
