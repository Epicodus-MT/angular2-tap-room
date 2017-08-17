import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'keg-list',
  templateUrl: 'app/keg-list.component.html',
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  pintButtonHasBeenClicked(kegToSubtract : Keg) {
    if (kegToSubtract.pints > 0) {
    kegToSubtract.pints -= 1;
  } else {
    alert("you have no more pints dammit!");
  }
  }
  shortageColor(currentKeg) {
    if (currentKeg.pints > 80) {
      return "list-group-item list-group-item-info";
    } else if (currentKeg.pints > 20) {
      return "list-group-item list-group-item-warning";
    } else {
      return "list-group-item list-group-item-danger";
    }
  }
}
