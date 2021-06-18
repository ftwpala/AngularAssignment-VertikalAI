import { createAction, props } from '@ngrx/store';
import { Contact } from './object-interfaces/contact';

export const addContact = createAction(
  '[Contact Component] Added contact',
  props<{ contact: Contact }>()
);
