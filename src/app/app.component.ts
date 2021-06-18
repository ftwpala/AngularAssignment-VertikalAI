import { Component } from '@angular/core';
import { addContact } from './create-contacts.actions';
import { Store } from '@ngrx/store';
import { Contact } from './object-interfaces/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // private store: Store;

  title = 'angular-assignment-vertikalai';

  onAdd() {
    const contact: Contact = {
      firstName: '11111111',
      lastName: 'WdqBvFe',
      phoneNumber: '797',
      email: '36',
      address: '11',
    };
    this.store.dispatch(addContact({ contact }));
  }
  constructor(private store: Store) {}
}
