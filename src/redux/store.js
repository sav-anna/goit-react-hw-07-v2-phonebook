import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './reducers';
import { filterReducer } from './reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
