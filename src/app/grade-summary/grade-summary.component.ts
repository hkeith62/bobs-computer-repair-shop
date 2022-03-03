import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;


  constructor() {
    this.grade = 'Grade';
    this.course = 'Course';

  }

  ngOnInit(): void {
  }
}
