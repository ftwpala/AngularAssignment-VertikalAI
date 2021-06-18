import { createReducer, on, Action } from '@ngrx/store';
import * as ContactsActions from './create-contacts.actions';
import { Contact } from './object-interfaces/contact';

export const initialState: Contact[] = [
  {
    firstName: '1',
    lastName: 'WdqBvFe',
    phoneNumber: '797',
    email: '36',
    address: '11',
  },
  {
    firstName: '2',
    lastName: 'WdqBvFeWdqBvFe',
    phoneNumber: '797',
    email: '36',
    address: '123',
  },
  {
    firstName: '3',
    lastName: 'WdqBvFeWdqBvFeWdqBvFe',
    phoneNumber: '797',
    email: '36',
    address: '456',
  },
  {
    firstName: '4',
    lastName: 'WdqBvFeWdqBvFeWdqBvFeWdqBvFe',
    phoneNumber: '797',
    email: '36',
    address: '678',
  },
  {
    firstName: '5',
    lastName: 'WdqBvFeWdqBvFeWdqBvFeWdqBvFeWdqBvFe',
    phoneNumber: '797',
    email: '36',
    address: '8789',
  },
  {
    firstName: '6',
    lastName: 'WdqBvFeWdqBvFeWdqBvFeWdqBvFeWdqBvFeWdqBvFe',
    phoneNumber: '797',
    email: '36',
    address: '999',
  },
];

const _counterReducer = createReducer(
  initialState,
  on(ContactsActions.addContact, (state, { contact }) =>
    [...state].concat(contact)
  )
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
