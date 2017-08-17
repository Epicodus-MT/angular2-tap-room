import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  subtitle: string = 'Log Pint Pours and Track Keg Status';

  masterKegList: Keg[] = [
    new Keg('SpaceDust', 'Elysian', 8, 8.2),
    new Keg('Scrimshaw', 'North Coast', 6, 5),
    new Keg('OctoberFest', 'Sam Adams', 7, 6),
    new Keg('Sunbru', 'FourPeak', 4, 8)
  ];

  selectedKeg: Keg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }
  subtractPint(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
