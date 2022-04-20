import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitbank';
  transfers: any[] = [];

  transferBitBank($event) {
    const transfer = { ...$event, dateTransfer: new Date() };
    this.transfers.push(transfer);
  }
}
