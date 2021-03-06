import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }    from '@angular/forms';
import { KegListComponent} from './keg-list.component';
import { EditKegComponent} from './edit-keg.component';
import { PintSoldComponent } from './pint-sold.component';
import { NewKegComponent} from './new-keg.component';

@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
                  KegListComponent,
                  EditKegComponent,
                  PintSoldComponent,
                  NewKegComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
