import { createAction, props } from '@ngrx/store';
import { Contact } from './object-interfaces/contact';

export const addContact = createAction(
  '[Contact Component] Added contact',
  props<{ contact: Contact }>()
);

export const InitContacts = createAction(
  '[Contact Component] Initialized contacts',
  props<{ contact: Contact }>()
);
// export const decrement = createAction('[Contact Component] Decrement');
// export const reset = createAction('[Contact Component] Reset');
// export const initialize = createAction('[Contact Component] Initialize');
