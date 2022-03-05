import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDetailsDialogComponent } from '../invoice-details-dialog/invoice-details-dialog.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  transcriptEntry: ITranscript;
  selectableServices: Array<string> = ['Password Reset - $39.99', 'Spyware Removal - $99.99', 'RAM Upgrade - $129.99', 'Software Installation - $49.99', 'Tune Up - $89.99', 'Keyboard Cleaning - $45.00', 'Disk Clean-Up - $149.99'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;;

  constructor(public dialog: MatDialog) {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
  }
  showInvoiceDetails() {
    const dialogRef = this.dialog.open(InvoiceDetailsDialogComponent, {
      disableClose: true,
      width: '800px'

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
      }
    });

  }

  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      console.log(entry.grade)
      switch(entry.grade) {
        case 'Password Reset - $39.99':
          console.log('its an a')
          gpa += 39.99;
          break;
        case 'Spyware Removal - $99.99':
          gpa += 99.99;
          break;
        case 'RAM Upgrade - $129.99':
          gpa += 129.99;
          break;
        case 'Software Installation - $49.99':
          gpa += 49.99;
          break;
        case 'Tune Up - $89.99':
          gpa += 89.99;
          break;
        case 'Keyboard Cleaning - $45.00':
          gpa += 45.00;
          break;
        case 'Disk Clean-Up - $149.99':
          gpa += 149.99;
          break;
      }
    }

    console.log(gpa);
    this.gpaTotal = gpa ; this.transcriptEntries;
    console.log(this.gpaTotal);
  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
