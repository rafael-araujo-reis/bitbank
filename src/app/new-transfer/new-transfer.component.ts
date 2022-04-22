import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})

export class NewTransferComponent {

  @Output() handleTransfer = new EventEmitter<any>();

  valueTransfer: number;
  countDestination: number;
  active: boolean;

  transferir() {
    const dataTransfer = {
      valueTransfer: this.valueTransfer,
      countDestination: this.countDestination
    };

    this.handleTransfer.emit(dataTransfer);
    this.clearFields();
  }

  clearFields() {
    this.valueTransfer = 0;
    this.countDestination = 0;
  }

  isValide($event) {
    this.active = $event !== null || $event > 0;
  }
}
