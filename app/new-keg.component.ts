import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-keg',
  templateUrl: 'app/keg-task.component.html'
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addBeer(name: string, brand: string, price: string, alcohol: string) {
    if (name==="" || brand === "" || price==="" || alcohol===""){
      alert("You must put values into each field!");
    } else {
    var convertedPrice = Number(price);
    var convertedAlcohol = Number(alcohol);
    var newKegToAdd: Keg = new Keg(name, brand, convertedPrice, convertedAlcohol);
    this.newKegSender.emit(newKegToAdd);
  }
}

}
