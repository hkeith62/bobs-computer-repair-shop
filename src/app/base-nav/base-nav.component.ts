/*
============================================
; Title:  base-nav.component.ts
; Author: Professor Krasso
; Date: 12 March 2022
; Modified By: K. Hall
; Description: Typescript logic for the base-nav component.   
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-nav',
  templateUrl: './base-nav.component.html',
  styleUrls: ['./base-nav.component.scss']
})
export class BaseNavComponent implements OnInit {
  title = 'bobs-computer-repair-shop';
  isDarkTheme: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  public executeSelectedChange = (event: any) => {
    console.log(event);
  }
}


