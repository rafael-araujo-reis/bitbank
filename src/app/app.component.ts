import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitbank';
  dataTransfer: any;

  transferBitBank($event){
    this.dataTransfer = $event;
  }
}
