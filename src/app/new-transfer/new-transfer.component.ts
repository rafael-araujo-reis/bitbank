import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})

export class NewTransferComponent{

  @Output() handleTransfer = new EventEmitter<any>()

  valueTransfer: number;
  countDestination: number;

  transferir(){
    const dataTransfer = {
      valueTransfer: this.valueTransfer,
      countDestination: this.countDestination
    }

    this.handleTransfer.emit(dataTransfer);
  }
}
