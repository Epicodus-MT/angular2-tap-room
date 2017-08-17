
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-keg',
  templateUrl: 'app/edit-keg.component.html',
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
  refilleKegClicked(childSelectedKeg) {
    childSelectedKeg.pints=124;
  }
}
