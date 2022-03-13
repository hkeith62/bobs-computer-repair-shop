 /**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 11 Mar 2021
 * Modified By:  Keith Hall
 * Description: Typescript logic for the home component.
 ***/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public executeSelectedChange = (event: any) => {
    console.log(event);
  }
}
