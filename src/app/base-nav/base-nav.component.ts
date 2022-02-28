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

}
