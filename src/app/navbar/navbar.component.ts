import { Component } from '@angular/core';
import { addContact } from '../create-contacts.actions';
import { Store } from '@ngrx/store';
import { Contact } from '../object-interfaces/contact';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class Navbar {
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  email: string = '';
  address: string = '';

  onAdd() {
    // Build object
    const contact: Contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      address: this.address,
    };

    // Would put validation here
    this.store.dispatch(addContact({ contact }));

    // Reset fields after successfull addition
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.email = '';
    this.address = '';
  }
  constructor(private store: Store) {}
}
