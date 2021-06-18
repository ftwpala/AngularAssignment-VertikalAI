import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addContact } from '../create-contacts.actions';
import { Contact } from '../object-interfaces/contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class MyCounterComponent {
  contacts$: Observable<Contact[]>;

  constructor(private store: Store<{ contacts: Array<Contact> }>) {
    this.contacts$ = store.select('contacts');
  }

  addContact(contact: Contact) {
    this.store.dispatch(addContact({ contact }));
  }
}
